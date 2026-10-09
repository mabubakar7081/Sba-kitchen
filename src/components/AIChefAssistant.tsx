import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  MicOff, 
  Send, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ChefHat, 
  Flame, 
  BookOpen, 
  Plus, 
  Check, 
  AlertCircle, 
  Clock, 
  Utensils, 
  RotateCcw,
  Play
} from 'lucide-react';
import { useKitchen } from '../context/KitchenContext';
import { VoiceRecognizer, voiceNarrator, isSpeechRecognitionSupported, isSpeechSynthesisSupported } from '../utils/speech';
import { Recipe } from '../types';

interface AIChefAssistantProps {
  onOpenRecipe?: (recipe: Recipe) => void;
  onStartCooking?: (recipe: Recipe) => void;
}

export const AIChefAssistant: React.FC<AIChefAssistantProps> = ({ onOpenRecipe, onStartCooking }) => {
  const { language, addRecipe, pantryItems } = useKitchen();

  const [activeMode, setActiveMode] = useState<'chat' | 'generate'>('chat');
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [speechError, setSpeechError] = useState<string | null>(null);

  // Chat conversation
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'model'; text: string; id: string }>>([
    {
      id: 'welcome',
      role: 'model',
      text: language === 'ur'
        ? 'خوش آمدید! میں ہوں آپ کا ایس بی اے اے آئی شیف (SBA AI Chef)۔ آپ آواز سے بول کر یا لکھ کر کچن کا کوئی بھی سوال پوچھ سکتے ہیں، ریسیپی بنوا سکتے ہیں یا کھانے کا مشورہ لے سکتے ہیں۔ جو پڑھ نہیں سکتے، وہ اوپر دیا گیا اسپیکر کا بٹن دبا کر میری آواز بھی سن سکتے ہیں!'
        : language === 'hi'
        ? 'स्वागत है! मैं हूँ आपका एसबीए एआई शेफ (SBA AI Chef)। आप बोलकर या लिखकर रसोई का कोई भी सवाल पूछ सकते हैं या कोई नई रेसिपी बनवा सकते हैं। जो पढ़ना नहीं जानते, वे स्पीकर बटन दबाकर मेरी आवाज़ सुन सकते हैं!'
        : 'Welcome! I am your SBA AI Chef. You can ask anything by voice or text, get instant cooking fixes, or have me create recipes from whatever is in your fridge. Click the speaker button to hear any answer read aloud!'
    }
  ]);

  // Recipe generation state
  const [generatedRecipe, setGeneratedRecipe] = useState<any | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const recognizerRef = useRef<VoiceRecognizer | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    recognizerRef.current = new VoiceRecognizer();
    const unsubscribe = voiceNarrator.subscribe((speaking) => {
      setIsSpeaking(speaking);
    });
    return () => {
      unsubscribe();
      voiceNarrator.stop();
      if (recognizerRef.current) {
        recognizerRef.current.stopListening();
      }
    };
  }, []);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const quickPrompts = language === 'ur' ? [
    'آج رات کے کھانے کے لیے کچھ آسان اور جلدی بننے والا بتاؤ 🍲',
    'میرے پاس چکن اور پیاز ہے، کیا بناؤں؟ 🍗',
    'سالن میں نمک تیز ہو جائے تو کیا کریں؟ 🧂',
    'بغیر انڈے کے آملیٹ یا ناشتہ کیسے بنائیں؟ 🍳'
  ] : language === 'hi' ? [
    'आज रात के खाने के लिए कुछ आसान और स्वादिष्ट बताओ 🍲',
    'मेरे पास चिकन और प्याज है, क्या बनाऊं? 🍗',
    'सब्जी में नमक तेज हो जाए तो क्या करें? 🧂',
    '10 मिनट में बनने वाला हेल्दी नाश्ता बताओ 🍳'
  ] : [
    'What easy dinner can I cook tonight? 🍲',
    'I have chicken, onion and potatoes, what can I make? 🍗',
    'How to fix a curry that is too salty or spicy? 🧂',
    'Suggest a healthy 10-minute breakfast 🍳'
  ];

  // Voice Input Toggle
  const toggleVoiceInput = () => {
    if (isListening) {
      recognizerRef.current?.stopListening();
      setIsListening(false);
    } else {
      setSpeechError(null);
      if (!isSpeechRecognitionSupported()) {
        setSpeechError(language === 'ur' ? 'اس براؤزر میں آواز کی شناخت دستیاب نہیں ہے۔' : 'Speech recognition not supported in this browser.');
        return;
      }
      setIsListening(true);
      recognizerRef.current?.startListening(
        language,
        (transcript, isFinal) => {
          setInputText(transcript);
          if (isFinal) {
            setIsListening(false);
          }
        },
        (err) => {
          setSpeechError(err);
          setIsListening(false);
        },
        () => {
          setIsListening(false);
        }
      );
    }
  };

  // Text-to-speech for model answers (Voice Readout)
  const handleReadAloud = (text: string) => {
    if (isSpeaking) {
      voiceNarrator.stop();
    } else {
      voiceNarrator.speak(text, language);
    }
  };

  // Send message to Gemini chat
  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || loading) return;

    setInputText('');
    setSpeechError(null);

    const userMessage = { id: Date.now().toString(), role: 'user' as const, text: query };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          language,
          conversationHistory: messages.map(m => ({ role: m.role, text: m.text }))
        })
      });

      const data = await res.json();
      const replyText = data.reply || (language === 'ur' ? 'معذرت، رابطہ نہیں ہو سکا۔' : 'Could not get response.');
      
      const botMessage = { id: (Date.now() + 1).toString(), role: 'model' as const, text: replyText };
      setMessages(prev => [...prev, botMessage]);

      // Automatically speak the response if the user asked via voice
      if (isListening || textToSend === undefined) {
        voiceNarrator.speak(replyText, language);
      }
    } catch (err: any) {
      console.error('Chat error:', err);
      const fallback = language === 'ur'
        ? 'انٹرنیٹ کنکشن کا مسئلہ ہے، براہ کرم دوبارہ کوشش کریں۔'
        : 'Network issue. Please try again.';
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: fallback }]);
    } finally {
      setLoading(false);
    }
  };

  // Generate customized recipe on demand ("کچھ بھی بنا سکے")
  const handleGenerateRecipe = async () => {
    if (loading) return;
    setLoading(true);
    setGeneratedRecipe(null);
    setSavedSuccess(false);

    try {
      // Gather in-stock items from pantry as context
      const inStockIngredients = pantryItems.filter(p => p.inStock).map(p => language === 'ur' ? p.nameUr : p.nameEn);
      
      const res = await fetch('/api/ai/generate-recipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ingredients: inStockIngredients.length > 0 ? inStockIngredients : ['Chicken', 'Tomatoes', 'Onions', 'Spices'],
          preferences: inputText || 'make a delicious homestyle dish with rich aroma',
          language
        })
      });

      const data = await res.json();
      if (data.recipe) {
        setGeneratedRecipe(data.recipe);
        // Automatically speak friendly audio overview for accessibility
        if (data.recipe.spokenSummary) {
          voiceNarrator.speak(data.recipe.spokenSummary, language);
        }
      }
    } catch (err) {
      console.error('Generate recipe error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Save generated recipe to local / cloud recipe collection
  const handleSaveGeneratedToRecipes = () => {
    if (!generatedRecipe) return;

    const newRecipe: Recipe = {
      id: `ai_${Date.now()}`,
      titleEn: generatedRecipe.titleEn || generatedRecipe.title,
      titleUr: generatedRecipe.title,
      titleHi: generatedRecipe.title,
      descriptionEn: generatedRecipe.description || 'AI Created Recipe',
      descriptionUr: generatedRecipe.description || 'اے آئی کی تیار کردہ ریسیپی',
      descriptionHi: generatedRecipe.description || 'एआई की बनाई रेसिपी',
      prepTimeMinutes: generatedRecipe.prepTimeMinutes || 15,
      cookTimeMinutes: generatedRecipe.cookTimeMinutes || 25,
      defaultServings: generatedRecipe.servings || 4,
      difficulty: generatedRecipe.difficulty || 'Easy',
      diet: generatedRecipe.diet || 'Non-Veg',
      cuisine: 'SBA AI Chef Special',
      caloriesPerServing: 350,
      category: generatedRecipe.category || 'Curry',
      imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      ingredients: (generatedRecipe.ingredients || []).map((ing: any, idx: number) => ({
        id: `ai_ing_${idx}`,
        nameEn: ing.name,
        nameUr: ing.name,
        nameHi: ing.name,
        amount: ing.amount || 1,
        unit: ing.unit || 'units',
        optional: false
      })),
      steps: (generatedRecipe.steps || []).map((st: any, idx: number) => ({
        stepNumber: idx + 1,
        instructionEn: st.instruction,
        instructionUr: st.instruction,
        instructionHi: st.instruction,
        timerMinutes: st.timerMinutes || 5,
        tip: st.tip
      }))
    };

    addRecipe(newRecipe);
    setSavedSuccess(true);
    if (onOpenRecipe) {
      setTimeout(() => onOpenRecipe(newRecipe), 600);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Top Header & Assistant Banner */}
      <div className="bg-linear-to-r from-amber-600 via-orange-600 to-rose-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-inner">
              <ChefHat className="w-9 h-9 text-amber-200 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                  {language === 'ur' ? 'ایس بی اے اے آئی وائس شیف' : language === 'hi' ? 'एसबीए एआई वॉयस शेफ' : 'SBA AI Voice Chef'}
                </h2>
                <span className="bg-white/25 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border border-white/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  Voice & Readout
                </span>
              </div>
              <p className="text-amber-100 text-xs sm:text-sm mt-1 max-w-xl">
                {language === 'ur'
                  ? 'بول کر یا لکھ کر پوچھیں، ریسیپیز بنوائیں، اور ہر جواب آواز سے سنیں (جس کو پڑھنا نہ آتا ہو وہ بھی آسانی سے سن کر پکا سکے)۔'
                  : language === 'hi'
                  ? 'बोलकर या लिखकर पूछें, रेसिपीज बनवाएं, और हर जवाब आवाज से सुनें।'
                  : 'Talk or type, invent recipes from any fridge ingredients, and listen to spoken instructions.'}
              </p>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex bg-black/25 p-1 rounded-2xl border border-white/20 shrink-0">
            <button
              onClick={() => setActiveMode('chat')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeMode === 'chat'
                  ? 'bg-white text-stone-900 shadow-md'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Mic className="w-4 h-4 text-amber-600" />
              <span>{language === 'ur' ? 'آواز سے بات چیت' : language === 'hi' ? 'वॉयस चैट' : 'Voice Chat'}</span>
            </button>
            <button
              onClick={() => setActiveMode('generate')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeMode === 'generate'
                  ? 'bg-white text-stone-900 shadow-md'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>{language === 'ur' ? 'کچھ بھی بنائیں' : language === 'hi' ? 'कुछ भी बनाएं' : 'Invent Recipe'}</span>
            </button>
          </div>
        </div>
      </div>

      {speechError && (
        <div className="mb-4 bg-rose-50 border border-rose-200 text-rose-800 p-3.5 rounded-2xl text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{speechError}</span>
        </div>
      )}

      {/* MODE 1: CONVERSATIONAL VOICE CHEF */}
      {activeMode === 'chat' && (
        <div className="bg-white rounded-3xl border border-amber-200/80 shadow-md overflow-hidden flex flex-col h-[580px]">
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-amber-50/20">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="w-9 h-9 rounded-2xl bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shrink-0 shadow-sm mt-1">
                    <ChefHat className="w-5 h-5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-3xl p-4 sm:p-5 text-sm leading-relaxed shadow-xs ${
                    msg.role === 'user'
                      ? 'bg-stone-900 text-white rounded-tr-xs font-medium'
                      : 'bg-white text-stone-800 border border-amber-200/70 rounded-tl-xs shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>

                  {/* Audio Readout Button on Model Responses (Accessibility for Non-Readers) */}
                  {msg.role === 'model' && (
                    <div className="mt-3 pt-3 border-t border-amber-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleReadAloud(msg.text)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                          isSpeaking
                            ? 'bg-rose-500 text-white animate-pulse'
                            : 'bg-amber-100/80 hover:bg-amber-200 text-amber-900'
                        }`}
                        title="Listen to this response out loud"
                      >
                        {isSpeaking ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5" />
                            <span>{language === 'ur' ? 'آواز بند کریں' : language === 'hi' ? 'आवाज बंद करें' : 'Stop Audio'}</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                            <span>{language === 'ur' ? '🔊 بول کر سنیں' : language === 'hi' ? '🔊 बोलकर सुनें' : '🔊 Listen Aloud'}</span>
                          </>
                        )}
                      </button>

                      <span className="text-[11px] text-stone-400 font-medium">
                        {language === 'ur' ? 'ایس بی اے شیف' : language === 'hi' ? 'एसबीए शेफ' : 'SBA Chef'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start items-center">
                <div className="w-9 h-9 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 animate-bounce">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div className="bg-white border border-amber-200 p-4 rounded-3xl rounded-tl-xs shadow-sm text-xs font-bold text-amber-800 flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping" />
                  <span>
                    {language === 'ur'
                      ? 'شیف سوچ رہا ہے اور ریسیپی تیار کر رہا ہے...'
                      : language === 'hi'
                      ? 'शेफ सोच रहा है...'
                      : 'Chef is thinking & preparing your cooking advice...'}
                  </span>
                </div>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Quick Prompts Suggestions */}
          <div className="px-4 py-2 bg-amber-50/50 border-t border-amber-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-bold text-stone-500 shrink-0">
              {language === 'ur' ? 'فوری سوالات:' : language === 'hi' ? 'त्वरित सवाल:' : 'Quick Ideas:'}
            </span>
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="shrink-0 bg-white hover:bg-amber-100/70 border border-amber-200/80 px-3 py-1 rounded-full text-[11px] font-semibold text-stone-700 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input & Voice Controls */}
          <div className="p-3 sm:p-4 bg-white border-t border-amber-200 flex items-center gap-2">
            {/* Big Mic Button */}
            <button
              onClick={toggleVoiceInput}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shrink-0 shadow-md ${
                isListening
                  ? 'bg-rose-500 text-white animate-pulse ring-4 ring-rose-200 scale-105'
                  : 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300'
              }`}
              title={isListening ? 'Stop listening' : 'Speak into microphone'}
            >
              {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6 stroke-[2.2]" />}
            </button>

            {/* Input field */}
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={
                isListening
                  ? (language === 'ur' ? 'سن رہا ہوں... بولئے!' : language === 'hi' ? 'सुन रहा हूँ... बोलिए!' : 'Listening... speak now!')
                  : (language === 'ur' ? 'آواز کے لیے مائیک دبائیں یا یہاں لکھیں...' : language === 'hi' ? 'माइक दबाकर बोलें या लिखें...' : 'Speak with mic or type recipe question...')
              }
              className="flex-1 bg-stone-50 border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 rounded-2xl px-4 py-3 text-sm font-medium outline-hidden transition-all"
            />

            {/* Send Button */}
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputText.trim() || loading}
              className="w-12 h-12 rounded-2xl bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-stone-950 font-black flex items-center justify-center disabled:opacity-40 transition-all shadow-md shrink-0 active:scale-95"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* MODE 2: CUSTOM RECIPE GENERATOR ("کچھ بھی بنا سکے") */}
      {activeMode === 'generate' && (
        <div className="bg-white rounded-3xl border border-amber-200/80 shadow-md p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900">
              {language === 'ur' ? 'فریج کے اجزاء سے نئی ریسیپی بنائیں' : language === 'hi' ? 'घर की सामग्री से नई रेसिपी बनाएं' : 'Invent Custom Recipe On Demand'}
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              {language === 'ur'
                ? 'اپنے پاس موجود اشیاء بتائیں یا بول کر بتائیں، اے آئی شیف منٹوں میں مکمل ریسیپی بنا دے گا جسے سن کر کوئی بھی پکا سکتا ہے!'
                : language === 'hi'
                ? 'अपनी सामग्री बताएं, एआई तुरंत पूरी रेसिपी बना देगा।'
                : 'Mention any ingredients you have, and the AI Chef will construct an authentic customized recipe.'}
            </p>
          </div>

          {/* Input Box for ingredients / cravings */}
          <div className="max-w-2xl mx-auto flex items-center gap-2">
            <button
              onClick={toggleVoiceInput}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shrink-0 shadow-md ${
                isListening
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300'
              }`}
            >
              <Mic className="w-5 h-5" />
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={
                language === 'ur'
                  ? 'مثال: چکن، ٹماٹر، دہی اور ہری مرچ سے کچھ کرسپی بناؤ...'
                  : language === 'hi'
                  ? 'उदा: पनीर, शिमला मिर्च और प्याज से कुछ तीखा बनाओ...'
                  : 'e.g. Chicken, curd, onions, make something quick & spicy...'
              }
              className="flex-1 bg-stone-50 border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 rounded-2xl px-4 py-3 text-sm font-medium outline-hidden"
            />

            <button
              onClick={handleGenerateRecipe}
              disabled={loading}
              className="px-5 py-3 rounded-2xl bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-stone-950 font-black text-sm shadow-md transition-all active:scale-95 disabled:opacity-50 flex items-center gap-1.5 shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>{loading ? (language === 'ur' ? 'بن رہی ہے...' : 'Creating...') : (language === 'ur' ? 'ریسیپی بنائیں' : 'Create')}</span>
            </button>
          </div>

          {/* Generated Recipe Display Card */}
          {generatedRecipe && (
            <div className="max-w-3xl mx-auto bg-amber-50/50 rounded-3xl border border-amber-200 p-6 sm:p-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-200/70 pb-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-200/70 px-2.5 py-0.5 rounded-full">
                    {generatedRecipe.category || 'Special Recipe'}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                    {generatedRecipe.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {generatedRecipe.description}
                  </p>
                </div>

                {/* Voice narration for non-readers */}
                <button
                  onClick={() => {
                    const fullText = `${generatedRecipe.title}۔ ${generatedRecipe.description}۔ تیاری کا وقت ${generatedRecipe.prepTimeMinutes} منٹ۔ اجزاء: ${(generatedRecipe.ingredients || []).map((i: any) => `${i.name} ${i.amount} ${i.unit}`).join(', ')}۔ پکانے کا طریقہ: ${(generatedRecipe.steps || []).map((s: any) => `قدم نمبر ${s.stepNumber}: ${s.instruction}`).join('۔ ')}`;
                    handleReadAloud(fullText);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2 ${
                    isSpeaking
                      ? 'bg-rose-500 text-white animate-pulse'
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  <Volume2 className="w-4 h-4 text-amber-300" />
                  <span>
                    {isSpeaking 
                      ? (language === 'ur' ? 'آواز روکیں' : 'Stop Audio') 
                      : (language === 'ur' ? '🔊 پوری ریسیپی سنیں' : language === 'hi' ? '🔊 पूरी रेसिपी सुनें' : '🔊 Listen to Full Recipe')}
                  </span>
                </button>
              </div>

              {/* Recipe Meta */}
              <div className="grid grid-cols-3 gap-3 my-5 text-center">
                <div className="bg-white p-3 rounded-2xl border border-amber-200/60 shadow-xs">
                  <Clock className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                  <span className="text-[11px] text-stone-500 font-semibold block">Time</span>
                  <span className="text-xs font-bold text-stone-800">
                    {(generatedRecipe.prepTimeMinutes || 10) + (generatedRecipe.cookTimeMinutes || 20)} mins
                  </span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-amber-200/60 shadow-xs">
                  <Utensils className="w-4 h-4 text-orange-600 mx-auto mb-1" />
                  <span className="text-[11px] text-stone-500 font-semibold block">Servings</span>
                  <span className="text-xs font-bold text-stone-800">
                    {generatedRecipe.servings || 4} Persons
                  </span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-amber-200/60 shadow-xs">
                  <Flame className="w-4 h-4 text-rose-600 mx-auto mb-1" />
                  <span className="text-[11px] text-stone-500 font-semibold block">Diet</span>
                  <span className="text-xs font-bold text-stone-800">
                    {generatedRecipe.diet || 'Delicious'}
                  </span>
                </div>
              </div>

              {/* Ingredients & Steps */}
              <div className="grid sm:grid-cols-2 gap-6 my-6">
                <div className="bg-white p-4 rounded-2xl border border-amber-200/70 shadow-xs">
                  <h5 className="font-extrabold text-xs uppercase tracking-wider text-amber-800 mb-3 flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-amber-600" />
                    <span>{language === 'ur' ? 'اجزاء (Ingredients)' : 'Ingredients'}</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {(generatedRecipe.ingredients || []).map((ing: any, i: number) => (
                      <li key={i} className="flex items-center justify-between border-b border-stone-100 pb-1">
                        <span>{ing.name}</span>
                        <span className="font-bold text-stone-900">{ing.amount} {ing.unit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-amber-200/70 shadow-xs">
                  <h5 className="font-extrabold text-xs uppercase tracking-wider text-amber-800 mb-3 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-orange-600" />
                    <span>{language === 'ur' ? 'پکانے کا طریقہ (Steps)' : 'Instructions'}</span>
                  </h5>
                  <ol className="space-y-2 text-xs text-stone-700">
                    {(generatedRecipe.steps || []).map((st: any, i: number) => (
                      <li key={i} className="flex gap-2">
                        <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 font-extrabold flex items-center justify-center shrink-0 text-[10px]">
                          {st.stepNumber || i + 1}
                        </span>
                        <span>{st.instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                <button
                  onClick={handleSaveGeneratedToRecipes}
                  disabled={savedSuccess}
                  className={`px-4 py-2.5 rounded-xl font-extrabold text-xs transition-all shadow-md flex items-center gap-2 ${
                    savedSuccess
                      ? 'bg-emerald-600 text-white'
                      : 'bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-stone-950'
                  }`}
                >
                  {savedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>{language === 'ur' ? 'ریسیپیز میں محفوظ ہو گئی!' : 'Saved to Recipes!'}</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                      <span>{language === 'ur' ? 'میری ریسیپیز میں شامل کریں' : 'Save to My Recipes'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
