"use client";

import { useState } from "react";
import { Instagram, Youtube, Globe, ArrowUpRight } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import InfoCard from "./InfoCard";

// Always visible brands (non-Indian first, Indian scattered in second half)
const defaultBrands = [
  { name: "Odoo", code: "BE" },
  { name: "Kimi", code: "CN" },
  { name: "Hostinger", code: "LT" },
  { name: "Abacus AI (ChatLLM)", code: "US" },
  { name: "Emergent", code: "IN" },
  { name: "HitPaw", code: "HK" },
  { name: "Tublian", code: "US" },
  { name: "Loopcv", code: "GR" },
  { name: "Crawl AI", code: "AE" },
  { name: "GlobalGPT", code: "US" },
  { name: "Rocket", code: "IN" },
  { name: "AI Chief", code: "US" },
  { name: "Nim Video", code: "US" },
  { name: "InterviewProof", code: "CA" },
  { name: "TechScreen", code: "US" },
  { name: "SimpliLearn", code: "IN" },
  { name: "GeeksforGeeks", code: "IN" },
  { name: "VMEG AI", code: "CN" },
  { name: "Masai School", code: "IN" },
  { name: "BotPool", code: "US" },
  { name: "Internshala", code: "IN" },
  { name: "Oreate AI", code: "JP" },
];

// Hidden brands — shown after "View more" click, appended after Oreate AI
const extraBrands = [
  { name: "RankMath", code: "IN" },
  { name: "PW Skills", code: "IN" },
  { name: "IntelliPaat", code: "IN" },
  { name: "Guvi", code: "IN" },
  { name: "Geekster", code: "IN" },
  { name: "Coding Blocks", code: "IN" },
  { name: "Aimerz", code: "IN" },
  { name: "AR Display", code: "US" },
  { name: "CodeSpy AI", code: "US" },
  { name: "Kixi Media", code: "IN" },
  { name: "TheHalalEstates", code: "IN" },
];

export default function RightPanel() {
  const [showAll, setShowAll] = useState(false);

  const visibleBrands = showAll
    ? [...defaultBrands, ...extraBrands]
    : defaultBrands;

  return (
    <div className="flex flex-col gap-4">
      {/* Row — Two project cards side by side */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Card 1 — CodeHype */}
        <div className="group/codehype relative flex flex-col justify-between rounded-[32px] bg-[var(--color-card)] p-6">
          {/* Arrow circle — top right corner */}
          <div className="absolute top-5 right-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-[var(--color-body)] transition-colors group-hover/codehype:border-neutral-400 group-hover/codehype:text-[var(--color-heading)] cursor-pointer">
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </div>
            {/* Social icons popup on hover */}
            <div className="pointer-events-none absolute right-0 top-11 flex flex-col gap-1.5 opacity-0 transition-all duration-200 group-hover/codehype:pointer-events-auto group-hover/codehype:opacity-100">
              <a href="https://instagram.com/codehype" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-[var(--color-card)] text-[#949494] transition-colors hover:border-neutral-400 hover:text-[var(--color-heading)]">
                <Instagram size={15} strokeWidth={1.5} />
              </a>
              <a href="https://youtube.com/@codehype" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-[var(--color-card)] text-[#949494] transition-colors hover:border-neutral-400 hover:text-[var(--color-heading)]">
                <Youtube size={15} strokeWidth={1.5} />
              </a>
              <a href="https://codehype.ai" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-[var(--color-card)] text-[#949494] transition-colors hover:border-neutral-400 hover:text-[var(--color-heading)]">
                <Globe size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Top section */}
          <div>
            <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-widest text-[var(--color-body)]">
              Current
            </span>

            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                CodeHype
              </h3>
              <span className="text-sm text-[var(--color-body)]">
                Founder &amp; CEO
              </span>
            </div>
            <p className="mt-1 text-sm text-[var(--color-body)]">
              AI + coding community
            </p>

            {/* Primary metric */}
            <div className="mt-6">
              <p className="text-3xl font-bold tracking-tight text-[var(--color-heading)]">
                105M+
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--color-body)]">
                Total Content Reach
              </p>
            </div>

            {/* Secondary stats */}
            <div className="mt-5 grid grid-cols-2 gap-2">
              <div className="py-2">
                <p className="text-lg font-bold text-[var(--color-heading)]">5M+</p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--color-body)]">Monthly Reach</p>
              </div>
              <div className="py-2">
                <p className="text-lg font-bold text-[var(--color-heading)]">200K+</p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--color-body)]">Followers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 — HypeQuad */}
        <div className="relative flex flex-col justify-between rounded-[32px] bg-[var(--color-card)] p-6">
          {/* Arrow circle — top right corner, links to hypequad.com */}
          <a
            href="https://hypequad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-[var(--color-body)] transition-colors hover:border-neutral-400 hover:text-[var(--color-heading)]"
          >
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>

          {/* Top section */}
          <div>
            <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-widest text-[var(--color-body)]">
              Current
            </span>

            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                HypeQuad
              </h3>
              <span className="text-sm text-[var(--color-body)]">
                Co-Founder
              </span>
            </div>
            <p className="mt-1 text-sm text-[var(--color-body)]">
              Content &amp; Website Agency
            </p>

            {/* Service badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Website Dev",
                "Logo & Branding",
                "Social Media & Ads",
                "Video & Motion",
              ].map((service) => (
                <span
                  key={service}
                  className="inline-flex items-center rounded-lg border border-dashed border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-[var(--color-heading)]"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Card 2 — Work & Collaborations */}
      <InfoCard label="Brands Worked With" className="max-h-[670px] overflow-auto">
        <h3 className="mb-4 text-lg font-semibold text-[var(--color-heading)]">
          Websites OR Content Marketing
        </h3>
        <div className="flex flex-wrap gap-2">
          {visibleBrands.map((brand) => (
            <span
              key={brand.name}
              className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-neutral-300 bg-white px-3.5 py-1.5 text-sm font-medium text-[var(--color-heading)] transition-all hover:scale-[1.03] hover:bg-neutral-50 hover:border-neutral-400"
            >
              <ReactCountryFlag
                countryCode={brand.code}
                svg
                style={{ width: "1.1em", height: "1.1em" }}
                title={brand.code}
              />
              {brand.name}
            </span>
          ))}
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1 rounded-lg border border-dashed border-neutral-300 bg-white px-3.5 py-1.5 text-sm font-medium text-[var(--color-body)] transition-all hover:border-neutral-400 hover:text-[var(--color-heading)]"
          >
            {showAll ? "Show less ←" : `View more (+${extraBrands.length}) →`}
          </button>
        </div>
      </InfoCard>

      {/* Card 3 — Achievements */}
      <InfoCard label="Achievements">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-base">🥇</span>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">
                GCET Kashmir Hackathon 2025
              </p>
              <p className="text-xs text-[var(--color-body)]">1st place</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-base">⚡</span>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">
                Cursor Hackathon Kashmir 2026
              </p>
              <p className="text-xs text-[var(--color-body)]">Top 15</p>
            </div>
          </div>
        </div>
      </InfoCard>
    </div>
  );
}
