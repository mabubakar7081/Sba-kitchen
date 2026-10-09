import { Recipe } from '../../types';

export const breadRecipes: Recipe[] = [
  {
    id: 'aloo_paratha',
    titleEn: 'Crispy Butter Aloo Paratha',
    titleUr: 'آلو کا پراٹھا (Aloo Paratha)',
    titleHi: 'आलू पराठा (Aloo Paratha)',
    descriptionEn: 'Whole wheat flatbread stuffed with spiced mashed potatoes, fresh coriander, green chillies, and fried golden in desi ghee.',
    descriptionUr: 'چٹپٹے ابلے آلوؤں، ہرا دھنیا، کٹی لال مرچ اور مکھن سے بھرا گرما گرم خستہ پراٹھا۔',
    descriptionHi: 'चटपटे उबले आलू और हरी मिर्च से भरा हुआ देसी घी का कुरकुरा पराठा।',
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    defaultServings: 3,
    difficulty: 'Medium',
    diet: 'Vegetarian',
    cuisine: 'Punjabi Breakfast',
    caloriesPerServing: 320,
    category: 'Breads',
    imageUrl: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'flour', nameEn: 'Whole Wheat Atta', nameUr: 'گندم کا آٹا', nameHi: 'गेहूं का आटा', amount: 2, unit: 'cups' },
      { id: 'potato', nameEn: 'Boiled Mashed Potatoes', nameUr: 'ابلے ہوئے آلو', nameHi: 'उबले आलू', amount: 3, unit: 'pcs' },
      { id: 'green_chilli', nameEn: 'Fine Green Chillies', nameUr: 'باریک ہری مرچ', nameHi: 'हरी मिर्च', amount: 2, unit: 'pcs' },
      { id: 'butter', nameEn: 'Desi Ghee or Butter', nameUr: 'دیسی گھی یا مکھن', nameHi: 'देसी घी', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Mix mashed potatoes with chopped coriander, green chillies, cumin, salt, and chilli powder.', instructionUr: 'ابلے آلوؤں میں ہرا دھنیا، ہری مرچ اور تمام مصالحے مکس کر کے فلنگ بنائیں۔', instructionHi: 'उबले आलू में मसाले और धनिया मिलाकर भरावन बनाएं।', timerMinutes: 5 },
      { stepNumber: 2, instructionEn: 'Roll two small pedas, stuff potato mix in between or inside, seal edges, and roll flat.', instructionUr: 'پیڑے بنا کر درمیان میں آلو کی فلنگ بھریں اور بیل لیں۔', instructionHi: 'लोई बनाकर आलू भरें और बेलें।', timerMinutes: 5 },
      { stepNumber: 3, instructionEn: 'Roast on hot tawa with ghee on both sides until golden brown and crispy. Serve with dahi and butter.', instructionUr: 'گرم توے پر گھی لگا کر دونوں طرف سے سنہری اور کرسپی سیکیں۔', instructionHi: 'तवे पर घी लगाकर दोनों तरफ से कुरकुरा सेंकें।', timerMinutes: 5 }
    ]
  },
  {
    id: 'garlic_butter_naan',
    titleEn: 'Garlic Butter Naan (Tawa Method)',
    titleUr: 'گارلک بٹر نان (Garlic Naan)',
    titleHi: 'गार्लिक बटर नान (Garlic Naan)',
    descriptionEn: 'Soft fluffy leavened flatbread brushed with crushed roasted garlic, melted butter, and fresh coriander, cooked on a stovetop cast iron tawa.',
    descriptionUr: 'لہسن، ہرا دھنیا اور پگھلے مکھن سے سجا روئی جیسا نرم توے پر تیار تندوری نان۔',
    descriptionHi: 'लहसुन, मक्खन और धनिए की खुशबू वाला तवे पर बना बेहद नरम नान।',
    prepTimeMinutes: 40,
    cookTimeMinutes: 15,
    defaultServings: 4,
    difficulty: 'Medium',
    diet: 'Vegetarian',
    cuisine: 'Desi Restaurant Style',
    caloriesPerServing: 280,
    category: 'Breads',
    imageUrl: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'maida', nameEn: 'All Purpose Flour (Maida)', nameUr: 'میدہ', nameHi: 'मैदा', amount: 2, unit: 'cups' },
      { id: 'yogurt', nameEn: 'Yogurt', nameUr: 'دہی', nameHi: 'दही', amount: 0.25, unit: 'cup' },
      { id: 'garlic', nameEn: 'Minced Garlic', nameUr: 'باریک کٹا لہسن', nameHi: 'बारीक लहसुन', amount: 2, unit: 'tbsp' },
      { id: 'butter', nameEn: 'Melted Butter', nameUr: 'مکھن', nameHi: 'मक्खन', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Knead flour with yogurt, baking powder, salt, and milk into a soft dough. Rest 30 mins.', instructionUr: 'میدے میں دہی اور بیکنگ پاؤڈر ڈال کر نرم گوندھیں اور 30 منٹ رکھیں۔', instructionHi: 'दही और दूध से नरम आटा गूंथकर 30 मिनट रखें।', timerMinutes: 10 },
      { stepNumber: 2, instructionEn: 'Roll tear-drop shape, press garlic and coriander on top, wet bottom with water, stick to hot tawa, flip tawa over direct flame to cook bubbles.', instructionUr: 'نان بیل کر لہسن لگائیں، الٹی سائیڈ پر پانی لگا کر توے پر چپکائیں اور توہ الٹا کر کے سینکیں۔', instructionHi: 'पानी लगाकर तवे पर चिपकाएं और उल्टा करके आंच पर सेंकें।', timerMinutes: 4 },
      { stepNumber: 3, instructionEn: 'Brush immediately with generous melted butter.', instructionUr: 'اتار کر فورا ڈھیر سارا مکھن لگائیں۔', instructionHi: 'उतारकर तुरंत मक्खन लगाएं।', timerMinutes: 1 }
    ]
  },
  {
    id: 'lachha_paratha',
    titleEn: 'Multi-Layered Crispy Lachha Paratha',
    titleUr: 'لچھا پراٹھا (Lachha Paratha)',
    titleHi: 'लच्छा पराठा (Lachha Paratha)',
    descriptionEn: 'Golden, flaky, ring-layered flatbread created by pleating dough strips with ghee and roasting until crunchy layers flake apart.',
    descriptionUr: 'گھی کی تہوں اور بل دار لچھوں سے تیار خستہ، لذیذ اور پرت دار روایتی پراٹھا۔',
    descriptionHi: 'परतदार और कुरकुरा देसी घी का लच्छा पराठा।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    defaultServings: 3,
    difficulty: 'Medium',
    diet: 'Vegetarian',
    cuisine: 'Punjabi',
    caloriesPerServing: 340,
    category: 'Breads',
    imageUrl: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'flour', nameEn: 'Wheat Flour & Maida blend', nameUr: 'آٹا اور میدہ مکس', nameHi: 'आटा व मैदा', amount: 2, unit: 'cups' },
      { id: 'ghee', nameEn: 'Desi Ghee', nameUr: 'دیسی گھی', nameHi: 'देसी घी', amount: 4, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Roll dough thin, spread ghee, dust flour, fan-fold pleats like an accordion, roll into spiral pinwheel.', instructionUr: 'روٹی بیل کر گھی لگائیں، پنکھے کی طرح پلیٹس بنا کر گول لچھا پیڑا بنائیں۔', instructionHi: 'घी लगाकर प्लीट्स बनाएं और गोल लोई बनाएं।', timerMinutes: 8 },
      { stepNumber: 2, instructionEn: 'Roll gently and fry on medium heat with ghee, clapping paratha between palms to release layers.', instructionUr: 'ہلکے ہاتھ سے بیل کر دونوں طرف گھی لگا کر تلیں اور ہاتھوں سے کچل کر لچھے کھولیں۔', instructionHi: 'तवे पर सेकें और हाथों से थपथपाकर परतें खोलें।', timerMinutes: 6 }
    ]
  },
  {
    id: 'halwa_puri_puris',
    titleEn: 'Puffy Crispy Halwa Puri Puris',
    titleUr: 'پھولی ہوئی خستہ پوری (Halwa Puri)',
    titleHi: 'गरमा गरम पूरियां (Puri)',
    descriptionEn: 'Golden balloon-puffed deep fried flatbreads made with unbleached flour and semolina for that signature light crunch.',
    descriptionUr: 'سوجی اور میدے سے تیار گھی میں تلی روئی کی طرح نرم اور غبارے جیسی پھولی ہوئی پوری۔',
    descriptionHi: 'सूजी और मैदा से बनी फूली-फूली और खस्ता पूरियां।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    defaultServings: 4,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    cuisine: 'Desi Breakfast Special',
    caloriesPerServing: 260,
    category: 'Breads',
    imageUrl: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'flour', nameEn: 'Maida', nameUr: 'میدہ', nameHi: 'मैदा', amount: 2, unit: 'cups' },
      { id: 'suji', nameEn: 'Semolina (Suji)', nameUr: 'سوجی', nameHi: 'सूजी', amount: 2, unit: 'tbsp' },
      { id: 'oil', nameEn: 'Oil for frying', nameUr: 'تیل تلنے کے لیے', nameHi: 'तेल', amount: 2, unit: 'cups' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Knead flour, suji, salt, and water into a semi-firm pliable dough. Rest 15 mins.', instructionUr: 'میدے اور سوجی کو گوندھ کر 15 منٹ کے لیے ڈھانپ دیں۔', instructionHi: 'आटा और सूजी गूंथकर 15 मिनट रखें।', timerMinutes: 5 },
      { stepNumber: 2, instructionEn: 'Roll small circles thinly, slide into smoking hot oil, gently press with slotted spoon until it balloons up, flip 5 seconds, drain.', instructionUr: 'پوری بیل کر کھولتے ہوئے گرم تیل میں ڈالیں، چمچ سے ہلکا دبائیں تاکہ غبارے کی طرح پھول جائے، اور فورا نکال لیں۔', instructionHi: 'गरम तेल में डालकर कलछी से दबाएं, फूलने पर पलटें।', timerMinutes: 3 }
    ]
  },
  {
    id: 'roghani_naan',
    titleEn: 'Royal Roghani Naan',
    titleUr: 'روغنی نان (Roghani Naan)',
    titleHi: 'रोगनी नान (Roghani Naan)',
    descriptionEn: 'Thick, pillowy leavened bread embossed with fingerprint patterns, brushed with egg wash and milk, sprinkled with sesame seeds, and baked.',
    descriptionUr: 'سفید تلوں، کلونجی اور مکھن سے سجا روایتی روغنی نان، قورمے اور نہاری کے لیے بہترین۔',
    descriptionHi: 'सफेद तिल, कलौंजी और मक्खन से सजा मोटा और बेहद मुलायम रोगनी नान।',
    prepTimeMinutes: 30,
    cookTimeMinutes: 15,
    defaultServings: 4,
    difficulty: 'Medium',
    diet: 'Vegetarian',
    cuisine: 'Pakistani Bakery / Street',
    caloriesPerServing: 310,
    category: 'Breads',
    imageUrl: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'flour', nameEn: 'Flour (Maida)', nameUr: 'میدہ', nameHi: 'मैदा', amount: 2.5, unit: 'cups' },
      { id: 'sesame', nameEn: 'White Sesame Seeds', nameUr: 'سفید تل', nameHi: 'सफेद तिल', amount: 2, unit: 'tbsp' },
      { id: 'butter', nameEn: 'Ghee or Butter', nameUr: 'دیسی گھی', nameHi: 'घी', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Roll thick disc, make decorative dimple indentations with fingers, brush with milk-egg wash and sesame seeds.', instructionUr: 'موٹا نان بیل کر انگلیوں سے ڈیزائن بنائیں، تل اور دودھ لگائیں۔', instructionHi: 'नाॅन पर उंगलियों से डिजाइन बनाएं और तिल लगाएं।', timerMinutes: 5 },
      { stepNumber: 2, instructionEn: 'Bake in tandoor or hot oven until golden brown with fluffy interior, brush with hot ghee.', instructionUr: 'اوون یا توے پر سنہری ہونے تک بیک کریں اور گھی لگائیں۔', instructionHi: 'ओवन या तवे पर सेकें और घी लगाएं।', timerMinutes: 8 }
    ]
  }
];
