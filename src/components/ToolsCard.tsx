import { ArrowUpRight } from "lucide-react";

const workspaceItems = [
  { emoji: "🎙️", title: "DotOS Notes", sub: "Haris's Workspace" },
  { emoji: "✏️", title: "Meeting Notes", sub: "Haris's Workspace" },
  { emoji: "🎯", title: "Project Timeline", sub: "Haris's Workspace" },
  { emoji: "✅", title: "Task Board", sub: "Haris's Workspace" },
];

const toolIcons = [
  { label: "VS Code", color: "#007ACC", letter: "VS" },
  { label: "Notion", color: "#000000", letter: "N" },
  { label: "Figma", color: "#F24E1E", letter: "F" },
  { label: "Slack", color: "#4A154B", letter: "S" },
  { label: "Webflow", color: "#4353FF", letter: "W" },
  { label: "GitHub", color: "#181717", letter: "G" },
  { label: "Vercel", color: "#000000", letter: "V" },
  { label: "Linear", color: "#5E6AD2", letter: "L" },
];

export default function ToolsCard() {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-[var(--color-card)] p-6 sm:p-8">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-body)]">
        <span className="text-base">📋</span>
        <span>Notion</span>
      </div>

      {/* Workspace items - horizontal scroll */}
      <div className="mb-5 flex gap-3 overflow-x-auto pb-1">
        {workspaceItems.map((item, i) => (
          <div
            key={i}
            className={`flex min-w-[150px] flex-col rounded-xl border bg-white px-4 py-3 text-sm ${
              i === 0
                ? "border-indigo-200 shadow-sm"
                : "border-transparent"
            }`}
          >
            <span className="mb-0.5 font-medium text-[var(--color-heading)]">
              {item.emoji} {item.title}
            </span>
            <span className="text-xs text-[var(--color-body)]">{item.sub}</span>
          </div>
        ))}
      </div>

      {/* Connector dot */}
      <div className="mb-4 flex justify-center">
        <div className="flex flex-col items-center gap-0.5">
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span className="h-4 w-px bg-neutral-300" />
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
        </div>
      </div>

      {/* Tool icons grid */}
      <div className="mb-5 flex flex-wrap gap-2.5">
        {toolIcons.map((tool) => (
          <div
            key={tool.label}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-xs font-bold text-white shadow-sm"
            style={{ backgroundColor: tool.color }}
            title={tool.label}
          >
            {tool.letter}
          </div>
        ))}
      </div>

      {/* Arrow link */}
      <div className="mt-auto">
        <a
          href="#tools"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-[var(--color-body)] transition-colors hover:border-neutral-400 hover:text-[var(--color-heading)]"
          aria-label="View all tools"
        >
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
