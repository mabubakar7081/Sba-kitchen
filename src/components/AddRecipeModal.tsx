import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { useKitchen } from '../context/KitchenContext';
import { Recipe } from '../types';

interface AddRecipeModalProps {
  onClose: () => void;
}

export const AddRecipeModal: React.FC<AddRecipeModalProps> = ({ onClose }) => {
  const { language, addRecipe } = useKitchen();

  const [titleEn, setTitleEn] = useState('');
  const [titleUr, setTitleUr] = useState('');
  const [descriptionEn, setDescriptionEn] = useState('');
  const [prepTimeMinutes, setPrepTimeMinutes] = useState(15);
  const [cookTimeMinutes, setCookTimeMinutes] = useState(25);
  const [defaultServings, setDefaultServings] = useState(4);
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Easy');
  const [diet, setDiet] = useState<'Vegetarian' | 'Non-Veg' | 'Vegan'>('Vegetarian');
  const [cuisine, setCuisine] = useState('Pakistani / Indian');
  const [caloriesPerServing, setCaloriesPerServing] = useState(250);
  const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80');
  const [category, setCategory] = useState<'Curry' | 'Rice' | 'Breads' | 'Beverages' | 'Desserts' | 'Snacks' | 'Breakfast'>('Curry');

  // Ingredients builder
  const [ingredients, setIngredients] = useState<Array<{ nameEn: string; nameUr: string; amount: number; unit: string }>>([
    { nameEn: 'Potato', nameUr: 'آلو', amount: 2, unit: 'pcs' },
    { nameEn: 'Salt', nameUr: 'نمک', amount: 1, unit: 'tsp' },
  ]);

  // Steps builder
  const [steps, setSteps] = useState<Array<{ stepNumber: number; instructionEn: string; instructionUr: string; timerMinutes?: number }>>([
    { stepNumber: 1, instructionEn: 'Prep ingredients and heat oil in pan.', instructionUr: 'تمام اشیاء تیار کریں اور پین میں تیل گرم کریں۔', timerMinutes: 3 },
    { stepNumber: 2, instructionEn: 'Add ingredients, sauté well and cook on medium flame.', instructionUr: 'تمام مصالحے اور اشیاء ڈال کر درمیانی آنچ پر پکائیں۔', timerMinutes: 10 }
  ]);

  const addIngredientField = () => {
    setIngredients(prev => [...prev, { nameEn: '', nameUr: '', amount: 1, unit: 'tbsp' }]);
  };

  const removeIngredientField = (index: number) => {
    setIngredients(prev => prev.filter((_, i) => i !== index));
  };

  const addStepField = () => {
    setSteps(prev => [...prev, {
      stepNumber: prev.length + 1,
      instructionEn: '',
      instructionUr: '',
      timerMinutes: 5
    }]);
  };

  const removeStepField = (index: number) => {
    const updated = steps.filter((_, i) => i !== index).map((s, idx) => ({ ...s, stepNumber: idx + 1 }));
    setSteps(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleEn.trim()) return;

    const formattedIngredients = ingredients.map((ing, idx) => ({
      id: ing.nameEn.toLowerCase().replace(/[^a-z0-9]/g, '_') || `ing_${idx}`,
      nameEn: ing.nameEn,
      nameUr: ing.nameUr || ing.nameEn,
      nameHi: ing.nameUr || ing.nameEn,
      amount: ing.amount,
      unit: ing.unit,
    }));

    const formattedSteps = steps.map(s => ({
      stepNumber: s.stepNumber,
      instructionEn: s.instructionEn,
      instructionUr: s.instructionUr || s.instructionEn,
      instructionHi: s.instructionUr || s.instructionEn,
      timerMinutes: s.timerMinutes
    }));

    addRecipe({
      titleEn,
      titleUr: titleUr || titleEn,
      titleHi: titleUr || titleEn,
      descriptionEn,
      descriptionUr: descriptionEn,
      descriptionHi: descriptionEn,
      prepTimeMinutes,
      cookTimeMinutes,
      defaultServings,
      difficulty,
      diet,
      cuisine,
      caloriesPerServing,
      imageUrl,
      category,
      ingredients: formattedIngredients,
      steps: formattedSteps,
      favorite: true
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-stone-900">
              {language === 'ur' ? 'اپنی ریسیپی شامل کریں' : language === 'hi' ? 'नई रेसिपी जोड़ें' : 'Add Custom Recipe'}
            </h2>
            <p className="text-xs text-stone-500">
              {language === 'ur' ? 'گھریلو خاص پکوان کو ایپ میں محفوظ کریں' : language === 'hi' ? 'अपनी खास रेसिपी को सेव करें' : 'Save your family favorites with instructions and timers'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {/* Titles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-stone-700 mb-1">Recipe Title (English) *</label>
              <input
                type="text"
                required
                placeholder="e.g. Grandma's Secret Mutton Roast"
                value={titleEn}
                onChange={(e) => setTitleEn(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-amber-500/50"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">نام (اردو / हिन्दी)</label>
              <input
                type="text"
                placeholder="مثال: خاص دم پخت مٹن"
                value={titleUr}
                onChange={(e) => setTitleUr(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-amber-500/50"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">Description</label>
            <textarea
              rows={2}
              placeholder="Short description of the taste, aroma, and occasion..."
              value={descriptionEn}
              onChange={(e) => setDescriptionEn(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-amber-500/50"
            />
          </div>

          {/* Times and Meta */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="block font-bold text-stone-700 mb-1">Prep (mins)</label>
              <input
                type="number"
                value={prepTimeMinutes}
                onChange={(e) => setPrepTimeMinutes(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">Cook (mins)</label>
              <input
                type="number"
                value={cookTimeMinutes}
                onChange={(e) => setCookTimeMinutes(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">Servings</label>
              <input
                type="number"
                value={defaultServings}
                onChange={(e) => setDefaultServings(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">Diet</label>
              <select
                value={diet}
                onChange={(e) => setDiet(e.target.value as 'Vegetarian' | 'Non-Veg' | 'Vegan')}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm bg-white"
              >
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Veg">Non-Veg</option>
                <option value="Vegan">Vegan</option>
              </select>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="space-y-3 pt-2 border-t border-stone-200">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900">Ingredients (اجزاء)</span>
              <button
                type="button"
                onClick={addIngredientField}
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Item</span>
              </button>
            </div>

            <div className="space-y-2">
              {ingredients.map((ing, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Item (e.g. Onions)"
                    value={ing.nameEn}
                    onChange={(e) => {
                      const updated = [...ingredients];
                      updated[idx].nameEn = e.target.value;
                      setIngredients(updated);
                    }}
                    className="flex-1 px-3 py-1.5 rounded-xl border border-stone-300 text-xs"
                  />
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Qty"
                    value={ing.amount}
                    onChange={(e) => {
                      const updated = [...ingredients];
                      updated[idx].amount = Number(e.target.value);
                      setIngredients(updated);
                    }}
                    className="w-16 px-2 py-1.5 rounded-xl border border-stone-300 text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Unit"
                    value={ing.unit}
                    onChange={(e) => {
                      const updated = [...ingredients];
                      updated[idx].unit = e.target.value;
                      setIngredients(updated);
                    }}
                    className="w-16 px-2 py-1.5 rounded-xl border border-stone-300 text-xs"
                  />
                  {ingredients.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeIngredientField(idx)}
                      className="p-1.5 text-stone-400 hover:text-rose-600"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Steps Section */}
          <div className="space-y-3 pt-2 border-t border-stone-200">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900">Cooking Steps (پکانے کے مراحل)</span>
              <button
                type="button"
                onClick={addStepField}
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Step</span>
              </button>
            </div>

            <div className="space-y-3">
              {steps.map((st, idx) => (
                <div key={idx} className="bg-stone-50 p-3 rounded-2xl border border-stone-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-700">Step {st.stepNumber}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-stone-500">Timer (mins):</span>
                      <input
                        type="number"
                        min="0"
                        value={st.timerMinutes || 0}
                        onChange={(e) => {
                          const updated = [...steps];
                          updated[idx].timerMinutes = Number(e.target.value);
                          setSteps(updated);
                        }}
                        className="w-16 px-2 py-1 rounded-lg border border-stone-300 text-xs bg-white"
                      />
                      {steps.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeStepField(idx)}
                          className="text-stone-400 hover:text-rose-600"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Instructions for this step..."
                    value={st.instructionEn}
                    onChange={(e) => {
                      const updated = [...steps];
                      updated[idx].instructionEn = e.target.value;
                      setSteps(updated);
                    }}
                    className="w-full px-3 py-1.5 rounded-xl border border-stone-300 text-xs bg-white"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-stone-600 font-bold hover:bg-stone-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-md"
            >
              Save Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
