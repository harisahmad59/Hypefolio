import { ArrowUpRight } from "lucide-react";

export default function GitHubGrid() {
  return (
    <div className="flex h-[320px] flex-col justify-between rounded-[32px] bg-[var(--color-card)] p-8 sm:p-10">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-body)]">
            GitHub
          </p>
          <h3 className="mt-1 text-lg font-semibold text-[var(--color-heading)]">
            Contributions
          </h3>
        </div>
        <a
          href="https://github.com/harisahmad59"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-[var(--color-body)] transition-colors hover:border-neutral-400 hover:text-[var(--color-heading)]"
        >
          <ArrowUpRight size={16} strokeWidth={1.5} />
        </a>
      </div>

      {/* GitHub Contribution Graph */}
      <div className="flex-1 overflow-hidden rounded-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ghchart.rshah.org/harisahmad59"
          alt="harisahmad59's GitHub contribution chart"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
