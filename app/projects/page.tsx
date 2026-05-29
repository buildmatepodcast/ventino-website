import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import { heroProjects, portfolioProjects } from "@/data/projects";
import ProjectGallery from "@/components/projects/ProjectGallery";
import PortfolioGrid from "@/components/projects/PortfolioGrid";

export const metadata: Metadata = {
  title: "Projects — Houses We Helped Build",
  description:
    "Ventino Windows project portfolio — The Pavilion House, The Courtyard House, The Garden Villa, The White House, and thirteen more completed residences across India.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1F3D2E] pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel light className="mb-6">Portfolio</SectionLabel>
          <h1
            className="font-display text-[clamp(3rem,7vw,6rem)] font-light text-[#F6F5F0] leading-[1.0] max-w-4xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Houses we<br />
            <em>helped build.</em>
          </h1>
          <p className="mt-8 text-[#7FB89B] max-w-lg leading-relaxed">
            Thirteen completed projects across seven cities. Each one a different brief, a different climate, a different idea of home. The frames are the constant.
          </p>
        </div>
      </section>

      {/* Hero Projects */}
      <section className="bg-[#F6F5F0] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel className="mb-16">Featured projects</SectionLabel>
          <ProjectGallery projects={heroProjects} />
        </div>
      </section>

      {/* Wider portfolio */}
      <section className="bg-[#EBE9DF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel className="mb-6">Wider portfolio</SectionLabel>
          <h2
            className="font-display text-[clamp(2rem,3.5vw,3rem)] font-light text-[#1F3D2E] mb-16 max-w-2xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Nine more houses.
          </h2>
          <PortfolioGrid projects={portfolioProjects} />
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
              Is yours next?
            </p>
            <p className="text-[#7FB89B] text-sm">
              Share your project brief and we&apos;ll take it from there.
            </p>
          </div>
          <a
            href="/enquiry"
            className="shrink-0 inline-flex items-center gap-3 bg-[#A9712F] text-[#F6F5F0] px-8 py-3.5 text-[0.7rem] tracking-[0.18em] uppercase hover:bg-[#8B5E27] transition-colors"
          >
            Start an Enquiry
          </a>
        </div>
      </section>
    </>
  );
}
