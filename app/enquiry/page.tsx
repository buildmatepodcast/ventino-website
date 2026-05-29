import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import EnquiryForm from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Start an Enquiry",
  description:
    "Share your project with Ventino Windows — we'll come to site, listen, and specify the right system for your home.",
};

export default function EnquiryPage() {
  return (
    <>
      <section className="bg-[#1F3D2E] pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel light className="mb-6">New project</SectionLabel>
          <h1
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-[#F6F5F0] leading-[1.05] max-w-3xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Tell us about<br />
            <em>your project.</em>
          </h1>
          <p className="mt-6 text-[#7FB89B] max-w-md leading-relaxed">
            We welcome every enquiry with a site visit. Share what you have — drawings, sketches, or just an idea — and we&apos;ll take it from there.
          </p>
        </div>
      </section>

      <section className="bg-[#F6F5F0] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
