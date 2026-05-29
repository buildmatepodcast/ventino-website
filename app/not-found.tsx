import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#1F3D2E] flex items-center justify-center px-6">
      <div className="text-center">
        <span className="block w-10 h-px bg-[#A9712F] mx-auto mb-8" />
        <h1
          className="font-display text-[8rem] font-light text-[#F6F5F0]/10 leading-none mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          404
        </h1>
        <p
          className="font-display text-3xl font-light text-[#F6F5F0] mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          This threshold doesn&apos;t exist.
        </p>
        <p className="text-[#7FB89B] text-sm mb-10">
          The page you&apos;re looking for has moved or was never here.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 border border-[#7FB89B] text-[#7FB89B] px-7 py-3 text-[0.65rem] tracking-[0.18em] uppercase hover:border-[#F6F5F0] hover:text-[#F6F5F0] transition-colors"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
