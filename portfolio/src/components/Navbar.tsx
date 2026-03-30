"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Search } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "Resume", href: "#resume" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const dark = stored === "dark" || (!stored && prefersDark);
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav className="flex items-center justify-between pb-12 sm:pb-16">
      {/* Left — Nav links */}
      <ul className="flex items-center gap-1 sm:gap-2">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="rounded-md px-2.5 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right — Search hint + Theme toggle */}
      <div className="flex items-center gap-2">
        <button
          className="hidden items-center gap-1.5 rounded-md border border-neutral-200 px-2.5 py-1 text-xs text-neutral-400 transition-colors hover:border-neutral-300 hover:text-neutral-600 sm:flex dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:text-neutral-300"
          aria-label="Search"
        >
          <Search size={12} />
          <span>Ctrl K</span>
        </button>

        <button
          onClick={toggleTheme}
          className="rounded-md p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
}
