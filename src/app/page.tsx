import { BlobBackground } from "@/components/blob-background";
import { Hero } from "@/components/hero";
import { Reviews } from "@/components/reviews";
import { BeforeAfter } from "@/components/before-after";
import { Founder } from "@/components/founder";
import { TargetAudience } from "@/components/target-audience";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <BlobBackground />
      <main className="flex-1">
        <Hero />
        <Reviews />
        <BeforeAfter />
        <Founder />
        <TargetAudience />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
