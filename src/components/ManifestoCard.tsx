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
        <div className="space-y-6 text-lg leading-relaxed sm:text-xl sm:leading-relaxed text-[var(--color-body)]">
          <p>I build things.</p>
          <p>I think building can change things.</p>

          <p>I think the things I build are just as important as the things I choose not to.</p>

          <p>I think we should build things that do the things we don&apos;t enjoy, and make the things we do enjoy, even better.</p>

          <p>I think there are too many things.</p>
          <p>I think there should be fewer, but better things.</p>

          <p>The right things. An optimal amount.</p>
        </div>

      </div>

      {/* Closing */}
      <p className="mt-10 text-sm font-medium text-[var(--color-heading)]">
        Building in public. Learning fast.
      </p>
    </div>
  );
}
