import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ThemeProvider from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SPARK Maklerservice – In vermietete Wohnungen investieren",
    template: "%s | SPARK Maklerservice",
  },
  description:
    "Als Angestellter in Immobilien investieren – ohne Eigenkapital, mit Mietern und dem Finanzamt auf deiner Seite. IHK-zertifiziert, §34f & §34d GewO. Kostenlose Erstberatung.",
  keywords: [
    "Immobilien Kapitalanlage",
    "vermietete Wohnungen kaufen",
    "Immobilien Investment Angestellte",
    "ohne Eigenkapital investieren",
    "Steuervorteile Immobilien",
    "Kapitalanlage Immobilien",
    "SPARK Maklerservice",
    "Immobilienmakler Kassel",
    "Anlageimmobilie kaufen",
    "AfA Steuer Immobilien",
    "passives Einkommen Immobilien",
    "Immobilien finanzieren ohne Eigenkapital",
  ],
  authors: [{ name: "SPARK Maklerservice GmbH" }],
  creator: "SPARK Maklerservice GmbH",
  metadataBase: new URL("https://spark-maklerservice.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://spark-maklerservice.com",
    siteName: "SPARK Maklerservice",
    title: "SPARK Maklerservice – In vermietete Wohnungen investieren",
    description:
      "Als Angestellter in Immobilien investieren – ohne Eigenkapital, mit Mietern und dem Finanzamt auf deiner Seite. Kostenlose Erstberatung.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SPARK Maklerservice – Immobilien Investment für Angestellte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPARK Maklerservice – In vermietete Wohnungen investieren",
    description:
      "Als Angestellter in Immobilien investieren – ohne Eigenkapital, mit Mietern und dem Finanzamt auf deiner Seite.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification token here when available
    // google: "your-token",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "SPARK Maklerservice GmbH",
  description:
    "Immobilien-Investment-Beratung für Angestellte – ohne Eigenkapital in vermietete Wohnungen investieren.",
  url: "https://spark-maklerservice.com",
  telephone: "+4917632883789",
  email: "info@sparkmaklerservice.de",
  image: "https://spark-maklerservice.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Brandaustraße 10",
    addressLocality: "Kassel",
    postalCode: "34127",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.3127,
    longitude: 9.4797,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.81",
    reviewCount: "51",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://ruslan-korzhuk.de",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Brauche ich Eigenkapital für eine Investitionsimmobilie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein – als Angestellter mit festem, nachweisbarem Einkommen kannst du oft eine Vollfinanzierung (100%) erhalten. Die Bank bewertet deine Bonität und das Objekt, nicht dein Erspartes.",
      },
    },
    {
      "@type": "Question",
      name: "Wie hoch ist das Risiko bei einem Leerstand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir vermitteln ausschließlich bereits vermietete Objekte in deutschen Metropolen mit Leerstandsquoten unter 1%. Das Risiko eines unerwarteten Leerstands ist damit minimal.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Renditen kann ich realistisch erwarten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bruttomietrenditen zwischen 3,5% und 5,5% sind in unseren Zielmärkten realistisch. Durch Steuerersparnisse (AfA, Zinsen) erhöht sich die effektive Rendite auf 5–8%.",
      },
    },
    {
      "@type": "Question",
      name: "Fallen Maklergebühren für mich an?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Unsere Vergütung wird ausschließlich vom Verkäufer getragen. Du zahlst lediglich die üblichen Kaufnebenkosten: Grunderwerbsteuer (3,5–6,5%), Notar- und Grundbuchkosten (ca. 2%).",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert der gesamte Prozess?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Von deinem ersten Gespräch bis zur Schlüsselübergabe vergehen in der Regel 8–16 Wochen.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans bg-[#FBF8F4] dark:bg-stone-950 pb-[72px] md:pb-0 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
