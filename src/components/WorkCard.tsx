export default function WorkCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-[32px] bg-[var(--color-card)] p-8 sm:p-10">
      <div>
        {/* Heading */}
        <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-[var(--color-heading)]">My</span>{" "}
          <span className="font-light text-[var(--color-body)]">work</span>
          <span className="text-[var(--color-heading)]">.</span>
        </h1>

        {/* Description */}
        <div className="space-y-6 text-lg leading-relaxed sm:text-xl sm:leading-relaxed text-[var(--color-body)]">
          <p>I build things that ship.</p>
          <p>From SaaS products to content systems to developer tools.</p>

          <p>I&apos;ve worked with 30+ brands — helping them grow through code, content, and marketing.</p>
          <p>Every project is a chance to solve real problems and create real impact.</p>

          <p>I focus on things that matter: speed, distribution, and outcomes.</p>
        </div>
      </div>

      {/* Closing */}
      <p className="mt-10 text-sm font-medium text-[var(--color-heading)]">
        Shipping consistently. Building what matters.
      </p>
    </div>
  );
}
