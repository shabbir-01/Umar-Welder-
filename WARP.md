# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

A modern bilingual (Arabic/English) portfolio website for Umar Welder, built with Next.js 15+, TypeScript, and Tailwind CSS. The site features RTL support, SEO optimization, and a responsive design with custom metalwork theming.

## Common Development Commands

### Development Workflow
```bash
# Install dependencies
npm install

# Run development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

### Testing & Validation
```bash
# Type checking
npx tsc --noEmit

# Build validation (ensures production readiness)
npm run build && npm start

# Check bundle size analysis
npx @next/bundle-analyzer
```

## Architecture Overview

### Core Structure
- **App Router Architecture**: Uses Next.js 15+ App Router with TypeScript
- **Single-Page Application**: All content rendered on one page with smooth scrolling navigation
- **Component-Based**: Modular architecture with clear separation of concerns
- **Context-Driven State**: React Context for language switching and global state

### Key Architectural Patterns

#### 1. Bilingual Architecture
- **Language Context** (`LanguageContext.tsx`): Centralized language state management
- **Default Language**: Arabic (`ar`) is the primary language
- **Content Pattern**: Each component contains both English and Arabic content inline
- **RTL Support**: Dynamic direction switching based on selected language
- **Font Strategy**: Cairo font for Arabic, Geist for English

#### 2. Component Organization
```
src/components/
├── sections/          # Page sections (Hero, About, Services, etc.)
├── ui/               # Reusable UI components
└── MainPageWrapper.tsx # Main layout orchestrator
```

#### 3. Interactive Functionality
- **Custom Hook Pattern**: `useScriptFunctionality.ts` manages all DOM interactions
- **Imperative DOM Manipulation**: Uses direct DOM queries for animations and interactions
- **Intersection Observer**: For scroll-based animations and visibility tracking

#### 4. SEO and Performance
- **Comprehensive Metadata**: Structured data, OpenGraph, Twitter cards
- **Static Generation**: All pages are statically generated
- **Font Optimization**: Google Fonts with `display: swap`
- **Image Optimization**: Next.js Image component with blur placeholders

## Development Guidelines

### Adding New Content Sections
1. Create new component in `src/components/sections/`
2. Add both Arabic and English content inline
3. Import and add to `MainPageWrapper.tsx`
4. Update navigation in `Navigation.tsx` if section needs nav link
5. Add scroll animations in `useScriptFunctionality.ts` if needed

### Language Support
- Always provide both Arabic (`titleAr`, `descriptionAr`) and English (`titleEn`, `descriptionEn`) versions
- Use `useLanguage()` hook to access current language and `isArabic` boolean
- Apply `dir="rtl"` and appropriate CSS classes for Arabic content
- Test both languages thoroughly for layout and typography

### Styling Patterns
- **Tailwind CSS**: Primary styling framework
- **Custom CSS**: Additional styles in `globals.css`
- **Font Variables**: Use CSS custom properties (`--font-cairo`, `--font-geist-sans`)
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **Animation Classes**: Custom classes for scroll-based animations

### TypeScript Integration
- **Strict Mode**: TypeScript strict mode enabled
- **Path Aliases**: Use `@/*` for imports from `src/`
- **Custom Types**: Defined in `src/types/index.ts`
- **Component Props**: Always type React component props

## Project-Specific Patterns

### Interactive Elements
- **Smooth Scrolling**: Navigation uses `data-section` attributes for smooth scrolling
- **Portfolio Filtering**: Uses `data-filter` attributes and CSS classes for filtering
- **Mobile Menu**: Hamburger menu with CSS class toggles
- **Navbar Behavior**: Hide/show on scroll with CSS transforms

### Image and Asset Management
- **Public Directory**: Static assets in `/public/`
- **Image Optimization**: Use Next.js Image component for photos
- **SVG Icons**: Lucide React for icons, custom SVGs in public
- **Font Loading**: Google Fonts with proper fallbacks

### SEO Implementation
- **Structured Data**: JSON-LD schema in `StructuredData.tsx`
- **Meta Tags**: Comprehensive metadata in `layout.tsx`
- **Sitemap**: Auto-generated sitemap at `src/app/sitemap.ts`
- **Robots.txt**: Static file in `/public/`

## Environment Configuration

### Required Environment Variables
```bash
# Optional - Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional - App Configuration
NEXT_PUBLIC_APP_NAME="Umar Welder"
NEXT_PUBLIC_APP_URL="https://umarwelder.sa"
```

### Configuration Files
- **Next.js Config**: `next.config.ts` (minimal configuration)
- **TypeScript**: `tsconfig.json` with path mapping and strict mode
- **ESLint**: `eslint.config.mjs` with Next.js and TypeScript rules
- **Tailwind**: Configured in `globals.css` with custom properties

## Performance Considerations

- **Bundle Size**: Optimized for <150kB total bundle size
- **Static Generation**: All pages pre-rendered at build time
- **Font Loading**: Optimized with `display: swap` and preload hints
- **Image Optimization**: WebP format with blur placeholders
- **Code Splitting**: Automatic with Next.js App Router

## Deployment Notes

- **Production Ready**: All deployment checklist items completed (see DEPLOYMENT.md)
- **Vercel Optimized**: Configured for optimal Vercel deployment
- **Security Headers**: CSP and security headers configured
- **Analytics Ready**: Google Analytics integration available
- **Error Boundaries**: Comprehensive error handling implemented
