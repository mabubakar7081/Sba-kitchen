import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ShoppingCart, 
  Trash2, 
  Refrigerator, 
  Package, 
  Flame, 
  Filter
} from 'lucide-react';
import { useKitchen } from '../context/KitchenContext';
import { Category, PantryItem } from '../types';

export const PantryView: React.FC = () => {
  const { 
    language, 
    pantryItems, 
    togglePantryItemStock, 
    updatePantryItem, 
    deletePantryItem, 
    addPantryItem, 
    addMultipleGroceryItems 
  } = useKitchen();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // New item form state
  const [newNameEn, setNewNameEn] = useState('');
  const [newNameUr, setNewNameUr] = useState('');
  const [newCategory, setNewCategory] = useState<Category>('vegetables');
  const [newQuantity, setNewQuantity] = useState<number>(1);
  const [newUnit, setNewUnit] = useState<string>('kg');
  const [newLocation, setNewLocation] = useState<'fridge' | 'pantry' | 'freezer' | 'spice_rack'>('pantry');
  const [newExpiry, setNewExpiry] = useState<string>('');

  const categories: { id: Category | 'all'; labelEn: string; labelUr: string; labelHi: string }[] = [
    { id: 'all', labelEn: 'All Items', labelUr: 'تمام اشیاء', labelHi: 'सभी वस्तुएं' },
    { id: 'vegetables', labelEn: 'Vegetables', labelUr: 'سبزیاں', labelHi: 'सब्जियां' },
    { id: 'dairy', labelEn: 'Dairy & Eggs', labelUr: 'ڈیری و انڈے', labelHi: 'डेयरी व अंडे' },
    { id: 'spices', labelEn: 'Spices & Masalas', labelUr: 'مصالحہ جات', labelHi: 'मसाले' },
    { id: 'grains_pulses', labelEn: 'Grains & Daals', labelUr: 'اناج اور دالیں', labelHi: 'अनाज व दालें' },
    { id: 'meat_poultry', labelEn: 'Meat & Poultry', labelUr: 'گوشت و چکن', labelHi: 'मीट व चिकन' },
    { id: 'oils_condiments', labelEn: 'Oils & Ghee', labelUr: 'تیل و گھی', labelHi: 'तेल व घी' },
    { id: 'bakery_snacks', labelEn: 'Tea, Sugar & Snacks', labelUr: 'چائے، چینی و اسنیکس', labelHi: 'चाय, चीनी व स्नैक्स' },
  ];

  // Filtering
  const filteredItems = pantryItems.filter(item => {
    const matchesSearch = 
      item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameUr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameHi.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || item.storageLocation === selectedLocation;

    return matchesSearch && matchesCategory && matchesLocation;
  });

  const outOfStockItems = pantryItems.filter(i => !i.inStock);
  const inStockCount = pantryItems.filter(i => i.inStock).length;

  const handleAddAllOutOfStockToGrocery = () => {
    if (outOfStockItems.length === 0) return;
    const itemsToAdd = outOfStockItems.map(item => ({
      name: `${item.nameEn} (${item.nameUr})`,
      amount: `${item.quantity || 1} ${item.unit}`,
      category: item.category,
      completed: false,
      notes: 'Auto-added from pantry restock alert'
    }));
    addMultipleGroceryItems(itemsToAdd);
    alert(
      language === 'ur' 
        ? `${itemsToAdd.length} اشیاء گروسری لسٹ میں شامل کر دی گئیں!` 
        : language === 'hi'
        ? `${itemsToAdd.length} वस्तुएं किराना सूची में जोड़ी गईं!`
        : `Added ${itemsToAdd.length} missing items to your Grocery List!`
    );
  };

  const handleCreateItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNameEn.trim()) return;

    addPantryItem({
      nameEn: newNameEn.trim(),
      nameUr: newNameUr.trim() || newNameEn.trim(),
      nameHi: newNameUr.trim() || newNameEn.trim(),
      category: newCategory,
      quantity: Number(newQuantity) || 1,
      unit: newUnit,
      inStock: true,
      minThreshold: 1,
      storageLocation: newLocation,
      expiryDate: newExpiry || undefined
    });

    setNewNameEn('');
    setNewNameUr('');
    setNewQuantity(1);
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Quick Metrics */}
      <div className="bg-linear-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-8 translate-y-8">
          <Refrigerator className="w-64 h-64" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-semibold">
              <Package className="w-3.5 h-3.5" />
              <span>
                {language === 'ur' ? 'کچن پینٹری اور فریج انوینٹری' : language === 'hi' ? 'रसोई पैंट्री व फ्रिज प्रबंधन' : 'Kitchen Inventory Tracker'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {language === 'ur' 
                ? 'باورچی خانے کی موجودہ اشیاء' 
                : language === 'hi'
                ? 'रसोई में क्या उपलब्ध है?'
                : 'Pantry & Fridge Stock'}
            </h2>
            <p className="text-amber-100 text-sm leading-relaxed">
              {language === 'ur'
                ? 'دیکھیں کہ فریج اور کیبنٹس میں کیا موجود ہے اور کیا ختم ہو رہا ہے۔ یہ ریسیپی سرچ کے ساتھ براہ راست منسلک ہے۔'
                : language === 'hi'
                ? 'देखें कि फ्रिज और डिब्बों में कौन-सी सामग्री है। खत्म होने वाली चीजें 1-क्लिक में राशन लिस्ट में जोड़ें।'
                : 'Track what spices, staples, vegetables, and dairy you have in stock. Your smart recipe engine uses this!'}
            </p>
          </div>

          {/* Quick Stat Cards */}
          <div className="flex items-center gap-3">
            <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-4 text-center min-w-[90px]">
              <div className="text-2xl sm:text-3xl font-black">{inStockCount}</div>
              <div className="text-xs text-amber-100 font-medium">
                {language === 'ur' ? 'دستیاب' : language === 'hi' ? 'उपलब्ध' : 'In Stock'}
              </div>
            </div>
            <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-4 text-center min-w-[90px]">
              <div className="text-2xl sm:text-3xl font-black text-rose-200">{outOfStockItems.length}</div>
              <div className="text-xs text-rose-100 font-medium">
                {language === 'ur' ? 'ختم شدہ' : language === 'hi' ? 'खत्म' : 'Out of Stock'}
              </div>
            </div>
          </div>
        </div>

        {/* Action bar inside banner */}
        <div className="mt-6 pt-5 border-t border-white/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 bg-white text-amber-900 hover:bg-amber-50 px-4 py-2 rounded-xl text-sm font-bold shadow-md transition-all active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>
                {language === 'ur' ? 'نئی چیز شامل کریں' : language === 'hi' ? 'नई सामग्री जोड़ें' : 'Add Ingredient'}
              </span>
            </button>

            {outOfStockItems.length > 0 && (
              <button
                onClick={handleAddAllOutOfStockToGrocery}
                className="flex items-center gap-2 bg-amber-900/60 hover:bg-amber-900/80 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold backdrop-blur-sm border border-amber-300/30 transition-all"
              >
                <ShoppingCart className="w-4 h-4 text-amber-300" />
                <span>
                  {language === 'ur' 
                    ? `ختم شدہ (${outOfStockItems.length}) گروسری میں ڈالیں` 
                    : language === 'hi'
                    ? `खत्म सामान (${outOfStockItems.length}) लिस्ट में डालें`
                    : `Add Out-of-Stock (${outOfStockItems.length}) to Grocery`}
                </span>
              </button>
            )}
          </div>

          {/* Quick Storage Location Filter */}
          <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-md p-1 rounded-xl text-xs font-medium">
            <span className="px-2 text-amber-200">
              {language === 'ur' ? 'جگہ:' : language === 'hi' ? 'स्थान:' : 'Zone:'}
            </span>
            {[
              { id: 'all', label: language === 'ur' ? 'سب' : language === 'hi' ? 'सभी' : 'All' },
              { id: 'fridge', label: language === 'ur' ? 'فریج' : language === 'hi' ? 'फ्रिज' : 'Fridge' },
              { id: 'pantry', label: language === 'ur' ? 'پینٹری' : language === 'hi' ? 'पैंट्री' : 'Pantry' },
              { id: 'spice_rack', label: language === 'ur' ? 'مصالحہ ریک' : language === 'hi' ? 'मसाला रैक' : 'Spices' },
            ].map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  selectedLocation === loc.id
                    ? 'bg-white text-stone-900 font-bold shadow-xs'
                    : 'text-amber-100 hover:text-white'
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Category Filter Bar */}
      <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder={
                language === 'ur' 
                  ? 'پیاز، ٹماٹر، زیرہ، چکن، دال یا کوئی بھی چیز تلاش کریں...' 
                  : language === 'hi'
                  ? 'प्याज, टमाटर, जीरा, चिकन, दाल या सामग्री खोजें...'
                  : 'Search pantry items (e.g., Onions, Cumin, Chicken)...'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 hover:bg-stone-100/70 focus:bg-white rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 transition-all"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs text-stone-500 font-medium">
              {filteredItems.length} {language === 'ur' ? 'اشیاء' : language === 'hi' ? 'आइटम' : 'items'}
            </span>
          </div>
        </div>

        {/* Categories Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-stone-400 shrink-0 ml-1" />
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const label = language === 'ur' ? cat.labelUr : language === 'hi' ? cat.labelHi : cat.labelEn;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-amber-600 text-white font-semibold shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200/70'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredItems.map((item) => {
          const isExpiringSoon = item.expiryDate && new Date(item.expiryDate) < new Date(Date.now() + 5 * 86400000);
          return (
            <div
              key={item.id}
              className={`rounded-2xl border p-4.5 transition-all flex flex-col justify-between ${
                item.inStock
                  ? 'bg-white border-stone-200/90 shadow-2xs hover:shadow-md hover:border-amber-300'
                  : 'bg-stone-50/80 border-stone-200 opacity-70'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-stone-900 text-base leading-tight">
                      {language === 'ur' ? item.nameUr : language === 'hi' ? item.nameHi : item.nameEn}
                    </h3>
                    <p className="text-xs text-stone-500 font-medium mt-0.5">
                      {item.nameEn}
                    </p>
                  </div>

                  {/* Stock Status Badge */}
                  <button
                    onClick={() => togglePantryItemStock(item.id)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                      item.inStock
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                        : 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100'
                    }`}
                    title="Click to toggle in/out of stock"
                  >
                    {item.inStock ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{language === 'ur' ? 'دستیاب' : language === 'hi' ? 'उपलब्ध' : 'In Stock'}</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>{language === 'ur' ? 'ختم' : language === 'hi' ? 'खत्म' : 'Empty'}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Badges: Location & Expiry */}
                <div className="flex flex-wrap items-center gap-1.5 mt-3">
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 capitalize">
                    {item.storageLocation.replace('_', ' ')}
                  </span>

                  {item.expiryDate && (
                    <span
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1 ${
                        isExpiringSoon
                          ? 'bg-amber-100 text-amber-800 font-semibold'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {isExpiringSoon && <AlertTriangle className="w-3 h-3 text-amber-600" />}
                      <span>Exp: {item.expiryDate}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Quantity Stepper & Controls */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-stone-100/80 px-2 py-1 rounded-xl">
                  <button
                    onClick={() => {
                      const nextQ = Math.max(0, item.quantity - 1);
                      updatePantryItem(item.id, { quantity: nextQ, inStock: nextQ > 0 });
                    }}
                    className="w-6 h-6 rounded-lg bg-white text-stone-700 font-bold hover:bg-stone-200 flex items-center justify-center text-xs shadow-2xs"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-stone-800 px-1">
                    {item.quantity} {item.unit}
                  </span>
                  <button
                    onClick={() => {
                      const nextQ = item.quantity + 1;
                      updatePantryItem(item.id, { quantity: nextQ, inStock: true });
                    }}
                    className="w-6 h-6 rounded-lg bg-white text-stone-700 font-bold hover:bg-stone-200 flex items-center justify-center text-xs shadow-2xs"
                  >
                    +
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  {!item.inStock && (
                    <button
                      onClick={() => {
                        addMultipleGroceryItems([{
                          name: `${item.nameEn} (${item.nameUr})`,
                          amount: `1 ${item.unit}`,
                          category: item.category,
                          completed: false,
                          notes: 'From pantry'
                        }]);
                        alert(`Added ${item.nameEn} to grocery list!`);
                      }}
                      className="p-1.5 text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
                      title="Add to Grocery List"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (confirm(`Remove ${item.nameEn} from pantry?`)) {
                        deletePantryItem(item.id);
                      }
                    }}
                    className="p-1.5 text-stone-400 hover:text-rose-600 rounded-lg transition-colors"
                    title="Delete item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-stone-300 p-8">
          <Package className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <p className="text-stone-700 font-semibold text-lg">
            {language === 'ur' ? 'کوئی چیز نہیں ملی' : language === 'hi' ? 'कोई सामग्री नहीं मिली' : 'No pantry items match your filter'}
          </p>
          <p className="text-sm text-stone-500 mt-1">
            {language === 'ur' ? 'سرچ تبدیل کریں یا نیا آئٹم شامل کریں۔' : language === 'hi' ? 'खोज बदलें या नई सामग्री जोड़ें।' : 'Try another search or add a new custom item.'}
          </p>
        </div>
      )}

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="text-lg font-bold text-stone-900">
                {language === 'ur' ? 'نیا کچن آئٹم شامل کریں' : language === 'hi' ? 'नई सामग्री जोड़ें' : 'Add New Pantry Item'}
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateItem} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Item Name (English) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Green Cardamom, Fenugreek, Eggs"
                  value={newNameEn}
                  onChange={(e) => setNewNameEn(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-amber-500/50 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  نام اردو / हिन्दी (Urdu or Hindi name)
                </label>
                <input
                  type="text"
                  placeholder="مثال: الائچی، میتھی، مکھن"
                  value={newNameUr}
                  onChange={(e) => setNewNameUr(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-amber-500/50 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as Category)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm bg-white"
                  >
                    <option value="vegetables">Vegetables</option>
                    <option value="dairy">Dairy & Eggs</option>
                    <option value="spices">Spices & Masalas</option>
                    <option value="grains_pulses">Grains & Daals</option>
                    <option value="meat_poultry">Meat & Poultry</option>
                    <option value="oils_condiments">Oils & Ghee</option>
                    <option value="bakery_snacks">Tea, Sugar & Snacks</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Storage Location
                  </label>
                  <select
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value as 'fridge' | 'pantry' | 'freezer' | 'spice_rack')}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm bg-white"
                  >
                    <option value="pantry">Pantry Cabinet</option>
                    <option value="fridge">Refrigerator</option>
                    <option value="freezer">Freezer</option>
                    <option value="spice_rack">Spice Rack / Masala Dabba</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Unit
                  </label>
                  <select
                    value={newUnit}
                    onChange={(e) => setNewUnit(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm bg-white"
                  >
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="L">L</option>
                    <option value="ml">ml</option>
                    <option value="pcs">pcs</option>
                    <option value="bunch">bunch</option>
                    <option value="cups">cups</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Expiry Date (Optional)
                </label>
                <input
                  type="date"
                  value={newExpiry}
                  onChange={(e) => setNewExpiry(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-stone-600 hover:bg-stone-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-sm font-bold bg-amber-600 text-white hover:bg-amber-700 shadow-md"
                >
                  Save Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
