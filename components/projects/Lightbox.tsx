"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import type { ProjectImage } from "@/data/projects";

interface LightboxProps {
  images: ProjectImage[];
  startIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, startIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(startIndex);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#1F3D2E]/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 text-[#7FB89B] hover:text-[#F6F5F0] text-2xl p-3 z-10"
        aria-label="Close"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        ✕
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 label-sage z-10">
        {index + 1} / {images.length}
      </div>

      {/* Image — height-based so portrait images fill the screen properly */}
      <div
        className="relative w-full px-12 sm:px-16 md:px-24"
        style={{ height: "calc(100dvh - 120px)" }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const diff = touchStartX.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 48) { if (diff > 0) next(); else prev(); }
          touchStartX.current = null;
        }}
      >
        <Image
          src={images[index].src}
          alt={images[index].alt}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Caption */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#7FB89B] text-xs sm:text-sm text-center w-full px-16">
        {images[index].alt}
      </p>

      {/* Prev / Next — large touch targets on mobile */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 text-[#7FB89B] hover:text-[#F6F5F0] text-4xl px-3 py-10 z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[#7FB89B] hover:text-[#F6F5F0] text-4xl px-3 py-10 z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
