import Image from "next/image";
import Navbar from "@/components/Navbar";
import WorkCard from "@/components/WorkCard";

export default function Work() {
  return (
    <>
      <Navbar />

      {/* Two project showcase cards side by side */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Project 1 — CodeHype */}
        <WorkCard
          title="InvestorPOV"
          description="AI powered startup analysis in 60 seconds"
          href="https://codehype.ai"
        >
          <Image
            src="/images/investorpov.png"
            alt="CodeHype preview"
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </WorkCard>

        {/* Project 2 — Brand Work */}
        <WorkCard
          title="Detect VibeCode"
          description="Detect AI-Generated Websites Instantly"
        >
          <Image
            src="/images/detectvibecode.png"
            alt="Detect VibeCode preview"
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </WorkCard>
      </div>
    </>
  );
}
