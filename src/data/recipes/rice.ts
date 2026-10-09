import { Recipe } from '../../types';

export const riceRecipes: Recipe[] = [
  {
    id: 'sindhi_biryani',
    titleEn: 'Spicy Sindhi Biryani',
    titleUr: 'سندھی بریانی (Sindhi Biryani)',
    titleHi: 'सिंधी बिरयानी (Sindhi Biryani)',
    descriptionEn: 'Fragrant basmati rice layered with spicy chicken or mutton masala, potatoes, dried prunes, mint, and fried onions.',
    descriptionUr: 'آلو، آلو بخارے، تازہ پودینہ اور مصالحے دار چکن کے ساتھ تیار خوشبودار تہہ والی سندھی بریانی۔',
    descriptionHi: 'आलू, आलू बुखारे और तीखे मसालेदार चिकन के साथ लेयर वाली सिंधी बिरयानी।',
    prepTimeMinutes: 30,
    cookTimeMinutes: 40,
    defaultServings: 6,
    difficulty: 'Hard',
    diet: 'Non-Veg',
    cuisine: 'Sindhi / Pakistani',
    caloriesPerServing: 520,
    category: 'Rice',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', nameEn: 'Basmati Rice', nameUr: 'باسمتی چاول', nameHi: 'बासमती चावल', amount: 750, unit: 'g' },
      { id: 'chicken', nameEn: 'Chicken', nameUr: 'چکن', nameHi: 'चिकन', amount: 800, unit: 'g' },
      { id: 'potato', nameEn: 'Potatoes (halved)', nameUr: 'آلو', nameHi: 'आलू', amount: 3, unit: 'pcs' },
      { id: 'prunes', nameEn: 'Dried Plums (Aloo Bukhara)', nameUr: 'خشک آلو بخارہ', nameHi: 'आलू बुखारा', amount: 8, unit: 'pcs' },
      { id: 'yogurt', nameEn: 'Yogurt', nameUr: 'دہی', nameHi: 'दही', amount: 1, unit: 'cup' },
      { id: 'mint', nameEn: 'Fresh Mint', nameUr: 'تازہ پودینہ', nameHi: 'पुदीना', amount: 1, unit: 'bunch' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Boil rice with whole spices until 75% done (one kani remaining), drain.', instructionUr: 'چاولوں کو گرم مصالحے کے ساتھ ایک کنی رہنے تک ابال کر چھان لیں۔', instructionHi: 'चावल को 75% उबालकर छान लें।', timerMinutes: 8 },
      { stepNumber: 2, instructionEn: 'Cook chicken, potatoes, yogurt, spices, and prunes into a rich qorma.', instructionUr: 'چکن، آلو، دہی اور مصالحوں کا گاڑھا قورمہ تیار کریں۔', instructionHi: 'चिकन, आलू और मसालों का कोरमा बनाएं।', timerMinutes: 20 },
      { stepNumber: 3, instructionEn: 'Layer rice over qorma, top with mint, fried onions, saffron milk, dum cook for 15 mins.', instructionUr: 'قورمے پر چاول، پودینہ، تلی پیاز اور زردہ رنگ ڈال کر 15 منٹ دم دیں۔', instructionHi: 'चावल की परत लगाकर 15 मिनट दम पर रखें।', timerMinutes: 15 }
    ]
  },
  {
    id: 'hyderabadi_dum_biryani',
    titleEn: 'Hyderabadi Dum Biryani',
    titleUr: 'حیدرآبادی دم بریانی (Hyderabadi Biryani)',
    titleHi: 'हैदराबादी दम बिरयानी (Dum Biryani)',
    descriptionEn: 'The king of biryanis: raw marinated meat layered with parboiled basmati rice and sealed with dough for authentic dum cooking.',
    descriptionUr: 'کچے مصالحے کے گوشت پر چاول کی تہہ لگا کر آٹے سے سیل کر کے پکائی جانے والی شاہی بریانی۔',
    descriptionHi: 'कच्चे गोश्त और बासमती चावल को धीमी आंच पर दम देकर बनाई गई हैदराबादी बिरयानी।',
    prepTimeMinutes: 40,
    cookTimeMinutes: 45,
    defaultServings: 6,
    difficulty: 'Hard',
    diet: 'Non-Veg',
    cuisine: 'Hyderabadi',
    caloriesPerServing: 550,
    category: 'Rice',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'mutton', nameEn: 'Mutton pieces', nameUr: 'مٹن', nameHi: 'मटन', amount: 800, unit: 'g' },
      { id: 'rice', nameEn: 'Aged Basmati Rice', nameUr: 'باسمتی چاول', nameHi: 'बासमती चावल', amount: 600, unit: 'g' },
      { id: 'ghee', nameEn: 'Pure Desi Ghee', nameUr: 'دیسی گھی', nameHi: 'देसी घी', amount: 4, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Marinate mutton with raw papaya, fried onions, spices, and curd for 3 hours.', instructionUr: 'مٹن کو کچے پپیتے، دہی اور مصالحوں میں 3 گھنٹے میرینیٹ کریں۔', instructionHi: 'मटन को मसालों में मैरीनेट करें।', timerMinutes: 10 },
      { stepNumber: 2, instructionEn: 'Layer parboiled rice over marinated mutton, seal lid with dough, slow cook.', instructionUr: 'ہانڈی میں مٹن پھر چاول رکھ کر آٹے سے سیل کریں اور ہلکی آنچ پر 40 منٹ دم دیں۔', instructionHi: 'चावल डालकर आटा लगाकर दम दें।', timerMinutes: 40 }
    ]
  },
  {
    id: 'chicken_pulao',
    titleEn: 'Degi Yakhni Pulao',
    titleUr: 'دیگی یخنی پلاؤ (Yakhni Pulao)',
    titleHi: 'यखनी पुलाव (Yakhni Pulao)',
    descriptionEn: 'Subtly aromatic rice cooked directly in rich bone broth (yakhni) with whole fennel, coriander seeds, and tender meat.',
    descriptionUr: 'سونف، دھنیا اور ثابت گرم مصالحوں کی خوشبودار یخنی میں پکے لذیذ دیسی چاول۔',
    descriptionHi: 'सौंफ, साबुत धनिया और मटन के सूप (यखनी) में बना लाजवाब पुलाव।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 35,
    defaultServings: 5,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'Pakistani / Awadhi',
    caloriesPerServing: 420,
    category: 'Rice',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', nameEn: 'Chicken with bones', nameUr: 'ہڈی والا چکن', nameHi: 'चिकन', amount: 700, unit: 'g' },
      { id: 'rice', nameEn: 'Basmati Rice', nameUr: 'باسمتی چاول', nameHi: 'बासमتی चावल', amount: 500, unit: 'g' },
      { id: 'fennel', nameEn: 'Fennel & Coriander seeds', nameUr: 'سونف اور ثابت دھنیا پوٹلی', nameHi: 'सौंफ व धनिया', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Boil chicken with spice pouch, garlic, and water to make clear yakhni broth.', instructionUr: 'چکن کو سونف دھنیا کی پوٹلی کے ساتھ ابال کر یخنی بنائیں۔', instructionHi: 'मसालों के साथ चिकन को उबालकर यखनी बनाएं।', timerMinutes: 20 },
      { stepNumber: 2, instructionEn: 'Fry onions golden, sauté chicken, add strained broth, and cook soaked rice until water absorbs. Dum 15 mins.', instructionUr: 'پیاز براؤن کر کے چکن بھونیں، یخنی اور چاول ڈال کر دم دیں۔', instructionHi: 'प्याज भूनकर यखनी व चावल डालें और दम दें।', timerMinutes: 20 }
    ]
  },
  {
    id: 'matar_pulao',
    titleEn: 'Fragrant Matar Pulao',
    titleUr: 'مٹر پلاؤ (Matar Pulao)',
    titleHi: 'मटर पुलाव (Matar Pulao)',
    descriptionEn: 'Comforting one-pot vegetarian rice loaded with sweet green peas, caramelized onions, and cumin seeds.',
    descriptionUr: 'تازہ میٹھے مٹروں، زیرہ اور تلی پیاز سے تیار سادہ اور بے حد مزیدار پلاؤ۔',
    descriptionHi: 'ताजा हरी मटर, जीरा और प्याज के साथ बना खुशबूदार वेज पुलाव।',
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    defaultServings: 4,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    cuisine: 'Desi Comfort',
    caloriesPerServing: 310,
    category: 'Rice',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', nameEn: 'Basmati Rice', nameUr: 'باسمتی چاول', nameHi: 'बासमती चावल', amount: 400, unit: 'g' },
      { id: 'peas', nameEn: 'Fresh Green Peas', nameUr: 'تازہ مٹر', nameHi: 'हरी मटर', amount: 1.5, unit: 'cups' },
      { id: 'cumin', nameEn: 'Zeera (Cumin)', nameUr: 'سفید زیرہ', nameHi: 'जीरा', amount: 1.5, unit: 'tsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Sauté sliced onions and cumin seeds in oil until light golden.', instructionUr: 'تیل میں زیرہ اور پیاز سنہری ہونے تک تلیں۔', instructionHi: 'जीरा और प्याज हल्का सुनहरा भूनें।', timerMinutes: 4 },
      { stepNumber: 2, instructionEn: 'Add green peas, rice, water, and cook until water absorbs, then dum steam.', instructionUr: 'مٹر، چاول اور پانی ڈال کر ابالیں اور پانی خشک ہونے پر دم لگائیں۔', instructionHi: 'मटर और चावल डालकर पकाएं फिर दम दें।', timerMinutes: 15 }
    ]
  },
  {
    id: 'daal_chawal_combo',
    titleEn: 'Classic Daal Chawal with Zeera Rice',
    titleUr: 'دال چاول اور تڑکا (Daal Chawal)',
    titleHi: 'दाल चावल (Daal Chawal)',
    descriptionEn: 'The ultimate comfort meal: yellow dal cooked with turmeric and tempered with garlic-cumin ghee tarka, served over steamed basmati.',
    descriptionUr: 'ہر دلعزیز تڑکا لگی پیلی دال اور گرما گرم چاول، اچار اور کچومر کے ساتھ۔',
    descriptionHi: 'लहसुन और जीरे के तड़के वाली पीली दाल और गरमा गरम बासमती चावल।',
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    defaultServings: 4,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    cuisine: 'Desi Everyday',
    caloriesPerServing: 340,
    category: 'Rice',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'lentils', nameEn: 'Moong & Masoor Daal', nameUr: 'مونگ مسور دال', nameHi: 'दाल', amount: 1, unit: 'cup' },
      { id: 'rice', nameEn: 'Basmati Rice', nameUr: 'چاول', nameHi: 'चावल', amount: 2, unit: 'cups' },
      { id: 'garlic', nameEn: 'Garlic for Tarka', nameUr: 'لہسن تڑکے کے لیے', nameHi: 'लहसुन', amount: 5, unit: 'cloves' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Boil lentils with turmeric, salt, and water until soft.', instructionUr: 'دال کو ہلدی اور نمک کے ساتھ گلا لیں۔', instructionHi: 'दाल को हल्दी और नमक के साथ उबालें।', timerMinutes: 15 },
      { stepNumber: 2, instructionEn: 'Heat ghee with sliced garlic, cumin, round red chillies, and pour sizzling tarka over dal.', instructionUr: 'گھی میں لہسن، زیرہ اور گول لال مرچ کا کڑکڑاتا تڑکا لگائیں۔', instructionHi: 'देसी घी में लहसुन और जीरे का तड़का लगाएं।', timerMinutes: 3 }
    ]
  },
  {
    id: 'kabuli_pulao',
    titleEn: 'Afghani Kabuli Pulao',
    titleUr: 'کابلی پلاؤ (Kabuli Pulao)',
    titleHi: 'काबुली पुलाव (Kabuli Pulao)',
    descriptionEn: 'Sweet and savory Afghani rice cooked in lamb broth, garnished with caramelized julienned carrots, plump raisins, and almonds.',
    descriptionUr: 'شیریں گاجر، کشمش اور بادام کی ٹاپنگ کے ساتھ دنبے کے گوشت میں تیار افغانی کابلی پلاؤ۔',
    descriptionHi: 'मीठी गाजर, किशमिश और बादाम की सजावट वाला लजीज काबुली पुलाव।',
    prepTimeMinutes: 25,
    cookTimeMinutes: 45,
    defaultServings: 6,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'Afghani / Pashtun',
    caloriesPerServing: 480,
    category: 'Rice',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'meat', nameEn: 'Mutton or Lamb Shanks', nameUr: 'مٹن یا دنبے کا گوشت', nameHi: 'मटन', amount: 800, unit: 'g' },
      { id: 'rice', nameEn: 'Sella Basmati Rice', nameUr: 'سیلہ چاول', nameHi: 'सेला चावल', amount: 500, unit: 'g' },
      { id: 'carrots', nameEn: 'Julienned Carrots', nameUr: 'باریک کٹی گاجر', nameHi: 'गाजर', amount: 2, unit: 'cups' },
      { id: 'raisins', nameEn: 'Black Raisins (Kishmish)', nameUr: 'کشمش', nameHi: 'किशमिश', amount: 0.5, unit: 'cup' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Caramelize julienned carrots and raisins in sugar and butter.', instructionUr: 'گاجر اور کشمش کو تھوڑی چینی اور مکھن میں فرائی کریں۔', instructionHi: 'गाजर और किशमिश को मक्खन में भूनें।', timerMinutes: 5 },
      { stepNumber: 2, instructionEn: 'Cook rice in lamb broth, layer meat, top with carrots & raisins, dum for 20 mins.', instructionUr: 'گوشت کی یخنی میں چاول پکا کر گاجر کشمش سے سجائیں اور دم دیں۔', instructionHi: 'यखनी में चावल पकाएं, गाजर-किशमिश डालकर दम दें।', timerMinutes: 20 }
    ]
  },
  {
    id: 'egg_fried_rice',
    titleEn: 'Desi Style Egg Fried Rice',
    titleUr: 'ایگ فرائیڈ رائس (Egg Fried Rice)',
    titleHi: 'एग फ्राइड राइस (Egg Fried Rice)',
    descriptionEn: 'Quick wok-tossed chilled rice with scrambled eggs, scallions, soy sauce, and crunchy veggies.',
    descriptionUr: 'انڈے، ہری پیاز، شملہ مرچ اور سویا ساس کے ساتھ تیار چٹ پٹے چائنیز رائس۔',
    descriptionHi: 'अंडे, हरी प्याज और सब्जियों के साथ बना स्वादिष्ट एग फ्राइड राइस।',
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    defaultServings: 3,
    difficulty: 'Easy',
    diet: 'Non-Veg',
    cuisine: 'Indo-Chinese',
    caloriesPerServing: 310,
    category: 'Rice',
    imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', nameEn: 'Cold Cooked Rice', nameUr: 'ابلے ہوئے ٹھنڈے چاول', nameHi: 'पके चावल', amount: 3, unit: 'cups' },
      { id: 'egg', nameEn: 'Eggs', nameUr: 'انڈے', nameHi: 'अंडे', amount: 3, unit: 'pcs' },
      { id: 'scallions', nameEn: 'Spring Onions', nameUr: 'ہری پیاز', nameHi: 'हरी प्याज', amount: 3, unit: 'stalks' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Scramble eggs in hot wok with oil, set aside.', instructionUr: 'کڑاہی میں انڈوں کو فرائی کر کے نکال لیں۔', instructionHi: 'अंडों को पैन में हल्का भून लें।', timerMinutes: 2 },
      { stepNumber: 2, instructionEn: 'Sauté garlic, add rice, soy sauce, black pepper, and fold in eggs and spring onions on high heat.', instructionUr: 'لہسن بھون کر چاول، ساس اور انڈے تیز آنچ پر 3 منٹ ٹاس کریں۔', instructionHi: 'लहसुन, चावल, सॉस और अंडे डालकर तेज आंच पर भूनें।', timerMinutes: 4 }
    ]
  },
  {
    id: 'khichdi_comfort',
    titleEn: 'Moong Daal Desi Khichdi',
    titleUr: 'مونگ دال کھچڑی (Khichdi)',
    titleHi: 'मूंग दाल खिचड़ी (Khichdi)',
    descriptionEn: 'Light, wholesome, and healing one-pot porridge of yellow moong lentils and basmati rice with a cumin-ghee tarka.',
    descriptionUr: 'پیلی مونگ کی دال اور چاول کی ہلکی پھلکی، ہاضمے کے لیے بہترین اور دیسی گھی سے لیس کھچڑی۔',
    descriptionHi: 'मूंग दाल और चावल की सुपाच्य और पौष्टिक देसी घी वाली खिचड़ी।',
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    defaultServings: 3,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    cuisine: 'Desi Comfort',
    caloriesPerServing: 280,
    category: 'Rice',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'rice', nameEn: 'Rice', nameUr: 'چاول', nameHi: 'चावल', amount: 1, unit: 'cup' },
      { id: 'lentils', nameEn: 'Yellow Moong Daal', nameUr: 'پیلی مونگ دال', nameHi: 'मूंग दाल', amount: 0.5, unit: 'cup' },
      { id: 'ghee', nameEn: 'Desi Ghee', nameUr: 'دیسی گھی', nameHi: 'देसी घी', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Cook rice and moong lentils together in 4 cups water with turmeric and salt until soft.', instructionUr: 'دال چاول کو ہلدی اور نمک کے ساتھ نرم ہونے تک پکائیں۔', instructionHi: 'दाल और चावल को पानी में अच्छी तरह गला लें।', timerMinutes: 15 },
      { stepNumber: 2, instructionEn: 'Top with sizzling cumin and hing tarka in desi ghee.', instructionUr: 'دیسی گھی میں زیرے کا تڑکا لگائیں اور دہی کے ساتھ پیش کریں۔', instructionHi: 'देसी घी में जीरे का तड़का लगाएं।', timerMinutes: 2 }
    ]
  },
  {
    id: 'chicken_tikka_biryani',
    titleEn: 'Charcoal Smoked Chicken Tikka Biryani',
    titleUr: 'تکہ بریانی (Tikka Biryani)',
    titleHi: 'चिकन टिक्का बिरयानी (Tikka Biryani)',
    descriptionEn: 'Fiery grilled smoky chicken tikka chunks layered between fragrant basmati rice with spicy gravy.',
    descriptionUr: 'کوئلے پر پکے چکن تکہ بوٹی اور خوشبودار چاولوں کی لذیذ دھواں دار بریانی۔',
    descriptionHi: 'कोयले के धुएं वाले चिकन टिक्का और बासमती चावल की तीखी बिरयानी।',
    prepTimeMinutes: 30,
    cookTimeMinutes: 35,
    defaultServings: 5,
    difficulty: 'Medium',
    diet: 'Non-Veg',
    cuisine: 'Karachi Style',
    caloriesPerServing: 510,
    category: 'Rice',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chicken', nameEn: 'Tikka marinated chicken', nameUr: 'تکہ چکن', nameHi: 'टिक्का चिकन', amount: 750, unit: 'g' },
      { id: 'rice', nameEn: 'Basmati Rice', nameUr: 'باسمتی چاول', nameHi: 'बासमती चावल', amount: 500, unit: 'g' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Pan roast chicken tikka until charred and give coal smoke.', instructionUr: 'چکن تکہ کو پین میں پکا کر کوئلے کا دھواں دیں۔', instructionHi: 'चिकन टिक्का पकाकर कोयले का धुंआ दें।', timerMinutes: 10 },
      { stepNumber: 2, instructionEn: 'Prepare spicy masala gravy, layer with boiled rice and tikka, dum for 15 mins.', instructionUr: 'گریوی میں چاول اور تکہ بوٹی رکھ کر دم دیں۔', instructionHi: 'चावल और टिक्का की परत लगाकर दम दें।', timerMinutes: 15 }
    ]
  },
  {
    id: 'chana_pulao',
    titleEn: 'Degi Chana Pulao',
    titleUr: 'دیگی چنا پلاؤ (Chana Pulao)',
    titleHi: 'चना पुलाव (Chana Pulao)',
    descriptionEn: 'Hearty chickpea pulao made with soft boiled garbanzo beans, green chillies, whole spices, and caramelized onions.',
    descriptionUr: 'سفید چنوں، تلی ہوئی پیاز اور گرم مصالحوں کے ساتھ تیار خوشبودار دیگی چنا پلاؤ۔',
    descriptionHi: 'सफेद काबुली चने और साबुत मसालों से बना टेस्टी वेज पुलाव।',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    defaultServings: 5,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    cuisine: 'Pakistani / Punjabi',
    caloriesPerServing: 350,
    category: 'Rice',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'chickpeas', nameEn: 'Boiled White Chickpeas', nameUr: 'ابلے سفید چنے', nameHi: 'उबले चने', amount: 2, unit: 'cups' },
      { id: 'rice', nameEn: 'Basmati Rice', nameUr: 'باسمتی چاول', nameHi: 'बासमती चावल', amount: 500, unit: 'g' }
    ],
    steps: [
      { stepNumber: 1, instructionEn: 'Brown onions, sauté ginger-garlic and boiled chickpeas with whole spices.', instructionUr: 'پیاز براؤن کر کے ادرک لہسن اور ابلے چنے بھونیں۔', instructionHi: 'प्याज भूनकर अदरक-लहसुन और चने भूनें।', timerMinutes: 6 },
      { stepNumber: 2, instructionEn: 'Add water, soaked rice, cook until water evaporates, and steam on dum.', instructionUr: 'پانی اور چاول ڈال کر ابالیں اور دم پر پکائیں۔', instructionHi: 'पानी और चावल डालकर दम पर रखें।', timerMinutes: 15 }
    ]
  }
];
