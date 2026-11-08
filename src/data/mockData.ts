import { Product, Category, CustomerReview } from "@/types";

export const CATEGORIES: Category[] = [
  {
    id: "cat-1",
    name: "Dresses",
    slug: "dresses",
    // Model in elegant midi floral dress
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
    bgHex: "#FCE7F3", // soft petal rose
    itemCount: 42,
  },
  {
    id: "cat-2",
    name: "Tops & Tees",
    slug: "tops",
    // Chic woman in crisp white ribbed blouse & denim
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80",
    bgHex: "#F3E8FF", // soft lavender
    itemCount: 38,
  },
  {
    id: "cat-3",
    name: "Jeans & Pants",
    slug: "bottoms",
    // High-waisted wide-leg tailored denim
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    bgHex: "#E0F2FE", // sky linen
    itemCount: 29,
  },
  {
    id: "cat-4",
    name: "Outerwear",
    slug: "outerwear",
    // Elegant tailored camel trench coat
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=80",
    bgHex: "#FEF3C7", // warm butter
    itemCount: 24,
  },
  {
    id: "cat-5",
    name: "Accessories",
    slug: "accessories",
    // Luxury nude leather handbag & shades
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    bgHex: "#FCE7F3", // blush pink
    itemCount: 31,
  },
];

export const PRODUCTS: Product[] = [
  // Featured Collection (Row 1 from design)
  {
    id: "prod-1",
    name: "Floral Meadow Maxi Dress",
    category: "dresses",
    categoryLabel: "Dresses",
    price: 49.99,
    originalPrice: 62.99,
    discountBadge: "-20%",
    rating: 4.8,
    reviewCount: 124,
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    description: "Crafted from breathable organic chiffon with subtle watercolor floral prints, tiered hemline, and delicate flutter sleeves for warm summer evenings.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Blush Floral", hex: "#E8B4B8" },
      { name: "Sage Garden", hex: "#A8BBA2" },
      { name: "Cream Petal", hex: "#FDF5E6" },
    ],
    isFeatured: true,
  },
  {
    id: "prod-2",
    name: "Ribbed Silk-Knit Top",
    category: "tops",
    categoryLabel: "Tops & Tees",
    price: 24.99,
    originalPrice: 29.99,
    discountBadge: "-17%",
    rating: 4.6,
    reviewCount: 96,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-soft ribbed modal knit with delicate scoop neckline and body-contouring silhouette. Pairs effortlessly with wide-leg denim or tailored suiting.",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Alabaster White", hex: "#F5F5F0" },
      { name: "Oatmeal Heather", hex: "#D6C7B2" },
      { name: "Noir", hex: "#1C1917" },
    ],
    isFeatured: true,
  },
  {
    id: "prod-3",
    name: "High-Rise Wide Leg Trousers",
    category: "bottoms",
    categoryLabel: "Jeans & Pants",
    price: 39.99,
    originalPrice: 49.99,
    discountBadge: "-20%",
    rating: 4.7,
    reviewCount: 112,
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=80",
    description: "Relaxed tailored trousers cut from structured linen-blend drape. Features pleated front detailing, deep functional pockets, and an elongated clean hem.",
    sizes: ["25", "26", "27", "28", "29", "30"],
    colors: [
      { name: "Chambray Denim", hex: "#8DA4C4" },
      { name: "Pure Sand", hex: "#E8DEC8" },
      { name: "Midnight Navy", hex: "#1A2536" },
    ],
    isFeatured: true,
  },
  {
    id: "prod-4",
    name: "Classic Washed Denim Jacket",
    category: "outerwear",
    categoryLabel: "Outerwear",
    price: 44.99,
    rating: 4.9,
    reviewCount: 78,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    description: "Vintage-inspired denim silhouette with tailored seams, engraved matte silver hardware, and comfortable stretch cotton weave.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Indigo Vintage", hex: "#4A6FA5" },
      { name: "Faded Sky", hex: "#9BB7D4" },
    ],
    isFeatured: true,
  },

  // Best Sellers (Right column from design)
  {
    id: "prod-5",
    name: "Aurelia Summer Tiered Dress",
    category: "dresses",
    categoryLabel: "Dresses",
    price: 34.99,
    rating: 4.7,
    reviewCount: 185,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    description: "Sun-drenched yellow floral pattern with an empire silhouette and adjustable spaghetti straps. Light as air, perfect for coastal escapes.",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Buttercup Floral", hex: "#FCE77D" },
      { name: "Coral Bloom", hex: "#F38181" },
    ],
    isBestSeller: true,
  },
  {
    id: "prod-6",
    name: "Breezy Oversized Linen Shirt",
    category: "tops",
    categoryLabel: "Tops & Tees",
    price: 27.99,
    rating: 4.5,
    reviewCount: 142,
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    description: "An effortless boyfriend-fit button down in 100% European stonewashed linen. Wear unbuttoned over swimwear or tucked into high-rise shorts.",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Cerulean Blue", hex: "#7AA2C8" },
      { name: "Optic White", hex: "#FFFFFF" },
      { name: "Olive Sage", hex: "#8A9A86" },
    ],
    isBestSeller: true,
  },
  {
    id: "prod-7",
    name: "Palermo Vegan Leather Handbag",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 59.99,
    rating: 4.8,
    reviewCount: 205,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    description: "Sculpted structured silhouette crafted with supple calf-grain vegan leather, protective gold feet, and an optional adjustable shoulder strap.",
    sizes: ["One Size"],
    colors: [
      { name: "Rose Petal", hex: "#E8B4B8" },
      { name: "Caramel Tan", hex: "#C68B59" },
      { name: "Matte Black", hex: "#1C1917" },
    ],
    isBestSeller: true,
  },
  {
    id: "prod-8",
    name: "Riviera Cat-Eye Sunglasses",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 19.99,
    rating: 4.9,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80",
    description: "Sleek modern cat-eye acetate frames with UV400 polarized gradient lenses and hand-polished bevel edges.",
    sizes: ["One Size"],
    colors: [
      { name: "Tortoise Shell", hex: "#4B3621" },
      { name: "Jet Onyx", hex: "#111111" },
    ],
    isBestSeller: true,
  },
];

