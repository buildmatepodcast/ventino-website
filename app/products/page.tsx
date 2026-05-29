import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { productSystems, performancePromises } from "@/data/products";
import { powderCoatingFinishes, anodisedFinishes } from "@/data/finishes";

export const metadata: Metadata = {
  title: "Products — Four Engineered Systems",
  description:
    "System One Sliding, System Two Casement, System Three Grande Entry, System Four Slide & Fold — Ventino's four engineered window and door systems.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1F3D2E] pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel light className="mb-6">What we make</SectionLabel>
          <h1
            className="font-display text-[clamp(3rem,7vw,6rem)] font-light text-[#F6F5F0] leading-[1.0] max-w-4xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Four systems.<br />
            <em>Every opening.</em>
          </h1>
          <p className="mt-8 text-[#7FB89B] max-w-lg leading-relaxed">
            Each system is engineered to disappear into the architecture it serves — precise enough to meet any specification, refined enough to need no apology.
          </p>
        </div>
      </section>

      {/* Product Systems */}
      {productSystems.map((sys, i) => (
        <section
          key={sys.id}
          id={sys.id}
          className={i % 2 === 0 ? "bg-[#F6F5F0]" : "bg-[#EBE9DF]"}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="label text-[#A9712F]">System {sys.number}</span>
                  <span className="w-8 h-px bg-[#A9712F]" />
                </div>
                <h2
                  className="reveal font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-[#1F3D2E] leading-tight mb-4"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {sys.name}
                </h2>
                <p
                  className="reveal font-display text-xl italic text-[#40916C] mb-8"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {sys.tagline}
                </p>
                <p className="reveal text-[#1F3D2E]/70 leading-relaxed mb-10">
                  {sys.description}
                </p>
                <div className="reveal grid grid-cols-2 gap-4 mb-8">
                  {sys.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#A9712F] shrink-0" />
                      <span className="text-sm text-[#1F3D2E]/70">{h}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/enquiry"
                  className="reveal inline-flex items-center gap-3 border border-[#1F3D2E] text-[#1F3D2E] px-6 py-3 text-[0.65rem] tracking-[0.18em] uppercase hover:bg-[#1F3D2E] hover:text-[#F6F5F0] transition-all"
                >
                  Enquire about {sys.name}
                </Link>
              </div>

              <div className="reveal">
                <p className="label text-[#A9712F] mb-6">Specifications</p>
                <div className="space-y-3">
                  {sys.specs.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-start gap-4 border-b border-[#1F3D2E]/10 pb-3"
                    >
                      <span className="mt-2 w-px h-3 bg-[#A9712F] shrink-0" />
                      <span className="text-sm text-[#1F3D2E]/70">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How to choose well */}
      <section className="bg-[#1F3D2E] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel light className="mb-6">A guide</SectionLabel>
          <h2
            className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-[#F6F5F0] leading-tight mb-16 max-w-2xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            How to choose well.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2D6A4F]/30">
            {[
              { q: "How wide is the opening?", a: "Spans beyond 3 metres favour System One (Sliding) or System Four (Slide & Fold). Below that, System Two Casement gives you better weather performance." },
              { q: "How tall does it need to be?", a: "System One reaches 4,200mm vertical. System Three Grande Entry goes to 4,000mm. For standard floor-to-ceiling in a typical residence, all four systems work." },
              { q: "What does it face?", a: "North and east elevations need less solar-control glass but more weather sealing. South and west elevations benefit from acoustic DGU and solar-control laminated glass." },
              { q: "Who opens it daily?", a: "Elderly users and children do better with tilt-and-turn casements — single-action, no lifting. Slide & Fold requires two hands. Sliding is the most effortless for large openings." },
            ].map(({ q, a }, i) => (
              <div
                key={q}
                className="reveal bg-[#1F3D2E] p-8 lg:p-10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p
                  className="font-display text-xl font-light text-[#F6F5F0] mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {q}
                </p>
                <p className="text-[#7FB89B] text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Promises detail */}
      <section className="bg-[#F6F5F0] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel className="mb-6">Performance</SectionLabel>
          <h2
            className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#1F3D2E] mb-16 max-w-2xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Six promises. Every system.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {performancePromises.map(({ id, label, value, description }, i) => (
              <div
                key={id}
                className="reveal border-t-2 border-[#1F3D2E]/10 pt-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <p className="label text-[#A9712F]">{label}</p>
                  <span
                    className="font-display text-2xl font-light text-[#1F3D2E]"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {value}
                  </span>
                </div>
                <p className="text-sm text-[#1F3D2E]/60 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finish library */}
      <section className="bg-[#EBE9DF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel className="mb-6">Colour & finish</SectionLabel>
          <h2
            className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#1F3D2E] mb-4 max-w-2xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            The finish library.
          </h2>
          <p className="text-[#1F3D2E]/60 mb-16 max-w-xl">
            Two ranges — powder coating and anodising — across the full Ventino palette. Custom RAL colours available on request for orders above 50 units.
          </p>

          {/* Powder Coating */}
          <div className="mb-16">
            <p className="label text-[#A9712F] mb-8">
              Powder Coating — The Elements
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {powderCoatingFinishes.map((f) => (
                <div key={f.name} className="reveal">
                  <div
                    className="w-full aspect-square mb-2 border border-[#1F3D2E]/10"
                    style={{ backgroundColor: f.hex }}
                  />
                  <p className="text-[0.65rem] tracking-wide text-[#1F3D2E]/60">{f.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Anodising */}
          <div>
            <p className="label text-[#A9712F] mb-8">
              Anodising — Urbane
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {anodisedFinishes.map((f) => (
                <div key={f.name} className="reveal">
                  <div
                    className="w-full aspect-square mb-2 border border-[#1F3D2E]/10"
                    style={{ backgroundColor: f.hex }}
                  />
                  <p className="text-[0.65rem] tracking-wide text-[#1F3D2E]/60">{f.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F3D2E] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p
              className="font-display text-2xl md:text-3xl font-light text-[#F6F5F0] mb-2"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Ready to specify?
            </p>
            <p className="text-[#7FB89B] text-sm">
              Share your drawings and we&apos;ll prepare a detailed specification and quotation.
            </p>
          </div>
          <Link
            href="/enquiry"
            className="shrink-0 inline-flex items-center gap-3 bg-[#A9712F] text-[#F6F5F0] px-8 py-3.5 text-[0.7rem] tracking-[0.18em] uppercase hover:bg-[#8B5E27] transition-colors"
          >
            Start an Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
