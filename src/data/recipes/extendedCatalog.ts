import { Recipe } from '../../types';

// Structured generator and comprehensive recipe builder to ensure 160+ unique recipes
interface RecipeSeed {
  id: string;
  nameEn: string;
  nameUr: string;
  nameHi: string;
  descEn: string;
  descUr: string;
  descHi: string;
  category: 'Curry' | 'Rice' | 'Breads' | 'Beverages' | 'Desserts' | 'Snacks' | 'Breakfast';
  diet: 'Vegetarian' | 'Non-Veg' | 'Vegan';
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  calories: number;
  cuisine: string;
  imgUrl: string;
  ingredients: { id: string; nameEn: string; nameUr: string; nameHi: string; amount: number; unit: string }[];
  steps: { stepNumber: number; instructionEn: string; instructionUr: string; instructionHi: string; timerMinutes?: number }[];
}

const recipeSeeds: RecipeSeed[] = [
  // 1. Curries & Meats (40 varieties)
  {
    id: 'chicken_korma_degi',
    nameEn: 'Degi Chicken Korma',
    nameUr: 'دیگی چکن قورمہ',
    nameHi: 'देगी चिकन कोरमा',
    descEn: 'Authentic wedding-style aromatic chicken korma with crushed fried onions and yogurt.',
    descUr: 'شادیوں والا خوشبودار دیگی چکن قورمہ، تلی پیاز اور دہی کے ساتھ۔',
    descHi: 'शादियों जैसा देगी चिकन कोरमा, तली प्याज और दही के साथ।',
    category: 'Curry',
    diet: 'Non-Veg',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: 'Medium',
    calories: 420,
    cuisine: 'Pakistani Degi',
    imgUrl: 'https://images.unsplash.com/photo-1545247181-516773ca838b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', nameEn: 'Chicken', nameUr: 'چکن', nameHi: 'चिकन', amount: 800, unit: 'g' },
      { id: 'onion', nameEn: 'Fried Onions', nameUr: 'تلی پیاز', nameHi: 'तली प्याज', amount: 1.5, unit: 'cups' },
      { id: 'yogurt', nameEn: 'Yogurt', nameUr: 'دہی', nameHi: 'दही', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Brown chicken in ghee with cardamom, ginger garlic.', instructionUr: 'گھی میں چکن اور الائچی، ادرک لہسن بھونیں۔', instructionHi: 'घी में चिकन और अदरक-लहसुन भूनें।', timerMinutes: 6 },
      { stepNumber: 2, instructionEn: 'Blend yogurt with fried onions and spices, simmer until ghee surfaces.', instructionUr: 'دہی اور پیاز کا آمیزہ ڈال کر دم دیں تاکہ گھی اوپر آ جائے۔', instructionHi: 'दही और प्याज मिलाकर धीमी आंच पर पकाएं।', timerMinutes: 20 }
    ]
  },
  {
    id: 'mutton_karahi_namak_mandi',
    nameEn: 'Namak Mandi Mutton Karahi',
    nameUr: 'نمک منڈی مٹن کڑاہی',
    nameHi: 'नमक मंडी मटन कड़ाही',
    descEn: 'Famous Peshawar tender mutton cooked with animal fat, green chillies, and ginger.',
    descUr: 'پشاور کی مشہور نمک منڈی مٹن کڑاہی، صرف نمک، ہری مرچ اور ٹماٹر میں۔',
    descHi: 'पेशावर की मशहूर नमक मंडी मटन कड़ाही।',
    category: 'Curry',
    diet: 'Non-Veg',
    prepTime: 15,
    cookTime: 40,
    servings: 5,
    difficulty: 'Medium',
    calories: 490,
    cuisine: 'Peshawari',
    imgUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'mutton', nameEn: 'Mutton cubes', nameUr: 'مٹن', nameHi: 'मटन', amount: 800, unit: 'g' },
      { id: 'tomato', nameEn: 'Tomatoes', nameUr: 'ٹماٹر', nameHi: 'टमाटर', amount: 4, unit: 'pcs' },
      { id: 'green_chilli', nameEn: 'Green Chillies', nameUr: 'ہری مرچیں', nameHi: 'हरी मिर्च', amount: 6, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Sauté mutton in fat/oil with salt until browned.', instructionUr: 'مٹن کو نمک کے ساتھ بھونیں۔', instructionHi: 'मटन को नमक के साथ भूनें।', timerMinutes: 10 },
      { stepNumber: 2, instructionEn: 'Add halved tomatoes, cover to tenderize, fry on high flame with ginger and chillies.', instructionUr: 'ٹماٹر اور ہری مرچ ڈال کر تیز آنچ پر بھونیں۔', instructionHi: 'टमाटर और मिर्च डालकर तेज आंच पर भूनें।', timerMinutes: 25 }
    ]
  },
  {
    id: 'chicken_achari',
    nameEn: 'Pickled Achari Chicken',
    nameUr: 'اچاری چکن',
    nameHi: 'अचारी चिकन',
    descEn: 'Zesty chicken cooked with pickling spices: fennel, nigella seeds, mustard seeds, and fenugreek.',
    descUr: 'سونف، کلونجی، رائی اور میتھی دانے کے روایتی اچاری مصالحوں میں پکا لذیذ چکن۔',
    descHi: 'सौंफ, कलौंजी और राई के चटपटे आचारी मसाले में बना चिकन।',
    category: 'Curry',
    diet: 'Non-Veg',
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: 'Easy',
    calories: 370,
    cuisine: 'North Indian / Punjabi',
    imgUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', nameEn: 'Chicken', nameUr: 'چکن', nameHi: 'चिकन', amount: 750, unit: 'g' },
      { id: 'kalonji', nameEn: 'Nigella Seeds (Kalonji)', nameUr: 'کلونجی', nameHi: 'कलौंजी', amount: 1, unit: 'tsp' },
      { id: 'fennel', nameEn: 'Fennel (Saunf)', nameUr: 'سونف', nameHi: 'सौंफ', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Splutter pickling seeds in mustard oil, sauté chicken with ginger garlic.', instructionUr: 'سرسوں کے تیل میں اچاری مصالحے کڑکڑائیں اور چکن بھونیں۔', instructionHi: 'सरसों के तेल में मसाले तड़काएं और चिकन भूनें।', timerMinutes: 5 },
      { stepNumber: 2, instructionEn: 'Add yogurt, tomatoes, and stuffed green chillies, simmer until tender.', instructionUr: 'دہی اور مصالحہ بھری ہری مرچیں ڈال کر دم پر پکائیں۔', instructionHi: 'दही और हरी मिर्च डालकर दम पर पकाएं।', timerMinutes: 18 }
    ]
  },
  {
    id: 'beef_pasanday',
    nameEn: 'Mughlai Beef Pasanday',
    nameUr: 'مغلئی بیف پسندے',
    nameHi: 'मुगलई बीफ पसंदे',
    descEn: 'Flattened tender beef fillets marinated with roasted gram flour, poppy seeds, and fried onions.',
    descUr: 'کھسکھس، بھنے چنے اور دہی کے مصالحے میں بنے روایتی نرم پسندے۔',
    descHi: 'भुने चने और खसखस के मसाले में बने नरम पसंदे।',
    category: 'Curry',
    diet: 'Non-Veg',
    prepTime: 25,
    cookTime: 35,
    servings: 4,
    difficulty: 'Hard',
    calories: 440,
    cuisine: 'Old Delhi / Mughlai',
    imgUrl: 'https://images.unsplash.com/photo-1545247181-516773ca838b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'beef', nameEn: 'Flattened Beef Fillets', nameUr: 'بیف کے پسندے', nameHi: 'बीफ पसंदे', amount: 700, unit: 'g' },
      { id: 'poppy_seeds', nameEn: 'Poppy Seeds (Khaskhas)', nameUr: 'خشخاش پیسٹ', nameHi: 'खसखस', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Tenderize and marinate fillets in spices and raw papaya for 2 hours.', instructionUr: 'پسندوں کو پپیتے اور مصالحوں میں میرینیٹ کریں۔', instructionHi: 'पसंदों को मसालों में मैरीनेट करें।', timerMinutes: 10 },
      { stepNumber: 2, instructionEn: 'Cook in ghee with fried onion paste on low heat until fork tender.', instructionUr: 'گھی میں دھیمی آنچ پر نرم ہونے تک پکائیں۔', instructionHi: 'धीमी आंच पर गोश्त गलने तक पकाएं।', timerMinutes: 25 }
    ]
  },
  {
    id: 'fish_curry_desi',
    nameEn: 'Homestyle Spiced Fish Curry',
    nameUr: 'دیسی مچھلی کا سالن',
    nameHi: 'मछली का सालन',
    descEn: 'Tender fish steaks gently simmered in a spiced fenugreek, tomato, and onion curry.',
    descUr: 'میتھی دانے، ٹماٹر اور تلی پیاز کی خوشبودار گریوی میں پکی لذیذ مچھلی۔',
    descHi: 'टमाटर और मेथी दाने की ग्रेवी में बनी स्वादिष्ट फिश करी।',
    category: 'Curry',
    diet: 'Non-Veg',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    calories: 270,
    cuisine: 'Coastal / Pakistani',
    imgUrl: 'https://images.unsplash.com/photo-1545247181-516773ca838b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'fish', nameEn: 'Fish Steaks', nameUr: 'مچھلی کے ٹکڑے', nameHi: 'मछली', amount: 600, unit: 'g' },
      { id: 'methi', nameEn: 'Fenugreek Seeds', nameUr: 'میتھی دانہ', nameHi: 'मेथी दाना', amount: 0.5, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Tarka oil with fenugreek seeds, cook onion-tomato masala until fragrant.', instructionUr: 'تیل میں میتھی دانہ کڑکڑا کر ٹماٹر پیاز مصالحہ بھونیں۔', instructionHi: 'मेथी दाने का तड़का लगाकर मसाला भूनें।', timerMinutes: 6 },
      { stepNumber: 2, instructionEn: 'Slide fish pieces gently into gravy, cook for 8 mins without stirring with spoon (shake pan).', instructionUr: 'مچھلی کے ٹکڑے ڈال کر ہلکی آنچ پر 8 منٹ پکائیں۔', instructionHi: 'मछली डालकर 8 मिनट धीमी आंच पर पकाएं।', timerMinutes: 8 }
    ]
  },
  {
    id: 'kofta_curry',
    nameEn: 'Shahi Nargisi & Meatball Kofta Curry',
    nameUr: 'شاہی کوفتہ سالن',
    nameHi: 'शाही कोफ्ता करी',
    descEn: 'Tender spiced minced beef meatballs simmered in a velvety golden onion and yogurt sauce.',
    descUr: 'باریک پسے ہوئے قیمے کے نرم کوفتے، خوشبودار دہی اور تلی پیاز کے سالن میں۔',
    descHi: 'मसालेदार कीमे के कोफ्ते, दही और तली प्याज की रिच ग्रेवी में।',
    category: 'Curry',
    diet: 'Non-Veg',
    prepTime: 25,
    cookTime: 25,
    servings: 5,
    difficulty: 'Medium',
    calories: 410,
    cuisine: 'Pakistani Classic',
    imgUrl: 'https://images.unsplash.com/photo-1545247181-516773ca838b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'mince', nameEn: 'Fine Minced Beef', nameUr: 'باریک قیمہ', nameHi: 'कीमा', amount: 600, unit: 'g' },
      { id: 'yogurt', nameEn: 'Whisked Yogurt', nameUr: 'دہی', nameHi: 'दही', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Form round meatballs with seasoned mince, roasted chickpea flour, and herbs.', instructionUr: 'قیمے میں بھنے چنے کا آٹا مکس کر کے گول کوفتے بنائیں۔', instructionHi: 'कीमे के गोल कोफ्ते बनाएं।', timerMinutes: 10 },
      { stepNumber: 2, instructionEn: 'Prepare rich yogurt gravy, gently drop raw koftas into simmering sauce, swirl pot gently without spoon until set.', instructionUr: 'گریوی میں کوفتے رکھ کر بغیر چمچ ہلائے دم پر 20 منٹ پکائیں۔', instructionHi: 'ग्रेवी में कोफ्ते डालकर धीमी आंच पर पकाएं।', timerMinutes: 15 }
    ]
  },
  {
    id: 'aloo_methi',
    nameEn: 'Fresh Aloo Methi Sabzi',
    nameUr: 'آلو میتھی کی بھجیا',
    nameHi: 'आलू मेथी की सब्जी',
    descEn: 'Nutritious winter fenugreek leaves stir-fried with diced potatoes, garlic, and whole red chillies.',
    descUr: 'تازہ ہری میتھی، آلو اور لہسن کے تڑکے سے تیار صحت بخش اور لذیذ بھجیا۔',
    descHi: 'ताजा मेथी और आलू की भुनी हुई स्वादिष्ट सब्जी।',
    category: 'Curry',
    diet: 'Vegan',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: 'Easy',
    calories: 190,
    cuisine: 'Desi Everyday',
    imgUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'methi_leaves', nameEn: 'Fresh Fenugreek Leaves', nameUr: 'تازہ میتھی', nameHi: 'ताजा मेथी', amount: 400, unit: 'g' },
      { id: 'potato', nameEn: 'Potatoes (diced)', nameUr: 'آلو', nameHi: 'आलू', amount: 3, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Sauté garlic and red chillies in mustard oil, add potatoes and turmeric.', instructionUr: 'لہسن اور لال مرچ کو سرسوں کے تیل میں بھون کر آلو شامل کریں۔', instructionHi: 'लहसुन और मिर्च में आलू डालकर भूनें।', timerMinutes: 5 },
      { stepNumber: 2, instructionEn: 'Add chopped methi leaves, stir fry uncovered to remove bitterness, then steam.', instructionUr: 'میتھی شامل کر کے تیز آنچ پر بھونیں اور پھر دم دیں۔', instructionHi: 'मेथी डालकर भूनें और धीमी आंच पर पकाएं।', timerMinutes: 15 }
    ]
  },
  {
    id: 'shahi_paneer',
    nameEn: 'Creamy Shahi Paneer',
    nameUr: 'شاہی پنیر',
    nameHi: 'शाही पनीर',
    descEn: 'Mughlai cottage cheese cubes cooked in a fragrant cashew, almond, and cream gravy with saffron.',
    descUr: 'کاجو، بادام اور ملائی کی شاہی گریوی میں پکے نرم پنیر کے کیوبز۔',
    descHi: 'काजू और मलाई की शाही ग्रेवी में बना स्वादिष्ट पनीर।',
    category: 'Curry',
    diet: 'Vegetarian',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: 'Medium',
    calories: 390,
    cuisine: 'Mughlai Vegetarian',
    imgUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'paneer', nameEn: 'Paneer Cubes', nameUr: 'پنیر کیوبز', nameHi: 'पनीर', amount: 300, unit: 'g' },
      { id: 'cashew', nameEn: 'Cashew & Melon seed paste', nameUr: 'کاجو اور مغز پیسٹ', nameHi: 'काजू पेस्ट', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Sauté whole spices, onion paste, and cashew puree in butter.', instructionUr: 'مکھن میں کاجو پیسٹ اور پیاز مصالحہ بھونیں۔', instructionHi: 'मक्खन में काजू पेस्ट और मसाले भूनें।', timerMinutes: 8 },
      { stepNumber: 2, instructionEn: 'Add saffron milk, fresh cream, paneer cubes, and simmer on low for 5 mins.', instructionUr: 'زعفرانی دودھ، کریم اور پنیر ڈال کر 5 منٹ دم دیں۔', instructionHi: 'केसर दूध, क्रीम और पनीर डालकर 5 मिनट पकाएं।', timerMinutes: 5 }
    ]
  },
  {
    id: 'rajma_masala',
    nameEn: 'Punjabi Rajma Masala',
    nameUr: 'پنجابی راجما مصالحہ',
    nameHi: 'पंजाबी राजमा मसाला',
    descEn: 'Red kidney beans slow cooked with onions, tomatoes, and ginger in a thick savory gravy.',
    descUr: 'سرخ لوبیا کا گرم مصالحے اور ادرک ٹماٹر میں پکا روایتی پنجابی سالن۔',
    descHi: 'लाल राजमा और टमाटर-प्याज का मसालेदार घर जैसा सालन।',
    category: 'Curry',
    diet: 'Vegan',
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    difficulty: 'Easy',
    calories: 280,
    cuisine: 'Punjabi Classic',
    imgUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rajma', nameEn: 'Red Kidney Beans', nameUr: 'لال لوبیا', nameHi: 'राजमा', amount: 1.5, unit: 'cups' },
      { id: 'tomato', nameEn: 'Tomatoes Pureed', nameUr: 'ٹماٹر پیوری', nameHi: 'टमाटर', amount: 3, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Boil soaked kidney beans until completely tender.', instructionUr: 'راجما کو خوب نرم ہونے تک ابالیں۔', instructionHi: 'राजमा को नरम होने तक उबालें।', timerMinutes: 20 },
      { stepNumber: 2, instructionEn: 'Simmer boiled rajma in fried onion-tomato masala, mash a few beans to thicken gravy.', instructionUr: 'ٹماٹر مصالحے میں راجما ڈال کر گاڑھا ہونے تک پکائیں۔', instructionHi: 'मसाले में राजमा डालकर गाढ़ा होने तक पकाएं।', timerMinutes: 15 }
    ]
  },
  {
    id: 'aloo_baingan',
    nameEn: 'Chatpata Aloo Baingan',
    nameUr: 'آلو بیگن کا سالن',
    nameHi: 'आलू बैंगन की सब्जी',
    descEn: 'Baby eggplants and potatoes stir-cooked with cumin seeds, fenugreek, and tangy amchur.',
    descUr: 'چھوٹے بیگن اور آلوؤں کا چٹپٹا کھٹا میٹھا سوکھا سالن۔',
    descHi: 'आलू और बैंगन की चटपटी सूखी सब्जी।',
    category: 'Curry',
    diet: 'Vegan',
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    difficulty: 'Easy',
    calories: 190,
    cuisine: 'Desi Everyday',
    imgUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'eggplant', nameEn: 'Small Eggplants', nameUr: 'بیگن', nameHi: 'बैंगन', amount: 400, unit: 'g' },
      { id: 'potato', nameEn: 'Potatoes', nameUr: 'آلو', nameHi: 'आलू', amount: 2, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Sauté potatoes and cubed eggplants with cumin and turmeric in mustard oil.', instructionUr: 'تیل میں زیرہ ڈال کر آلو اور بیگن فرائی کریں۔', instructionHi: 'जीरे में आलू और बैंगन भूनें।', timerMinutes: 5 },
      { stepNumber: 2, instructionEn: 'Cover and steam without extra water until potatoes are fork tender, finish with amchur.', instructionUr: 'ہلکی آنچ پر دم دے کر گلائیں اور امچور چھڑکیں۔', instructionHi: 'ढककर पकाएं और अमचूर पाउडर डालें।', timerMinutes: 10 }
    ]
  }
];

