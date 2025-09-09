# Blacksmith Portfolio Website - Umar Welder | عمر حداد

A modern, responsive portfolio website for a professional welding and metalwork business in Riyadh, Saudi Arabia. Built with Next.js, TypeScript, and Tailwind CSS with full Arabic/English language support.

## ✨ Features

### 🌐 Multilingual Support
- **Arabic/English Toggle**: Seamless language switching with proper font support
- **Cairo Font**: Beautiful Arabic typography with Google Fonts
- **RTL Support**: Right-to-left layout for Arabic content

### 🎨 Modern Design
- **Responsive**: Mobile-first design that works on all devices
- **Clean & Fast**: Optimized for performance and user experience
- **Professional**: Modern aesthetic suitable for business use
- **Interactive**: Smooth animations and hover effects

### 🔍 SEO Optimized
- **Meta Tags**: Comprehensive metadata for search engines
- **OpenGraph**: Social media sharing optimization
- **Structured Data**: Schema.org markup for local business
- **Sitemap**: Auto-generated sitemap for better indexing
- **Robots.txt**: Search engine crawler instructions

### 📱 Sections
1. **Hero**: Business name, tagline, and call-to-action
2. **About**: Services description and business features
3. **Services**: Complete service offerings grid
4. **Portfolio**: Filterable gallery of work samples
5. **Contact**: Location, hours, and contact information

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Geist, Cairo)
- **Development**: ESLint, PostCSS

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blacksmith-portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── sitemap.ts         # SEO sitemap generation
├── components/
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Services.tsx   # Services section
│   │   ├── Portfolio.tsx  # Portfolio gallery
│   │   └── Contact.tsx    # Contact section
│   └── ui/                # UI components
│       ├── LanguageToggle.tsx  # Language switcher
│       └── StructuredData.tsx  # SEO structured data
├── contexts/
│   └── LanguageContext.tsx     # Language state management
└── lib/                   # Utilities (if needed)

public/
├── robots.txt            # SEO robots file
└── ... (other static files)
```

## 🎯 Customization

### Business Information
Update business details in:
- `src/app/layout.tsx` - Meta tags and SEO
- `src/components/ui/StructuredData.tsx` - Schema.org data
- `src/components/sections/Contact.tsx` - Contact information

### Content Translation
All text content supports Arabic/English. Update translations in each component file.

### Styling
- Colors: Modify Tailwind classes throughout components
- Fonts: Update font imports in `layout.tsx`
- Animations: Customize CSS transitions and transforms

### Google Maps Integration
Replace the placeholder in `Contact.tsx` with actual Google Maps embed code.

## 📦 Build & Deployment

### Production Build
```bash
npm run build
npm run start
```

### Deployment Options

#### Vercel (Recommended)
1. Push to GitHub repository
2. Import project in Vercel dashboard
3. Deploy with default settings

#### Other Platforms
- **Netlify**: Works with static export
- **AWS Amplify**: Full SSR support
- **Self-hosted**: Use PM2 or Docker

## 🔧 Environment Variables

Create `.env.local` for any API keys:
```bash
# Google Maps (optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_ga_id
```

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Core Web Vitals**: Excellent LCP, FID, CLS
- **Image Optimization**: SVG placeholders for fast loading
- **Font Loading**: Optimized Google Fonts with display swap

## 🌍 SEO Features

- **Multi-language meta tags**
- **Local business structured data**
- **OpenGraph and Twitter cards**
- **Canonical URLs**
- **Automatic sitemap generation**
- **Robots.txt configuration**

## 🤝 Contributing

This is a custom business website. For improvements:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for Umar Welder business use. All rights reserved.

## 🔗 Contact

For technical support or modifications:
- **Business**: Umar Welder | عمر حداد
- **Location**: Al Khaleej, Riyadh 13223, Saudi Arabia
- **Hours**: Open everyday 7am – 10pm

---

*Built with ❤️ using Next.js and modern web technologies*
