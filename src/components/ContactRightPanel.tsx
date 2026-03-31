"use client";

import { Mail, Instagram, Youtube, Linkedin, Twitter, Copy, Check } from "lucide-react";
import { useState } from "react";
import InfoCard from "./InfoCard";

export default function ContactRightPanel() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("haris@codehype.ai");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Card 1 — Direct Contact */}
      <InfoCard label="Contact">
        <h3 className="mb-5 text-lg font-semibold text-[var(--color-heading)]">
          Reach Me Directly
        </h3>
        <div className="space-y-3">
          <button
            onClick={handleCopy}
            className="flex w-full items-center gap-3 rounded-xl bg-[var(--color-surface)] p-4 text-left transition-all hover:bg-[var(--color-surface-hover)]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-muted)] text-[var(--color-body)]">
              <Mail size={18} strokeWidth={1.5} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-[var(--color-heading)]">Email</p>
              <p className="text-xs text-[var(--color-body)]">haris@codehype.ai</p>
            </div>
            <div className="text-[var(--color-body)]">
              {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
            </div>
          </button>

          <a
            href="https://instagram.com/codehype"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-3 rounded-xl bg-[var(--color-surface)] p-4 transition-all hover:bg-[var(--color-surface-hover)]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-muted)] text-[var(--color-body)]">
              <Instagram size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">Instagram</p>
              <p className="text-xs text-[var(--color-body)]">@codehype</p>
            </div>
          </a>

          <a
            href="https://youtube.com/@codehype"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-3 rounded-xl bg-[var(--color-surface)] p-4 transition-all hover:bg-[var(--color-surface-hover)]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-muted)] text-[var(--color-body)]">
              <Youtube size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">YouTube</p>
              <p className="text-xs text-[var(--color-body)]">@codehype</p>
            </div>
          </a>
        </div>
      </InfoCard>

      {/* Card 2 — Social Links */}
      <InfoCard label="Social">
        <h3 className="mb-5 text-lg font-semibold text-[var(--color-heading)]">
          Follow & Connect
        </h3>
        <div className="space-y-3">
          <a
            href="https://linkedin.com/in/harisahmad59"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-3 rounded-xl bg-[var(--color-surface)] p-4 transition-all hover:bg-[var(--color-surface-hover)]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-muted)] text-[var(--color-body)]">
              <Linkedin size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">LinkedIn</p>
              <p className="text-xs text-[var(--color-body)]">Haris Ahmad</p>
            </div>
          </a>

          <a
            href="https://twitter.com/codehype"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-3 rounded-xl bg-[var(--color-surface)] p-4 transition-all hover:bg-[var(--color-surface-hover)]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-muted)] text-[var(--color-body)]">
              <Twitter size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-heading)]">Twitter / X</p>
              <p className="text-xs text-[var(--color-body)]">@codehype</p>
            </div>
          </a>
        </div>
      </InfoCard>
    </div>
  );
}
