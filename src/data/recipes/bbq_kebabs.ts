import { Recipe } from '../../types';

export const bbqRecipes: Recipe[] = [
  {
    id: 'peshawari_chapli_kebab',
    titleEn: 'Peshawari Chapli Kebab',
    titleUr: 'پشاوری چپلی کباب (Chapli Kebab)',
    titleHi: 'चपली कबाब (Chapli Kebab)',
    descriptionEn: 'Crispy pan-fried beef flat patties loaded with coarsely crushed coriander seeds, pomegranate arils, tomatoes, and green chillies.',
    descriptionUr: 'ثابت دھنیا، اناردانہ، ٹماٹر اور ہری مرچوں سے بھرپور روایتی پشاوری کباب۔',
    descriptionHi: 'साबुत धनिया, अनारदाना, टमाटर और तीखे मसालों से बने पिशावरी कबाब।',
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    defaultServings: 4,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'Peshawari Pashtun',
    caloriesPerServing: 410,
    category: 'Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'mince', nameEn: 'Beef or Mutton Mince', nameUr: 'بیف یا مٹن قیمہ', nameHi: 'कीमा', amount: 500, unit: 'g' },
      { id: 'anardana', nameEn: 'Crushed Pomegranate Seeds', nameUr: 'کٹا اناردانہ', nameHi: 'अनारदाना', amount: 2, unit: 'tbsp' },
      { id: 'tomato', nameEn: 'Chopped & Sliced Tomatoes', nameUr: 'ٹماٹر', nameHi: 'टमाटर', amount: 2, unit: 'pcs' },
      { id: 'coriander_seeds', nameEn: 'Crushed Coriander Seeds', nameUr: 'ثابت کٹا دھنیا', nameHi: 'कुटा धनिया', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Knead mince with spices, eggs, maize flour, and pomegranate seeds for 5 mins.', instructionUr: 'قیمے میں تمام مصالحے، مکئی کا آٹا اور اناردانہ ڈال کر اچھی طرح گوندھیں۔', instructionHi: 'कीमे में सारे मसाले और मक्के का आटा डालकर गूंथें।', timerMinutes: 5 },
      { stepNumber: 2, instructionEn: 'Shape flat patties, press a tomato slice on top, and shallow fry in hot animal fat/ghee until crisp.', instructionUr: 'پتلے کباب بنا کر اوپر ٹماٹر کا سلائس لگائیں اور گرم گھی میں کرسپی فرائی کریں۔', instructionHi: 'टमाटर का स्लाइस लगाकर घी में क्रिस्पी तलें।', timerMinutes: 8 }
    ]
  },
  {
    id: 'shami_kebab',
    titleEn: 'Melt-in-Mouth Shami Kebab',
    titleUr: 'ریشہ دار شامی کباب (Shami Kebab)',
    titleHi: 'शामी कबाब (Shami Kebab)',
    descriptionEn: 'Silky patties of beef or chicken boiled with chana dal, whole spices, herbs, and finely minced for a tender texture.',
    descriptionUr: 'چنے کی دال اور گوشت کو مصالحوں کے ساتھ پکا کر پیسا گیا سب کا پسندیدہ شامی کباب۔',
    descriptionHi: 'चने की दाल और गोश्त को उबालकर पीसा गया मखमली शामी कबाब।',
    prepTimeMinutes: 25,
    cookTimeMinutes: 25,
    defaultServings: 6,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'Mughlai / Pakistani',
    caloriesPerServing: 240,
    category: 'Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'meat', nameEn: 'Boneless Beef or Chicken', nameUr: 'بون لیس گوشت', nameHi: 'गोश्त', amount: 500, unit: 'g' },
      { id: 'lentils', nameEn: 'Chana Daal', nameUr: 'چنے کی دال', nameHi: 'चना दाल', amount: 1, unit: 'cup' },
      { id: 'egg', nameEn: 'Egg for dipping', nameUr: 'انڈا', nameHi: 'अंडा', amount: 2, unit: 'pcs' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Boil meat, soaked chana dal, whole red chillies, and spices until dry and tender.', instructionUr: 'گوشت، چنے کی دال اور مصالحوں کو پانی خشک ہونے تک گلا لیں۔', instructionHi: 'दाल और गोश्त को मसालों के साथ पकाकर सुखा लें।', timerMinutes: 20 },
      { stepNumber: 2, instructionEn: 'Grind mixture, mix in fresh coriander and green chillies, shape into round patties, egg coat and fry.', instructionUr: 'پیس کر کباب بنائیں، انڈے میں ڈپ کر کے سنہری تل لیں۔', instructionHi: 'पीसकर कबाब बनाएं और अंडे में डुबोकर तलें।', timerMinutes: 8 }
    ]
  },
  {
    id: 'seekh_kebab',
    titleEn: 'Charcoal Grilled Seekh Kebab',
    titleUr: 'سیخ کباب (Seekh Kebab)',
    titleHi: 'सीख कबाब (Seekh Kebab)',
    descriptionEn: 'Skewered minced meat blended with grated onions, ginger, garlic, garam masala, and mint, grilled over red coals.',
    descriptionUr: 'کوئلوں پر سینکے ہوئے رسیلے سیخ کباب، پودینے کے رائتے اور پیاز کے لچھوں کے ساتھ۔',
    descriptionHi: 'सीखों पर अंगारों पर भुने हुए रसीले और खुशबूदार सीख कबाब।',
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    defaultServings: 4,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'Pakistani / Delhi',
    caloriesPerServing: 320,
    category: 'Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'mince', nameEn: 'Fine Mince (with fat)', nameUr: 'باریک قیمہ چکنائی والا', nameHi: 'बारीक कीमा', amount: 600, unit: 'g' },
      { id: 'onion', nameEn: 'Squeezed Grated Onion', nameUr: 'نچوڑی ہوئی پیاز', nameHi: 'प्याज', amount: 1, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Mix mince with squeezed onion, spices, and fat. Thread onto flat metal skewers.', instructionUr: 'قیمے میں مصالحے مکس کر کے سیخوں پر کباب پرو لیں۔', instructionHi: 'कीमे को सीखों पर लगाएं।', timerMinutes: 8 },
      { stepNumber: 2, instructionEn: 'Grill over coals or bake at high heat, basting with melted butter.', instructionUr: 'کوئلوں یا اوون میں سینکیں اور مکھن لگائیں۔', instructionHi: 'अंगारों पर सेंकें और मक्खन लगाएं।', timerMinutes: 10 }
    ]
  },
  {
    id: 'chicken_malai_boti',
    titleEn: 'Velvety Chicken Malai Boti',
    titleUr: 'چکن ملائی بوٹی (Malai Boti)',
    titleHi: 'चिकन मलाई बोटी (Malai Boti)',
    descriptionEn: 'Melt-in-mouth chicken chunks marinated in rich fresh cream, cheese, white pepper, and green cardamom, charcoal roasted.',
    descriptionUr: 'تازہ کریم، چیز، سفید مرچ اور چھوٹی الائچی کے مسالے میں لپٹی ملائم اور رسیلی تکہ بوٹی۔',
    descriptionHi: 'क्रीम, पनीर और सफेद मिर्च में मैरीनेट की हुई मलाईदार चिकन बोटी।',
    prepTimeMinutes: 25,
    cookTimeMinutes: 15,
    defaultServings: 4,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'Pakistani BBQ',
    caloriesPerServing: 370,
    category: 'Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', nameEn: 'Boneless Chicken Cubes', nameUr: 'بون لیس چکن', nameHi: 'चिकन', amount: 600, unit: 'g' },
      { id: 'cream', nameEn: 'Heavy Cream', nameUr: 'تازہ بالائی یا کریم', nameHi: 'क्रीम', amount: 4, unit: 'tbsp' },
      { id: 'yogurt', nameEn: 'Hung Curd', nameUr: 'گاڑھا دہی', nameHi: 'दही', amount: 3, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Marinate chicken in cream, yogurt, ginger garlic, green chilli paste, and white pepper for 2 hours.', instructionUr: 'چکن کو کریم، دہی اور سفید مرچ میں میرینیٹ کریں۔', instructionHi: 'चिकन को क्रीम और मसालों में मैरीनेट करें।', timerMinutes: 5 },
      { stepNumber: 2, instructionEn: 'Grill on skewers until tender and golden brown, brush with melted butter.', instructionUr: 'سیخوں پر لگا کر گرل کریں اور مکھن لگائیں۔', instructionHi: 'सीखों पर सेंकें और मक्खन लगाएं।', timerMinutes: 12 }
    ]
  },
  {
    id: 'lahori_fish_fry',
    titleEn: 'Crispy Lahori Fish Fry',
    titleUr: 'لاہوری فش فرائی (Lahori Fish Fry)',
    titleHi: 'लाहौरी फिश फ्राई (Fish Fry)',
    descriptionEn: 'Fish fillets marinated with carom seeds (ajwain), crushed coriander, ginger-garlic, dipped in spiced gram flour and fried crisp.',
    descriptionUr: 'اجوائن، کٹا دھنیا، بیسن اور چاٹ مصالحے کی کوٹنگ والی گرما گرم کرکری تلی مچھلی۔',
    descriptionHi: 'अजवाइन, बेसन और मसालों में लिपटी कुरकुरी फ्राइड फिश।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    defaultServings: 4,
    difficulty: 'Easy',
    diet: 'Non-Veg',
    cuisine: 'Lahori Street Style',
    caloriesPerServing: 290,
    category: 'Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'fish', nameEn: 'Fish Fillets (Rohu/Surmai)', nameUr: 'مچھلی کے فلے', nameHi: 'मछली', amount: 600, unit: 'g' },
      { id: 'gram_flour', nameEn: 'Besan (Gram Flour)', nameUr: 'بیسن', nameHi: 'बेसन', amount: 0.5, unit: 'cup' },
      { id: 'ajwain', nameEn: 'Carom Seeds (Ajwain)', nameUr: 'اجوائن', nameHi: 'अजवाइन', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Rub fish with lemon, ajwain, ginger-garlic paste, and spices.', instructionUr: 'مچھلی پر لیموں، اجوائن اور ادرک لہسن کا مسالہ لگائیں۔', instructionHi: 'मछली पर नींबू, अजवाइन और मसाले लगाएं।', timerMinutes: 5 },
      { stepNumber: 2, instructionEn: 'Coat with seasoned gram flour batter and deep fry in hot oil until golden and crispy.', instructionUr: 'بیسن کے گھول میں کوٹ کر کے تیز گرم تیل میں کرسپی تلیں۔', instructionHi: 'बेसन में लपेटकर तेल में कुरकुरा तलें।', timerMinutes: 8 }
    ]
  },
  {
    id: 'chicken_bihari_boti',
    titleEn: 'Spicy Bihari Boti',
    titleUr: 'بہاری بوٹی (Bihari Boti)',
    titleHi: 'बिहारी बोटी (Bihari Boti)',
    descriptionEn: 'Thin slices of meat tenderized with raw papaya, mustard oil, fried onions, and Bihari spice blend.',
    descriptionUr: 'سرسوں کے تیل، کچے پپیتے اور تلی پیاز میں گھلی ہوئی لذیذ اور نرم بہاری بوٹی۔',
    descriptionHi: 'सरसों के तेल और कच्चे पपीते में मैरीनेट की हुई नरम बिहारी बोटी।',
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    defaultServings: 4,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'Bihari / Pakistani',
    caloriesPerServing: 350,
    category: 'Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'meat', nameEn: 'Beef or Chicken strips', nameUr: 'پتلے پارچے', nameHi: 'पारचे', amount: 500, unit: 'g' },
      { id: 'mustard_oil', nameEn: 'Mustard Oil', nameUr: 'سرسوں کا تیل', nameHi: 'सरसों का तेल', amount: 3, unit: 'tbsp' },
      { id: 'papaya', nameEn: 'Raw Papaya Paste', nameUr: 'کچا پپیتا پیسٹ', nameHi: 'कच्चा पपीता', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Marinate thin slices with papaya, mustard oil, crushed fried onions, and roasted spices.', instructionUr: 'گوشت کے پتلے پارچوں کو پپیتے، سرسوں کے تیل اور مصالحوں میں میرینیٹ کریں۔', instructionHi: 'पारचों को पपीते और सरसों के तेल में मैरीनेट करें।', timerMinutes: 8 },
      { stepNumber: 2, instructionEn: 'Thread onto skewers and roast over glowing charcoal, basting with oil.', instructionUr: 'سیخوں پر لگا کر دہکتے کوئلوں پر سینک لیں۔', instructionHi: 'सीखों पर अंगारों पर भूनें।', timerMinutes: 12 }
    ]
  }
];
