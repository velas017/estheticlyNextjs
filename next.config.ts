import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

/**
 * Content Security Policy.
 *
 * Allowances beyond 'self':
 *  - Acuity Scheduling booking embed: the iframe (app.acuityscheduling.com)
 *    and its resizer script (embed.acuityscheduling.com/js/embed.js).
 *  - 'unsafe-inline' for script/style is required because Next.js injects
 *    inline bootstrap scripts and inline styles (next/font, hydration) and
 *    this site does not use a nonce-based middleware.
 *  - Dev-only: 'unsafe-eval' (React Fast Refresh) and ws:/http: (HMR socket).
 */
const csp = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://embed.acuityscheduling.com https://*.acuityscheduling.com`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' data: blob: https://*.acuityscheduling.com`,
  `font-src 'self' data:`,
  `frame-src https://app.acuityscheduling.com https://*.acuityscheduling.com`,
  `connect-src 'self' https://*.acuityscheduling.com${isDev ? " ws: http:" : ""}`,
  `form-action 'self' https://app.acuityscheduling.com https://*.acuityscheduling.com`,
  `frame-ancestors 'self'`,
  `base-uri 'self'`,
  `object-src 'none'`,
  ...(isDev ? [] : [`upgrade-insecure-requests`]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
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
