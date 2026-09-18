"use client";

import { AnimatedSection } from "./animated-section";

const OPTIONS = [
  {
    name: "Cherry",
    detail: "Consultar no afecta tu score",
    href: "https://pay.withcherry.com/aestheticpoint?utm_source=merchant&utm_medium=qr_code_flyer&utm_campaign=v1",
  },
  {
    name: "CareCredit",
    detail: "Tarjeta de salud aceptada en la clínica",
    href: "https://go.carecredit.com/consumer/home?sitecode=CCQRCDS1X",
  },
];

export function Financing() {
  return (
    <section id="financiacion" className="py-16 sm:py-20 px-4">
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
          Tu tratamiento, <span className="text-gold">en cuotas</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Fijate desde el celular si calificás con Cherry o con CareCredit. Son
          unos minutos y te dice al momento con cuánto contás.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {OPTIONS.map((o) => (
            <a
              key={o.name}
              href={o.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-gold/40 bg-white/70 px-6 py-5 text-left shadow-sm transition hover:border-gold hover:shadow-md"
            >
              <span className="block text-lg font-bold">{o.name}</span>
              <span className="block text-sm text-gray-600 mt-1">
                Ver si califico · {o.detail}
              </span>
            </a>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
