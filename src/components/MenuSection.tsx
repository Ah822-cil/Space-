import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Plus, Minus, Star, Flame, Compass } from 'lucide-react';
import { MenuItem, CartItem } from '../types';
import { MENU_ITEMS, CATEGORIES } from '../data';

interface MenuSectionProps {
  language: 'ar' | 'en';
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
}

export default function MenuSection({ language, cart, addToCart, removeFromCart }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const text = {
    ar: {
      sectionTitle: 'القائمة الكونية',
      sectionSubtitle: 'اختر مشروبك المفضل وابنِ طلبك المخصص',
      searchPlaceholder: 'ابحث عن قهوة، مشروب بارد، حلويات...',
      noResults: 'لم نعثر على أي عنصر يطابق بحثك في هذا الكوكب.',
      priceSuffix: 'د.ع',
      addToOrder: 'إضافة للطلب',
      popular: 'الأكثر طلباً',
      new: 'جديد',
    },
    en: {
      sectionTitle: 'Cosmic Menu',
      sectionSubtitle: 'Choose your favorite drink and build your custom order',
      searchPlaceholder: 'Search for coffee, cold drinks, desserts...',
      noResults: 'No items matching your search were found on this planet.',
      priceSuffix: 'IQD',
      addToOrder: 'Add to Order',
      popular: 'Popular',
      new: 'New',
    }
  }[language];

  // Filter menu items based on category and search query
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.nameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.descriptionAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCartQuantity = (itemId: string) => {
    const cartItem = cart.find((item) => item.menuItem.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <section id="menu-section" className="py-24 px-4 bg-[#0a0a0a] text-white relative min-h-screen">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-4"
          >
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            <span>{language === 'ar' ? 'استكشف النكهات' : 'Explore Flavors'}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black mb-4 tracking-tight"
          >
            {text.sectionTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-lg mx-auto text-sm md:text-base"
          >
            {text.sectionSubtitle}
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-md mx-auto mb-12"
        >
          <div className={`absolute inset-y-0 ${language === 'ar' ? 'left-4' : 'right-4'} flex items-center pointer-events-none text-neutral-500`}>
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={text.searchPlaceholder}
            className={`w-full py-3.5 ${language === 'ar' ? 'pr-5 pl-12 text-right' : 'pl-5 pr-12 text-left'} bg-neutral-900 border border-neutral-800 rounded-2xl text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/60 transition-all duration-300 text-sm`}
          />
        </motion.div>

        {/* Categories Bar */}
        <div className="flex overflow-x-auto pb-4 mb-12 scrollbar-none gap-2 px-1 justify-start md:justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/10'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {language === 'ar' ? cat.nameAr : cat.nameEn}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const qty = getCartQuantity(item.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group relative bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.08] rounded-[32px] p-6.5 hover:border-[#ff9800]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                >
                  {/* Subtle hover overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff9800]/0 via-transparent to-[#ff9800]/[0.02] pointer-events-none group-hover:to-[#ff9800]/[0.04] transition-all duration-300" />

                  <div>
                    {/* Header badges and labels */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-1.5">
                        {item.isPopular && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-[10px] font-bold text-rose-400">
                            <Flame className="w-2.5 h-2.5 fill-rose-400" />
                            <span>{text.popular}</span>
                          </span>
                        )}
                        {item.isNew && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ff9800]/10 border border-[#ff9800]/20 text-[10px] font-bold text-[#ff9800]">
                            <span>{text.new}</span>
                          </span>
                        )}
                      </div>

                      <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase">
                        {item.category}
                      </span>
                    </div>

                    {/* Dotted menu item row style from Immersive UI */}
                    <div className={`flex items-baseline mb-1.5 gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <h3 className="text-lg font-extrabold group-hover:text-[#ff9800] transition-colors duration-300 text-white whitespace-nowrap">
                        {language === 'ar' ? item.nameAr : item.nameEn}
                      </h3>
                      <div className="flex-grow border-b border-dotted border-white/15 mx-1 align-middle" />
                      <span className="text-lg font-mono font-bold text-[#ff9800] whitespace-nowrap">
                        {item.price.toLocaleString()} <span className="text-[10px] font-sans font-normal text-neutral-400">{text.priceSuffix}</span>
                      </span>
                    </div>
                    
                    {/* English subtitle for Arabic mode and vice versa */}
                    <p className={`text-[11px] text-neutral-500 font-medium mb-4 tracking-wide ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {language === 'ar' ? item.nameEn : item.nameAr}
                    </p>

                    {/* Description */}
                    <p className={`text-xs md:text-sm text-neutral-400 leading-relaxed mb-6 line-clamp-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {language === 'ar' ? item.descriptionAr : item.descriptionEn}
                    </p>
                  </div>

                  {/* Rating stars & Add-to-cart controls */}
                  <div className="flex items-center justify-between border-t border-white/[0.05] pt-4.5 mt-auto">
                    <div className="flex items-center gap-0.5">
                      {[...Array(item.stars || 5)].map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 text-[#ff9800]/80 fill-[#ff9800]/80" />
                      ))}
                    </div>

                    <div className="flex items-center">
                      {qty > 0 ? (
                        <div className="flex items-center bg-neutral-950/80 border border-neutral-900 rounded-xl p-1 gap-3">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 hover:text-rose-400 transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-mono font-bold text-sm min-w-5 text-center text-white">{qty}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="p-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 hover:text-[#ff9800] transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item)}
                          className="px-4 py-2 text-xs font-extrabold bg-[#ff9800]/10 hover:bg-[#ff9800] text-[#ff9800] hover:text-black border border-[#ff9800]/30 hover:border-[#ff9800] rounded-xl transition-all duration-300 cursor-pointer"
                        >
                          {text.addToOrder}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 text-neutral-500 flex flex-col items-center justify-center"
          >
            <div className="text-4xl mb-4">🛸</div>
            <p className="text-sm max-w-sm leading-relaxed">{text.noResults}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
