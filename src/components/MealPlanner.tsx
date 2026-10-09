import React, { useState } from 'react';
import { 
  Calendar, 
  ChefHat, 
  Plus, 
  Trash2, 
  Clock, 
  Sparkles, 
  ArrowRight,
  Utensils,
  Check
} from 'lucide-react';
import { useKitchen } from '../context/KitchenContext';
import { Recipe } from '../types';

interface MealPlannerProps {
  onSelectRecipe: (recipe: Recipe) => void;
  onStartCooking: (recipe: Recipe) => void;
}

export const MealPlanner: React.FC<MealPlannerProps> = ({ onSelectRecipe, onStartCooking }) => {
  const { 
    language, 
    weekPlan, 
    setMealSlot, 
    recipes 
  } = useKitchen();

  const [activePicker, setActivePicker] = useState<{
    day: keyof typeof weekPlan;
    meal: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  } | null>(null);

  const days: { key: keyof typeof weekPlan; labelEn: string; labelUr: string; labelHi: string }[] = [
    { key: 'monday', labelEn: 'Monday', labelUr: 'پیر (Monday)', labelHi: 'सोमवार (Monday)' },
    { key: 'tuesday', labelEn: 'Tuesday', labelUr: 'منگل (Tuesday)', labelHi: 'मंगलवार (Tuesday)' },
    { key: 'wednesday', labelEn: 'Wednesday', labelUr: 'بدھ (Wednesday)', labelHi: 'बुधवार (Wednesday)' },
    { key: 'thursday', labelEn: 'Thursday', labelUr: 'جمعرات (Thursday)', labelHi: 'गुरुवार (Thursday)' },
    { key: 'friday', labelEn: 'Friday', labelUr: 'جمعہ (Friday)', labelHi: 'शुक्रवार (Friday)' },
    { key: 'saturday', labelEn: 'Saturday', labelUr: 'ہفتہ (Saturday)', labelHi: 'शनिवार (Saturday)' },
    { key: 'sunday', labelEn: 'Sunday', labelUr: 'اتوار (Sunday)', labelHi: 'रविवार (Sunday)' },
  ];

  const mealTypes = [
    { key: 'breakfast' as const, labelEn: 'Breakfast', labelUr: 'ناشتہ', labelHi: 'नाश्ता', icon: '☀️' },
    { key: 'lunch' as const, labelEn: 'Lunch', labelUr: 'دوپہر کا کھانا', labelHi: 'दोपहर का भोजन', icon: '🍲' },
    { key: 'dinner' as const, labelEn: 'Dinner', labelUr: 'رات کا کھانا', labelHi: 'रात का भोजन', icon: '🌙' },
  ];

  const getRecipe = (id?: string) => {
    if (!id) return null;
    return recipes.find(r => r.id === id);
  };

  return (
    <div className="space-y-6">
      {/* Planner Banner */}
      <div className="bg-linear-to-r from-amber-700 via-orange-600 to-amber-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>
              {language === 'ur' ? 'ہفتہ وار مینیو شیڈول' : language === 'hi' ? 'साप्ताहिक भोजन योजना' : 'Weekly Meal Planner'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {language === 'ur' ? 'پورے ہفتے کا کھانا پہلے سے طے کریں' : language === 'hi' ? 'पूरे हफ्ते के भोजन की पूर्व योजना' : 'Plan Your Week with Ease'}
          </h2>
          <p className="text-amber-100 text-sm leading-relaxed">
            {language === 'ur'
              ? 'ہر روز یہ سوچنے کی پریشانی ختم کہ "آج کیا پکائیں؟"۔ ناشتہ، دوپہر اور رات کا کھانا آسانی سے ترتیب دیں۔'
              : language === 'hi'
              ? 'रोज की यह उलझन खत्म करें कि "आज क्या बनाएं?"। नाश्ता, लंच और डिनर आसानी से तय करें।'
              : 'Organize your family menu for all 7 days and jump straight into live cook mode when dinner time arrives.'}
          </p>
        </div>
      </div>

      {/* Week Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {days.map((day) => {
          const dayData = weekPlan[day.key];
          const dayLabel = language === 'ur' ? day.labelUr : language === 'hi' ? day.labelHi : day.labelEn;

          return (
            <div
              key={day.key}
              className="bg-white rounded-3xl border border-stone-200/90 p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-amber-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <h3 className="font-extrabold text-stone-900 text-base">
                    {dayLabel}
                  </h3>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/50">
                    Day Plan
                  </span>
                </div>

                {/* Slots */}
                <div className="space-y-2.5">
                  {mealTypes.map((slot) => {
                    const slotData = dayData[slot.key];
                    const recipe = getRecipe(slotData?.recipeId);
                    const slotTitle = language === 'ur' ? slot.labelUr : language === 'hi' ? slot.labelHi : slot.labelEn;

                    return (
                      <div
                        key={slot.key}
                        className={`p-3 rounded-2xl border transition-all text-xs ${
                          recipe
                            ? 'bg-amber-50/50 border-amber-200/80'
                            : 'bg-stone-50/70 border-dashed border-stone-200 hover:bg-stone-100/70'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-stone-500 flex items-center gap-1.5">
                            <span>{slot.icon}</span>
                            <span>{slotTitle}</span>
                          </span>

                          {recipe && (
                            <button
                              onClick={() => setMealSlot(day.key, slot.key, undefined)}
                              className="text-stone-400 hover:text-rose-600 p-0.5"
                              title="Remove"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        {recipe ? (
                          <div className="space-y-2 mt-1">
                            <div className="flex items-center gap-2">
                              <img
                                src={recipe.imageUrl}
                                alt={recipe.titleEn}
                                className="w-8 h-8 rounded-lg object-cover shrink-0"
                              />
                              <div className="overflow-hidden">
                                <h4 className="font-extrabold text-stone-900 truncate">
                                  {language === 'ur' ? recipe.titleUr : language === 'hi' ? recipe.titleHi : recipe.titleEn}
                                </h4>
                                <span className="text-[10px] text-stone-500 font-medium">
                                  {recipe.prepTimeMinutes + recipe.cookTimeMinutes}m • {recipe.caloriesPerServing} kcal
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5 pt-1">
                              <button
                                onClick={() => onSelectRecipe(recipe)}
                                className="px-2 py-1 rounded-md bg-white border border-stone-200 text-stone-700 font-bold hover:bg-stone-50"
                              >
                                View
                              </button>
                              <button
                                onClick={() => onStartCooking(recipe)}
                                className="px-2 py-1 rounded-md bg-amber-600 text-white font-bold hover:bg-amber-700"
                              >
                                Cook Now
                              </button>
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => setActivePicker({ day: day.key, meal: slot.key })}
                            className="w-full py-1.5 mt-0.5 flex items-center justify-center gap-1 text-amber-700 font-bold hover:underline"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>
                              {language === 'ur' ? 'ڈش منتخب کریں' : language === 'hi' ? 'डिश चुनें' : 'Choose Dish'}
                            </span>
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recipe Picker Modal */}
      {activePicker && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[80vh] flex flex-col p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="font-extrabold text-stone-900 text-lg">
                Select Recipe for {activePicker.day} ({activePicker.meal})
              </h3>
              <button
                onClick={() => setActivePicker(null)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto space-y-2 flex-1">
              {recipes.map((r) => (
                <button
                  key={r.id}
                  onClick={() => {
                    setMealSlot(activePicker.day, activePicker.meal, r.id);
                    setActivePicker(null);
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-2xl border border-stone-200 hover:border-amber-400 hover:bg-amber-50/50 transition-all text-left group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={r.imageUrl}
                      alt={r.titleEn}
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm group-hover:text-amber-900">
                        {language === 'ur' ? r.titleUr : language === 'hi' ? r.titleHi : r.titleEn}
                      </h4>
                      <p className="text-xs text-stone-500 font-medium">
                        {r.cuisine} • {r.prepTimeMinutes + r.cookTimeMinutes} mins
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-amber-700 bg-amber-100/60 px-3 py-1.5 rounded-xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    Select
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
