import posthog from "posthog-js";

export function trackCtaClick(location: string) {
  posthog.capture("cta_clicked", { location });
}
