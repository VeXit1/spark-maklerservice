import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

const CALENDLY_URL =
  "https://calendly.com/ruslan-k-sparkmaklerservice/strategiegesprach-investment-in-vermietete-immo-hp";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.excerpt,
    openGraph: {
      title: post.metaTitle ?? post.title,
      description: post.metaDescription ?? post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const fallbackSlugs = [
    "erste-immobilie-als-angestellter",
    "steuervorteile-kapitalanlage-immobilien",
    "immobilien-ohne-eigenkapital-kaufen",
    "rendite-immobilien-berechnen",
    "immobilien-als-altersvorsorge",
    "afa-absetzung-fuer-abnutzung",
    "beste-staedte-kapitalanlage-deutschland",
    "immobilien-vs-aktien-vergleich",
  ];
  const postSlugs = posts.map((p) => ({ slug: p.slug }));
  const allSlugs = [
    ...postSlugs,
    ...fallbackSlugs
      .filter((s) => !postSlugs.find((p) => p.slug === s))
      .map((s) => ({ slug: s })),
  ];
  return allSlugs;
}

// Inline fallback articles for slugs without MDX/Blob files
const fallbackContent: Record<
  string,
  {
    title: string;
    content: string;
    date: string;
    category: string;
    excerpt: string;
    coverImage: string;
  }
