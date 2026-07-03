import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Espresso & Classics
  {
    id: 'espresso',
    nameAr: 'إسبريسو ثنائي الأبعاد',
    nameEn: 'Double Espresso',
    price: 2000,
    category: 'espresso',
    descriptionAr: 'جرعة مزدوجة مركزة من حبوب البن الفاخرة المحمصة بعناية.',
    descriptionEn: 'Double shot of rich, dark roasted premium coffee beans.',
    stars: 5,
    isPopular: true
  },
  {
    id: 'americano',
    nameAr: 'أميريكانو الثقب الأسود',
    nameEn: 'Black Hole Americano',
    price: 2500,
    category: 'espresso',
    descriptionAr: 'جرعة إسبريسو مزدوجة مضافة إلى الماء الساخن لنكهة عميقة وممتدة.',
    descriptionEn: 'Double shot of espresso diluted with hot water for a deep, extended flavor.',
    stars: 4
  },
  {
    id: 'cortado',
    nameAr: 'كورتادو النجم النيوتروني',
    nameEn: 'Neutron Cortado',
    price: 3000,
    category: 'espresso',
    descriptionAr: 'جرعة إسبريسو متوازنة تماماً مع كمية مساوية من الحليب المبخر الغني.',
    descriptionEn: 'Perfectly balanced double shot of espresso with equal parts of silky steamed milk.',
    stars: 5,
    isNew: true
  },

  // Milk-Based
  {
    id: 'cappuccino',
    nameAr: 'كابتشينو سديمي',
    nameEn: 'Nebula Cappuccino',
    price: 3500,
    category: 'milk_based',
    descriptionAr: 'إسبريسو غني يعلوه طبقة سميكة وكثيفة من رغوة الحليب المبخر الفاخر.',
    descriptionEn: 'Rich espresso topped with a thick, velvety layer of aerated milk foam.',
    stars: 5,
    isPopular: true
  },
  {
    id: 'latte',
    nameAr: 'لاتيه كوكبي ممتد',
    nameEn: 'Planetary Latte',
    price: 3500,
    category: 'milk_based',
    descriptionAr: 'إسبريسو كلاسيكي مع الحليب المبخر الدافئ وطبقة خفيفة من الرغوة الناعمة.',
    descriptionEn: 'Classic espresso combined with warm steamed milk and a thin layer of microfoam.',
    stars: 4
  },
  {
    id: 'spanish_latte',
    nameAr: 'سبانيش لاتيه فضائي',
    nameEn: 'Cosmic Spanish Latte',
    price: 4500,
    category: 'milk_based',
    descriptionAr: 'مزيج فاخر من الإسبريسو والحليب المكثف المحلى مع الثلج أو ساخناً.',
    descriptionEn: 'A sweet premium blend of espresso, condensed milk, and fresh milk.',
    stars: 5,
    isPopular: true
  },
  {
    id: 'mocha',
    nameAr: 'موكا سديمية مظلمة',
    nameEn: 'Dark Nebula Mocha',
    price: 4000,
    category: 'milk_based',
    descriptionAr: 'إسبريسو مع الحليب المبخر وشوكولاتة بلجيكية فاخرة لتجربة دافئة غنية.',
    descriptionEn: 'Rich espresso blended with premium Belgian chocolate sauce and steamed milk.',
    stars: 4
  },

  // Space Specials
  {
    id: 'space_special',
    nameAr: 'مشروب Space المميز 🚀',
    nameEn: 'Space Signature Drink',
    price: 4000,
    category: 'specials',
    descriptionAr: 'المزيج السري الخاص بالمقهى بنكهات فلكية منعشة ومبتكرة تنقلك إلى الفضاء.',
    descriptionEn: 'Our top-secret signature blend with galactic flavors that lift you off to space.',
    stars: 5,
    isPopular: true
  },
  {
    id: 'supernova_shaker',
    nameAr: 'سوبرنوفا آيس شيكر',
    nameEn: 'Supernova Iced Shaker',
    price: 4500,
    category: 'specials',
    descriptionAr: 'إسبريسو مخفوق مع الثلج والكراميل المملح الخفيف ولمسة من رغوة الحليب البارد.',
    descriptionEn: 'Shaken double espresso with light salted caramel, ice, and dynamic cold milk foam.',
    stars: 5,
    isNew: true
  },
  {
    id: 'galaxy_blue',
    nameAr: 'موهيتو المجرة الزرقاء 🌌',
    nameEn: 'Galaxy Blue Lagoon',
    price: 4000,
    category: 'specials',
    descriptionAr: 'شراب صودا مثلج منعش بنكهة البلو كوراساو والليمون والنعناع مع لمعان فضائي ساحر.',
    descriptionEn: 'A refreshing iced soda infused with blue curacao, lime, mint, and cosmic edible shimmer.',
    stars: 5
  },

  // Desserts
  {
    id: 'chocolate_cake',
    nameAr: 'كيكة السوبرنوفا المذابة',
    nameEn: 'Supernova Molten Cake',
    price: 4500,
    category: 'desserts',
    descriptionAr: 'كعكة شوكولاتة دافئة محشوة بقلب غني بالشوكولاتة السائلة اللذيذة.',
    descriptionEn: 'Warm, rich chocolate cake with a molten core of premium liquid chocolate.',
    stars: 5,
    isPopular: true
  },
  {
    id: 'waffle_andromeda',
    nameAr: 'وافل أندروميدا العملاق',
    nameEn: 'Andromeda Giant Waffle',
    price: 5000,
    category: 'desserts',
    descriptionAr: 'وافل مقرمش يقدم مع الشوكولاتة الذائبة وقطع الفواكه الطازجة ورشة من نيازك السكر.',
    descriptionEn: 'Crisp bubble waffle drizzled with molten chocolate, fresh fruits, and stellar sprinkles.',
    stars: 4
  },
  {
    id: 'eclipse_cheesecake',
    nameAr: 'تشيز كيك الكسوف الكلي',
    nameEn: 'Total Eclipse Cheesecake',
    price: 4500,
    category: 'desserts',
    descriptionAr: 'تشيز كيك نيويورك الغني بالكريمة مغطى بصلصة التوت البري الداكنة.',
    descriptionEn: 'Creamy New York cheesecake topped with a dark luscious blueberry compote.',
    stars: 5,
    isNew: true
  }
];

export const CATEGORIES = [
  { id: 'all', nameAr: 'الكل', nameEn: 'All' },
  { id: 'espresso', nameAr: 'إسبريسو وكلاسيك', nameEn: 'Espresso & Classics' },
  { id: 'milk_based', nameAr: 'مشروبات الحليب', nameEn: 'Milk Beverages' },
  { id: 'specials', nameAr: 'خاص بالفضاء 🚀', nameEn: 'Space Specials' },
  { id: 'desserts', nameAr: 'الحلويات الكونية', nameEn: 'Cosmic Desserts' }
];

export const SHOP_HOURS = {
  open: 8, // 8:00 AM
  close: 24, // 12:00 AM (midnight)
};

export const INSTAGRAM_LINK = "https://www.instagram.com/space_iraq"; // Placeholder or cafe insta
export const WAZE_LINK = "https://waze.com/ul/hsyphceymw";
export const WHATSAPP_NUMBER = "9647744088137";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
