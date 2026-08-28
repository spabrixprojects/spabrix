import type { Metadata, Viewport } from 'next';
import { Inter, Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// SEO-Optimized Metadata for GEO & AEO
export const metadata: Metadata = {
  metadataBase: new URL('https://spabrix.in'),
  title: {
    default: 'Best Website Development Company in Kerala | Spabrix',
    template: '%s | Spabrix'
  },
  description: 'Top website development company in Malappuram, Kerala. We build fast, SEO-optimised, high-converting websites using Next.js & React for businesses across India.',
  keywords: [
    'website development company Kerala',
    'best website developer Malappuram',
    'Next.js developer Kerala',
    'custom website design Malappuram',
    'React developer Kerala',
    'website design Calicut',
    'e-commerce website development Kerala',
    'affordable website development India',
    'SEO website developer Malappuram',
    'professional web developer Kerala'
  ],
  authors: [{ name: 'Spabrix Digital Agency', url: 'https://spabrix.in' }],
  creator: 'Spabrix',
  publisher: 'Spabrix Digital Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://spabrix.in',
    siteName: 'Spabrix - Website Development',
    title: 'Spabrix - Best Website Development Company in Kerala',
    description: 'We build blazing-fast, SEO-optimised, high-converting websites using Next.js & React. 80+ websites delivered across Kerala and India.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Spabrix - Website Development Company Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spabrix - Best Website Development Company in Kerala',
    description: 'Custom websites built with Next.js & React. Fast, SEO-optimised, and designed to convert — for businesses in Malappuram & Kerala.',
    images: ['/og-image.png'],
    creator: '@spabrix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
        'max-snippet': -1,
    },
  },
  verification: {
    google: '6f9381d394c102e5', // Google Search Console verification (from google6f9381d394c102e5.html)
  },
  icons: {
    icon: '/newlogoo.webp',
    apple: '/spabrix-logo-new.png',
  },
};

// JSON-LD Structured Data for SEO, GEO & AEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://spabrix.in/#organization',
      name: 'Spabrix Digital Agency',
      url: 'https://spabrix.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://spabrix.in/spabrix-logo-new.png',
        width: 512,
        height: 512,
      },
      sameAs: [
        'https://www.instagram.com/spabrix',
        'https://www.facebook.com/spabrix',
        'https://www.linkedin.com/company/spabrix',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9946972210',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Malayalam', 'Hindi'],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://spabrix.in/#localbusiness',
      name: 'Spabrix - Website Development',
      image: 'https://spabrix.in/og-image.png',
      telephone: '+91-9946972210',
      email: 'spabrix@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Malappuram',
        addressLocality: 'Malappuram',
        addressRegion: 'Kerala',
        postalCode: '676505',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 11.0510,
        longitude: 76.0711,
      },
      url: 'https://spabrix.in',
      priceRange: '₹₹',
      areaServed: [
        { '@type': 'City', name: 'Malappuram' },
        { '@type': 'City', name: 'Calicut' },
        { '@type': 'City', name: 'Kochi' },
        { '@type': 'AdministrativeArea', name: 'Kerala' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '14:00',
        },
      ],
      // Note: Add aggregateRating only after verifying real GBP reviews
      // aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://spabrix.in/#website',
      url: 'https://spabrix.in',
      name: 'Spabrix Digital Agency',
      publisher: {
        '@id': 'https://spabrix.in/#organization',
      },
    },
    // Service Schema for each service offered
    {
      '@type': 'Service',
      '@id': 'https://spabrix.in/services#web-development',
      serviceType: 'Web Design and Development',
      name: 'Custom Web Development',
      description: 'High-performance websites built with Next.js & React. Fast, secure, and scalable solutions for businesses in Kerala.',
      provider: { '@id': 'https://spabrix.in/#organization' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Kerala' },
    },
    {
      '@type': 'Service',
      '@id': 'https://spabrix.in/services#seo',
      serviceType: 'Search Engine Optimization',
      name: 'SEO & Google Ranking',
      description: 'Data-driven SEO strategies to help your business rank on Google Page 1 in Kerala.',
      provider: { '@id': 'https://spabrix.in/#organization' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Kerala' },
    },
    {
      '@type': 'Service',
      '@id': 'https://spabrix.in/services#branding',
      serviceType: 'Graphic Design',
      name: 'Logo & Brand Design',
      description: 'Memorable brand identities that make your business stand out from competition.',
      provider: { '@id': 'https://spabrix.in/#organization' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Kerala' },
    },
    {
      '@type': 'Service',
      '@id': 'https://spabrix.in/services#ecommerce',
      serviceType: 'E-commerce Development',
      name: 'E-commerce Solutions',
      description: 'Online stores with secure payments, inventory management, and seamless user experience.',
      provider: { '@id': 'https://spabrix.in/#organization' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Kerala' },
    },
    {
      '@type': 'Service',
      '@id': 'https://spabrix.in/services#digital-marketing',
      serviceType: 'Digital Marketing',
      name: 'Digital Marketing',
      description: 'Data-driven marketing campaigns on Google, Facebook, and Instagram that convert.',
      provider: { '@id': 'https://spabrix.in/#organization' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Kerala' },
    },
    {
      '@type': 'Service',
      '@id': 'https://spabrix.in/services#social-media',
      serviceType: 'Social Media Marketing',
      name: 'Social Media Marketing',
      description: 'Engaging content and strategic posting to build your brand presence online.',
      provider: { '@id': 'https://spabrix.in/#organization' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Kerala' },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${playfair.variable} font-sans`}>
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <CustomCursor />
        <Navbar />
        <BackToTop />
        <WhatsAppButton />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
