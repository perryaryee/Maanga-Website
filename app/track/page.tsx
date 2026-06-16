'use client';

import { Suspense, useEffect, useMemo, useState, type FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  CreditCard,
  ExternalLink,
  LocateFixed,
  MapPin,
  Navigation,
  Package,
  PackageCheck,
  RefreshCcw,
  Route,
  Search,
  ShieldCheck,
  Truck,
} from 'lucide-react';

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

type Coord = { lat: number; lng: number };
type PreviewMarker = {
  kind: 'pickup' | 'rider' | 'dropoff';
  label: string;
  coord: Coord;
};
type PositionedMarker = PreviewMarker & { x: number; y: number };

const API_BASE = ('https://api.maangalogistics.com/api').replace(/\/$/, '');

const STATUS_ORDER = ['pending', 'assigned', 'picked_up', 'in_transit', 'awaiting_payment', 'delivered'];
const STATUS_STEPS = [
  { id: 'pending', label: 'Requested' },
  { id: 'assigned', label: 'Assigned' },
  { id: 'picked_up', label: 'Picked up' },
  { id: 'in_transit', label: 'On the way' },
  { id: 'awaiting_payment', label: 'Payment' },
  { id: 'delivered', label: 'Delivered' },
];

const STATUS_META = {
  pending: {
    label: 'Finding a rider',
    description: 'Your order is in the queue and will update when a rider accepts it.',
    icon: Clock3,
    badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
    iconClass: 'bg-amber-100 text-amber-700',
  },
  assigned: {
    label: 'Rider assigned',
    description: 'Your rider is heading to the pickup point.',
    icon: Truck,
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
    iconClass: 'bg-blue-100 text-blue-700',
  },
  picked_up: {
    label: 'Package picked up',
    description: 'Your package has been collected and is moving toward drop-off.',
    icon: PackageCheck,
    badgeClass: 'bg-orange-50 text-orange-700 border-orange-200',
    iconClass: 'bg-orange-100 text-orange-700',
  },
  in_transit: {
    label: 'On the way',
    description: 'Live location updates are active while the rider is on the route.',
    icon: Navigation,
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconClass: 'bg-emerald-100 text-emerald-700',
  },
  awaiting_payment: {
    label: 'Arrived, payment pending',
    description: 'The rider has reached the drop-off point and payment is being completed.',
    icon: CreditCard,
    badgeClass: 'bg-red-50 text-awcc-primary border-red-200',
    iconClass: 'bg-red-100 text-awcc-primary',
  },
  delivered: {
    label: 'Delivered',
    description: 'This delivery has been completed successfully.',
    icon: CheckCircle2,
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconClass: 'bg-emerald-100 text-emerald-700',
  },
  cancelled: {
    label: 'Cancelled',
    description: 'This delivery is no longer active.',
    icon: AlertTriangle,
    badgeClass: 'bg-gray-100 text-gray-700 border-gray-200',
    iconClass: 'bg-gray-200 text-gray-700',
  },
};

function getStatusMeta(status?: string) {
  return STATUS_META[status as keyof typeof STATUS_META] || {
    label: status ? status.replace(/_/g, ' ') : 'Unknown status',
    description: 'We are checking the latest update for this order.',
    icon: Package,
    badgeClass: 'bg-gray-100 text-gray-700 border-gray-200',
    iconClass: 'bg-gray-200 text-gray-700',
  };
}

