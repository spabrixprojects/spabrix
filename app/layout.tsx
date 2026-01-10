import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { AOSProvider } from "./components/AOSProvider";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import CustomCursor from "./components/CustomCursor";
import BackToTop from "./components/BackToTop";
import WhatsAppChatButton from "./wpbutton/page";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://spabrix.in"),
  title: {
    default: "Spabrix - Web Development & Digital Marketing Agency",
    template: "%s | Spabrix",
  },
  description: "Spabrix is a top-rated web development and digital marketing agency in Malappuram, Kerala. We build high-performance Next.js websites, branding, and SEO solutions for growing businesses.",
  keywords: ["Web Development", "Digital Marketing", "SEO Agency", "Malappuram", "Kerala", "Web Design", "Branding", "Next.js", "React", "Social Media Marketing"],
  authors: [{ name: "Spabrix Team" }],
  creator: "Spabrix",
  publisher: "Spabrix",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/spabrixlogo.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spabrix.in",
    title: "Spabrix - Transform Your Digital Presence",
    description: "Expert web development and digital marketing services in Kerala. We create stunning websites and data-driven marketing strategies.",
    siteName: "Spabrix",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spabrix Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spabrix - Web & Marketing Solutions",
    description: "Grow your business with Spabrix. Professional web design and digital marketing in Malappuram.",
    images: ["/og-image.png"],
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Canonical Link */}
        <link rel="canonical" href="https://spabrix.in" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Spabrix",
              url: "https://spabrix.in",
              logo: "https://spabrix.in/spabrixlogo.png",
              description: "Web Development & Digital Marketing Agency in Malappuram, Kerala.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Malappuram",
                addressRegion: "Kerala",
                addressCountry: "IN"
              },
              sameAs: [
                "https://facebook.com/spabrix",
                "https://instagram.com/spabrix",
                "https://linkedin.com/company/spabrix",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9946972210",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Malayalam"],
              },
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <AOSProvider>
          <Navbar />
          {children}
          <Footer />
          <Chatbot />
          <CustomCursor />
          <BackToTop />
          <WhatsAppChatButton />
        </AOSProvider>
      </body>
    </html>
  );
}
