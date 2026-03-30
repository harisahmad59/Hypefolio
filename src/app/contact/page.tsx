import Navbar from "@/components/Navbar";
import ContactCard from "@/components/ContactCard";
import ContactRightPanel from "@/components/ContactRightPanel";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Bento Grid — 1 left card, 2 right cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Left column — Contact intro */}
        <ContactCard />

        {/* Right column — 2 stacked cards */}
        <ContactRightPanel />
      </div>
    </>
  );
}
