"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import WorkCard from "@/components/WorkCard";

export default function Work() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const getBlurClass = (id: string) =>
    activeCard && activeCard !== id
      ? "blur-[2px] opacity-60 scale-[0.995]"
      : "blur-0 opacity-100 scale-100";

  return (
    <>
      <Navbar />

      {/* Project showcase cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Project 0 — Tublian */}
        <WorkCard
          title="Tublian"
          badge="Content Marketing"
          description="Built content campaigns to drive developer awareness and growth"
          href="https://www.instagram.com/tublian"
          className={`transition-all duration-200 ${getBlurClass("work-0")}`}
          onArrowMouseEnter={() => setActiveCard("work-0")}
          onArrowMouseLeave={() => setActiveCard(null)}
        >
          <Image
            src="/images/tublian.png"
            alt="Tublian preview"
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </WorkCard>

        {/* Project 00 — Higgsfield */}
        <WorkCard
          title="Higgsfield"
          badge="Content Marketing"
          description="Performance-led content strategy for product storytelling and reach"
          href="https://www.instagram.com/reel/DXHmGPYk_SZ/?igsh=MWxsOWZsbzZodHZzdw=="
          className={`transition-all duration-200 ${getBlurClass("work-00")}`}
          onArrowMouseEnter={() => setActiveCard("work-00")}
          onArrowMouseLeave={() => setActiveCard(null)}
        >
          <Image
            src="/images/higgsfield-content.jpg"
            alt="Higgsfield preview"
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </WorkCard>

        {/* Project 1 — InvestorPOV */}
        <WorkCard
          title="InvestorPOV"
          description="AI powered startup analysis in 60 seconds"
          href="https://investor-pov.vercel.app/"
          className={`transition-all duration-200 ${getBlurClass("work-1")}`}
          onArrowMouseEnter={() => setActiveCard("work-1")}
          onArrowMouseLeave={() => setActiveCard(null)}
        >
          <Image
            src="/images/investorpov.png"
            alt="InvestorPOV preview"
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </WorkCard>

        {/* Project 2 — CodeHype */}
        <WorkCard
          title="CodeHype"
          description="Everything You Need to Get Hired Faster"
          href="https://www.codehype.ai/"
          className={`transition-all duration-200 ${getBlurClass("work-2")}`}
          onArrowMouseEnter={() => setActiveCard("work-2")}
          onArrowMouseLeave={() => setActiveCard(null)}
        >
          <Image
            src="/images/codehype.png"
            alt="CodeHype.ai preview"
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </WorkCard>

        {/* Project 3 — The Halal Estates */}
        <WorkCard
          title="The Halal Estates"
          description="Own Land in Kashmir. Build Wealth That Lasts."
          href="https://www.thehalalestates.com/"
          className={`transition-all duration-200 ${getBlurClass("work-3")}`}
          onArrowMouseEnter={() => setActiveCard("work-3")}
          onArrowMouseLeave={() => setActiveCard(null)}
        >
          <Image
            src="/images/thehalalestates.png"
            alt="The Halal Estates preview"
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </WorkCard>

        {/* Project 4 — Detect VibeCode (duplicate) */}
        <WorkCard
          title="Detect VibeCode"
          description="Detect AI-Generated Websites Instantly"
          href="https://www.detectvibecode.com/"
          className={`transition-all duration-200 ${getBlurClass("work-4")}`}
          onArrowMouseEnter={() => setActiveCard("work-4")}
          onArrowMouseLeave={() => setActiveCard(null)}
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
