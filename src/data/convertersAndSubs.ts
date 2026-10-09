export interface Substitution {
  id: string;
  missingItemEn: string;
  missingItemUr: string;
  missingItemHi: string;
  replacementsEn: string[];
  replacementsUr: string[];
  replacementsHi: string[];
  bestFor: string;
}

export const kitchenSubstitutions: Substitution[] = [
  {
    id: 'sub_dahi',
    missingItemEn: 'Yogurt / Dahi (Curd)',
    missingItemUr: 'دہی (Curd / Yogurt)',
    missingItemHi: 'दही (Curd / Yogurt)',
    replacementsEn: [
      '1 cup milk + 1 tbsp lemon juice or white vinegar (let sit 5 mins)',
      'Equal parts sour cream or buttermilk',
      'For marination: raw papaya paste or lemon juice + olive oil'
    ],
    replacementsUr: [
      '1 کپ دودھ + 1 کھانے کا چمچ لیموں کا رس یا سرکہ (5 منٹ چھوڑ دیں)',
      'کھٹی ملائی یا چھاچھ (لسی)',
      'میرینیشن کے لیے: کچا پپیتا یا لیموں کا رس اور تیل'
    ],
    replacementsHi: [
      '1 कप दूध + 1 चम्मच नींबू का रस या सिरका (5 मिनट रखें)',
      'खट्टी मलाई या छाछ (बटरमिल्क)',
      'मैरिनेशन के लिए: नींबू का रस व थोड़ा सा तेल'
    ],
    bestFor: 'Curries, Biryani marination, Gravy thickening'
  },
  {
    id: 'sub_kasuri_methi',
    missingItemEn: 'Kasuri Methi (Dried Fenugreek)',
    missingItemUr: 'قصوری میتھی (Kasuri Methi)',
    missingItemHi: 'कसूरी मेथी (Kasuri Methi)',
    replacementsEn: [
      'Finely chopped celery leaves or fenugreek seeds (pinch)',
      'Fresh coriander mixed with a pinch of dry mustard seeds',
      'Maple syrup drops (for aroma) in butter chicken'
    ],
    replacementsUr: [
      'اجوائن کے پتے یا تھوڑے سے میتھی دانے',
      'تازہ ہرا دھنیا اور چٹکی بھر رائی دانہ',
      'بٹر چکن میں میٹھی خوشبو کے لیے تھوڑا سا شہد'
    ],
    replacementsHi: [
      'बारीक कटे अजवाइन के पत्ते या चुटकी भर मेथी दाना',
      'ताज़ा हरा धनिया और चुटکی भर राई',
      'कढ़ी या बटर चिकन में खुशबू के लिए'
    ],
    bestFor: 'Mughlai curries, Butter chicken, Dal makhani'
  },
  {
    id: 'sub_cream',
    missingItemEn: 'Heavy Cream / Malai',
    missingItemUr: 'گاڑھی ملائی / ہیوی کریم',
    missingItemHi: 'गाढ़ी मलाई / हैवी क्रीम',
    replacementsEn: [
      'Soaked cashew paste blended with warm milk (restaurant secret!)',
      '3/4 cup whole milk + 1/3 cup melted butter',
      'Silken tofu or evaporated milk for lighter gravies'
    ],
    replacementsUr: [
      'کاجو کو گرم دودھ میں بھگو کر باریک پیس لیں (ہوٹل کا راز!)',
      'پونا کپ دودھ اور ایک تہائی کپ پگھلا ہوا مکھن',
      'تازہ دہی کو چھان کر پھینٹ لیں'
    ],
    replacementsHi: [
      'काजू को गरम दूध में भिगोकर बारीक पीसें (रेस्टोरेंट जैसा स्वाद!)',
      '3/4 कप दूध + 1/3 कप पिघला मक्खन',
      'गाढ़ा छना हुआ दही फेंट कर'
    ],
    bestFor: 'Shahi gravies, Korma, Paneer makhani'
  },
  {
    id: 'sub_garam_masala',
    missingItemEn: 'Garam Masala',
    missingItemUr: 'گرم مصالحہ پاؤڈر',
    missingItemHi: 'गरम मसाला',
    replacementsEn: [
      'Quick DIY: 1 part Cumin + 1 part Coriander + 1/2 part Cardamom + pinch Clove & Cinnamon',
      'Allspice powder with black pepper',
      'Curry powder with a pinch of cinnamon'
    ],
    replacementsUr: [
      'فوری گھریلو مرکب: زیرہ + دھنیا + الائچی + چٹکی دارچینی و لونگ',
      'کالی مرچ اور لونگ دارچینی کا سفوف'
    ],
    replacementsHi: [
      'झटपट मिश्रण: जीरा + धनिया + हरी इलायची + चुटकी दालचीनी व लौंग',
      'काली मिर्च और दालचीनी पाउडर'
    ],
    bestFor: 'All gravies, Biryani, Lentils'
  },
  {
    id: 'sub_tomato_puree',
    missingItemEn: 'Tomato Puree / Paste',
    missingItemUr: 'ٹماٹر پیوری یا پیسٹ',
    missingItemHi: 'टमाटर प्यूरी / पेस्ट',
    replacementsEn: [
      'Fresh tomatoes boiled, peeled, and blended in mixer',
      'Amchur (dry mango powder) or lemon juice for sourness + pinch of red chilli for color',
      'Canned diced tomatoes mashed with a fork'
    ],
    replacementsUr: [
      'تازہ ٹماٹروں کو ابال کر چھلکا اتار کر بلینڈ کر لیں',
      'کھٹاس کے لیے آمچور پاؤڈر یا لیموں کا رس اور رنگ کے لیے کشمیری مرچ'
    ],
    replacementsHi: [
      'ताज़ा टमाटर उबालकर छील लें और मिक्सी में पीस लें',
      'खटास के लिए अमचूर पाउडर या नींबू का रस + कश्मीरी मिर्च'
    ],
    bestFor: 'Curry bases and sauces'
  }
];

