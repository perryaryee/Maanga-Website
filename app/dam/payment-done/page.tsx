'use client';

import { useCallback, useEffect, useMemo, useState, Suspense, type CSSProperties } from 'react';
import { useSearchParams } from 'next/navigation';

const APP_DEEP_LINK = 'maanga://payment-complete';

function PaymentDoneContent() {
  const searchParams = useSearchParams();
  const [triedOpen, setTriedOpen] = useState(false);

  const reference = searchParams.get('reference') || searchParams.get('trxref');
  const deliveryId = searchParams.get('deliveryId');
  const orderId = searchParams.get('orderId');
  const amount = searchParams.get('amount');
  const trackingHref = orderId ? `/track?orderId=${encodeURIComponent(orderId)}` : '/track';
  const formattedAmount = useMemo(() => {
    if (!amount) return null;
    const value = Number(amount);
    if (!Number.isFinite(value)) return `GHS ${amount}`;
    return `GHS ${Math.round(value).toLocaleString()}`;
  }, [amount]);

  const deepLinkUrl = reference && deliveryId
    ? `${APP_DEEP_LINK}?reference=${encodeURIComponent(reference)}&deliveryId=${encodeURIComponent(deliveryId)}${orderId ? `&orderId=${encodeURIComponent(orderId)}` : ''}${amount ? `&amount=${encodeURIComponent(amount)}` : ''}`
    : null;

  const openApp = useCallback(() => {
    if (!deepLinkUrl) return;
    setTriedOpen(true);
    window.location.href = deepLinkUrl;
  }, [deepLinkUrl]);

  // On mobile, try to open the app automatically after a short delay
  useEffect(() => {
    if (!deepLinkUrl || triedOpen) return;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      const t = setTimeout(openApp, 1500);
      return () => clearTimeout(t);
    }
  }, [deepLinkUrl, openApp, triedOpen]);

  return (
    <main style={styles.page}>
      <section style={styles.shell}>
        <div style={styles.brandRow}>
          <div style={styles.logoMark}>M</div>
          <div>
            <p style={styles.brandName}>Maanga Logistics</p>
            <p style={styles.brandMeta}>Secure Paystack checkout</p>
          </div>
        </div>

        <div style={styles.panel}>
          <div style={styles.statusRow}>
            <div style={styles.iconWrap}>✓</div>
            <span style={styles.statusPill}>Payment received</span>
          </div>

          <h1 style={styles.title}>Your payment is complete</h1>
          <p style={styles.subtitle}>
            We have received the Paystack confirmation. Return to the Maanga app so the order can finish verifying and update instantly.
          </p>

          <div style={styles.summaryGrid}>
            <div style={styles.summaryItem}>
              <span style={styles.summaryLabel}>Order</span>
              <strong style={styles.summaryValue}>{orderId || deliveryId || 'Pending'}</strong>
            </div>
            <div style={styles.summaryItem}>
              <span style={styles.summaryLabel}>Amount</span>
              <strong style={styles.summaryValue}>{formattedAmount || 'Confirmed'}</strong>
            </div>
            <div style={styles.summaryItemWide}>
              <span style={styles.summaryLabel}>Reference</span>
              <strong style={styles.referenceValue}>{reference || 'Not provided'}</strong>
            </div>
          </div>

          {deepLinkUrl ? (
            <>
              <div style={styles.actionRow}>
                <button style={styles.primaryButton} onClick={openApp}>
                  Open Maanga app
                </button>
                <button style={styles.secondaryButton} onClick={() => { window.location.href = trackingHref; }}>
                  Track delivery
                </button>
              </div>
              <p style={styles.hint}>
                If the app does not open automatically, tap Open Maanga app or switch back to the app manually.
              </p>
            </>
          ) : (
            <div style={styles.notice}>
              <strong style={styles.noticeTitle}>Payment details are missing</strong>
              <p style={styles.noticeText}>
                Please open the Maanga app and go to My Orders, then Complete Payment for this delivery.
              </p>
            </div>
          )}

          <div style={styles.footerActions}>
            <button style={styles.linkButton} onClick={() => { window.location.href = '/'; }}>
              Back to home
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#F7F8F4',
    color: '#151515',
    padding: 20,
  },
  shell: {
    width: '100%',
    maxWidth: 760,
    margin: '0 auto',
    padding: '36px 0',
  },
  brandRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 28,
  },
  logoMark: {
    width: 46,
    height: 46,
    borderRadius: 14,
    display: 'grid',
    placeItems: 'center',
    backgroundColor: '#C52B39',
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 800,
    boxShadow: '0 12px 24px rgba(197, 43, 57, 0.24)',
  },
  brandName: {
    margin: 0,
    color: '#111827',
    fontSize: 17,
    fontWeight: 800,
  },
  brandMeta: {
    margin: '3px 0 0',
    color: '#6B7280',
    fontSize: 13,
    fontWeight: 600,
  },
  panel: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: '34px 32px',
    border: '1px solid rgba(17, 24, 39, 0.08)',
    boxShadow: '0 24px 70px rgba(17, 24, 39, 0.10)',
  },
  statusRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 28,
  },
  iconWrap: {
    width: 68,
    height: 68,
    borderRadius: 22,
    display: 'grid',
    placeItems: 'center',
    backgroundColor: '#148D57',
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 800,
    boxShadow: '0 16px 30px rgba(20, 141, 87, 0.24)',
  },
  statusPill: {
    borderRadius: 999,
    padding: '10px 14px',
    backgroundColor: '#E9F8EF',
    color: '#0F7A47',
    fontSize: 13,
    fontWeight: 800,
  },
  title: {
    fontSize: 38,
    lineHeight: 1.08,
    fontWeight: 900,
    color: '#111827',
    margin: '0 0 14px',
    letterSpacing: 0,
  },
  subtitle: {
    maxWidth: 620,
    fontSize: 16,
    color: '#5B6472',
    lineHeight: 1.7,
    margin: '0 0 26px',
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
    gap: 12,
    marginBottom: 26,
  },
  summaryItem: {
    backgroundColor: '#F8FAFC',
    border: '1px solid #EEF2F7',
    borderRadius: 18,
    padding: 16,
  },
  summaryItemWide: {
    backgroundColor: '#F8FAFC',
    border: '1px solid #EEF2F7',
    borderRadius: 18,
    padding: 16,
    gridColumn: '1 / -1',
  },
  summaryLabel: {
    display: 'block',
    color: '#7A8493',
    fontSize: 12,
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: 8,
  },
  summaryValue: {
    color: '#151515',
    fontSize: 18,
    fontWeight: 900,
    overflowWrap: 'anywhere',
  },
  referenceValue: {
    color: '#151515',
    fontSize: 15,
    fontWeight: 800,
    overflowWrap: 'anywhere',
  },
  actionRow: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  primaryButton: {
    flex: '1 1 220px',
    backgroundColor: '#C52B39',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: 16,
    padding: '16px 18px',
    fontSize: 16,
    fontWeight: 800,
    cursor: 'pointer',
    boxShadow: '0 14px 28px rgba(197, 43, 57, 0.22)',
  },
  secondaryButton: {
    flex: '1 1 180px',
    backgroundColor: '#151515',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: 16,
    padding: '16px 18px',
    fontSize: 16,
    fontWeight: 800,
    cursor: 'pointer',
  },
  hint: {
    color: '#7A8493',
    fontSize: 13,
    lineHeight: 1.6,
    margin: '10px 0 0',
  },
  notice: {
    backgroundColor: '#FFF6E5',
    border: '1px solid #F5D493',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
  },
  noticeTitle: {
    display: 'block',
    color: '#7A4A00',
    fontSize: 15,
    fontWeight: 900,
    marginBottom: 6,
  },
  noticeText: {
    margin: 0,
    color: '#7A4A00',
    fontSize: 14,
    lineHeight: 1.6,
  },
  footerActions: {
    marginTop: 20,
    paddingTop: 18,
    borderTop: '1px solid #EEF2F7',
  },
  linkButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#C52B39',
    fontSize: 14,
    fontWeight: 800,
    padding: 0,
    cursor: 'pointer',
  },
};

export default function PaymentDonePage() {
  return (
    <Suspense
      fallback={
        <main style={styles.page}>
          <div style={styles.panel}>
            <p>Loading...</p>
          </div>
        </main>
      }
    >
      <PaymentDoneContent />
    </Suspense>
  );
}
