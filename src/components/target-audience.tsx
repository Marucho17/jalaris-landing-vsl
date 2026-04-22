"use client";

import { AnimatedSection } from "./animated-section";

const forYou = [
  "Querés reducir medidas en zonas específicas (abdomen, flancos, muslos, papada)",
  "Ya probaste dietas y ejercicio pero hay zonas que no cambian",
  "Buscás un tratamiento con respaldo científico y aprobación FDA",
  "Querés resultados progresivos sin pasar por un quirófano",
  "Valorás un enfoque personalizado con evaluación médica real",
];

const notForYou = [
  "Buscás una solución mágica sin ningún compromiso",
  "Esperás perder 20 kilos con un láser",
  "Querés resultados de la noche a la mañana",
  "No estás dispuesta a seguir las recomendaciones del protocolo",
];

export function TargetAudience() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Esto no es para cualquiera.{" "}
            <span className="text-gold">Fijate si te reconocés.</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          <AnimatedSection>
            <div className="bg-white border-2 border-gold/30 rounded-3xl p-6 sm:p-8 h-full shadow-lg">
              <h3 className="text-lg font-bold text-gold mb-6 uppercase tracking-wide">
                Es para vos si
              </h3>
              <ul className="space-y-4">
                {forYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
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
                    <span className="text-gray-700 text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-gray-900 rounded-3xl p-6 sm:p-8 h-full shadow-lg">
              <h3 className="text-lg font-bold text-gray-400 mb-6 uppercase tracking-wide">
                No es para vos si
              </h3>
              <ul className="space-y-4">
                {notForYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
