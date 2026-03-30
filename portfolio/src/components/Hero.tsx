"use client";

import { useState } from "react";
import { Copy, Check, Music } from "lucide-react";
import SocialLinks from "./SocialLinks";

const EMAIL = "hello@harisahmad.dev";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="space-y-6">
      {/* Profile image */}
      <div className="relative h-16 w-16">
        <img
          src="https://api.dicebear.com/9.x/notionists/svg?seed=Haris"
          alt="Haris Ahmad"
          className="h-16 w-16 rounded-full bg-neutral-100 object-cover ring-2 ring-neutral-200"
        />
        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Haris Ahmad
      </h1>

      {/* Subtext line */}
      <p className="flex flex-wrap items-center gap-x-2 text-sm text-neutral-500">
        <span>Engineer</span>
        <span className="text-neutral-300">·</span>
        <span>Polymath</span>
        <span className="text-neutral-300">·</span>
        <button
          onClick={copyEmail}
          className="group inline-flex items-center gap-1 text-neutral-500 transition-colors hover:text-neutral-900"
          aria-label="Copy email address"
        >
          <span className="underline decoration-neutral-300 underline-offset-2 transition-colors group-hover:decoration-neutral-500">
            {EMAIL}
          </span>
          {copied ? (
            <Check
              size={14}
              className="text-emerald-500 transition-transform"
            />
          ) : (
            <Copy
              size={14}
              className="opacity-0 transition-opacity group-hover:opacity-100"
            />
          )}
        </button>
      </p>

      {/* Short description */}
      <p className="text-[15px] leading-relaxed text-neutral-600">
        Building thoughtful software and exploring ideas at the intersection of
        engineering, design, and curiosity.
      </p>

      {/* Last played */}
      <div className="flex items-center gap-2 text-xs text-neutral-400">
        <Music size={14} className="shrink-0" />
        <span>Last played — Echoes by Pink Floyd</span>
      </div>

      {/* Social icons */}
      <SocialLinks />
    </section>
  );
}
