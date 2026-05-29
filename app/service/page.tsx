import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceForm from "@/components/forms/ServiceForm";

export const metadata: Metadata = {
  title: "Service Request",
  description:
    "Ventino Windows service and after-care requests. Toll-free: 1800 309 0280.",
};

export default function ServicePage() {
  return (
    <>
      <section className="bg-[#1F3D2E] pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel light className="mb-6">After-care</SectionLabel>
          <h1
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-[#F6F5F0] leading-[1.05] max-w-3xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Service &amp;<br />
            <em>support.</em>
          </h1>
          <p className="mt-6 text-[#7FB89B] max-w-md leading-relaxed">
            For existing customers. Our service team responds within 24 hours. You can also call our toll-free number: <a href="tel:18003090280" className="text-[#F6F5F0] hover:text-[#A9712F] transition-colors">1800 309 0280</a>.
          </p>
        </div>
      </section>

      <section className="bg-[#F6F5F0] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <ServiceForm />
        </div>
      </section>
    </>
  );
}
