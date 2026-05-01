import HeroSection from "@/components/home/HeroSection";
import GroupIntroSection from "@/components/home/GroupIntroSection";
import EcosystemSection from "@/components/home/EcosystemSection";
import ProcessSection from "@/components/home/ProcessSection";
import ServiceSection from "@/components/home/ServiceSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GroupIntroSection />
      <EcosystemSection />
      <ProcessSection />
      <ServiceSection />
      <ContactSection />
    </>
  );
}
