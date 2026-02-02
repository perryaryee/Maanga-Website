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

export const metadata: Metadata = {
  title: "Maanga Logistics - Swift. Safe. Smart Deliveries Across Ghana",
  description: "Your trusted partner for on-demand delivery, relocation, and business logistics across Ghana. Download our app or become a driver partner today.",
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
