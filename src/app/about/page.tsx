import Navbar from "@/components/Navbar";
import AboutCard from "@/components/AboutCard";
import AboutRightPanel from "@/components/AboutRightPanel";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Bento Grid — 1 left card, 4 right testimonial cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Left column — About */}
        <AboutCard />

        {/* Right column — 4 testimonial cards */}
        <AboutRightPanel />
      </div>
    </>
  );
}
