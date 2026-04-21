"use client";

import { motion } from "framer-motion";

const problems = [
  {
    icon: "📉",
    problem: "Hohe Steuerlast frisst dein Einkommen",
    solution:
      "Mit vermieteten Immobilien wandelst du Steuern in Vermögen um – ganz legal über AfA, Zinsen und Werbungskosten.",
  },
  {
    icon: "🏦",
    problem: "Zinsen auf dem Konto decken die Inflation nicht",
    solution:
      "Immobilien steigen historisch mit 2–4% p.a. im Wert – während Mieter Inflation und Kredit für dich bezahlen.",
  },
  {
    icon: "⏰",
    problem: "Keine Zeit für aufwendiges Investieren",
    solution:
      "Du kaufst, der Mieter zahlt, die Verwaltung läuft. Du musst nicht einmal in der Nähe wohnen.",
  },
  {
    icon: "😰",
    problem: "Kein Eigenkapital – kein Investment?",
    solution:
      "Falsch. Als Angestellter mit festem Einkommen finanziert dir die Bank bis zu 100% – der Mieter zahlt die Rate.",
  },
  {
    icon: "🤷",
    problem: "Keine Ahnung, wo anfangen",
    solution:
      "Genau dafür gibt es SPARK. Wir begleiten dich vom ersten Gespräch bis zum Schlüssel – ohne Fachwissen nötig.",
  },
  {
    icon: "📋",
    problem: "Angst vor Leerstand und Mietausfällen",
    solution:
      "Wir vermitteln nur bereits vermietete Objekte in Metropolen mit unter 1% Leerstand. Dein Risiko ist minimal.",
  },
];

export default function ProblemLoesung() {
  return (
    <section className="py-20 lg:py-28 bg-stone-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[#C9974A] mb-3">
            Deine Situation
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Erkennst du dich wieder?
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto text-lg">
            Diese Gedanken kennen fast alle Angestellten – und für jeden davon
            gibt es eine klare Antwort.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/8 transition-colors dark:bg-stone-800/50 dark:border-stone-700"
            >
              <div className="text-3xl mb-4">{item.icon}</div>

              {/* Problem */}
              <div className="flex items-start gap-2 mb-4">
                <span className="text-red-400 text-lg mt-0.5 shrink-0">✗</span>
                <p className="text-stone-200 text-sm font-medium leading-snug">
                  {item.problem}
                </p>
              </div>

              <div className="w-full h-px bg-white/10 mb-4" />

              {/* Solution */}
              <div className="flex items-start gap-2">
                <span className="text-[#C9974A] text-lg mt-0.5 shrink-0">✓</span>
                <p className="text-stone-300 text-sm leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
