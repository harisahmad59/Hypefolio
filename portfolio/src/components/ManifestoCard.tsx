export default function ManifestoCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl bg-[var(--color-card)] p-8 sm:p-10">
      {/* Heading */}
      <div>
        <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-[var(--color-heading)]">Haris</span>{" "}
          <span className="font-light text-[var(--color-body)]">
            is building{" "}
          </span>
          <span className="text-[var(--color-heading)] underline decoration-2 underline-offset-4">
            Hypefolio
          </span>
          <span className="text-[var(--color-heading)]">.</span>
        </h1>

        {/* Manifesto lines */}
        <div className="space-y-6 text-lg leading-relaxed sm:text-xl sm:leading-relaxed">
          <p className="text-[var(--color-body)]">i design things.</p>

          <p className="text-[var(--color-body)]">
            i think design can change things.
          </p>

          <p className="text-[var(--color-body)]">
            i think the things we design are just as important as the things we
            choose not to.
          </p>

          <p className="text-[var(--color-body)]">
            i think we should design things that do the things we don&apos;t
            enjoy, and make the things we do enjoy, even better.
          </p>

          <p className="text-[var(--color-body)]">
            i think there are too many things.
          </p>

          <p className="text-[var(--color-body)]">
            i think there should be fewer, but better things
            <span className="text-[var(--color-accent)]">*</span>.
          </p>

          <p className="text-[var(--color-body)]">
            the best things. an optimal amount.
          </p>
        </div>
      </div>

      {/* Footnote */}
      <p className="mt-10 text-sm text-[var(--color-accent)]">
        * Less, but better.
      </p>
    </div>
  );
}
