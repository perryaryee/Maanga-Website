import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

/** Used to resolve relative /logo_icon.png etc. Must match the page origin in dev or icons load from production and break locally. */
function getMetadataBase(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    const normalized = raw.replace(/\/$/, "");
    return new URL(normalized.startsWith("http") ? normalized : `https://${normalized}`);
  }
  if (process.env.VERCEL_URL) return new URL(`https://${process.env.VERCEL_URL}`);
  if (process.env.NODE_ENV === "development") return new URL("http://localhost:3000");
  return new URL("https://maangalogistics.com");
}

const metadataBaseUrl = getMetadataBase();
/** Canonical marketing URL for titles / OG when env is unset (production default). */
const canonicalSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://maangalogistics.com";

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl,
  title: {
    default: "Maanga Logistics - Swift. Safe. Smart Deliveries Across Ghana",
    template: "%s | Maanga Logistics",
  },
  description:
    "Your trusted partner for on-demand delivery, relocation, and business logistics across Ghana. Download our app or become a driver partner today.",
  keywords: [
    "delivery Ghana",
    "logistics Ghana",
    "Maanga Logistics",
    "on-demand delivery",
    "relocation Ghana",
    "business logistics",
    "SwiftGo",
    "delivery app Ghana",
  ],
  authors: [{ name: "Maanga Logistics", url: canonicalSiteUrl }],
  creator: "Maanga Logistics",
  publisher: "Maanga Logistics",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: canonicalSiteUrl,
    siteName: "Maanga Logistics",
    title: "Maanga Logistics - Swift. Safe. Smart Deliveries Across Ghana",
    description:
      "Your trusted partner for on-demand delivery, relocation, and business logistics across Ghana.",
    images: [{ url: "/logo_icon.png", width: 512, height: 512, alt: "Maanga Logistics" }],
  },
  twitter: {
    card: "summary",
    title: "Maanga Logistics - Swift. Safe. Smart Deliveries Across Ghana",
    description: "Your trusted partner for on-demand delivery and logistics across Ghana.",
    images: ["/logo_icon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/logo_icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.png",
    apple: "/logo_icon.png",
  },
  alternates: { canonical: canonicalSiteUrl },
  category: "logistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${outfit.variable} antialiased flex flex-col min-h-screen font-sans overflow-x-hidden`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
