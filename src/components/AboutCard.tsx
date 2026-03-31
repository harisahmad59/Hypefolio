export default function AboutCard() {
  return (
    <div className="flex flex-col justify-between rounded-[32px] bg-[var(--color-card)] p-8 sm:p-10 max-h-[672px]">
      <div>
        {/* Heading */}
        <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-[var(--color-heading)]">About</span>{" "}
          <span className="font-light text-[var(--color-body)]">me</span>
          <span className="text-[var(--color-heading)]">.</span>
        </h1>

        {/* Bio */}
        <div className="space-y-6 text-lg leading-relaxed sm:text-xl sm:leading-relaxed text-[var(--color-body)]">
          <p>I&apos;m Haris Ahmad.</p>
          <p>A builder, marketer, and engineer from Kashmir.</p>

          <p>I started CodeHype to bridge the gap between coding and content.</p>
          <p>I believe in shipping fast, learning in public, and building things that matter.</p>

          <p>I&apos;ve worked with 30+ brands across the globe — from startups to enterprises.</p>
          <p>I focus on growth, distribution, and making things people actually use.</p>
        </div>
      </div>

      {/* Closing */}
      <p className="mt-10 text-sm font-medium text-[var(--color-heading)]">
        Always building. Always learning.
      </p>
    </div>
  );
}
