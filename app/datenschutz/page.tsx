import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der SPARK Maklerservice GmbH gemäß DSGVO.",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <section className="pt-28 pb-20 bg-[#FBF8F4] dark:bg-stone-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-stone-900 dark:text-white mb-10">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-stone-600 dark:text-stone-300 text-sm leading-relaxed">

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-semibold text-stone-800 dark:text-stone-200 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
              sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="font-semibold text-stone-800 dark:text-stone-200 mt-4 mb-2">Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Impressum entnehmen.
            </p>
            <p className="mt-3">
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen – z. B. durch
              Ausfüllen unseres Kontaktformulars oder Bewerbungsformulars. Andere Daten werden
              automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme
              erfasst (z. B. technische Daten wie Browser und Betriebssystem).
            </p>
            <p className="mt-3">
              <strong>Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens oder zur
              Kontaktaufnahme verwendet werden.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              2. Verantwortlicher
            </h2>
            <p>
              SPARK Maklerservice GmbH<br />
              Brandaustraße 10<br />
              34127 Kassel<br /><br />
              Telefon: 0176 3288 3789<br />
              E-Mail: info@sparkmaklerservice.de<br /><br />
              Vertreten durch: Ruslan Korzhuk (Geschäftsführer)
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              3. Ihre Rechte
            </h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
              <li>die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
              <li>die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
              <li>die Einschränkung der Datenverarbeitung zu verlangen (Art. 18 DSGVO)</li>
              <li>der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Außerdem haben Sie das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu
              beschweren. Die zuständige Aufsichtsbehörde in Hessen ist der Hessische Beauftragte für
              Datenschutz und Informationsfreiheit, Postfach 3163, 65021 Wiesbaden.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              4. Datenerfassung auf dieser Website
            </h2>

            <h3 className="font-semibold text-stone-800 dark:text-stone-200 mb-2">Server-Log-Dateien</h3>
            <p>
              Der Hostinganbieter dieser Website erhebt und speichert automatisch Informationen in
              sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
              Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden
              Rechners, Uhrzeit der Serveranfrage, IP-Adresse. Eine Zusammenführung dieser Daten mit anderen
              Datenquellen wird nicht vorgenommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="font-semibold text-stone-800 dark:text-stone-200 mt-5 mb-2">Kontaktformular & Bewerbungsformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular oder Bewerbungsformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Formular inklusive der von Ihnen angegebenen Kontaktdaten zwecks
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese
              Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-2">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
              Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
              auf unserem berechtigten Interesse an der effektiven Bearbeitung von Anfragen (Art. 6 Abs. 1
              lit. f DSGVO).
            </p>
            <p className="mt-2">
              Die von Ihnen im Formular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche
              Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="font-semibold text-stone-800 dark:text-stone-200 mt-5 mb-2">E-Mail-Kontakt</h3>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen
              mitgeteilten Kontaktdaten zur Bearbeitung der Anfrage gespeichert. Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              5. Externe Dienste
            </h2>

            <h3 className="font-semibold text-stone-800 dark:text-stone-200 mb-2">Calendly</h3>
            <p>
              Auf dieser Website nutzen wir Calendly zur Online-Terminbuchung. Anbieter ist Calendly LLC,
              271 17th St NW, Ste 1000, Atlanta, Georgia 30363, USA. Wenn Sie über Calendly einen Termin
              buchen, werden Ihre eingegebenen Daten (Name, E-Mail, ggf. Telefon) an Calendly übertragen
              und auf deren Servern gespeichert. Weitere Informationen finden Sie in der{" "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9974A] hover:underline"
              >
                Datenschutzerklärung von Calendly
              </a>. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) bzw. Art. 6 Abs. 1 lit. b
              DSGVO (Vertragsanbahnung).
            </p>

            <h3 className="font-semibold text-stone-800 dark:text-stone-200 mt-5 mb-2">WhatsApp</h3>
            <p>
              Diese Website bietet die Möglichkeit, uns über WhatsApp zu kontaktieren. Anbieter ist die
              WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland. Der
              Klick auf den WhatsApp-Button öffnet WhatsApp mit einer vorausgefüllten Nachricht. Durch die
              Nutzung von WhatsApp werden Daten auf den Servern von WhatsApp verarbeitet. Weitere
              Informationen finden Sie in der{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9974A] hover:underline"
              >
                Datenschutzerklärung von WhatsApp
              </a>.
            </p>

            <h3 className="font-semibold text-stone-800 dark:text-stone-200 mt-5 mb-2">Google Maps</h3>
            <p>
              Diese Website verwendet Google Maps zur Darstellung von Karten. Anbieter ist Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung von Google Maps ist es
              notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen
              Server von Google in den USA übertragen und dort gespeichert. Rechtsgrundlage ist Art. 6
              Abs. 1 lit. f DSGVO. Weitere Informationen:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9974A] hover:underline"
              >
                Google Datenschutzerklärung
              </a>.
            </p>

            <h3 className="font-semibold text-stone-800 dark:text-stone-200 mt-5 mb-2">Google Fonts</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Google Fonts. Beim Aufruf
              einer Seite lädt Ihr Browser die benötigten Schriftarten in den Browser-Cache. Dabei wird
              Ihre IP-Adresse an Google übertragen. Google Fonts werden lokal geladen, um Datenschutzrisiken
              zu minimieren. Weitere Informationen finden Sie in der Datenschutzerklärung von Google.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              6. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104,
              USA gehostet. Vercel ist nach dem EU-US Data Privacy Framework zertifiziert und verarbeitet
              Daten gemäß Art. 46 DSGVO. Details:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9974A] hover:underline"
              >
                Vercel Privacy Policy
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              7. Cookies
            </h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies oder Analyse-Cookies. Technisch notwendige
              Cookies können zur Sicherstellung der Website-Funktionalität gesetzt werden. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-3">
              8. Speicherdauer
            </h2>
            <p>
              Sofern innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
              entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
              Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
              zulässigen Gründe für die Speicherung haben (z. B. steuer- oder handelsrechtliche
              Aufbewahrungsfristen); im letzteren Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>
          </div>

          <p className="text-xs text-stone-400 dark:text-stone-500 pt-4 border-t border-stone-200 dark:border-stone-800">
            Stand: April 2025
          </p>

        </div>
      </div>
    </section>
  );
}
