import { ArrowUpRight } from "lucide-react";

function IconX() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function SocialCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl bg-[var(--color-card)] p-6 sm:p-8">
      {/* Profile header */}
      <div>
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://api.dicebear.com/9.x/notionists/svg?seed=Haris"
              alt="Haris Ahmad"
              className="h-12 w-12 rounded-full bg-neutral-200 object-cover"
            />
            <div>
              <p className="text-sm font-bold text-[var(--color-heading)]">
                Haris Ahmad
              </p>
              <p className="text-xs text-[var(--color-body)]">@harisahmad59</p>
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1DA1F2] shadow-sm">
            <IconX />
          </div>
        </div>

        {/* Bio text */}
        <p className="text-base leading-relaxed text-[var(--color-heading)]">
          cooking up •{" "}
          <span className="text-[#1DA1F2]">@nextjs</span>{" "}
          <span className="text-[#1DA1F2]">@vercel</span>{" "}
          <span className="text-[#1DA1F2]">@figma</span>{" "}
          <span className="text-[#1DA1F2]">@tailwindcss</span>
        </p>
      </div>

      {/* CTA button */}
      <a
        href="https://twitter.com/harisahmad59"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-[var(--color-heading)] transition-colors hover:border-neutral-400"
      >
        Read mid tweets
        <ArrowUpRight size={14} />
      </a>
    </div>
  );
}
