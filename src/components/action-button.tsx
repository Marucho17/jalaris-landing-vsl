"use client";

import { trackCtaClick } from "@/lib/analytics";

const WHATSAPP_NUMBER = "5493543609964";
const WHATSAPP_MESSAGE =
  "Hola! Vi tu negocio en Google y quiero más información";

const CTA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCtaClick(location)}
      className={`inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-white font-semibold text-base sm:text-lg hover:bg-gold-dark transition-all duration-300 shadow-lg shadow-gold/25 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 text-center leading-snug ${className}`}
    >
      {text}
    </a>
  );
}