> = {
  "erste-immobilie-als-angestellter": {
    title:
      "Erste Immobilie als Angestellter: Der komplette Leitfaden für 2025",
    date: "15. März 2025",
    category: "Einsteiger",
    excerpt:
      "Wie kaufe ich meine erste Kapitalanlage-Immobilie ohne viel Eigenkapital?",
    coverImage:
      "https://ruslan-korzhuk.de/wp-content/uploads/2025/12/architecture-4357632_1920.jpg",
    content: `
Als Angestellter hast du einen entscheidenden Vorteil: ein regelmäßiges, nachweisbares Einkommen. Banken lieben das – und deshalb bist du in einer besseren Position als viele Selbstständige, wenn es darum geht, eine Immobilie zu finanzieren, oft sogar ohne Eigenkapital.

## Warum jetzt der richtige Zeitpunkt ist

Die Immobilienpreise haben sich in vielen Regionen stabilisiert, die Zinsen sind zwar gestiegen – aber damit auch die Mieten. Wer jetzt kauft, sichert sich langfristig eine Immobilie mit steigenden Mieteinnahmen.

## Schritt 1: Finanzielle Situation analysieren

Bevor du kaufst, musst du wissen, was du dir leisten kannst:

- **Monatliches Nettoeinkommen:** Basis für die Finanzierbarkeit
- **Laufende Verbindlichkeiten:** Kredite, Leasing etc.
- **Steuersatz:** Je höher, desto mehr sparst du

## Schritt 2: Die richtige Immobilie finden

Nicht jede Wohnung ist eine gute Kapitalanlage. Achte auf:

- **Bruttomietrendite > 4%** (Jahresmiete / Kaufpreis)
- **Bereits vermietet** – kein Leerstandsrisiko von Anfang an
- **Gute Lage** mit stabilem Mietmarkt
- **Solide Substanz** – größere Renovierungen belasten die Rendite

## Schritt 3: Finanzierung sichern

Die Vollfinanzierung (ohne Eigenkapital) ist möglich, wenn dein Einkommen ausreichend und stabil ist, das Objekt eine positive Rendite aufweist und du eine gute Bonität hast.

Typische Konditionen: 3–4% Zinssatz, 1–2% Tilgung. Die monatliche Rate wird oft komplett durch Mieteinnahmen gedeckt.

## Schritt 4: Steuerliche Optimierung

Als Vermieter kannst du absetzen:

- **AfA (2%):** Abschreibung auf den Gebäudeanteil
- **Darlehenszinsen:** Komplett als Werbungskosten
- **Verwaltungskosten, Versicherungen, Reparaturen**

## Fazit

Die erste Immobilie als Angestellter ist machbarer als du denkst. Mit dem richtigen Objekt, einer soliden Finanzierung und einem erfahrenen Berater kannst du innerhalb weniger Monate Eigentümer werden.
    `,
  },
  "steuervorteile-kapitalanlage-immobilien": {
    title:
      "So sparst du bis zu 50% Steuern mit vermieteten Immobilien",
    date: "28. Februar 2025",
    category: "Steuern",
    excerpt:
      "AfA, Zinsen, Renovierungskosten – das Finanzamt beteiligt sich an deiner Investition.",
    coverImage:
      "https://ruslan-korzhuk.de/wp-content/uploads/2025/12/Unbenannt-1.png",
    content: `
Einer der größten Vorteile von vermieteten Immobilien ist die steuerliche Behandlung. Als Angestellter mit einem hohen Grenzsteuersatz kannst du erhebliche Beträge legal sparen.

## Die wichtigsten Steuervorteile

### 1. AfA – Absetzung für Abnutzung

Du kannst jährlich **2% des Gebäudewerts** als Werbungskosten absetzen. Bei einem Kaufpreis von 200.000 € und 80% Gebäudeanteil sind das 3.200 € pro Jahr – bei 40% Steuersatz **1.280 € jährliche Ersparnis**.

### 2. Darlehenszinsen

Die kompletten Finanzierungszinsen sind absetzbar. Bei 200.000 € Darlehen und 3,5% Zinssatz sind das 7.000 € pro Jahr – was **2.800 € Steuerersparnis** bedeutet.

### 3. Weitere Werbungskosten

Folgende Kosten sind vollständig absetzbar:

- Hausverwaltungsgebühren
- Versicherungsbeiträge
- Grundsteuer (soweit nicht auf Mieter umlegbar)
- Fahrtkosten zur Immobilie
- Reparaturen und Instandhaltung

## Rechenbeispiel

Bei einem Kaufpreis von 200.000 € mit 9.600 € Jahresmieteinnahmen, nach AfA und Zinsenabzug ergibt sich ein steuerliches Minus – und damit eine direkte Steuererstattung vom Finanzamt.

## Fazit

Mit der richtigen Immobilie und einem erfahrenen Steuerberater kannst du legal mehrere Tausend Euro pro Jahr sparen. Das macht die effektive Rendite deutlich besser als die Brutto-Zahlen suggerieren.
    `,
  },
  "immobilien-ohne-eigenkapital-kaufen": {
    title:
      "Immobilien kaufen ohne Eigenkapital – wie das wirklich funktioniert",
    date: "10. Februar 2025",
    category: "Finanzierung",
    excerpt:
      "Vollfinanzierung ist möglich – aber nur unter bestimmten Voraussetzungen.",
    coverImage:
      "https://ruslan-korzhuk.de/wp-content/uploads/2025/12/Unbenannt-122.png",
    content: `
„Ohne Eigenkapital eine Immobilie kaufen?" – Das klingt für viele unrealistisch. Aber für Angestellte mit stabilem Einkommen ist es Realität.

## Was bedeutet Vollfinanzierung?

Bei einer Vollfinanzierung übernimmt die Bank 100% des Kaufpreises. In manchen Fällen sogar die Kaufnebenkosten – das nennt sich 110%-Finanzierung.

## Wann macht die Bank mit?

Die Bank prüft folgende Kriterien:

**Einkommen:**
- Festes, unbefristetes Arbeitsverhältnis
- Monatliches Nettoeinkommen mindestens das 3–4-fache der monatlichen Rate
- Keine belastenden laufenden Schulden

**Objekt:**
- Gute Lage mit stabiler Nachfrage
- Bereits vermietet (kein Leerstand)
- Kaufpreis entspricht dem Marktwert
- Mieteinnahmen decken 80–90% der Rate

**Bonität:**
- Schufa ohne negative Einträge
- Mindestens 6 Monate, besser 2 Jahre in der aktuellen Stelle

## Nebenkosten beachten

Die Kaufnebenkosten (7–12% des Kaufpreises) musst du oft selbst aufbringen:

- Grunderwerbsteuer: je nach Bundesland 3,5–6,5%
- Notar: ca. 1,5–2%
- Grundbuch: ca. 0,5%

Bei 200.000 € Kaufpreis also 14.000–24.000 €.

## Fazit

Vollfinanzierung ist möglich und sinnvoll – wenn das Objekt stimmt. Mit stabilem Einkommen, geprüftem Objekt und dem richtigen Berater ist der Einstieg machbarer als gedacht.
    `,
  },

  "rendite-immobilien-berechnen": {
    title: "Rendite bei Immobilien berechnen: Brutto, Netto & Eigenkapitalrendite einfach erklärt",
    date: "10. April 2025",
    category: "Rendite",
    excerpt: "Bruttomietrendite, Nettomietrendite, Eigenkapitalrendite – wir erklären alle drei Kennzahlen mit Rechenbeispielen und zeigen, welche wirklich zählt.",
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    content: `
Bevor du eine Immobilie als Kapitalanlage kaufst, musst du eine Frage beantworten können: Lohnt sich das überhaupt? Die Antwort steckt in der Rendite – aber nicht alle Renditekennzahlen sagen dasselbe aus.

## Die drei wichtigsten Renditekennzahlen

### 1. Bruttomietrendite

Die einfachste Kennzahl – und die am häufigsten verwendete (und missbrauchte).

**Formel:** Jahresmiete ÷ Kaufpreis × 100

**Beispiel:** Kaufpreis 200.000 €, Monatsmiete 700 € (Jahresmiete 8.400 €)

Bruttomietrendite = 8.400 ÷ 200.000 × 100 = **4,2%**

Diese Zahl klingt gut – aber sie ignoriert alle Kosten.

### 2. Nettomietrendite

Realistischer, weil Kaufnebenkosten und laufende Kosten eingerechnet werden.

**Formel:** (Jahresmiete − laufende Kosten) ÷ (Kaufpreis + Nebenkosten) × 100

**Laufende Kosten** (nicht auf Mieter umlegbar): Instandhaltungsrücklage ca. 1–1,5 €/m² pro Monat, Verwaltungskosten ca. 25–35 € pro Monat, Versicherungen, nicht umlagefähige Betriebskosten.

**Kaufnebenkosten** in Deutschland: 7–12% des Kaufpreises (Grunderwerbsteuer, Notar, Grundbuch, Maklerprovision).

**Rechenbeispiel:**
- Kaufpreis: 200.000 €
- Nebenkosten (10%): 20.000 €
- Gesamtinvestition: 220.000 €
- Jahresmiete: 8.400 €
- Laufende Kosten: 1.800 € / Jahr
- Nettomietrendite = 6.600 ÷ 220.000 × 100 = **3,0%**

Ein deutlicher Unterschied zur Bruttomietrendite.

### 3. Eigenkapitalrendite – die wichtigste Zahl

Die Eigenkapitalrendite zeigt dir, wie effizient dein eingesetztes Kapital arbeitet. Hier kommt der Hebel-Effekt ins Spiel.

**Formel:** Jährlicher Cashflow ÷ eingesetztes Eigenkapital × 100

**Beispiel mit Vollfinanzierung:**
- Eigenkapital eingesetzt: 20.000 € (nur Nebenkosten)
- Jährlicher Cashflow nach Rate und Kosten: 0 € (Miete deckt Rate exakt)
- Wertsteigerung der Immobilie (2% p.a.): 4.000 €
- Effektive Eigenkapitalrendite auf 20.000 €: **20%**

Das ist der Grund, warum Immobilien trotz vergleichsweise niedriger Mietrenditen so attraktiv sind: Durch Fremdkapitaleinsatz multiplizierst du deine Eigenkapitalrendite erheblich.

## Welche Rendite ist realistisch?

| Standort | Bruttomietrendite | Nettomietrendite |
|---|---|---|
| München, Hamburg | 2,5–3,5% | 1,8–2,5% |
| Berlin, Frankfurt | 3–4% | 2–3% |
| B-Städte (Kassel, Erfurt, Halle) | 4–6% | 3–4,5% |
| C-Städte | 5–8% | 3,5–5% |

In Metropolen zahlst du Premiumpreise mit niedrigen Renditen. In wachsenden Mittelstädten wie Kassel findest du deutlich bessere Zahlen – bei stabiler Nachfrage.

## Der Cashflow-Check: Läuft die Immobilie sich selbst?

Berechne monatlich:

**+ Kaltmiete**
**− Kreditrate (Zins + Tilgung)**
**− Hausverwaltung**
**− Instandhaltungsrücklage**
**= monatlicher Cashflow**

Ziel: Cashflow ≥ 0 €, besser positiv. Bei Vollfinanzierung ist ein leicht negativer Cashflow (−50 bis −100 €/Monat) oft vertretbar, wenn die steuerlichen Vorteile dies überkompensieren.

## Steuern verbessern die reale Rendite erheblich

Was viele vergessen: Die steuerliche Rendite kommt noch on top. Als Angestellter mit 35–42% Steuersatz bekommst du durch AfA und Zinsabzug effektiv einen Teil der Investitionskosten vom Finanzamt zurück. Das verbessert deine reale Nettomietrendite um 0,5–1,5 Prozentpunkte.

## Fazit

Die Bruttomietrendite ist ein erster Orientierungspunkt. Entscheidend sind Nettomietrendite und – vor allem – die Eigenkapitalrendite. Wer mit Bankfinanzierung investiert, kann auf sein eingesetztes Kapital zweistellige Renditen erzielen. Das macht Immobilien zur effizientesten Anlageform für Angestellte mit stabilem Einkommen.
    `,
  },

  "immobilien-als-altersvorsorge": {
    title: "Immobilien als Altersvorsorge: Warum vermietete Wohnungen die gesetzliche Rente ersetzen können",
    date: "25. März 2025",
    category: "Altersvorsorge",
    excerpt: "Die gesetzliche Rente reicht nicht. Wer heute als Angestellter investiert, kann sich mit einer oder zwei Immobilien eine sichere, inflationsgeschützte Zusatzrente aufbauen.",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    content: `
Die Rentenlücke ist Realität. Wer heute 45.000 € brutto verdient, kann mit einer gesetzlichen Rente von etwa 55–65% seines letzten Nettogehalts rechnen – Tendenz sinkend. Eine vermietete Immobilie schließt diese Lücke verlässlich – und wächst dabei sogar noch im Wert.

## Das Rentenlücken-Problem

Aktuelle Zahlen des Bundesarbeitsministeriums zeigen: Das gesetzliche Rentenniveau sinkt bis 2040 auf unter 45% des Durchschnittslohns. Wer 3.000 € netto verdient, bekommt im Alter möglicherweise nur 1.200–1.400 € Rente.

Die Inflationslücke kommt hinzu: Die gesetzliche Rente wird zwar angepasst, aber oft zu wenig, um die Kaufkraft zu erhalten.

## Wie eine Immobilie die Rentenlücke schließt

### Phase 1: Ansparphase (Jahre 1–25)

Du kaufst heute eine vermietete Wohnung für 180.000 €. Der Mieter zahlt die Rate – du tilgst durch fremde Hände.

- Monatsmiete: 650 € kalt
- Kreditrate (3,5% Zins, 2% Tilgung): 825 €
- Monatliche Differenz: −175 € (die du durch Steuervorteile großteils ausgleichst)

Nach 25 Jahren ist die Wohnung zu 50–70% abbezahlt. Nach 30 Jahren gehört sie dir schuldenfrei.

### Phase 2: Rentenphase (ab Jahr 25–30)

Die Wohnung ist abbezahlt. Die Miete fließt komplett in deine Tasche.

**Rechenbeispiel:**
- Heutige Miete: 650 € kalt
- In 25 Jahren (2% Mietinflation p.a.): ca. 1.070 €
- Davon Kosten: ca. 150 € (Verwaltung, Instandhaltung)
- **Netto-Monatsrente aus der Immobilie: ca. 920 €**

Das entspricht einer privaten Zusatzrente von über 11.000 € pro Jahr – lebenslang, inflationsgeschützt.

## Der Wertsteigerungsbonus

Immobilien in Deutschland sind historisch mit 2–4% p.a. im Wert gestiegen. Eine Wohnung, die heute 180.000 € kostet, ist in 25 Jahren bei 3% Wertsteigerung ca. **376.000 €** wert.

Du hast also:
- Eine monatliche Rente (Mieteinnahmen)
- Ein Vermögen (Immobilienwert)
- Steuerliche Vorteile während der Ansparphase

## Zwei Wohnungen = Vollständige Absicherung

Viele unserer Kunden bei SPARK setzen auf zwei Objekte. Nach 30 Jahren:

| | Wohnung 1 | Wohnung 2 | Gesamt |
|---|---|---|---|
| Monatliche Nettomiete | 920 € | 820 € | **1.740 €** |
| Immobilienwert | 376.000 € | 310.000 € | **686.000 €** |

Zusammen mit der gesetzlichen Rente lebst du komfortabel – ohne Kompromisse.

## Warum Immobilien besser als private Rentenversicherung sind

Private Rentenversicherungen haben feste Auszahlungen ohne Inflationsschutz, intransparente Kosten und im Todesfall oft kein vererbtes Kapital.

Immobilien hingegen:
- **Steigen mit der Inflation** – Mieten werden angepasst
- **Sind vererbbar** – dein Vermögen bleibt in der Familie
- **Sind greifbar** – du kannst die Wohnung auch selbst nutzen oder verkaufen
- **Werden steuerlich gefördert** – durch AfA und Werbungskosten

## Wann ist der beste Zeitpunkt?

Jetzt. Je früher du anfängst, desto länger tilgt der Mieter für dich. Mit 35 Jahren hat eine Immobilie bis zur Rente mit 67 noch 32 Jahre Zeit zur vollständigen Entschuldung.

Mit 45 Jahren kaufen? Auch sinnvoll – dann finanzierst du aggressiver (höhere Tilgung) oder kaufst bewusst ein Objekt mit gutem Cashflow.

## Fazit

Wer heute als Angestellter in eine vermietete Immobilie investiert, baut sich eine verlässliche, inflationsgeschützte Altersvorsorge auf – während der Mieter die Arbeit übernimmt. Eine abbezahlte Wohnung ist die beste Rentenversicherung, die du dir kaufen kannst.
    `,
  },

  "afa-absetzung-fuer-abnutzung": {
    title: "AfA Immobilien einfach erklärt: So setzt du deine Wohnung von der Steuer ab",
    date: "18. März 2025",
    category: "Steuern",
    excerpt: "Die Absetzung für Abnutzung (AfA) ist der mächtigste Steuervorteil für Immobilien-Investoren. Wir erklären, wie sie funktioniert, was du absetzen kannst und wie viel du sparst.",
    coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    content: `
Die AfA – Absetzung für Abnutzung – ist das Herzstück des steuerlichen Vorteils bei vermieteten Immobilien. Als Angestellter mit einem Steuersatz von 35–45% bedeutet jede AfA-Mark eine direkte Steuerersparnis vom Finanzamt.

## Was ist die AfA?

Das Finanzamt geht davon aus, dass Gebäude mit der Zeit an Wert verlieren – auch wenn das in der Realität oft nicht stimmt. Diese fiktive Wertminderung darfst du jährlich als Werbungskosten abziehen und damit dein zu versteuerndes Einkommen senken.

**Das Ergebnis:** Du zahlst weniger Einkommensteuer – obwohl kein tatsächlicher Aufwand entstanden ist.

## Die AfA-Sätze im Überblick

### Altbau (Baujahr vor 1925)
- **2,5% p.a.** des Gebäudewertes
- Abschreibungsdauer: 40 Jahre

### Neubau und Altbau ab 1925
- **2% p.a.** des Gebäudewertes
- Abschreibungsdauer: 50 Jahre

### Neubau ab 2023 (degressiv)
- **5% p.a.** in den ersten Jahren möglich (nach §7 Abs. 5a EStG)
- Besonders attraktiv für Neubauten

### Denkmalgeschützte Gebäude
- **9% p.a.** für 8 Jahre, danach 7% für 4 Jahre
- Insgesamt bis zu 100% Abschreibung möglich – ein enormer Steuervorteil

## Wie wird die Bemessungsgrundlage berechnet?

Du darfst **nur den Gebäudewert** abschreiben, nicht den Grundstücksanteil. Das Finanzamt nutzt Richtwerte oder Gutachten für die Aufteilung.

**Typische Aufteilung:**
- In Ballungsräumen: 20–40% Grundstück, 60–80% Gebäude
- In ländlichen Gebieten: 10–20% Grundstück, 80–90% Gebäude

**Rechenbeispiel:**
- Kaufpreis: 250.000 €
- Gebäudeanteil (75%): 187.500 €
- AfA-Satz: 2%
- Jährliche AfA: **3.750 €**
- Bei 40% Steuersatz: **1.500 € jährliche Steuerersparnis**

Über 20 Jahre: **30.000 € gespartes Geld** – ohne einen Cent auszugeben.

## Weitere absetzbare Werbungskosten

Die AfA ist nur der Anfang. Folgende Kosten sind als Werbungskosten ebenfalls vollständig absetzbar:

### Finanzierungskosten
- **Darlehenszinsen** (komplett abzugsfähig)
- Bereitstellungszinsen
- Bearbeitungsgebühren

Bei 200.000 € Darlehen und 3,5% Zinssatz: 7.000 € abzugsfähige Zinsen pro Jahr = **2.800 € Steuerersparnis** bei 40% Steuersatz.

### Laufende Betriebskosten (soweit nicht umlegbar)
- Hausverwaltungsgebühren
- Grundsteuer
- Gebäudeversicherung
- Leerstandskosten

### Instandhaltung und Reparaturen
- Kleinere Reparaturen: sofort absetzbar
- Größere Renovierungen: verteilbar über mehrere Jahre oder als Herstellungskosten

### Weitere Kosten
- Fahrtkosten zur Immobilie (0,30 €/km)
- Steuerberatungskosten (anteilig)
- Telefonkosten (anteilig)
- Insertionskosten bei Mieterwechsel

## Das Gesamtpaket: Was du realistisch sparst

**Beispielrechnung** (200.000 € Immobilie, 40% Steuersatz):

| Posten | Jährlicher Betrag | Steuerersparnis |
|---|---|---|
| AfA (2% von 160.000 €) | 3.200 € | 1.280 € |
| Darlehenszinsen (3,5%) | 7.000 € | 2.800 € |
| Verwaltung + Versicherung | 1.200 € | 480 € |
| **Gesamt** | **11.400 €** | **4.560 € / Jahr** |

4.560 € Steuerersparnis pro Jahr – das sind 380 € pro Monat, die das Finanzamt für dich übernimmt.

## Wichtig: Spekulationssteuer vermeiden

Wenn du die Immobilie nach mehr als **10 Jahren** verkaufst, ist der Veräußerungsgewinn steuerfrei. Vorher anfallende AfA wird dann beim Verkauf zwar angerechnet (Wiedereinziehung), aber über 10 Jahre hast du bereits erheblich Steuern gespart.

## Fazit

Die AfA ist kein Trick – sie ist gesetzlich vorgesehen, um Investitionen in den Wohnungsbau zu fördern. Als Angestellter mit hohem Steuersatz ist sie dein mächtigstes Werkzeug, um deine effektive Rendite deutlich zu steigern. In Kombination mit Zinsabzug und anderen Werbungskosten beteiligt sich das Finanzamt jedes Jahr substanziell an deiner Immobilien-Investition.
    `,
  },

  "beste-staedte-kapitalanlage-deutschland": {
    title: "Die besten Städte für Kapitalanlage-Immobilien in Deutschland 2025",
    date: "5. April 2025",
    category: "Standort",
    excerpt: "Nicht jede Stadt eignet sich gleich gut für Immobilien-Investment. Wir zeigen, welche deutschen Städte 2025 die beste Kombination aus Rendite, Mietstabilität und Wertsteigerungspotenzial bieten.",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    content: `
Die Frage, wo man in Deutschland investieren soll, entscheidet maßgeblich über Rendite, Leerstandsrisiko und langfristige Wertsteigerung. Wir analysieren, welche Städte 2025 die attraktivsten Bedingungen für Kapitalanleger bieten.

## Warum der Standort alles ist

Eine Immobilie in der falschen Stadt kann selbst bei niedrigem Kaufpreis ein Fehlinvestment sein: sinkende Bevölkerung, stagnierende Mieten, kein Wertzuwachs. Eine Immobilie in der richtigen Stadt hingegen arbeitet für dich – auch ohne aktives Zutun.

**Die drei entscheidenden Standortfaktoren:**
- **Bevölkerungswachstum** – Nachfrage nach Wohnraum steigt
- **Wirtschaftsstruktur** – diversifiziert, niedrige Arbeitslosigkeit
- **Mietmarkt** – geringe Leerstandsquote, steigende Mieten

## A-Städte: Hohe Preise, niedrige Renditen

München, Hamburg, Frankfurt, Berlin, Köln, Düsseldorf, Stuttgart.

Diese Städte bieten maximale Wertstabilität – aber die Preise sind so hoch, dass Mietrenditen bei 2–3,5% liegen. Vollfinanzierungen sind schwerer darzustellen, der Cashflow ist meist negativ.

**Fazit:** Geeignet für Eigennutzer und Kapitalanleger mit sehr langen Zeithorizonten und viel Eigenkapital.

## B-Städte: Das Sweet Spot für Kapitalanleger

Hier liegt das beste Verhältnis aus Rendite, Stabilität und Wertzuwachs. Bevölkerung wächst, Wirtschaft ist stark, aber die Preise sind noch nicht überhitzt.

### Kassel
- Einwohner: ca. 205.000, wachsend
- Leerstandsquote: unter 1%
- Ø Kaufpreis ETW: 2.000–2.800 €/m²
- Ø Kaltmiete: 9–11 €/m²
- Bruttomietrendite: **4,5–5,5%**
- Besonderheiten: Stark durch Universität, Staatspark Wilhelmshöhe, Verkehrsknoten Mitte Deutschland, Kassel Herkules zieht Zuzug an

### Erfurt
- Leerstandsquote: unter 2%
- Kaufpreise: 2.200–3.000 €/m²
- Bruttomietrendite: **4,5–5%**
- Besonderheiten: Landeshauptstadt Thüringen, Universitätsstadt, starkes Bevölkerungswachstum

### Leipzig
- Starkes Wachstum: +80.000 Einwohner in 10 Jahren
- Kaufpreise: 2.500–3.500 €/m²
- Bruttomietrendite: **4–5%**
- Besonderheiten: Kulturstadt, viele junge Bevölkerung, Pendlerinfarkt noch nicht erreicht

### Halle (Saale)
- Günstige Kaufpreise: 1.500–2.200 €/m²
- Nähe zu Leipzig (20 Min.)
- Bruttomietrendite: **5–7%**
- Besonderheiten: Sehr günstig, stabilisierter Markt, profitiert von Leipzigs Wachstum

### Magdeburg
- Landeshauptstadt Sachsen-Anhalt
- Kaufpreise: 1.800–2.500 €/m²
- Bruttomietrendite: **5–6,5%**
- Besonderheiten: Intel-Ansiedlung erhöht Nachfrage massiv

### Hannover
- Messestadt, Universitätsstadt
- Kaufpreise: 2.500–3.200 €/m²
- Bruttomietrendite: **4–5%**

## Was du bei der Standortwahl konkret prüfen solltest

**Makrolage (Stadt):**
- Bevölkerungsprognose bis 2035 (Bertelsmann-Stiftung nutzen)
- Arbeitslosenquote unter 7%
- Hochschule/Universität vorhanden
- Wirtschaftliche Diversifikation

**Mikrolage (Stadtteil):**
- ÖPNV-Anbindung (max. 20 Min. ins Zentrum)
- Supermärkte, Schulen, Ärzte fußläufig
- Keine sozialen Brennpunkte
- Geplante Infrastrukturprojekte (Stadtbahn, Gewerbegebiete)

**Objekt:**
- Bereits vermietet
- Solide Bausubstanz
- Energieeffizienz beachten (GEG 2024)

## Städte, die du meiden solltest

Strukturschwache Regionen mit schrumpfender Bevölkerung: Teile des Ruhrgebiets (Gelsenkirchen, Herne), Ostdeutschland ohne Wachstumspol, kleine Kleinstädte unter 30.000 Einwohnern ohne Hochschule.

Hohe Renditen hier sind oft eine Falle: Du kaufst günstig, aber verkaufst noch günstiger.

## Fazit

Für Angestellte, die 2025 in Kapitalanlage-Immobilien einsteigen, bieten B-Städte wie Kassel, Leipzig, Erfurt und Magdeburg das beste Risiko-Rendite-Profil. Die Kombination aus noch moderaten Kaufpreisen, stabilen Mietmärkten und positivem Bevölkerungstrend ist ideal für den langfristigen Vermögensaufbau.
    `,
  },

  "immobilien-vs-aktien-vergleich": {
    title: "Immobilien vs. Aktien: Was ist die bessere Kapitalanlage für Angestellte?",
    date: "1. April 2025",
    category: "Strategie",
    excerpt: "ETF oder Immobilie? Beide Anlageformen haben Stärken und Schwächen. Wir vergleichen ehrlich – Rendite, Risiko, Steuern, Aufwand – und zeigen, warum viele Angestellte beides kombinieren.",
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    content: `
Aktien oder Immobilien? Diese Debatte beschäftigt Anleger seit Jahrzehnten. Die ehrliche Antwort: Es hängt von deiner Situation ab. Wir analysieren beide Anlageklassen für Angestellte in Deutschland – ohne Werbung für eine Seite.

## Rendite: Wer gewinnt langfristig?

### Aktien (MSCI World ETF)
- Historische Rendite: ca. **7–9% p.a.** (nominal, vor Inflation)
- Nach Inflation: ca. 5–6% p.a.
- Keine Hebelwirkung (außer Kredit-ETF, riskant)

### Immobilien (vermietete Wohnung)
- Mietrendite: 3–5% p.a. netto
- Wertsteigerung: 2–4% p.a.
- Eigenkapitalrendite mit Hebel: **8–20% p.a.** (je nach Finanzierungsanteil)

**Entscheidend:** Bei Immobilien kannst du mit 20.000 € Eigenkapital eine 200.000 € Immobilie kaufen. Deine Eigenkapitalrendite bezieht sich auf die 20.000 €, nicht auf den Gesamtpreis. Das nennt man Leverage – und es ist der entscheidende Unterschied.

Mit 20.000 € in ETFs: Bei 8% = **1.600 € Gewinn pro Jahr**.

Mit 20.000 € als Eigenkapital für eine Immobilie (200.000 €): Bei 3% Wertsteigerung = **6.000 € Gewinn pro Jahr** auf dieselbe Ausgangsbasis.

## Steuerliche Behandlung

### ETF/Aktien
- Kapitalertragsteuer: **25% + Soli** auf Dividenden und Verkaufsgewinne
- Freistellungsauftrag: 1.000 €/Jahr (Einzelperson)
- Keine Möglichkeit, Verluste gegen Gehalt zu verrechnen

### Immobilien
- AfA, Zinsen, Betriebskosten als **Werbungskosten** absetzbar
- Verluste aus Vermietung können **mit Gehalt verrechnet** werden → direkte Steuererstattung
- Nach 10 Jahren Haltedauer: **Verkaufsgewinn komplett steuerfrei**
- Effektiv: Das Finanzamt beteiligt sich jährlich an den Kosten

**Beispiel:** Als Angestellter mit 42% Steuersatz und 11.000 € abzugsfähigen Kosten (AfA + Zinsen) sparst du **4.620 € Steuern pro Jahr** – Geld, das bei ETFs nicht existiert.

## Risikoprofil

| | ETF | Immobilien |
|---|---|---|
| Liquidität | Hoch (täglich verkaufbar) | Niedrig (Monate bis Verkauf) |
| Volatilität | Hoch (−40% in Krisen möglich) | Niedrig (träge Preisentwicklung) |
| Klumpenrisiko | Gering (diversifiziert) | Hoch (einzelnes Objekt) |
| Mietausfallrisiko | Keines | Vorhanden |
| Inflation | Neutral bis positiv | Sehr positiv (Sachwert) |
| Totalverlust | Möglich (Insolvenz) | Sehr unwahrscheinlich |

## Aufwand & Komplexität

**ETF:** Kaufen, liegen lassen. Minimaler Aufwand. Ein Sparplan reicht.

**Immobilien:** Objektauswahl, Finanzierung, Verwaltung, Mietersuche, Steuererklärung. Deutlich mehr Aufwand – besonders am Anfang. Mit professioneller Hausverwaltung sinkt der laufende Aufwand erheblich.

## Wann Aktien die bessere Wahl sind

- Du hast weniger als 10.000–15.000 € verfügbar (zu wenig für Nebenkosten)
- Du willst maximale Flexibilität (Geld schnell zurück)
- Du hast keine Zeit/Nerven für die Verwaltung
- Du möchtest global diversifizieren

## Wann Immobilien die bessere Wahl sind

- Du hast ein stabiles Angestellteneinkommen (beste Bonität)
- Dein Steuersatz liegt über 30%
- Du willst inflationsgeschützte Altersvorsorge aufbauen
- Du hast 15.000–25.000 € für Kaufnebenkosten
- Du denkst in Zeiträumen von 15+ Jahren

## Die beste Strategie: Beides kombinieren

Die meisten erfolgreichen Privatanleger kombinieren beide Anlageklassen:

1. **Notfallreserve** (3–6 Monatsgehälter) in Tagesgeld
2. **ETF-Sparplan** (100–300 €/Monat) für Liquidität und globale Diversifikation
3. **1–2 Immobilien** für steueroptimierte Altersvorsorge und Hebelrendite

Das Ziel: Mit Immobilien den Steuervorteil und den Leverage nutzen, mit ETFs die Liquidität und globale Streuung sicherstellen.

## Fazit

Immobilien schlagen ETFs **nicht in der Rohrendite**, aber im Gesamtpaket: Hebelwirkung, Steuervorteile, Inflationsschutz und Altersvorsorge zusammen machen sie für Angestellte mit gutem Einkommen zur attraktiveren Wahl. ETFs sind perfekte Ergänzung – kein Ersatz.
    `,
  },
};

