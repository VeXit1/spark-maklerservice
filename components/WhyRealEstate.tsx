"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: "🏠",
    title: "Vermögen ohne Eigenkapital",
    description:
      "Deine Bank finanziert bis zu 100% – der Mieter zahlt die Raten. Du baust Vermögen auf, ohne selbst tief in die Tasche zu greifen. Immobilien sind die einzige Anlageklasse, bei der dir jemand anderes das Kapital zahlt.",
    highlight: "100% Bankfinanzierung möglich",
  },
  {
    icon: "💰",
    title: "Bis zu 50% Steuern sparen",
    description:
      "Als Angestellter mit Steuersatz über 30% profitierst du massiv von AfA, Zinsen, Renovierungskosten und mehr. Das Finanzamt beteiligt sich faktisch an deiner Investition – völlig legal und nachhaltig.",
    highlight: "AfA, Zinsen & Werbungskosten absetzbar",
  },
  {
    icon: "🌙",
    title: "Passives Einkommen im Alter",
    description:
      "Nach Tilgung des Kredits fließt die Miete direkt in deine Tasche. Eine abbezahlte Wohnung ist wie eine private Rentenversicherung – nur dass der Wert steigt statt zu sinken.",
    highlight: "Inflationsgeschütztes Einkommen",
  },
];

export default function WhyRealEstate() {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF8F4] dark:bg-stone-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Warum Immobilien</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white mb-4">
            3 Gründe, warum Angestellte{" "}
            <br className="hidden sm:block" />
            jetzt investieren sollten
          </h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto text-lg">
            Immobilien sind das effizienteste Instrument für Angestellte mit
            gutem Einkommen – wenn man es richtig macht.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white dark:bg-stone-900 rounded-3xl p-8 shadow-sm border border-stone-100 dark:border-stone-800 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-5">{card.icon}</div>
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-5">
                {card.description}
              </p>
              <div className="inline-flex items-center gap-2 bg-[#C9974A]/10 text-[#C9974A] text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9974A]" />
                {card.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
