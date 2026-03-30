import Navbar from "@/components/Navbar";
import AboutCard from "@/components/AboutCard";
import AboutRightPanel from "@/components/AboutRightPanel";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Bento Grid — 1 left card, 2 right cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Left column — About */}
        <AboutCard />

        {/* Right column — 2 stacked cards */}
        <AboutRightPanel />
      </div>
    </>
  );
}
