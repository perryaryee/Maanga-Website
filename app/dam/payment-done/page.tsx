'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const APP_DEEP_LINK = 'maanga://payment-complete';

function PaymentDoneContent() {
  const searchParams = useSearchParams();
  const [triedOpen, setTriedOpen] = useState(false);

  const reference = searchParams.get('reference');
  const deliveryId = searchParams.get('deliveryId');
  const orderId = searchParams.get('orderId');
  const amount = searchParams.get('amount');

  const deepLinkUrl = reference && deliveryId
    ? `${APP_DEEP_LINK}?reference=${encodeURIComponent(reference)}&deliveryId=${encodeURIComponent(deliveryId)}${orderId ? `&orderId=${encodeURIComponent(orderId)}` : ''}${amount ? `&amount=${encodeURIComponent(amount)}` : ''}`
    : null;

  const openApp = () => {
    if (!deepLinkUrl) return;
    setTriedOpen(true);
    window.location.href = deepLinkUrl;
  };

  // On mobile, try to open the app automatically after a short delay
  useEffect(() => {
    if (!deepLinkUrl || triedOpen) return;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      const t = setTimeout(openApp, 1500);
      return () => clearTimeout(t);
    }
  }, [deepLinkUrl, triedOpen]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.iconWrap}>✓</div>
        <h1 style={styles.title}>Payment completed</h1>
        <p style={styles.subtitle}>
          You can now return to the Maanga app to verify and complete your order.
        </p>
        {deepLinkUrl ? (
          <>
            <button style={styles.primaryButton} onClick={openApp}>
              Return to app
            </button>
            <p style={styles.hint}>
              If the app didn’t open, tap the button above or switch to the Maanga app and open the Complete Payment screen.
            </p>
          </>
        ) : (
          <p style={styles.missingParams}>
            Missing payment details. Please open the Maanga app and go to My Orders → Complete Payment.
          </p>
        )}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
    padding: 20,
  },
  card: {
    maxWidth: 420,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 40,
    textAlign: 'center',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  },
  iconWrap: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#22c55e',
    color: '#fff',
    fontSize: 36,
    lineHeight: 72,
    margin: '0 auto 24px',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    lineHeight: 24,
    marginBottom: 28,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#C52B39',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    padding: 16,
    fontSize: 17,
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: 16,
  },
  hint: {
    fontSize: 13,
    color: '#94a3b8',
    lineHeight: 20,
  },
  missingParams: {
    fontSize: 14,
    color: '#64748b',
  },
};

export default function PaymentDonePage() {
  return (
    <Suspense
      fallback={
        <div style={styles.container}>
          <div style={styles.card}>
            <p>Loading...</p>
          </div>
        </div>
      }
    >
      <PaymentDoneContent />
    </Suspense>
  );
}
