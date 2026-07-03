import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Trash2, Send, MessageSquare, Clipboard } from 'lucide-react';
import { CartItem } from '../types';
import { WHATSAPP_NUMBER } from '../data';

interface CartProps {
  language: 'ar' | 'en';
  cart: CartItem[];
  addToCart: (item: any) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Cart({
  language,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  isOpen,
  setIsOpen
}: CartProps) {
  const [notes, setNotes] = useState('');

  const text = {
    ar: {
      cartTitle: 'سلتك الكونية',
      emptyCart: 'سلتك فارغة حالياً. أضف بعض مشروبات الفضاء لتبدأ رحلتك!',
      notesPlaceholder: 'أضف أي ملاحظات خاصة (مثال: سكر خفيف، حليب لوز، زيادة ثلج...)',
      total: 'المجموع الكلي',
      checkoutBtn: 'إرسال الطلب عبر واتساب',
      clearAll: 'مسح الكل',
      priceSuffix: 'د.ع',
      itemCount: 'عناصر',
      notesLabel: 'ملاحظات خاصة بالطلب',
      currency: 'د.ع'
    },
    en: {
      cartTitle: 'Your Celestial Basket',
      emptyCart: 'Your basket is empty. Add some space brews to start your journey!',
      notesPlaceholder: 'Add any special notes (e.g., less sugar, extra ice, almond milk...)',
      total: 'Total Amount',
      checkoutBtn: 'Send Order via WhatsApp',
      clearAll: 'Clear All',
      priceSuffix: 'IQD',
      itemCount: 'items',
      notesLabel: 'Special Instructions',
      currency: 'IQD'
    }
  }[language];

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);

  // Generate beautiful WhatsApp message and redirect
  const handleCheckout = () => {
    if (cart.length === 0) return;

    let message = `*طلب جديد من موقع Space Iraq الكوني 🚀*\n\n`;
    message += `*تفاصيل الطلب:*\n`;
    
    cart.forEach((item) => {
      const name = language === 'ar' ? item.menuItem.nameAr : item.menuItem.nameEn;
      const priceFormatted = (item.menuItem.price * item.quantity).toLocaleString();
      message += `• ${name} × ${item.quantity} (${priceFormatted} د.ع)\n`;
    });

    if (notes.trim()) {
      message += `\n*ملاحظات خاصة:*\n✍️ ${notes.trim()}\n`;
    }

    message += `\n*المجموع الكلي:* ${totalPrice.toLocaleString()} د.ع\n`;
    message += `___________________\n`;
    message += `*شكراً لاختياركم Space Iraq! طاب يومكم 🌌*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating Cart Button (Visible when cart has items) */}
      <AnimatePresence>
        {totalItems > 0 && !isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 bg-[#ff9800] hover:bg-[#ffa726] text-black p-4 rounded-2xl shadow-xl shadow-[#ff9800]/30 flex items-center gap-2 cursor-pointer border border-[#ff9800]/20 font-bold"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="font-bold text-sm">
              {totalPrice.toLocaleString()} {text.currency}
            </span>
            <span className="absolute -top-2 -left-2 bg-rose-500 text-white font-mono text-xs font-bold w-5.5 h-5.5 rounded-full flex items-center justify-center border-2 border-[#080808] animate-pulse">
              {totalItems}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cart Drawer Backing Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/75 z-40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Cart Drawer Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: language === 'ar' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: language === 'ar' ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className={`fixed top-0 bottom-0 ${language === 'ar' ? 'left-0' : 'right-0'} w-full sm:w-[450px] bg-[#080808]/95 backdrop-blur-[30px] border-${language === 'ar' ? 'r' : 'l'} border-white/10 z-50 shadow-2xl flex flex-col justify-between`}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-[#ff9800]/10 text-[#ff9800] rounded-xl border border-[#ff9800]/20">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-white">{text.cartTitle}</h3>
                  <p className="text-xs text-neutral-400 font-mono">
                    {totalItems} {text.itemCount}
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-neutral-500">
                  <span className="text-4xl mb-3">🛸</span>
                  <p className="text-sm max-w-xs leading-relaxed">{text.emptyCart}</p>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
                      {language === 'ar' ? 'قائمة الطلبات' : 'Order Items'}
                    </span>
                    <button
                      onClick={clearCart}
                      className="text-xs text-rose-500 hover:text-rose-400 flex items-center gap-1 cursor-pointer font-bold"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>{text.clearAll}</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {cart.map((item) => (
                      <motion.div
                        layout
                        key={item.menuItem.id}
                        className="bg-white/[0.03] border border-white/[0.08] p-4 rounded-xl flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-bold text-sm text-neutral-200 truncate ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                            {language === 'ar' ? item.menuItem.nameAr : item.menuItem.nameEn}
                          </h4>
                          <span className={`text-[11px] text-[#ff9800] block ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                            {item.menuItem.price.toLocaleString()} × {item.quantity}
                          </span>
                        </div>

                        {/* Adjust qty buttons */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromCart(item.menuItem.id)}
                            className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-neutral-400 hover:text-rose-400 hover:bg-white/10 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-mono font-bold text-sm min-w-4 text-center text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => addToCart(item.menuItem)}
                            className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-neutral-400 hover:text-[#ff9800] hover:bg-white/10 transition-colors cursor-pointer"
                          >
                            <span className="text-sm font-bold">+</span>
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Notes Field */}
                  <div className="border-t border-white/[0.05] pt-5 mt-6">
                    <label className={`block text-xs font-bold text-neutral-400 mb-2 flex items-center gap-1 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <Clipboard className="w-3.5 h-3.5 text-[#ff9800]" />
                      <span>{text.notesLabel}</span>
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={text.notesPlaceholder}
                      rows={3}
                      className={`w-full p-3 bg-white/[0.02] border border-white/[0.08] rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff9800]/50 resize-none ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Footer containing totals and CTA */}
            {cart.length > 0 && (
              <div className="p-6 bg-neutral-950/40 border-t border-white/[0.05] space-y-4">
                <div className="flex justify-between items-center text-neutral-300">
                  <span className="text-sm font-bold">{text.total}</span>
                  <span className="text-xl font-extrabold text-[#ff9800] font-mono">
                    {totalPrice.toLocaleString()} {text.priceSuffix}
                  </span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-black/25" />
                  <span>{text.checkoutBtn}</span>
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
