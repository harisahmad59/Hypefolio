"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/", dot: false },
  { label: "About", href: "#about", dot: false },
  { label: "Work", href: "#work", dot: true },
  { label: "Contact", href: "#contact", dot: false },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="flex justify-center pb-8 sm:pb-12">
      <div className="flex h-[53px] w-full max-w-[500px] items-center justify-between rounded-full border border-neutral-200 bg-white px-2 shadow-sm">
        {navLinks.map((link) => {
          const isActive = activeLink === link.label;
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
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
            </a>
          );
        })}
      </div>
    </nav>
  );
}
