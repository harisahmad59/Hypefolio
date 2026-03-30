"use client";

import { useState } from "react";
import { Instagram, Youtube, Globe } from "lucide-react";
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
      {/* Card 1 — Current / Stats */}
      <InfoCard label="Current">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-heading)]">
              Building CodeHype
            </h3>
            <p className="mt-1 text-sm text-[var(--color-body)]">
              AI + coding community
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a href="https://instagram.com/codehype" target="_blank" rel="noopener noreferrer" className="flex h-[50px] w-[50px] items-center justify-center rounded-xl border border-[#949494]/30 text-[#949494] transition-colors hover:border-[#949494]/60 hover:text-[var(--color-heading)]">
              <Instagram size={22} strokeWidth={1.5} />
            </a>
            <a href="https://youtube.com/@codehype" target="_blank" rel="noopener noreferrer" className="flex h-[50px] w-[50px] items-center justify-center rounded-xl border border-[#949494]/30 text-[#949494] transition-colors hover:border-[#949494]/60 hover:text-[var(--color-heading)]">
              <Youtube size={22} strokeWidth={1.5} />
            </a>
            <a href="https://codehype.ai" target="_blank" rel="noopener noreferrer" className="flex h-[50px] w-[50px] items-center justify-center rounded-xl border border-[#949494]/30 text-[#949494] transition-colors hover:border-[#949494]/60 hover:text-[var(--color-heading)]">
              <Globe size={22} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Primary metric */}
        <div className="mb-6">
          <p className="text-4xl font-bold tracking-tight text-[var(--color-heading)]">
            105M+
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--color-body)]">
            Total Content Reach
          </p>
        </div>

        {/* Secondary stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 text-center">
            <p className="text-3xl font-bold text-[var(--color-heading)]">5M+</p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-[var(--color-body)]">Monthly Reach</p>
          </div>
          <div className="p-3.5 text-center">
            <p className="text-3xl font-bold text-[var(--color-heading)]">200K+</p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-[var(--color-body)]">Followers</p>
          </div>
        </div>
      </InfoCard>

      {/* Card 2 — Work & Collaborations */}
      <InfoCard label="Brands Worked With">
        <h3 className="mb-4 text-lg font-semibold text-[var(--color-heading)]">
          Websites OR Content Marketing
        </h3>
        <div className="flex flex-wrap gap-2">
          {visibleBrands.map((brand) => (
            <span
              key={brand.name}
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[var(--color-heading)] transition-all hover:scale-[1.03] hover:bg-neutral-50 hover:border-neutral-300"
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
