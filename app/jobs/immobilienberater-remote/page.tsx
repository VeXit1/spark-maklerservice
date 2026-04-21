import type { Metadata } from "next";
import JobPageClient from "../JobPageClient";

export const metadata: Metadata = {
  title: "Immobilienberater / Immobilienvertrieb (m/w/d) – Remote",
  description:
    "Starte deine Karriere als Immobilienberater bei SPARK Maklerservice – deutschlandweit remote. Vollzeit, mit qualifizierten Kundenanfragen.",
};

const tasks = [
  "Du führst Beratungsgespräche mit Interessenten – vollständig digital und von überall in Deutschland.",
  "Du analysierst Ziele, finanzielle Ausgangssituationen und steuerliche Rahmenbedingungen.",
  "Du entwickelst gemeinsam mit dem Kunden eine passende Immobilienstrategie.",
  "Du präsentierst geprüfte Immobilienangebote aus unserem Portfolio.",
  "Du begleitest den Prozess bis zum notariellen Kaufabschluss.",
  "Du arbeitest eng mit Finanzierungspartnern, Notaren und internen Experten zusammen.",
  "Du dokumentierst deine Gespräche im CRM und nimmst an digitalen Teamterminen teil.",
];

const offers = [
  "Vollständig remote arbeitbar – von überall in Deutschland.",
  "Ausschließlich vorqualifizierte Interessenten – kein Kaltakquise.",
  "Digitale Infrastruktur, die Remote-Arbeit professionell unterstützt.",
  "Fachliche Unterstützung durch Experten aus Finanzierung, Analyse und Umsetzung.",
  "Interne Workshops und aktuelle Fachinhalte zu Immobilien, Finanzierung und Investment.",
];

const profile = [
  "Freude an digitaler Beratung und eigenverantwortlichem Arbeiten.",
  "Idealerweise Erfahrung aus Immobilienberatung, -vertrieb oder beratungsorientiertem Vertrieb.",
  "Ruhige, klare Kommunikation – auch über digitale Kanäle.",
  "Selbstständige und strukturierte Arbeitsweise im Homeoffice.",
  "Zuverlässigkeit und Bereitschaft zur fachlichen Weiterentwicklung.",
];

const process = [
  "Kurzbewerbung online mit Lebenslauf und kurzer Darstellung deiner Erfahrungen",
  "Erstes Gespräch – per Telefon oder Videocall",
  "Ggfs. weiteres Kennenlernen im Videocall",
  "Rückmeldung auf deine Bewerbung",
  "Digitale Einarbeitung – remote oder optional vor Ort in Kassel",
];

export default function JobRemotePage() {
  return (
    <JobPageClient
      title="Immobilienberater / Immobilienvertrieb (m/w/d)"
      subtitle="Remote (deutschlandweit)"
      type="Remote"
      location="deutschlandweit"
      employment="Vollzeit"
      intro="Gestalte die finanzielle Zukunft unserer Kunden – von überall in Deutschland."
      description={`SPARK begleitet Angestellte, Beamte und Unternehmer dabei, mit Immobilien eine stabile und steueroptimierte Vermögensstruktur aufzubauen. Wir verbinden strategische Beratung mit konkreter Umsetzung und unterstützen unsere Kunden entlang des gesamten Investmentprozesses – von der ersten Analyse bis zur langfristigen Betreuung.\n\nDiese Position ist vollständig remote ausgelegt – du arbeitest von überall in Deutschland und bist digital voll eingebunden.`}
      roleDescription="In dieser Position arbeitest du als Remote-Immobilienberater im direkten digitalen Austausch mit Interessenten, die sich bewusst für eine professionelle Immobilienlösung entschieden haben. Du begleitest Menschen durch unseren Beratungsprozess und unterstützt sie dabei, fundierte Entscheidungen rund um ihren Immobilieninvest zu treffen."
      tasks={tasks}
      offers={offers}
      profile={profile}
      process={process}
      discretion="Wenn du aktuell in einem bestehenden Arbeitsverhältnis stehst, behandeln wir deine Bewerbung vertraulich. Gespräche lassen sich diskret und flexibel abstimmen."
    />
  );
}
