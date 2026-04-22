"use client";

import { AnimatedSection } from "./animated-section";
import { ActionButton } from "./action-button";

export function FinalCta() {
  return (
    <section className="relative py-20 sm:py-28 px-4 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-gold/10 blur-3xl animate-blob" />
        <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-gold/8 blur-3xl animate-blob-delay" />
      </div>

      <AnimatedSection className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
          Da el primer paso hacia{" "}
          <span className="text-gold">tu mejor versión</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mb-4 max-w-xl mx-auto">
          Reservá tu sesión de diagnóstico gratuita. Solo abrimos 5 turnos por
          semana para garantizar atención personalizada.
        </p>
        <p className="text-gray-500 text-sm mb-10">
          Nos contactamos por WhatsApp para coordinar tu evaluación.
        </p>
        <ActionButton
          location="final_cta"
          text="Quiero mi sesión de diagnóstico gratuita"
        />
      </AnimatedSection>
    </section>
  );
}
