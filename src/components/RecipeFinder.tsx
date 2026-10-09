import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  Clock, 
  ChefHat, 
  Flame, 
  AlertCircle, 
  Plus, 
  ShoppingCart, 
  UtensilsCrossed, 
  Heart,
  ArrowRight
} from 'lucide-react';
import { useKitchen } from '../context/KitchenContext';
import { Recipe } from '../types';

interface RecipeFinderProps {
  onSelectRecipe: (recipe: Recipe) => void;
  onStartCooking: (recipe: Recipe) => void;
}

export const RecipeFinder: React.FC<RecipeFinderProps> = ({ onSelectRecipe, onStartCooking }) => {
  const { 
    language, 
    recipes, 
    pantryItems, 
    toggleFavoriteRecipe, 
    addMultipleGroceryItems 
  } = useKitchen();

  // Manual ingredient selection mode
  const [selectedIngredientIds, setSelectedIngredientIds] = useState<string[]>([]);
  const [dietFilter, setDietFilter] = useState<'All' | 'Vegetarian' | 'Non-Veg'>('All');

  // Set of in-stock pantry item IDs
  const inStockIds = new Set(
    selectedIngredientIds.length > 0 
      ? selectedIngredientIds 
      : pantryItems.filter(i => i.inStock).map(i => i.id)
  );

  // Compute ingredient match for each recipe
  const analyzedRecipes = recipes.map(recipe => {
    const requiredItems = recipe.ingredients;
    const available = requiredItems.filter(ing => inStockIds.has(ing.id));
    const missing = requiredItems.filter(ing => !inStockIds.has(ing.id));
    const matchPercentage = Math.round((available.length / requiredItems.length) * 100);

    return {
      recipe,
      totalCount: requiredItems.length,
      availableCount: available.length,
      missing,
      matchPercentage,
      canCookNow: missing.length === 0,
      nearMatch: missing.length > 0 && missing.length <= 2,
    };
  }).filter(item => {
    if (dietFilter === 'All') return true;
    return item.recipe.diet === dietFilter;
  });

  // Sort: 100% matches first, then near matches, then by match %
  analyzedRecipes.sort((a, b) => b.matchPercentage - a.matchPercentage);

  const perfectMatches = analyzedRecipes.filter(r => r.canCookNow);
  const nearMatches = analyzedRecipes.filter(r => r.nearMatch);
  const otherMatches = analyzedRecipes.filter(r => !r.canCookNow && !r.nearMatch);

  // Quick toggle ingredient chip
  const toggleIngredientSelection = (id: string) => {
    setSelectedIngredientIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const commonStaples = pantryItems.slice(0, 10);

  const handleAddMissingToGrocery = (missingIngs: { nameEn: string; nameUr: string; amount: number; unit: string }[]) => {
    const items = missingIngs.map(ing => ({
      name: `${ing.nameEn} (${ing.nameUr})`,
      amount: `${ing.amount} ${ing.unit}`,
      category: 'vegetables' as const,
      completed: false,
      notes: 'Added from Recipe Matcher'
    }));
    addMultipleGroceryItems(items);
    alert(
      language === 'ur'
        ? `${items.length} اشیاء گروسری لسٹ میں شامل کر دی گئیں!`
        : language === 'hi'
        ? `${items.length} सामग्रियां किराना लिस्ट में जोड़ी गईं!`
        : `Added ${items.length} missing ingredients to your grocery list!`
    );
  };

  return (
    <div className="space-y-8">
      {/* Hero Finder Banner */}
      <div className="bg-linear-to-br from-amber-600 via-orange-600 to-rose-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>
              {language === 'ur' ? 'سمارٹ کچن تجاویز' : language === 'hi' ? 'स्मार्ट रसोई रेसिपी सुझाव' : 'Smart Culinary Matcher'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            {language === 'ur' 
              ? 'باورچی خانے کی چیزوں سے کیا بن سکتا ہے؟' 
              : language === 'hi'
              ? 'घर में मौजूद सामान से आज क्या बनाएं?'
              : 'What Can I Cook Right Now?'}
          </h2>

          <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
            {language === 'ur'
              ? 'آپ کی پینٹری میں موجود اشیاء کا جائزہ لے کر ہم نے یہ مزیدار کھانے تجویز کیے ہیں۔ 100% دستیاب ریسیپیز فوراً بنائیں۔'
              : language === 'hi'
              ? 'आपकी पैंट्री में मौजूद सामग्री के अनुसार यह लज़ीज़ व्यंजन तैयार किए जा सकते हैं। 1-क्लिक में कुकिंग शुरू करें!'
              : 'Based on ingredients in your fridge & pantry, here is what you can whip up effortlessly.'}
          </p>

          {/* Quick Diet Filter */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-amber-200">
              {language === 'ur' ? 'غذا:' : language === 'hi' ? 'भोजन:' : 'Diet:'}
            </span>
            {(['All', 'Vegetarian', 'Non-Veg'] as const).map((diet) => (
              <button
                key={diet}
                onClick={() => setDietFilter(diet)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                  dietFilter === diet
                    ? 'bg-white text-stone-900 shadow-md font-bold'
                    : 'bg-black/20 hover:bg-black/30 text-amber-100'
                }`}
              >
                {diet === 'All' 
                  ? (language === 'ur' ? 'سبھی' : language === 'hi' ? 'सभी' : 'All')
                  : diet === 'Vegetarian'
                  ? (language === 'ur' ? 'سبزی خور (Veg)' : language === 'hi' ? 'शाकाहारी (Veg)' : 'Vegetarian')
                  : (language === 'ur' ? 'گوشت و مرغی (Non-Veg)' : language === 'hi' ? 'मांसाहारी (Non-Veg)' : 'Non-Veg')}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Ingredients Selector Bar */}
        <div className="mt-6 pt-5 border-t border-white/20">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold text-amber-100">
              {language === 'ur' 
                ? 'یا ہاتھ سے منتخب کریں کہ آپ کے پاس کیا ہے:' 
                : language === 'hi' 
                ? 'या हाथ से चुनें कि आपके पास क्या है:' 
                : 'Or pick ingredients to cook with:'}
            </span>
            {selectedIngredientIds.length > 0 && (
              <button
                onClick={() => setSelectedIngredientIds([])}
                className="text-xs underline text-amber-200 hover:text-white"
              >
                {language === 'ur' ? 'پینٹری استعمال کریں' : language === 'hi' ? 'पैंट्री रीसेट करें' : 'Reset to Pantry'}
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {commonStaples.map((item) => {
              const isSelected = selectedIngredientIds.length > 0 
                ? selectedIngredientIds.includes(item.id)
                : item.inStock;

              return (
                <button
                  key={item.id}
                  onClick={() => toggleIngredientSelection(item.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-amber-100 text-stone-900 font-bold border border-amber-300'
                      : 'bg-black/25 text-amber-100 hover:bg-black/40'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 text-emerald-600" />}
                  <span>{language === 'ur' ? item.nameUr : language === 'hi' ? item.nameHi : item.nameEn}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section 1: 100% Ready to Cook */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-xl font-bold text-stone-900">
              {language === 'ur' 
                ? '100% تیار - تمام اشیاء موجود ہیں' 
                : language === 'hi' 
                ? '100% तैयार - सभी सामग्री मौजूद है' 
                : 'Ready to Cook Right Now'}
            </h3>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              {perfectMatches.length} {language === 'ur' ? 'ریسیپیز' : language === 'hi' ? 'रेसिपीज' : 'recipes'}
            </span>
          </div>
        </div>

        {perfectMatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perfectMatches.map(({ recipe }) => (
              <div 
                key={recipe.id} 
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white shadow-xs">
                      100% Ready
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-stone-800 backdrop-blur-xs">
                      {recipe.diet}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavoriteRecipe(recipe.id);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-stone-700 hover:text-rose-600 transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${recipe.favorite ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h4 className="font-extrabold text-lg leading-tight line-clamp-1">
                      {language === 'ur' ? recipe.titleUr : language === 'hi' ? recipe.titleHi : recipe.titleEn}
                    </h4>
                    <p className="text-xs text-stone-200 line-clamp-1">
                      {recipe.titleEn}
                    </p>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {language === 'ur' ? recipe.descriptionUr : language === 'hi' ? recipe.descriptionHi : recipe.descriptionEn}
                  </p>

                  <div className="flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-100">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-amber-500" />
                      <span>{recipe.caloriesPerServing} kcal</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ChefHat className="w-3.5 h-3.5 text-stone-400" />
                      <span>{recipe.difficulty}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={() => onSelectRecipe(recipe)}
                      className="px-3 py-2 rounded-xl text-xs font-bold border border-stone-200 hover:bg-stone-50 text-stone-700 transition-all text-center"
                    >
                      {language === 'ur' ? 'تفصیل دیکھیں' : language === 'hi' ? 'विवरण देखें' : 'View Recipe'}
                    </button>
                    <button
                      onClick={() => onStartCooking(recipe)}
                      className="px-3 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-md transition-all flex items-center justify-center gap-1 active:scale-95"
                    >
                      <UtensilsCrossed className="w-3.5 h-3.5" />
                      <span>{language === 'ur' ? 'پکانا شروع کریں' : language === 'hi' ? 'कुक करें' : 'Cook Now'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-amber-50/60 border border-amber-200/80 rounded-3xl p-6 text-center text-stone-600">
            <UtensilsCrossed className="w-10 h-10 text-amber-500 mx-auto mb-2 opacity-60" />
            <p className="font-semibold text-stone-800">
              {language === 'ur' 
                ? 'فی الحال کوئی ایسی ریسیپی نہیں ہے جس کی 100% اشیاء موجود ہوں' 
                : language === 'hi'
                ? 'फिलहाल ऐसी कोई रेसिपी नहीं है जिसकी सभी 100% सामग्री उपलब्ध हो'
                : 'No recipes with 100% ingredients in stock currently'}
            </p>
            <p className="text-xs text-stone-500 mt-1">
              {language === 'ur'
                ? 'نیچے دیے گئے "قریب قریب تیار" کھانوں میں صرف 1 یا 2 چیزیں کم ہیں۔'
                : language === 'hi'
                ? 'नीचे दिए गए व्यंजनों में केवल 1 या 2 चीजें कम हैं। उन्हें किराना लिस्ट में जोड़ें!'
                : 'Check out the near-matches below, missing only 1 or 2 items!'}
            </p>
          </div>
        )}
      </div>

      {/* Section 2: Near Matches (Missing 1-2 items) */}
      {nearMatches.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <h3 className="text-xl font-bold text-stone-900">
              {language === 'ur' 
                ? 'قریب قریب تیار (صرف 1-2 چیزیں درکار ہیں)' 
                : language === 'hi' 
                ? 'लगभग तैयार (केवल 1-2 वस्तुएं बाकी हैं)' 
                : 'Almost Ready (Missing 1-2 items)'}
            </h3>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
              {nearMatches.length}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearMatches.map(({ recipe, missing, matchPercentage }) => (
              <div 
                key={recipe.id}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-stone-100">
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.titleEn}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-white shadow-xs">
                        {matchPercentage}% Ready
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h4 className="font-extrabold text-base leading-tight">
                        {language === 'ur' ? recipe.titleUr : language === 'hi' ? recipe.titleHi : recipe.titleEn}
                      </h4>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    {/* Missing items alert */}
                    <div className="bg-rose-50/80 border border-rose-200/80 rounded-2xl p-3 text-xs">
                      <div className="flex items-center justify-between text-rose-800 font-bold mb-1.5">
                        <span className="flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                          <span>
                            {language === 'ur' ? 'درکار اشیاء:' : language === 'hi' ? 'बाकी सामग्री:' : 'Missing items:'}
                          </span>
                        </span>
                        <button
                          onClick={() => handleAddMissingToGrocery(missing)}
                          className="text-amber-800 font-bold hover:underline flex items-center gap-1"
                        >
                          <ShoppingCart className="w-3 h-3" />
                          <span>+ List</span>
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {missing.map(m => (
                          <span key={m.id} className="bg-white px-2 py-0.5 rounded-md border border-rose-200 text-rose-700 font-medium">
                            {language === 'ur' ? m.nameUr : language === 'hi' ? m.nameHi : m.nameEn}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    onClick={() => onSelectRecipe(recipe)}
                    className="w-full py-2 rounded-xl text-xs font-bold bg-stone-100 hover:bg-stone-200 text-stone-800 transition-all flex items-center justify-center gap-1"
                  >
                    <span>{language === 'ur' ? 'ریسیپی دیکھیں' : language === 'hi' ? 'पूरी रेसिपी देखें' : 'View Full Recipe'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
