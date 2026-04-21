import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der SPARK Maklerservice GmbH – Angaben gemäß § 5 TMG.",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <section className="pt-28 pb-20 bg-[#FBF8F4] dark:bg-stone-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-stone-900 dark:text-white mb-10">
          Impressum
        </h1>

        <div className="space-y-8 text-stone-600 dark:text-stone-300 text-sm leading-relaxed">

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              SPARK Maklerservice GmbH<br />
              Brandaustraße 10<br />
              34127 Kassel<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              Kontakt
            </h2>
            <p>
              Telefon: <a href="tel:+4917632883789" className="text-[#C9974A] hover:underline">0176 3288 3789</a><br />
              E-Mail: <a href="mailto:info@sparkmaklerservice.de" className="text-[#C9974A] hover:underline">info@sparkmaklerservice.de</a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              Handelsregister
            </h2>
            <p>
              Registergericht: Amtsgericht Kassel<br />
              Registernummer: HRB [Nummer bitte eintragen]
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              DE [Nummer bitte eintragen]
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              Geschäftsführer
            </h2>
            <p>Ruslan Korzhuk</p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p>
              Berufsbezeichnung: Immobilienmakler (verliehen in der Bundesrepublik Deutschland)<br />
              Zuständige Aufsichtsbehörde: IHK Kassel-Marburg<br /><br />
              Zulassung gemäß § 34c GewO (Immobilienmakler)<br />
              Zulassung gemäß § 34d GewO (Versicherungsvermittler)<br />
              Zulassung gemäß § 34f GewO (Finanzanlagenvermittler)
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              Berufshaftpflichtversicherung
            </h2>
            <p>
              Name und Sitz des Versicherers: [Versicherer bitte eintragen]<br />
              Geltungsraum der Versicherung: Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9974A] hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-3">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
              den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
              ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
              entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
              des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
