import { Recipe } from '../../types';

export const drinksAndQuickRecipes: Recipe[] = [
  {
    id: 'karak_dudh_patti',
    titleEn: 'Dhabe Wali Karak Dudh Patti Chai',
    titleUr: 'ڈھابہ کڑک دودھ پتی چائے (Karak Chai)',
    titleHi: 'कड़क दूध पत्ती चाय (Karak Chai)',
    descriptionEn: 'Strong whole milk tea slow-brewed without extra water, infused with crushed green cardamom, and frothed with a ladle.',
    descriptionUr: 'بغیر پانی کے خالص دودھ، سبز الائچی اور تیز پتی کے ابال سے تیار کڑک ڈوئی ماری چائے۔',
    descriptionHi: 'बिना पानी के शुद्ध दूध, हरी इलायची और तेज पत्ती से धीमी आंच पर पकी कड़क चाय।',
    prepTimeMinutes: 2,
    cookTimeMinutes: 8,
    defaultServings: 2,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    cuisine: 'Pakistani Dhaba',
    caloriesPerServing: 140,
    category: 'Beverages',
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'milk', nameEn: 'Whole Milk', nameUr: 'خالص دودھ', nameHi: 'दूध', amount: 2, unit: 'cups' },
      { id: 'tea_leaves', nameEn: 'Strong Black Tea Leaves (Danedar)', nameUr: 'دانے دار پتی', nameHi: 'चाय पत्ती', amount: 2, unit: 'tsp' },
      { id: 'cardamom', nameEn: 'Crushed Cardamoms', nameUr: 'سبز الائچی', nameHi: 'इलायची', amount: 2, unit: 'pcs' },
      { id: 'sugar', nameEn: 'Sugar or Brown Sugar', nameUr: 'شکر یا چینی', nameHi: 'चीनी', amount: 2, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Heat milk with crushed cardamom pods in a saucepan until it begins to steam.', instructionUr: 'ساس پین میں دودھ اور کٹی الائچی ڈال کر گرم کریں۔', instructionHi: 'दूध और इलायची को पैन में गरम करें।', timerMinutes: 3 },
      { stepNumber: 2, instructionEn: 'Add black tea leaves, bring to rolling boil, beat and aerate continuously with ladle until deep caramel color develops.', instructionUr: 'پتی شامل کریں، چائے کو ڈوئی سے اچھالتے ہوئے تیز رنگ اور جھاگ آنے تک پکائیں۔', instructionHi: 'चाय पत्ती डालकर कलछी से फेंटते हुए गाढ़ा रंग आने तक उबालें।', timerMinutes: 5 }
    ]
  },
  {
    id: 'kashmiri_pink_tea',
    titleEn: 'Traditional Kashmiri Pink Chai (Noon Chai)',
    titleUr: 'کشمیری گلابی چائے (Kashmiri Chai)',
    titleHi: 'कश्मीरी पिंक चाय (Kashmiri Chai)',
    descriptionEn: 'Slow-brewed green tea leaves aerated with ice water and baking soda to develop natural blush pink color, finished with milk and nuts.',
    descriptionUr: 'خاص کشمیری پتی، ٹھنڈے برفیلے پانی، میٹھے سوڈے اور پستے بادام سے تیار قدرتی گلابی چائے۔',
    descriptionHi: 'कश्मीरी चाय की पत्ती और दूध से बनी प्राकृतिक गुलाबी रंग की मेवेदार चाय।',
    prepTimeMinutes: 10,
    cookTimeMinutes: 25,
    defaultServings: 4,
    difficulty: 'Medium',
    diet: 'Vegetarian',
    cuisine: 'Kashmiri',
    caloriesPerServing: 160,
    category: 'Beverages',
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'kashmiri_tea', nameEn: 'Kashmiri Green Tea Leaves', nameUr: 'کشمیری چائے کی پتی', nameHi: 'कश्میरी चाय पत्ती', amount: 2, unit: 'tbsp' },
      { id: 'baking_soda', nameEn: 'Baking Soda pinch', nameUr: 'میٹھا سوڈا چٹکی', nameHi: 'मीठा सोडा', amount: 0.25, unit: 'tsp' },
      { id: 'milk', nameEn: 'Full Cream Milk', nameUr: 'دودھ', nameHi: 'दूध', amount: 3, unit: 'cups' },
      { id: 'nuts', nameEn: 'Crushed Almonds & Pistachios', nameUr: 'باریک کٹا پستہ بادام', nameHi: 'पिस्ता व बादाम', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Boil Kashmiri tea leaves with water, star anise, cardamom, and baking soda. Shock with ice water and froth vigorously to extract pink color.', instructionUr: 'پتی کو سوڈا اور مصالحوں کے ساتھ ابالیں، ٹھنڈا پانی ڈال کر ڈوئی سے پھینٹیں تاکہ گلابی قہوہ نکل آئے۔', instructionHi: 'पत्ती और सोडा उबालकर ठंडा पानी डालें और फेंटकर रंग निकालें।', timerMinutes: 15 },
      { stepNumber: 2, instructionEn: 'Strain concentrated pink kahwa into hot milk, simmer until creamy pink, pour into cups and garnish with nuts.', instructionUr: 'گلابی قہوے کو ابلتے دودھ میں ڈالیں، پستہ بادام چھڑک کر پیش کریں۔', instructionHi: 'दूध में गुलाबी कहवा मिलाएं और मेवे डालकर परोसें।', timerMinutes: 5 }
    ]
  },
  {
    id: 'mango_lassi',
    titleEn: 'Creamy Mango Lassi',
    titleUr: 'آم کی لسی (Mango Lassi)',
    titleHi: 'मैंगो लस्सी (Mango Lassi)',
    descriptionEn: 'Rich velvety blend of sweet ripe mango pulp, chilled whole milk yogurt, milk, a dash of cardamom, and crushed ice.',
    descriptionUr: 'میٹھے آموں کے گودے، گاڑھے دہی، دودھ اور برف سے تیار موسم گرما کی ٹھنڈی اور مزیدار لسی۔',
    descriptionHi: 'मीठे आम के गूदे, ठंडी दही, दूध और इलायची से बनी मलाईदार मैंगो लस्सी।',
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    defaultServings: 2,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    cuisine: 'Punjabi Summer Drink',
    caloriesPerServing: 210,
    category: 'Beverages',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'mango', nameEn: 'Ripe Sweet Mango Pulp', nameUr: 'آم کا گودا (پلمپ)', nameHi: 'आम का गूदा', amount: 1, unit: 'cup' },
      { id: 'yogurt', nameEn: 'Chilled Yogurt', nameUr: 'ٹھنڈا دہی', nameHi: 'ठंडी दही', amount: 1.5, unit: 'cups' },
      { id: 'milk', nameEn: 'Cold Milk', nameUr: 'ٹھنڈا دودھ', nameHi: 'दूध', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Add ripe mango chunks, chilled yogurt, milk, sugar to taste, and crushed ice into a blender jar.', instructionUr: 'بلینڈر جگ میں آم، دہی، دودھ اور برف ڈالیں۔', instructionHi: 'ब्लेंडर में आम, दही, दूध और बर्फ डालें।', timerMinutes: 2 },
      { stepNumber: 2, instructionEn: 'Blend on high speed until completely smooth and frothy, pour into tall glasses and garnish with mint sprig.', instructionUr: 'خوب بلینڈ کریں اور گلاسوں میں ڈال کر پیش کریں۔', instructionHi: 'स्मूथ होने तक ब्लेंड करें और परोसें।', timerMinutes: 2 }
    ]
  },
  {
    id: 'mint_lemonade_margarita',
    titleEn: 'Fresh Mint Lemonade Margarita',
    titleUr: 'پودینہ لیمن مارگریٹا (Mint Margarita)',
    titleHi: 'पुदीना लेमन मार्गरीटा (Mint Lemonade)',
    descriptionEn: 'Ultra-refreshing crushed iced cooler with fresh garden mint leaves, freshly squeezed lemon juice, black salt, and sparkling soda.',
    descriptionUr: 'تازہ پودینے کے پتوں، لیموں کے رس، کالے نمک اور سوڈا واٹر سے تیار زبردست ٹھنڈا مشروب۔',
    descriptionHi: 'ताजा पुदीना, नींबू का रस, काला नमक और बर्फ से बना बेहद ताज़ा पेय।',
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    defaultServings: 2,
    difficulty: 'Easy',
    diet: 'Vegan',
    cuisine: 'Summer Cooler',
    caloriesPerServing: 80,
    category: 'Beverages',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'mint', nameEn: 'Fresh Mint Leaves', nameUr: 'تازہ پودینہ پتے', nameHi: 'ताजा पुदीना', amount: 1, unit: 'cup' },
      { id: 'lemon', nameEn: 'Fresh Lemon Juice', nameUr: 'لیموں کا رس', nameHi: 'नींबू रस', amount: 3, unit: 'tbsp' },
      { id: 'black_salt', nameEn: 'Kala Namak (Black Salt)', nameUr: 'کالا نمک', nameHi: 'काला नमक', amount: 0.5, unit: 'tsp' },
      { id: 'soda', nameEn: 'Chilled Club Soda or Water', nameUr: 'سوڈا یا ٹھنڈا پانی', nameHi: 'सोडा', amount: 2, unit: 'cups' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Blend mint leaves with lemon juice, sugar, black salt, and a handful of ice cubes until vibrant green slush forms.', instructionUr: 'پودینہ، لیموں کا رس، کالا نمک اور برف کو بلینڈ کریں۔', instructionHi: 'पुदीना, नींबू रस, काला नमक और बर्फ को ब्लेंड करें।', timerMinutes: 2 },
      { stepNumber: 2, instructionEn: 'Pour slush into chilled glasses and top with fizzy soda.', instructionUr: 'گلاسوں میں ڈال کر ٹھنڈا سوڈا شامل کریں اور فورا پیش کریں۔', instructionHi: 'गिलास में डालकर ठंडा सोडा मिलाएं।', timerMinutes: 1 }
    ]
  },
  {
    id: 'masala_maggi_special',
    titleEn: '10-Minute Street Style Masala Maggi',
    titleUr: '10 منٹ اسٹریٹ مصالحہ نوڈلز (Masala Maggi)',
    titleHi: 'मसाला मैगी (Street Masala Maggi)',
    descriptionEn: 'Quick comforting noodles cooked with buttery sautéed onions, tomatoes, green chillies, peas, and double seasoning.',
    descriptionUr: 'پیاز، ٹماٹر، ہری مرچ اور مکھن میں تڑکا لگی جھٹ پٹ 10 منٹ کی مصالحے دار میگی۔',
    descriptionHi: 'प्याज, टमाटर, हरी मिर्च और मक्खन के तड़के वाली मसालेदार मैगी।',
    prepTimeMinutes: 3,
    cookTimeMinutes: 7,
    defaultServings: 1,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    cuisine: 'Street Quick Snack',
    caloriesPerServing: 290,
    category: 'Breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'noodles', nameEn: 'Instant Noodles Pack', nameUr: 'نوڈلز پیکٹ', nameHi: 'मैगी नूडल्स', amount: 1, unit: 'pack' },
      { id: 'onion', nameEn: 'Chopped Onion', nameUr: 'پیاز', nameHi: 'प्याज', amount: 2, unit: 'tbsp' },
      { id: 'tomato', nameEn: 'Chopped Tomato', nameUr: 'ٹماٹر', nameHi: 'टमाटर', amount: 2, unit: 'tbsp' },
      { id: 'butter', nameEn: 'Butter', nameUr: 'مکھن', nameHi: 'मक्खन', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Melt butter, sauté onions, tomatoes, and green chilli for 2 mins with pinch of turmeric and red chilli.', instructionUr: 'مکھن میں پیاز اور ٹماٹر کو 2 منٹ فرائی کریں۔', instructionHi: 'मक्खन में प्याज और टमाटर भूनें।', timerMinutes: 2 },
      { stepNumber: 2, instructionEn: 'Add 1.5 cups water and tastemaker, bring to boil, break in noodles, and cook for 3-4 mins until sauce is saucy.', instructionUr: 'پانی اور مسالہ ڈالیں، نوڈلز ڈال کر 4 منٹ پکائیں۔', instructionHi: 'पानी और मसाला डालकर नूडल्स 4 मिनट पकाएं।', timerMinutes: 4 }
    ]
  },
  {
    id: 'chicken_corn_soup',
    titleEn: 'Winter Hot Chicken Corn Soup',
    titleUr: 'چکن کارن سوپ (Chicken Corn Soup)',
    titleHi: 'चिकन कॉर्न सूप (Chicken Corn Soup)',
    descriptionEn: 'Warm soothing soup made with rich chicken broth, sweet creamed corn, shredded chicken, egg ribbons, soy sauce, and chilli vinegar.',
    descriptionUr: 'چکن یخنی، میٹھی مکئی، انڈے کی باریک تہوں اور سرکہ ہری مرچ کے ساتھ گرما گرم سوپ۔',
    descriptionHi: 'चिकन सूप, स्वीट कॉर्न और अंडे के साथ बना गरमा गरम रेस्टोरेंट स्टाइल सूप।',
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    defaultServings: 4,
    difficulty: 'Easy',
    diet: 'Non-Veg',
    cuisine: 'Desi Chinese',
    caloriesPerServing: 160,
    category: 'Breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken_broth', nameEn: 'Chicken Broth', nameUr: 'چکن یخنی', nameHi: 'चिकन सूप', amount: 4, unit: 'cups' },
      { id: 'chicken', nameEn: 'Shredded Chicken', nameUr: 'ریشہ چکن', nameHi: 'उबला चिकन', amount: 1, unit: 'cup' },
      { id: 'corn', nameEn: 'Cream Style Sweet Corn', nameUr: 'کریمی سویٹ کارن', nameHi: 'स्वीट कॉर्न', amount: 1, unit: 'cup' },
      { id: 'egg', nameEn: 'Egg (beaten)', nameUr: 'پھینٹا ہوا انڈا', nameHi: 'अंडा', amount: 1, unit: 'pcs' },
      { id: 'cornstarch', nameEn: 'Cornstarch (Corn Flour)', nameUr: 'کارن فلور', nameHi: 'कॉर्नफ्लोर', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Simmer chicken broth, shredded chicken, and cream corn with salt, black pepper, and chicken powder.', instructionUr: 'یخنی، چکن اور کارن کو کالی مرچ اور نمک کے ساتھ ابالیں۔', instructionHi: 'सूप, चिकन और कॉर्न को मसालों के साथ उबालें।', timerMinutes: 6 },
      { stepNumber: 2, instructionEn: 'Stir in cornstarch slurry until soup turns glossy and thick. Slowly drizzle beaten egg in circles to form thin egg ribbons.', instructionUr: 'کارن فلور سے گاڑھا کریں اور اوپر سے پھینٹا انڈا چمچ چلاتے ہوئے ڈالیں تاکہ باریک لچھے بنیں۔', instructionHi: 'कॉर्नफ्लोर घोलकर गाढ़ा करें और अंडा डालकर चलाएं।', timerMinutes: 4 }
    ]
  }
];
