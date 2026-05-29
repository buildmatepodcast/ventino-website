"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isHero = pathname === "/";

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || !isHero
            ? "bg-[#1F3D2E] shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo + wordmark */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-reversed.png"
              alt="Ventino Doors & Windows"
              width={160}
              height={122}
              className="h-12 md:h-14 w-auto"
              priority
            />
            <span className="hidden sm:block text-[0.6rem] font-light tracking-[0.35em] uppercase font-sans text-[#F6F5F0]/70">
              Ventino Windows
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "text-[0.7rem] tracking-[0.15em] uppercase transition-colors duration-200",
                  pathname === l.href
                    ? "text-[#A9712F]"
                    : "text-[#7FB89B] hover:text-[#F6F5F0]"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/enquiry"
              className="ml-2 px-5 py-2 border border-[#A9712F] text-[#A9712F] text-[0.65rem] tracking-[0.18em] uppercase hover:bg-[#A9712F] hover:text-[#F6F5F0] transition-all duration-200"
            >
              Enquiry
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={clsx(
                "block w-6 h-px bg-[#F6F5F0] transition-all duration-300",
                open && "rotate-45 translate-y-2.5"
              )}
            />
            <span
              className={clsx(
                "block w-6 h-px bg-[#F6F5F0] transition-all duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "block w-6 h-px bg-[#F6F5F0] transition-all duration-300",
                open && "-rotate-45 -translate-y-2.5"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-[#1F3D2E] flex flex-col justify-center items-center gap-8 transition-all duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-display text-3xl font-light text-[#F6F5F0] tracking-wide hover:text-[#A9712F] transition-colors"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/enquiry"
          className="mt-4 px-8 py-3 border border-[#A9712F] text-[#A9712F] text-[0.65rem] tracking-[0.18em] uppercase hover:bg-[#A9712F] hover:text-[#F6F5F0] transition-all"
        >
          Start an Enquiry
        </Link>
      </div>
    </>
  );
}
