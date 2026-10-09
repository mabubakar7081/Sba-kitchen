import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  Lock, 
  User as UserIcon, 
  ChefHat, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  AlertCircle, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useKitchen } from '../context/KitchenContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  initialMode = 'login' 
}) => {
  const { 
    signInWithEmail, 
    signUpWithEmail, 
    signInWithGoogle, 
    signInAsGuest, 
    sendPasswordReset, 
    authError, 
    setAuthError 
  } = useAuth();
  
  const { language } = useKitchen();

  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetSuccessMessage, setResetSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResetSuccessMessage(null);
    setAuthError(null);

    try {
      if (mode === 'login') {
        await signInWithEmail(email, password);
        onClose();
      } else if (mode === 'signup') {
        if (!name.trim()) {
          setAuthError(language === 'ur' ? 'براہ کرم اپنا نام درج کریں' : language === 'hi' ? 'कृपया अपना नाम दर्ज करें' : 'Please enter your name');
          setIsSubmitting(false);
          return;
        }
        await signUpWithEmail(email, password, name);
        onClose();
      } else if (mode === 'forgot') {
        await sendPasswordReset(email);
        setResetSuccessMessage(
          language === 'ur'
            ? 'پاس ورڈ ری سیٹ لنک آپ کی ای میل پر بھیج دیا گیا ہے!'
            : language === 'hi'
            ? 'पासवर्ड रीसेट लिंक आपके ईमेल पर भेज दिया गया है!'
            : 'Password reset link sent to your email!'
        );
      }
    } catch {
      // Error handled by context
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    setAuthError(null);
    try {
      await signInWithGoogle();
      onClose();
    } catch {
      // Handled in context
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGuestContinue = () => {
    signInAsGuest();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-amber-200/60 animate-in fade-in zoom-in duration-200">
        
        {/* Top Header Banner */}
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
            {mode === 'login' && (language === 'ur' ? 'خوش آمدید! لاگ ان کریں' : language === 'hi' ? 'स्वागत है! लॉग इन करें' : 'Welcome to SBA Kitchen')}
            {mode === 'signup' && (language === 'ur' ? 'نیا اکاؤنٹ بنائیں' : language === 'hi' ? 'नया खाता बनाएं' : 'Create Free Kitchen Account')}
            {mode === 'forgot' && (language === 'ur' ? 'پاس ورڈ بحال کریں' : language === 'hi' ? 'पासवर्ड रीसेट करें' : 'Reset Your Password')}
          </h3>

          <p className="text-xs text-amber-100 mt-1 max-w-xs mx-auto">
            {language === 'ur'
              ? 'اپنی کچن پینٹری، پسندیدہ ریسیپیز اور سودا سلف فہرست تمام ڈیوائسز پر سنک رکھیں'
              : language === 'hi'
              ? 'अपनी पैंट्री, पसंदीदा रेसिपी और राशन लिस्ट को हमेशा सुरक्षित रखें'
              : 'Save and sync your pantry, recipes, and meal plans securely'}
          </p>
        </div>

        {/* Tab switchers */}
        {mode !== 'forgot' && (
          <div className="flex border-b border-stone-200 bg-stone-50 text-xs font-bold">
            <button
              onClick={() => { setMode('login'); setAuthError(null); }}
              className={`flex-1 py-3 text-center transition-all ${
                mode === 'login'
                  ? 'bg-white text-amber-900 border-b-2 border-amber-600 font-extrabold shadow-2xs'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {language === 'ur' ? 'لاگ ان (Sign In)' : language === 'hi' ? 'लॉग इन (Sign In)' : 'Sign In'}
            </button>
            <button
              onClick={() => { setMode('signup'); setAuthError(null); }}
              className={`flex-1 py-3 text-center transition-all ${
                mode === 'signup'
                  ? 'bg-white text-amber-900 border-b-2 border-amber-600 font-extrabold shadow-2xs'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {language === 'ur' ? 'نیا اکاؤنٹ (Sign Up)' : language === 'hi' ? 'साइन अप (Sign Up)' : 'Sign Up'}
            </button>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 space-y-4">
          {/* Error Message */}
          {authError && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl p-3 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
              <span className="font-semibold">{authError}</span>
            </div>
          )}

          {/* Success Message for Reset */}
          {resetSuccessMessage && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl p-3 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
              <span className="font-semibold">{resetSuccessMessage}</span>
            </div>
          )}

          {/* Google 1-Click Sign In */}
          {mode !== 'forgot' && (
            <>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs sm:text-sm font-bold shadow-2xs transition-all active:scale-98"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>
                  {language === 'ur' ? 'گوگل سے فوری سائن ان کریں' : language === 'hi' ? 'Google से तुरंत जारी रखें' : 'Continue with Google'}
                </span>
              </button>

              <div className="relative flex items-center justify-center my-3">
                <div className="border-t border-stone-200 w-full" />
                <span className="bg-white px-3 text-[11px] uppercase tracking-wider text-stone-400 font-semibold absolute">
                  {language === 'ur' ? 'یا ای میل کے ذریعے' : language === 'hi' ? 'या ईमेल से' : 'or with email'}
                </span>
              </div>
            </>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {language === 'ur' ? 'آپ کا نام (Full Name)' : language === 'hi' ? 'आपका नाम (Full Name)' : 'Full Name'}
                </label>
                <div className="relative">
                  <UserIcon className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima Ali / Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500/50 focus:outline-hidden"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                {language === 'ur' ? 'ای میل ایڈریس (Email)' : language === 'hi' ? 'ईमेल पता (Email)' : 'Email Address'}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500/50 focus:outline-hidden"
                />
              </div>
            </div>

            {mode !== 'forgot' && (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-stone-700">
                    {language === 'ur' ? 'پاس ورڈ (Password)' : language === 'hi' ? 'पासवर्ड (Password)' : 'Password'}
                  </label>
                  {mode === 'login' && (
                    <button
                      type="button"
                      onClick={() => { setMode('forgot'); setAuthError(null); }}
                      className="text-[11px] text-amber-700 hover:underline font-semibold"
                    >
                      {language === 'ur' ? 'پاس ورڈ بھول گئے؟' : language === 'hi' ? 'पासवर्ड भूल गए?' : 'Forgot password?'}
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500/50 focus:outline-hidden"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              <span>
                {isSubmitting 
                  ? 'Processing...' 
                  : mode === 'login'
                  ? (language === 'ur' ? 'لاگ ان کریں' : language === 'hi' ? 'लॉग इन करें' : 'Sign In')
                  : mode === 'signup'
                  ? (language === 'ur' ? 'اکاؤنٹ بنائیں' : language === 'hi' ? 'खाता बनाएं' : 'Create Account')
                  : (language === 'ur' ? 'ری سیٹ لنک بھیجیں' : language === 'hi' ? 'रीसेट लिंक भेजें' : 'Send Reset Link')}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Forgot mode back button */}
          {mode === 'forgot' && (
            <button
              type="button"
              onClick={() => { setMode('login'); setResetSuccessMessage(null); }}
              className="w-full text-center text-xs font-bold text-stone-600 hover:underline pt-2"
            >
              ← Back to Sign In
            </button>
          )}

          {/* Guest explorer option */}
          <div className="pt-3 border-t border-stone-100 text-center">
            <button
              type="button"
              onClick={handleGuestContinue}
              className="text-xs text-stone-500 hover:text-stone-900 font-semibold inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-stone-100 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>
                {language === 'ur' ? 'بغیر اکاؤنٹ مہمان کے طور پر دیکھیں' : language === 'hi' ? 'बिना खाते के अतिथि (Guest) के रूप में देखें' : 'Continue as Guest (Preview without account)'}
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
