"use client";

import { motion } from "framer-motion";
import { ActionButton } from "./action-button";
import { ImageSlider } from "./image-slider";

const BEFORE_1 = "/images/hero-despues.png";
const AFTER_1 = "/images/hero-antes.png";

export function Hero() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
        >
          Tu cuerpo no necesita otra dieta.{" "}
          <span className="text-gold">
            Necesita la tecnología correcta.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          El Método Jalaris combina láser de precisión con aprobación FDA +
          evaluación médica personalizada para que logres resultados reales,
          visibles y sostenidos — sin cirugía, sin anestesia, sin tiempo de
          recuperación.
        </motion.p>

        {/* Image Slider in Hero - like original */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 max-w-lg mx-auto"
        >
          <ImageSlider
            beforeSrc={BEFORE_1}
            afterSrc={AFTER_1}
            alt="Tratamiento abdomen"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <ActionButton location="hero" />
          <p className="text-sm text-gray-500 max-w-xs">
            Evaluación personalizada. Sin costo. Sin compromiso.
            <br />
            <span className="font-medium text-gold-dark">
              Solo 5 turnos por semana.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex items-center justify-center gap-2"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 font-medium">
            Más de 500 pacientes satisfechos
          </span>
        </motion.div>
      </div>
    </section>
  );
}
