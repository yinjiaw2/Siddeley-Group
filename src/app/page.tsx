import HeroSection from "@/components/home/HeroSection";
import GroupIntroSection from "@/components/home/GroupIntroSection";
import EcosystemSection from "@/components/home/EcosystemSection";
import ProcessSection from "@/components/home/ProcessSection";
import ServiceSection from "@/components/home/ServiceSection";
import TestHeroSectionPattern1 from "@/components/home/TestHeroSectionPattern1";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestHeroSectionPattern1 />
      <EcosystemSection />
      <GroupIntroSection />
      <ProcessSection />
      <ServiceSection />
    </>
  );
}
