import { useId } from "react";

export default function BrandIcon({ brand, className = "" }) {
  const gradientId = useId().replace(/:/g, "");

  if (brand === "linkedin") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#0A66C2" />
        <path
          fill="#fff"
          d="M6.75 9.45h3.05v8.15H6.75V9.45Zm1.52-3.9a1.58 1.58 0 1 1 0 3.16 1.58 1.58 0 0 1 0-3.16Zm3.1 3.9h2.92v1.12h.04c.4-.77 1.4-1.4 2.88-1.4 3.08 0 3.64 2.02 3.64 4.65v3.78H17.8v-3.35c0-.8-.02-1.83-1.12-1.83-1.12 0-1.3.88-1.3 1.78v3.4h-3.02V9.45Z"
        />
      </svg>
    );
  }

  if (brand === "leetcode") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.8 4.2 7.4 11.6a3.4 3.4 0 0 0 0 4.8l3.2 3.2" stroke="#FFA116" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 19.7 19.7 15" stroke="#B3B3B3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.4 12h8.8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M10.8 4.3 5.5 9.6a6 6 0 0 0 0 8.5l2 2" stroke="#111827" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      </svg>
    );
  }

  if (brand === "instagram") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id={`instagram-${gradientId}`} x1="2" x2="22" y1="22" y2="2">
            <stop offset="0" stopColor="#FEDA75" />
            <stop offset="0.3" stopColor="#FA7E1E" />
            <stop offset="0.55" stopColor="#D62976" />
            <stop offset="0.78" stopColor="#962FBF" />
            <stop offset="1" stopColor="#4F5BD5" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill={`url(#instagram-${gradientId})`} />
        <circle cx="12" cy="12" r="4.3" fill="none" stroke="#fff" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="#fff" />
      </svg>
    );
  }

  if (brand === "gmail") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#EA4335" d="M3.6 6.1 12 12.6l8.4-6.5v11.8a1.5 1.5 0 0 1-1.5 1.5H5.1a1.5 1.5 0 0 1-1.5-1.5V6.1Z" />
        <path fill="#FBBC04" d="M3.6 6.1 12 12.6l-2 1.55-6.4-4.92V6.1Z" />
        <path fill="#34A853" d="M20.4 6.1v3.13L14 14.15l-2-1.55 8.4-6.5Z" />
        <path fill="#4285F4" d="M5.1 19.4h13.8a1.5 1.5 0 0 0 1.5-1.5v-8.67L14 14.15 12 12.6l-2 1.55-6.4-4.92v8.67a1.5 1.5 0 0 0 1.5 1.5Z" opacity="0.16" />
        <path fill="#C5221F" d="M3.6 6.1 12 12.6l8.4-6.5v2.68L12 15.28 3.6 8.78V6.1Z" />
      </svg>
    );
  }

  if (brand === "github") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.88-.02-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.35 1.1 2.92.84.09-.66.35-1.1.63-1.36-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .85-.27 2.76 1.05A9.42 9.42 0 0 1 12 6.88c.85 0 1.7.12 2.5.35 1.9-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9 0 1.36-.02 2.47-.02 2.81 0 .27.18.59.69.49A10.12 10.12 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    );
  }

  return null;
}
