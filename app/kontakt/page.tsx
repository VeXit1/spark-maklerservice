import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Buche dein kostenloses Strategiegespräch mit SPARK Maklerservice. Immobilien-Investment-Beratung für Angestellte.",
};

const CALENDLY_URL =
  "https://calendly.com/ruslan-k-sparkmaklerservice/strategiegesprach-investment-in-vermietete-immo-hp";

export default function KontaktPage() {
  return (
    <>
      <section className="pt-28 pb-20 bg-[#FBF8F4] dark:bg-stone-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Kontakt</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-4">
              Lass uns sprechen
            </h1>
            <p className="text-stone-500 dark:text-stone-400 text-lg max-w-xl mx-auto">
              Buche direkt einen Termin oder schreib uns – wir melden uns
              innerhalb von 24 Stunden zurück.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-stone-900 rounded-3xl p-8 border border-stone-100 dark:border-stone-700 shadow-sm">
                <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-white mb-6">
                  Kontaktdaten
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: "📍",
                      label: "Adresse",
                      value: "Brandaustraße 10\n34127 Kassel",
                    },
                    {
                      icon: "📞",
                      label: "Telefon",
                      value: "0176 3288 3789",
                      href: "tel:+4917632883789",
                    },
                    {
                      icon: "✉️",
                      label: "E-Mail",
                      value: "info@sparkmaklerservice.de",
                      href: "mailto:info@sparkmaklerservice.de",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-stone-800 dark:text-stone-200 font-medium hover:text-[#C9974A] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-stone-800 dark:text-stone-200 font-medium whitespace-pre-line">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-stone-900 rounded-3xl p-8 text-white">
                <h3 className="font-serif text-xl font-bold mb-3">
                  Direkt Termin buchen
                </h3>
                <p className="text-stone-400 text-sm mb-5 leading-relaxed">
                  Wähle direkt einen freien Slot für dein kostenloses
                  Strategiegespräch – online oder telefonisch, in ca. 45
                  Minuten.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center justify-center block"
                >
                  Termin im Kalender buchen →
                </a>
              </div>
            </div>

            {/* Calendly Embed */}
            <div className="bg-white dark:bg-stone-900 rounded-3xl overflow-hidden border border-stone-100 dark:border-stone-700 shadow-sm">
              <div className="p-6 border-b border-stone-100 dark:border-stone-700">
                <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-white">
                  Termin buchen
                </h2>
                <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">
                  Kostenloses Strategiegespräch · 45 Min.
                </p>
              </div>
              <div className="relative" style={{ height: "560px" }}>
                <iframe
                  src={CALENDLY_URL}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Termin buchen – SPARK Maklerservice"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
