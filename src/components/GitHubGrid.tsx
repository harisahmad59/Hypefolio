import { ArrowUpRight } from "lucide-react";

interface GitHubGridProps {
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onArrowMouseEnter?: () => void;
  onArrowMouseLeave?: () => void;
}

export default function GitHubGrid({
  className = "",
  onMouseEnter,
  onMouseLeave,
  onArrowMouseEnter,
  onArrowMouseLeave,
}: GitHubGridProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`flex h-[320px] shrink-0 flex-col justify-between rounded-[32px] bg-[var(--color-card)] p-8 sm:p-10 ${className}`}
    >
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
          onMouseEnter={onArrowMouseEnter}
          onMouseLeave={onArrowMouseLeave}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-body)] transition-colors hover:border-[var(--color-border-muted)] hover:text-[var(--color-heading)]"
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
