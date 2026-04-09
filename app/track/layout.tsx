import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://maangalogistics.com';

export const metadata: Metadata = {
  title: 'Track your delivery',
  description: 'See live delivery status for your Maanga order.',
  alternates: { canonical: `${siteUrl.replace(/\/$/, '')}/track` },
};

export default function TrackLayout({ children }: { children: React.ReactNode }) {
  /* Offset for fixed Navbar (logo + py); keeps headings and cards below the header */
  return <div className="pt-28 sm:pt-32 md:pt-36">{children}</div>;
}