function markdownToHtml(markdown: string): string {
  const parseRow = (line: string) =>
    line.split("|").slice(1, -1).map((cell) => cell.trim());

  const lines = markdown.trim().split("\n");
  const output: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const nextLine = lines[i + 1] ?? "";

    // Detect markdown table: current line starts with | and next is a separator row
    if (
      line.trimStart().startsWith("|") &&
      /^\|[\s\-:|]+\|/.test(nextLine)
    ) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trimStart().startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }

      const headers = parseRow(tableLines[0]);
      const rows = tableLines.slice(2).map(parseRow);

      const headerHtml = headers
        .map(
          (h) =>
            `<th class="px-4 py-3 text-left text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider border-b border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800">${h}</th>`
        )
        .join("");

      const rowsHtml = rows
        .map((cells) => {
          const cellsHtml = cells
            .map(
              (c) =>
                `<td class="px-4 py-3 text-sm text-stone-700 dark:text-stone-300 border-b border-stone-100 dark:border-stone-800">${c}</td>`
            )
            .join("");
          return `<tr class="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">${cellsHtml}</tr>`;
        })
        .join("");

      output.push(
        `<div class="overflow-x-auto my-8 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm"><table class="w-full text-left"><thead><tr>${headerHtml}</tr></thead><tbody>${rowsHtml}</tbody></table></div>`
      );
    } else {
      output.push(line);
      i++;
    }
  }

  return output
    .join("\n")
    .replace(
      /^## (.+)$/gm,
      '<h2 class="font-serif text-2xl font-bold text-stone-900 mt-10 mb-4">$1</h2>'
    )
    .replace(
      /^### (.+)$/gm,
      '<h3 class="font-serif text-xl font-bold text-stone-900 mt-8 mb-3">$1</h3>'
    )
    .replace(
      /\*\*(.+?)\*\*/g,
      '<strong class="text-stone-800 font-semibold">$1</strong>'
    )
    .replace(
      /^- (.+)$/gm,
      '<li class="text-stone-600 ml-5 list-disc mb-1">$1</li>'
    )
    .replace(
      /(<li[^>]*>[\s\S]*?<\/li>\n?)+/g,
      '<ul class="space-y-1 my-4">$&</ul>'
    )
    .replace(
      /\n\n([^<\n].+)/g,
      '\n\n<p class="text-stone-600 leading-relaxed my-4">$1</p>'
    );
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  const fallback = fallbackContent[params.slug];

  if (!post && !fallback) notFound();

  const data = post ?? {
    slug: params.slug,
    ...fallback,
    metaTitle: fallback.title,
    metaDescription: fallback.excerpt,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: data.title,
            description: data.excerpt,
            datePublished: data.date,
            author: {
              "@type": "Organization",
              name: "SPARK Maklerservice GmbH",
            },
            publisher: {
              "@type": "Organization",
              name: "SPARK Maklerservice GmbH",
              url: "https://spark-maklerservice.com",
            },
            image: data.coverImage,
          }),
        }}
      />

      <article className="pt-28 pb-20 bg-[#FBF8F4] dark:bg-stone-950 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-stone-400 mb-8">
            <Link href="/" className="hover:text-[#C9974A] transition-colors">
              Start
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-[#C9974A] transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-stone-600 truncate max-w-[200px]">
              {data.title}
            </span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="inline-block text-xs font-semibold bg-[#C9974A]/10 text-[#C9974A] px-3 py-1 rounded-full mb-4">
              {data.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-4 leading-tight">
              {data.title}
            </h1>
            <p className="text-stone-500 text-sm">{data.date}</p>
          </div>

          {/* Cover Image */}
          {data.coverImage && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-stone-200">
              <img
                src={data.coverImage}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-stone dark:prose-invert max-w-none prose-headings:font-serif prose-headings:text-stone-900 dark:prose-headings:text-white prose-a:text-[#C9974A] prose-a:no-underline hover:prose-a:underline prose-strong:text-stone-800 dark:prose-strong:text-stone-200 prose-p:text-stone-600 dark:prose-p:text-stone-300 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(data.content) }}
          />

          {/* CTA */}
          <div className="mt-14 bg-stone-900 rounded-3xl p-8 text-center">
            <h3 className="font-serif text-2xl font-bold text-white mb-3">
              Interesse an deiner eigenen Immobilie?
            </h3>
            <p className="text-stone-400 text-sm mb-6">
              Buche jetzt dein kostenloses Strategiegespräch und erfahre, was
              für dich möglich ist.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Jetzt Termin buchen →
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