export const quickTimerPresets = [
  { labelEn: 'Chai Boil & Steeping', labelUr: 'چائے ابال اور دم', labelHi: 'चाय का उबाल व दम', seconds: 240, icon: 'Coffee' },
  { labelEn: 'Soft-Boiled Egg', labelUr: 'ہاف بوائل انڈا', labelHi: 'हाफ बॉईल अंडा', seconds: 360, icon: 'Egg' },
  { labelEn: 'Hard-Boiled Egg', labelUr: 'فل بوائل انڈا', labelHi: 'फुल बॉईल अंडा', seconds: 600, icon: 'Egg' },
  { labelEn: 'Basmati Rice Dum', labelUr: 'چاول کا دم', labelHi: 'चावल का दम', seconds: 720, icon: 'Flame' },
  { labelEn: 'Onion Golden Sauté', labelUr: 'پیاز براؤن کرنا', labelHi: 'प्याज भूनना', seconds: 480, icon: 'CookingPot' },
  { labelEn: 'Atta / Dough Rest', labelUr: 'آٹا ریسٹ', labelHi: 'आटा रेस्ट', seconds: 900, icon: 'Clock' },
  { labelEn: 'Quick 15-Min Skillet', labelUr: '15 منٹ کک', labelHi: '15 मिनट कुक', seconds: 900, icon: 'Timer' }
];

export const conversionCategories = {
  volume: [
    { from: '1 Cup', to: '240 ml / 16 Tablespoons' },
    { from: '1 Tablespoon (tbsp)', to: '15 ml / 3 Teaspoons' },
    { from: '1 Teaspoon (tsp)', to: '5 ml' },
    { from: '1 Standard Katori', to: 'approx. 150 ml' },
  ],
  weights: [
    { from: '1 Cup Wheat Flour (Atta)', to: 'approx. 120 - 125 grams' },
    { from: '1 Cup Basmati Rice (raw)', to: 'approx. 185 - 200 grams' },
    { from: '1 Cup Granulated Sugar', to: 'approx. 200 grams' },
    { from: '1 Cup Ghee / Butter', to: 'approx. 225 grams' },
    { from: '1 Cup Lentils / Daal', to: 'approx. 210 grams' }
  ],
  temperatures: [
    { from: 'Slow Flame / Simmer (Dum)', to: 'approx. 85°C - 95°C' },
    { from: 'Medium Oven', to: '180°C / 350°F / Gas Mark 4' },
    { from: 'Tandoor / High Roasting', to: '220°C - 240°C / 425°F - 465°F' },
    { from: 'Deep Frying (Oil temp)', to: '175°C - 190°C / 350°F - 375°F' }
  ]
};
