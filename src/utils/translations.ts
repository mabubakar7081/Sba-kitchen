import { Language } from '../types';

export const translations = {
  appName: {
    en: 'SBA Kitchen',
    ur: 'ایس بی اے کچن',
    hi: 'एसबीए किचन',
  },
  tagline: {
    en: 'Your complete smart kitchen pantry, recipe discovery, live cooking assistant, and meal planner.',
    ur: 'آپ کا مکمل باورچی خانہ ساتھی: پینٹری مینیجر، ریسیپیز، لائیو کوکنگ ٹائمر اور گروسری لسٹ۔',
    hi: 'आपकी रसोई का सच्चा साथी: पैंट्री प्रबंधन, रेसिपी खोज, लाइव कुकिंग टाइमर और भोजन योजना।',
  },
  navPantry: {
    en: 'Kitchen Pantry & Fridge',
    ur: 'کچن پینٹری و فریج',
    hi: 'रसोई पैंट्री व फ्रिज',
  },
  navRecipes: {
    en: 'Recipe Book',
    ur: 'ریسیپی بک',
    hi: 'रेसिपी बुक',
  },
  navWhatCanICook: {
    en: 'What Can I Cook?',
    ur: 'آج کیا پکائیں؟ (دستیاب اشیاء)',
    hi: 'आज क्या बनाएं? (उपलब्ध सामग्री)',
  },
  navPlanner: {
    en: 'Weekly Meal Plan',
    ur: 'ہفتہ وار کھانا پلانر',
    hi: 'साप्ताहिक भोजन योजना',
  },
  navGrocery: {
    en: 'Grocery List',
    ur: 'سودا سلف / گروسری لسٹ',
    hi: 'किराने का सामान / लिस्ट',
  },
  navUtilities: {
    en: 'Kitchen Tools & Guides',
    ur: 'کچن ٹولز و ٹوٹکے',
    hi: 'रसोई टूल्स व नुस्खे',
  },
  inStock: {
    en: 'In Stock',
    ur: 'دستیاب ہے',
    hi: 'उपलब्ध है',
  },
  outOfStock: {
    en: 'Out of Stock',
    ur: 'ختم ہو چکا ہے',
    hi: 'खत्म हो गया',
  },
  lowStock: {
    en: 'Running Low',
    ur: 'ختم ہونے والا ہے',
    hi: 'कम बचा है',
  },
  addPantryItem: {
    en: 'Add Ingredient',
    ur: 'نئی چیز شامل کریں',
    hi: 'नई सामग्री जोड़ें',
  },
  startCooking: {
    en: 'Start Cook Mode',
    ur: 'کوکنگ موڈ شروع کریں',
    hi: 'कुकिंग मोड शुरू करें',
  },
  servings: {
    en: 'Servings',
    ur: 'افراد (Servings)',
    hi: 'लोग (Servings)',
  },
  timers: {
    en: 'Kitchen Timers',
    ur: 'کچن ٹائمرز',
    hi: 'किचन टाइमर्स',
  },
  matchPerfect: {
    en: '100% Ready to Cook (All ingredients available)',
    ur: '100% تیار! تمام اشیاء باورچی خانے میں موجود ہیں',
    hi: '100% तैयार! सारी सामग्री रसोई में उपलब्ध है',
  },
  matchNear: {
    en: 'Almost Ready (Missing 1-2 items)',
    ur: 'قریب قریب تیار (صرف 1-2 چیزیں درکار ہیں)',
    hi: 'लगभग तैयार (केवल 1-2 चीजें बाकी हैं)',
  },
  addMissingToGrocery: {
    en: 'Add Missing Items to Grocery List',
    ur: 'کمی والی اشیاء گروسری لسٹ میں ڈالیں',
    hi: 'बाकी सामग्री किराने की लिस्ट में जोड़ें',
  }
};

export const getT = (key: keyof typeof translations, lang: Language): string => {
  return translations[key]?.[lang] || translations[key]?.en || '';
};
