import type { Metadata } from "next";
import SiddeleyAdvantageSection from "@/components/approach/SiddeleyAdvantageSection";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "The Siddeley approach — why an integrated pipeline produces better results.",
};

export default function ApproachPage() {
  return (
    <>
      <SiddeleyAdvantageSection />
    </>
  );
}
