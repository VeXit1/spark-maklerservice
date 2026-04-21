import type { Metadata } from "next";
import JobPageClient from "../JobPageClient";

export const metadata: Metadata = {
  title: "Immobilienberater / Immobilienvertrieb (m/w/d) – Kassel",
  description:
    "Starte deine Karriere als Immobilienberater bei SPARK Maklerservice in Kassel. Vor Ort, Vollzeit, mit qualifizierten Kundenanfragen.",
};

const tasks = [
  "Du führst Beratungsgespräche mit Interessenten – digital oder persönlich in Kassel.",
  "Du analysierst Ziele, finanzielle Ausgangssituationen und steuerliche Rahmenbedingungen.",
  "Du entwickelst gemeinsam mit dem Kunden eine passende Immobilienstrategie.",
  "Du präsentierst geprüfte Immobilienangebote aus unserem Portfolio.",
  "Du begleitest den Prozess bis zum notariellen Kaufabschluss.",
  "Du arbeitest eng mit Finanzierungspartnern, Notaren und internen Experten zusammen.",
  "Du dokumentierst deine Gespräche im CRM und nimmst an internen Teamterminen teil.",
];

const offers = [
  "Professionelles Umfeld mit klarer Ausrichtung und festen Ansprechpartnern in Kassel.",
  "Ausschließlich vorqualifizierte Interessenten – kein Kaltakquise.",
  "Fachliche Unterstützung durch Experten aus Finanzierung, Analyse und Umsetzung.",
  "Interne Workshops und aktuelle Fachinhalte zu Immobilien, Finanzierung und Investment.",
  "Moderne digitale Tools – Smartphone und Laptop inklusive.",
];

const profile = [
  "Freude an beratender Tätigkeit und Verantwortung übernehmen.",
  "Idealerweise Erfahrung aus Immobilienberatung, -vertrieb oder beratungsorientiertem Vertrieb.",
  "Ruhige, klare und verständliche Kommunikation.",
  "Fähigkeit, komplexe Themen nachvollziehbar zu erklären.",
  "Zuverlässige und verantwortungsbewusste Arbeitsweise.",
  "Bereitschaft zur fachlichen Weiterentwicklung.",
];

const process = [
  "Kurzbewerbung online mit Lebenslauf und kurzer Darstellung deiner Erfahrungen",
  "Erstes Gespräch – per Telefon oder digital",
  "Ggfs. weiteres Kennenlernen im Videocall",
  "Rückmeldung auf deine Bewerbung",
  "Einarbeitung vor Ort in Kassel",
];

export default function JobKasselPage() {
  return (
    <JobPageClient
      title="Immobilienberater / Immobilienvertrieb (m/w/d)"
      subtitle="Kassel"
      type="vor Ort"
      location="Kassel, Hessen, Deutschland"
      employment="Vollzeit"
      intro="Gestalte mit uns die finanzielle Zukunft unserer Kunden."
      description={`SPARK begleitet Angestellte, Beamte und Unternehmer dabei, mit Immobilien eine stabile und steueroptimierte Vermögensstruktur aufzubauen. Wir verbinden strategische Beratung mit konkreter Umsetzung und unterstützen unsere Kunden entlang des gesamten Investmentprozesses – von der ersten Analyse bis zur langfristigen Betreuung.\n\nUnser Standort in Kassel ist dabei das organisatorische und fachliche Zentrum unseres Teams.`}
      roleDescription="In dieser Position arbeitest du als Immobilienberater im direkten Austausch mit Interessenten, die sich bewusst für eine professionelle Immobilienlösung entschieden haben. Du begleitest Menschen durch unseren Beratungsprozess und unterstützt sie dabei, fundierte Entscheidungen rund um ihren Immobilieninvest zu treffen."
      tasks={tasks}
      offers={offers}
      profile={profile}
      process={process}
      discretion="Wenn du aktuell in einem bestehenden Arbeitsverhältnis stehst, behandeln wir deine Bewerbung vertraulich. Gespräche lassen sich diskret und flexibel abstimmen."
    />
  );
}
