"use client";

import { CTABanner } from "@/components/services/ServicesCTA";

export default function SolutionsCTA() {
  return (
    <section id="solutions-cta" className="w-full py-20 gradient-mesh-2">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABanner
          heading="Have a unique enterprise bottleneck?"
          body="Our R&D and consulting practices specialise in bespoke engineering. If standard commercial tools are failing your throughput requirements, our architects are ready to design a tailor-made solution."
          primaryLabel="Consult with our Architects"
          primaryHref="/contact"
          secondaryLabel="View Services"
          secondaryHref="/services"
          watermarkIcon="tips_and_updates"
        />
      </div>
    </section>
  );
}
