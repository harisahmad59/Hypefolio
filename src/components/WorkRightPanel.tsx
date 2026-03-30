"use client";

import { Globe, Pen, BarChart3, Video, Search, Code } from "lucide-react";
import InfoCard from "./InfoCard";

export default function WorkRightPanel() {
  return (
    <div className="flex flex-col gap-4">
      {/* Card 1 — Services */}
      <InfoCard label="Services">
        <h3 className="mb-5 text-lg font-semibold text-[var(--color-heading)]">
          What I Offer
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-start gap-3 rounded-xl bg-white p-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[var(--color-body)]">
              <Globe size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">Website Development</p>
              <p className="mt-0.5 text-xs text-[var(--color-body)]">Modern, fast, responsive</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-white p-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[var(--color-body)]">
              <Pen size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">Content Marketing</p>
              <p className="mt-0.5 text-xs text-[var(--color-body)]">Strategy, SEO, Growth</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-white p-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[var(--color-body)]">
              <Video size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">Video & Social</p>
              <p className="mt-0.5 text-xs text-[var(--color-body)]">Reels, Shorts, YouTube</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-white p-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[var(--color-body)]">
              <Code size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">SaaS & Tools</p>
              <p className="mt-0.5 text-xs text-[var(--color-body)]">MVP, Product, Launch</p>
            </div>
          </div>
        </div>
      </InfoCard>

      {/* Card 2 — Featured Projects */}
      <InfoCard label="Featured">
        <h3 className="mb-5 text-lg font-semibold text-[var(--color-heading)]">
          Recent Projects
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[var(--color-body)]">
              <BarChart3 size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">
                CodeHype
              </p>
              <p className="mt-0.5 text-xs text-[var(--color-body)]">
                AI + coding community — 105M+ reach, 200K+ followers.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[var(--color-body)]">
              <Search size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">
                Brand Partnerships
              </p>
              <p className="mt-0.5 text-xs text-[var(--color-body)]">
                Content marketing & website development for 30+ global brands.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[var(--color-body)]">
              <Code size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">
                SaaS Experiments
              </p>
              <p className="mt-0.5 text-xs text-[var(--color-body)]">
                Building developer tools and AI-powered products.
              </p>
            </div>
          </div>
        </div>
      </InfoCard>
    </div>
  );
}
