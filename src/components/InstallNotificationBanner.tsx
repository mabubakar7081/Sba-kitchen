import React, { useState, useEffect } from 'react';
import { Download, X, ChefHat, Bell, Sparkles } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useKitchen } from '../context/KitchenContext';

interface InstallNotificationBannerProps {
  onOpenGuide: () => void;
}

export const InstallNotificationBanner: React.FC<InstallNotificationBannerProps> = ({ onOpenGuide }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const { language } = useKitchen();
  const [dismissed, setDismissed] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem('sba_install_notification_dismissed') === 'true';
    if (isDismissed) {
      setDismissed(true);
    } else {
      // Gentle notification pop up after 1.5 seconds
      const timer = setTimeout(() => {
        setAnimating(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Hide if already installed or user dismissed
  if (isInstalled || dismissed || !animating) {
    return null;
  }

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('sba_install_notification_dismissed', 'true');
  };

  const handleInstallClick = async () => {
    if (isInstallable) {
      const outcome = await install();
      if (outcome) {
        setDismissed(true);
      }
    } else {
      // Show step-by-step guide
      onOpenGuide();
    }
  };

  return (
    <aside 
      aria-label="SBA Kitchen App Installation Notification"
      className="fixed bottom-5 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 max-w-md w-full animate-in slide-in-from-bottom-8 fade-in duration-300"
    >
      <div className="bg-stone-900/95 backdrop-blur-md text-white p-4 rounded-3xl shadow-2xl border-2 border-amber-500/60 flex items-center justify-between gap-3.5 ring-2 ring-black/20">
        
        {/* Notification Bell Badge on Icon */}
        <div className="relative shrink-0">
          <div className="w-12 h-12 rounded-2xl bg-linear-to-tr from-amber-500 via-orange-500 to-rose-500 flex items-center justify-center text-white shadow-md shadow-orange-500/30">
            <ChefHat className="w-6 h-6 stroke-[2.2]" />
          </div>
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500 border border-stone-900" />
          </span>
        </div>

        {/* Notification Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="text-xs sm:text-sm font-black text-amber-400 truncate">
              {language === 'ur' ? '🔔 ایس بی اے کچن ایپ نوٹیفکیشن' : language === 'hi' ? '🔔 एसबीए किचन ऐप नोटिफिकेशन' : '🔔 Install SBA Kitchen App'}
            </h4>
          </div>
          <p className="text-[11px] text-stone-200 leading-tight mt-0.5 line-clamp-1">
            {language === 'ur' 
              ? 'موبائل سکرین پر انسٹال کریں - فاسٹ، فل سکرین اور آف لائن کام کرے گی۔' 
              : language === 'hi'
              ? 'मोबाइल स्क्रीन पर इंस्टॉल करें - तेज, फुल स्क्रीन और ऑफलाइन।'
              : 'Add to home screen for ultra-fast, full screen & offline cooking.'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleInstallClick}
            className="px-3.5 py-2 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-stone-950 font-black text-xs shadow-md transition-all active:scale-95 flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>
              {language === 'ur' ? 'انسٹال کریں' : language === 'hi' ? 'इंस्टॉल करें' : 'Install'}
            </span>
          </button>

          <button
            onClick={handleDismiss}
            className="w-7 h-7 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
            title="Dismiss notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
