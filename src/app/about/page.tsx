import type { Metadata } from "next";
import GroupHistoryVisionSection from "@/components/about/GroupHistoryVisionSection";

export const metadata: Metadata = {
  title: "About Us",
  description: "The history and vision of Siddeley Group.",
};

export default function AboutPage() {
  return (
    <>
      <GroupHistoryVisionSection />
    </>
  );
}
