export default function ProjectCard() {
  return (
    <div className="relative flex h-full items-end justify-center overflow-hidden rounded-2xl bg-[var(--color-card)] p-6 sm:p-8">
      {/* Phone mockup */}
      <div className="relative mx-auto w-[220px]">
        {/* Phone frame */}
        <div className="overflow-hidden rounded-[28px] border-[6px] border-neutral-800 bg-white shadow-xl">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-white px-5 py-2 text-[10px] font-semibold text-[var(--color-heading)]">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="text-[8px]">●●●●</span>
              <span className="text-[8px]">📶</span>
              <span className="text-[8px]">🔋</span>
            </div>
          </div>

          {/* App content */}
          <div className="space-y-3 bg-white px-4 pb-6 pt-2">
            <div className="text-xs text-[var(--color-body)]">
              Delivering to → <span className="font-medium text-[var(--color-heading)]">Brooklyn</span> ▾
            </div>

            {/* Search bar */}
            <div className="flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-2 text-[10px] text-[var(--color-body)]">
              <span>🔍</span>
              <span>Search by restaurant or entrée</span>
            </div>

            {/* Discover section */}
            <div>
              <p className="mb-2 text-base font-bold text-[var(--color-heading)]">
                Discover
              </p>
              <div className="flex gap-2">
                <span className="rounded-full bg-red-500 px-3 py-1 text-[10px] font-medium text-white">
                  Trivia
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-[10px] font-medium text-[var(--color-heading)]">
                  Express
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-[10px] font-medium text-[var(--color-heading)]">
                  Japanese
                </span>
              </div>
            </div>

            {/* Restaurant card */}
            <div className="overflow-hidden rounded-xl bg-amber-800">
              <div className="px-4 py-5">
                <p className="text-center text-2xl font-black tracking-wide text-white">
                  Joe&apos;s PIZZA
                </p>
                <p className="text-center text-[9px] text-amber-200">
                  Since 1975
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
