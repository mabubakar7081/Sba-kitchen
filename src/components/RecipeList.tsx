import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Heart, 
  Clock, 
  Flame, 
  ChefHat, 
  BookOpen, 
  UtensilsCrossed, 
  Sparkles 
} from 'lucide-react';
import { useKitchen } from '../context/KitchenContext';
import { Recipe } from '../types';

interface RecipeListProps {
  onSelectRecipe: (recipe: Recipe) => void;
  onStartCooking: (recipe: Recipe) => void;
  onOpenAddModal: () => void;
}

export const RecipeList: React.FC<RecipeListProps> = ({ 
  onSelectRecipe, 
  onStartCooking, 
  onOpenAddModal 
}) => {
  const { language, recipes, toggleFavoriteRecipe } = useKitchen();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  const categories = ['All', 'Curry', 'Rice', 'Breakfast', 'Beverages'];

  const filteredRecipes = recipes.filter(r => {
    const matchesSearch = 
      r.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.titleUr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.titleHi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    const matchesFav = !onlyFavorites || r.favorite;

    return matchesSearch && matchesCategory && matchesFav;
  });

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-linear-to-r from-amber-700 via-orange-600 to-rose-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>
              {language === 'ur' ? 'باورچی خانہ کی شاہکار ترکیبیں' : language === 'hi' ? 'रसोई की खास रेसिपीज' : 'Curated Recipe Collection'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {language === 'ur' ? 'ریسیپی کک بک' : language === 'hi' ? 'रेसिपी कुकबुक' : 'Kitchen Recipe Book'}
          </h2>
          <p className="text-amber-100 text-sm leading-relaxed">
            {language === 'ur' 
              ? 'مستند اور لذیذ کھانوں کی آسان تراکیب جن میں وقت، کیلوریز اور تفصیلی مراحل شامل ہیں۔' 
              : language === 'hi'
              ? 'स्वादिष्ट और प्रामाणिक व्यंजनों की सरल विधियाँ, समय और कैलोरी की पूरी जानकारी के साथ।'
              : 'Authentic tested recipes with scaled servings, step timers, and tips.'}
          </p>
        </div>

        <button
          onClick={onOpenAddModal}
          className="flex items-center justify-center gap-2 bg-white text-stone-900 hover:bg-amber-50 px-5 py-3 rounded-2xl text-sm font-bold shadow-lg transition-all shrink-0 active:scale-95"
        >
          <Plus className="w-4 h-4 text-amber-600" />
          <span>
            {language === 'ur' ? 'اپنی ریسیپی شامل کریں' : language === 'hi' ? 'अपनी रेसिपी जोड़ें' : 'Add Custom Recipe'}
          </span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder={
                language === 'ur'
                  ? 'کڑاہی، پلاؤ، دال، چائے یا کوئی بھی ڈش تلاش کریں...'
                  : language === 'hi'
                  ? 'कड़ाही, पुलाव, दाल, चाय या कोई भी डिश खोजें...'
                  : 'Search by dish name, style, or ingredient...'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 hover:bg-stone-100/70 focus:bg-white rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 transition-all"
            />
          </div>

          <button
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold border transition-all ${
              onlyFavorites
                ? 'bg-rose-50 border-rose-200 text-rose-700'
                : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>
              {language === 'ur' ? 'پسندیدہ' : language === 'hi' ? 'पसंदीदा' : 'Favorites'}
            </span>
          </button>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            {/* Image Preview */}
            <div className="relative h-48 overflow-hidden bg-stone-100">
              <img
                src={recipe.imageUrl}
                alt={recipe.titleEn}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 text-stone-900 backdrop-blur-xs">
                  {recipe.diet}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-black/40 text-white backdrop-blur-xs">
                  {recipe.category}
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavoriteRecipe(recipe.id);
                }}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-stone-700 hover:text-rose-600 transition-colors shadow-xs"
              >
                <Heart className={`w-4 h-4 ${recipe.favorite ? 'fill-rose-500 text-rose-500' : ''}`} />
              </button>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-extrabold text-lg leading-tight line-clamp-1">
                  {language === 'ur' ? recipe.titleUr : language === 'hi' ? recipe.titleHi : recipe.titleEn}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-1">
                  {recipe.titleEn}
                </p>
              </div>
            </div>

            {/* Recipe Content */}
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

              {/* Action Buttons */}
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
                  <span>{language === 'ur' ? 'کک موڈ' : language === 'hi' ? 'कुक मोड' : 'Cook Mode'}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-stone-300 p-8">
          <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <p className="text-stone-700 font-semibold text-lg">No recipes found</p>
          <p className="text-xs text-stone-500 mt-1">Try clearing your filters or adding a new recipe.</p>
        </div>
      )}
    </div>
  );
};
