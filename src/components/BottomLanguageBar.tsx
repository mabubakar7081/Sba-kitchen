import React from 'react';
import { Globe, Heart, ShieldCheck, Download, Sparkles } from 'lucide-react';
import { useKitchen } from '../context/KitchenContext';
import { Language } from '../types';

interface BottomLanguageBarProps {
  onOpenInstallGuide: () => void;
}

export const BottomLanguageBar: React.FC<BottomLanguageBarProps> = ({ onOpenInstallGuide }) => {
  const { language, setLanguage } = useKitchen();

  const languages: { code: Language; label: string; sub: string }[] = [
    { code: 'ur', label: 'اردو', sub: 'Urdu' },
    { code: 'hi', label: 'हिन्दी', sub: 'Hindi' },
    { code: 'en', label: 'English', sub: 'English' },
  ];

  return (
    <footer className="mt-auto bg-stone-900 text-stone-300 border-t border-amber-500/20 py-8 px-4 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-6 text-center">
        
        {/* Brand & Slogan */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-black text-amber-400 font-sans tracking-tight">
              {language === 'ur' ? 'ایس بی اے کچن' : language === 'hi' ? 'एसबीए किचन' : 'SBA Kitchen'}
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Smart AI Companion
            </span>
          </div>
          <p className="text-xs text-stone-400 max-w-md">
            {language === 'ur'
              ? 'باورچی خانے کا مکمل ساتھی: 170+ ریسیپیز، پینٹری مینجمنٹ، وائس اے آئی اور شیف اسسٹنٹ۔'
              : language === 'hi'
              ? 'रसोई का संपूर्ण साथी: 170+ रेसिपीज, पैंट्री ट्रैकर और वॉयस एआई शेफ।'
              : 'Complete smart kitchen companion: 170+ authentic recipes, pantry inventory & voice AI chef.'}
          </p>
        </div>

        {/* PRIMARY LANGUAGE SELECTOR - SPECIFICALLY PLACED AT THE VERY BOTTOM */}
        <div className="bg-stone-950/80 p-3 sm:p-4 rounded-3xl border border-stone-800 shadow-inner flex flex-col items-center gap-2.5">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
            <Globe className="w-4 h-4 text-amber-400" />
            <span>
              {language === 'ur' ? 'زبان تبدیل کریں (Select Language):' : language === 'hi' ? 'भाषा बदलें (Select Language):' : 'Language Selection:'}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-stone-900 p-1.5 rounded-2xl border border-stone-700">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                  language === lang.code
                    ? 'bg-linear-to-r from-amber-500 to-orange-500 text-stone-950 shadow-md scale-105 ring-2 ring-amber-300/40'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <span>{lang.label}</span>
                <span className="text-[10px] opacity-70 hidden sm:inline">({lang.sub})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom footer credit & PWA shortcut */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-4 border-t border-stone-800/80 text-[11px] text-stone-400 gap-3">
          <div className="flex items-center gap-1">
            <span>© 2026 SBA Kitchen (ایس بی اے کچن). All rights reserved.</span>
          </div>

          <button
            onClick={onOpenInstallGuide}
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{language === 'ur' ? 'ایپ انسٹالیشن گائیڈ' : language === 'hi' ? 'ऐप इंस्टॉलेशन' : 'App Install Guide'}</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
