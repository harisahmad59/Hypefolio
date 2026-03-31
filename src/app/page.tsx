import Navbar from "@/components/Navbar";
import ManifestoCard from "@/components/ManifestoCard";
import GitHubGrid from "@/components/GitHubGrid";
import RightPanel from "@/components/RightPanel";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Left column — Manifesto + GitHub */}
        <div className="flex flex-col gap-4">
          <ManifestoCard />
          <GitHubGrid />
        </div>

        {/* Right column — Stacked info cards */}
        <RightPanel />
      </div>
    </>
  );
}
