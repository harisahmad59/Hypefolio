import Navbar from "@/components/Navbar";
import ManifestoCard from "@/components/ManifestoCard";
import RightPanel from "@/components/RightPanel";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Left column — Manifesto */}
        <ManifestoCard />

        {/* Right column — Stacked info cards */}
        <RightPanel />
      </div>
    </>
  );
}
