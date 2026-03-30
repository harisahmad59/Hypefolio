export default function ManifestoCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl bg-[var(--color-card)] p-8 sm:p-10">
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
          <p>I build products.</p>
          <p>I write code that ships.</p>
          <p>I market what I build.</p>

          <p>I focus on useful things.</p>
          <p>Tools, content, systems.</p>

          <p>I care about speed.</p>
          <p>I care about distribution.</p>
          <p>I care about outcomes.</p>
        </div>

        {/* Achievements */}
        <div className="mt-10 space-y-3 text-base text-[var(--color-body)]">
          <p>
            <span className="mr-1.5">🥇</span>
            <span className="text-[var(--color-heading)] font-medium">
              1st place
            </span>{" "}
            at GCET Kashmir Hackathon 2025.
          </p>
          <p>
            <span className="mr-1.5">⚡</span>
            <span className="text-[var(--color-heading)] font-medium">
              Top 15
            </span>{" "}
            at Cursor Hackathon Kashmir 2026.
          </p>
        </div>
      </div>

      {/* Closing */}
      <p className="mt-10 text-sm font-medium text-[var(--color-heading)]">
        Building in public. Learning fast.
      </p>
    </div>
  );
}
