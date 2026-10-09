export type Language = 'en' | 'ur' | 'hi';

export type Category = 
  | 'vegetables'
  | 'dairy'
  | 'spices'
  | 'grains_pulses'
  | 'meat_poultry'
  | 'oils_condiments'
  | 'bakery_snacks';

export interface PantryItem {
  id: string;
  nameEn: string;
  nameUr: string;
  nameHi: string;
  category: Category;
  quantity: number;
  unit: string;
  inStock: boolean;
  minThreshold: number;
  expiryDate?: string; // YYYY-MM-DD
  storageLocation: 'fridge' | 'pantry' | 'freezer' | 'spice_rack';
}

export interface IngredientRequirement {
  id: string;
  nameEn: string;
  nameUr: string;
  nameHi: string;
  amount: number;
  unit: string;
  category?: Category;
  optional?: boolean;
}

export interface CookingStep {
  stepNumber: number;
  instructionEn: string;
  instructionUr: string;
  instructionHi: string;
  timerMinutes?: number;
  tip?: string;
}

export interface Recipe {
  id: string;
  titleEn: string;
  titleUr: string;
  titleHi: string;
  descriptionEn: string;
  descriptionUr: string;
  descriptionHi: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  defaultServings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  diet: 'Vegetarian' | 'Non-Veg' | 'Vegan';
  cuisine: string;
  caloriesPerServing: number;
  imageUrl: string;
  category: 'Curry' | 'Rice' | 'Breads' | 'Beverages' | 'Desserts' | 'Snacks' | 'Breakfast';
  ingredients: IngredientRequirement[];
  steps: CookingStep[];
  favorite?: boolean;
}

export interface GroceryItem {
  id: string;
  name: string;
  amount: string;
  category: Category | 'other';
  completed: boolean;
  notes?: string;
}

export interface MealSlot {
  recipeId?: string;
  customNote?: string;
}

export interface DayPlan {
  breakfast: MealSlot;
  lunch: MealSlot;
  dinner: MealSlot;
  snack: MealSlot;
}

export type WeekPlan = {
  [day in 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday']: DayPlan;
};

export interface ActiveTimer {
  id: string;
  label: string;
  totalSeconds: number;
  remainingSeconds: number;
  isRunning: boolean;
  recipeTitle?: string;
}
