"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  handle: string;
  avatar?: string;
  initials?: string;
  quote: React.ReactNode;
  link: string;
  platform: "twitter" | "linkedin";
}

function TestimonialCard({
  name,
  handle,
  avatar,
  initials,
  quote,
  link,
  platform,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-[32px] bg-[var(--color-card)] p-6">
      {/* Header — Avatar + Name + Platform icon */}
      <div>
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {avatar ? (
              <Image
                src={avatar}
                alt={name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-sm font-semibold text-[var(--color-heading)]">
                {initials}
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-[var(--color-heading)]">
                {name}
              </p>
              <p className="text-xs text-[var(--color-body)]">@{handle}</p>
            </div>
          </div>
          {/* Platform icon */}
          {platform === "twitter" ? (
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7 text-[#1DA1F2]"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7 text-[#0A66C2]"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          )}
        </div>

        {/* Quote */}
        <p className="text-sm leading-relaxed text-[var(--color-heading)]">
          {quote}
        </p>
      </div>

      {/* CTA button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-neutral-200 px-4 py-2.5 text-sm font-medium text-[var(--color-heading)] transition-colors hover:bg-neutral-100"
      >
        Read {platform === "twitter" ? "post" : "post"}
        <ArrowUpRight size={14} strokeWidth={1.5} />
      </a>
    </div>
  );
}

export default function AboutRightPanel() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <TestimonialCard
        name="Abacus AI"
        handle="ababorai"
        initials="A"
        platform="twitter"
        link="https://x.com"
        quote={
          <>
            Great content by{" "}
            <span className="text-[#1DA1F2]">@codehype</span> — always
            delivering value to the dev community. 🔥
          </>
        }
      />

      <TestimonialCard
        name="Hostinger"
        handle="hostinger"
        initials="H"
        platform="twitter"
        link="https://x.com"
        quote={
          <>
            Loved working with{" "}
            <span className="text-[#1DA1F2]">@harisahmad</span> on content
            marketing — clear, fast, and results-driven.
          </>
        }
      />

      <TestimonialCard
        name="Odoo"
        handle="odaborofficial"
        initials="O"
        platform="linkedin"
        link="https://linkedin.com"
        quote={
          <>
            Solid developer and marketer. Built and shipped content that
            actually moved the needle for us.
          </>
        }
      />

      <TestimonialCard
        name="Tublian"
        handle="tublian"
        initials="T"
        platform="twitter"
        link="https://x.com"
        quote={
          <>
            Haris brings speed and clarity to everything he does.{" "}
            <span className="text-[#1DA1F2]">@codehype</span> is proof of
            that. 🚀
          </>
        }
      />
    </div>
  );
}
