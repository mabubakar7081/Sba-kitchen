import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle, 
  Timer, 
  ChefHat, 
  Sparkles,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useKitchen } from '../context/KitchenContext';
import { Recipe } from '../types';

interface CookingModeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export const CookingModeModal: React.FC<CookingModeModalProps> = ({ recipe, onClose }) => {
  const { language, playBeepSound } = useKitchen();

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepTimerSeconds, setStepTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isSpeechSpeaking, setIsSpeechSpeaking] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentStep = recipe.steps[currentStepIndex];
  const totalSteps = recipe.steps.length;

  // Initialize or reset timer when changing step
  useEffect(() => {
    if (currentStep?.timerMinutes) {
      setStepTimerSeconds(currentStep.timerMinutes * 60);
      setIsTimerRunning(false);
    } else {
      setStepTimerSeconds(0);
      setIsTimerRunning(false);
    }
  }, [currentStepIndex, currentStep]);

  // Step timer clock
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && stepTimerSeconds > 0) {
      interval = setInterval(() => {
        setStepTimerSeconds(prev => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            playBeepSound();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, stepTimerSeconds]);

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  // Text to speech (speechSynthesis)
  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeechSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeechSpeaking(false);
      return;
    }

    const textToSpeak = 
      language === 'ur'
        ? currentStep.instructionUr
        : language === 'hi'
        ? currentStep.instructionHi
        : currentStep.instructionEn;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.95;
    
    // Choose appropriate voice language if available
    if (language === 'hi') utterance.lang = 'hi-IN';
    else if (language === 'ur') utterance.lang = 'ur-PK';
    else utterance.lang = 'en-US';

    utterance.onend = () => setIsSpeechSpeaking(false);
    utterance.onerror = () => setIsSpeechSpeaking(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsSpeechSpeaking(true);
  };

  const handleNextStep = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      // Finished all steps!
      setIsCompleted(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
      playBeepSound();
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex flex-col text-white">
      {/* Top Bar */}
      <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
            <ChefHat className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold leading-tight">
              {language === 'ur' ? recipe.titleUr : language === 'hi' ? recipe.titleHi : recipe.titleEn}
            </h2>
            <p className="text-xs text-stone-400">
              {language === 'ur' ? 'لائیو کوکنگ موڈ' : language === 'hi' ? 'लाइव कुकिंग मोड' : 'Live Interactive Cook Mode'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* TTS Audio button */}
          <button
            onClick={handleSpeak}
            className={`p-2.5 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-semibold ${
              isSpeechSpeaking 
                ? 'bg-amber-500 text-stone-900 border-amber-400 shadow-md' 
                : 'bg-stone-800/80 text-stone-300 border-stone-700 hover:bg-stone-700'
            }`}
            title="Read instructions aloud"
          >
            {isSpeechSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
            <span className="hidden sm:inline">
              {isSpeechSpeaking ? 'Stop Voice' : 'Read Aloud'}
            </span>
          </button>

          <button
            onClick={() => {
              if (window.speechSynthesis) window.speechSynthesis.cancel();
              onClose();
            }}
            className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress Line */}
      <div className="w-full bg-stone-800 h-1.5">
        <div 
          className="bg-linear-to-r from-amber-500 to-orange-500 h-full transition-all duration-300"
          style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
        />
      </div>

      {/* Main Focus Screen */}
      <div className="flex-1 max-w-4xl w-full mx-auto p-6 sm:p-10 flex flex-col justify-center items-center text-center">
        {!isCompleted ? (
          <div className="space-y-8 w-full animate-in fade-in zoom-in duration-300">
            {/* Step Counter */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-800 border border-stone-700 text-xs font-extrabold text-amber-400 tracking-wider uppercase">
              <span>Step {currentStep.stepNumber} of {totalSteps}</span>
            </div>

            {/* Instruction Big Text */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug text-stone-100">
                {language === 'ur' 
                  ? currentStep.instructionUr 
                  : language === 'hi' 
                  ? currentStep.instructionHi 
                  : currentStep.instructionEn}
              </h3>

              {language !== 'en' && (
                <p className="text-sm sm:text-base text-stone-400 font-normal">
                  {currentStep.instructionEn}
                </p>
              )}
            </div>

            {/* Chef Tip */}
            {currentStep.tip && (
              <div className="max-w-xl mx-auto bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-xs sm:text-sm text-amber-300 flex items-center gap-3 text-left">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                <span><strong className="font-bold">Chef Tip:</strong> {currentStep.tip}</span>
              </div>
            )}

            {/* Embedded Step Timer */}
            {currentStep.timerMinutes && (
              <div className="max-w-xs mx-auto bg-stone-900 border border-stone-800 rounded-3xl p-5 shadow-2xl flex flex-col items-center space-y-3">
                <div className="flex items-center gap-2 text-stone-400 text-xs font-semibold uppercase tracking-wider">
                  <Timer className="w-4 h-4 text-amber-400" />
                  <span>Step Cooking Timer</span>
                </div>

                <div className={`text-4xl sm:text-5xl font-mono font-black ${
                  stepTimerSeconds === 0 ? 'text-emerald-400 animate-pulse' : 'text-stone-100'
                }`}>
                  {formatTime(stepTimerSeconds)}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      isTimerRunning 
                        ? 'bg-rose-600 hover:bg-rose-700 text-white' 
                        : 'bg-amber-500 hover:bg-amber-600 text-stone-950 shadow-md'
                    }`}
                  >
                    {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    <span>{isTimerRunning ? 'Pause' : 'Start Timer'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsTimerRunning(false);
                      setStepTimerSeconds(currentStep.timerMinutes! * 60);
                    }}
                    className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 transition-colors"
                    title="Reset"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Completion Celebration Card */
          <div className="space-y-6 max-w-md mx-auto text-center animate-in zoom-in duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-extrabold text-white">
                {language === 'ur' ? 'کھانا تیار ہے! مبارک ہو!' : language === 'hi' ? 'स्वादिष्ट खाना तैयार है! बधाई!' : 'Cooking Completed!'}
              </h3>
              <p className="text-stone-400 text-sm">
                {language === 'ur' 
                  ? 'آپ کی شاندار ڈش تیار ہے۔ گرما گرم پیش کریں اور لطف اٹھائیں۔' 
                  : language === 'hi'
                  ? 'आपकी शानदार डिश तैयार है। गरमा-गरम परोसें और स्वाद का आनंद लें।'
                  : 'Your dish is ready to be plated and served hot!'}
              </p>
            </div>

            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setCurrentStepIndex(0);
                  setIsCompleted(false);
                }}
                className="px-4 py-2.5 rounded-xl border border-stone-700 text-xs font-bold text-stone-300 hover:bg-stone-800"
              >
                Cook Again
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-extrabold text-sm shadow-lg"
              >
                Finish & Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Step Navigation Controls */}
      <div className="p-6 border-t border-stone-800/80 bg-stone-950 flex items-center justify-between">
        <button
          onClick={handlePrevStep}
          disabled={currentStepIndex === 0}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
            currentStepIndex === 0 
              ? 'opacity-30 border-stone-800 text-stone-600 cursor-not-allowed' 
              : 'border-stone-700 bg-stone-900 hover:bg-stone-800 text-stone-200'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{language === 'ur' ? 'پچھلا مرحلہ' : language === 'hi' ? 'पिछला चरण' : 'Previous Step'}</span>
        </button>

        <button
          onClick={handleNextStep}
          className="flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-stone-950 shadow-xl transition-all active:scale-95"
        >
          <span>
            {currentStepIndex === totalSteps - 1
              ? (language === 'ur' ? 'مکمل کھانا تیار!' : language === 'hi' ? 'खाना तैयार!' : 'Finish Cooking!')
              : (language === 'ur' ? 'اگلا مرحلہ' : language === 'hi' ? 'अगला चरण' : 'Next Step')}
          </span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
