"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import Lightbox from "./Lightbox";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      {projects.map((p) => (
        <article key={p.id} id={p.id} className="mb-28 last:mb-0">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-8">
            {/* Main image */}
            <div
              className="reveal relative aspect-[4/3] overflow-hidden bg-[#EBE9DF] cursor-pointer"
              onClick={() => {
                setActiveProject(p);
                setLightboxIndex(0);
              }}
            >
              <Image
                src={p.coverImage}
                alt={p.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Copy */}
            <div className="reveal">
              <div className="flex items-center gap-3 mb-4">
                <SectionLabel>{p.location} · {p.year}</SectionLabel>
              </div>
              <h2
                className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-[#1F3D2E] leading-tight mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {p.name}
              </h2>
              {p.narrative && (
                <p className="text-[#1F3D2E]/70 leading-relaxed mb-6">{p.narrative}</p>
              )}
              {p.specification && (
                <div className="mb-6 p-5 bg-[#EBE9DF]">
                  <p className="label text-[#A9712F] mb-2">Specification</p>
                  <p className="text-sm text-[#1F3D2E]/60">{p.specification}</p>
                </div>
              )}
              {p.ownerQuote && (
                <blockquote className="border-l-2 border-[#A9712F] pl-5">
                  <p
                    className="font-display text-xl italic text-[#1F3D2E] mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    &ldquo;{p.ownerQuote}&rdquo;
                  </p>
                  <cite className="label text-[#40916C] not-italic">{p.ownerName}</cite>
                </blockquote>
              )}
              <div className="mt-6 flex flex-wrap gap-2">
                {p.systems.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 border border-[#1F3D2E]/20 text-[0.6rem] tracking-[0.15em] uppercase text-[#40916C]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          {p.images.length > 1 && (
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {p.images.map((img, idx) => (
                <button
                  key={idx}
                  className="relative aspect-square overflow-hidden bg-[#EBE9DF] group"
                  onClick={() => { setActiveProject(p); setLightboxIndex(idx); }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </button>
              ))}
            </div>
          )}
        </article>
      ))}

      {lightboxIndex !== null && (
        <Lightbox
          images={activeProject.images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
