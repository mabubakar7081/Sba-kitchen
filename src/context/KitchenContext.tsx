import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { 
  Language, 
  PantryItem, 
  Recipe, 
  GroceryItem, 
  WeekPlan, 
  ActiveTimer 
} from '../types';
import { defaultPantryItems } from '../data/pantryDefaults';
import { initialRecipes } from '../data/recipes';
import { useAuth } from './AuthContext';
import { db } from '../lib/firebase';

interface KitchenContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  pantryItems: PantryItem[];
  addPantryItem: (item: Omit<PantryItem, 'id'>) => void;
  updatePantryItem: (id: string, updates: Partial<PantryItem>) => void;
  togglePantryItemStock: (id: string) => void;
  deletePantryItem: (id: string) => void;
  recipes: Recipe[];
  addRecipe: (recipe: Omit<Recipe, 'id'>) => void;
  toggleFavoriteRecipe: (id: string) => void;
  groceryItems: GroceryItem[];
  addGroceryItem: (item: Omit<GroceryItem, 'id'>) => void;
  addMultipleGroceryItems: (items: Omit<GroceryItem, 'id'>[]) => void;
  toggleGroceryItem: (id: string) => void;
  removeGroceryItem: (id: string) => void;
  clearCompletedGrocery: () => void;
  weekPlan: WeekPlan;
  setMealSlot: (day: keyof WeekPlan, meal: 'breakfast' | 'lunch' | 'dinner' | 'snack', recipeId?: string, note?: string) => void;
  activeTimers: ActiveTimer[];
  addTimer: (label: string, totalSeconds: number, recipeTitle?: string) => string;
  toggleTimer: (id: string) => void;
  resetTimer: (id: string) => void;
  removeTimer: (id: string) => void;
  activeCookingRecipe: Recipe | null;
  setActiveCookingRecipe: (recipe: Recipe | null) => void;
  playBeepSound: () => void;
  isCloudSyncing: boolean;
}

const KitchenContext = createContext<KitchenContextType | undefined>(undefined);

const initialWeekPlan: WeekPlan = {
  monday: { breakfast: { recipeId: 'kadak_chai' }, lunch: { recipeId: 'daal_tadka' }, dinner: { recipeId: 'chicken_karahi' }, snack: {} },
  tuesday: { breakfast: { recipeId: 'homestyle_egg_bhurji' }, lunch: { recipeId: 'vegetable_pulao' }, dinner: { recipeId: 'matar_paneer' }, snack: {} },
  wednesday: { breakfast: { recipeId: 'kadak_chai' }, lunch: { recipeId: 'aloo_jeera' }, dinner: { recipeId: 'daal_tadka' }, snack: {} },
  thursday: { breakfast: { recipeId: 'homestyle_egg_bhurji' }, lunch: { recipeId: 'matar_paneer' }, dinner: { recipeId: 'vegetable_pulao' }, snack: {} },
  friday: { breakfast: { recipeId: 'kadak_chai' }, lunch: { recipeId: 'chicken_karahi' }, dinner: { recipeId: 'daal_tadka' }, snack: {} },
  saturday: { breakfast: { recipeId: 'homestyle_egg_bhurji' }, lunch: { recipeId: 'vegetable_pulao' }, dinner: { recipeId: 'chicken_karahi' }, snack: {} },
  sunday: { breakfast: { recipeId: 'kadak_chai' }, lunch: { recipeId: 'matar_paneer' }, dinner: { recipeId: 'aloo_jeera' }, snack: {} }
};

