import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { StructuredData } from "@/components/ui/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Umar Welder | عمر حداد - Expert Welding & Custom Metalwork",
  description: "Professional welding services in Riyadh. Custom doors, windows, sheds, fencing, railings, staircases, and repairs. Available onsite and in shop.",
  keywords: "welding, blacksmith, custom metalwork, doors, windows, sheds, fencing, railings, staircases, repairs, Riyadh, Saudi Arabia",
  authors: [{ name: "Umar Welder" }],
  creator: "Umar Welder",
  publisher: "Umar Welder",
  robots: "index, follow",
  openGraph: {
    title: "Umar Welder | عمر حداد - Expert Welding & Custom Metalwork",
    description: "Professional welding services in Riyadh. Custom doors, windows, sheds, fencing, railings, staircases, and repairs. Available onsite and in shop.",
    url: "https://umarwelder.sa",
    siteName: "Umar Welder",
    locale: "en_US",
    alternateLocale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Umar Welder - Professional Welding Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umar Welder | عمر حداد - Expert Welding & Custom Metalwork",
    description: "Professional welding services in Riyadh. Custom doors, windows, sheds, fencing, railings, staircases, and repairs.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://umarwelder.sa",
    languages: {
      'en-US': 'https://umarwelder.sa/en',
      'ar-SA': 'https://umarwelder.sa/ar',
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
      >
        <LanguageProvider>
          <StructuredData />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
