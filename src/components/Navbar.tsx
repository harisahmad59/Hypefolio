"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "/", dot: false },
  { label: "Work", href: "/work", dot: true },
  { label: "Contact", href: "/contact", dot: false },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const handleNavigate = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (pathname === href) return;
    event.preventDefault();
    router.push(href);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 flex h-[53px] w-[calc(100%-2rem)] max-w-[500px] -translate-x-1/2 items-center justify-center lg:top-0 lg:bottom-auto lg:left-0 lg:h-[165px] lg:w-full lg:max-w-none lg:translate-x-0">
      <div className="flex h-[53px] w-full max-w-[500px] items-center justify-between rounded-full border border-[var(--color-nav-border)] bg-[var(--color-nav-bg)] px-2 shadow-[0_2px_16px_var(--color-nav-shadow)] backdrop-blur-xl backdrop-saturate-150">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={(event) => handleNavigate(event, link.href)}
              className={`relative flex h-[40px] items-center rounded-full px-4 sm:px-6 text-sm font-medium transition-all duration-300 ease-out ${
                isActive
                  ? "bg-[var(--color-muted)] text-[var(--color-heading)] shadow-sm"
                  : "text-[var(--color-body)] hover:text-[var(--color-heading)]"
              }`}
            >
              {link.dot && (
                <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              )}
              {link.label}
            </Link>
          );
        })}

        {/* Theme toggle */}
        <button
          onClick={handleThemeToggle}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full text-[var(--color-body)] transition-all duration-300 ease-out hover:text-[var(--color-heading)] hover:bg-[var(--color-muted)]"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun size={16} strokeWidth={1.5} className="transition-transform duration-300 ease-out" />
          ) : (
            <Moon size={16} strokeWidth={1.5} className="transition-transform duration-300 ease-out" />
          )}
        </button>
      </div>
    </nav>
  );
}
