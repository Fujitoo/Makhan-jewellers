# GEMINI.md - Makhan Jewellers Project Context

## Project Overview
**Makhan Jewellers Digital Showroom** is a high-fidelity, luxury-themed demo website built for a premier jewellery showroom in Mau, Uttar Pradesh.
- **Goal:** Showcase premium gold jewellery with a focus on trust (BIS Hallmarked) and accessibility (WhatsApp/Call).
- **Theme:** "Luxury Gold" using a palette of Gold (#C5A059), Slate (#0F172A), and clean off-whites.

## Technical Stack
- **Framework:** React 19 (TypeScript)
- **Build Tool:** Vite 8+
- **Styling:** Tailwind CSS 4 (@tailwindcss/vite)
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Routing:** React Router DOM 7

## Key Commands
- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production (`tsc -b && vite build`).
- `npm run lint`: Run ESLint for code quality checks.
- `npm run preview`: Preview the production build locally.

## Project Structure
The project follows a feature-based architecture organized into four primary workstreams:
- `src/components/ui/`: Base shadcn/ui primitives.
- `src/components/layout/`: Persistent shell components (Header, Footer, Navigation).
- `src/components/shared/`: Reusable components (ProductCard, SectionHeading, TrustBadge).
- `src/components/features/`: Specific page sections (Hero, FeaturedCollection, ContactForm).
- `src/data/`: Centralized project data.
    - `constants.ts`: Business info, hours, categories, and links.
    - `mockData.ts`: Product catalog, reviews, and FAQ content.
- `src/pages/`: Main application pages (Home, Collection, Contact).
- `src/lib/`: Utilities and re-exported constants/data.

## Development Conventions
- **Surgical Updates:** When making changes, aim for precise, targeted updates to components and files.
- **Styling:** Use Tailwind CSS 4 utility classes. Prefer established "Luxury Gold" theme colors (defined in PRD and constants).
- **Components:**
    - New UI primitives should go into `src/components/ui`.
    - Business-logic-specific sections should go into `src/components/features`.
    - Reusable presentational components should go into `src/components/shared`.
- **Data Management:** Always use centralized data from `src/data/constants.ts` and `src/data/mockData.ts` to ensure consistency across the application.
- **Accessibility:** Ensure all "Call Now" and "WhatsApp" actions are functional and pre-filled where appropriate.

## Architecture & Workflow
The project was originally designed to be built across 4 parallel workstreams:
1. **Foundation & Layout:** Base setup and the persistent shell.
2. **Home Page:** High-converting landing page.
3. **Product Catalog:** Showroom grid with filtering and enquiry features.
4. **Contact & Location:** Conversion-focused contact information and maps.
