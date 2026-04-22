"use client";

import { AnimatedSection } from "./animated-section";

const FOUNDER_PHOTO = "/images/founder-jesica.jpg";

export function Founder() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            No te atiende cualquiera. Te atienden quienes ya lo hicieron más
            de 1.000 veces.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <AnimatedSection className="order-2 md:order-1">
            <div className="relative">
              <svg
                className="absolute -top-4 -left-2 w-20 h-20 text-gold/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="space-y-5">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Jesica Jalaris</strong> — Fundadora de Jalaris
                  Aesthetic Point. Más de 10 años en estética no invasiva en
                  Miami. Atendió a más de 1.000 pacientes — la gran mayoría
                  mujeres hispanas que llegaron diciendo exactamente lo mismo
                  que vos: &quot;Quiero volver a como estaba antes.&quot;
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Jesica no solo entiende tu tratamiento. Entiende tu vida.
                  Sabe lo que le pasa al cuerpo de una mujer cuando la vida
                  cambia — la menopausia, el estrés, el mudarse, el priorizar
                  a todos menos a vos. Lo vivió. Y por eso creó un método que
                  no te pide sacrificio — te da una solución real.
                </p>
                <p className="text-gray-900 font-semibold leading-relaxed">
                  Antes de cualquier tratamiento hacemos una evaluación InBody
                  completa: composición corporal, distribución de grasa, masa
                  muscular, hidratación. No adivinamos — medimos. Y a partir
                  de esos datos, te armamos un plan adaptado a tu situación.
                  No un protocolo genérico. Tu plan.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="order-1 md:order-2">
            <div className="rounded-3xl overflow-hidden shadow-xl max-w-sm mx-auto md:max-w-none">
              <img
                src={FOUNDER_PHOTO}
                alt="Jesica Jalaris - Fundadora de Jalaris Aesthetic Point"
                className="w-full h-auto object-cover aspect-[4/5] sm:aspect-[3/4]"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
