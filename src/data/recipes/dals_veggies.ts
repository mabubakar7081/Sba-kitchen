import { Recipe } from '../../types';

export const vegetarianRecipes: Recipe[] = [
  {
    id: 'palak_paneer',
    titleEn: 'Dhaba Style Palak Paneer',
    titleUr: 'پالک پنیر (Palak Paneer)',
    titleHi: 'पालक पनीर (Palak Paneer)',
    descriptionEn: 'Golden pan-seared paneer cubes folded into a silky spiced spinach purée with garlic tarka and cream.',
    descriptionUr: 'تازہ پالک، لہسن کے تڑکے، کریم اور نرم پنیر کے کیوبز سے تیار مزیدار ڈش۔',
    descriptionHi: 'ताजा पालक की मखमली ग्रेवी में तली हुई पनीर और लहसुन का तड़का।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    defaultServings: 4,
    difficulty: 'Medium',
    diet: 'Vegetarian',
    cuisine: 'North Indian / Punjabi',
    caloriesPerServing: 310,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'paneer', nameEn: 'Cottage Cheese (Paneer)', nameUr: 'پنیر', nameHi: 'पनीर', amount: 300, unit: 'g' },
      { id: 'spinach', nameEn: 'Fresh Spinach', nameUr: 'تازہ پالک', nameHi: 'ताजा पालक', amount: 500, unit: 'g' },
      { id: 'cream', nameEn: 'Dairy Cream', nameUr: 'کریم', nameHi: 'क्रीम', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Blanch spinach in boiling water for 2 mins, shock in ice water, puree with green chillies.', instructionUr: 'پالک کو ابلتے پانی میں 2 منٹ ڈال کر ٹھنڈے پانی میں ڈالیں اور پیس لیں۔', instructionHi: 'पालक को उबालकर ठंडे पानी में डालें और पीस लें।', timerMinutes: 5 },
      { stepNumber: 2, instructionEn: 'Sauté garlic, onions, tomatoes with spices, add spinach puree and paneer cubes, simmer gently.', instructionUr: 'لہسن پیاز کا مصالحہ بھون کر پالک اور پنیر شامل کریں، کریم ڈال کر دم دیں۔', instructionHi: 'मसाला भूनकर पालक और पनीर मिलाएं, 5 मिनट पकाएं।', timerMinutes: 10 }
    ]
  },
  {
    id: 'daal_makhani',
    titleEn: 'Slow-Cooked Daal Makhani',
    titleUr: 'دال مکھنی (Daal Makhani)',
    titleHi: 'दाल मखनी (Daal Makhani)',
    descriptionEn: 'Whole black urad lentils and kidney beans slow-simmered overnight with butter, cream, and roasted fenugreek.',
    descriptionUr: 'کالی ماش کی دال، راجما، ڈھیر سارے مکھن اور کریم میں رات بھر دھیمی آنچ پر پکی شاہی دال۔',
    descriptionHi: 'उड़द दाल और राजमा को मक्खन और क्रीम में धीमी आंच पर पकाई गई दाल मखनी।',
    prepTimeMinutes: 20,
    cookTimeMinutes: 50,
    defaultServings: 5,
    difficulty: 'Medium',
    diet: 'Vegetarian',
    cuisine: 'Punjabi',
    caloriesPerServing: 380,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'black_urad', nameEn: 'Whole Black Gram', nameUr: 'ثابت کالی اڑد دال', nameHi: 'काली उड़द दाल', amount: 1, unit: 'cup' },
      { id: 'rajma', nameEn: 'Kidney Beans', nameUr: 'لال لوبیا / راجما', nameHi: 'राजमा', amount: 0.25, unit: 'cup' },
      { id: 'butter', nameEn: 'White/Yellow Butter', nameUr: 'مکھن', nameHi: 'मक्खन', amount: 4, unit: 'tbsp' },
      { id: 'cream', nameEn: 'Fresh Cream', nameUr: 'کریم', nameHi: 'क्रीम', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Boil soaked black dal and kidney beans until completely tender and creamy.', instructionUr: 'دال اور راجما کو نرم ہونے تک گلا لیں۔', instructionHi: 'दाल और राजमा को अच्छी तरह उबालें।', timerMinutes: 30 },
      { stepNumber: 2, instructionEn: 'Sauté ginger-garlic and tomato puree in butter, mash dal into it, simmer with cream on low heat.', instructionUr: 'مکھن میں ٹماٹر پیوری بھون کر دال مکس کریں، خوب گھوٹیں اور کریم شامل کریں۔', instructionHi: 'मक्खन में टमाटर प्यूरी भूनकर दाल और क्रीम मिलाएं।', timerMinutes: 20 }
    ]
  },
  {
    id: 'aloo_gobi',
    titleEn: 'Dhaba Aloo Gobi Masala',
    titleUr: 'آلو گوبھی مصالحہ (Aloo Gobi)',
    titleHi: 'आलू गोभी (Aloo Gobi)',
    descriptionEn: 'Tender cauliflower florets and golden potatoes sautéed with cumin seeds, turmeric, ginger juliennes, and fresh coriander.',
    descriptionUr: 'پھول گوبھی اور آلوؤں کا روایتی خشک مصالحے دار سالن، ادرک اور ہرا دھنیا سے سجا۔',
    descriptionHi: 'आलू और गोभी का भुना हुआ तीखा और स्वादिष्ट सूखा सालन।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    defaultServings: 4,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    cuisine: 'North Indian / Punjabi',
    caloriesPerServing: 220,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'cauliflower', nameEn: 'Cauliflower Florets', nameUr: 'پھول گوبھی', nameHi: 'फूल गोभी', amount: 1, unit: 'head' },
      { id: 'potato', nameEn: 'Potatoes (cubed)', nameUr: 'آلو کے ٹکڑے', nameHi: 'आलू', amount: 2, unit: 'pcs' },
      { id: 'ginger', nameEn: 'Julienned Ginger', nameUr: 'ادرک لچھے', nameHi: 'अदरक', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Sauté cumin, ginger, and turmeric in oil, add potatoes and cauliflower florets.', instructionUr: 'تیل میں زیرہ، ادرک اور ہلدی ڈال کر آلو اور گوبھی شامل کریں۔', instructionHi: 'जीरा, अदरक और हल्दी में आलू और गोभी डालें।', timerMinutes: 5 },
      { stepNumber: 2, instructionEn: 'Cover on low heat without excess water until tender, sprinkle garam masala and chopped coriander.', instructionUr: 'ہلکی آنچ پر ڈھانپ کر دم پر پکائیں اور گرم مصالحہ چھڑکیں۔', instructionHi: 'धीमी आंच पर ढककर पकाएं और धनिया डालें।', timerMinutes: 15 }
    ]
  },
  {
    id: 'bhindi_masala',
    titleEn: 'Crispy Bhindi Masala',
    titleUr: 'چٹپٹی بھنڈی مصالحہ (Bhindi Masala)',
    titleHi: 'भिंडी मसाला (Bhindi Masala)',
    descriptionEn: 'Okra stir-fried on high heat with sliced onions, cumin, dry mango powder (amchur), and tomatoes without any sliminess.',
    descriptionUr: 'پیاز کے لچھوں، ٹماٹر اور امچور مصالحے کے ساتھ تیار لیس کے بغیر کرکری بھنڈی۔',
    descriptionHi: 'प्याज, टमाटर और अमचूर पाउडर के साथ चटपटी और कुरकुरी भिंडी।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    defaultServings: 4,
    difficulty: 'Easy',
    diet: 'Vegan',
    cuisine: 'Desi Everyday',
    caloriesPerServing: 180,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'okra', nameEn: 'Fresh Okra (Bhindi)', nameUr: 'تازہ بھنڈی', nameHi: 'भिंडी', amount: 500, unit: 'g' },
      { id: 'onion', nameEn: 'Sliced Onions', nameUr: 'سلائس پیاز', nameHi: 'प्याज', amount: 2, unit: 'pcs' },
      { id: 'amchur', nameEn: 'Dry Mango Powder', nameUr: 'امچور یا چاٹ مصالحہ', nameHi: 'अमचूर पाउडर', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Wipe dry and cut okra. Shallow fry in hot oil until no sliminess remains.', instructionUr: 'بھنڈی کو دھو کر خشک کریں، کاٹ کر تیز تیل میں فرائی کریں تاکہ لیس ختم ہو جائے۔', instructionHi: 'भिंडी को तेल में हल्का तल लें।', timerMinutes: 6 },
      { stepNumber: 2, instructionEn: 'In same pan, sauté onions, add tomatoes, spices, toss fried okra gently and steam for 5 mins.', instructionUr: 'پیاز اور ٹماٹر بھون کر بھنڈی شامل کریں اور ہلکی آنچ پر 5 منٹ دم دیں۔', instructionHi: 'प्याज-टमाटर भूनकर भिंडी मिलाएं और 5 मिनट दम दें।', timerMinutes: 5 }
    ]
  },
  {
    id: 'lahori_chanay',
    titleEn: 'Lahori Murgh Chanay (or Secret Spiced Chanay)',
    titleUr: 'لاہوری چکڑ چھولے (Lahori Chanay)',
    titleHi: 'लाहौरी छोले (Lahori Chanay)',
    descriptionEn: 'Velvety chickpeas simmered in a dark peppery gravy made with boiled chickpea mash and aromatic spices.',
    descriptionUr: 'لاہور کے ناشتے کے مشہور گاڑھے چکڑ چھولے، کالی مرچ اور لونگ دارچینی کی خاص خوشبو کے ساتھ۔',
    descriptionHi: 'लाहौर के मशहूर गाढ़े और तीखे छोले, काली मिर्च के स्वाद के साथ।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    defaultServings: 5,
    difficulty: 'Medium',
    diet: 'Vegetarian',
    cuisine: 'Lahori Breakfast',
    caloriesPerServing: 290,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chickpeas', nameEn: 'White Chickpeas', nameUr: 'سفید چنے', nameHi: 'सफेद चने', amount: 2, unit: 'cups' },
      { id: 'baking_soda', nameEn: 'Baking Soda pinch', nameUr: 'میٹھا سوڈا', nameHi: 'मीठा सोडा', amount: 0.25, unit: 'tsp' },
      { id: 'black_pepper', nameEn: 'Crushed Black Pepper', nameUr: 'کالی مرچ', nameHi: 'काली मिर्च', amount: 1.5, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Boil soaked chickpeas with baking soda pinch until buttery soft. Mash 1/2 cup to thicken gravy.', instructionUr: 'چنوں کو سوڈا ڈال کر مکھن جیسا نرم گلا لیں۔ آدھا کپ چنے میش کر لیں۔', instructionHi: 'चनों को एकदम नरम उबालें और थोड़े मैश करें।', timerMinutes: 15 },
      { stepNumber: 2, instructionEn: 'Make masala with onion paste, black pepper, and whole spices, simmer chickpeas in their broth until gravy turns velvety.', instructionUr: 'پیاز اور کالی مرچ کا مصالحہ بنا کر چنے اور یخنی شامل کر کے گاڑھا کریں۔', instructionHi: 'मसाला भूनकर चने डालें और गाढ़ा होने तक पकाएं।', timerMinutes: 10 }
    ]
  },
  {
    id: 'kadhi_pakora',
    titleEn: 'Desi Punjabi Kadhi Pakora',
    titleUr: 'پنجابی کڑھی پکوڑا (Kadhi Pakora)',
    titleHi: 'कढ़ी पकोड़ा (Kadhi Pakora)',
    descriptionEn: 'Tangy spiced yogurt and besan gravy simmered for hours, studded with crispy onion fritters and a sizzling red chilli-ghee tarka.',
    descriptionUr: 'کھٹی دہی اور بیسن کی دھیمی آنچ پر پکی ہوئی کڑھی، کرسپی پکوڑوں اور کڑکڑاتے تڑکے کے ساتھ۔',
    descriptionHi: 'खट्टी दही और बेसन की कढ़ी, कुरकुरे पकोड़े और देसी घी के तड़के के साथ।',
    prepTimeMinutes: 25,
    cookTimeMinutes: 45,
    defaultServings: 6,
    difficulty: 'Medium',
    diet: 'Vegetarian',
    cuisine: 'Punjabi Classic',
    caloriesPerServing: 320,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'yogurt', nameEn: 'Sour Yogurt', nameUr: 'کھٹا دہی', nameHi: 'खट्टी दही', amount: 2, unit: 'cups' },
      { id: 'besan', nameEn: 'Gram Flour (Besan)', nameUr: 'بیسن', nameHi: 'बेसन', amount: 1, unit: 'cup' },
      { id: 'fenugreek_seeds', nameEn: 'Methi Dana', nameUr: 'میتھی دانہ', nameHi: 'मेथी दाना', amount: 0.5, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Whisk yogurt with besan, turmeric, red chilli, and 5 cups water. Simmer on low for 35 mins.', instructionUr: 'دہی، بیسن اور مصالحوں کو پانی میں ملا کر 35 منٹ تک پکنے دیں۔', instructionHi: 'दही और बेसन को पानी में मिलाकर 35 मिनट धीमी आंच पर पकाएं।', timerMinutes: 35 },
      { stepNumber: 2, instructionEn: 'Fry onion pakoras, drop into hot kadhi, finish with cumin, curry leaves, and round chilli tarka in hot oil.', instructionUr: 'پکوڑے تل کر کڑھی میں ڈالیں اور زیرہ و کڑی پتہ کا تڑکا لگائیں۔', instructionHi: 'पकोड़े बनाकर कढ़ी में डालें और तड़का लगाएं।', timerMinutes: 10 }
    ]
  },
  {
    id: 'baingan_bharta',
    titleEn: 'Smoky Roasted Baingan Bharta',
    titleUr: 'دھواں دار بیگن کا بھرتہ (Baingan Bharta)',
    titleHi: 'बैंगन का भर्ता (Baingan Bharta)',
    descriptionEn: 'Large eggplants fire-roasted until charred, mashed and sautéed with green chillies, ginger, mustard oil, and tomatoes.',
    descriptionUr: 'آگ پر بھنے ہوئے بیگن، ٹماٹر، ہری مرچ اور ادرک سے تیار کوئلے کے قدرتی دھواں دار ذائقے والا بھرتہ۔',
    descriptionHi: 'आंच पर भुने हुए बैंगन, प्याज और टमाटर का तीखा और धुंएदार भर्ता।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    defaultServings: 4,
    difficulty: 'Easy',
    diet: 'Vegan',
    cuisine: 'Punjabi / Desi',
    caloriesPerServing: 160,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'eggplant', nameEn: 'Large Eggplant (Baingan)', nameUr: 'بڑا گول بیگن', nameHi: 'बड़ा बैंगन', amount: 2, unit: 'pcs' },
      { id: 'tomato', nameEn: 'Chopped Tomatoes', nameUr: 'ٹماٹر', nameHi: 'टमाटर', amount: 2, unit: 'pcs' },
      { id: 'green_chilli', nameEn: 'Green Chillies', nameUr: 'ہری مرچیں', nameHi: 'हरी मिर्च', amount: 3, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Roast eggplants directly over gas flame until skin is completely charred and flesh is tender.', instructionUr: 'بیگن کو آگ پر چاروں طرف سے جلنے اور نرم ہونے تک بھونیں۔', instructionHi: 'बैंगन को सीधी आंच पर भूनें और छिलका उतारें।', timerMinutes: 10 },
      { stepNumber: 2, instructionEn: 'Peel charred skins, mash flesh. Sauté with chopped onions, tomatoes, green chillies, and spices.', instructionUr: 'چھلکا اتار کر میش کریں اور پیاز ٹماٹر کے تڑکے میں بھونیں۔', instructionHi: 'मेश करके प्याज-टमाटर के साथ भूनें।', timerMinutes: 8 }
    ]
  },
  {
    id: 'matar_paneer',
    titleEn: 'Mutter Paneer Masala',
    titleUr: 'مٹر پنیر (Matar Paneer)',
    titleHi: 'मटर पनीर (Matar Paneer)',
    descriptionEn: 'Sweet tender green peas and soft cottage cheese cubes cooked in a fragrant onion, tomato, and cashew nut gravy.',
    descriptionUr: 'تازہ مٹر اور پنیر کا لذیذ امتزاج، ٹماٹر اور کاجو کی شاہی مصالحے دار گریوی میں۔',
    descriptionHi: 'हरी मटर और पनीर की मखमली टमाटर-प्याज की ग्रेवी।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    defaultServings: 4,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    cuisine: 'North Indian',
    caloriesPerServing: 330,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'paneer', nameEn: 'Paneer Cubes', nameUr: 'پنیر کیوبز', nameHi: 'पनीर', amount: 250, unit: 'g' },
      { id: 'peas', nameEn: 'Green Peas', nameUr: 'تازہ مٹر', nameHi: 'हरी मटर', amount: 1.5, unit: 'cups' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Cook tomato and onion base with cumin, garam masala, and turmeric.', instructionUr: 'ٹماٹر اور پیاز کی گریوی تیار کریں۔', instructionHi: 'टमाटर-प्याज की ग्रेवी पकाएं।', timerMinutes: 8 },
      { stepNumber: 2, instructionEn: 'Add green peas and paneer cubes, simmer until gravy is aromatic and rich.', instructionUr: 'مٹر اور پنیر ڈال کر 10 منٹ دم پر پکائیں۔', instructionHi: 'मटर और पनीर डालकर 10 मिनट पकाएं।', timerMinutes: 10 }
    ]
  }
];
