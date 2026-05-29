import Link from "next/link";
import Image from "next/image";
import { heroProjects } from "@/data/projects";
import { productSystems, performancePromises } from "@/data/products";
import SectionLabel from "@/components/ui/SectionLabel";

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end bg-[#1F3D2E] overflow-hidden">
        {/* Background image — swap to a real project photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/projects/pavilion-house/cover.jpg"
            alt="Ventino — A frame around the light"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2E] via-[#1F3D2E]/60 to-transparent" />
        </div>

        {/* Brass rule — top left accent */}
        <div className="absolute top-32 left-6 lg:left-10 flex items-center gap-4">
          <span className="brass-rule" />
          <SectionLabel light>ventino windows</SectionLabel>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-20 md:pb-28 w-full">
          <h1
            className="font-display text-[clamp(3rem,8vw,7rem)] font-light text-[#F6F5F0] leading-[1.0] mb-8 max-w-4xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            A frame<br />
            <em>around the light.</em>
          </h1>
          <p className="text-[#7FB89B] text-lg md:text-xl max-w-lg leading-relaxed mb-10">
            A window is a threshold, not a hole in a wall.
            We build openings that hold poise — frames that protect, connect, and let the light stay.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-3 bg-[#A9712F] text-[#F6F5F0] px-7 py-3.5 text-[0.7rem] tracking-[0.18em] uppercase hover:bg-[#8B5E27] transition-colors"
            >
              Start an Enquiry
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 border border-[#7FB89B] text-[#7FB89B] px-7 py-3.5 text-[0.7rem] tracking-[0.18em] uppercase hover:border-[#F6F5F0] hover:text-[#F6F5F0] transition-colors"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Brand Statement ──────────────────────────────────────────────────── */}
      <section className="bg-[#F6F5F0] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal">
              <SectionLabel className="mb-6">Our belief</SectionLabel>
              <h2
                className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-[#1F3D2E] leading-tight mb-8"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                We don&apos;t sell windows.
                <br />
                <em>We help build homes.</em>
              </h2>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.18em] uppercase text-[#A9712F] hover:gap-5 transition-all"
              >
                Read the story <span>→</span>
              </Link>
            </div>
            <div className="reveal space-y-6 text-[#1F3D2E]/70 leading-relaxed">
              <p>
                Every house we work on starts with a conversation about light — how it enters, where it rests, what it illuminates, and what it lets recede. Windows are the instrument of that conversation.
              </p>
              <p>
                We engineered our four systems to disappear into the architecture they serve. The frame should hold the view without competing with it. The hardware should work with single-finger effort for forty years. The glass should do its job silently — keeping weather out, keeping warmth in, letting the garden breathe through.
              </p>
              <p className="text-[#1F3D2E] font-medium italic"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.1rem" }}>
                &ldquo;A threshold held with poise — an opening that protects, a frame around the light,
                calm enough to stay closed and confident enough to open.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Product Families Teaser ──────────────────────────────────────────── */}
      <section className="bg-[#EBE9DF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <SectionLabel className="mb-4">What we make</SectionLabel>
              <h2
                className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#1F3D2E]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Four engineered systems.
              </h2>
            </div>
            <Link
              href="/products"
              className="text-[0.7rem] tracking-[0.18em] uppercase text-[#A9712F] hover:gap-3 flex items-center gap-2 transition-all"
            >
              Full specifications <span>→</span>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1F3D2E]/10">
            {productSystems.map((sys, i) => (
              <div
                key={sys.id}
                className={`reveal bg-[#EBE9DF] p-8 lg:p-10 flex flex-col gap-4`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="label text-[#A9712F]">System {sys.number}</span>
                <h3
                  className="font-display text-2xl font-light text-[#1F3D2E]"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {sys.name}
                </h3>
                <p className="text-sm text-[#1F3D2E]/60 leading-relaxed flex-1">
                  {sys.tagline}
                </p>
                <Link
                  href={`/products#${sys.id}`}
                  className="text-[0.65rem] tracking-[0.15em] uppercase text-[#40916C] hover:text-[#1F3D2E] transition-colors"
                >
                  Specifications →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects Teaser ──────────────────────────────────────────────────── */}
      <section className="bg-[#F6F5F0] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <SectionLabel className="mb-4">Houses we helped build</SectionLabel>
              <h2
                className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#1F3D2E]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Where the frames live.
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-[0.7rem] tracking-[0.18em] uppercase text-[#A9712F] flex items-center gap-2 hover:gap-3 transition-all"
            >
              Full portfolio <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heroProjects.map((p, i) => (
              <Link
                key={p.id}
                href={`/projects#${p.id}`}
                className="reveal group block"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#EBE9DF] mb-4">
                  <Image
                    src={p.coverImage}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#1F3D2E]/0 group-hover:bg-[#1F3D2E]/20 transition-colors duration-500" />
                </div>
                <p className="label text-[#A9712F] mb-1">{p.location} · {p.year}</p>
                <h3
                  className="font-display text-xl font-light text-[#1F3D2E] group-hover:text-[#40916C] transition-colors"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {p.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Performance Promises ─────────────────────────────────────────────── */}
      <section className="bg-[#1F3D2E] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <SectionLabel light className="mb-4">What we promise</SectionLabel>
            <h2
              className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#F6F5F0]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Six things every frame delivers.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2D6A4F]/30">
            {performancePromises.map((p, i) => (
              <div
                key={p.id}
                className="reveal bg-[#1F3D2E] p-8 lg:p-10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="label-sage">{p.label}</span>
                  <span className="text-[#A9712F] text-sm font-medium">{p.value}</span>
                </div>
                <p className="text-[#7FB89B] text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Closing Band ─────────────────────────────────────────────────────── */}
      <section className="bg-[#EBE9DF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <span className="brass-rule mx-auto mb-8" />
          <h2
            className="reveal font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#1F3D2E] leading-tight max-w-3xl mx-auto mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Every door opens a story.
            <br />
            <em>Every window frames a dream.</em>
          </h2>
          <p className="reveal text-[#1F3D2E]/60 max-w-md mx-auto mb-10">
            Tell us about your project. We&apos;ll come to site, listen to the brief,
            and help you choose the frame that disappears into the home you&apos;re building.
          </p>
          <Link
            href="/enquiry"
            className="reveal inline-flex items-center gap-3 bg-[#1F3D2E] text-[#F6F5F0] px-10 py-4 text-[0.7rem] tracking-[0.18em] uppercase hover:bg-[#2D6A4F] transition-colors"
          >
            Begin your enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
