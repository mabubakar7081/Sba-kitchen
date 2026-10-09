import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  aiClient = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// 1. AI Chef Conversational Chat API (Supports Urdu, Hindi, English)
app.post('/api/ai/chat', async (req, res) => {
  const { message, language = 'ur', conversationHistory = [] } = req.body || {};
  try {
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!aiClient) {
      // Offline fallback culinary responses
      const fallbackResponse = language === 'ur'
        ? 'معذرت، اے آئی سروس کنیکٹ نہیں ہو سکی۔ تاہم آپ ایس بی اے کچن کی 170+ ریسیپیز میں سے انتخاب کر سکتے ہیں یا پینٹری چیک کر سکتے ہیں۔'
        : language === 'hi'
        ? 'माफ़ कीजिए, एआई सेवा कनेक्ट नहीं हो सकी। आप एसबीए किचन की 170+ रेसिपीज में से चुन सकते हैं।'
        : 'Could not connect to Gemini service. Please explore our 170+ recipes in the library.';
      return res.json({ reply: fallbackResponse });
    }

    const systemInstruction = `You are "SBA AI Chef" (ایس بی اے اے آئی شیف / एसबीए एआई शेफ), an expert culinary assistant inside the SBA Kitchen app.
You specialize in Pakistani, Indian, Desi, and international cooking, kitchen management, pantry utilization, spice balancing, and cooking hacks.
Language instruction: The user has selected ${language === 'ur' ? 'Urdu (اردو)' : language === 'hi' ? 'Hindi (हिन्दी)' : 'English'}.
CRITICAL FOR ACCESSIBILITY:
- Your output will also be READ ALOUD using voice text-to-speech for users who cannot read.
- Keep your answers warm, encouraging, conversational, practical, and clear.
- Avoid unnecessary markdown symbols, complex symbols, or heavy tables. Use easy bullet points and short sentences that sound natural when spoken.
- If asked what to cook with specific ingredients, suggest 1 or 2 specific tasty dishes with quick prep ideas.
- If asked about a cooking emergency (too salty, burnt bottom, curry too spicy, watery gravy), give immediate practical fixes.`;

    const contents: any[] = [];
    if (Array.isArray(conversationHistory) && conversationHistory.length > 0) {
      for (const turn of conversationHistory.slice(-4)) {
        if (turn.role && turn.text) {
          contents.push({
            role: turn.role === 'user' ? 'user' : 'model',
            parts: [{ text: turn.text }],
          });
        }
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || '';
    return res.json({ reply });
  } catch (error: any) {
    console.error('Gemini chat error:', error);
    const culinaryFallback = language === 'ur'
      ? 'معذرت، اے آئی سروس اس وقت مصروف ہے۔ آپ کچن کی 170+ ریسیپیز براؤز کر سکتے ہیں یا تھوڑی دیر بعد دوبارہ آواز سے پوچھ سکتے ہیں۔'
      : language === 'hi'
      ? 'माफ़ कीजिए, एआई सेवा इस समय व्यस्त है। आप हमारी 170+ रेसिपीज देख सकते हैं या थोड़ी देर बाद दोबारा पूछें।'
      : 'The AI model is currently busy. Please explore our 170+ recipes or try again in a moment.';

    return res.json({ 
      reply: culinaryFallback,
      transientError: true
    });
  }
});

// 2. Custom Recipe Generator on Demand ("کچھ بھی بنا سکے")
app.post('/api/ai/generate-recipe', async (req, res) => {
  try {
    const { ingredients = [], preferences = '', language = 'ur' } = req.body;

    if (!aiClient) {
      return res.status(503).json({ error: 'AI service unavailable' });
    }

    const systemInstruction = `You are SBA Kitchen's automated culinary creator.
Given ingredients and optional preferences, create a delicious, complete authentic recipe.
Output MUST be strict JSON conforming to this structure:
{
  "title": "Recipe Title in user's language",
  "titleEn": "English Title",
  "description": "Short tempting description",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 25,
  "servings": 4,
  "difficulty": "Easy" | "Medium" | "Hard",
  "diet": "Vegetarian" | "Non-Veg" | "Vegan",
  "category": "Curry" | "Rice" | "Breads" | "Beverages" | "Desserts" | "Snacks" | "Breakfast",
  "ingredients": [
    { "name": "Item name", "amount": 1, "unit": "tsp/tbsp/cup/g/pcs" }
  ],
  "steps": [
    { "stepNumber": 1, "instruction": "Step instruction", "timerMinutes": 5, "tip": "optional tip" }
  ],
  "spokenSummary": "A friendly 2-3 sentence overview designed to be read out loud to someone who cannot read."
}
Return ONLY valid JSON.`;

    const prompt = `Available ingredients: ${ingredients.join(', ')}. User notes or preferences: ${preferences || 'make something quick and delicious'}. Language: ${language}.`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
      },
    });

    const rawText = response.text || '{}';
    const parsedRecipe = JSON.parse(rawText);
    return res.json({ recipe: parsedRecipe });
  } catch (error: any) {
    console.error('Generate recipe error:', error);
    return res.status(500).json({ error: error.message || 'Failed to generate recipe' });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  const http = await import('http');
  const httpServer = http.createServer(app);

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: {
          server: httpServer,
        },
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`SBA Kitchen server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
