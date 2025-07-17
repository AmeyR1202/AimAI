"use client";

import HeroSection from "@/components/Hero";
import Hero_Feat from "@/components/Hero_Features";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Testimonails from "@/components/Testimonails";
import FAQS from "@/components/FAQS";
import LandingCTA from "@/components/LandingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />
      <Hero_Feat />
      <Stats />
      <HowItWorks />
      <Testimonails />
      <FAQS />
      <LandingCTA />
      <Footer />
    </div>
  );
}
