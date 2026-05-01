import type { Metadata } from "next";
import SiddeleyAdvantageSection from "@/components/approach/SiddeleyAdvantageSection";
import ClientJourneySection from "@/components/approach/ClientJourneySection";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "The Siddeley approach — why an integrated pipeline produces better results.",
};

export default function ApproachPage() {
  return (
    <>
      <SiddeleyAdvantageSection />
      <ClientJourneySection />
    </>
  );
}
