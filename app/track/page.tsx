'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

type TrackPayload = {
  orderId: string;
  deliveryId: string;
  status: string;
  dropoffAddress: string;
  dropoffLatitude?: number | string | null;
  dropoffLongitude?: number | string | null;
  pickupLatitude?: number | string | null;
  pickupLongitude?: number | string | null;
  driver: { id: string; latitude: number | null; longitude: number | null } | null;
};

const API_BASE = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api').replace(/\/$/, '');

function statusLabel(status: string) {
  const map: Record<string, string> = {
    pending: 'Finding a rider',
    assigned: 'Driver assigned',
    picked_up: 'Picked up',
    in_transit: 'On the way',
    awaiting_payment: 'Arrived — payment pending',
    delivered: 'Delivered',
    cancelled: 'Cancelled',
  };
  return map[status] || status.replace(/_/g, ' ');
}

function TrackContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || '';
  const deliveryId = searchParams.get('deliveryId') || '';

  const [track, setTrack] = useState<TrackPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) {
      setLoading(false);
      setError('Missing order ID. Open the full link from your SMS.');
      return;
    }

    let cancelled = false;
    const fetchTrack = async () => {
      try {
        const q = new URLSearchParams({ orderId });
        if (deliveryId) q.set('deliveryId', deliveryId);
        const res = await fetch(`${API_BASE}/deliveries/public/track?${q.toString()}`, {
          cache: 'no-store',
        });
        const data = await res.json();
        if (cancelled) return;
        if (!res.ok || !data?.track) {
          setError(data?.message || 'Order not found.');
          setTrack(null);
          return;
        }
        setError(null);
        setTrack(data.track);
      } catch {
        if (!cancelled) {
          setError('Could not load tracking. Check your connection and try again.');
          setTrack(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchTrack();
    const t = setInterval(fetchTrack, 15000);
    return () => {
      cancelled = true;
      clearInterval(t);
    };
  }, [orderId, deliveryId]);

  const mapsHref =
    track?.driver?.latitude != null &&
    track.driver.latitude !== null &&
    track.driver.longitude != null
      ? `https://www.google.com/maps?q=${track.driver.latitude},${track.driver.longitude}`
      : null;

  return (
    <div className="max-w-lg mx-auto px-4 py-16">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">Track your delivery</h1>
      {orderId ? (
        <p className="text-sm text-gray-600 mb-8">Order ID: {orderId}</p>
      ) : null}

      {loading ? (
        <p className="text-gray-700">Loading status…</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : track ? (
        <div className="space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Status</p>
            <p className="text-lg font-medium text-gray-900">{statusLabel(track.status)}</p>
          </div>
          {track.dropoffAddress ? (
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Drop-off</p>
              <p className="text-gray-800">{track.dropoffAddress}</p>
            </div>
          ) : null}
          {mapsHref ? (
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full rounded-xl bg-gray-900 text-white py-3 px-4 font-medium hover:bg-gray-800 transition-colors"
            >
              View rider on map
            </a>
          ) : (
            <p className="text-sm text-gray-600">
              Location updates appear here when your rider is on the way.
            </p>
          )}
          <p className="text-sm text-gray-500">
            For the full experience, open this same link on your phone — if you have the Maanga app
            installed, it may open the app automatically.
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default function TrackPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-lg mx-auto px-4 py-16">
          <p className="text-gray-700">Loading…</p>
        </div>
      }
    >
      <TrackContent />
    </Suspense>
  );
}
