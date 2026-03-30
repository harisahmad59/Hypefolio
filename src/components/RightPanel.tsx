import { Terminal, ArrowRight } from "lucide-react";
import InfoCard from "./InfoCard";

const brands = ["Odoo", "Kimi", "Kixi.in", "TheHalalEstates"];

export default function RightPanel() {
  return (
    <div className="flex flex-col gap-4">
      {/* Card 1 — What I Do */}
      <InfoCard label="Current">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-[var(--color-heading)]">
              Building CodeHype
            </h3>
            <ul className="space-y-1.5 text-sm text-[var(--color-body)]">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[var(--color-body)] opacity-50" />
                AI + coding content
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[var(--color-body)] opacity-50" />
                SaaS experiments
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[var(--color-body)] opacity-50" />
                Developer tools
              </li>
            </ul>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[var(--color-body)]">
            <Terminal size={18} />
          </div>
        </div>
      </InfoCard>

      {/* Card 2 — Work & Collaborations */}
      <InfoCard label="Work">
        <h3 className="mb-4 text-lg font-semibold text-[var(--color-heading)]">
          Brands & Collaborations
        </h3>
        <div className="flex flex-wrap gap-2">
          {brands.map((brand) => (
            <span
              key={brand}
              className="rounded-lg border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[var(--color-heading)] transition-all hover:scale-[1.03] hover:bg-neutral-50 hover:border-neutral-300"
            >
              {brand}
            </span>
          ))}
        </div>
      </InfoCard>

      {/* Card 3 — Proof */}
      <InfoCard label="Results">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-base">🥇</span>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">
                GCET Hackathon
              </p>
              <p className="text-xs text-[var(--color-body)]">1st place</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-base">⚡</span>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">
                Cursor Hackathon
              </p>
              <p className="text-xs text-[var(--color-body)]">Top 15</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-base">📈</span>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">
                CodeHype
              </p>
              <p className="text-xs text-[var(--color-body)]">
                Built audience through content & code
              </p>
            </div>
          </div>
        </div>

        {/* View work link */}
        <a
          href="#work"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-heading)] transition-colors hover:text-[var(--color-body)]"
        >
          View work
          <ArrowRight size={14} />
        </a>
      </InfoCard>
    </div>
  );
}
