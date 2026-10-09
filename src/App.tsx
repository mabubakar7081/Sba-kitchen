import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { KitchenProvider, useKitchen } from './context/KitchenContext';
import { TopAuthBanner } from './components/TopAuthBanner';
import { Header } from './components/Header';
import { AIChefAssistant } from './components/AIChefAssistant';
import { RecipeFinder } from './components/RecipeFinder';
import { PantryView } from './components/PantryView';
import { RecipeList } from './components/RecipeList';
import { MealPlanner } from './components/MealPlanner';
import { GroceryList } from './components/GroceryList';
import { KitchenUtilities } from './components/KitchenUtilities';
import { TimerHub } from './components/TimerHub';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { CookingModeModal } from './components/CookingModeModal';
import { AddRecipeModal } from './components/AddRecipeModal';
import { AuthModal } from './components/AuthModal';
import { InstallGuideModal } from './components/InstallGuideModal';
import { InstallNotificationBanner } from './components/InstallNotificationBanner';
import { BottomLanguageBar } from './components/BottomLanguageBar';
import { Recipe } from './types';
import { 
  Timer, 
  ChefHat, 
  Sparkles, 
  Cloud
} from 'lucide-react';
import { useAuth } from './context/AuthContext';

function KitchenApp() {
  const { 
    language, 
    activeTimers, 
    activeCookingRecipe, 
    setActiveCookingRecipe,
    isCloudSyncing
  } = useKitchen();
  
  const { user } = useAuth();

  const [currentTab, setCurrentTab] = useState<string>('ai_chef');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showAddRecipeModal, setShowAddRecipeModal] = useState(false);
  const [authModalState, setAuthModalState] = useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'login'
  });
  const [showInstallGuideModal, setShowInstallGuideModal] = useState(false);

  const runningTimers = activeTimers.filter(t => t.isRunning);

  return (
    <div className="min-h-screen bg-amber-50/30 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* 1. TOP AUTH BAR: Prominently on the front at the very top */}
      <TopAuthBanner onOpenAuth={(mode) => setAuthModalState({ isOpen: true, mode })} />

      {/* 2. Global Navigation Header (SBA Kitchen branding) */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        openTimersModal={() => setCurrentTab('timers')}
        openAuthModal={(mode) => setAuthModalState({ isOpen: true, mode })}
        openInstallModal={() => setShowInstallGuideModal(true)}
      />

      {/* Cloud Sync Status Indicator Bar */}
      {user && (
        <div className="bg-amber-100/70 border-b border-amber-200/50 py-1.5 px-4 text-center text-xs font-semibold text-amber-900 flex items-center justify-center gap-2">
          <Cloud className={`w-3.5 h-3.5 text-amber-600 ${isCloudSyncing ? 'animate-pulse' : ''}`} />
          <span>
            {isCloudSyncing 
              ? (language === 'ur' ? 'کلاؤڈ کے ساتھ سنک ہو رہا ہے...' : language === 'hi' ? 'क्लाउड सिंक हो रहा है...' : 'Syncing with cloud...')
              : (language === 'ur' ? `خوش آمدید ${user.displayName || user.email}! آپ کا ایس بی اے کچن ڈیٹا کلاؤڈ میں محفوظ ہے۔` : language === 'hi' ? `स्वागत है ${user.displayName || user.email}! आपका डेटा सुरक्षित है।` : `Logged in as ${user.displayName || user.email}. SBA Kitchen data synced.`)}
          </span>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* SBA AI Voice Chef Tab */}
        {currentTab === 'ai_chef' && (
          <AIChefAssistant
            onOpenRecipe={(recipe) => setSelectedRecipe(recipe)}
            onStartCooking={(recipe) => setActiveCookingRecipe(recipe)}
          />
        )}

        {currentTab === 'what_to_cook' && (
          <RecipeFinder
            onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
            onStartCooking={(recipe) => setActiveCookingRecipe(recipe)}
          />
        )}

        {currentTab === 'pantry' && (
          <PantryView />
        )}

        {currentTab === 'recipes' && (
          <RecipeList
            onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
            onStartCooking={(recipe) => setActiveCookingRecipe(recipe)}
            onOpenAddModal={() => setShowAddRecipeModal(true)}
          />
        )}

        {currentTab === 'planner' && (
          <MealPlanner
            onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
            onStartCooking={(recipe) => setActiveCookingRecipe(recipe)}
          />
        )}

        {currentTab === 'grocery' && (
          <GroceryList />
        )}

        {currentTab === 'utilities' && (
          <KitchenUtilities />
        )}

        {currentTab === 'timers' && (
          <TimerHub />
        )}
      </main>

      {/* Floating Active Timer Pill */}
      {runningTimers.length > 0 && currentTab !== 'timers' && (
        <div className="fixed bottom-20 right-5 z-40 animate-bounce">
          <button
            onClick={() => setCurrentTab('timers')}
            className="flex items-center gap-2.5 bg-linear-to-r from-amber-600 to-orange-600 text-white px-4 py-2.5 rounded-2xl shadow-xl border border-amber-400/50 hover:from-amber-700 hover:to-orange-700 transition-all font-bold text-xs"
          >
            <Timer className="w-4 h-4 animate-spin" />
            <span>
              {runningTimers.length} {language === 'ur' ? 'ٹائمر جاری ہے' : language === 'hi' ? 'टाइमर चल रहा है' : 'Timer Running'}
            </span>
          </button>
        </div>
      )}

      {/* 3. APP INSTALL NOTIFICATION BANNER (Displays like a notification alert) */}
      <InstallNotificationBanner onOpenGuide={() => setShowInstallGuideModal(true)} />

      {/* 4. LANGUAGE SELECTOR: Placed prominently at the very bottom */}
      <BottomLanguageBar onOpenInstallGuide={() => setShowInstallGuideModal(true)} />

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <RecipeDetailModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          onStartCooking={(recipe) => {
            setSelectedRecipe(null);
            setActiveCookingRecipe(recipe);
          }}
        />
      )}

      {/* Interactive Cooking Mode Modal */}
      {activeCookingRecipe && (
        <CookingModeModal
          recipe={activeCookingRecipe}
          onClose={() => setActiveCookingRecipe(null)}
        />
      )}

      {/* Add Custom Recipe Modal */}
      {showAddRecipeModal && (
        <AddRecipeModal
          onClose={() => setShowAddRecipeModal(false)}
        />
      )}

      {/* Auth Modal (Sign Up & Login) */}
      <AuthModal
        isOpen={authModalState.isOpen}
        initialMode={authModalState.mode}
        onClose={() => setAuthModalState({ isOpen: false, mode: 'login' })}
      />

      {/* Install App Guide Modal */}
      <InstallGuideModal
        isOpen={showInstallGuideModal}
        onClose={() => setShowInstallGuideModal(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <KitchenProvider>
        <KitchenApp />
      </KitchenProvider>
    </AuthProvider>
  );
}
