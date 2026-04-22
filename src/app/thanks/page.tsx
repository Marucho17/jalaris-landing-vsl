"use client";

import { useEffect } from "react";
import { Footer } from "@/components/footer";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function ThanksPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
  }, []);

  return (
    <>
      <main className="flex-1 flex items-center justify-center px-4 py-24 sm:py-32">
        <div className="text-center max-w-lg">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Recibimos tu solicitud
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nuestro equipo se va a contactar con vos por WhatsApp para
            coordinar tu sesión de diagnóstico gratuita.
          </p>
          <p className="text-gray-500 text-sm mt-6">
            Respondemos en menos de 24 horas hábiles.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
