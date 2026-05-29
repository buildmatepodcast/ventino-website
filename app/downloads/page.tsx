import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import { downloads } from "@/data/downloads";

export const metadata: Metadata = {
  title: "Downloads — Brochures & Specifications",
  description: "Download the Ventino MMXXVI product brochure and technical specifications.",
};

export default function DownloadsPage() {
  return (
    <>
      <section className="bg-[#1F3D2E] pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel light className="mb-6">Resources</SectionLabel>
          <h1
            className="font-display text-[clamp(3rem,7vw,6rem)] font-light text-[#F6F5F0] leading-[1.0] max-w-3xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Downloads.
          </h1>
          <p className="mt-6 text-[#7FB89B] max-w-md">
            Brochures, specifications, and reference documents. Yours to keep.
          </p>
        </div>
      </section>

      <section className="bg-[#F6F5F0] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((d, i) => (
              <div
                key={d.id}
                className="reveal border border-[#1F3D2E]/10 p-8 flex flex-col gap-4"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div>
                  <p className="label text-[#A9712F] mb-3">PDF Document</p>
                  <h3
                    className="font-display text-2xl font-light text-[#1F3D2E] mb-3"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {d.title}
                  </h3>
                  <p className="text-sm text-[#1F3D2E]/60 leading-relaxed flex-1">
                    {d.description}
                  </p>
                </div>
                <div className="mt-auto">
                  {d.size && (
                    <p className="text-xs text-[#1F3D2E]/40 mb-4">{d.size}</p>
                  )}
                  <a
                    href={`/downloads/${d.filename}`}
                    download
                    className="inline-flex items-center gap-3 border border-[#1F3D2E] text-[#1F3D2E] px-5 py-2.5 text-[0.65rem] tracking-[0.18em] uppercase hover:bg-[#1F3D2E] hover:text-[#F6F5F0] transition-all"
                  >
                    Download PDF
                    <span className="text-[#A9712F]">↓</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 border border-[#1F3D2E]/10 bg-[#EBE9DF]">
            <p className="label text-[#40916C] mb-3">For architects & specifiers</p>
            <p className="text-[#1F3D2E]/70 text-sm max-w-lg mb-4">
              Need CAD details, performance datasheets, or a custom specification document? We produce bespoke spec packs for project architects. Get in touch.
            </p>
            <a
              href="/contact"
              className="text-[0.65rem] tracking-[0.18em] uppercase text-[#A9712F] hover:gap-3 flex items-center gap-2 transition-all w-fit"
            >
              Contact our team →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
