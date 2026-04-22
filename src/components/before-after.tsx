"use client";

import { AnimatedSection } from "./animated-section";
import { ActionButton } from "./action-button";
import { ImageSlider } from "./image-slider";

const BEFORE_2 = "/images/espalda-despues.png";
const AFTER_2 = "/images/espalda-antes.png";

const checkItems = [
  "Reducción de medidas desde la primera sesión",
  "Resultados progresivos y acumulativos",
  "Sin cirugía, sin anestesia, sin recuperación",
  "Protocolo 100% personalizado con evaluación InBody",
  "Más de 1.000 tratamientos realizados",
];

export function BeforeAfter() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Lo que pasa cuando dejás de pelear con tu cuerpo
            <br className="hidden sm:block" />
            <span className="text-gold"> y empezás a tratarlo</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <AnimatedSection className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-2">
                Reducción real, no temporal
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No es retención de líquidos ni un efecto que dura 48 horas. El
                Método Jalaris actúa directamente sobre las células grasas,
                eliminándolas de forma permanente.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">
                Piel que se redefine sola
              </h3>
              <p className="text-gray-600 leading-relaxed">
                La tecnología láser estimula la producción de colágeno,
                logrando una piel más firme y tersa como efecto secundario del
                tratamiento.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Tu vida no para</h3>
              <p className="text-gray-600 leading-relaxed">
                Sin tiempo de recuperación. Llegás, te tratás y seguís con tu
                día. Cada sesión dura entre 25 y 40 minutos.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={0.15}
            className="bg-white border border-gold/20 rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-6">Lo que podés esperar:</h3>
            <ul className="space-y-4">
              {checkItems.map((item, i) => (
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
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>

        <AnimatedSection className="max-w-lg mx-auto mb-12">
          <ImageSlider
            beforeSrc={BEFORE_2}
            afterSrc={AFTER_2}
            alt="Tratamiento espalda"
          />
        </AnimatedSection>

        <AnimatedSection className="text-center">
          <ActionButton
            location="before_after"
            text="Quiero saber si aplico para el Método Jalaris"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
