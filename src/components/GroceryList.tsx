import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Plus, 
  Trash2, 
  Check, 
  Share2, 
  Copy, 
  CheckCircle2, 
  Sparkles,
  Printer
} from 'lucide-react';
import { useKitchen } from '../context/KitchenContext';
import { Category } from '../types';

export const GroceryList: React.FC = () => {
  const { 
    language, 
    groceryItems, 
    addGroceryItem, 
    toggleGroceryItem, 
    removeGroceryItem, 
    clearCompletedGrocery 
  } = useKitchen();

  const [newItemName, setNewItemName] = useState('');
  const [newItemAmount, setNewItemAmount] = useState('');
  const [newItemCategory, setNewItemCategory] = useState<Category | 'other'>('vegetables');
  const [copied, setCopied] = useState(false);

  const pendingItems = groceryItems.filter(i => !i.completed);
  const completedItems = groceryItems.filter(i => i.completed);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    addGroceryItem({
      name: newItemName.trim(),
      amount: newItemAmount.trim() || '1 kg/pcs',
      category: newItemCategory,
      completed: false
    });

    setNewItemName('');
    setNewItemAmount('');
  };

  const generateShareText = () => {
    const title = language === 'ur' 
      ? '🛒 *باورچی خانہ سودا سلف فہرست*' 
      : language === 'hi'
      ? '🛒 *रसोई किराना लिस्ट*'
      : '🛒 *Kitchen Grocery List*';

    const itemsText = pendingItems.map((item, idx) => `${idx + 1}. ${item.name} (${item.amount})`).join('\n');
    return `${title}\n\n${itemsText}\n\nSent via SBA Kitchen`;
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(generateShareText());
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyClipboard = () => {
    navigator.clipboard.writeText(generateShareText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-linear-to-r from-amber-700 via-orange-600 to-amber-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>
              {language === 'ur' ? 'سودا سلف / راشن لسٹ' : language === 'hi' ? 'राशन / किराना लिस्ट' : 'Smart Grocery List'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {language === 'ur' ? 'کچن سودا سلف و خریداری' : language === 'hi' ? 'रसोई खरीदारी सूची' : 'Kitchen Shopping Organizer'}
          </h2>
          <p className="text-amber-100 text-sm leading-relaxed">
            {language === 'ur'
              ? 'پینٹری سے ختم ہونے والی اشیاء اور ریسیپیز کے درکار مصالحے خودکار طور پر یہاں جمع ہوتے ہیں۔ 1-کلک میں واٹس ایپ پر شیئر کریں۔'
              : language === 'hi'
              ? 'पैंट्री की खत्म चीजें और रेसिपीज की जरूरी सामग्री सीधे यहां जुड़ती हैं। WhatsApp पर आसानी से भेजें।'
              : 'Add missing ingredients directly from the pantry and recipe matcher. Share with family over WhatsApp with 1 tap.'}
          </p>
        </div>

        {/* Share buttons */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={handleShareWhatsApp}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-2xl text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <Share2 className="w-4 h-4" />
            <span>{language === 'ur' ? 'واٹس ایپ پر بھیجیں' : language === 'hi' ? 'WhatsApp भेजें' : 'WhatsApp'}</span>
          </button>

          <button
            onClick={handleCopyClipboard}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-xs text-white font-bold px-4 py-2.5 rounded-2xl text-xs sm:text-sm border border-white/30 transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied!' : (language === 'ur' ? 'کاپی کریں' : language === 'hi' ? 'कॉपी करें' : 'Copy List')}</span>
          </button>
        </div>
      </div>

      {/* Quick Add Form */}
      <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs">
        <form onSubmit={handleAddItem} className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 w-full">
            <input
              type="text"
              required
              placeholder={
                language === 'ur'
                  ? 'مثال: ہرا دھنیا، پیاز 2 کلو، دیسی گھی...'
                  : language === 'hi'
                  ? 'उदाहरण: हरा धनिया, 2 किलो प्याज, देसी घी...'
                  : 'Add item (e.g. Fresh Coriander, 2kg Rice, Desi Ghee)...'
              }
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              className="w-full px-4 py-2.5 bg-stone-50 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/50"
            />
          </div>

          <div className="w-full sm:w-36">
            <input
              type="text"
              placeholder="Qty (e.g. 1 kg)"
              value={newItemAmount}
              onChange={(e) => setNewItemAmount(e.target.value)}
              className="w-full px-3 py-2.5 bg-stone-50 rounded-xl border border-stone-200 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>{language === 'ur' ? 'شامل کریں' : language === 'hi' ? 'जोड़ें' : 'Add'}</span>
          </button>
        </form>
      </div>

      {/* Grocery Items List */}
      <div className="space-y-4">
        {/* Pending Items */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <h3 className="font-extrabold text-stone-900 text-base flex items-center gap-2">
              <span>{language === 'ur' ? 'خریدنے والی اشیاء' : language === 'hi' ? 'खरीदने की वस्तुएं' : 'To Buy'}</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                {pendingItems.length}
              </span>
            </h3>
          </div>

          {pendingItems.length > 0 ? (
            <div className="space-y-2">
              {pendingItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleGroceryItem(item.id)}
                  className="flex items-center justify-between p-3 rounded-2xl border border-stone-200/80 hover:border-amber-400 bg-stone-50/50 hover:bg-amber-50/40 cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-lg border-2 border-stone-300 group-hover:border-amber-600 flex items-center justify-center transition-colors bg-white">
                      {item.completed && <Check className="w-3.5 h-3.5 text-amber-600 stroke-[3]" />}
                    </div>
                    <div>
                      <span className="font-bold text-stone-800 text-sm">
                        {item.name}
                      </span>
                      {item.notes && (
                        <p className="text-[11px] text-stone-400 font-medium">
                          {item.notes}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-extrabold text-stone-600 bg-white px-2.5 py-1 rounded-lg border border-stone-200">
                      {item.amount}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeGroceryItem(item.id);
                      }}
                      className="text-stone-300 hover:text-rose-600 p-1 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-stone-400 text-xs">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-1.5 opacity-80" />
              <p className="font-bold text-stone-700 text-sm">All caught up!</p>
              <p>Everything on your grocery list is bought or pantry is fully stocked.</p>
            </div>
          )}
        </div>

        {/* Completed Items */}
        {completedItems.length > 0 && (
          <div className="bg-stone-50/80 rounded-3xl border border-stone-200 p-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200">
              <h3 className="font-bold text-stone-600 text-xs uppercase tracking-wider flex items-center gap-2">
                <span>{language === 'ur' ? 'خریدی جا چکی اشیاء' : language === 'hi' ? 'खरीदी गई वस्तुएं' : 'Completed Items'}</span>
                <span>({completedItems.length})</span>
              </h3>

              <button
                onClick={clearCompletedGrocery}
                className="text-xs font-bold text-rose-600 hover:underline"
              >
                {language === 'ur' ? 'مکمل اشیاء صاف کریں' : language === 'hi' ? 'खरीदी गई वस्तुएं हटाएं' : 'Clear Completed'}
              </button>
            </div>

            <div className="space-y-1.5">
              {completedItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleGroceryItem(item.id)}
                  className="flex items-center justify-between p-2.5 rounded-xl border border-stone-200/60 bg-white/60 opacity-60 hover:opacity-100 cursor-pointer transition-all line-through text-stone-500 text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-md bg-emerald-500 text-white flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item.name}</span>
                  </div>
                  <span>{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
