export default function ContactCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-[32px] bg-[var(--color-card)] p-8 sm:p-10">
      <div>
        {/* Heading */}
        <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-[var(--color-heading)]">Get in</span>{" "}
          <span className="font-light text-[var(--color-body)]">touch</span>
          <span className="text-[var(--color-heading)]">.</span>
        </h1>

        {/* Description */}
        <div className="space-y-6 text-lg leading-relaxed sm:text-xl sm:leading-relaxed text-[var(--color-body)]">
          <p>Have a project in mind?</p>
          <p>Want to collaborate on something cool?</p>

          <p>I&apos;m always open to working with brands, startups, and creators.</p>
          <p>Whether it&apos;s content, code, or marketing — let&apos;s talk.</p>

          <p>Reach out through any channel. I respond fast.</p>
        </div>
      </div>

      {/* Closing */}
      <p className="mt-10 text-sm font-medium text-[var(--color-heading)]">
        Let&apos;s build something together.
      </p>
    </div>
  );
}
