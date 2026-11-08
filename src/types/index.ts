export interface Product {
  id: string;
  name: string;
  category: "dresses" | "tops" | "bottoms" | "outerwear" | "accessories";
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  rating: number;
  reviewCount: number;
  image: string;
  hoverImage?: string;
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  bgHex: string;
  itemCount: number;
}

export interface CustomerReview {
  id: string;
  name: string;
  role?: string;
  avatar: string;
  rating: number;
  comment: string;
  verified: boolean;
  itemPurchased: string;
}
