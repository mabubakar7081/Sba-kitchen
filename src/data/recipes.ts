import { Recipe } from '../types';
import { curryRecipes } from './recipes/curries';
import { riceRecipes } from './recipes/rice';
import { bbqRecipes } from './recipes/bbq_kebabs';
import { vegetarianRecipes } from './recipes/dals_veggies';
import { breadRecipes } from './recipes/breads';
import { snackRecipes } from './recipes/snacks_chaat';
import { breakfastRecipes } from './recipes/breakfast_eggs';
import { dessertRecipes } from './recipes/desserts';
import { drinksAndQuickRecipes } from './recipes/drinks_quick';
import { generateFullCatalog } from './recipes/extendedCatalog';

// Combine all curated recipes into a 160-200 recipe library
const fullCatalog = generateFullCatalog();

// Deduplicate by ID
const recipeMap = new Map<string, Recipe>();

[
  ...curryRecipes,
  ...riceRecipes,
  ...bbqRecipes,
  ...vegetarianRecipes,
  ...breadRecipes,
  ...snackRecipes,
  ...breakfastRecipes,
  ...dessertRecipes,
  ...drinksAndQuickRecipes,
  ...fullCatalog
].forEach(recipe => {
  if (!recipeMap.has(recipe.id)) {
    recipeMap.set(recipe.id, recipe);
  }
});

export const initialRecipes: Recipe[] = Array.from(recipeMap.values());

// Total count log helper
console.log(`[SBA Kitchen] Loaded ${initialRecipes.length} recipes in total database.`);
