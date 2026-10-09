import React from 'react';
import { 
  LogIn, 
  UserPlus, 
  LogOut, 
  ShieldCheck, 
  ChefHat,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useKitchen } from '../context/KitchenContext';

interface TopAuthBannerProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

export const TopAuthBanner: React.FC<TopAuthBannerProps> = ({ onOpenAuth }) => {
  const { user, isGuest, logout } = useAuth();
  const { language, isCloudSyncing } = useKitchen();

  return (
    <div className="bg-stone-900 text-white text-xs border-b border-amber-500/40 py-2.5 px-4 shadow-md relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left message & prompt with SBA Kitchen branding */}
        <div className="flex items-center gap-2.5 text-center sm:text-left">
          <div className="w-6 h-6 rounded-lg bg-linear-to-tr from-amber-500 to-orange-500 text-stone-950 font-black flex items-center justify-center shrink-0 shadow-xs">
            <ChefHat className="w-4 h-4 stroke-[2.5]" />
          </div>

          {user ? (
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <span className="font-extrabold text-amber-400">
                {language === 'ur' ? 'ایس بی اے کچن اکاؤنٹ:' : language === 'hi' ? 'एसबीए किचन अकाउंट:' : 'SBA Kitchen Account:'}
              </span>
              <span className="font-bold text-stone-200 truncate max-w-[200px]">
                {user.displayName || user.email}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-950/90 text-emerald-300 border border-emerald-500/50 px-2 py-0.5 rounded-full font-bold ml-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>{isCloudSyncing ? 'Syncing...' : 'Cloud Synced'}</span>
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
              <span className="font-black text-amber-400 text-xs sm:text-sm">
                {language === 'ur' ? 'ایس بی اے کچن لاگ ان و سائن اپ:' : language === 'hi' ? 'एसबीए किचन लॉगिन व साइन अप:' : 'SBA Kitchen Sign In & Sign Up:'}
              </span>
              <span className="text-stone-300 hidden md:inline">
                {language === 'ur'
                  ? 'اکاؤنٹ بنائیں تاکہ آپ کی 170+ ریسیپیز، پینٹری اور سودا سلف کلاؤڈ میں محفوظ رہیں۔'
                  : language === 'hi'
                  ? 'खाता बनाएं ताकि आपकी रेसिपीज, पैंट्री और राशन लिस्ट सुरक्षित रहे।'
                  : 'Create free account to sync all recipes, pantry & grocery lists across all devices.'}
              </span>
            </div>
          )}
        </div>

        {/* Right buttons: Highly prominent Sign In & Sign Up at the VERY TOP FRONT */}
        <div className="flex items-center gap-2 shrink-0">
          {user ? (
            <button
              onClick={() => logout()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-rose-950/80 hover:text-rose-300 text-stone-300 border border-stone-700 transition-colors font-bold text-xs"
            >
              <LogOut className="w-3.5 h-3.5 text-rose-400" />
              <span>{language === 'ur' ? 'لاگ آؤٹ' : language === 'hi' ? 'लॉग आउट' : 'Sign Out'}</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenAuth('login')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-black border border-stone-600 transition-all text-xs active:scale-95 shadow-sm"
              >
                <LogIn className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {language === 'ur' ? 'لاگ ان (Log In)' : language === 'hi' ? 'लॉग इन (Log In)' : 'Log In'}
                </span>
              </button>

              <button
                onClick={() => onOpenAuth('signup')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-stone-950 font-black shadow-md transition-all text-xs active:scale-95 ring-2 ring-amber-300/60"
              >
                <UserPlus className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>
                  {language === 'ur' ? 'مفت سائن اپ (Sign Up Free)' : language === 'hi' ? 'मुफ्त साइन अप (Sign Up Free)' : 'Sign Up Free'}
                </span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
