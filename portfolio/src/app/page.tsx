import Navbar from "@/components/Navbar";
import ManifestoCard from "@/components/ManifestoCard";
import ToolsCard from "@/components/ToolsCard";
import ProjectCard from "@/components/ProjectCard";
import SocialCard from "@/components/SocialCard";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Left column — Manifesto (spans full height) */}
        <div className="lg:row-span-2">
          <ManifestoCard />
        </div>

        {/* Right top — Tools card */}
        <div>
          <ToolsCard />
        </div>

        {/* Right bottom — 2-column split */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ProjectCard />
          <SocialCard />
        </div>
      </div>
    </>
  );
}
