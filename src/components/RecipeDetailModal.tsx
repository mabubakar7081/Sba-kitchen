import React, { useState, useEffect } from 'react';
import { 
  X, 
  Clock, 
  Users, 
  Flame, 
  Check, 
  Plus, 
  UtensilsCrossed, 
  ShoppingCart, 
  Calendar, 
  Heart,
  ChevronRight,
  Volume2,
  VolumeX
} from 'lucide-react';
import { useKitchen } from '../context/KitchenContext';
import { Recipe } from '../types';
import { voiceNarrator } from '../utils/speech';

interface RecipeDetailModalProps {
  recipe: Recipe;
  onClose: () => void;
  onStartCooking: (recipe: Recipe) => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({ 
  recipe, 
  onClose, 
  onStartCooking 
}) => {
  const { 
    language, 
    pantryItems, 
    toggleFavoriteRecipe, 
    addGroceryItem, 
    setMealSlot 
  } = useKitchen();

  const [servings, setServings] = useState<number>(recipe.defaultServings);
  const [showPlanMenu, setShowPlanMenu] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const unsub = voiceNarrator.subscribe((speaking) => setIsSpeaking(speaking));
    return () => {
      unsub();
      voiceNarrator.stop();
    };
  }, []);

  const handleToggleSpeakRecipe = () => {
    if (isSpeaking) {
      voiceNarrator.stop();
    } else {
      const title = language === 'ur' ? recipe.titleUr : language === 'hi' ? recipe.titleHi : recipe.titleEn;
      const desc = language === 'ur' ? recipe.descriptionUr : language === 'hi' ? recipe.descriptionHi : recipe.descriptionEn;
      const ingredientsText = recipe.ingredients.map(i => `${language === 'ur' ? i.nameUr : language === 'hi' ? i.nameHi : i.nameEn} ${Math.round(i.amount * scaleFactor * 10) / 10} ${i.unit}`).join(', ');
      const stepsText = recipe.steps.map(s => `قدم نمبر ${s.stepNumber}: ${language === 'ur' ? s.instructionUr : language === 'hi' ? s.instructionHi : s.instructionEn}`).join('۔ ');
      
      const fullSpeech = `${title}۔ ${desc}۔ تیاری کا وقت ${recipe.prepTimeMinutes + recipe.cookTimeMinutes} منٹ۔ اجزاء: ${ingredientsText}۔ پکانے کا طریقہ: ${stepsText}۔`;
      voiceNarrator.speak(fullSpeech, language);
    }
  };

  const scaleFactor = servings / recipe.defaultServings;
  const inStockIds = new Set(pantryItems.filter(i => i.inStock).map(i => i.id));

  const days = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' },
  ] as const;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header Image & Overlays */}
        <div className="relative h-60 sm:h-72 shrink-0 bg-stone-900">
          <img
            src={recipe.imageUrl}
            alt={recipe.titleEn}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/20" />

          {/* Close & Action buttons */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-stone-900 backdrop-blur-xs">
              {recipe.cuisine} • {recipe.diet}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleFavoriteRecipe(recipe.id)}
                className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-stone-700 hover:text-rose-600 transition-colors"
              >
                <Heart className={`w-5 h-5 ${recipe.favorite ? 'fill-rose-500 text-rose-500' : ''}`} />
              </button>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-xs flex items-center justify-center text-white font-bold transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Recipe Title & Basic Meta */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              {language === 'ur' ? recipe.titleUr : language === 'hi' ? recipe.titleHi : recipe.titleEn}
            </h2>
            <p className="text-xs sm:text-sm text-stone-200 mt-1 font-medium">
              {recipe.titleEn}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-4 gap-2 py-3 px-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl text-center text-xs">
            <div>
              <span className="text-stone-400 block font-medium">Prep</span>
              <span className="font-extrabold text-stone-800 text-sm">{recipe.prepTimeMinutes}m</span>
            </div>
            <div>
              <span className="text-stone-400 block font-medium">Cook</span>
              <span className="font-extrabold text-stone-800 text-sm">{recipe.cookTimeMinutes}m</span>
            </div>
            <div>
              <span className="text-stone-400 block font-medium">Energy</span>
              <span className="font-extrabold text-stone-800 text-sm">{Math.round(recipe.caloriesPerServing * scaleFactor)} kcal</span>
            </div>
            <div>
              <span className="text-stone-400 block font-medium">Difficulty</span>
              <span className="font-extrabold text-stone-800 text-sm">{recipe.difficulty}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-stone-600 leading-relaxed">
            {language === 'ur' ? recipe.descriptionUr : language === 'hi' ? recipe.descriptionHi : recipe.descriptionEn}
          </p>

          {/* Ingredients Section with Servings Scaler */}
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-stone-100">
              <h3 className="font-extrabold text-stone-900 text-lg flex items-center gap-2">
                <span>
                  {language === 'ur' ? 'ضروری اجزاء' : language === 'hi' ? 'सामग्री' : 'Ingredients'}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                  {recipe.ingredients.length} items
                </span>
              </h3>

              {/* Dynamic Servings Scaler */}
              <div className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200">
                <Users className="w-3.5 h-3.5 text-stone-500" />
                <span className="text-xs font-bold text-stone-700">
                  {language === 'ur' ? 'افراد:' : language === 'hi' ? 'लोग:' : 'Servings:'}
                </span>
                <button
                  onClick={() => setServings(Math.max(1, servings - 1))}
                  className="w-6 h-6 rounded-lg bg-white font-bold text-stone-800 hover:bg-stone-200 flex items-center justify-center text-xs shadow-2xs"
                >
                  -
                </button>
                <span className="text-xs font-extrabold text-stone-900 w-4 text-center">
                  {servings}
                </span>
                <button
                  onClick={() => setServings(servings + 1)}
                  className="w-6 h-6 rounded-lg bg-white font-bold text-stone-800 hover:bg-stone-200 flex items-center justify-center text-xs shadow-2xs"
                >
                  +
                </button>
              </div>
            </div>

            {/* Ingredients List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {recipe.ingredients.map((ing) => {
                const hasItem = inStockIds.has(ing.id);
                const scaledAmount = Math.round((ing.amount * scaleFactor) * 10) / 10;

                return (
                  <div
                    key={ing.id}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs ${
                      hasItem
                        ? 'bg-emerald-50/50 border-emerald-200/80 text-stone-800'
                        : 'bg-rose-50/60 border-rose-200/80 text-stone-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                        hasItem ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                      }`}>
                        {hasItem ? <Check className="w-3 h-3 stroke-[3]" /> : '✕'}
                      </div>
                      <span className="font-semibold">
                        {language === 'ur' ? ing.nameUr : language === 'hi' ? ing.nameHi : ing.nameEn}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-bold text-stone-900 bg-white/80 px-2 py-0.5 rounded-md border border-stone-200/70">
                        {scaledAmount} {ing.unit}
                      </span>

                      {!hasItem && (
                        <button
                          onClick={() => {
                            addGroceryItem({
                              name: `${ing.nameEn} (${ing.nameUr})`,
                              amount: `${scaledAmount} ${ing.unit}`,
                              category: 'vegetables',
                              completed: false,
                              notes: `For ${recipe.titleEn}`
                            });
                            alert(`Added ${ing.nameEn} to Grocery List!`);
                          }}
                          className="p-1 rounded-md text-rose-700 hover:bg-rose-100"
                          title="Add to Grocery List"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Steps Preview */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-stone-900 text-lg">
              {language === 'ur' ? 'پکانے کے مراحل' : language === 'hi' ? 'बनाने की विधि' : 'Preparation Steps'}
            </h3>

            <div className="space-y-3">
              {recipe.steps.map((step) => (
                <div key={step.stepNumber} className="flex gap-3 bg-stone-50 p-3.5 rounded-2xl border border-stone-200/80">
                  <div className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {step.stepNumber}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                      {language === 'ur' ? step.instructionUr : language === 'hi' ? step.instructionHi : step.instructionEn}
                    </p>
                    {step.tip && (
                      <p className="text-[11px] text-amber-700 bg-amber-100/60 px-2 py-1 rounded-lg inline-block">
                        💡 Tip: {step.tip}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          {/* Add to meal planner popover */}
          <div className="relative">
            <button
              onClick={() => setShowPlanMenu(!showPlanMenu)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border border-stone-300 bg-white hover:bg-stone-100 text-stone-700 transition-all"
            >
              <Calendar className="w-4 h-4 text-amber-600" />
              <span>
                {language === 'ur' ? 'کھانا پلان میں شامل کریں' : language === 'hi' ? 'मील प्लानर में जोड़ें' : 'Add to Meal Plan'}
              </span>
            </button>

            {showPlanMenu && (
              <div className="absolute bottom-full left-0 mb-2 w-48 bg-white rounded-2xl shadow-xl border border-stone-200 p-2 z-20 space-y-1">
                <span className="text-[10px] font-bold text-stone-400 px-2 uppercase tracking-wider block">
                  Select Day
                </span>
                {days.map((d) => (
                  <button
                    key={d.key}
                    onClick={() => {
                      setMealSlot(d.key, 'dinner', recipe.id);
                      setShowPlanMenu(false);
                      alert(`Added ${recipe.titleEn} to ${d.label} Dinner!`);
                    }}
                    className="w-full text-left px-2.5 py-1.5 text-xs font-semibold text-stone-700 hover:bg-amber-50 hover:text-amber-800 rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span>{d.label}</span>
                    <ChevronRight className="w-3 h-3 text-stone-400" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Listen Aloud Button for Accessibility */}
            <button
              onClick={handleToggleSpeakRecipe}
              className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                isSpeaking
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300'
              }`}
              title="Listen to recipe instructions read aloud"
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span>{language === 'ur' ? 'آواز بند کریں' : 'Stop Audio'}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-amber-700" />
                  <span>{language === 'ur' ? '🔊 ریسیپی سنیں' : language === 'hi' ? '🔊 रेसिपी सुनें' : '🔊 Listen Aloud'}</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-200 transition-all"
            >
              {language === 'ur' ? 'بند کریں' : language === 'hi' ? 'बंद करें' : 'Close'}
            </button>
            <button
              onClick={() => {
                onClose();
                onStartCooking(recipe);
              }}
              className="flex items-center gap-2 bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>
                {language === 'ur' ? 'لائیو کوک موڈ شروع کریں' : language === 'hi' ? 'लाइव कुकिंग शुरू करें' : 'Start Live Cook Mode'}
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
