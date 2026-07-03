import { motion } from 'motion/react';
import { Clock, MapPin, MessageSquare, Compass, Moon, Star } from 'lucide-react';
import { WAZE_LINK, WHATSAPP_LINK } from '../data';
import spaceCoffeeHero from '../assets/images/space_coffee_hero_1783067620300.jpg';

interface HeroProps {
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
  scrollToMenu: () => void;
}

export default function Hero({ language, setLanguage, scrollToMenu }: HeroProps) {
  // Calculate current status in Iraq (UTC+3)
  const isShopOpen = () => {
    const d = new Date();
    // Convert to Iraq local hour (UTC+3)
    const iraqHour = (d.getUTCHours() + 3) % 24;
    return iraqHour >= 8 || iraqHour < 1; // Open 8:00 AM to 1:00 AM
  };

  const open = isShopOpen();

  const text = {
    ar: {
      title: 'Space Iraq',
      subtitle: 'قهوتك المفضلة في قلب تكريت',
      description: 'انطلق في رحلة مذاق كونية فريدة. ندمج شغف القهوة المختصة بأجواء الفضاء الساحرة في وسط مدينة تكريت.',
      wazeBtn: 'الموقع على Waze',
      whatsappBtn: 'اطلب عبر واتساب',
      menuBtn: 'تصفح القائمة الكونية',
      openNow: 'مفتوح الآن لاستقبالكم 🟢',
      closedNow: 'مغلق حالياً 🔴',
      hoursLabel: 'أوقات العمل: من 8:00 صباحاً حتى 1:00 بعد منتصف الليل',
      switchLang: 'English'
    },
    en: {
      title: 'Space Iraq',
      subtitle: 'Your Favorite Coffee in the Heart of Tikrit',
      description: 'Embark on a unique cosmic flavor journey. We fuse the passion for specialty coffee with enchanting space vibes in downtown Tikrit.',
      wazeBtn: 'Location on Waze',
      whatsappBtn: 'Order on WhatsApp',
      menuBtn: 'Explore Cosmic Menu',
      openNow: 'Open Now 🟢',
      closedNow: 'Closed Now 🔴',
      hoursLabel: 'Hours: 8:00 AM – 1:00 AM Daily',
      switchLang: 'العربية'
    }
  }[language];

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-[#080808] text-white px-4 py-16">
      {/* Immersive UI Atmosphere & Stars Background */}
      <div className="atmosphere" />
      <div className="abstract-circle animate-orbit-rotate" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Language Toggle & Header Controls */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20 max-w-7xl mx-auto w-full px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="p-2.5 rounded-full bg-[#ff9800]/10 border border-[#ff9800]/20 backdrop-blur-md text-[#ff9800]">
            <Compass className="w-5 h-5 animate-spin-slow" />
          </div>
          <span className="font-mono text-xs tracking-widest text-[#ff9800] font-bold">SPACE IRAQ</span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
          className="px-4 py-2 text-xs font-bold rounded-full bg-neutral-900/90 border border-neutral-800 hover:border-[#ff9800] hover:text-[#ff9800] transition-all duration-300 backdrop-blur-md cursor-pointer"
        >
          {text.switchLang}
        </motion.button>
      </div>

      {/* Main Hero Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 mt-8">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-right flex-1">
          {/* Shop Status Badge (Styled as Immersive UI Location Badge) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-[#ff9800]/10 border border-[#ff9800]/30 text-xs font-bold text-[#ff9800] mb-6 backdrop-blur-md"
          >
            <span>{language === 'ar' ? 'تكريت، العراق' : 'Tikrit, Iraq'}</span>
            <span className="opacity-40">|</span>
            <span className={`w-1.5 h-1.5 rounded-full ${open ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
            <span className={open ? 'text-emerald-400' : 'text-rose-400'}>{open ? text.openNow : text.closedNow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-[0.9] mb-4 text-transparent bg-clip-text bg-gradient-to-l from-[#ff9800] via-amber-300 to-white uppercase"
            style={{ letterSpacing: '-2px' }}
          >
            SPACE<br/>IRAQ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-neutral-300 font-light mb-6"
          >
            {text.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg"
          >
            {text.description}
          </motion.p>

          {/* Call to Actions (Using Immersive UI Button Patterns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* Scroll to Menu (Primary Button) */}
            <button
              onClick={scrollToMenu}
              className="px-8 py-4 bg-[#ff9800] hover:bg-[#ffa726] text-black font-extrabold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#ff9800]/30 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>{text.menuBtn}</span>
            </button>

            {/* Waze Link (Secondary Button) */}
            <a
              href={WAZE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-transparent border border-neutral-800 hover:border-[#ff9800]/50 text-neutral-300 hover:text-white font-bold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:bg-neutral-900/60 transform hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4 text-[#ff9800]" />
              <span>{text.wazeBtn}</span>
            </a>

            {/* WhatsApp Link (Secondary Button) */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-transparent border border-neutral-800 hover:border-emerald-500/50 text-neutral-300 hover:text-white font-bold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:bg-neutral-900/60 transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>{text.whatsappBtn}</span>
            </a>
          </motion.div>
        </div>

        {/* Floating Space Coffee Cup Image */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-3xl overflow-hidden p-[1px] bg-gradient-to-tr from-[#ff9800]/25 to-purple-500/25 shadow-2xl shadow-[#ff9800]/10"
          >
            {/* Continuous floating/bobbing animation */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotate: [-1, 1, -1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-full h-full rounded-3xl overflow-hidden bg-[#0c0c0c] flex items-center justify-center"
            >
              <img
                src={spaceCoffeeHero}
                alt="Space Iraq Celestial Coffee"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Cosmic Ring glow behind */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff9800]/20 via-purple-500/20 to-transparent blur-2xl -z-10 pointer-events-none rounded-full" />
          </motion.div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-2 bg-neutral-950/90 border border-neutral-900 px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-lg backdrop-blur-md text-[11px] font-mono"
          >
            <Star className="w-4 h-4 text-[#ff9800] fill-[#ff9800]" />
            <div className="flex flex-col">
              <span className="text-[#ff9800] font-bold font-sans">تذوق المجرة</span>
              <span className="text-neutral-400 text-[9px]">Celestial Brew</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -bottom-4 -left-2 bg-neutral-950/90 border border-neutral-900 px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-lg backdrop-blur-md text-[11px]"
          >
            <Moon className="w-4 h-4 text-purple-400 fill-purple-400/20" />
            <div className="flex flex-col text-right">
              <span className="text-purple-400 font-bold font-sans">تكريت، العراق</span>
              <span className="text-neutral-400 text-[9px] font-mono">Tikrit, Iraq</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Elegant scrolling down guide */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={scrollToMenu}
      >
        <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
          {language === 'ar' ? 'اسحب لأسفل لاستكشاف القائمة' : 'Scroll down to explore'}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1.5 h-1.5 rounded-full bg-[#ff9800]"
        />
      </motion.div>
    </section>
  );
}
