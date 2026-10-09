import React, { useState } from 'react';
import { 
  Timer, 
  Play, 
  Pause, 
  RotateCcw, 
  Trash2, 
  Plus, 
  Bell, 
  Coffee, 
  Egg, 
  Flame, 
  CookingPot, 
  Clock,
  Volume2
} from 'lucide-react';
import { useKitchen } from '../context/KitchenContext';
import { quickTimerPresets } from '../data/convertersAndSubs';

export const TimerHub: React.FC = () => {
  const { 
    language, 
    activeTimers, 
    addTimer, 
    toggleTimer, 
    resetTimer, 
    removeTimer, 
    playBeepSound 
  } = useKitchen();

  const [customLabel, setCustomLabel] = useState('');
  const [customMinutes, setCustomMinutes] = useState(5);
  const [customSeconds, setCustomSeconds] = useState(0);

  const handleCreateCustomTimer = (e: React.FormEvent) => {
    e.preventDefault();
    const totalSecs = (customMinutes * 60) + customSeconds;
    if (totalSecs <= 0) return;

    addTimer(customLabel.trim() || 'Kitchen Timer', totalSecs);
    setCustomLabel('');
    setCustomMinutes(5);
    setCustomSeconds(0);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="bg-linear-to-r from-amber-700 via-orange-600 to-amber-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">
            <Timer className="w-3.5 h-3.5" />
            <span>
              {language === 'ur' ? 'کچن ٹائمر حب' : language === 'hi' ? 'किचन टाइमर हब' : 'Kitchen Multi-Timer Hub'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {language === 'ur' ? 'ایک ساتھ متعدد ٹائمرز چلائیں' : language === 'hi' ? 'मल्टीपल टाइमर एक साथ चलाएं' : 'Simultaneous Cooking Timers'}
          </h2>
          <p className="text-amber-100 text-sm leading-relaxed">
            {language === 'ur'
              ? 'چائے، چاول کے دم، انڈے ابالنے اور تڑکے کے لیے الگ الگ ٹائمر لگائیں تاکہ کھانا کبھی نہ جلے۔'
              : language === 'hi'
              ? 'चाय, चावल के दम, अंडा उबालने और तड़के के लिए अलग-अलग टाइमर लगाएं। अलार्म की आवाज़ के साथ!'
              : 'Keep multiple dishes on track with independent audio alert timers and one-tap desi cooking presets.'}
          </p>
        </div>

        <button
          onClick={playBeepSound}
          className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-4 py-2.5 rounded-2xl border border-white/20 text-xs font-bold transition-all shrink-0"
        >
          <Volume2 className="w-4 h-4 text-amber-300" />
          <span>{language === 'ur' ? 'آواز چیک کریں' : language === 'hi' ? 'साउंड टेस्ट' : 'Test Sound Bell'}</span>
        </button>
      </div>

      {/* Quick Presets Section */}
      <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
        <h3 className="font-extrabold text-stone-900 text-base sm:text-lg flex items-center gap-2">
          <Flame className="w-4 h-4 text-amber-600" />
          <span>
            {language === 'ur' ? 'فوری دیسی کوکنگ پری سیٹس' : language === 'hi' ? 'क्विक कुकिंग प्रीसेट्स' : 'Quick Culinary Presets (1-Tap)'}
          </span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {quickTimerPresets.map((preset, idx) => {
            const label = language === 'ur' ? preset.labelUr : language === 'hi' ? preset.labelHi : preset.labelEn;
            const mins = Math.floor(preset.seconds / 60);

            return (
              <button
                key={idx}
                onClick={() => addTimer(preset.labelEn, preset.seconds)}
                className="flex items-center justify-between p-3.5 rounded-2xl border border-stone-200 hover:border-amber-400 bg-stone-50 hover:bg-amber-50/60 transition-all text-left group"
              >
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-stone-800 group-hover:text-amber-900 leading-tight">
                    {label}
                  </h4>
                  <span className="text-[11px] font-semibold text-stone-500 mt-0.5 block">
                    {mins} mins
                  </span>
                </div>
                <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center text-stone-600 transition-colors shadow-2xs">
                  <Plus className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Timers Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-stone-900 text-lg flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-600" />
            <span>
              {language === 'ur' ? 'جاری ٹائمرز' : language === 'hi' ? 'सक्रिय टाइमर' : 'Active Timers'}
            </span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
              {activeTimers.length}
            </span>
          </h3>
        </div>

        {activeTimers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeTimers.map((timer) => {
              const isFinished = timer.remainingSeconds === 0;
              const progress = ((timer.totalSeconds - timer.remainingSeconds) / timer.totalSeconds) * 100;

              return (
                <div
                  key={timer.id}
                  className={`rounded-3xl border p-5 shadow-sm transition-all flex flex-col justify-between ${
                    isFinished
                      ? 'bg-rose-50 border-rose-300 ring-2 ring-rose-400 animate-bounce'
                      : timer.isRunning
                      ? 'bg-white border-amber-300 shadow-md'
                      : 'bg-stone-50 border-stone-200 opacity-80'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-extrabold text-stone-900 text-base">
                          {timer.label}
                        </h4>
                        {timer.recipeTitle && (
                          <span className="text-xs text-stone-500 font-medium block">
                            {timer.recipeTitle}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => removeTimer(timer.id)}
                        className="text-stone-400 hover:text-rose-600 p-1 rounded-lg"
                        title="Delete Timer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Big Digital Clock */}
                    <div className="text-center py-2">
                      <div className={`text-4xl sm:text-5xl font-mono font-black tracking-tight ${
                        isFinished 
                          ? 'text-rose-600 animate-pulse' 
                          : timer.isRunning 
                          ? 'text-stone-900' 
                          : 'text-stone-400'
                      }`}>
                        {formatTime(timer.remainingSeconds)}
                      </div>

                      {isFinished && (
                        <span className="inline-flex items-center gap-1 mt-1 text-xs font-bold text-rose-600 uppercase tracking-wider">
                          <Bell className="w-3.5 h-3.5 animate-spin" />
                          Time Up! کھانا چیک کریں!
                        </span>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          isFinished ? 'bg-rose-500' : 'bg-linear-to-r from-amber-500 to-orange-500'
                        }`}
                        style={{ width: `${Math.min(100, progress)}%` }}
                      />
                    </div>
                  </div>

                  {/* Timer Controls */}
                  <div className="pt-4 mt-3 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={() => toggleTimer(timer.id)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                        timer.isRunning
                          ? 'bg-stone-800 text-white hover:bg-stone-900'
                          : 'bg-amber-600 text-white hover:bg-amber-700'
                      }`}
                    >
                      {timer.isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                      <span>{timer.isRunning ? 'Pause' : isFinished ? 'Restart' : 'Resume'}</span>
                    </button>

                    <button
                      onClick={() => resetTimer(timer.id)}
                      className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:bg-stone-100 border border-stone-200"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-dashed border-stone-300 p-8 text-center text-stone-500">
            <Timer className="w-10 h-10 text-stone-300 mx-auto mb-2" />
            <p className="font-semibold text-stone-700">No active timers right now</p>
            <p className="text-xs text-stone-400 mt-0.5">Click any quick preset above or create a custom timer below!</p>
          </div>
        )}
      </div>

      {/* Custom Timer Creator */}
      <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs max-w-xl">
        <h3 className="font-extrabold text-stone-900 text-base mb-4 flex items-center gap-2">
          <Plus className="w-4 h-4 text-amber-600" />
          <span>
            {language === 'ur' ? 'اپنی مرضی کا ٹائمر بنائیں' : language === 'hi' ? 'कस्टम टाइमर बनाएं' : 'Create Custom Timer'}
          </span>
        </h3>

        <form onSubmit={handleCreateCustomTimer} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Timer Name / Label
            </label>
            <input
              type="text"
              placeholder="e.g. Masala Bhunai, Milk Boiling, Brown Rice..."
              value={customLabel}
              onChange={(e) => setCustomLabel(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-amber-500/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Minutes
              </label>
              <input
                type="number"
                min="0"
                max="300"
                value={customMinutes}
                onChange={(e) => setCustomMinutes(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Seconds
              </label>
              <input
                type="number"
                min="0"
                max="59"
                value={customSeconds}
                onChange={(e) => setCustomSeconds(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            Start New Timer
          </button>
        </form>
      </div>
    </div>
  );
};
