"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Kostenloses Strategiegespräch",
    description:
      "In einem persönlichen Gespräch analysieren wir deine finanzielle Situation, dein Steuerpotenzial und deine Ziele. Wir zeigen dir, wie viel Immobilie du dir tatsächlich leisten kannst – oft mehr als du denkst.",
    duration: "45–60 Min.",
  },
  {
    number: "02",
    title: "Passende Immobilien finden",
    description:
      "Unser Netzwerk liefert dir geprüfte, bereits vermietete Objekte mit positiver Rendite. Wir analysieren Lage, Mieter, Substanz und Preis – damit du nur Angebote siehst, die wirklich passen.",
    duration: "1–4 Wochen",
  },
  {
    number: "03",
    title: "Finanzierung & Abwicklung",
    description:
      "Wir koordinieren alles: Bankgespräche, Notartermin, Übergabe. Du musst nicht wissen, wie das alles funktioniert – dafür sind wir da. Unser Ziel: null Stress für dich.",
    duration: "4–8 Wochen",
  },
  {
    number: "04",
    title: "Langfristige Begleitung",
    description:
      "Nach dem Kauf bist du nicht allein. Wir bleiben dein Ansprechpartner für Mieterthemen, Steueroptimierungen und den nächsten Kauf. Viele unserer Kunden kaufen nach 1–2 Jahren die zweite Wohnung.",
    duration: "Dauerhaft",
  },
];

export default function Process() {
  return (
    <section id="prozess" className="py-20 lg:py-28 bg-white dark:bg-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-tag">So funktioniert es</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white mb-4">
            Von 0 zur ersten Immobilie –{" "}
            <br className="hidden sm:block" />
            in 4 Schritten
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-lg">
            Kein kompliziertes Fachwissen nötig. Wir begleiten dich durch jeden
            Schritt – vom ersten Gespräch bis zum Schlüssel.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-8 bottom-8 w-0.5 bg-stone-100" />

          <div className="space-y-6 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center lg:mb-12 ${
                  i % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                <div
                  className={`${
                    i % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                  } mb-4 lg:mb-0`}
                >
                  <div
                    className={`bg-[#FBF8F4] dark:bg-stone-800 rounded-3xl p-8 border border-stone-100 dark:border-stone-700 ${
                      i % 2 !== 0 ? "lg:ml-8" : "lg:mr-8"
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#C9974A] flex items-center justify-center">
                        <span className="font-serif font-bold text-white text-sm">
                          {step.number}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-stone-500 text-sm leading-relaxed mb-3">
                          {step.description}
                        </p>
                        <span className="text-xs font-semibold text-[#C9974A] bg-[#C9974A]/10 px-3 py-1 rounded-full">
                          ⏱ {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot for timeline (desktop) */}
                <div
                  className={`hidden lg:flex items-center justify-center ${
                    i % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-[#C9974A] border-4 border-white shadow-md z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA after steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="text-stone-500 text-base mb-5">
            Starte jetzt mit Schritt 1 – kostenlos und unverbindlich.
          </p>
          <a
            href="https://calendly.com/ruslan-k-sparkmaklerservice/strategiegesprach-investment-in-vermietete-immo-hp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Jetzt Strategiegespräch buchen →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
