import { Recipe } from '../../types';

export const dessertRecipes: Recipe[] = [
  {
    id: 'shahi_kheer',
    titleEn: 'Shahi Zafrani Kheer',
    titleUr: 'شاہی زعفرانی کھیر (Shahi Kheer)',
    titleHi: 'शाही खीर (Shahi Kheer)',
    descriptionEn: 'Slow-simmered whole milk rice pudding infused with saffron, green cardamom, crushed pistachios, and silver leaf.',
    descriptionUr: 'خالص دودھ، کٹے چاولوں، الائچی، زعفران اور پستے بادام سے تیار دھیمی آنچ پر پکی روایتی کھیر۔',
    descriptionHi: 'गाढ़े दूध, बासमती चावल, केसर और मेवों से धीमी आंच पर पकाई गई शाही खीर।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 45,
    defaultServings: 6,
    difficulty: 'Medium',
    diet: 'Vegetarian',
    cuisine: 'Mughlai / Pakistani',
    caloriesPerServing: 320,
    category: 'Desserts',
    imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'milk', nameEn: 'Full Cream Milk', nameUr: 'خالص فل کریم دودھ', nameHi: 'दूध', amount: 1.5, unit: 'liters' },
      { id: 'rice', nameEn: 'Basmati Rice (soaked & crushed)', nameUr: 'بھگو کر کچلے باسمتی چاول', nameHi: 'बासमती चावल', amount: 0.5, unit: 'cup' },
      { id: 'sugar', nameEn: 'Sugar', nameUr: 'چینی', nameHi: 'चीनी', amount: 0.75, unit: 'cup' },
      { id: 'saffron', nameEn: 'Saffron Strands', nameUr: 'زعفران', nameHi: 'केसर', amount: 1, unit: 'pinch' },
      { id: 'nuts', nameEn: 'Pistachios & Almonds', nameUr: 'پستہ اور بادام', nameHi: 'पिस्ता व बादाम', amount: 0.25, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Bring milk to boil in heavy pot. Add coarse crushed rice and simmer on low heat, stirring continuously to prevent sticking.', instructionUr: 'دودھ کو ابال کر کچلے چاول ڈالیں اور دھیمی آنچ پر چمچ چلاتے ہوئے پکائیں۔', instructionHi: 'दूध उबालकर चावल डालें और धीमी आंच पर चलाते हुए पकाएं।', timerMinutes: 30 },
      { stepNumber: 2, instructionEn: 'When rice is completely melted and milk has reduced to rabri consistency, stir in sugar, saffron milk, and cardamom. Chill before serving.', instructionUr: 'جب چاول گھل جائیں اور کھیر گاڑھی ہو جائے تو چینی اور زعفران ڈال کر 10 منٹ پکائیں اور ٹھنڈا کریں۔', instructionHi: 'खीर गाढ़ी होने पर चीनी और केसर डालें, ठंडा करके परोसें।', timerMinutes: 15 }
    ]
  },
  {
    id: 'gulab_jamun',
    titleEn: 'Melt-in-Mouth Gulab Jamun',
    titleUr: 'گرم گلاب جامن (Gulab Jamun)',
    titleHi: 'गरम गुलाब जामुन (Gulab Jamun)',
    descriptionEn: 'Soft khoya and milk powder dumplings fried to deep golden amber and soaked in warm rosewater and cardamom sugar syrup.',
    descriptionUr: 'کھوئے اور دودھ سے تیار سنہری تلے ہوئے رس بھرے لذیذ گلاب جامن۔',
    descriptionHi: 'खोया और दूध से बने चाशनी में डूबे हुए गरमा गरम गुलाब जामुन।',
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    defaultServings: 6,
    difficulty: 'Hard',
    diet: 'Vegetarian',
    cuisine: 'Desi Mithai',
    caloriesPerServing: 280,
    category: 'Desserts',
    imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'milk_powder', nameEn: 'Full Fat Milk Powder / Khoya', nameUr: 'خشک دودھ یا کھویا', nameHi: 'मिल्क पाउडर या खोया', amount: 1, unit: 'cup' },
      { id: 'flour', nameEn: 'Maida', nameUr: 'میدہ', nameHi: 'मैदा', amount: 2, unit: 'tbsp' },
      { id: 'sugar', nameEn: 'Sugar for syrup', nameUr: 'چینی شیرے کے لیے', nameHi: 'चीनी', amount: 1.5, unit: 'cups' },
      { id: 'rose_water', nameEn: 'Rose Water or Kewra', nameUr: 'عرق گلاب', nameHi: 'गुलाब जल', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Make warm cardamom sugar syrup with rosewater, keep warm.', instructionUr: 'چینی اور الائچی کا ہلکا شیرہ بنا کر گرم رکھیں۔', instructionHi: 'इलायची और गुलाब जल की चाशनी बनाएं।', timerMinutes: 8 },
      { stepNumber: 2, instructionEn: 'Mix milk powder with flour, baking powder, ghee, and milk into smooth dough. Roll tiny crack-free balls.', instructionUr: 'خشک دودھ اور میدے سے نرم آٹا گوندھ کر بغیر لکیروں والی گولیاں بنائیں۔', instructionHi: 'चिकनी छोटी-छोटी गोलियां बनाएं।', timerMinutes: 6 },
      { stepNumber: 3, instructionEn: 'Fry on very low flame in ghee/oil until evenly amber brown. Drop directly into warm syrup and let soak for 1 hour.', instructionUr: 'ہلکی آنچ پر سنہری تل کر گرم شیرے میں ڈالیں اور ایک گھنٹہ بھیگنے دیں۔', instructionHi: 'धीमी आंच पर तलकर चाशनी में डालें।', timerMinutes: 10 }
    ]
  },
  {
    id: 'gajar_ka_halwa',
    titleEn: 'Shahi Gajar Ka Halwa',
    titleUr: 'گاجر کا حلوہ (Gajar Ka Halwa)',
    titleHi: 'गाजर का हलवा (Gajar Ka Halwa)',
    descriptionEn: 'Grated red winter carrots cooked in full-cream milk until caramelized, sautéed with rich desi ghee, khoya, and golden nuts.',
    descriptionUr: 'سرخ گاجروں، خالص دودھ، دیسی گھی اور کھوئے سے تیار سردیوں کی خاص سوغات۔',
    descriptionHi: 'लाल गाजर, दूध, खोया और देसी घी में भुना हुआ पारंपरिक हलवा।',
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    defaultServings: 6,
    difficulty: 'Medium',
    diet: 'Vegetarian',
    cuisine: 'Punjabi / Mughlai',
    caloriesPerServing: 360,
    category: 'Desserts',
    imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'carrots', nameEn: 'Grated Red Carrots', nameUr: 'کدوکش سرخ گاجریں', nameHi: 'कद्दूकस गाजर', amount: 1, unit: 'kg' },
      { id: 'milk', nameEn: 'Whole Milk', nameUr: 'دودھ', nameHi: 'दूध', amount: 1, unit: 'liter' },
      { id: 'ghee', nameEn: 'Desi Ghee', nameUr: 'دیسی گھی', nameHi: 'देसी घी', amount: 4, unit: 'tbsp' },
      { id: 'khoya', nameEn: 'Khoya / Mawa', nameUr: 'کھویا', nameHi: 'मावा / खोया', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Simmer grated carrots in milk on medium flame until all milk is absorbed.', instructionUr: 'گاجروں کو دودھ میں خشک ہونے تک پکائیں۔', instructionHi: 'गाजर को दूध सूखने तक पकाएं।', timerMinutes: 30 },
      { stepNumber: 2, instructionEn: 'Add desi ghee and sugar, roast vigorously for 10 mins until shiny. Fold in khoya and roasted nuts.', instructionUr: 'دیسی گھی اور چینی ڈال کر خوب بھونیں اور کھویا و میوے شامل کریں۔', instructionHi: 'देसी घी और चीनी डालकर भूनें, मावा और मेवे मिलाएं।', timerMinutes: 15 }
    ]
  },
  {
    id: 'shahi_tukray',
    titleEn: 'Old City Shahi Tukray',
    titleUr: 'شاہی ٹکڑے (Shahi Tukray)',
    titleHi: 'शाही टुकड़े (Shahi Tukray)',
    descriptionEn: 'Crisp ghee-fried bread triangles dipped in saffron sugar syrup, bathed in thick rich rabri milk, and decorated with nuts.',
    descriptionUr: 'دیسی گھی میں تلے ہوئے بریڈ سلائس، الائچی کے شیرے اور گاڑھی ربڑی ملائی میں ڈوبے شاہی ٹکڑے۔',
    descriptionHi: 'देसी घी में तले ब्रेड स्लाइस, चाशनी और गाढ़ी रबड़ी से बने शाही टुकड़े।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    defaultServings: 5,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    cuisine: 'Hyderabadi / Delhi',
    caloriesPerServing: 350,
    category: 'Desserts',
    imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'bread', nameEn: 'White Bread Slices', nameUr: 'بریڈ سلائس', nameHi: 'ब्रेड', amount: 6, unit: 'pcs' },
      { id: 'milk', nameEn: 'Milk for Rabri', nameUr: 'دودھ ربڑی کے لیے', nameHi: 'दूध', amount: 1, unit: 'liter' },
      { id: 'ghee', nameEn: 'Desi Ghee for frying', nameUr: 'دیسی گھی', nameHi: 'घी', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Cut bread into triangles and shallow fry in desi ghee until crisp and amber brown.', instructionUr: 'بریڈ کے تکونے کاٹ کر دیسی گھی میں کرسپی سنہری تل لیں۔', instructionHi: 'ब्रेड को घी में सुनहरा और कुरकुरा तलें।', timerMinutes: 6 },
      { stepNumber: 2, instructionEn: 'Dip briefly in cardamom sugar syrup, arrange on platter, and smother with thick condensed rabri milk.', instructionUr: 'شیرے میں ڈپ کر کے پلیٹ میں لگائیں اور اوپر سے گاڑھی ربڑی ڈال کر سجائیں۔', instructionHi: 'चाशनी में डुबोकर प्लेट में लगाएं और गाढ़ी रबड़ी डालें।', timerMinutes: 8 }
    ]
  },
  {
    id: 'rasmalai_delight',
    titleEn: 'Kesar Pista Rasmalai',
    titleUr: 'زعفرانی پستہ رس ملائی (Rasmalai)',
    titleHi: 'रसमलाई (Rasmalai)',
    descriptionEn: 'Spongy soft cottage cheese dumplings poached in light syrup, steeped in chilled saffron and pistachio condensed milk.',
    descriptionUr: 'زعفران اور پستے کے گاڑھے ٹھنڈے دودھ میں ڈوبی ہوئی روئی جیسی نرم ملائم رس ملائی۔',
    descriptionHi: 'केसर और पिस्ते के गाढ़े ठंडे दूध में डूबी हुई स्पंजी रसमलाई।',
    prepTimeMinutes: 25,
    cookTimeMinutes: 20,
    defaultServings: 5,
    difficulty: 'Hard',
    diet: 'Vegetarian',
    cuisine: 'Bengali / Desi',
    caloriesPerServing: 260,
    category: 'Desserts',
    imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chenna', nameEn: 'Fresh Paneer / Chenna', nameUr: 'تازہ چھینا', nameHi: 'छेना', amount: 300, unit: 'g' },
      { id: 'milk', nameEn: 'Rich Milk for Rabri', nameUr: 'دودھ', nameHi: 'दूध', amount: 1, unit: 'liter' },
      { id: 'saffron', nameEn: 'Saffron & Cardamom', nameUr: 'زعفران و الائچی', nameHi: 'केसर व इलायची', amount: 1, unit: 'pinch' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Knead fresh chenna until smooth, shape into flat discs, cook in boiling sugar syrup for 10 mins until puffy.', instructionUr: 'چھینے کو ملائم کر کے پیڑے بنائیں اور ابلتے شیرے میں 10 منٹ پکا کر پھلائیں۔', instructionHi: 'छेना मसलकर गोलियां बनाएं और चाशनी में 10 मिनट पकाएं।', timerMinutes: 12 },
      { stepNumber: 2, instructionEn: 'Simmer milk with saffron, sugar, and crushed nuts until reduced. Squeeze discs gently and chill in the fragrant saffron milk.', instructionUr: 'زعفرانی دودھ پکا کر ٹھنڈا کریں اور رس ملائی کے پیڑے اس میں بھگو دیں۔', instructionHi: 'केसर दूध में रसमलाई डालकर फ्रिज में ठंडा करें।', timerMinutes: 10 }
    ]
  }
];