function parseCoord(value: number | string | null | undefined): number | null {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatTime(value: Date | null) {
  if (!value) return 'Not yet checked';
  return value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function calculateDistanceKm(from: Coord, to: Coord) {
  const earthRadiusKm = 6371;
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
  const dLat = toRadians(to.lat - from.lat);
  const dLng = toRadians(to.lng - from.lng);
  const lat1 = toRadians(from.lat);
  const lat2 = toRadians(to.lat);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatEta(distanceKm: number, speedKmh: number) {
  if (!Number.isFinite(distanceKm) || distanceKm <= 0) return 'Arriving now';
  const minutes = Math.max(1, Math.ceil((distanceKm / speedKmh) * 60));
  return minutes === 1 ? '1 min' : `${minutes} mins`;
}

function clampProgress(value: number) {
  return Math.max(0, Math.min(100, value));
}

function getStaticStatusProgress(status?: string) {
  if (!status || status === 'cancelled') return 0;
  const index = STATUS_ORDER.indexOf(status);
  if (index < 0) return 0;
  return Math.min(100, Math.max(8, (index / (STATUS_ORDER.length - 1)) * 100));
}

function getTrackingProgress(track: TrackPayload | null) {
  if (!track) return { progress: 0, etaText: '' };
  if (track.status === 'cancelled') return { progress: 0, etaText: '' };
  if (track.status === 'awaiting_payment' || track.status === 'delivered') {
    return { progress: 100, etaText: track.status === 'delivered' ? 'Completed' : 'Arrived' };
  }

  const pickupLat = parseCoord(track.pickupLatitude);
  const pickupLng = parseCoord(track.pickupLongitude);
  const dropoffLat = parseCoord(track.dropoffLatitude);
  const dropoffLng = parseCoord(track.dropoffLongitude);
  const riderLat = parseCoord(track.driver?.latitude);
  const riderLng = parseCoord(track.driver?.longitude);

  if (
    riderLat == null ||
    riderLng == null ||
    pickupLat == null ||
    pickupLng == null ||
    dropoffLat == null ||
    dropoffLng == null
  ) {
    return { progress: getStaticStatusProgress(track.status), etaText: '' };
  }

  const rider = { lat: riderLat, lng: riderLng };
  const pickup = { lat: pickupLat, lng: pickupLng };
  const dropoff = { lat: dropoffLat, lng: dropoffLng };

  if (track.status === 'assigned') {
    const distanceKm = calculateDistanceKm(rider, pickup);
    const etaText = formatEta(distanceKm, 30);
    const etaMinutes = Math.max(1, Math.ceil((distanceKm / 30) * 60));
    const approachRatio = 1 - Math.min(etaMinutes, 20) / 20;
    return {
      progress: clampProgress(25 + approachRatio * 25),
      etaText,
    };
  }

  if (track.status === 'picked_up' || track.status === 'in_transit') {
    const remainingKm = calculateDistanceKm(rider, dropoff);
    const totalKm = calculateDistanceKm(pickup, dropoff);
    const etaText = formatEta(remainingKm, 45);
    if (totalKm > 0) {
      const completedRatio = 1 - remainingKm / totalKm;
      return {
        progress: clampProgress(50 + completedRatio * 45),
        etaText,
      };
    }
    return {
      progress: getStaticStatusProgress(track.status),
      etaText,
    };
  }

  return { progress: getStaticStatusProgress(track.status), etaText: '' };
}

function getPreviewMarkers(track: TrackPayload | null): PreviewMarker[] {
  if (!track) return [];

  const pickupLat = parseCoord(track.pickupLatitude);
  const pickupLng = parseCoord(track.pickupLongitude);
  const dropoffLat = parseCoord(track.dropoffLatitude);
  const dropoffLng = parseCoord(track.dropoffLongitude);
  const riderLat = parseCoord(track.driver?.latitude);
  const riderLng = parseCoord(track.driver?.longitude);

  return [
    pickupLat != null && pickupLng != null
      ? { kind: 'pickup' as const, label: 'Pickup', coord: { lat: pickupLat, lng: pickupLng } }
      : null,
    riderLat != null && riderLng != null
      ? { kind: 'rider' as const, label: 'Rider', coord: { lat: riderLat, lng: riderLng } }
      : null,
    dropoffLat != null && dropoffLng != null
      ? { kind: 'dropoff' as const, label: 'Drop-off', coord: { lat: dropoffLat, lng: dropoffLng } }
      : null,
  ].filter(Boolean) as PreviewMarker[];
}

function positionMarkers(markers: PreviewMarker[]): PositionedMarker[] {
  if (markers.length === 0) return [];
  if (markers.length === 1) return [{ ...markers[0], x: 50, y: 50 }];

  const lats = markers.map((marker) => marker.coord.lat);
  const lngs = markers.map((marker) => marker.coord.lng);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);
  const latRange = maxLat - minLat || 0.01;
  const lngRange = maxLng - minLng || 0.01;

  return markers.map((marker) => ({
    ...marker,
    x: 14 + ((marker.coord.lng - minLng) / lngRange) * 72,
    y: 16 + (1 - (marker.coord.lat - minLat) / latRange) * 68,
  }));
}

function buildMapsHref(track: TrackPayload | null) {
  if (!track) return null;
  const riderLat = parseCoord(track.driver?.latitude);
  const riderLng = parseCoord(track.driver?.longitude);
  const dropoffLat = parseCoord(track.dropoffLatitude);
  const dropoffLng = parseCoord(track.dropoffLongitude);

  if (riderLat != null && riderLng != null && dropoffLat != null && dropoffLng != null) {
    return `https://www.google.com/maps/dir/?api=1&origin=${riderLat},${riderLng}&destination=${dropoffLat},${dropoffLng}&travelmode=driving`;
  }

  if (riderLat != null && riderLng != null) {
    return `https://www.google.com/maps/search/?api=1&query=${riderLat},${riderLng}`;
  }

  if (dropoffLat != null && dropoffLng != null) {
    return `https://www.google.com/maps/search/?api=1&query=${dropoffLat},${dropoffLng}`;
  }

  return null;
}

function TrackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId')?.trim() || '';
  const deliveryId = searchParams.get('deliveryId')?.trim() || '';

  const [track, setTrack] = useState<TrackPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [refreshTick, setRefreshTick] = useState(0);
  const [manualOrderId, setManualOrderId] = useState(orderId);

  useEffect(() => {
    setManualOrderId(orderId);
  }, [orderId]);

  useEffect(() => {
    if (!orderId) {
      setTrack(null);
      setLoading(false);
      setError('Missing order ID. Open the full link from your SMS or enter the order ID below.');
      return;
    }

    let cancelled = false;

    const fetchTrack = async (silent = false) => {
      if (!silent) {
        setLoading(true);
        setError(null);
      }

      try {
        const query = new URLSearchParams({ orderId });
        if (deliveryId) query.set('deliveryId', deliveryId);

        const response = await fetch(`${API_BASE}/deliveries/public/track?${query.toString()}`, {
          cache: 'no-store',
        });
        const text = await response.text();
        let data: { track?: TrackPayload; message?: string } | null = null;

        try {
          data = text ? JSON.parse(text) : null;
        } catch {
          throw new Error('Tracking service returned an unexpected response.');
        }

        if (cancelled) return;

        if (!response.ok || !data?.track) {
          setError(data?.message || 'Order not found.');
          setTrack(null);
          return;
        }

        setTrack(data.track);
        setError(null);
        setLastUpdated(new Date());
      } catch (fetchError) {
        if (!cancelled) {
          const message =
            fetchError instanceof Error
              ? fetchError.message
              : 'Could not load tracking. Check your connection and try again.';
          setError(message);
          setTrack(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchTrack(false);
    const timer = window.setInterval(() => fetchTrack(true), 15000);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [orderId, deliveryId, refreshTick]);

  const statusMeta = getStatusMeta(track?.status);
  const StatusIcon = statusMeta.icon;
  const trackingProgress = useMemo(() => getTrackingProgress(track), [track]);
  const progress = trackingProgress.progress;
  const markers = useMemo(() => positionMarkers(getPreviewMarkers(track)), [track]);
  const mapPoints = markers.map((marker) => `${marker.x},${marker.y}`).join(' ');
  const mapsHref = buildMapsHref(track);
  const hasRiderLocation = markers.some((marker) => marker.kind === 'rider');

  const handleManualSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedOrderId = manualOrderId.trim();
    if (!trimmedOrderId) {
      setError('Enter an order ID to track your delivery.');
      return;
    }
    router.push(`/track?orderId=${encodeURIComponent(trimmedOrderId)}`);
  };

  return (
    <section className="min-h-screen bg-[#F7F8FA] px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="pb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-3 py-1 text-sm font-semibold text-awcc-primary shadow-sm">
              <Route size={15} />
              Live delivery tracking
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Track your Maanga delivery
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">
              Follow the latest rider status, destination details, and live location updates from
              your secure tracking link.
            </p>
          </div>

          <form
            onSubmit={handleManualSubmit}
            className="flex w-full flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm sm:max-w-md sm:flex-row"
          >
            <label htmlFor="track-order-id" className="sr-only">
              Order ID
            </label>
            <div className="flex min-w-0 flex-1 items-center gap-2 px-3">
              <Search size={18} className="shrink-0 text-gray-400" />
              <input
                id="track-order-id"
                value={manualOrderId}
                onChange={(event) => setManualOrderId(event.target.value)}
                placeholder="Enter order ID"
                className="min-h-11 w-full min-w-0 bg-transparent text-sm font-medium text-gray-900 outline-none placeholder:text-gray-400"
              />
            </div>
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-awcc-primary px-5 text-sm font-semibold text-white hover:bg-awcc-primary-light"
            >
              Track
            </button>
          </form>
        </div>

        {loading ? (
          <TrackingSkeleton />
        ) : error ? (
          <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-awcc-primary">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-950">Tracking unavailable</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">{error}</p>
                </div>
              </div>
              {orderId ? (
                <button
                  onClick={() => setRefreshTick((tick) => tick + 1)}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 text-sm font-semibold text-gray-800 hover:border-awcc-primary hover:text-awcc-primary"
                >
                  <RefreshCcw size={16} />
                  Try again
                </button>
              ) : null}
            </div>
          </div>
        ) : track ? (
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${statusMeta.iconClass}`}>
                      <StatusIcon size={28} />
                    </div>
                    <div>
                      <div className={`mb-2 inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${statusMeta.badgeClass}`}>
                        {statusMeta.label}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-950">Order {track.orderId}</h2>
                      <p className="mt-2 text-sm leading-6 text-gray-600">{statusMeta.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setRefreshTick((tick) => tick + 1)}
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 text-sm font-semibold text-gray-700 hover:border-awcc-primary hover:text-awcc-primary"
                  >
                    <RefreshCcw size={15} />
                    Refresh
                  </button>
                </div>

                <div className="mt-6">
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-awcc-primary transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {STATUS_STEPS.map((step) => {
                      const stepIndex = STATUS_ORDER.indexOf(step.id);
                      const activeIndex = STATUS_ORDER.indexOf(track.status);
                      const isDone = track.status !== 'cancelled' && activeIndex >= stepIndex;
                      return (
                        <div key={step.id} className="flex items-center gap-2 text-sm">
                          {isDone ? (
                            <CheckCircle2 size={17} className="text-awcc-primary" />
                          ) : (
                            <span className="h-[17px] w-[17px] rounded-full border border-gray-300" />
                          )}
                          <span className={isDone ? 'font-semibold text-gray-900' : 'text-gray-500'}>
                            {step.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard
                  icon={<MapPin size={21} />}
                  label="Drop-off"
                  value={track.dropoffAddress || 'Drop-off location not available'}
                />
                <InfoCard
                  icon={<Clock3 size={21} />}
                  label="Last checked"
                  value={formatTime(lastUpdated)}
                />
                <InfoCard
                  icon={<LocateFixed size={21} />}
                  label="Rider location"
                  value={hasRiderLocation ? 'Live location available' : 'Waiting for rider GPS'}
                />
                <InfoCard
                  icon={<ShieldCheck size={21} />}
                  label="Estimated arrival"
                  value={trackingProgress.etaText || 'Waiting for rider GPS'}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-100 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-awcc-primary">
                        Route preview
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-gray-950">
                        {hasRiderLocation ? 'Rider location is live' : 'Route is being prepared'}
                      </h3>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100 text-gray-700">
                      <Navigation size={22} />
                    </div>
                  </div>
                </div>

                <div className="relative h-[360px] overflow-hidden bg-[#F2F4F7]">
                  <div
                    className="absolute inset-0 opacity-70"
                    style={{
                      backgroundImage:
                        'linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                  {markers.length > 1 ? (
                    <svg
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      className="absolute inset-0 h-full w-full"
                      aria-hidden="true"
                    >
                      <polyline
                        points={mapPoints}
                        fill="none"
                        stroke="#C00000"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="6 5"
                      />
                    </svg>
                  ) : null}

                  {markers.length > 0 ? (
                    markers.map((marker) => (
                      <div
                        key={`${marker.kind}-${marker.label}`}
                        className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                      >
                        <div
                          className={[
                            'flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-white shadow-lg',
                            marker.kind === 'pickup'
                              ? 'bg-emerald-600 text-white'
                              : marker.kind === 'dropoff'
                                ? 'bg-awcc-primary text-white'
                                : 'bg-gray-950 text-white',
                          ].join(' ')}
                        >
                          {marker.kind === 'pickup' ? (
                            <Package size={22} />
                          ) : marker.kind === 'dropoff' ? (
                            <MapPin size={22} />
                          ) : (
                            <Navigation size={22} />
                          )}
                        </div>
                        <span className="mt-2 block whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-800 shadow-sm">
                          {marker.label}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                      <div>
                        <MapPin size={36} className="mx-auto mb-3 text-gray-400" />
                        <p className="text-sm font-semibold text-gray-700">
                          Location coordinates are not available yet.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  {mapsHref ? (
                    <a
                      href={mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gray-950 px-4 text-sm font-semibold text-white hover:bg-awcc-primary"
                    >
                      {hasRiderLocation ? 'Open rider route in Google Maps' : 'Open location in Google Maps'}
                      <ExternalLink size={17} />
                    </a>
                  ) : (
                    <div className="rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-600">
                      Map links appear when the delivery has usable GPS coordinates.
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-awcc-primary">
                    <Package size={21} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-950">Prefer the app?</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Open the same link on your phone. If the Maanga app is installed, it can open
                      the in-app tracking experience automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-awcc-primary">
        {icon}
      </div>
      <p className="text-xs font-bold uppercase tracking-wide text-gray-500">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-gray-950">{value}</p>
    </div>
  );
}

function TrackingSkeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
      <div className="space-y-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex gap-4">
            <div className="h-14 w-14 animate-pulse rounded-2xl bg-gray-100" />
            <div className="flex-1">
              <div className="h-5 w-36 animate-pulse rounded-full bg-gray-100" />
              <div className="mt-4 h-8 w-56 animate-pulse rounded-xl bg-gray-100" />
              <div className="mt-3 h-4 w-full animate-pulse rounded-full bg-gray-100" />
            </div>
          </div>
          <div className="mt-8 h-2 animate-pulse rounded-full bg-gray-100" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="h-11 w-11 animate-pulse rounded-2xl bg-gray-100" />
              <div className="mt-5 h-3 w-20 animate-pulse rounded-full bg-gray-100" />
              <div className="mt-3 h-5 w-40 animate-pulse rounded-full bg-gray-100" />
            </div>
          ))}
        </div>
      </div>
      <div className="h-[520px] rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="h-full animate-pulse rounded-2xl bg-gray-100" />
      </div>
    </div>
  );
}

export default function TrackPage() {
  return (
    <Suspense
      fallback={
        <section className="min-h-screen bg-[#F7F8FA] px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <TrackingSkeleton />
          </div>
        </section>
      }
    >
      <TrackContent />
    </Suspense>
  );
}
