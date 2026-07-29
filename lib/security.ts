const ORDER_ID_PATTERN = /^[a-zA-Z0-9_-]{3,32}$/;
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const LOCATION_TOKEN_PATTERN = /^[0-9a-f]{64}$/i;
const PAYMENT_REFERENCE_PATTERN = /^[a-zA-Z0-9._=-]{3,128}$/;

function normalizeParam(value: string | null | undefined, maxLength: number) {
  const normalized = String(value || '').trim();
  return normalized.length <= maxLength ? normalized : '';
}

export function sanitizeOrderId(value: string | null | undefined) {
  const normalized = normalizeParam(value, 32);
  return ORDER_ID_PATTERN.test(normalized) ? normalized : '';
}

export function sanitizeUuid(value: string | null | undefined) {
  const normalized = normalizeParam(value, 36);
  return UUID_PATTERN.test(normalized) ? normalized : '';
}

export function sanitizeLocationToken(value: string | null | undefined) {
  const normalized = normalizeParam(value, 64);
  return LOCATION_TOKEN_PATTERN.test(normalized) ? normalized : '';
}

export function sanitizePaymentReference(value: string | null | undefined) {
  const normalized = normalizeParam(value, 128);
  return PAYMENT_REFERENCE_PATTERN.test(normalized) ? normalized : '';
}

export function sanitizePaymentAmount(value: string | null | undefined) {
  const normalized = normalizeParam(value, 16);
  if (!normalized) return '';

  const amount = Number(normalized);
  if (!Number.isFinite(amount) || amount < 0 || amount > 1_000_000) return '';

  return normalized;
}

export function isValidLatLng(latitude: number, longitude: number) {
  return (
    Number.isFinite(latitude) &&
    Number.isFinite(longitude) &&
    latitude >= -90 &&
    latitude <= 90 &&
    longitude >= -180 &&
    longitude <= 180
  );
}

export function limitText(value: string, maxLength: number) {
  return value.trim().slice(0, maxLength);
}