export const KitchenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();

  // Load from LocalStorage if available
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('zaiqa_lang') as Language) || 'hi';
  });

  const [pantryItems, setPantryItems] = useState<PantryItem[]>(() => {
    const saved = localStorage.getItem('zaiqa_pantry');
    return saved ? JSON.parse(saved) : defaultPantryItems;
  });

  const [recipes, setRecipes] = useState<Recipe[]>(() => {
    const saved = localStorage.getItem('zaiqa_recipes');
    return saved ? JSON.parse(saved) : initialRecipes;
  });

  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>(() => {
    const saved = localStorage.getItem('zaiqa_grocery');
    if (saved) return JSON.parse(saved);
    return [
      { id: '1', name: 'Fresh Coriander (ہرا دھنیا)', amount: '2 bunches', category: 'vegetables', completed: false },
      { id: '2', name: 'Garam Masala Powder (گرم مصالحہ)', amount: '100g', category: 'spices', completed: false },
      { id: '3', name: 'Basmati Rice (باسمتی چاول)', amount: '2 kg', category: 'grains_pulses', completed: true },
    ];
  });

  const [weekPlan, setWeekPlan] = useState<WeekPlan>(() => {
    const saved = localStorage.getItem('zaiqa_plan');
    return saved ? JSON.parse(saved) : initialWeekPlan;
  });

  const [activeTimers, setActiveTimers] = useState<ActiveTimer[]>([]);
  const [activeCookingRecipe, setActiveCookingRecipe] = useState<Recipe | null>(null);
  const [isCloudSyncing, setIsCloudSyncing] = useState(false);

  const initialLoadDone = useRef(false);

  // Sync with Firestore when user logs in
  useEffect(() => {
    if (!user) {
      initialLoadDone.current = false;
      return;
    }

    const loadUserData = async () => {
      try {
        setIsCloudSyncing(true);
        const userDocRef = doc(db, 'users', user.uid);
        const snap = await getDoc(userDocRef);
        if (snap.exists()) {
          const data = snap.data();
          if (data.pantry) setPantryItems(data.pantry);
          if (data.recipes) setRecipes(data.recipes);
          if (data.groceries) setGroceryItems(data.groceries);
          if (data.weekPlan) setWeekPlan(data.weekPlan);
        } else {
          // Initialize user's cloud document with initial data
          await setDoc(userDocRef, {
            pantry: pantryItems,
            recipes: recipes,
            groceries: groceryItems,
            weekPlan: weekPlan,
          }, { merge: true });
        }
      } catch (err) {
        console.warn('Error loading user data from Firestore:', err);
      } finally {
        setIsCloudSyncing(false);
        initialLoadDone.current = true;
      }
    };

    loadUserData();
  }, [user]);

  // Sync to local storage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('zaiqa_lang', lang);
  };

  useEffect(() => {
    localStorage.setItem('zaiqa_pantry', JSON.stringify(pantryItems));
  }, [pantryItems]);

  useEffect(() => {
    localStorage.setItem('zaiqa_recipes', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem('zaiqa_grocery', JSON.stringify(groceryItems));
  }, [groceryItems]);

  useEffect(() => {
    localStorage.setItem('zaiqa_plan', JSON.stringify(weekPlan));
  }, [weekPlan]);

  // Sync state changes to Firestore if user is logged in
  useEffect(() => {
    if (!user || !initialLoadDone.current) return;

    const timer = setTimeout(async () => {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(userDocRef, {
          pantry: pantryItems,
          recipes: recipes,
          groceries: groceryItems,
          weekPlan: weekPlan,
        }, { merge: true });
      } catch (err) {
        console.warn('Firestore sync failed:', err);
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [user, pantryItems, recipes, groceryItems, weekPlan]);

  // Web Audio synthesizer for alert/timer bells
  const playBeepSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15); // A5
      osc.frequency.setValueAtTime(1174.66, ctx.currentTime + 0.3); // D6

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch {
      // AudioContext could be blocked by autoplay policies
    }
  };

  // Timer interval clock
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimers(prevTimers => {
        let hasFinished = false;
        const updated = prevTimers.map(timer => {
          if (timer.isRunning && timer.remainingSeconds > 0) {
            const nextSec = timer.remainingSeconds - 1;
            if (nextSec === 0) {
              hasFinished = true;
            }
            return { ...timer, remainingSeconds: nextSec, isRunning: nextSec > 0 };
          }
          return timer;
        });

        if (hasFinished) {
          playBeepSound();
        }

        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addPantryItem = (item: Omit<PantryItem, 'id'>) => {
    const newItem: PantryItem = {
      ...item,
      id: 'item_' + Date.now() + Math.random().toString(36).substring(2, 6)
    };
    setPantryItems(prev => [newItem, ...prev]);
  };

  const updatePantryItem = (id: string, updates: Partial<PantryItem>) => {
    setPantryItems(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const togglePantryItemStock = (id: string) => {
    setPantryItems(prev => prev.map(item => item.id === id ? { ...item, inStock: !item.inStock } : item));
  };

  const deletePantryItem = (id: string) => {
    setPantryItems(prev => prev.filter(item => item.id !== id));
  };

  const addRecipe = (recipe: Omit<Recipe, 'id'>) => {
    const newRecipe: Recipe = {
      ...recipe,
      id: 'recipe_' + Date.now()
    };
    setRecipes(prev => [newRecipe, ...prev]);
  };

  const toggleFavoriteRecipe = (id: string) => {
    setRecipes(prev => prev.map(r => r.id === id ? { ...r, favorite: !r.favorite } : r));
  };

  const addGroceryItem = (item: Omit<GroceryItem, 'id'>) => {
    const newItem: GroceryItem = {
      ...item,
      id: 'g_' + Date.now() + Math.random().toString(36).substring(2, 6)
    };
    setGroceryItems(prev => [newItem, ...prev]);
  };

  const addMultipleGroceryItems = (items: Omit<GroceryItem, 'id'>[]) => {
    const newItems: GroceryItem[] = items.map((item, idx) => ({
      ...item,
      id: 'g_' + Date.now() + '_' + idx
    }));
    setGroceryItems(prev => [...newItems, ...prev]);
  };

  const toggleGroceryItem = (id: string) => {
    setGroceryItems(prev => prev.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
  };

  const removeGroceryItem = (id: string) => {
    setGroceryItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCompletedGrocery = () => {
    setGroceryItems(prev => prev.filter(item => !item.completed));
  };

  const setMealSlot = (day: keyof WeekPlan, meal: 'breakfast' | 'lunch' | 'dinner' | 'snack', recipeId?: string, note?: string) => {
    setWeekPlan(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [meal]: { recipeId, customNote: note }
      }
    }));
  };

  const addTimer = (label: string, totalSeconds: number, recipeTitle?: string): string => {
    const id = 'timer_' + Date.now() + Math.random().toString(36).substring(2, 6);
    const newTimer: ActiveTimer = {
      id,
      label,
      totalSeconds,
      remainingSeconds: totalSeconds,
      isRunning: true,
      recipeTitle
    };
    setActiveTimers(prev => [...prev, newTimer]);
    playBeepSound();
    return id;
  };

  const toggleTimer = (id: string) => {
    setActiveTimers(prev => prev.map(t => {
      if (t.id === id) {
        if (t.remainingSeconds === 0) {
          return { ...t, remainingSeconds: t.totalSeconds, isRunning: true };
        }
        return { ...t, isRunning: !t.isRunning };
      }
      return t;
    }));
  };

  const resetTimer = (id: string) => {
    setActiveTimers(prev => prev.map(t => t.id === id ? { ...t, remainingSeconds: t.totalSeconds, isRunning: false } : t));
  };

  const removeTimer = (id: string) => {
    setActiveTimers(prev => prev.filter(t => t.id !== id));
  };

  return (
    <KitchenContext.Provider value={{
      language,
      setLanguage,
      pantryItems,
      addPantryItem,
      updatePantryItem,
      togglePantryItemStock,
      deletePantryItem,
      recipes,
      addRecipe,
      toggleFavoriteRecipe,
      groceryItems,
      addGroceryItem,
      addMultipleGroceryItems,
      toggleGroceryItem,
      removeGroceryItem,
      clearCompletedGrocery,
      weekPlan,
      setMealSlot,
      activeTimers,
      addTimer,
      toggleTimer,
      resetTimer,
      removeTimer,
      activeCookingRecipe,
      setActiveCookingRecipe,
      playBeepSound,
      isCloudSyncing
    }}>
      {children}
    </KitchenContext.Provider>
  );
};

export const useKitchen = () => {
  const context = useContext(KitchenContext);
  if (!context) {
    throw new Error('useKitchen must be used within a KitchenProvider');
  }
  return context;
};
