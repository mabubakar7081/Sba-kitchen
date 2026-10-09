import React from 'react';
import { 
  X, 
  Download, 
  Smartphone, 
  Share, 
  PlusSquare, 
  Laptop, 
  CheckCircle, 
  ChefHat,
  ArrowRight
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useKitchen } from '../context/KitchenContext';

interface InstallGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallGuideModal: React.FC<InstallGuideModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const { language } = useKitchen();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-amber-200/80 animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="bg-linear-to-br from-amber-600 via-orange-600 to-amber-700 p-6 text-white text-center relative overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-xs flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mx-auto mb-3 shadow-md">
            <ChefHat className="w-8 h-8 text-white stroke-[2.2]" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black tracking-tight">
            {language === 'ur' ? 'ایس بی اے کچن ایپ انسٹال کریں' : language === 'hi' ? 'एसबीए किचन ऐप इंस्टॉल करें' : 'Install SBA Kitchen App'}
          </h3>

          <p className="text-xs text-amber-100 mt-1 max-w-sm mx-auto">
            {language === 'ur'
              ? 'بغیر پلے اسٹور کے فوری انسٹال کریں! مکمل فل سکرین، تیز رفتار اور ہوم سکرین سے فوری رسائی۔'
              : language === 'hi'
              ? 'बिना प्ले स्टोर के सीधे होम स्क्रीन पर इंस्टॉल करें। फुल स्क्रीन और तेज रफ्तार का अनुभव!'
              : 'Add to your Home Screen for a fast, full-screen, native app experience with zero app store hassle!'}
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Status if already installed */}
          {isInstalled && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 text-xs font-bold">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                {language === 'ur' 
                  ? 'یہ ایپ پہلے سے آپ کی ہوم سکرین یا ڈیوائس پر انسٹال ہے!' 
                  : language === 'hi' 
                  ? 'यह ऐप पहले से आपके डिवाइस पर इंस्टॉल है!' 
                  : 'App is already installed on this device!'}
              </span>
            </div>
          )}

          {/* 1-Click Direct Install Button (Chrome / Edge / Android) */}
          {isInstallable && (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-center space-y-3">
              <p className="text-xs font-bold text-amber-900">
                {language === 'ur' ? 'براہ راست 1-کلک انسٹال کریں:' : language === 'hi' ? '1-क्लिक में तुरंत इंस्टॉल करें:' : 'Fast 1-Click Install Available:'}
              </p>
              <button
                onClick={async () => {
                  const success = await install();
                  if (success) onClose();
                }}
                className="w-full py-3 px-4 rounded-xl bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <Download className="w-4 h-4" />
                <span>
                  {language === 'ur' ? 'ابھی انسٹال کریں (Install Now)' : language === 'hi' ? 'अभी इंस्टॉल करें (Install Now)' : 'Install App to Home Screen'}
                </span>
              </button>
            </div>
          )}

          {/* Step-by-Step Device Guides */}
          <div className="space-y-4 text-xs">
            {/* Android Guide */}
            <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span>Android (Google Chrome / Brave)</span>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-stone-600 pl-1">
                <li>
                  {language === 'ur' ? 'براؤزر کے اوپر دائیں کونے میں 3 نقطوں (⋮) پر کلک کریں۔' : language === 'hi' ? 'ब्राउज़र के ऊपर दाईं ओर 3 डॉट्स (⋮) पर टैप करें।' : 'Tap the 3 dots menu (⋮) in the top-right corner of Chrome.'}
                </li>
                <li>
                  {language === 'ur' ? '"Install app" یا "Add to Home screen" منتخب کریں۔' : language === 'hi' ? '"Install app" या "Add to Home screen" चुनें।' : 'Select "Install app" or "Add to Home screen".'}
                </li>
                <li>
                  {language === 'ur' ? '"Install" پر کلک کریں۔ ایپ آپ کی موبائل سکرین پر ظاہر ہو جائے گی۔' : language === 'hi' ? '"Install" दबाएं। ऐप आपकी होम स्क्रीन पर जुड़ जाएगा।' : 'Confirm by tapping "Install". The icon will appear on your phone!'}
                </li>
              </ol>
            </div>

            {/* iPhone / iPad Guide */}
            <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <Smartphone className="w-4 h-4 text-blue-600" />
                <span>iPhone & iPad (Apple Safari)</span>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-stone-600 pl-1">
                <li>
                  {language === 'ur' ? 'نیچے دیے گئے "Share" بٹن (تیر کا نشان) پر ٹیپ کریں۔' : language === 'hi' ? 'सफारी में नीचे दिए गए "Share" बटन (तीर का आइकन) पर टैپ करें।' : 'Tap the Share button (square with arrow pointing up) at the bottom.'}
                </li>
                <li>
                  {language === 'ur' ? 'تھوڑا نیچے سکرول کریں اور "Add to Home Screen" (+) پر کلک کریں۔' : language === 'hi' ? 'नीचे स्क्रॉल करें और "Add to Home Screen" (+) चुनें।' : 'Scroll down and tap "Add to Home Screen" (+).'}
                </li>
                <li>
                  {language === 'ur' ? 'اوپر دائیں کونے میں "Add" پر کلک کریں۔' : language === 'hi' ? 'ऊपर दाईं ओर "Add" पर टैप करें।' : 'Tap "Add" in the top-right corner to complete installation.'}
                </li>
              </ol>
            </div>

            {/* PC / Laptop Guide */}
            <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <Laptop className="w-4 h-4 text-amber-600" />
                <span>PC / Laptop / Mac (Chrome / Edge)</span>
              </div>
              <p className="text-stone-600">
                {language === 'ur'
                  ? 'براؤزر کی ایڈریس بار کے دائیں جانب کمپیوٹر اور تیر کا نشان (Install icon) نظر آئے گا، اس پر کلک کریں اور "Install" دبا دیں۔'
                  : language === 'hi'
                  ? 'ब्राउज़र एड्रेस बार में दाईं ओर कंप्यूटर आइकन (Install icon) पर क्लिक करें और "Install" चुनें।'
                  : 'Look at the right side of your browser URL bar for the "Install" computer icon and click it to install on your desktop.'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl border border-stone-300 font-bold text-xs text-stone-700 hover:bg-stone-100 transition-colors"
          >
            {language === 'ur' ? 'سمجھ آ گیا (بند کریں)' : language === 'hi' ? 'समझ आ गया (बंद करें)' : 'Got it! Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
