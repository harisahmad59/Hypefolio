"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/", dot: false },
  { label: "About", href: "/about", dot: false },
  { label: "Work", href: "/work", dot: true },
  { label: "Contact", href: "/contact", dot: false },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 z-50 flex h-[120px] w-full items-center justify-center lg:h-[165px]">
      <div className="flex h-[53px] w-full max-w-[500px] items-center justify-between rounded-full border border-white/40 bg-white/60 px-2 shadow-[0_2px_16px_rgba(0,0,0,0.06)] backdrop-blur-xl backdrop-saturate-150">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`relative flex h-[40px] items-center rounded-full px-5 sm:px-7 text-sm font-medium transition-all ${
                isActive
                  ? "bg-neutral-100 text-[var(--color-heading)] shadow-sm"
                  : "text-[var(--color-body)] hover:text-[var(--color-heading)]"
              }`}
            >
              {link.dot && (
                <span className="absolute -left-0.5 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-red-400" />
              )}
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
