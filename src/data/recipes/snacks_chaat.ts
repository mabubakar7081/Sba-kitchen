import { Recipe } from '../../types';

export const snackRecipes: Recipe[] = [
  {
    id: 'punjabi_samosa',
    titleEn: 'Crispy Halwai Punjabi Samosa',
    titleUr: 'پنجابی آلو سموسہ (Samosa)',
    titleHi: 'पंजाबी समोसा (Samosa)',
    descriptionEn: 'Flaky pyramid pastry filled with chunky spiced potatoes, green peas, roasted coriander, and pomegranate seeds, deep-fried to golden perfection.',
    descriptionUr: 'موٹے آلوؤں، مٹر، اناردانہ اور ثابت دھنیا سے بھرا خستہ اور کرکرا روایتی سموسہ۔',
    descriptionHi: 'मसालेदार उबले आलू, मटर और अनारदाने से भरा हलवाई स्टाइल खस्ता समोसा।',
    prepTimeMinutes: 25,
    cookTimeMinutes: 20,
    defaultServings: 6,
    difficulty: 'Medium',
    diet: 'Vegetarian',
    cuisine: 'Desi Street Food',
    caloriesPerServing: 260,
    category: 'Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'flour', nameEn: 'Maida', nameUr: 'میدہ', nameHi: 'मैदा', amount: 2, unit: 'cups' },
      { id: 'ajwain', nameEn: 'Ajwain (Carom)', nameUr: 'اجوائن', nameHi: 'अजवाइन', amount: 0.5, unit: 'tsp' },
      { id: 'potato', nameEn: 'Boiled Potatoes (crushed)', nameUr: 'ابلے کچلے آلو', nameHi: 'उबले आलू', amount: 4, unit: 'pcs' },
      { id: 'peas', nameEn: 'Green Peas', nameUr: 'مٹر', nameHi: 'मटर', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Knead stiff dough with flour, ajwain, salt, and cold ghee. Rest 20 mins.', instructionUr: 'میدے میں اجوائن، نمک اور گھی ڈال کر سخت آٹا گوندھیں۔', instructionHi: 'मैदा में अजवाइन और घी डालकर सख्त आटा गूंथें।', timerMinutes: 8 },
      { stepNumber: 2, instructionEn: 'Make potato stuffing sautéed with cumin, coriander seeds, amchur, and green chillies.', instructionUr: 'آلو، مٹر اور کھڑے مصالحوں کا چٹپٹا مصالحہ تیار کریں۔', instructionHi: 'आलू और मसालों का चटपटा मसाला बनाएं।', timerMinutes: 6 },
      { stepNumber: 3, instructionEn: 'Shape dough cones, fill potato mix, seal with water, and slow-fry in low-medium oil until golden & extra crispy.', instructionUr: 'سموسے کی شکل دے کر دھیمی آنچ پر سنہری ہونے تک تلیں۔', instructionHi: 'समोसा बनाकर धीमी आंच पर कुरकुरा तलें।', timerMinutes: 12 }
    ]
  },
  {
    id: 'crispy_pakora',
    titleEn: 'Mixed Vegetable Crispy Pakora',
    titleUr: 'مکس سبزی پکوڑے (Crispy Pakoras)',
    titleHi: 'मिक्स वेज पकोड़े (Pakoras)',
    descriptionEn: 'Crunchy fritters of sliced potatoes, onions, spinach, and green chillies coated in spiced gram flour with pomegranate and coriander seeds.',
    descriptionUr: 'باریک کٹے آلو، پیاز، پالک اور اناردانہ سے بنے برسات کے موسم کے خاص کرکرے پکوڑے۔',
    descriptionHi: 'आलू, प्याज, पालक और अनारदाने के साथ बेसन में बने कुरकुरे पकोड़े।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    defaultServings: 4,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    cuisine: 'Pakistani / Indian Street',
    caloriesPerServing: 240,
    category: 'Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'besan', nameEn: 'Besan (Gram Flour)', nameUr: 'بیسن', nameHi: 'बेसन', amount: 1.5, unit: 'cups' },
      { id: 'potato', nameEn: 'Julienned Potatoes', nameUr: 'باریک کٹے آلو', nameHi: 'आलू', amount: 1, unit: 'cup' },
      { id: 'onion', nameEn: 'Sliced Onions', nameUr: 'پیاز', nameHi: 'प्याज', amount: 1, unit: 'cup' },
      { id: 'spinach', nameEn: 'Chopped Spinach', nameUr: 'پالک', nameHi: 'पालक', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Toss vegetables with besan, ajwain, coriander seeds, chilli flakes, and just enough water to coat (do not make runny batter).', instructionUr: 'سبزیوں میں بیسن، اناردانہ اور مصالحے خشک مکس کریں اور ہلکا سا پانی چھڑکیں۔', instructionHi: 'सब्जियों में बेसन और मसाले मिलाकर थोड़ा पानी डालें।', timerMinutes: 4 },
      { stepNumber: 2, instructionEn: 'Drop small clusters into hot oil, fry on medium flame until deep golden and crunchy.', instructionUr: 'گرم تیل میں چھوٹے پکوڑے ڈال کر کرسپی سنہری تل لیں۔', instructionHi: 'गरम तेल में डालकर मध्यम आंच पर कुरकुरा तलें।', timerMinutes: 6 }
    ]
  },
  {
    id: 'dahi_baray',
    titleEn: 'Karachi Style Dahi Baray (Dahi Bhalla)',
    titleUr: 'کراچی دہی بڑے (Dahi Baray)',
    titleHi: 'दही भल्ले (Dahi Bhalla)',
    descriptionEn: 'Soft lentil dumplings soaked in creamy sweetened whisked yogurt, topped with tangy tamarind chutney, mint sauce, and chaat masala.',
    descriptionUr: 'ماڑہ دال کے نرم پھولے ہوئے بڑے، ٹھنڈے میٹھے دہی، املی کی چٹنی اور چاٹ مصالحے سے سجے ہوئے۔',
    descriptionHi: 'दाल के मुलायम वड़े, मीठी ठंडी दही, इमली की चटनी और चाट मसाले से भरपूर।',
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    defaultServings: 5,
    difficulty: 'Medium',
    diet: 'Vegetarian',
    cuisine: 'Karachi / Delhi Street Food',
    caloriesPerServing: 220,
    category: 'Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'mash_daal', nameEn: 'Urad / Moong Lentil Paste', nameUr: 'ماش و مونگ دال پیسٹ', nameHi: 'उड़द दाल', amount: 1, unit: 'cup' },
      { id: 'yogurt', nameEn: 'Thick Whisked Yogurt', nameUr: 'گاڑھا پھینٹا دہی', nameHi: 'गाढ़ी दही', amount: 2, unit: 'cups' },
      { id: 'chutney', nameEn: 'Tamarind Imli Chutney', nameUr: 'کھٹی میٹھی املی کی چٹنی', nameHi: 'इमली चटनी', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Whip soaked lentil batter vigorously until light and fluffy. Fry round balls in medium hot oil, drain.', instructionUr: 'دال کے آمیزے کو خوب پھینٹ کر ہلکا کریں اور درمیانے تیل میں تلیں۔', instructionHi: 'दाल के घोल को फेंटकर वड़े तलें।', timerMinutes: 6 },
      { stepNumber: 2, instructionEn: 'Soak fried bhallas in lukewarm water for 10 mins, squeeze gently between palms. Arrange in dish, pour chilled sweet yogurt, imli chutney, and sprinkle special chaat masala.', instructionUr: 'نیم گرم پانی میں 10 منٹ بھگوئیں، نچوڑ کر پلیٹ میں سجائیں، ٹھنڈا دہی اور چٹنیاں ڈالیں۔', instructionHi: 'पानी में भिगोकर निचोड़ें, दही और चटनी डालकर परोसें।', timerMinutes: 8 }
    ]
  },
  {
    id: 'gol_gappay',
    titleEn: 'Khatta Meetha Gol Gappay (Pani Puri)',
    titleUr: 'گول گپے اور کھٹا پانی (Gol Gappay)',
    titleHi: 'पानी पूरी / गोलगप्पे (Pani Puri)',
    descriptionEn: 'Crispy hollow semolina puris stuffed with boiled chickpeas, spiced potatoes, drenched in tangy mint-tamarind water.',
    descriptionUr: 'کرکری پاپڑیاں، ابلے چنے اور آلو، املی کے تیز کھٹے اور میٹھے ٹھنڈے پانی کے ساتھ۔',
    descriptionHi: 'कुरकुरी पूरियां, उबले चने-आलू और तीखे-खट्टे पुदीने के ठंडे पानी के साथ।',
    prepTimeMinutes: 20,
    cookTimeMinutes: 5,
    defaultServings: 4,
    difficulty: 'Easy',
    diet: 'Vegan',
    cuisine: 'South Asian Street Classic',
    caloriesPerServing: 180,
    category: 'Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'puris', nameEn: 'Crisp Hollow Puris', nameUr: 'گول گپہ پوریاں', nameHi: 'पूरी', amount: 20, unit: 'pcs' },
      { id: 'chickpeas', nameEn: 'Boiled Chickpeas & Potatoes', nameUr: 'ابلے چنے اور آلو', nameHi: 'चने व आलू', amount: 1, unit: 'cup' },
      { id: 'imli_water', nameEn: 'Tamarind Mint Water (Khatta)', nameUr: 'املی اور پودینہ کا کھٹا پانی', nameHi: 'खट्टा पानी', amount: 3, unit: 'cups' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Blend mint, green chillies, ginger, tamarind pulp, black salt, and cumin in cold water to make spicy khatta pani.', instructionUr: 'پودینہ، ہری مرچ، املی اور کالے نمک سے ٹھنڈا چٹپٹا کھٹا پانی تیار کریں۔', instructionHi: 'पुदीना, इमली और काला नमक मिलाकर तीखा पानी बनाएं।', timerMinutes: 5 },
      { stepNumber: 2, instructionEn: 'Crack hole in puri center, fill with chickpeas and potatoes, spoon sweet chutney, dip in ice cold spicy water and devour.', instructionUr: 'پوری میں سوراخ کر کے چنے اور آلو بھریں اور ٹھنڈا پانی بھر کر کھائیں۔', instructionHi: 'पूरी में चना-आलू भरें और खट्टा पानी भरकर खाएं।', timerMinutes: 3 }
    ]
  },
  {
    id: 'chicken_spring_rolls',
    titleEn: 'Crispy Chicken Spring Rolls',
    titleUr: 'چکن سپرنگ رولز (Spring Rolls)',
    titleHi: 'चिकन स्प्रिंग रोल (Spring Rolls)',
    descriptionEn: 'Thin pastry wrappers stuffed with shredded chicken, crunchy cabbage, carrots, soy sauce, and fried until crackling crisp.',
    descriptionUr: 'ریشہ دار چکن، باریک کٹی بند گوبھی اور گاجر سے بھرے خستہ گولڈن رولز۔',
    descriptionHi: 'पत्तागोभी, गाजर और चिकन से भरे हुए कुरकुरे स्प्रिंग रोल्स।',
    prepTimeMinutes: 20,
    cookTimeMinutes: 12,
    defaultServings: 5,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'Desi Chinese',
    caloriesPerServing: 220,
    category: 'Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', nameEn: 'Shredded Boiled Chicken', nameUr: 'ابلا ریشہ کیا ہوا چکن', nameHi: 'उबला चिकन', amount: 250, unit: 'g' },
      { id: 'cabbage', nameEn: 'Shredded Cabbage & Carrots', nameUr: 'بند گوبھی اور گاجر', nameHi: 'पत्तागोभी', amount: 2, unit: 'cups' },
      { id: 'sheets', nameEn: 'Roll Wrappers', nameUr: 'رول پٹیاں', nameHi: 'रोल शीट', amount: 10, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Stir fry chicken and vegetables in soy sauce, black pepper, and garlic until crisp-tender. Cool completely.', instructionUr: 'چکن اور سبزیوں کو سویا ساس میں تیز آنچ پر بھون کر ٹھنڈا کریں۔', instructionHi: 'चिकन और सब्जियों को तेज आंच पर भूनकर ठंडा करें।', timerMinutes: 5 },
      { stepNumber: 2, instructionEn: 'Place filling in roll sheet, roll tightly, seal edges with flour paste, and deep fry until crispy and golden.', instructionUr: 'پٹی میں فلنگ بھر کر رول کریں اور سنہری کرسپی تل لیں۔', instructionHi: 'रोल बनाकर गरम तेल में सुनहरा तलें।', timerMinutes: 6 }
    ]
  }
];
