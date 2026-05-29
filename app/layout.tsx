import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ventino Windows — A frame around the light",
    template: "%s | Ventino Windows",
  },
  description:
    "Ventino Windows Pvt. Ltd. — premium uPVC and aluminium doors and windows. Engineered for India's finest homes. ventino.in",
  keywords: [
    "uPVC windows",
    "aluminium windows",
    "doors and windows India",
    "sliding windows",
    "casement windows",
    "Ventino Windows",
    "ventino.in",
  ],
  authors: [{ name: "Ventino Windows Pvt. Ltd." }],
  creator: "Ventino Windows Pvt. Ltd.",
  metadataBase: new URL("https://ventino.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ventino.in",
    siteName: "Ventino Windows",
    title: "Ventino Windows — A frame around the light",
    description:
      "Premium uPVC and aluminium doors and windows. Engineered for India's finest homes.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ventino Windows — A frame around the light",
    description: "Premium uPVC and aluminium doors and windows for India's finest homes.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorant.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ventino Windows Pvt. Ltd.",
              url: "https://ventino.in",
              telephone: ["+919650670009", "+919810162315"],
              email: "ventinowindows@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Village Sunped, Sahupura, Faridabad — Ballabgarh",
                addressLocality: "Faridabad",
                addressRegion: "Haryana",
                addressCountry: "IN",
              },
              description:
                "Premium uPVC and aluminium doors and windows manufacturer in India.",
              priceRange: "₹₹₹",
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
