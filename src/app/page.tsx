"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ManifestoCard from "@/components/ManifestoCard";
import GitHubGrid from "@/components/GitHubGrid";
import RightPanel from "@/components/RightPanel";

export default function Home() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const getBlurClass = (id: string) =>
    activeCard && activeCard !== id
      ? "blur-[2px] opacity-60 scale-[0.995]"
      : "blur-0 opacity-100 scale-100";

  return (
    <>
      <Navbar />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Left column — Manifesto + GitHub */}
        <div className="flex flex-col gap-4">
          <ManifestoCard
            className={`transition-all duration-200 ${getBlurClass("manifesto")}`}
          />
          <GitHubGrid
            className={`transition-all duration-200 ${getBlurClass("github")}`}
            onArrowMouseEnter={() => setActiveCard("github")}
            onArrowMouseLeave={() => setActiveCard(null)}
          />
        </div>

        {/* Right column — Stacked info cards */}
        <RightPanel activeCard={activeCard} setActiveCard={setActiveCard} />
      </div>
    </>
  );
}
