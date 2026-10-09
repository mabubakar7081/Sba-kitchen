import { Recipe } from '../../types';

export const curryRecipes: Recipe[] = [
  {
    id: 'chicken_karahi',
    titleEn: 'Chicken Karahi',
    titleUr: 'چکن کڑاہی (Chicken Karahi)',
    titleHi: 'चिकन कड़ाही (Chicken Karahi)',
    descriptionEn: 'Juicy chicken cooked on high heat with fresh ginger, garlic, tomatoes, and aromatic whole spices in a wok.',
    descriptionUr: 'تیز آنچ پر تازہ ٹماٹر، ادرک، لہسن اور خوشبودار کڑاہی مصالحوں کے ساتھ تیار لذیذ چکن۔',
    descriptionHi: 'तेज आंच पर ताज़ा टमाटर, अदरक, लहसुन और खुशबूदार मसालों के साथ पकाई गई चिकन कड़ाही।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    defaultServings: 4,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'Pakistani',
    caloriesPerServing: 380,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', nameEn: 'Chicken', nameUr: 'چکن', nameHi: 'चिकन', amount: 750, unit: 'g' },
      { id: 'tomato', nameEn: 'Tomatoes', nameUr: 'ٹماٹر', nameHi: 'टमाटर', amount: 4, unit: 'pcs' },
      { id: 'ginger_garlic', nameEn: 'Ginger Garlic', nameUr: 'ادرک لہسن', nameHi: 'अदरक लहसुन', amount: 2, unit: 'tbsp' },
      { id: 'green_chilli', nameEn: 'Green Chillies', nameUr: 'ہری مرچیں', nameHi: 'हरी मिर्च', amount: 4, unit: 'pcs' },
      { id: 'cooking_oil', nameEn: 'Cooking Oil', nameUr: 'تیل یا گھی', nameHi: 'तेल या घी', amount: 4, unit: 'tbsp' },
      { id: 'cumin', nameEn: 'Crushed Cumin', nameUr: 'کٹا زیرہ', nameHi: 'कुटा जीरा', amount: 1.5, unit: 'tsp' },
      { id: 'red_chilli', nameEn: 'Chilli Flakes', nameUr: 'کٹی لال مرچ', nameHi: 'कुटी लाल मिर्च', amount: 1, unit: 'tsp' },
      { id: 'salt', nameEn: 'Salt', nameUr: 'نمک', nameHi: 'नमक', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Heat oil, sauté chicken with ginger-garlic paste until white.', instructionUr: 'کڑاہی میں تیل گرم کر کے چکن اور ادرک لہسن کو سنہری ہونے تک بھونیں۔', instructionHi: 'कड़ाही में तेल गरम करके चिकन और अदरक-लहसुन पेस्ट भूनें।', timerMinutes: 6 },
      { stepNumber: 2, instructionEn: 'Add halved tomatoes and salt. Cover until skins soften.', instructionUr: 'ٹماٹر دو ٹکڑے کر کے ڈالیں اور ڈھکن لگا کر نرم ہونے دیں۔', instructionHi: 'टमाटर डालकर ढकें और गलने दें।', timerMinutes: 8 },
      { stepNumber: 3, instructionEn: 'Peel skins, mash tomatoes, add cumin and red chilli, sauté vigorously.', instructionUr: 'چھلکے اتار کر میش کریں، کٹی لال مرچ اور زیرہ ڈال کر تیل چھوڑنے تک بھونیں۔', instructionHi: 'छिलके उतारकर मैश करें और मसाले डालकर भूनें।', timerMinutes: 6 },
      { stepNumber: 4, instructionEn: 'Garnish with julienned ginger, green chilies, and serve with naan.', instructionUr: 'ادرک کے لچھے اور ہری مرچ چھڑک کر گرما گرم نان کے ساتھ پیش کریں۔', instructionHi: 'अदरक और हरी मिर्च से सजाकर परोसें।', timerMinutes: 2 }
    ]
  },
  {
    id: 'mutton_korma',
    titleEn: 'Shahi Mutton Korma',
    titleUr: 'شاہی مٹن قورمہ (Shahi Mutton Korma)',
    titleHi: 'शाही मटन कोरमा (Mutton Korma)',
    descriptionEn: 'Royal slow-cooked mutton in a rich velvety gravy made from fried golden onions, yogurt, and whole spices.',
    descriptionUr: 'تلے ہوئے پیاز، دہی، جاوتری، الائچی اور مٹن سے تیار روایتی خوشبودار دیگی قورمہ۔',
    descriptionHi: 'तले हुए प्याज, दही और खुशबूदार मसालों में धीमी आंच पर पका मटन कोरमा।',
    prepTimeMinutes: 20,
    cookTimeMinutes: 50,
    defaultServings: 5,
    difficulty: 'Hard',
    diet: 'Non-Veg',
    cuisine: 'Mughlai / Pakistani',
    caloriesPerServing: 490,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1545247181-516773ca838b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'mutton', nameEn: 'Mutton', nameUr: 'مٹن یا بیف', nameHi: 'मटन', amount: 800, unit: 'g' },
      { id: 'onion', nameEn: 'Fried Onions', nameUr: 'تلی ہوئی پیاز', nameHi: 'तली प्याज', amount: 2, unit: 'cups' },
      { id: 'yogurt', nameEn: 'Yogurt', nameUr: 'دہی', nameHi: 'दही', amount: 1, unit: 'cup' },
      { id: 'ginger_garlic', nameEn: 'Ginger Garlic', nameUr: 'ادرک لہسن', nameHi: 'अदरक लहसुन', amount: 2, unit: 'tbsp' },
      { id: 'cooking_oil', nameEn: 'Ghee or Oil', nameUr: 'گھی یا تیل', nameHi: 'घी या तेल', amount: 5, unit: 'tbsp' },
      { id: 'garam_masala', nameEn: 'Cardamom & Cloves', nameUr: 'چھوٹی الائچی و لونگ', nameHi: 'इलायची व लौंग', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Whisk yogurt with crushed fried onions and set aside.', instructionUr: 'دہی میں تلی ہوئی کچلی پیاز مکس کر کے رکھ لیں۔', instructionHi: 'दही में तली प्याज मिलाकर फेंटें।', timerMinutes: 3 },
      { stepNumber: 2, instructionEn: 'Heat ghee with green cardamoms, sauté ginger garlic paste and mutton.', instructionUr: 'گھی میں الائچی ڈال کر مٹن اور ادرک لہسن کو رنگ تبدیل ہونے تک بھونیں۔', instructionHi: 'घी में इलायची डालकर मटन और अदरक-लहसुन भूनें।', timerMinutes: 10 },
      { stepNumber: 3, instructionEn: 'Add spices, water, and simmer on low flame until mutton is fork-tender.', instructionUr: 'پانی ڈال کر دھیمی آنچ پر گوشت گلنے تک پکائیں۔', instructionHi: 'पानी डालकर धीमी आंच पर गोश्त गलने तक पकाएं।', timerMinutes: 35 },
      { stepNumber: 4, instructionEn: 'Stir in yogurt-onion paste and kewra water. Simmer on low heat until roghan appears.', instructionUr: 'دہی پیاز کا آمیزہ ڈال کر دم دیں تاکہ گھی اوپر آ جائے۔', instructionHi: 'दही-प्याज का मिश्रण डालकर दम दें।', timerMinutes: 8 }
    ]
  },
  {
    id: 'butter_chicken',
    titleEn: 'Murgh Makhani (Butter Chicken)',
    titleUr: 'بٹر چکن (Butter Chicken)',
    titleHi: 'बटर चिकन (Butter Chicken)',
    descriptionEn: 'Tender marinated chicken pieces simmered in a creamy, velvety tomato and butter sauce with kasuri methi.',
    descriptionUr: 'مکھن، کریم، ٹماٹر کی پیوری اور قصوری میتھی کی ریشمی گریوی میں ڈوبا لذیذ تکہ چکن۔',
    descriptionHi: 'टमाटर, मक्खन, क्रीम और कस्तूरी मेथी की मखमली ग्रेवी में बना स्वादिष्ट बटर चिकन।',
    prepTimeMinutes: 25,
    cookTimeMinutes: 25,
    defaultServings: 4,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'North Indian',
    caloriesPerServing: 460,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', nameEn: 'Boneless Chicken', nameUr: 'بون لیس چکن', nameHi: 'चिकन', amount: 500, unit: 'g' },
      { id: 'tomato', nameEn: 'Tomato Puree', nameUr: 'ٹماٹر پیوری', nameHi: 'टमाटर प्यूरी', amount: 2, unit: 'cups' },
      { id: 'cream', nameEn: 'Heavy Cream', nameUr: 'تازہ کریم', nameHi: 'फ्रेश क्रीम', amount: 0.5, unit: 'cup' },
      { id: 'butter', nameEn: 'Butter', nameUr: 'مکھن', nameHi: 'मक्खन', amount: 3, unit: 'tbsp' },
      { id: 'fenugreek', nameEn: 'Kasuri Methi', nameUr: 'قصوری میتھی', nameHi: 'कसूरी मेथी', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Sear marinated chicken pieces in a pan until lightly charred.', instructionUr: 'چکن کو پین میں ہلکا سا سینک لیں تاکہ گرل مارکس بن جائیں۔', instructionHi: 'चिकन को पैन में हल्का ग्रिल कर लें।', timerMinutes: 8 },
      { stepNumber: 2, instructionEn: 'Melt butter, cook tomato puree with mild spices and sugar pinch.', instructionUr: 'مکھن پگھلا کر ٹماٹر کی پیوری اور مصالحے پکائیں۔', instructionHi: 'मक्खन में टमाटर प्यूरी और मसाले पकाएं।', timerMinutes: 10 },
      { stepNumber: 3, instructionEn: 'Blend gravy smooth, fold in cream, roasted chicken, and kasuri methi.', instructionUr: 'گریوی میں کریم، بھنا چکن اور قصوری میتھی شامل کریں۔', instructionHi: 'ग्रेवी में क्रीम, चिकन और कसूरी मेथी मिलाएं।', timerMinutes: 5 }
    ]
  },
  {
    id: 'chicken_white_karahi',
    titleEn: 'Chicken White Karahi',
    titleUr: 'چکن وائٹ کڑاہی (White Karahi)',
    titleHi: 'चिकन व्हाइट कड़ाही (White Karahi)',
    descriptionEn: 'Creamy white gravy chicken karahi without tomatoes, made with yogurt, cream, and freshly crushed black pepper.',
    descriptionUr: 'ٹماٹر کے بغیر دہی، کریم، کالی مرچ اور سفید زیرہ کے ساتھ تیار وائٹ کڑاہی۔',
    descriptionHi: 'दही, क्रीम, काली मिर्च और सफेद जीरे से बनी मलाईदार व्हाइट कड़ाही।',
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    defaultServings: 4,
    difficulty: 'Easy',
    diet: 'Non-Veg',
    cuisine: 'Pakistani Highway Style',
    caloriesPerServing: 410,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', nameEn: 'Chicken', nameUr: 'چکن', nameHi: 'चिकन', amount: 700, unit: 'g' },
      { id: 'yogurt', nameEn: 'Yogurt', nameUr: 'دہی', nameHi: 'दही', amount: 1, unit: 'cup' },
      { id: 'cream', nameEn: 'Dairy Cream', nameUr: 'کریم', nameHi: 'क्रीम', amount: 4, unit: 'tbsp' },
      { id: 'black_pepper', nameEn: 'Black Pepper', nameUr: 'کالی مرچ', nameHi: 'काली मिर्च', amount: 1.5, unit: 'tsp' },
      { id: 'green_chilli', nameEn: 'Green Chillies', nameUr: 'ہری مرچیں', nameHi: 'हरी मिर्च', amount: 5, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Fry chicken with ginger garlic in oil until white and fragrant.', instructionUr: 'چکن کو ادرک لہسن کے ساتھ تیل میں بھونیں۔', instructionHi: 'चिकन को अदरक लहसुन के साथ भूनें।', timerMinutes: 6 },
      { stepNumber: 2, instructionEn: 'Add whisked yogurt, cumin, coriander powder and cook until chicken tenders.', instructionUr: 'دہی اور خشک مصالحے ڈال کر ڈھکن بند کر کے گوشت گلائیں۔', instructionHi: 'दही और मसाले डालकर ढककर पकाएं।', timerMinutes: 10 },
      { stepNumber: 3, instructionEn: 'Turn off flame, stir in heavy cream and crushed black pepper.', instructionUr: 'چولہا بند کر کے کریم اور کالی مرچ مکس کریں۔', instructionHi: 'गैस बंद कर क्रीम और काली मिर्च मिलाएं।', timerMinutes: 2 }
    ]
  },
  {
    id: 'nihari_special',
    titleEn: 'Lahori Shahi Nihari',
    titleUr: 'لاہوری شاہی نہاری (Nihari)',
    titleHi: 'निहारी (Shahi Nihari)',
    descriptionEn: 'Slow-cooked beef shank stew simmered with special aromatic nihari masala and thickened with roasted flour.',
    descriptionUr: 'بونگ کے نرم گوشت اور نلی کے ساتھ رات بھر پکی روایتی لذیذ اور خوشبودار نہاری۔',
    descriptionHi: 'धीमी आंच पर पकी मसालेदार और स्वादिष्ट बीफ/मटन निहारी।',
    prepTimeMinutes: 25,
    cookTimeMinutes: 90,
    defaultServings: 6,
    difficulty: 'Hard',
    diet: 'Non-Veg',
    cuisine: 'Old Lahore / Delhi',
    caloriesPerServing: 520,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1545247181-516773ca838b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'beef', nameEn: 'Beef Shank (Bong)', nameUr: 'بونگ کا گوشت', nameHi: 'बीफ या मटन', amount: 1, unit: 'kg' },
      { id: 'flour', nameEn: 'Wheat Flour', nameUr: 'بھنا ہوا آٹا', nameHi: 'भुना आटा', amount: 4, unit: 'tbsp' },
      { id: 'ginger', nameEn: 'Julienned Ginger', nameUr: 'ادرک لچھے', nameHi: 'अदरक', amount: 3, unit: 'tbsp' },
      { id: 'lemon', nameEn: 'Lemon', nameUr: 'لیمو', nameHi: 'नींबू', amount: 2, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Sear beef in ghee with ginger-garlic paste and nihari masala.', instructionUr: 'گھی میں گوشت کو نہاری مصالحے کے ساتھ بھونیں۔', instructionHi: 'घी में गोश्त को निहारी मसाले के साथ भूनें।', timerMinutes: 12 },
      { stepNumber: 2, instructionEn: 'Add hot water and slow-simmer until beef is melt-in-mouth tender.', instructionUr: 'پانی ڈال کر دھیمی آنچ پر گوشت مکمل نرم ہونے تک پکائیں۔', instructionHi: 'पानी डालकर धीमी आंच पर गोश्त गलने तक पकाएं।', timerMinutes: 60 },
      { stepNumber: 3, instructionEn: 'Dissolve flour in water, whisk into gravy to thicken, simmer with tarka.', instructionUr: 'آٹے کا گھول شامل کر کے گاڑھا کریں اور اوپر سے تڑکا لگائیں۔', instructionHi: 'आटे का घोल डालकर गाढ़ा करें और तड़का लगाएं।', timerMinutes: 10 }
    ]
  },
  {
    id: 'chicken_handi',
    titleEn: 'Creamy Chicken Handi',
    titleUr: 'چکن ہانڈی (Chicken Handi)',
    titleHi: 'चिकन हांडी (Chicken Handi)',
    descriptionEn: 'Boneless chicken cubes cooked in a traditional clay pot gravy with onions, tomatoes, yogurt, and butter.',
    descriptionUr: 'مٹی کی ہانڈی میں مکھن، دہی، ادرک اور بون لیس چکن کے ساتھ تیار لذیذ ڈش۔',
    descriptionHi: 'हांडी में मक्खन, दही और प्याज-टमाटर की ग्रेवी में बनी चिकन हांडी।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    defaultServings: 4,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'Pakistani',
    caloriesPerServing: 390,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', nameEn: 'Boneless Chicken Cubes', nameUr: 'بون لیس چکن کیوبز', nameHi: 'चिकन', amount: 600, unit: 'g' },
      { id: 'onion', nameEn: 'Onion Paste', nameUr: 'پیاز کا پیسٹ', nameHi: 'प्याज पेस्ट', amount: 1, unit: 'cup' },
      { id: 'cream', nameEn: 'Fresh Cream', nameUr: 'تازہ کریم', nameHi: 'क्रीम', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Sauté onion paste in butter until golden, add ginger garlic and chicken.', instructionUr: 'پیاز پیسٹ کو مکھن میں بھون کر چکن شامل کریں۔', instructionHi: 'प्याज पेस्ट को भूनकर चिकन डालें।', timerMinutes: 6 },
      { stepNumber: 2, instructionEn: 'Add spices, yogurt and cook until thick gravy forms. Stir in fresh cream.', instructionUr: 'مصالحے اور دہی ڈال کر پکائیں اور آخر میں کریم شامل کریں۔', instructionHi: 'मसाले और दही डालकर पकाएं और क्रीम मिलाएं।', timerMinutes: 10 }
    ]
  },
  {
    id: 'haleem_special',
    titleEn: 'Shahi Reshedar Haleem',
    titleUr: 'شاہی ریشہ دار حلیم (Haleem)',
    titleHi: 'शाही हलीम (Shahi Haleem)',
    descriptionEn: 'Wholesome porridge of slow-simmered grains, lentils, and shredded meat blended into a rich savory texture.',
    descriptionUr: 'سات اناجوں، دالوں اور گھٹے ہوئے ریشہ دار گوشت سے تیار روایتی خوشبودار حلیم۔',
    descriptionHi: 'दालों, गेहूं और रेशेदार गोश्त से धीमी आंच पर पकाई गई शाही हलीम।',
    prepTimeMinutes: 30,
    cookTimeMinutes: 80,
    defaultServings: 8,
    difficulty: 'Hard',
    diet: 'Non-Veg',
    cuisine: 'Pakistani / Hyderabadi',
    caloriesPerServing: 420,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1545247181-516773ca838b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'meat', nameEn: 'Beef or Chicken', nameUr: 'گوشت (چکن یا بیف)', nameHi: 'गोश्त', amount: 800, unit: 'g' },
      { id: 'wheat', nameEn: 'Cracked Wheat', nameUr: 'گندم کا دلیا', nameHi: 'दलिया', amount: 1.5, unit: 'cups' },
      { id: 'lentils', nameEn: 'Mixed Lentils', nameUr: 'مکس دالیں', nameHi: 'मिश्रित दालें', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Boil wheat and lentils until completely mushy.', instructionUr: 'دلیے اور دالوں کو خوب گلا کر نرم کریں۔', instructionHi: 'दलिया और दालों को अच्छे से गला लें।', timerMinutes: 40 },
      { stepNumber: 2, instructionEn: 'Cook meat with spices until falling apart, shred meat with masher.', instructionUr: 'گوشت کو مصالحوں کے ساتھ پکا کر ریشہ ریشہ کر لیں۔', instructionHi: 'गोश्त को पकाकर रेशा-रेशा कर लें।', timerMinutes: 30 },
      { stepNumber: 3, instructionEn: 'Combine grains and shredded meat, blend with wooden spoon until silky.', instructionUr: 'دالوں اور ریشہ دار گوشت کو ملا کر گھوٹا لگائیں اور تڑکا دیں۔', instructionHi: 'दोनों को मिलाकर घोटें और तड़का लगाएं।', timerMinutes: 15 }
    ]
  },
  {
    id: 'shinwari_karahi',
    titleEn: 'Peshawari Shinwari Karahi',
    titleUr: 'شنواری کڑاہی (Shinwari Karahi)',
    titleHi: 'शिनवारी कड़ाही (Shinwari Karahi)',
    descriptionEn: 'Traditional minimalist tribal karahi cooked only with meat, animal fat/oil, tomatoes, salt, and green chillies.',
    descriptionUr: 'صرف نمک، ٹماٹر اور ہری مرچ میں چکن یا دنبے کے گوشت سے بنی مشہور شنواری کڑاہی۔',
    descriptionHi: 'सिर्फ नमक, टमाटर और हरी मिर्च में पकाई जाने वाली मशहूर शिनवारी कड़ाही।',
    prepTimeMinutes: 10,
    cookTimeMinutes: 25,
    defaultServings: 4,
    difficulty: 'Easy',
    diet: 'Non-Veg',
    cuisine: 'Peshawari Shinwari',
    caloriesPerServing: 350,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'meat', nameEn: 'Lamb or Chicken', nameUr: 'گوشت یا چکن', nameHi: 'चिकन या मटन', amount: 800, unit: 'g' },
      { id: 'tomato', nameEn: 'Fresh Tomatoes', nameUr: 'ٹماٹر', nameHi: 'टमाटर', amount: 5, unit: 'pcs' },
      { id: 'green_chilli', nameEn: 'Green Chillies', nameUr: 'ہری مرچیں', nameHi: 'हरी मिर्च', amount: 6, unit: 'pcs' },
      { id: 'salt', nameEn: 'Rock Salt', nameUr: 'نمک', nameHi: 'नमक', amount: 1.5, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Fry meat in oil with salt on high flame until golden brown.', instructionUr: 'تیل میں نمک کے ساتھ تیز آنچ پر گوشت کو خوب فرائی کریں۔', instructionHi: 'तेल में नमक डालकर तेज आंच पर गोश्त भूनें।', timerMinutes: 10 },
      { stepNumber: 2, instructionEn: 'Place whole halved tomatoes cut side down, steam until soft, remove skins, dry out moisture.', instructionUr: 'ٹماٹر رکھ کر دم دیں، چھلکے اتاریں اور تیز آنچ پر بھونیں۔', instructionHi: 'टमाटर रखकर गलने दें, छिलके हटाएं और भूनें।', timerMinutes: 12 }
    ]
  },
  {
    id: 'chicken_jalfrezi',
    titleEn: 'Chicken Jalfrezi',
    titleUr: 'چکن جلفریزی (Chicken Jalfrezi)',
    titleHi: 'चिकन जलफ्रेजी (Chicken Jalfrezi)',
    descriptionEn: 'Tangy stir-fried chicken with bell peppers, onions, tomatoes, and scrambled eggs in a thick sweet-savory sauce.',
    descriptionUr: 'شملہ مرچ، پیاز، ٹماٹر اور انڈے کے ساتھ تیار کھٹی میٹھی اور مصالحے دار چکن جلفریزی۔',
    descriptionHi: 'शिमला मिर्च, प्याज, टमाटर और अंडे के साथ बनी चटपटी चिकन जलफ्रेजी।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    defaultServings: 3,
    difficulty: 'Easy',
    diet: 'Non-Veg',
    cuisine: 'Indo-Pak Fusion',
    caloriesPerServing: 320,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', nameEn: 'Boneless Strips', nameUr: 'بون لیس چکن سٹرپس', nameHi: 'चिकन स्ट्रिप्स', amount: 450, unit: 'g' },
      { id: 'capsicum', nameEn: 'Bell Peppers', nameUr: 'شملہ مرچ', nameHi: 'शिमला मिर्च', amount: 2, unit: 'pcs' },
      { id: 'egg', nameEn: 'Egg', nameUr: 'انڈا', nameHi: 'अंडा', amount: 1, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Stir fry chicken strips with garlic, ketchup, and soy sauce.', instructionUr: 'چکن کو لہسن، کیچپ اور سویا ساس کے ساتھ فرائی کریں۔', instructionHi: 'चिकन को लहसुन और सॉस के साथ तेज आंच पर भूनें।', timerMinutes: 7 },
      { stepNumber: 2, instructionEn: 'Toss in crunchy cubed peppers, onions, and scrambled egg ribbons.', instructionUr: 'کیوبز میں کٹی شملہ مرچ، پیاز اور آملیٹ کے ٹکڑے شامل کریں۔', instructionHi: 'शिमला मिर्च, प्याज और अंडा डालकर 2 मिनट टॉस करें।', timerMinutes: 4 }
    ]
  },
  {
    id: 'beef_kebab_karahi',
    titleEn: 'Seekh Kebab Karahi',
    titleUr: 'سیخ کباب کڑاہی (Kebab Karahi)',
    titleHi: 'कबाब कड़ाही (Kebab Karahi)',
    descriptionEn: 'Succulent seekh kebabs tossed in a spicy, buttery tomato-onion karahi gravy with green chillies and ginger.',
    descriptionUr: 'پکے ہوئے سیخ کبابوں کو ٹماٹر اور ادرک کی مصالحے دار گریوی میں بھون کر تیار کی گئی کڑاہی۔',
    descriptionHi: 'सीख कबाब को चटपटी टमाटर-प्याज की कड़ाही ग्रेवी में डालकर बनाई गई कबाब कड़ाہی।',
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    defaultServings: 4,
    difficulty: 'Easy',
    diet: 'Non-Veg',
    cuisine: 'Pakistani',
    caloriesPerServing: 420,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'kebabs', nameEn: 'Prepared Seekh Kebabs', nameUr: 'تیار سیخ کباب', nameHi: 'सीख कबाब', amount: 6, unit: 'pcs' },
      { id: 'tomato', nameEn: 'Tomatoes', nameUr: 'ٹماٹر', nameHi: 'टमाटर', amount: 3, unit: 'pcs' },
      { id: 'butter', nameEn: 'Butter or Ghee', nameUr: 'مکھن یا گھی', nameHi: 'मक्खन', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Slice kebabs into bite-sized pieces and lightly pan fry.', instructionUr: 'کبابوں کے ٹکڑے کر کے مکھن میں ہلکا فرائی کریں۔', instructionHi: 'कबाब के टुकड़े करके फ्राई करें।', timerMinutes: 4 },
      { stepNumber: 2, instructionEn: 'Make quick tomato masala, toss kebabs gently to coat without breaking.', instructionUr: 'ٹماٹر مصالحہ بنا کر کبابوں کو آہستہ سے مکس کر کے دم دیں۔', instructionHi: 'टमाटर मसाला बनाकर कबाब मिलाएं और दम दें।', timerMinutes: 6 }
    ]
  },
  {
    id: 'chicken_tikka_masala',
    titleEn: 'Chicken Tikka Masala',
    titleUr: 'چکن تکہ مصالحہ (Chicken Tikka Masala)',
    titleHi: 'चिकन टिक्का मसाला (Tikka Masala)',
    descriptionEn: 'Char-grilled smoky chicken tikka chunks simmered in a spiced onion, tomato, and paprika gravy.',
    descriptionUr: 'کوئلے کا دھواں دیے گئے رسیلے چکن تکہ بوٹی کو گاڑھی سرخ گریوی میں پکا کر پیش کیا جاتا ہے۔',
    descriptionHi: 'धुएं के स्वाद वाले चिकन टिक्का को तीखी और मलाईदार ग्रेवी में पकाया गया।',
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    defaultServings: 4,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'British-Indian / Punjabi',
    caloriesPerServing: 430,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', nameEn: 'Chicken Tikka Boti', nameUr: 'چکن تکہ بوٹی', nameHi: 'चिकन टिक्का', amount: 600, unit: 'g' },
      { id: 'onion', nameEn: 'Finely Chopped Onion', nameUr: 'باریک پیاز', nameHi: 'बारीक प्याज', amount: 2, unit: 'pcs' },
      { id: 'tomato', nameEn: 'Pureed Tomatoes', nameUr: 'ٹماٹر پیوری', nameHi: 'टमाटर', amount: 3, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Brown chicken chunks on high heat with tikka spices.', instructionUr: 'چکن پر تکہ مصالحہ لگا کر تیز آنچ پر سینک لیں۔', instructionHi: 'चिकन टिक्का को तेज आंच पर पका लें।', timerMinutes: 8 },
      { stepNumber: 2, instructionEn: 'Simmer gravy with onions, tomatoes, coriander, and add chicken with a coal smoke.', instructionUr: 'گریوی پکا کر چکن شامل کریں اور کوئلے کی بھاپ دیں۔', instructionHi: 'ग्रेवी में टिक्का डालकर कोयले का धुंआ दें।', timerMinutes: 10 }
    ]
  },
  {
    id: 'palak_chicken',
    titleEn: 'Desi Palak Chicken',
    titleUr: 'پالک چکن (Palak Chicken)',
    titleHi: 'पालक चिकन (Palak Chicken)',
    descriptionEn: 'Nutritious blanched fresh spinach purée cooked with spiced chicken, garlic tarka, and a dollop of butter.',
    descriptionUr: 'تازہ پالک کے پیسٹ اور مصالحے دار چکن کا بہترین امتزاج، لہسن کے تڑکے کے ساتھ۔',
    descriptionHi: 'ताजा पिसी पालक और चिकन का स्वादिष्ट मेल, लहसुन के तड़के के साथ।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    defaultServings: 4,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'Punjabi',
    caloriesPerServing: 340,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'spinach', nameEn: 'Fresh Spinach', nameUr: 'تازہ پالک', nameHi: 'ताजा पालक', amount: 500, unit: 'g' },
      { id: 'chicken', nameEn: 'Chicken', nameUr: 'چکن', nameHi: 'चिकन', amount: 500, unit: 'g' },
      { id: 'garlic', nameEn: 'Garlic Cloves', nameUr: 'لہسن', nameHi: 'लहसुन', amount: 6, unit: 'cloves' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Blanch and blend spinach with green chillies into a smooth puree.', instructionUr: 'پالک کو ابال کر ہری مرچ کے ساتھ پیس لیں۔', instructionHi: 'पालक को उबालकर पीस लें।', timerMinutes: 6 },
      { stepNumber: 2, instructionEn: 'Cook chicken in onion tomato base, stir in spinach puree and simmer.', instructionUr: 'چکن کو پکا کر پالک پیوری شامل کریں اور دم دیں۔', instructionHi: 'चिकन में पालक प्यूरी डालकर 10 मिनट पकाएं।', timerMinutes: 14 }
    ]
  },
  {
    id: 'aloo_gosht',
    titleEn: 'Traditional Aloo Gosht Shurba',
    titleUr: 'روایتی آلو گوشت شوربہ (Aloo Gosht)',
    titleHi: 'आलू गोश्त शोरबा (Aloo Gosht)',
    descriptionEn: 'Comforting home-style thin mutton gravy infused with soft potatoes, whole garam masala, and fresh coriander.',
    descriptionUr: 'ہر گھر کی پسندیدہ پتلے شوربے اور نرم آلوؤں والی خوشبودار روایتی ڈش۔',
    descriptionHi: 'मटन और आलू का घर जैसा पतला और स्वादिष्ट शोरबा।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 40,
    defaultServings: 5,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'Pakistani Classic',
    caloriesPerServing: 380,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1545247181-516773ca838b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'mutton', nameEn: 'Mutton with Bone', nameUr: 'ہڈی والا مٹن', nameHi: 'मटन', amount: 600, unit: 'g' },
      { id: 'potato', nameEn: 'Potatoes (Halved)', nameUr: 'آلو', nameHi: 'आलू', amount: 3, unit: 'pcs' },
      { id: 'onion', nameEn: 'Onions', nameUr: 'پیاز', nameHi: 'प्याज', amount: 2, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Brown onions, fry mutton with spices until aromatic, add water to tenderize.', instructionUr: 'پیاز براؤن کر کے گوشت بھونیں اور پانی ڈال کر گلائیں۔', instructionHi: 'गोश्त को मसालों के साथ भूनकर गलाएं।', timerMinutes: 25 },
      { stepNumber: 2, instructionEn: 'Add potato halves, simmer until potatoes are tender and shurba is fragrant.', instructionUr: 'آلو ڈال کر دھیمی آنچ پر شوربہ تیار کریں۔', instructionHi: 'आलू डालकर शोरबा पकने तक धीमी आंच पर रखें।', timerMinutes: 15 }
    ]
  },
  {
    id: 'chana_gosht',
    titleEn: 'Degi Chana Daal Gosht',
    titleUr: 'دیگی چنا دال گوشت (Chana Gosht)',
    titleHi: 'चना दाल गोश्त (Chana Gosht)',
    descriptionEn: 'Gram lentils cooked with tender meat in an aromatic onion and whole spice gravy with a rich tarka.',
    descriptionUr: 'چنے کی دال اور نرم گوشت کا دیگی انداز کا سالن، چاول یا نان کے ساتھ لاجواب۔',
    descriptionHi: 'चने की दाल और मटन का लाजवाब मसालेदार मेल।',
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    defaultServings: 5,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'Pakistani / North Indian',
    caloriesPerServing: 410,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1545247181-516773ca838b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'lentils', nameEn: 'Chana Daal', nameUr: 'چنے کی دال', nameHi: 'चना दाल', amount: 1.5, unit: 'cups' },
      { id: 'meat', nameEn: 'Mutton or Beef', nameUr: 'گوشت', nameHi: 'गोश्त', amount: 500, unit: 'g' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Boil soaked chana daal until 90% tender.', instructionUr: 'چنے کی دال کو ابال لیں۔', instructionHi: 'चना दाल को उबाल लें।', timerMinutes: 15 },
      { stepNumber: 2, instructionEn: 'Cook meat with spices, combine with boiled daal, simmer and top with desi ghee tarka.', instructionUr: 'گوشت کا سالن بنا کر دال مکس کریں اور دیسی گھی کا تڑکا لگائیں۔', instructionHi: 'दाल और गोश्त मिलाकर देसी घी का तड़का लगाएं।', timerMinutes: 15 }
    ]
  },
  {
    id: 'dum_keema',
    titleEn: 'Smoked Dum Keema',
    titleUr: 'دم کا قیمہ (Smoked Dum Keema)',
    titleHi: 'दम कीमा (Dum Keema)',
    descriptionEn: 'Minced beef or mutton marinated in raw papaya, spices, fried onions, and smoked with burning charcoal.',
    descriptionUr: 'دہی، کچے پپیتے اور مصالحوں میں لگا قیمہ جسے کوئلے کا دم دے کر تیار کیا جاتا ہے۔',
    descriptionHi: 'दही और मसालों में मैरीनेट किया हुआ कोयले के धुंए वाला दम कीमा।',
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    defaultServings: 4,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'Mughlai / Hyderabadi',
    caloriesPerServing: 390,
    category: 'Curry',
    imageUrl: 'https://images.unsplash.com/photo-1545247181-516773ca838b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'keema', nameEn: 'Minced Meat', nameUr: 'باریک قیمہ', nameHi: 'कीमा', amount: 500, unit: 'g' },
      { id: 'yogurt', nameEn: 'Yogurt', nameUr: 'دہی', nameHi: 'दही', amount: 0.5, unit: 'cup' },
      { id: 'charcoal', nameEn: 'Charcoal piece', nameUr: 'کوئلہ', nameHi: 'कोयला', amount: 1, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Marinate mince with yogurt, spices, and ginger garlic for 1 hour.', instructionUr: 'قیمے میں تمام مصالحے لگا کر رکھیں۔', instructionHi: 'कीमे में मसाले मिलाकर रखें।', timerMinutes: 10 },
      { stepNumber: 2, instructionEn: 'Cook on low flame until dry and tender, give coal smoke for 5 minutes.', instructionUr: 'ہلکی آنچ پر پکا کر کوئلے کا دھواں دیں۔', instructionHi: 'पकाकर कोयले का धुंआ दें।', timerMinutes: 20 }
    ]
  }
];
