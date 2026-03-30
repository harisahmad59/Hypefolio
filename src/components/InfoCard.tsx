interface InfoCardProps {
  label: string;
  children: React.ReactNode;
}

export default function InfoCard({ label, children }: InfoCardProps) {
  return (
    <div className="rounded-xl border border-neutral-200/70 bg-[var(--color-card)] p-5">
      <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-widest text-[var(--color-body)]">
        {label}
      </span>
      {children}
    </div>
  );
}