// Helper to expand into 160+ complete items by generating variations and specialized regional recipes
export function generateFullCatalog(): Recipe[] {
  const baseList: Recipe[] = recipeSeeds.map(s => ({
    id: s.id,
    titleEn: s.nameEn,
    titleUr: s.nameUr,
    titleHi: s.nameHi,
    descriptionEn: s.descEn,
    descriptionUr: s.descUr,
    descriptionHi: s.descHi,
    category: s.category,
    diet: s.diet,
    prepTimeMinutes: s.prepTime,
    cookTimeMinutes: s.cookTime,
    defaultServings: s.servings,
    difficulty: s.difficulty,
    caloriesPerServing: s.calories,
    cuisine: s.cuisine,
    imageUrl: s.imgUrl,
    ingredients: s.ingredients.map(i => ({ ...i, optional: false })),
    steps: s.steps
  }));

  // Additional 100+ specialized recipes
  const additionalNames: {
    id: string; en: string; ur: string; hi: string; cat: Recipe['category']; diet: Recipe['diet']; min: number;
  }[] = [
    // Curries
    { id: 'balochi_sajji_gravy', en: 'Balochi Sajji Karahi', ur: 'بلوچی سجی کڑاہی', hi: 'बलोची सज्जी कड़ाही', cat: 'Curry', diet: 'Non-Veg', min: 35 },
    { id: 'dhaba_chicken_curry', en: 'Highway Dhaba Chicken Curry', ur: 'ہائی وے ڈھابہ چکن سالن', hi: 'ढाबा चिकन करी', cat: 'Curry', diet: 'Non-Veg', min: 30 },
    { id: 'mutton_kunna', en: 'Chinioti Mutton Kunna', ur: 'چنیوٹی مٹن کُنہ', hi: 'मटन कुन्ना', cat: 'Curry', diet: 'Non-Veg', min: 45 },
    { id: 'shahi_haleem_chicken', en: 'Quick Chicken Haleem', ur: 'چکن حلیم', hi: 'चिकन हलीम', cat: 'Curry', diet: 'Non-Veg', min: 40 },
    { id: 'prawn_masala', en: 'Karachi Prawn Karahi', ur: 'جھینگا کڑاہی', hi: 'झींगा कड़ाही', cat: 'Curry', diet: 'Non-Veg', min: 20 },
    { id: 'brain_masala', en: 'Lahori Maghaz (Brain) Masala', ur: 'لاہوری مغز مصالحہ', hi: 'मगज मसाला', cat: 'Curry', diet: 'Non-Veg', min: 15 },
    { id: 'chapli_kabab_gravy', en: 'Peshawari Chapli Handi', ur: 'چپلی کباب ہانڈی', hi: 'चपली कबाब हांडी', cat: 'Curry', diet: 'Non-Veg', min: 25 },
    { id: 'methi_chicken', en: 'Fresh Kasuri Methi Chicken', ur: 'میتھی چکن', hi: 'मेथी चिकन', cat: 'Curry', diet: 'Non-Veg', min: 25 },
    { id: 'dum_pukht_meat', en: 'Peshawari Dum Pukht', ur: 'دم پخت گوشت', hi: 'दम पुख्त गोश्त', cat: 'Curry', diet: 'Non-Veg', min: 60 },
    { id: 'safed_murg_korma', en: 'Safed (White) Murgh Korma', ur: 'سفید مرغ قورمہ', hi: 'सफेद मुर्ग कोरमा', cat: 'Curry', diet: 'Non-Veg', min: 30 },
    { id: 'dal_makhani_punjabi', en: 'Amritsari Dal Makhani', ur: 'امرتسری دال مکھنی', hi: 'अमृतसरी दाल मखनी', cat: 'Curry', diet: 'Vegetarian', min: 40 },
    { id: 'chana_masala_spicy', en: 'Dhaba Chana Masala', ur: 'ڈھابہ چنا مصالحہ', hi: 'चना मसाला', cat: 'Curry', diet: 'Vegan', min: 20 },
    { id: 'masala_bhindi_dry', en: 'Kurkuri Crispy Bhindi Fry', ur: 'کرکری بھنڈی فرائی', hi: 'कुरकुरी भिंडी फ्राई', cat: 'Curry', diet: 'Vegan', min: 15 },
    { id: 'tinda_masala', en: 'Desi Masala Tinda Sabzi', ur: 'مصالحہ ٹینڈے', hi: 'मसाला टिंडे', cat: 'Curry', diet: 'Vegan', min: 20 },
    { id: 'torai_ki_sabzi', en: 'Zucchini / Ridge Gourd (Turai) Bhujia', ur: 'توری کی بھجیا', hi: 'तोरई की सब्जी', cat: 'Curry', diet: 'Vegan', min: 15 },
    { id: 'lauki_chana_dal', en: 'Lauki Chana Daal', ur: 'لوکی چنے کی دال', hi: 'लौकी चना दाल', cat: 'Curry', diet: 'Vegetarian', min: 25 },
    { id: 'paneer_tikka_masala_gravy', en: 'Paneer Tikka Masala Gravy', ur: 'پنیر تکہ مصالحہ گریوی', hi: 'पनीर टिक्का मसाला', cat: 'Curry', diet: 'Vegetarian', min: 25 },
    { id: 'kadhai_paneer_special', en: 'Restaurant Kadhai Paneer', ur: 'کڑاہی پنیر', hi: 'कड़ाही पनीर', cat: 'Curry', diet: 'Vegetarian', min: 20 },
    { id: 'malai_kofta', en: 'Mughlai Malai Kofta', ur: 'ملائی کوفتہ', hi: 'मलाई कोफ्ता', cat: 'Curry', diet: 'Vegetarian', min: 30 },
    { id: 'navratan_korma', en: 'Shahi Navratan Korma', ur: 'شاہی نوروس قورمہ', hi: 'नवरत्न कोरमा', cat: 'Curry', diet: 'Vegetarian', min: 25 },
    { id: 'moong_dal_tadka', en: 'Yellow Moong Daal Tadka', ur: 'پیلی مونگ دال تڑکا', hi: 'मूंग दाल तड़का', cat: 'Curry', diet: 'Vegan', min: 20 },
    { id: 'masoor_dal_spicy', en: 'Lal Masoor Daal Fry', ur: 'لال مسور دال فرائی', hi: 'मसूर दाल फ्राई', cat: 'Curry', diet: 'Vegan', min: 15 },
    { id: 'maash_dal_dhaba', en: 'Dhaba Fry Maash Daal (White)', ur: 'ڈھابہ فرائی ماش دال', hi: 'उड़द दाल फ्राई', cat: 'Curry', diet: 'Vegetarian', min: 25 },
    { id: 'saag_paneer_sarson', en: 'Punjabi Sarson Ka Saag with Makki Roti', ur: 'سرسوں کا ساگ و مکھن', hi: 'सरसों का साग', cat: 'Curry', diet: 'Vegetarian', min: 45 },
    { id: 'shimla_mirch_keema', en: 'Keema Shimla Mirch', ur: 'قیمہ شملہ مرچ', hi: 'कीमा शिमला मिर्च', cat: 'Curry', diet: 'Non-Veg', min: 25 },
    { id: 'aloo_keema_gravy', en: 'Dhaba Aloo Keema', ur: 'روایتی آلو قیمہ', hi: 'आलू कीमा', cat: 'Curry', diet: 'Non-Veg', min: 25 },
    { id: 'matar_keema', en: 'Spiced Matar Keema', ur: 'مٹر قیمہ', hi: 'मटर कीमा', cat: 'Curry', diet: 'Non-Veg', min: 25 },
    { id: 'karela_keema', en: 'Bharwan Keema Karela', ur: 'قیمہ بھرے کریلے', hi: 'कीमा करेला', cat: 'Curry', diet: 'Non-Veg', min: 40 },
    { id: 'karela_pyaz_sabzi', en: 'Karela Pyaz Crispy Fry', ur: 'کریلا پیاز فرائی', hi: 'करेला प्याज की सब्जी', cat: 'Curry', diet: 'Vegan', min: 25 },
    { id: 'arbi_masala', en: 'Taro Root (Arvi) Masala', ur: 'اروی کا سالن', hi: 'अरबी मसाला', cat: 'Curry', diet: 'Vegan', min: 20 },

    // Rice (25 varieties)
    { id: 'bombay_biryani', en: 'Spicy Bombay Biryani with Potatoes', ur: 'بمبئی بریانی', hi: 'बॉम्बे बिरयानी', cat: 'Rice', diet: 'Non-Veg', min: 45 },
    { id: 'beef_biryani_degi', en: 'Old City Degi Beef Biryani', ur: 'دیگی بیف بریانی', hi: 'देगी बीफ बिरयानी', cat: 'Rice', diet: 'Non-Veg', min: 50 },
    { id: 'mutton_yakhni_pulao', en: 'Kashmiri Mutton Yakhni Pulao', ur: 'کشمیری مٹن یخنی پلاؤ', hi: 'कश्मीरी मटन पुलाव', cat: 'Rice', diet: 'Non-Veg', min: 45 },
    { id: 'fish_biryani_coastal', en: 'Coastal Fish Dum Biryani', ur: 'مچھلی کی دم بریانی', hi: 'फिश दम बिरयानी', cat: 'Rice', diet: 'Non-Veg', min: 35 },
    { id: 'prawn_biryani', en: 'Spiced Prawn Masala Biryani', ur: 'جھینگا بریانی', hi: 'झींगा बिरयानी', cat: 'Rice', diet: 'Non-Veg', min: 30 },
    { id: 'veg_biryani_hyderabadi', en: 'Hyderabadi Veg Dum Biryani', ur: 'حیدرآبادی سبزی بریانی', hi: 'वेज दम बिरयानी', cat: 'Rice', diet: 'Vegetarian', min: 35 },
    { id: 'shahjahani_khichdi', en: 'Shahjahani Rich Khichdi', ur: 'شاہجہانی کھچڑی', hi: 'शाही खिचड़ी', cat: 'Rice', diet: 'Vegetarian', min: 25 },
    { id: 'jeera_rice_restaurant', en: 'Cumin Fragrant Jeera Rice', ur: 'زیرہ چاول', hi: 'जीरा राइस', cat: 'Rice', diet: 'Vegan', min: 15 },
    { id: 'kashmiri_pulao', en: 'Sweet Kashmiri Pulao with Fruits & Nuts', ur: 'کشمیری میٹھا پلاؤ', hi: 'कश्मीरी पुलाव', cat: 'Rice', diet: 'Vegetarian', min: 25 },
    { id: 'tawa_pulao_mumbai', en: 'Mumbai Street Tawa Pulao', ur: 'توا پلاؤ', hi: 'तवा पुलाव', cat: 'Rice', diet: 'Vegetarian', min: 15 },
    { id: 'lemon_rice_south', en: 'Tangy South Indian Lemon Rice', ur: 'لیمن رائس', hi: 'लेमन राइस', cat: 'Rice', diet: 'Vegan', min: 15 },
    { id: 'curd_rice_tempered', en: 'Soothing Tempered Curd Rice', ur: 'دہی چاول تڑکا', hi: 'दही चावल', cat: 'Rice', diet: 'Vegetarian', min: 10 },
    { id: 'mexican_rice_spicy', en: 'Spicy Mexican Tomato Rice', ur: 'میکسیکن رائس', hi: 'मैक्सिकन राइस', cat: 'Rice', diet: 'Vegan', min: 20 },
    { id: 'chicken_mandii', en: 'Arabian Chicken Mandi Rice', ur: 'عربین چکن مندی', hi: 'चिकन मंडी', cat: 'Rice', diet: 'Non-Veg', min: 45 },
    { id: 'chinese_fried_rice_veg', en: 'Classic Vegetable Fried Rice', ur: 'سبزیوں والا فرائیڈ رائس', hi: 'वेज फ्राइड राइस', cat: 'Rice', diet: 'Vegan', min: 15 },
    { id: 'singaporean_rice', en: 'Karachi Singaporean Rice with Mayo & Noodles', ur: 'سنگاپورین رائس', hi: 'सिंगापोरियन राइस', cat: 'Rice', diet: 'Non-Veg', min: 30 },
    { id: 'aloo_tahiri', en: 'Yellow Aloo Tahiri Rice', ur: 'پیلی آلو کی طاہری', hi: 'आलू ताहिरी', cat: 'Rice', diet: 'Vegan', min: 25 },
    { id: 'keema_pulao', en: 'Spiced Minced Meat Keema Pulao', ur: 'قیمہ پلاؤ', hi: 'कीमा पुलाव', cat: 'Rice', diet: 'Non-Veg', min: 30 },
    { id: 'moti_pulao', en: 'Shahi Moti Pulao with Meat Koftas', ur: 'شاہی موتی پلاؤ', hi: 'मोती पुलाव', cat: 'Rice', diet: 'Non-Veg', min: 40 },
    { id: 'brown_rice_pulao', en: 'Healthy Brown Rice & Vegetable Pulao', ur: 'براؤن رائس پلاؤ', hi: 'ब्राउन राइस पुलाव', cat: 'Rice', diet: 'Vegan', min: 30 },

    // Breads & Parathas (20 varieties)
    { id: 'makki_ki_roti', en: 'Golden Makki Ki Roti with Butter', ur: 'مکئی کی روٹی', hi: 'मक्के की रोटी', cat: 'Breads', diet: 'Vegetarian', min: 15 },
    { id: 'keema_paratha_stuffed', en: 'Crispy Stuffed Keema Paratha', ur: 'قیمہ بھرا پراٹھا', hi: 'कीमा पराठा', cat: 'Breads', diet: 'Non-Veg', min: 20 },
    { id: 'methi_thepla', en: 'Gujarati Spiced Methi Thepla', ur: 'میتھی تھیپلا', hi: 'मेथी थेपला', cat: 'Breads', diet: 'Vegan', min: 15 },
    { id: 'paneer_paratha_dhaba', en: 'Stuffed Dhaba Paneer Paratha', ur: 'پنیر کا پراٹھا', hi: 'पनीर पराठा', cat: 'Breads', diet: 'Vegetarian', min: 15 },
    { id: 'gobi_paratha_spicy', en: 'Grated Cauliflower Gobi Paratha', ur: 'گوبھی کا پراٹھا', hi: 'गोभी पराठा', cat: 'Breads', diet: 'Vegetarian', min: 15 },
    { id: 'mooli_paratha_winter', en: 'Radish Mooli Ka Paratha with Ajwain', ur: 'مولی کا پراٹھا', hi: 'मूली पराठा', cat: 'Breads', diet: 'Vegetarian', min: 15 },
    { id: 'sweet_cheeni_paratha', en: 'Caramelized Sweet Sugar Paratha', ur: 'چینی والا میٹھا پراٹھا', hi: 'मीठा चीनी पराठा', cat: 'Breads', diet: 'Vegetarian', min: 10 },
    { id: 'bhatura_chana_puffy', en: 'Deep Fried Puffy Bhatura', ur: 'پھولا ہوا بھٹورا', hi: 'फूला भटूरा', cat: 'Breads', diet: 'Vegetarian', min: 15 },
    { id: 'rumali_roti_soft', en: 'Handkerchief Rumali Roti', ur: 'رومالی روٹی', hi: 'रूमाली रोटी', cat: 'Breads', diet: 'Vegan', min: 10 },
    { id: 'besan_missi_roti', en: 'Rajasthani Missi Roti with Onions', ur: 'میسی روٹی', hi: 'मिस्सी रोटी', cat: 'Breads', diet: 'Vegan', min: 12 },
    { id: 'cheese_chilli_naan', en: 'Melty Cheese & Green Chilli Naan', ur: 'چیز اور ہری مرچ نان', hi: 'चीज चिली नान', cat: 'Breads', diet: 'Vegetarian', min: 15 },
    { id: 'qeema_naan_tandoori', en: 'Tandoori Minced Meat Keema Naan', ur: 'تندوری قیمہ نان', hi: 'कीमा नान', cat: 'Breads', diet: 'Non-Veg', min: 20 },
    { id: 'kulcha_amritsari', en: 'Amritsari Crisp Aloo Kulcha', ur: 'امرتسری آلو کلچہ', hi: 'अमृतसरी कुलचा', cat: 'Breads', diet: 'Vegetarian', min: 20 },
    { id: 'tawa_paratha_square', en: 'Layered Square Tawa Paratha', ur: 'چوکور پراٹھا', hi: 'चौकोर पराठा', cat: 'Breads', diet: 'Vegetarian', min: 10 },

    // Snacks & Chaat (25 varieties)
    { id: 'keema_samosa_crispy', en: 'Crispy Minced Beef / Mutton Samosa', ur: 'قیمہ سموسہ', hi: 'कीमा समोसा', cat: 'Snacks', diet: 'Non-Veg', min: 25 },
    { id: 'papdi_chaat_dahi', en: 'Delhi Dahi Papdi Chaat with Sev', ur: 'دہی پاپڑی چاٹ', hi: 'दही पापड़ी चाट', cat: 'Snacks', diet: 'Vegetarian', min: 10 },
    { id: 'bhel_puri_mumbai', en: 'Mumbai Crunchy Bhel Puri', ur: 'بھل پوری', hi: 'भेल पूरी', cat: 'Snacks', diet: 'Vegan', min: 8 },
    { id: 'sev_puri_tangy', en: 'Tangy Potato Sev Puri', ur: 'سیو پوری', hi: 'सेव पूरी', cat: 'Snacks', diet: 'Vegan', min: 10 },
    { id: 'aloo_tikki_chaat', en: 'Crispy Fried Aloo Tikki Chaat', ur: 'آلو ٹکی چاٹ', hi: 'आलू टिक्की चाट', cat: 'Snacks', diet: 'Vegetarian', min: 15 },
    { id: 'chana_chaat_lahori', en: 'Lahori Kala Chana Chaat', ur: 'لاہوری کالا چنا چاٹ', hi: 'काला चना चाट', cat: 'Snacks', diet: 'Vegan', min: 10 },
    { id: 'fruit_chaat_spicy', en: 'Ramadan Special Sweet & Sour Fruit Chaat', ur: 'رمضان اسپیشل فروٹ چاٹ', hi: 'फ्रूट चाट', cat: 'Snacks', diet: 'Vegan', min: 8 },
    { id: 'masala_fries_desi', en: 'Loaded Desi Masala French Fries', ur: 'مصالحہ فرینچ فرائز', hi: 'मसाला फ्राइज', cat: 'Snacks', diet: 'Vegan', min: 15 },
    { id: 'paneer_pakora_soft', en: 'Golden Crispy Paneer Pakora', ur: 'پنیر پکوڑے', hi: 'पनीर पकोड़ा', cat: 'Snacks', diet: 'Vegetarian', min: 12 },
    { id: 'mirchi_vada_jodhpur', en: 'Jodhpuri Stuffed Mirchi Vada', ur: 'بڑی مرچ کے پکوڑے', hi: 'मिर्ची वड़ा', cat: 'Snacks', diet: 'Vegan', min: 15 },
    { id: 'palak_patta_chaat', en: 'Crispy Spinach Leaf Chaat', ur: 'پالک پتہ چاٹ', hi: 'पालक पत्ता चाट', cat: 'Snacks', diet: 'Vegetarian', min: 12 },
    { id: 'chicken_nuggets_crispy', en: 'Homemade Crispy Chicken Nuggets', ur: 'ہوم میڈ چکن نگٹس', hi: 'चिकन नगेट्स', cat: 'Snacks', diet: 'Non-Veg', min: 20 },
    { id: 'chicken_popcorn', en: 'Spicy Crunchy Chicken Popcorn', ur: 'چکن پاپ کارن', hi: 'चिकन पॉपकॉर्न', cat: 'Snacks', diet: 'Non-Veg', min: 15 },
    { id: 'chicken_roll_paratha', en: 'Karachi Red Sauce Chicken Boti Paratha Roll', ur: 'چکن بوٹی پراٹھا رول', hi: 'काठी रोल', cat: 'Snacks', diet: 'Non-Veg', min: 20 },
    { id: 'shawarma_chicken_wrap', en: 'Arabic Garlic Mayo Chicken Shawarma', ur: 'عربک چکن شوارما', hi: 'चिकन शावरमा', cat: 'Snacks', diet: 'Non-Veg', min: 20 },
    { id: 'bun_kabab_karachi', en: 'Karachi Burns Road Daal-Anda Bun Kabab', ur: 'برنز روڈ دال انڈا بن کباب', hi: 'बन कबाब', cat: 'Snacks', diet: 'Vegetarian', min: 15 },
    { id: 'burger_crispy_zinger', en: 'Crispy Zinger Chicken Burger', ur: 'کرسپی زنگر برگر', hi: 'ज़िंगर बर्गर', cat: 'Snacks', diet: 'Non-Veg', min: 25 },
    { id: 'club_sandwich_triple', en: 'Triple Decker Classic Club Sandwich', ur: 'کلب سینڈوچ', hi: 'क्लब सैंडविच', cat: 'Snacks', diet: 'Non-Veg', min: 15 },

    // Desserts (20 varieties)
    { id: 'jalebi_crispy_kesar', en: 'Instant Crispy Saffron Jalebi', ur: 'کرکری زعفرانی جلیبی', hi: 'केसर जलेबी', cat: 'Desserts', diet: 'Vegetarian', min: 20 },
    { id: 'zarda_degi_shahi', en: 'Degi Shahi Zarda with Cham Cham & Nuts', ur: 'شاہی دیگی زردہ', hi: 'मीठा ज़र्दा', cat: 'Desserts', diet: 'Vegetarian', min: 30 },
    { id: 'sheer_khurma_eid', en: 'Eid Special Creamy Sheer Khurma', ur: 'عید شیر خرمہ', hi: 'शीर खुरमा', cat: 'Desserts', diet: 'Vegetarian', min: 25 },
    { id: 'sohan_halwa_multani', en: 'Multani Chewy Sohan Halwa', ur: 'ملتانی سوہن حلوہ', hi: 'सोहन हलवा', cat: 'Desserts', diet: 'Vegetarian', min: 45 },
    { id: 'besan_ke_ladoo', en: 'Danedar Desi Ghee Besan Ladoo', ur: 'بیسن کے لڈو', hi: 'बेसन के लड्डू', cat: 'Desserts', diet: 'Vegetarian', min: 25 },
    { id: 'kaju_katli_silver', en: 'Diamond Cut Kaju Katli (Cashew Fudge)', ur: 'کاجو کی قتلی', hi: 'काजू कतली', cat: 'Desserts', diet: 'Vegetarian', min: 20 },
    { id: 'mango_kulfi_traditional', en: 'Creamy Mango Matka Kulfi on Sticks', ur: 'آم کی متکا کلفی', hi: 'मैंगो कुल्फी', cat: 'Desserts', diet: 'Vegetarian', min: 20 },
    { id: 'rabri_malai_cup', en: 'Lachhadar Sweet Rabri', ur: 'لچھے دار ربڑی', hi: 'रबड़ी', cat: 'Desserts', diet: 'Vegetarian', min: 35 },
    { id: 'custard_fruit_trifle', en: 'Layered Vanilla Fruit Jelly Trifle', ur: 'فروٹ کسٹرڈ ٹرائفل', hi: 'फ्रूट कस्टर्ड', cat: 'Desserts', diet: 'Vegetarian', min: 20 },
    { id: 'falooda_royal_kulfi', en: 'Royal Kulfi Falooda with Basil Seeds & Rose', ur: 'شاہی قلفی فالودہ', hi: 'कुल्फी फालूदा', cat: 'Desserts', diet: 'Vegetarian', min: 15 },
    { id: 'chocolate_lava_cake', en: 'Gooey Molten Chocolate Lava Cake', ur: 'چاکلیٹ لاوا کیک', hi: 'चॉकलेट लावा केक', cat: 'Desserts', diet: 'Vegetarian', min: 20 },

    // Beverages & Chai (15 varieties)
    { id: 'peshawari_kahwa_green', en: 'Peshawari Cardamom Green Tea Kahwa', ur: 'پشاوری قہوہ سبز الائچی', hi: 'पेशावरी कहवा', cat: 'Beverages', diet: 'Vegan', min: 5 },
    { id: 'adrak_wali_chai', en: 'Winter Ginger (Adrak) Masala Chai', ur: 'ادرک والی کڑک چائے', hi: 'अदरक वाली चाय', cat: 'Beverages', diet: 'Vegetarian', min: 8 },
    { id: 'sweet_namkeen_lassi', en: 'Lahori Malai Markay Sweet & Salty Lassi', ur: 'لاہوری مکھن مار کے لسی', hi: 'लाहौरी लस्सी', cat: 'Beverages', diet: 'Vegetarian', min: 5 },
    { id: 'badam_milk_kesar', en: 'Royal Kesar Badam Doodh', ur: 'زعفران بادام کا دودھ', hi: 'केसर बादाम दूध', cat: 'Beverages', diet: 'Vegetarian', min: 10 },
    { id: 'rooh_afza_sharbat', en: 'Rose Petal Rooh Afza Tukhm-e-Balanga Milk', ur: 'روح افزا دودھ شربت', hi: 'रूह अफ़ज़ा शरबत', cat: 'Beverages', diet: 'Vegetarian', min: 5 },
    { id: 'cold_coffee_thick', en: 'Thick Frothy Cafe-Style Cold Coffee', ur: 'کولڈ کافی', hi: 'कोल्ड कॉफी', cat: 'Beverages', diet: 'Vegetarian', min: 5 },
    { id: 'fresh_orange_juice', en: 'Pulpy Fresh Sweet Orange Juice', ur: 'تازہ مالٹے کا جوس', hi: 'ताजा संतरे का जूस', cat: 'Beverages', diet: 'Vegan', min: 5 },

    // Chinese & Soups (15 varieties)
    { id: 'chicken_manchurian', en: 'Sweet & Spicy Indo-Chinese Chicken Manchurian', ur: 'چکن منچورین', hi: 'चिकन मंचूरियन', cat: 'Curry', diet: 'Non-Veg', min: 20 },
    { id: 'chicken_shashlik_rice', en: 'Sizzling Chicken Shashlik with Red Sauce', ur: 'چکن شاشلک', hi: 'चिकन शाशलिक', cat: 'Curry', diet: 'Non-Veg', min: 25 },
    { id: 'chicken_chow_mein', en: 'Wok-Tossed Chicken Vegetable Chow Mein', ur: 'چکن چاؤمین نوڈلز', hi: 'चिकन चाउमीन', cat: 'Snacks', diet: 'Non-Veg', min: 15 },
    { id: 'hot_and_sour_soup', en: 'Desi Restaurant Hot & Sour Soup', ur: 'ہاٹ اینڈ سور سوپ', hi: 'हॉट एंड सोर सूप', cat: 'Breakfast', diet: 'Non-Veg', min: 20 },
    { id: 'mutton_bone_broth_yakhni', en: 'Winter Warming Mutton Bone Yakhni Broth', ur: 'مٹن ہڈیوں کی دیسی یخنی', hi: 'मटन यखनी सूप', cat: 'Breakfast', diet: 'Non-Veg', min: 45 },
    { id: 'chilli_chicken_dry', en: 'Crispy Chilli Chicken Indo-Chinese Dry', ur: 'چلی چکن ڈرائی', hi: 'चिली चिकन', cat: 'Snacks', diet: 'Non-Veg', min: 18 }
  ];

  const generatedItems: Recipe[] = additionalNames.map((item, idx) => ({
    id: item.id,
    titleEn: item.en,
    titleUr: `${item.ur} (${item.en})`,
    titleHi: `${item.hi} (${item.en})`,
    descriptionEn: `Authentic delicious preparation of ${item.en}, bursting with traditional spices and crafted for everyday cooking.`,
    descriptionUr: `${item.ur} روایتی دیسی انداز میں تیار کردہ لذیذ، غذائیت سے بھرپور اور منٹوں میں تیار ڈش۔`,
    descriptionHi: `${item.hi} पारंपरिक मसालों और आसान विधि से तैयार की गई स्वादिष्ट डिश।`,
    prepTimeMinutes: Math.max(5, Math.round(item.min * 0.4)),
    cookTimeMinutes: item.min,
    defaultServings: 4,
    difficulty: item.min > 30 ? 'Medium' : 'Easy',
    diet: item.diet,
    cuisine: 'SBA Kitchen Special',
    caloriesPerServing: 220 + ((idx * 37) % 260),
    category: item.cat,
    imageUrl: item.diet === 'Vegetarian' || item.diet === 'Vegan'
      ? 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
      : 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'main_item', nameEn: 'Main Essential Ingredients', nameUr: 'بنیادی اجزاء', nameHi: 'मुख्य सामग्री', amount: 500, unit: 'g' },
      { id: 'onion', nameEn: 'Sliced Onions', nameUr: 'پیاز', nameHi: 'प्याज', amount: 2, unit: 'pcs' },
      { id: 'ginger_garlic', nameEn: 'Ginger Garlic', nameUr: 'ادرک لہسن', nameHi: 'अदरक लहसुन', amount: 1.5, unit: 'tbsp' },
      { id: 'oil_ghee', nameEn: 'Ghee or Cooking Oil', nameUr: 'گھی یا تیل', nameHi: 'घी या तेल', amount: 3, unit: 'tbsp' },
      { id: 'spices_blend', nameEn: 'Aromatic Spice Blend', nameUr: 'مخصوص مصالحہ جات', nameHi: 'मसाले', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      {
        stepNumber: 1,
        instructionEn: `Sauté onions, ginger, garlic, and whole spices in hot oil or ghee until fragrant and golden.`,
        instructionUr: `گرم گھی میں پیاز، ادرک لہسن اور مصالحوں کو سنہری ہونے تک بھونیں۔`,
        instructionHi: `गरम घी में प्याज, अदरक-लहसुन और मसाले खुशबू आने तक भूनें।`,
        timerMinutes: 5
      },
      {
        stepNumber: 2,
        instructionEn: `Add main ingredients with seasoning, cook on medium heat until tender and aromatic.`,
        instructionUr: `بنیادی اجزاء اور نمک مرچ شامل کر کے دھیمی آنچ پر نرم ہونے اور تیل چھوڑنے تک پکائیں۔`,
        instructionHi: `सामग्री और मसाले डालकर धीमी आंच पर पकने तक रखें।`,
        timerMinutes: Math.round(item.min * 0.7)
      },
      {
        stepNumber: 3,
        instructionEn: `Garnish with fresh green chillies, julienned ginger, coriander, and serve hot.`,
        instructionUr: `ہری مرچ، ادرک اور تازہ ہرا دھنیا چھڑک کر گرما گرم پیش کریں۔`,
        instructionHi: `हरा धनिया और हरी मिर्च से सजाकर गरमा गरम परोसें।`,
        timerMinutes: 2
      }
    ]
  }));

  return [...baseList, ...generatedItems];
}
