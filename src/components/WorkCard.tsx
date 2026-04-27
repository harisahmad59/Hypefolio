import { ArrowUpRight } from "lucide-react";

interface WorkCardProps {
  title: string;
  description: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onArrowMouseEnter?: () => void;
  onArrowMouseLeave?: () => void;
}

export default function WorkCard({
  title,
  description,
  href,
  children,
  className = "",
  onArrowMouseEnter,
  onArrowMouseLeave,
}: WorkCardProps) {
  const sharedClassName =
    `group flex h-full flex-col rounded-[32px] bg-[var(--color-card)] p-8 sm:p-10 ${className}`;

  const content = (
    <>
      {/* Header — Title + Arrow */}
      <div className="mb-1 flex items-start justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--color-heading)] sm:text-3xl">
          {title}
        </h2>
        <div
          onMouseEnter={onArrowMouseEnter}
          onMouseLeave={onArrowMouseLeave}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-body)] transition-colors group-hover:border-[var(--color-border-muted)] group-hover:text-[var(--color-heading)]"
        >
          <ArrowUpRight size={18} strokeWidth={1.5} />
        </div>
      </div>

      {/* Subtitle */}
      <p className="mb-8 text-sm text-[var(--color-body)] sm:text-base">
        {description}
      </p>

      {/* Preview area */}
      <div className="relative flex-1 overflow-hidden rounded-2xl">
        {children}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClassName}
      >
        {content}
      </a>
    );
  }

  return <div className={sharedClassName}>{content}</div>;
}
