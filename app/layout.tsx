import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

// SEO-Optimized Metadata for GEO & AEO
export const metadata: Metadata = {
  metadataBase: new URL('https://spabrix.in'),
  title: {
    default: 'Spabrix: Top Web Design & SEO Agency Malappuram, Kerala',
    template: '%s | Spabrix Agency'
  },
  description: 'Spabrix is the top web design & digital marketing agency in Malappuram, Kerala. We build SEO-friendly websites & strategies to grow your business online.',
  keywords: [
    'web design company Kerala',
    'best web development agency Malappuram',
    'SEO services Kerala',
    'digital marketing agency Malappuram',
    'website design Calicut',
    'Next.js development India',
    'ecommerce website Kerala',
    'logo design Malappuram',
    'social media marketing Kerala',
    'affordable web design India'
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
    siteName: 'Spabrix Digital Agency',
    title: 'Spabrix - Top Web Design & Digital Marketing Agency in Kerala',
    description: 'Transform your business with stunning websites and result-driven digital marketing. Trusted by 80+ clients across Kerala.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Spabrix Digital Agency - Web Design & Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spabrix - Best Web Design Agency in Kerala',
    description: 'Custom websites, SEO, and digital marketing solutions for businesses in Malappuram & Kerala.',
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
  alternates: {
    canonical: 'https://spabrix.in',
  },
  verification: {
    google: '6f9381d394c102e5', // Google Search Console verification (from google6f9381d394c102e5.html)
  },
  icons: {
    icon: '/favicon.svg',
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
      name: 'Spabrix - Web Design Agency Malappuram',
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
        { '@type': 'State', name: 'Kerala' },
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
      areaServed: { '@type': 'State', name: 'Kerala' },
    },
    {
      '@type': 'Service',
      '@id': 'https://spabrix.in/services#seo',
      serviceType: 'Search Engine Optimization',
      name: 'SEO & Google Ranking',
      description: 'Data-driven SEO strategies to help your business rank on Google Page 1 in Kerala.',
      provider: { '@id': 'https://spabrix.in/#organization' },
      areaServed: { '@type': 'State', name: 'Kerala' },
    },
    {
      '@type': 'Service',
      '@id': 'https://spabrix.in/services#branding',
      serviceType: 'Graphic Design',
      name: 'Logo & Brand Design',
      description: 'Memorable brand identities that make your business stand out from competition.',
      provider: { '@id': 'https://spabrix.in/#organization' },
      areaServed: { '@type': 'State', name: 'Kerala' },
    },
    {
      '@type': 'Service',
      '@id': 'https://spabrix.in/services#ecommerce',
      serviceType: 'E-commerce Development',
      name: 'E-commerce Solutions',
      description: 'Online stores with secure payments, inventory management, and seamless user experience.',
      provider: { '@id': 'https://spabrix.in/#organization' },
      areaServed: { '@type': 'State', name: 'Kerala' },
    },
    {
      '@type': 'Service',
      '@id': 'https://spabrix.in/services#digital-marketing',
      serviceType: 'Digital Marketing',
      name: 'Digital Marketing',
      description: 'Data-driven marketing campaigns on Google, Facebook, and Instagram that convert.',
      provider: { '@id': 'https://spabrix.in/#organization' },
      areaServed: { '@type': 'State', name: 'Kerala' },
    },
    {
      '@type': 'Service',
      '@id': 'https://spabrix.in/services#social-media',
      serviceType: 'Social Media Marketing',
      name: 'Social Media Marketing',
      description: 'Engaging content and strategic posting to build your brand presence online.',
      provider: { '@id': 'https://spabrix.in/#organization' },
      areaServed: { '@type': 'State', name: 'Kerala' },
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
      <body className={`${inter.className} ${outfit.variable}`}>
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
