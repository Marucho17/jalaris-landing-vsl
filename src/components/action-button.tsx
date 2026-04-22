"use client";

import { trackCtaClick } from "@/lib/analytics";

const BASE_URL =
  "https://api.leadconnectorhq.com/widget/form/cJ2qSlQxGCYyufQuoa3u?notrack=true";

const UTM_PARAMS = [
  "fbclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
];

function getCtaUrl() {
  if (typeof window === "undefined") return BASE_URL;
  const params = new URLSearchParams(window.location.search);
  const extra = UTM_PARAMS.filter((k) => params.has(k))
    .map((k) => `${k}=${encodeURIComponent(params.get(k)!)}`)
    .join("&");
  return extra ? `${BASE_URL}&${extra}` : BASE_URL;
}

export function ActionButton({
  text = "Quiero agendar mi sesión de diagnóstico",
  location,
  className = "",
}: {
  text?: string;
  location: string;
  className?: string;
}) {
  return (
    <a
      href={getCtaUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCtaClick(location)}
      className={`inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-white font-semibold text-base sm:text-lg hover:bg-gold-dark transition-all duration-300 shadow-lg shadow-gold/25 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 text-center leading-snug ${className}`}
    >
      {text}
    </a>
  );
}
