import type { Metadata } from "next";
import KarriereClient from "./KarriereClient";

export const metadata: Metadata = {
  title: "Karriere",
  description:
    "Werde Teil des SPARK Teams – Immobilienberater (m/w/d) in Kassel und remote. Verantwortung übernehmen, wachsen, mitzugestalten.",
  alternates: { canonical: "/karriere" },
};

export default function KarrierePage() {
  return <KarriereClient />;
}
