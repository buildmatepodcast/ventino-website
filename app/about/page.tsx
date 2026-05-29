import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About — The Story",
  description:
    "The full Ventino story — from the brief that refused to draw a window to the brand that frames the light.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1F3D2E] pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel light className="mb-6">The story</SectionLabel>
          <h1
            className="font-display text-[clamp(3rem,7vw,6rem)] font-light text-[#F6F5F0] leading-[1.0] max-w-4xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            A threshold held<br />
            <em>with poise.</em>
          </h1>
        </div>
      </section>

      {/* Prologue */}
      <section className="bg-[#F6F5F0] py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel className="mb-6">Prologue</SectionLabel>
          <h2
            className="reveal font-display text-[clamp(1.8rem,3.5vw,3rem)] font-light text-[#1F3D2E] leading-tight mb-10"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            The brief that refused to draw a window.
          </h2>
          <div className="reveal space-y-6 text-[#1F3D2E]/75 leading-[1.8] text-base md:text-lg">
            <p>
              It started with a conversation that refused to begin with dimensions. A client in Ahmedabad had been shown three window catalogues by three different vendors. Every page was the same — profiles, grids, RAL numbers, a price matrix. He pushed them all aside and asked a different question: &ldquo;What do I actually want my house to feel like?&rdquo;
            </p>
            <p>
              That question became our brief. Not what size, not what colour — but what feeling. What does a window give a room that no other element can give? And what does it keep?
            </p>
          </div>
        </div>
      </section>

      {/* The Paradox */}
      <section className="bg-[#EBE9DF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <SectionLabel className="mb-6">The paradox in the wall</SectionLabel>
              <h2
                className="reveal font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-[#1F3D2E] leading-tight mb-8"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                A window is a threshold,<br />
                <em>not a hole in a wall.</em>
              </h2>
              <div className="reveal space-y-5 text-[#1F3D2E]/70 leading-relaxed">
                <p>
                  A hole in a wall is a failure — a breach, a weakness, a place where the wall gives up. A threshold is something different entirely. It is a considered passage between two states: inside and outside, private and open, protected and exposed.
                </p>
                <p>
                  A window does not just let light in. It frames the light. It decides what proportion of the sky you see from your bed. It controls how much of the street reaches you at 3 am. It is the instrument by which architecture negotiates with weather, with noise, with privacy, with the seasons.
                </p>
                <p>
                  We built Ventino around this idea. Every system we engineer is a threshold, not a hole. Every frame is designed to hold poise — to be exactly as open or closed as the moment requires.
                </p>
              </div>
            </div>
            <div>
              <SectionLabel className="mb-6">What a window gives and keeps</SectionLabel>
              <div className="reveal space-y-8">
                {[
                  { give: "Light", keep: "Privacy" },
                  { give: "Air", keep: "Weather" },
                  { give: "View", keep: "Security" },
                  { give: "Connection", keep: "Quiet" },
                  { give: "Scale", keep: "Warmth" },
                ].map(({ give, keep }) => (
                  <div key={give} className="flex items-center gap-6 border-b border-[#1F3D2E]/10 pb-6">
                    <div className="text-center min-w-0 flex-1">
                      <p className="label text-[#A9712F] mb-1">Gives</p>
                      <p
                        className="font-display text-2xl font-light text-[#1F3D2E]"
                        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                      >
                        {give}
                      </p>
                    </div>
                    <span className="text-[#A9712F] text-lg shrink-0">⇄</span>
                    <div className="text-center min-w-0 flex-1">
                      <p className="label text-[#40916C] mb-1">Keeps</p>
                      <p
                        className="font-display text-2xl font-light text-[#1F3D2E]"
                        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                      >
                        {keep}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The feeling */}
      <section className="bg-[#1F3D2E] py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <span className="brass-rule mx-auto mb-8" />
          <blockquote
            className="reveal font-display text-[clamp(1.8rem,4vw,3.5rem)] font-light text-[#F6F5F0] leading-tight italic mb-8"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            &ldquo;A threshold held with poise — an opening that protects, a frame around the light, calm enough to stay closed and confident enough to open.&rdquo;
          </blockquote>
          <p className="label-sage">The Ventino mark — the idea made visible</p>
        </div>
      </section>

      {/* The mark and name */}
      <section className="bg-[#F6F5F0] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <SectionLabel className="mb-6">How the idea became the mark</SectionLabel>
              <h2
                className="reveal font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-[#1F3D2E] leading-tight mb-8"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                The mark is a window.
                <br />
                <em>It is also a threshold.</em>
              </h2>
              <div className="reveal space-y-5 text-[#1F3D2E]/70 leading-relaxed">
                <p>
                  The Ventino mark draws a frame — two uprights and a lintel, drawn in a single continuous weight. Within it, negative space. The void is not empty; it is the light the frame is built to hold.
                </p>
                <p>
                  The letterforms — set in Cormorant Garamond with generous tracking — carry the same editorial calm. High-contrast, unhurried. The kind of type you find on an architectural drawing or a monograph, not a trade catalogue.
                </p>
              </div>
            </div>
            <div>
              <SectionLabel className="mb-6">The name · The colour</SectionLabel>
              <div className="reveal space-y-5 text-[#1F3D2E]/70 leading-relaxed">
                <p>
                  <strong className="text-[#1F3D2E]">Ventino</strong> — from the Italian <em>ventino</em>, a small window or opening in a wall. But also from <em>vento</em>, wind; the thing that comes through. And from the sense of a threshold managed — a controlled opening rather than a breach.
                </p>
                <p>
                  The palette is the forest just before the light comes through. Forest green at the structural core — stable, serious, grown. Leaf and sage for the living parts — the detail, the breath, the suggestion of light through canopy. And brass: the single glint. The hinge, the handle, the catch of late afternoon on a well-made thing.
                </p>
                <div className="flex gap-3 mt-6">
                  {["#1F3D2E", "#40916C", "#7FB89B", "#A9712F"].map((c) => (
                    <div
                      key={c}
                      className="w-10 h-10 rounded-sm"
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Foundation */}
      <section className="bg-[#EBE9DF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel className="mb-12">Brand foundation</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1F3D2E]/10">
            {[
              {
                label: "Mission",
                text: "To manufacture frames that serve architecture rather than compromise it — precision-engineered, quietly confident, built to last forty years.",
              },
              {
                label: "Vision",
                text: "Every home in India deserves a window that was thought about. We are building the brand that makes that conversation possible.",
              },
              {
                label: "Promise",
                text: "Every frame leaves our facility tested, documented, and warranted for ten years. We answer the phone when something needs attention.",
              },
              {
                label: "Voice",
                text: "We speak like the architects we work with — measured, precise, without hyperbole. We show rather than tell. We earn trust with craft.",
              },
            ].map(({ label, text }, i) => (
              <div
                key={label}
                className="reveal bg-[#EBE9DF] p-8 lg:p-10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="label text-[#A9712F] mb-4">{label}</p>
                <p className="text-[#1F3D2E]/70 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personality */}
      <section className="bg-[#F6F5F0] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel className="mb-6">Personality</SectionLabel>
              <h2
                className="reveal font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-[#1F3D2E] leading-tight mb-8"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Restrained. Editorial.
                <br />
                <em>Quietly confident.</em>
              </h2>
              <div className="reveal space-y-4 text-[#1F3D2E]/70 leading-relaxed">
                <p>
                  Ventino is the architect who doesn&apos;t need to explain their references. The brand shows; it doesn&apos;t shout. It knows that the best frame is the one you stop noticing — that the room beyond it is the point.
                </p>
                <p>
                  We do not use superlatives. We do not claim to be the best. We state what the frame does, precisely, and let the house speak.
                </p>
              </div>
            </div>
            <div className="reveal">
              <SectionLabel className="mb-6">Design principles</SectionLabel>
              <ul className="space-y-6">
                {[
                  { principle: "Frame the void", description: "Let negative space do the work. What is left out is as important as what is included." },
                  { principle: "Imply the light", description: "No sunbursts or glows. Light is a shift of proportion, a brighter field, a shadow where something ends." },
                  { principle: "Restraint is the finish", description: "The luxury is in what is left out. Every unnecessary element removed is an improvement." },
                  { principle: "Earn the threshold", description: "Every frame must justify its scale, its weight, its place in the wall. Nothing is arbitrary." },
                ].map(({ principle, description }) => (
                  <li key={principle} className="flex gap-4">
                    <span className="brass-rule mt-3 shrink-0" />
                    <div>
                      <p
                        className="font-display text-lg font-light text-[#1F3D2E] mb-1"
                        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                      >
                        {principle}
                      </p>
                      <p className="text-sm text-[#1F3D2E]/60 leading-relaxed">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#1F3D2E] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <span className="brass-rule mx-auto mb-8" />
          <p
            className="reveal font-display text-[clamp(1.5rem,3vw,2.5rem)] font-light text-[#F6F5F0] leading-tight italic"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            &ldquo;A window is a threshold, not a hole in a wall.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
