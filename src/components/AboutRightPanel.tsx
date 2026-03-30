"use client";

import { Code, Megaphone, Wrench, Rocket, Lightbulb, Target } from "lucide-react";
import InfoCard from "./InfoCard";

export default function AboutRightPanel() {
  return (
    <div className="flex flex-col gap-4">
      {/* Card 1 — Skills & Expertise */}
      <InfoCard label="Skills">
        <h3 className="mb-5 text-lg font-semibold text-[var(--color-heading)]">
          What I&apos;m Good At
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-start gap-3 rounded-xl bg-white p-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[var(--color-body)]">
              <Code size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">Full-Stack Dev</p>
              <p className="mt-0.5 text-xs text-[var(--color-body)]">Next.js, React, Node</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-white p-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[var(--color-body)]">
              <Megaphone size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">Content Marketing</p>
              <p className="mt-0.5 text-xs text-[var(--color-body)]">SEO, Social, Growth</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-white p-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[var(--color-body)]">
              <Wrench size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">SaaS Building</p>
              <p className="mt-0.5 text-xs text-[var(--color-body)]">Product, MVP, Ship</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-white p-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[var(--color-body)]">
              <Rocket size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">AI & Automation</p>
              <p className="mt-0.5 text-xs text-[var(--color-body)]">LLMs, Agents, Tools</p>
            </div>
          </div>
        </div>
      </InfoCard>

      {/* Card 2 — Values & Philosophy */}
      <InfoCard label="Philosophy">
        <h3 className="mb-5 text-lg font-semibold text-[var(--color-heading)]">
          How I Work
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[var(--color-body)]">
              <Target size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">
                Ship fast, iterate faster
              </p>
              <p className="mt-0.5 text-xs text-[var(--color-body)]">
                I believe in getting things out there and improving based on real feedback.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[var(--color-body)]">
              <Lightbulb size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">
                Build in public
              </p>
              <p className="mt-0.5 text-xs text-[var(--color-body)]">
                Sharing the journey — wins, losses, and everything in between.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[var(--color-body)]">
              <Rocket size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">
                Distribution &gt; Perfection
              </p>
              <p className="mt-0.5 text-xs text-[var(--color-body)]">
                A good product that reaches people beats a perfect product nobody sees.
              </p>
            </div>
          </div>
        </div>
      </InfoCard>
    </div>
  );
}
