"use client";

import { AnimatedSection } from "./animated-section";

export function Reviews() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <AnimatedSection className="max-w-4xl mx-auto">
        <iframe
          src="https://reputationhub.site/reputation/widgets/review_widget/fz2niYahzEMxGK3ofz8X?widgetId=69d83ec0f4d9d5a0ef2ed90f"
          className="w-full border-0"
          style={{ minWidth: "100%", width: "100%", height: "850px" }}
          scrolling="no"
          loading="lazy"
        />
      </AnimatedSection>
    </section>
  );
}
