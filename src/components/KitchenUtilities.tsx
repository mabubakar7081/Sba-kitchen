import React, { useState } from 'react';
import { 
  Scale, 
  Sparkles, 
  HelpCircle, 
  Flame, 
  Layers, 
  ArrowRightLeft,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { useKitchen } from '../context/KitchenContext';
import { kitchenSubstitutions, conversionCategories } from '../data/convertersAndSubs';

export const KitchenUtilities: React.FC = () => {
  const { language } = useKitchen();

  const [activeTab, setActiveTab] = useState<'substitutes' | 'converter' | 'temperatures'>('substitutes');

  // Interactive quick calculator
  const [calcInput, setCalcInput] = useState<number>(1);
  const [calcType, setCalcType] = useState<'cup_to_ml' | 'cup_atta' | 'cup_rice' | 'tbsp_to_ml'>('cup_to_ml');

  const calculateResult = () => {
    switch (calcType) {
      case 'cup_to_ml':
        return `${calcInput * 240} ml (approx. ${calcInput * 16} tbsp)`;
      case 'cup_atta':
        return `${Math.round(calcInput * 125)} grams of Atta (flour)`;
      case 'cup_rice':
        return `${Math.round(calcInput * 190)} grams of raw Basmati Rice`;
      case 'tbsp_to_ml':
        return `${calcInput * 15} ml (${calcInput * 3} teaspoons)`;
      default:
        return '';
    }
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-linear-to-r from-amber-700 via-orange-600 to-amber-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>
              {language === 'ur' ? 'کچن گائیڈ، متبادل و پیمانے' : language === 'hi' ? 'रसोई नुस्खे, विकल्प व माप' : 'Culinary Tools & Substitutions'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {language === 'ur' ? 'اگر کوئی چیز ختم ہو تو متبادل ٹوٹکے' : language === 'hi' ? 'सामग्री खत्म होने पर स्मार्ट विकल्प' : 'Never Get Stuck While Cooking'}
          </h2>
          <p className="text-amber-100 text-sm leading-relaxed">
            {language === 'ur'
              ? 'اگر دہی، کریم، قصوری میتھی یا ٹماٹر پیوری نہ ہو تو فوری متبادل حل اور دیسی کچن کے پیمانے (کپ سے گرام)۔'
              : language === 'hi'
              ? 'यदि दही, मलाई, कसूरी मेथी या टमाटर प्यूरी न हो तो झटपट विकल्प और देसी माप (कप से ग्राम)।'
              : 'Smart ingredient swaps when essentials run out, plus precise South Asian cup-to-gram conversion charts.'}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-stone-200 gap-2">
        {[
          { id: 'substitutes' as const, labelEn: 'Ingredient Substitutes', labelUr: 'اشیاء کے متبادل (Substitutes)', labelHi: 'सामग्री के विकल्प (Substitutes)' },
          { id: 'converter' as const, labelEn: 'Desi Unit Converter', labelUr: 'کپ اور گرام کنورٹر', labelHi: 'कप व ग्राम कनवर्टर' },
          { id: 'temperatures' as const, labelEn: 'Dum & Flame Guide', labelUr: 'دم اور آنچ گائیڈ', labelHi: 'दम व आंच गाइड' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-3 px-4 font-bold text-xs sm:text-sm rounded-t-2xl transition-all ${
              activeTab === tab.id
                ? 'bg-white text-amber-900 border-t-2 border-x border-amber-500 shadow-2xs font-extrabold'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            {language === 'ur' ? tab.labelUr : language === 'hi' ? tab.labelHi : tab.labelEn}
          </button>
        ))}
      </div>

      {/* Content 1: Substitutions */}
      {activeTab === 'substitutes' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {kitchenSubstitutions.map((sub) => {
            const title = language === 'ur' ? sub.missingItemUr : language === 'hi' ? sub.missingItemHi : sub.missingItemEn;
            const replacements = language === 'ur' ? sub.replacementsUr : language === 'hi' ? sub.replacementsHi : sub.replacementsEn;

            return (
              <div
                key={sub.id}
                className="bg-white rounded-3xl border border-stone-200/90 p-5 shadow-xs space-y-4 hover:border-amber-300 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                      If you do not have:
                    </span>
                    <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">
                      {title}
                    </h3>
                  </div>

                  <span className="text-xs font-semibold text-stone-400 bg-stone-50 px-2 py-1 rounded-lg">
                    {sub.bestFor}
                  </span>
                </div>

                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <span className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Best Alternatives (متبادل اشیاء):</span>
                  </span>

                  <ul className="space-y-2">
                    {replacements.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-stone-700 bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100">
                        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="font-medium leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Content 2: Unit Converter & Calculator */}
      {activeTab === 'converter' && (
        <div className="space-y-6">
          {/* Interactive Quick Calculator Card */}
          <div className="bg-amber-50/70 border border-amber-300/80 rounded-3xl p-6 shadow-xs max-w-xl space-y-4">
            <h3 className="font-extrabold text-stone-900 text-base flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-600" />
              <span>
                {language === 'ur' ? 'فوری پیمانہ کیلکولیٹر' : language === 'hi' ? 'त्वरित माप कैलकुलेटर' : 'Quick Interactive Kitchen Calculator'}
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Amount (مقدار)
                </label>
                <input
                  type="number"
                  min="0.1"
                  step="0.25"
                  value={calcInput}
                  onChange={(e) => setCalcInput(parseFloat(e.target.value) || 0)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-stone-300 text-sm font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Convert Type
                </label>
                <select
                  value={calcType}
                  onChange={(e) => setCalcType(e.target.value as any)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm font-semibold"
                >
                  <option value="cup_to_ml">Cups to Millilitres (ml)</option>
                  <option value="cup_atta">Cups of Atta to Grams</option>
                  <option value="cup_rice">Cups of Basmati Rice to Grams</option>
                  <option value="tbsp_to_ml">Tablespoons to ml & tsp</option>
                </select>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-amber-200 flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                Result:
              </span>
              <span className="text-lg font-black text-amber-900 font-mono">
                {calculateResult()}
              </span>
            </div>
          </div>

          {/* Reference Tables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl border border-stone-200 p-5 space-y-3">
              <h4 className="font-extrabold text-stone-900 text-sm border-b border-stone-100 pb-2">
                Volume Conversions (مائع پیمائش)
              </h4>
              <div className="space-y-2 text-xs">
                {conversionCategories.volume.map((v, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-stone-50">
                    <span className="font-bold text-stone-800">{v.from}</span>
                    <span className="font-mono text-stone-600 font-semibold">{v.to}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-stone-200 p-5 space-y-3">
              <h4 className="font-extrabold text-stone-900 text-sm border-b border-stone-100 pb-2">
                Standard Cup Weights (ایک کپ کا وزن)
              </h4>
              <div className="space-y-2 text-xs">
                {conversionCategories.weights.map((w, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-stone-50">
                    <span className="font-bold text-stone-800">{w.from}</span>
                    <span className="font-mono text-stone-600 font-semibold">{w.to}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content 3: Dum & Flame Guide */}
      {activeTab === 'temperatures' && (
        <div className="bg-white rounded-3xl border border-stone-200 p-6 space-y-4 max-w-2xl">
          <h3 className="font-extrabold text-stone-900 text-lg flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-600" />
            <span>Heat & Flame Master Guide (آنچ اور دم کا طریقہ)</span>
          </h3>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 space-y-1">
              <h4 className="font-extrabold text-amber-900 text-sm">
                Dum (Slow Steam Cooking) - دم پر رکھنا
              </h4>
              <p className="text-stone-700 leading-relaxed">
                Place a heavy flat griddle (Tawa) under your pot. Reduce flame to the absolute lowest setting. Seal the pot with a heavy lid or kitchen cloth (pouna). Never open the lid for the first 10-12 minutes to retain steam pressure.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-orange-50 border border-orange-200/80 space-y-1">
              <h4 className="font-extrabold text-orange-900 text-sm">
                Bhunai (Stir-Frying / Sautéing) - مصالحہ بھوننا
              </h4>
              <p className="text-stone-700 leading-relaxed">
                Cook on medium-high flame with continuous stirring. Bhunai is complete when the moisture has evaporated and oil beads release from the edges (تیل چھوڑ دے).
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
              <h4 className="font-extrabold text-stone-900 text-sm">
                Tadka / Baghaar - تڑکا
              </h4>
              <p className="text-stone-700 leading-relaxed">
                Heat pure desi ghee or oil until piping hot. Add cumin/garlic, let them crackle for 20-30 seconds until golden aromatic (never let garlic turn black), and immediately pour over hot daal and cover lid.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
