'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function LocationRequestContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('li');
  
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [address, setAddress] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResolvingAddress, setIsResolvingAddress] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!token) {
      setError('Invalid location request link');
    }
  }, [token]);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    setIsLoading(true);
    setError('');

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setLocation(position);
        setIsLoading(false);
        setIsResolvingAddress(true);

        // Reverse geocode to get real address only (never show coordinates)
        try {
          let resolvedAddress = '';
          const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
          if (googleApiKey) {
            const res = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${googleApiKey}`
            );
            const data = await res.json();
            if (data?.status === 'OK' && data.results?.length > 0) {
              resolvedAddress = data.results[0].formatted_address;
            }
          }
          if (!resolvedAddress) {
            const nom = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`,
              { headers: { 'Accept-Language': 'en' } }
            );
            const nomData = await nom.json();
            if (nomData?.display_name) resolvedAddress = nomData.display_name;
          }
          setAddress(resolvedAddress || '');
        } catch (e) {
          setAddress('');
        } finally {
          setIsResolvingAddress(false);
        }
      },
      (err) => {
        setIsLoading(false);
        setError('Failed to get your location. Please ensure location permissions are enabled.');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const shareLocation = async () => {
    if (!location || !token) {
      setError('Please get your location first');
      return;
    }

    setIsSharing(true);
    setError('');

    try {
      // Use relative API URL or environment variable
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.maangalogistics.com/api';
      const response = await fetch(`${API_BASE_URL}/location-requests/respond/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          address: address || undefined,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.message || 'Failed to share location');
      }
    } catch (err: any) {
      setError('Failed to share location. Please try again.');
    } finally {
      setIsSharing(false);
    }
  };

  if (!token) {
    return (
      <div style={styles.container}>
        <div style={styles.errorContainer}>
          <h1 style={styles.errorTitle}>Invalid Link</h1>
          <p style={styles.errorText}>This location request link is invalid.</p>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div style={styles.container}>
        <div style={styles.successContainer}>
          <div style={styles.successIcon}>✓</div>
          <h1 style={styles.successTitle}>Location Confirmed</h1>
          <p style={styles.successText}>
            You have confirmed your location. The person who requested it has been notified.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Share Your Location</h1>
        <p style={styles.subtitle}>
          Someone is requesting your current location for a delivery. Please click the button below to share your location.
        </p>

        {error && (
          <div style={styles.errorBox}>
            <p style={styles.errorText}>{error}</p>
          </div>
        )}

        {location ? (
          <div style={styles.locationCard}>
            <div style={styles.locationCardAccent} />
            <div style={styles.locationIconWrap}>
              <span style={styles.locationIcon}>📍</span>
            </div>
            <h2 style={styles.locationTitle}>Your location</h2>
            {isResolvingAddress ? (
              <p style={styles.locationResolving}>Resolving address...</p>
            ) : (
              <p style={styles.locationName}>{address || 'Address could not be determined'}</p>
            )}
            <button
              style={styles.confirmButton}
              onClick={shareLocation}
              disabled={isSharing || isResolvingAddress}>
              {isSharing ? 'Confirming...' : 'Confirm Location'}
            </button>
          </div>
        ) : (
          <div style={styles.locationCard}>
            <div style={styles.locationCardAccent} />
            <div style={styles.locationIconWrap}>
              <span style={styles.locationIcon}>📍</span>
            </div>
            <h2 style={styles.locationTitle}>Get Your Location</h2>
            <p style={styles.locationSubtitle}>
              Allow access to your location so we can show your real address
            </p>
            <button
              style={styles.getLocationButton}
              onClick={getLocation}
              disabled={isLoading}>
              {isLoading ? 'Getting location...' : 'Get My Location'}
            </button>
          </div>
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
    backgroundColor: '#F8F9FA',
    padding: '20px',
  },
  content: {
    maxWidth: '500px',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '40px 32px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '12px',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    lineHeight: '24px',
    marginBottom: '32px',
    textAlign: 'center',
  },
  errorBox: {
    backgroundColor: '#FFEBEE',
    border: '1px solid #F44336',
    borderRadius: '8px',
    padding: '12px',
    marginBottom: '24px',
  },
  errorText: {
    color: '#F44336',
    fontSize: '14px',
    margin: 0,
  },
  locationCard: {
    position: 'relative' as const,
    textAlign: 'center',
    padding: '28px 24px 32px',
    borderRadius: '16px',
    backgroundColor: '#FAFBFC',
    border: '1px solid #E8ECF0',
    overflow: 'hidden',
  },
  locationCardAccent: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #C52B39 0%, #a0222e 100%)',
  },
  locationIconWrap: {
    marginBottom: '16px',
  },
  locationIcon: {
    fontSize: '48px',
  },
  locationTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '12px',
    letterSpacing: '-0.02em',
  },
  locationSubtitle: {
    fontSize: '15px',
    color: '#64748B',
    marginBottom: '24px',
    lineHeight: 1.5,
  },
  locationResolving: {
    fontSize: '15px',
    color: '#64748B',
    marginBottom: '24px',
    fontStyle: 'italic',
  },
  locationName: {
    fontSize: '17px',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '28px',
    lineHeight: 1.5,
    padding: '0 8px',
  },
  getLocationButton: {
    width: '100%',
    backgroundColor: '#C52B39',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '12px',
    padding: '16px 24px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s, transform 0.1s',
  },
  confirmButton: {
    width: '100%',
    backgroundColor: '#0F172A',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '12px',
    padding: '16px 24px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s, transform 0.1s',
  },
  successContainer: {
    textAlign: 'center',
    padding: '40px',
  },
  successIcon: {
    fontSize: '64px',
    color: '#4CAF50',
    marginBottom: '16px',
  },
  successTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '12px',
  },
  successText: {
    fontSize: '16px',
    color: '#666',
  },
  errorContainer: {
    textAlign: 'center',
    padding: '40px',
  },
  errorTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#F44336',
    marginBottom: '12px',
  },
};

export default function LocationRequestPage() {
  return (
    <Suspense fallback={
      <div style={styles.container}>
        <div style={styles.content}>
          <p>Loading...</p>
        </div>
      </div>
    }>
      <LocationRequestContent />
    </Suspense>
  );
}
