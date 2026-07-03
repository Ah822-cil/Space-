import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Clock, Check, Copy, Compass, Navigation } from 'lucide-react';
import { WAZE_LINK, WHATSAPP_LINK } from '../data';

interface LocationContactProps {
  language: 'ar' | 'en';
}

export default function LocationContact({ language }: LocationContactProps) {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const text = {
    ar: {
      title: 'محطتنا في الكون',
      subtitle: 'تفضل بزيارتنا واستمتع بتجربة فريدة في قلب تكريت',
      addressTitle: 'العنوان الفلكي',
      addressText: 'العراق، تكريت، شارع الأطباء (قرب المحافظة القديمة)',
      phoneTitle: 'الاتصال الكوني',
      phoneText: '0774 408 8137',
      hoursTitle: 'نافذة التشغيل',
      hoursText: 'يومياً من الساعة 8:00 صباحاً حتى 1:00 بعد منتصف الليل',
      wazeBtn: 'توجيه عبر Waze',
      instaBtn: 'حساب الإنستغرام',
      copied: 'تم النسخ!',
      copy: 'نسخ الرقم'
    },
    en: {
      title: 'Our Cosmic Station',
      subtitle: 'Visit us and enjoy a unique experience in the heart of Tikrit',
      addressTitle: 'Cosmic Address',
      addressText: 'Iraq, Tikrit, Al-Atibaa Street (Near Old Governorate)',
      phoneTitle: 'Cosmic Signal',
      phoneText: '0774 408 8137',
      hoursTitle: 'Launch Window',
      hoursText: 'Daily: 8:00 AM – 1:00 AM',
      wazeBtn: 'Navigate via Waze',
      instaBtn: 'Instagram Feed',
      copied: 'Copied!',
      copy: 'Copy Number'
    }
  }[language];

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('07744088137');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact-section" className="py-24 px-4 bg-[#080808] text-white relative">
      {/* Visual background decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff9800]/[0.02] rounded-full blur-[160px]" />
      </div>

      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff9800]/10 border border-[#ff9800]/20 text-xs font-semibold text-[#ff9800] mb-4"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'الزيارة والتواصل' : 'Visit & Contact'}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black mb-4 tracking-tight"
          >
            {text.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-lg mx-auto text-sm md:text-base"
          >
            {text.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Details Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Address Card */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className={`p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-[20px] shadow-lg flex gap-4 ${language === 'ar' ? 'flex-row-reverse text-right' : 'text-left'}`}
            >
              <div className="p-3.5 rounded-xl bg-[#ff9800]/10 text-[#ff9800] h-fit">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-neutral-200 text-sm mb-1.5">{text.addressTitle}</h4>
                <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">{text.addressText}</p>
              </div>
            </motion.div>

            {/* Operating Hours Card */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className={`p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-[20px] shadow-lg flex gap-4 ${language === 'ar' ? 'flex-row-reverse text-right' : 'text-left'}`}
            >
              <div className="p-3.5 rounded-xl bg-purple-500/10 text-purple-400 h-fit">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-neutral-200 text-sm mb-1.5">{text.hoursTitle}</h4>
                <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">{text.hoursText}</p>
              </div>
            </motion.div>

            {/* Phone Call / Signals Card */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className={`p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-[20px] shadow-lg flex gap-4 ${language === 'ar' ? 'flex-row-reverse text-right' : 'text-left'}`}
            >
              <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 h-fit">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-extrabold text-neutral-200 text-sm mb-1.5">{text.phoneTitle}</h4>
                <p className="text-[#ff9800] font-mono font-bold text-lg mb-3">{text.phoneText}</p>
                <div className={`flex gap-2 ${language === 'ar' ? 'justify-start flex-row-reverse' : 'justify-start'}`}>
                  <button
                    onClick={handleCopyPhone}
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-bold text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone ? text.copied : text.copy}</span>
                  </button>
                  <a
                    href="tel:07744088137"
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-bold text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{language === 'ar' ? 'اتصال مباشر' : 'Call Direct'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map/Navigation Block */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-[20px] shadow-lg">
            <div className={`flex flex-col h-full justify-between ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <div className="mb-6">
                <div className="p-3 bg-neutral-950/80 border border-neutral-900 rounded-2xl w-fit mb-4">
                  <Navigation className="w-6 h-6 text-[#ff9800] animate-pulse" />
                </div>
                <h3 className="text-xl font-black text-white mb-2">
                  {language === 'ar' ? 'انطلق عبر أنظمة التوجيه' : 'Launch Navigation System'}
                </h3>
                <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                  {language === 'ar' 
                    ? 'اضغط على زر Waze للتوجيه المباشر والدقيق إلى المقهى، أو تصفح حسابنا على إنستغرام لمتابعة تفاصيل الرحلة اليومية.'
                    : 'Click Waze to navigate directly to our station, or check our Instagram to follow our daily celestial logs.'
                  }
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full mt-auto">
                <a
                  href={WAZE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 bg-[#ff9800] hover:bg-[#ffa726] text-black font-extrabold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#ff9800]/30 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{text.wazeBtn}</span>
                </a>

                <a
                  href="https://www.instagram.com/space_iraq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 bg-transparent border border-white/10 hover:border-pink-500/50 text-neutral-300 hover:text-white font-bold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white/[0.02] transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>{text.instaBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
