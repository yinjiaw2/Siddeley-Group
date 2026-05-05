import HeroSection from "@/components/home/HeroSection";
import GroupIntroSection from "@/components/home/GroupIntroSection";
import EcosystemSection from "@/components/home/EcosystemSection";
import ProcessSection from "@/components/home/ProcessSection";
import ServiceSection from "@/components/home/ServiceSection";
import SampleHeroSectionBCG from "@/components/home/SampleHeroSectionBCG";
import TestHeroSectionPattern1 from "@/components/home/TestHeroSectionPattern1";
import TestHeroSectionPattern2 from "@/components/home/TestHeroSectionPattern2";
import TestHeroSectionPattern3 from "@/components/home/TestHeroSectionPattern3";
import SampleHeroSectionImplement from "@/components/home/SampleHeroSectionImplement";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SampleHeroSectionBCG />
      <SampleHeroSectionImplement />
      <TestHeroSectionPattern1 />
      <TestHeroSectionPattern2 />
      <TestHeroSectionPattern3 />
      <EcosystemSection />
      <GroupIntroSection />
      <ProcessSection />
      <ServiceSection />
    </>
  );
}
