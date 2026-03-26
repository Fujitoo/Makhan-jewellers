# 📄 Product Requirements Document (PRD): Makhan Jewellers Demo

## 1. Project Overview
**Project Name:** Makhan Jewellers Digital Showroom
**Goal:** Build a high-fidelity, luxury-themed demo website to secure a client deal.
**Primary Audience:** Local customers in Mau, Uttar Pradesh, and NRI visitors.
**Key Value Proposition:** Trust (Since 1994, BIS Hallmarked), Accessibility (WhatsApp/Call), and Aesthetics (Premium Gold/Dark Theme).

## 2. Technical Stack & Configuration
*   **Framework:** React 18+ (TypeScript)
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **UI Library:** shadcn/ui (Radix UI primitives)
*   **Icons:** Lucide React
*   **Animations:** Framer Motion (subtle fade-ins only)
*   **Fonts:**
    *   Headings: *Playfair Display* (Serif, Luxury feel)
    *   Body: *Inter* or *Lato* (Sans-serif, Readability)

## 3. Design System (The "Luxury Gold" Theme)
*Configure `tailwind.config.js` with these exact values:*

*   **Primary Color:** `gold-600` (#C5A059) - Used for buttons, highlights, icons.
*   **Secondary Color:** `slate-900` (#0F172A) - Used for footer, text, heavy contrast.
*   **Background:** `slate-50` (#F8FAFC) - Off-white for clean sections.
*   **Accent:** `amber-100` - For subtle backgrounds.
*   **Radius:** `0.5rem` (Slightly rounded, not fully pill-shaped, for a classic look).
*   **Shadows:** Soft, diffuse shadows (`shadow-lg`) to create depth for product cards.

## 4. Architecture & Git Worktree Strategy
To enable parallel development, the project is divided into **4 Independent Workstreams**. Each workstream corresponds to a specific Git Worktree.

### 📂 Global Directory Structure (Must be agreed upon by all worktrees)
```text
src/
├── components/
│   ├── ui/             # (Worktree 1: Base) shadcn primitives
│   ├── layout/         # (Worktree 1: Base) Header, Footer, MobileNav
│   ├── shared/         # (Shared) ProductCard, SectionHeading, TrustBadge
│   └── features/       # (Specific) Hero, ContactForm, ProductGrid
├── lib/
│   ├── utils.ts        # (Worktree 1: Base) CN helper
│   └── constants.ts    # (Shared) Phone numbers, Address, Social Links
├── data/
│   └── mockData.ts     # (Shared) JSON for products/reviews
├── pages/
│   ├── Home.tsx        # (Worktree 2)
│   ├── Collection.tsx  # (Worktree 3)
│   └── Contact.tsx     # (Worktree 4)
└── App.tsx             # (Worktree 1: Base) Routing setup
```

---

## 5. Workstream Specifications

### 🌳 Worktree 1: Foundation & Layout (The Shell)
**Objective:** Set up the repo, install dependencies, and build the persistent shell.
**Tasks:**
1.  **Init:** Vite + TS + Tailwind + shadcn/ui.
2.  **Theme:** Configure `tailwind.config.js` with the Gold/Slate palette.
3.  **Layout Component:**
    *   **Header:** Logo (Left), Desktop Nav (Center), "Call Now" Button (Right). Mobile Hamburger menu.
    *   **Footer:** 3 Columns (Quick Links, Contact Info, Social Media). Copyright "© 2024 Makhan Jewellers".
    *   **Floating Actions:** Fixed bottom-right WhatsApp Button (Green) and Top-right Call Button.
4.  **Routing:** Setup `react-router-dom` with placeholder routes for `/`, `/collection`, `/contact`.

### 🌳 Worktree 2: Home Page (The Hook)
**Objective:** Create a high-converting landing page.
**Dependencies:** Requires `Layout` and `Shared Components` from Worktree 1.
**Sections:**
1.  **Hero Section:** Full-width background image (darkened) with Gold text overlay.
    *   *Headline:* "Crafting Trust Since 1994"
    *   *Subhead:* "100% BIS HUID Hallmarked Jewellery in Mau."
    *   *CTA:* "View Collection" (Primary), "WhatsApp Us" (Secondary).
2.  **Trust Bar:** A horizontal strip showing icons: "30+ Years", "BIS Hallmarked", "5.0★ Rated", "Custom Designs".
3.  **Featured Collection:** Grid of 4 top products (rings, necklace, etc.) using the `ProductCard` component.
4.  **About Snippet:** Image of the shop owner/interior on left, text on right ("Serving Munshipura...").
5.  **Testimonials:** Carousel of 3 Google Reviews (5 stars).

### 🌳 Worktree 3: Product Catalog (The Showroom)
**Objective:** A clean grid to showcase inventory.
**Dependencies:** Requires `ProductCard` component.
**Features:**
1.  **Filter Bar:** Simple tabs for "All", "Rings", "Necklaces", "Bracelets", "Earrings".
2.  **Product Grid:** Responsive grid (1 col mobile, 3 col desktop).
3.  **Product Card Component:**
    *   Image (Aspect ratio 1:1).
    *   Title (e.g., "Traditional Gold Necklace").
    *   Badge: "Hallmarked".
    *   Button: "Enquire on WhatsApp" (Pre-fills message with product name).
4.  **Mock Data:** Populate with 8-12 items using images from the client's Instagram/Google profile.

### 🌳 Worktree 4: Contact & Location (The Conversion)
**Objective:** Make it incredibly easy to visit or call.
**Features:**
1.  **Info Section:** Large typography for Phone Number (Click-to-call) and Address.
2.  **Map Integration:** Embed Google Maps iframe pointing to "Makhan Jewellers, near Halima Hospital".
3.  **Business Hours:** List opening times (Mon-Sat 10am-9pm).
4.  **Contact Form:** Simple fields (Name, Phone, Requirement). *Note: Form doesn't need backend, just console log or WhatsApp redirect for the demo.*
5.  **Social Proof:** "Follow us on Instagram" section with a grid of 3 latest IG posts.

---

## 6. Data & Content (Mock Data)
*Use this JSON structure in `src/data/mockData.ts` so all worktrees use consistent data.*

```typescript
export const businessInfo = {
  name: "Makhan Jewellers",
  phone: "09956484670",
  whatsapp: "919956484670",
  address: "Near Halima Hospital, Munshi Pura, Mau, Uttar Pradesh 275101",
  rating: 5.0,
  reviewCount: 27,
  established: 1994
};

export const products = [
  {
    id: 1,
    name: "Antique Gold Necklace",
    category: "Necklaces",
    image: "url_to_instagram_image_1",
    isHallmarked: true
  },
  {
    id: 2,
    name: "Diamond Solitaire Ring",
    category: "Rings",
    image: "url_to_instagram_image_2",
    isHallmarked: true
  },
  // Add 6 more items...
];

export const reviews = [
  {
    id: 1,
    user: "Rahul Singh",
    rating: 5,
    text: "Best jewellery shop in Mau. Pure gold and great designs."
  },
  // Add 2 more...
];
```

## 7. Merge & Deployment Strategy
1.  **Base Branch:** `main` (Empty or minimal setup).
2.  **Development:**
    *   `git worktree add ../wt-layout layout-branch`
    *   `git worktree add ../wt-home home-branch`
    *   ...etc.
3.  **Integration:**
    *   Merge `layout-branch` into `main` first.
    *   Merge `home-branch`, `collection-branch`, `contact-branch` into `main`.
    *   Resolve conflicts in `App.tsx` (routes) and `src/data` (if any).
4.  **Deploy:** Push `main` to Vercel/Netlify.

## 8. Success Criteria (Definition of Done)
*   [ ] Site loads in under 2 seconds on 4G network.
*   [ ] "Call" and "WhatsApp" buttons work on mobile.
*   [ ] Design looks premium (Gold/Black) not generic.
*   [ ] All images are optimized (WebP format).
*   [ ] No console errors.
