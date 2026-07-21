'use client';

import { Suspense, useCallback, useEffect, useMemo, useState, type CSSProperties } from 'react';
import { useSearchParams } from 'next/navigation';

const RIDER_APP_SCHEME = 'maangarider://jobs/request';
const RIDER_DOWNLOAD_URL = 'https://maangalogistics.com/download';

function RiderRequestRedirectContent() {
  const searchParams = useSearchParams();
  const [triedOpen, setTriedOpen] = useState(false);
  const deliveryId = searchParams.get('d') || searchParams.get('deliveryId');

  const deepLink = useMemo(() => {
    if (!deliveryId) return null;
    return `${RIDER_APP_SCHEME}?deliveryId=${encodeURIComponent(deliveryId)}`;
  }, [deliveryId]);

  const openApp = useCallback(() => {
    if (!deepLink) return;
    setTriedOpen(true);
    window.location.href = deepLink;
  }, [deepLink]);

  useEffect(() => {
    if (!deepLink || triedOpen) return;
    const timer = window.setTimeout(openApp, 700);
    return () => window.clearTimeout(timer);
  }, [deepLink, openApp, triedOpen]);

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <div style={styles.logo}>M</div>
        <p style={styles.eyebrow}>Maanga Rider</p>
        <h1 style={styles.title}>{deliveryId ? 'Open this request in the app' : 'Request link is incomplete'}</h1>
        <p style={styles.copy}>
          {deliveryId
            ? 'Tap the button below if the Rider app does not open automatically.'
            : 'This link is missing the request reference. Please open the Rider app and check available requests.'}
        </p>

        {deepLink ? (
          <button style={styles.primaryButton} onClick={openApp}>
            Open Rider app
          </button>
        ) : null}

        <button
          style={styles.secondaryButton}
          onClick={() => {
            window.location.href = RIDER_DOWNLOAD_URL;
          }}>
          Download Maanga Rider
        </button>
      </section>
    </main>
  );
}

export default function RiderRequestRedirectPage() {
  return (
    <Suspense fallback={<main style={styles.page} />}>
      <RiderRequestRedirectContent />
    </Suspense>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    padding: 20,
    backgroundColor: '#F7F8F4',
    fontFamily: 'var(--font-outfit), system-ui, sans-serif',
  },
  card: {
    width: '100%',
    maxWidth: 460,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(17, 24, 39, 0.08)',
    boxShadow: '0 24px 70px rgba(17, 24, 39, 0.10)',
    padding: 28,
    textAlign: 'center',
  },
  logo: {
    width: 58,
    height: 58,
    margin: '0 auto 16px',
    borderRadius: 18,
    display: 'grid',
    placeItems: 'center',
    backgroundColor: '#C52B39',
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 900,
  },
  eyebrow: {
    margin: 0,
    color: '#C52B39',
    fontSize: 13,
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  title: {
    margin: '10px 0 10px',
    color: '#101828',
    fontSize: 28,
    lineHeight: 1.1,
    fontWeight: 900,
  },
  copy: {
    margin: '0 0 22px',
    color: '#667085',
    fontSize: 15,
    lineHeight: 1.6,
  },
  primaryButton: {
    width: '100%',
    border: 0,
    borderRadius: 16,
    padding: '15px 18px',
    backgroundColor: '#C52B39',
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 800,
    cursor: 'pointer',
  },
  secondaryButton: {
    width: '100%',
    marginTop: 12,
    border: '1px solid #EAECF0',
    borderRadius: 16,
    padding: '14px 18px',
    backgroundColor: '#FFFFFF',
    color: '#344054',
    fontSize: 15,
    fontWeight: 800,
    cursor: 'pointer',
  },
};
