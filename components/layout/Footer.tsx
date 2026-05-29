import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1F3D2E] text-[#7FB89B]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/logo-reversed.png"
                alt="Ventino Doors & Windows"
                width={200}
                height={152}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-[#7FB89B] max-w-xs mb-6">
              A window is a threshold, not a hole in a wall.
              Every frame we build holds poise — an opening that protects,
              a frame around the light.
            </p>
            <div className="flex gap-4 text-xs tracking-widest uppercase text-[#40916C]">
              <span>Est. MMXXV</span>
              <span className="text-[#A9712F]">·</span>
              <span>ventino.in</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-sage mb-5">Navigation</p>
            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Products", "/products"],
                ["Projects", "/projects"],
                ["Downloads", "/downloads"],
                ["Contact", "/contact"],
                ["Enquiry", "/enquiry"],
                ["Service Request", "/service"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#7FB89B] hover:text-[#F6F5F0] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label-sage mb-5">Contact</p>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="block text-[0.65rem] tracking-widest uppercase text-[#40916C] mb-0.5">
                  Service (Toll-free)
                </span>
                <a
                  href="tel:18003090280"
                  className="text-[#7FB89B] hover:text-[#F6F5F0] transition-colors"
                >
                  1800 309 0280
                </a>
              </li>
              <li>
                <span className="block text-[0.65rem] tracking-widest uppercase text-[#40916C] mb-0.5">
                  Sales
                </span>
                <a
                  href="tel:+919650670009"
                  className="block text-[#7FB89B] hover:text-[#F6F5F0] transition-colors"
                >
                  +91 96506 70009
                </a>
                <a
                  href="tel:+919810162315"
                  className="block text-[#7FB89B] hover:text-[#F6F5F0] transition-colors"
                >
                  +91 98101 62315
                </a>
              </li>
              <li>
                <a
                  href="mailto:ventinowindows@gmail.com"
                  className="text-[#7FB89B] hover:text-[#F6F5F0] transition-colors"
                >
                  ventinowindows@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#2D6A4F] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-[#40916C]">
            © {new Date().getFullYear()} Ventino Windows Pvt. Ltd. — GSTIN: 06AAECV7297D1Z2
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[#2D6A4F]">
              Village Sunped, Sahupura, Faridabad — Haryana
            </span>
            <a
              href="https://oms.ventino.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.6rem] tracking-[0.15em] uppercase text-[#2D6A4F] hover:text-[#40916C] transition-colors"
            >
              Team Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
