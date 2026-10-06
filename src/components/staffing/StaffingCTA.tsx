"use client";

import { CTABanner } from "@/components/services/ServicesCTA";

export default function StaffingCTA() {
  return (
    <section id="staffing-cta" className="w-full py-20 gradient-mesh-2">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABanner
          heading="Need key resources immediately?"
          body="Describe your team structure gaps. We deliver comprehensive CV portfolios of fully pre-vetted senior engineers or architects within 48 hours — no generic job boards."
          primaryLabel="Request Candidate Profiles"
          primaryHref="/contact"
          secondaryLabel="View Services"
          secondaryHref="/services"
          watermarkIcon="groups"
        />
      </div>
    </section>
  );
}
