interface InfoCardProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export default function InfoCard({ label, children, className = "" }: InfoCardProps) {
  return (
    <div className={`rounded-[32px] bg-[var(--color-card)] p-5 ${className}`}>
      <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-widest text-[var(--color-body)]">
        {label}
      </span>
      {children}
    </div>
  );
}