export const REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    name: "Sarah Montgomery",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&q=80",
    rating: 5.0,
    comment: "Amazing quality and super fast delivery! I fell in love with my floral maxi dress the moment I opened the packaging. Definitely shopping here again!",
    verified: true,
    itemPurchased: "Floral Meadow Maxi Dress",
  },
  {
    id: "rev-2",
    name: "Elena Rostova",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    rating: 4.9,
    comment: "The styles are so distinct and comfortable. The Palermo handbag has received endless compliments at brunch and work alike. My new favorite atelier!",
    verified: true,
    itemPurchased: "Palermo Vegan Leather Handbag",
  },
  {
    id: "rev-3",
    name: "Nusrat Jahan",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80",
    rating: 5.0,
    comment: "Exceptional customer concierge service and beautiful outfits. Highly recommended for any woman wanting effortless, timeless pieces.",
    verified: true,
    itemPurchased: "Ribbed Silk-Knit Top",
  },
];

export const HERO_ASSETS = {
  // Model in magenta/fuchsia blazer with sunglasses & bag matching mockup
  mainModel: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1200&q=80",
  // Banner 1: Model in vibrant red floral outfit with sunglasses
  promoSeasonModel: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
  // Banner 2: Model in breezy white sun dress & straw hat
  casualLooksModel: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
  // Banner 3: Wardrobe rack of pastel clothing & straw hat
  clothingRack: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
  // Newsletter 1: Model in sunhat in garden
  newsletterModel: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1000&q=80",
  // Style community model
  communityModel: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
};
