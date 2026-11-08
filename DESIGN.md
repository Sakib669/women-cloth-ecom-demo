# Design System: Aurelia Atelier (Women's Haute & Everyday Fashion)

## 1. Visual Theme & Atmosphere
A warm, editorial boutique atmosphere designed for effortless modern elegance. The visual rhythm balances editorial negative space with soft-hued organic backdrop pills, rose-petal accents, and refined typography. The visual cadence delivers confident luxury without visual noise:
- Density: "Daily App Balanced" (5/10)
- Variance: "Offset Asymmetric" (6/10)
- Motion: "Fluid Spring Physics" (6/10)

## 2. Color Palette & Roles
- **Canvas Alabaster** (`#FAF8F5`) — Primary background surface with warm linen undertone
- **Pure Surface** (`#FFFFFF`) — High-contrast product card surface and elevated modals
- **Velvet Berry** (`#86194A`) — Primary brand signature accent for primary CTAs, active badges, and focus rings
- **Rose Plum** (`#A21D5E`) — Interactive button hover state and radiant badge borders
- **Pale Petal** (`#FDF2F4`) — Hero background tint and organic category card pill
- **Soft Lavender** (`#F3E8FF`) — Category card pastel accent (Tops & Tees)
- **Sky Linen** (`#E0F2FE`) — Category card pastel accent (Jeans & Denim)
- **Warm Sand** (`#FEF3C7`) — Category card pastel accent (Outerwear & Coats)
- **Blush Cream** (`#FCE7F3`) — Category card pastel accent (Accessories & Bags)
- **Charcoal Ink** (`#1C1917`) — Primary text typography (Zinc-900 depth)
- **Muted Walnut** (`#78716C`) — Secondary descriptive text, reviews, and metadata
- **Whisper Border** (`rgba(226, 218, 214, 0.6)`) — 1px structural dividing lines
- **Nocturne Wine** (`#180815`) — Deep opulent footer and promo ribbon background

## 3. Typography Rules
- **Display & Headlines:** `Playfair Display` / `Outfit` / `Geist` — Track-tight, controlled scale, weight-driven hierarchy. Serif headlines evoke high-fashion European atelier heritage, paired with crisp contemporary geometry.
- **Body:** `Geist Sans` — Relaxed leading, maximum 65 characters per line for effortless readability.
- **Micro & Monospace:** `Geist Mono` — For SKU codes, currency formatting, countdown counters, and tag labels.
- **Anti-Patterns:** No Inter, no generic system fonts, no uncalibrated screaming text walls.

## 4. Component Stylings
- **Buttons:** Tactile pill or soft-rounded radius (10px to full pill). No cheap neon outer glows. Subtle `-1px` translate feedback on active press. Velvet Berry fill for primary actions; whisper outline / frosted ghost for secondary actions.
- **Product Cards:** Smooth rounded corners (16px / `rounded-2xl`). Soft diffused shadow (`0 8px 30px rgba(0,0,0,0.04)`). Subtle zoom on hover (`scale-105 transition-transform duration-700 ease-out`) with wishlist heart toggle and quick-add actions.
- **Category Tiles:** Soft pastel rounded rectangular containers (`h-64`) with centered fashion models, subtle hover elevation, and clean text labels with forward arrow indicators.
- **Inputs & Search:** Clean rounded pills with border focus in Velvet Berry. Accessible label styling, instant filter feedback.
- **Drawer & Modals:** Glassmorphic overlay (`backdrop-blur-md bg-black/40`) with slide-in cart drawer and quick-view inspection modal.
- **Trust Badges:** Rounded icon pods with clean outline icons and dual-line hierarchy (bold title, muted subtext).

## 5. Layout Principles
- **AIDA Structure:** Attention (Hero with asymmetric organic backdrop) -> Interest (Shop by Category bento flow & Featured Collections) -> Desire (Curated Editorial Looks & Best Sellers carousel) -> Action (Limited 50% Season Offer & Newsletter Club).
- **Hero Architecture:** Ultra-wide container with 2-line title rule ("Trendy Outfits / for Every You"), paired with full-height fashion editorial imagery and trust indicator shelf.
- **Zero Empty Space:** Strictly dense grid interlocking with no orphan gaps.
- **Responsive Architecture:** Mobile-first collapse into fluid single/double columns with native touch targets (minimum 44px) and zero horizontal overflow.

## 6. Motion & Interaction
- Spring physics damping for interactive cart additions and wishlist heart animations.
- Real-time localStorage persistence for cart items, wishlist favorites, applied coupon codes, and newsletter subscription status.
- Hardware-accelerated CSS transforms (`translate3d`, `scale`, `opacity`) for 60fps scrolling and hover physics.

## 7. Anti-Patterns (Banned)
- Strictly zero emojis in code, UI text, labels, or tooltips.
- No generic serif fonts like Times New Roman; only curated atelier typography.
- No flat uninspired stock imagery; all visuals use high-fashion editorial framing.
- No broken links or placeholder cards.
- No cheap meta-labels ("SECTION 01", "FEATURE 03").
