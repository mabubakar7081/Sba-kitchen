import React, { useState } from 'react';
import { 
  ChefHat, 
  Timer, 
  Sparkles, 
  User as UserIcon, 
  LogOut, 
  LogIn, 
  UserPlus, 
  ShieldCheck,
  ChevronDown,
  Download,
  Mic
} from 'lucide-react';
import { useKitchen } from '../context/KitchenContext';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  openTimersModal: () => void;
  openAuthModal: (mode: 'login' | 'signup') => void;
  openInstallModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentTab, 
  setCurrentTab, 
  openTimersModal,
  openAuthModal,
  openInstallModal
}) => {
  const { language, activeTimers } = useKitchen();
  const { user, logout } = useAuth();

  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const runningTimersCount = activeTimers.filter(t => t.isRunning).length;

  const navItems = [
    { id: 'ai_chef', labelEn: 'SBA AI Chef & Voice', labelUr: 'اے آئی شیف 🎙️', labelHi: 'एआई शेफ 🎙️', icon: '🤖' },
    { id: 'what_to_cook', labelEn: 'What to Cook?', labelUr: 'آج کیا پکائیں؟', labelHi: 'आज क्या बनाएं?', icon: '✨' },
    { id: 'recipes', labelEn: '170+ Recipes', labelUr: 'ریسیپیز (170+)', labelHi: 'रेसिपीज (170+)', icon: '📖' },
    { id: 'pantry', labelEn: 'Pantry & Fridge', labelUr: 'پینٹری و فریج', labelHi: 'पैंट्री व फ्रिज', icon: '🥫' },
    { id: 'planner', labelEn: 'Meal Planner', labelUr: 'میل پلانر', labelHi: 'मील प्लानर', icon: '📅' },
    { id: 'grocery', labelEn: 'Grocery List', labelUr: 'سودا سلف', labelHi: 'किराना लिस्ट', icon: '🛒' },
    { id: 'utilities', labelEn: 'Tools & Substitutes', labelUr: 'کچن گائیڈ و ٹوٹکے', labelHi: 'टूल्स व नुस्खे', icon: '⚖️' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/70 shadow-xs">
      {/* Top Banner / Brand */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo & Identity: SBA Kitchen */}
        <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => setCurrentTab('ai_chef')}>
          <div className="w-11 h-11 rounded-2xl bg-linear-to-tr from-amber-600 via-orange-500 to-rose-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
            <ChefHat className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black tracking-tight text-stone-900 font-sans">
                {language === 'ur' ? 'ایس بی اے کچن' : language === 'hi' ? 'एसबीए किचन' : 'SBA Kitchen'}
              </h1>
              <span className="text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300/60 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                AI Smart
              </span>
            </div>
            <p className="text-xs text-stone-500 hidden sm:block">
              {language === 'ur' 
                ? 'ایس بی اے کچن: 170+ ریسیپیز، وائس اے آئی اور سمارٹ پینٹری' 
                : language === 'hi' 
                ? 'एसबीए किचन: 170+ रेसिपीज, वॉयस एआई और स्मार्ट पैंट्री' 
                : 'SBA Kitchen: 170+ Recipes, Voice AI & Smart Pantry'}
            </p>
          </div>
        </div>

        {/* Right action group: AI Quick, Timers, Install button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Voice Chef Button */}
          <button
            onClick={() => setCurrentTab('ai_chef')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all shadow-xs ${
              currentTab === 'ai_chef'
                ? 'bg-linear-to-r from-amber-500 to-orange-500 text-stone-950 shadow-md ring-2 ring-amber-300'
                : 'bg-amber-100/80 hover:bg-amber-200 text-amber-950 border border-amber-300/80'
            }`}
          >
            <Mic className="w-4 h-4 text-orange-600 animate-pulse" />
            <span className="hidden sm:inline">
              {language === 'ur' ? 'بول کر پوچھیں' : language === 'hi' ? 'बोलकर पूछें' : 'Voice Chef'}
            </span>
          </button>

          {/* Active Timers Badge Button */}
          <button
            onClick={openTimersModal}
            className={`relative flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm font-medium transition-all ${
              runningTimersCount > 0
                ? 'bg-amber-500 text-white border-amber-600 shadow-md shadow-amber-500/30 animate-pulse'
                : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border-stone-200'
            }`}
            title="Kitchen Timers"
          >
            <Timer className={`w-4 h-4 ${runningTimersCount > 0 ? 'animate-spin' : ''}`} />
            <span className="font-bold text-xs sm:text-sm hidden md:inline">
              {runningTimersCount > 0 ? `${runningTimersCount} Active` : (language === 'ur' ? 'ٹائمرز' : language === 'hi' ? 'टाइमर' : 'Timers')}
            </span>
            {runningTimersCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
              </span>
            )}
          </button>

          {/* Install Guide Button in Header */}
          <button
            onClick={openInstallModal}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs transition-all border border-stone-200"
            title="Install App"
          >
            <Download className="w-3.5 h-3.5 text-orange-600" />
            <span className="hidden lg:inline">{language === 'ur' ? 'ایپ انسٹال' : language === 'hi' ? 'ऐप इंस्टॉल' : 'Install'}</span>
          </button>

          {/* User Auth Section dropdown */}
          {user && (
            <div className="relative">
              <button
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-stone-800 transition-all text-xs font-bold"
              >
                <div className="w-7 h-7 rounded-lg bg-linear-to-tr from-amber-500 to-orange-500 text-stone-950 font-black flex items-center justify-center text-xs shadow-xs">
                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : 'U')}
                </div>
                <span className="hidden sm:inline max-w-[100px] truncate">{user.displayName || user.email?.split('@')[0]}</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
              </button>

              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-amber-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-4 py-2 border-b border-stone-100">
                    <p className="text-xs font-bold text-stone-900 truncate">{user.displayName || 'Kitchen Chef'}</p>
                    <p className="text-[11px] text-stone-500 truncate">{user.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setShowUserDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 flex items-center gap-2"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>{language === 'ur' ? 'لاگ آؤٹ کریں' : language === 'hi' ? 'लॉग आउट' : 'Sign Out'}</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="border-t border-amber-100 bg-amber-50/40">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 sm:space-x-2 py-2 overflow-x-auto no-scrollbar scroll-smooth">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              const label = language === 'ur' ? item.labelUr : language === 'hi' ? item.labelHi : item.labelEn;

              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-sm shadow-amber-600/30'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-amber-100/60'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
