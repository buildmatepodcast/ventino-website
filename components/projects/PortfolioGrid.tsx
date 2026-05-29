"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import Lightbox from "./Lightbox";

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <button
            key={p.id}
            className="reveal group text-left"
            style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            onClick={() => setLightbox({ project: p, index: 0 })}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#EBE9DF] mb-4">
              <Image
                src={p.coverImage}
                alt={p.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#1F3D2E]/0 group-hover:bg-[#1F3D2E]/20 transition-colors duration-500 flex items-end p-4">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity label-sage">
                  View project →
                </span>
              </div>
            </div>
            <p className="label text-[#A9712F] mb-1">{p.location} · {p.year}</p>
            <h3
              className="font-display text-xl font-light text-[#1F3D2E] group-hover:text-[#40916C] transition-colors"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              {p.name}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {p.systems.map((s) => (
                <span key={s} className="text-[0.55rem] tracking-[0.12em] uppercase text-[#40916C]/70">
                  {s.split(" — ")[1]}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.project.images}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
