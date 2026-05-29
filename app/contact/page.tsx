import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ventino Windows contact details — sales, service, and studio. Faridabad, Haryana.",
};

const processSteps = [
  { n: "01", title: "Site visit", desc: "We come to you. No cost, no commitment. We measure the openings and understand the brief in context." },
  { n: "02", title: "Specification", desc: "We prepare a detailed specification — system selection, glass spec, hardware, and finish — matched to your drawings." },
  { n: "03", title: "Samples", desc: "We send physical samples of the proposed frame profile, finish, and glass so you can see and feel before you commit." },
  { n: "04", title: "Shop drawings", desc: "Once approved, our engineering team produces fabrication drawings for every opening. Nothing is assumed." },
  { n: "05", title: "Fabrication", desc: "Frames are fabricated in our Faridabad facility under quality control. Lead time is shared at order confirmation." },
  { n: "06", title: "Installation", desc: "Our trained installation teams work to a defined methodology. The site is left clean. The frames are aligned and tested." },
  { n: "07", title: "Aftercare", desc: "Every installation is covered by our 10-year structural warranty. Our service number is answered, not forwarded." },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1F3D2E] pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel light className="mb-6">Get in touch</SectionLabel>
          <h1
            className="font-display text-[clamp(3rem,7vw,6rem)] font-light text-[#F6F5F0] leading-[1.0] max-w-3xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Contact.
          </h1>
        </div>
      </section>

      {/* Contact blocks */}
      <section className="bg-[#F6F5F0] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1F3D2E]/10 mb-16">
            {[
              {
                label: "Service (existing customers)",
                items: [
                  { type: "tel", value: "1800 309 0280", href: "tel:18003090280", note: "Toll-free — warranty, repairs, aftercare" },
                ],
              },
              {
                label: "Sales & new projects",
                items: [
                  { type: "tel", value: "+91 96506 70009", href: "tel:+919650670009" },
                  { type: "tel", value: "+91 98101 62315", href: "tel:+919810162315" },
                ],
              },
              {
                label: "Email",
                items: [
                  { type: "email", value: "ventinowindows@gmail.com", href: "mailto:ventinowindows@gmail.com" },
                  { type: "email", value: "rish.ventino@gmail.com", href: "mailto:rish.ventino@gmail.com" },
                ],
              },
            ].map(({ label, items }) => (
              <div key={label} className="bg-[#F6F5F0] p-8 lg:p-10">
                <p className="label text-[#A9712F] mb-5">{label}</p>
                {items.map(({ value, href, note }) => (
                  <div key={value} className="mb-3">
                    <a
                      href={href}
                      className="font-display text-2xl font-light text-[#1F3D2E] hover:text-[#40916C] transition-colors"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {value}
                    </a>
                    {note && <p className="text-xs text-[#1F3D2E]/50 mt-1">{note}</p>}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Address + GST */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionLabel className="mb-4">Registered address</SectionLabel>
              <address className="not-italic text-[#1F3D2E]/70 leading-relaxed">
                Ventino Windows Pvt. Ltd.<br />
                Village Sunped, Sahupura<br />
                Faridabad — Ballabgarh<br />
                Haryana, India
              </address>
              <p className="mt-4 text-xs text-[#1F3D2E]/40 tracking-wide">
                GSTIN: 06AAECV7297D1Z2
              </p>
            </div>
            <div>
              <SectionLabel className="mb-4">Online</SectionLabel>
              <p className="text-[#1F3D2E]/70 mb-2">
                <a href="https://ventino.in" className="hover:text-[#1F3D2E] transition-colors">ventino.in</a>
              </p>
              <p className="text-xs text-[#1F3D2E]/40 tracking-wide">
                Order portal:{" "}
                <a href="https://oms.ventino.in" target="_blank" rel="noopener noreferrer" className="text-[#40916C] hover:text-[#1F3D2E]">
                  oms.ventino.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-[#EBE9DF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel className="mb-6">Process</SectionLabel>
          <h2
            className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#1F3D2E] mb-16 max-w-2xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            How we work —<br />
            <em>seven steps from brief to aftercare.</em>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(({ n, title, desc }, i) => (
              <div
                key={n}
                className="reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <p
                  className="font-display text-5xl font-light text-[#1F3D2E]/10 mb-3"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {n}
                </p>
                <p className="label text-[#A9712F] mb-2">{title}</p>
                <p className="text-sm text-[#1F3D2E]/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 border-l-2 border-[#A9712F]">
            <p className="text-[#1F3D2E]/70 text-sm">
              <strong className="text-[#1F3D2E]">10-year structural warranty</strong> — Every Ventino frame carries a ten-year warranty on structural integrity. Hardware and glass manufacturer warranties apply separately; we manage the entire warranty process on your behalf.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F3D2E] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p
              className="font-display text-2xl md:text-3xl font-light text-[#F6F5F0] mb-2"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Ready to begin?
            </p>
            <p className="text-[#7FB89B] text-sm">Start with an enquiry — we come to site at no cost.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/enquiry"
              className="shrink-0 bg-[#A9712F] text-[#F6F5F0] px-8 py-3.5 text-[0.7rem] tracking-[0.18em] uppercase hover:bg-[#8B5E27] transition-colors"
            >
              New Project Enquiry
            </Link>
            <Link
              href="/service"
              className="shrink-0 border border-[#7FB89B] text-[#7FB89B] px-8 py-3.5 text-[0.7rem] tracking-[0.18em] uppercase hover:border-[#F6F5F0] hover:text-[#F6F5F0] transition-colors"
            >
              Service Request
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
