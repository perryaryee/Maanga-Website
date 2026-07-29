import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const publicApiOrigin = (() => {
  try {
    return new URL(process.env.NEXT_PUBLIC_API_URL || "https://api.maangalogistics.com/api").origin;
  } catch {
    return "https://api.maangalogistics.com";
  }
})();
const connectSources = [
  "'self'",
  publicApiOrigin,
  "https://api.maangalogistics.com",
  "https://maps.googleapis.com",
  "https://nominatim.openstreetmap.org",
  ...(isProduction ? [] : ["http://localhost:*", "http://127.0.0.1:*"]),
].join(" ");

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isProduction ? "" : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com",
  "font-src 'self' data:",
  `connect-src ${connectSources}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  isProduction ? "upgrade-insecure-requests" : "",
].filter(Boolean).join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), payment=(), geolocation=(self)",
  },
  ...(isProduction
    ? [{
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains; preload",
      }]
    : []),
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
