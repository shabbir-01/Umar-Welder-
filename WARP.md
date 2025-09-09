# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a bilingual (Arabic/English) portfolio website for Umar Welder, a professional welding and metalwork business in Riyadh, Saudi Arabia. The site is built as a single-page application with Next.js 15, TypeScript, and Tailwind CSS v4.

**Key Technologies:**
- **Next.js 15** with App Router and Turbopack
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling (no config file, using inline theme)
- **React 19** with client-side interactivity
- **Google Fonts** (Geist, Cairo for Arabic)
- **Lucide React** for icons

## Common Development Commands

```bash
# Development server (uses Turbopack for faster builds)
npm run dev

# Production build (also uses Turbopack)
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

**Testing:** This project does not currently have test setup configured.

## Architecture & Structure

### Multilingual Architecture
The core of this application is its **bilingual support system**:

- **Language Context**: `LanguageContext.tsx` provides global state management for language switching
- **Font Strategy**: Uses Cairo font for Arabic text with proper RTL support
- **Translation Pattern**: Each component contains inline translations using conditional rendering based on `isArabic` boolean
- **SEO Multilingual**: Structured data, meta tags, and sitemap support both languages

### Component Architecture
- **Single Page App**: All content is on one page (`page.tsx`) with sections
- **Section Components**: Hero, About, Services, Portfolio, Contact - each self-contained
- **UI Components**: Reusable components like LanguageToggle and StructuredData
- **Context Pattern**: Uses React Context for global language state

### SEO Implementation
Comprehensive SEO setup including:
- **Structured Data**: Schema.org LocalBusiness markup with bilingual content
- **Sitemap**: Auto-generated with language alternates
- **Meta Tags**: OpenGraph, Twitter cards, and canonical URLs
- **Business Schema**: Detailed service offerings and location data

### Styling Architecture
- **Tailwind CSS v4**: Uses inline theme configuration in `globals.css`
- **Font Variables**: CSS custom properties for font families
- **Arabic Support**: Proper Cairo font integration with RTL considerations
- **Custom Utilities**: Text gradients and smooth scrolling utilities

## Key Files and Their Purpose

| File | Purpose |
|------|---------|
| `src/contexts/LanguageContext.tsx` | Global language state management |
| `src/app/layout.tsx` | Root layout with SEO meta tags and font loading |
| `src/app/page.tsx` | Main page assembling all sections |
| `src/components/sections/` | Individual page sections (Hero, About, etc.) |
| `src/components/ui/StructuredData.tsx` | Schema.org JSON-LD for SEO |
| `src/app/sitemap.ts` | Dynamic sitemap generation |
| `src/app/globals.css` | Global styles and Tailwind configuration |

## Development Patterns

### Adding New Content
- All text content should support both Arabic and English
- Use the `useLanguage()` hook and conditional rendering: `{isArabic ? 'Arabic text' : 'English text'}`
- Apply appropriate font classes: `font-cairo` for Arabic, `font-sans` for English
- Consider RTL layout implications for Arabic content

### Component Structure
- Mark components with `'use client'` if they use hooks or interactivity
- Import and use `useLanguage()` for language-dependent content
- Follow the existing pattern of conditional styling based on `isArabic`

### SEO Considerations
- Update structured data in `StructuredData.tsx` when business information changes
- Maintain bilingual meta tags in `layout.tsx`
- Keep sitemap updated with new sections or pages

## Business Context

This is a local business website for a welding service in Riyadh. The target audience includes:
- Arabic-speaking local customers (primary)
- English-speaking expatriates in Riyadh
- Business/commercial clients needing metalwork services

Services include: doors, windows, sheds, fencing, railings, staircases, and general repairs.

## Configuration Notes

- **Turbopack**: Enabled for both dev and build for faster compilation
- **TypeScript**: Strict mode enabled with path aliases (`@/*` → `./src/*`)
- **ESLint**: Uses Next.js recommended config with TypeScript support
- **PostCSS**: Minimal config using Tailwind's PostCSS plugin
- **Fonts**: Google Fonts with proper Arabic support and display optimization
