export interface MenuItem {
  id: string;
  nameAr: string;
  nameEn: string;
  price: number; // in Iraqi Dinars (IQD)
  category: 'espresso' | 'milk_based' | 'specials' | 'desserts';
  descriptionAr: string;
  descriptionEn: string;
  stars?: number; // celestial rating
  isNew?: boolean;
  isPopular?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface ShopHours {
  open: number; // 24h format, e.g., 8 for 08:00
  close: number; // 24h format, e.g., 24 for 00:00 (midnight)
}
