interface ManifestoCardProps {
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ManifestoCard({
  className = "",
  onMouseEnter,
  onMouseLeave,
}: ManifestoCardProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`flex h-auto flex-col justify-between rounded-[32px] bg-[var(--color-card)] p-8 sm:p-10 overflow-visible lg:h-[670px] lg:overflow-auto ${className}`}
    >
      <div>
        {/* Heading */}
        <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-[var(--color-heading)]">Haris</span>{" "}
          <span className="font-light text-[var(--color-body)]">
            is building{" "}
          </span>
          <span className="text-[var(--color-heading)] underline decoration-2 underline-offset-4">
            CodeHype
          </span>
          <span className="text-[var(--color-heading)]">.</span>
        </h1>

        {/* Manifesto lines */}
        <div className="space-y-6 text-lg leading-relaxed sm:text-lg sm:leading-relaxed text-[var(--color-body)]">
          <p>I build systems that scale ideas into outcomes. Code, content, and AI working as one.</p>
          <p>I’ve used content to take products from 0 to 10K users. Built for brands across eCommerce and edtech, where execution mattered more than ideas.</p>
          <p>Now I focus on one thing, building my own leverage. No distractions, no excess, only what compounds.</p>
          <p>CodeHype is not content, it’s a system. A platform designed to make learning and building faster, sharper, and more practical.</p>
          <p>I don’t build everything. I build what creates real impact.</p>
        </div>

      </div>

      {/* Closing */}
      <p className="mt-10 text-sm font-medium text-[var(--color-heading)]">
        Building in public. Learning fast.
      </p>
    </div>
  );
}
