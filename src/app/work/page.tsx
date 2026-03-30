import Navbar from "@/components/Navbar";
import WorkCard from "@/components/WorkCard";
import WorkRightPanel from "@/components/WorkRightPanel";

export default function Work() {
  return (
    <>
      <Navbar />

      {/* Bento Grid — 1 left card, 2 right cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Left column — Work intro */}
        <WorkCard />

        {/* Right column — 2 stacked cards */}
        <WorkRightPanel />
      </div>
    </>
  );
}
