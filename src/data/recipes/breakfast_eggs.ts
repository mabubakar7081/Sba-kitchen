import { Recipe } from '../../types';

export const breakfastRecipes: Recipe[] = [
  {
    id: 'desi_masala_omelette',
    titleEn: 'Street-Style Desi Masala Omelette',
    titleUr: 'دیسی مصالحہ آملیٹ (Masala Omelette)',
    titleHi: 'देसी मसाला आमलेट (Masala Omelette)',
    descriptionEn: 'Fluffy browned egg omelette whisked with crunchy onions, fiery green chillies, fresh coriander, tomatoes, and red chilli powder.',
    descriptionUr: 'پیاز، ٹماٹر، ہری مرچ اور ہرے دھنیے سے تیار ہر صبح کا روایتی کڑک آملیٹ۔',
    descriptionHi: 'बारीक प्याज, टमाटर, हरी मिर्च और धनिए से बना तीखा और फूला हुआ देसी आमलेट।',
    prepTimeMinutes: 5,
    cookTimeMinutes: 5,
    defaultServings: 1,
    difficulty: 'Easy',
    diet: 'Non-Veg',
    cuisine: 'Desi Street Breakfast',
    caloriesPerServing: 190,
    category: 'Breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'eggs', nameEn: 'Fresh Eggs', nameUr: 'انڈے', nameHi: 'अंडे', amount: 2, unit: 'pcs' },
      { id: 'onion', nameEn: 'Finely Chopped Onion', nameUr: 'باریک پیاز', nameHi: 'बारीक प्याज', amount: 2, unit: 'tbsp' },
      { id: 'green_chilli', nameEn: 'Minced Green Chillies', nameUr: 'ہری مرچیں', nameHi: 'हरी मिर्च', amount: 1, unit: 'pcs' },
      { id: 'butter', nameEn: 'Butter or Oil', nameUr: 'مکھن یا تیل', nameHi: 'मक्खन', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Whisk eggs with onions, green chillies, coriander, salt, and red chilli flakes until frothy.', instructionUr: 'انڈوں میں پیاز، ہری مرچ، ہرا دھنیا اور مصالحے ڈال کر خوب پھینٹیں۔', instructionHi: 'अंडों में प्याज, हरी मिर्च और मसाले डालकर अच्छी तरह फेंटें।', timerMinutes: 2 },
      { stepNumber: 2, instructionEn: 'Pour into hot buttered skillet, cook until golden underneath, flip and cook top for 1 minute.', instructionUr: 'گرم مکھن میں ڈال کر دونوں طرف سے سنہری سینک لیں۔', instructionHi: 'तवे पर डालकर दोनों तरफ से सुनहरा सेंक लें।', timerMinutes: 3 }
    ]
  },
  {
    id: 'anda_ghotala',
    titleEn: 'Karachi Dhaba Anda Ghotala',
    titleUr: 'کراچی انڈا گھوٹالہ (Anda Ghotala)',
    titleHi: 'अंडा घोटाला (Anda Ghotala)',
    descriptionEn: 'Spicy buttery tomato-onion curry blended with chopped boiled eggs, scrambled eggs, and crowned with a sunny-side-up fried egg.',
    descriptionUr: 'ابلے انڈوں کے قیمے اور مکھن میں بنے مصالحے پر ہاف فرائی انڈے کی ٹاپنگ، گرم پراٹھے کے ساتھ لاجواب۔',
    descriptionHi: 'उबले अंडे, भुर्जी और हाफ फ्राई अंडे का मक्खनदार तीखा घोटाला।',
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    defaultServings: 2,
    difficulty: 'Easy',
    diet: 'Non-Veg',
    cuisine: 'Karachi Street Dhaba',
    caloriesPerServing: 360,
    category: 'Breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'eggs', nameEn: 'Eggs (2 boiled + 2 raw)', nameUr: 'انڈے (2 ابلے + 2 کچے)', nameHi: 'अंडे', amount: 4, unit: 'pcs' },
      { id: 'butter', nameEn: 'Butter', nameUr: 'مکھن', nameHi: 'मक्खन', amount: 3, unit: 'tbsp' },
      { id: 'tomato', nameEn: 'Tomatoes', nameUr: 'ٹماٹر', nameHi: 'टमाटर', amount: 2, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Chop boiled eggs finely. Sauté onions, tomatoes, and pav bhaji/karahi masala in butter.', instructionUr: 'ابلے انڈے باریک کاٹ لیں اور ٹماٹر مصالحے کو مکھن میں بھونیں۔', instructionHi: 'उबले अंडे काटें और मसाले को मक्खन में भूनें।', timerMinutes: 5 },
      { stepNumber: 2, instructionEn: 'Mix chopped boiled eggs and 1 raw egg into gravy, scramble together. Top with a sunny-side-up fried egg.', instructionUr: 'ابلے انڈے اور کچا انڈا ملا کر مکھن میں گھوٹیں اور اوپر ہاف فرائی انڈا رکھیں۔', instructionHi: 'अंडे मिलाकर पकाएं और ऊपर से हाफ फ्राई अंडा रखें।', timerMinutes: 5 }
    ]
  },
  {
    id: 'halwa_puri_suji_halwa',
    titleEn: 'Degi Suji Ka Halwa (Halwa Puri Style)',
    titleUr: 'حلوہ پوری والا سوجی کا حلوہ (Suji Halwa)',
    titleHi: 'सूजी का हलवा (Suji Halwa)',
    descriptionEn: 'Soft melt-in-mouth semolina halwa cooked in pure desi ghee with saffron orange tint, cardamom syrup, and slivered almonds.',
    descriptionUr: 'دیسی گھی اور الائچی کے شیرے میں بنی رسیلی اور ملائم حلوہ پوری والی خاص سوجی۔',
    descriptionHi: 'देसी घी और इलायची की चाशनी में बना रसीला और खुशबूदार सूजी का हलवा।',
    prepTimeMinutes: 5,
    cookTimeMinutes: 15,
    defaultServings: 4,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    cuisine: 'Desi Breakfast',
    caloriesPerServing: 310,
    category: 'Breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'suji', nameEn: 'Semolina (Suji)', nameUr: 'سوجی', nameHi: 'सूजी', amount: 1, unit: 'cup' },
      { id: 'ghee', nameEn: 'Desi Ghee', nameUr: 'دیسی گھی', nameHi: 'देसी घी', amount: 0.75, unit: 'cup' },
      { id: 'sugar', nameEn: 'Sugar', nameUr: 'چینی', nameHi: 'चीनी', amount: 1, unit: 'cup' },
      { id: 'cardamom', nameEn: 'Cardamom pods', nameUr: 'سبز الائچی', nameHi: 'इलायची', amount: 4, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Roast suji in desi ghee with green cardamom until fragrant and light golden.', instructionUr: 'سوجی کو دیسی گھی اور الائچی کے ساتھ خوشبو آنے تک بھونیں۔', instructionHi: 'सूजी को देसी घी में खुशबू आने तक भूनें।', timerMinutes: 7 },
      { stepNumber: 2, instructionEn: 'Boil sugar with 3 cups water and yellow food color. Pour hot syrup carefully into roasted suji, stir vigorously until halwa thickens and releases ghee.', instructionUr: 'چینی کا شیرہ بنا کر بھنی سوجی میں ڈالیں، چمچ چلاتے ہوئے گاڑھا ہونے تک پکائیں تاکہ گھی الگ ہو جائے۔', instructionHi: 'चाशनी डालकर लगातार चलाएं जब तक हलवा गाढ़ा न हो जाए।', timerMinutes: 6 }
    ]
  },
  {
    id: 'desi_shakshuka',
    titleEn: 'Desi Spiced Shakshuka',
    titleUr: 'دیسی شکشوکہ (Desi Shakshuka)',
    titleHi: 'शकशूका (Desi Shakshuka)',
    descriptionEn: 'Poached eggs nestled in a simmered sauce of crushed tomatoes, cumin, green chillies, garlic, and fresh coriander.',
    descriptionUr: 'ٹماٹروں، لہسن، زیرہ اور ہری مرچوں کی گاڑھی پیوری میں پکے ہوئے ثابت انڈے۔',
    descriptionHi: 'टमाटर, लहसुन और जीरे की तीखी ग्रेवी में पोच किए गए अंडे।',
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    defaultServings: 2,
    difficulty: 'Easy',
    diet: 'Non-Veg',
    cuisine: 'Middle Eastern / Desi',
    caloriesPerServing: 240,
    category: 'Breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'eggs', nameEn: 'Eggs', nameUr: 'انڈے', nameHi: 'अंडे', amount: 3, unit: 'pcs' },
      { id: 'tomato', nameEn: 'Crushed Tomatoes', nameUr: 'ٹماٹر', nameHi: 'टमाटर', amount: 3, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Simmer tomatoes with garlic, cumin, paprika, and onions in olive oil until a thick sauce forms.', instructionUr: 'ٹماٹر اور لہسن کو تیل میں پکا کر گاڑھی ساس بنائیں۔', instructionHi: 'टमाटर और लहसुन की गाढ़ी सॉस बनाएं।', timerMinutes: 8 },
      { stepNumber: 2, instructionEn: 'Make 3 small wells, crack whole eggs into them, cover skillet and steam until whites set and yolks remain runny.', instructionUr: 'سوراخ بنا کر انڈے توڑیں اور ڈھکن ڈھانپ کر ہلکی آنچ پر پکنے دیں۔', instructionHi: 'अंडे डालकर धीमी आंच पर ढककर पकाएं।', timerMinutes: 6 }
    ]
  }
];
