import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Cart from './components/Cart';
import LocationContact from './components/LocationContact';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Set document title and body direction
  useEffect(() => {
    document.title =
      language === 'ar'
        ? 'Space Iraq | قهوتك المفضلة في قلب تكريت'
        : 'Space Iraq | Your Favorite Coffee in Tikrit';
  }, [language]);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.menuItem.id === item.id);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.menuItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.menuItem.id === itemId);
      if (existing) {
        if (existing.quantity === 1) {
          return prev.filter((cartItem) => cartItem.menuItem.id !== itemId);
        }
        return prev.map((cartItem) =>
          cartItem.menuItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return prev;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const scrollToMenu = () => {
    document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      className="bg-[#080808] text-white min-h-screen selection:bg-[#ff9800] selection:text-black font-sans antialiased overflow-x-hidden"
    >
      {/* Immersive Space Hero Section */}
      <Hero
        language={language}
        setLanguage={setLanguage}
        scrollToMenu={scrollToMenu}
      />

      {/* Interactive Digital Menu Section */}
      <MenuSection
        language={language}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />

      {/* Location, Contact and Waze section */}
      <LocationContact language={language} />

      {/* Interactive Cart Side-drawer & Floating Trigger */}
      <Cart
        language={language}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
      />

      {/* Footer / Space Credits */}
      <footer className="py-12 bg-[#040404] border-t border-white/[0.05] text-center text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono">
            &copy; {new Date().getFullYear()} SPACE IRAQ. ALL SYSTEMS OPERATIONAL.
          </p>
          <p className="text-[11px]">
            {language === 'ar'
              ? 'صُمم بكل حب وشغف بالقهوة وعلم الفلك 🌌'
              : 'Designed with love, passion for coffee & astronomy 🌌'}
          </p>
        </div>
      </footer>
    </div>
  );
}
