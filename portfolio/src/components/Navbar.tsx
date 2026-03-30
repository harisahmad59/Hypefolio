"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About", href: "#about", active: false },
  { label: "Work", href: "#work", active: false, dot: true },
  { label: "Contact", href: "#contact", active: false },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="flex justify-center pb-12 sm:pb-16">
      <div className="flex h-[53px] w-full max-w-[500px] items-center justify-between rounded-full border border-neutral-200 bg-white px-2 shadow-sm">
        {navLinks.map((link) => {
          const isActive = activeLink === link.label;
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`relative flex h-[40px] items-center rounded-full px-6 text-sm font-medium transition-all ${
                isActive
                  ? "bg-neutral-100 text-neutral-900 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-800"
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
