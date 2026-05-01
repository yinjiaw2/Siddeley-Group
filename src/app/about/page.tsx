import type { Metadata } from "next";
import GroupHistoryVisionSection from "@/components/about/GroupHistoryVisionSection";
import LeadershipTeamSection from "@/components/about/LeadershipTeamSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";

export const metadata: Metadata = {
  title: "About Us",
  description: "The history and vision of Siddeley Group.",
};

export default function AboutPage() {
  return (
    <>
      <GroupHistoryVisionSection />
      <LeadershipTeamSection />
      <CoreValuesSection />
    </>
  );
}
