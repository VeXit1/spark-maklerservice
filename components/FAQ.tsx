"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Brauche ich Eigenkapital für eine Investitionsimmobilie?",
    answer:
      "Nein – als Angestellter mit festem, nachweisbarem Einkommen kannst du oft eine Vollfinanzierung (100%) erhalten. Die Bank bewertet deine Bonität und das Objekt, nicht dein Erspartes. In manchen Fällen übernimmt die Bank sogar die Kaufnebenkosten.",
  },
  {
    question: "Wie hoch ist das Risiko bei einem Leerstand?",
    answer:
      "Wir vermitteln ausschließlich bereits vermietete Objekte in deutschen Metropolen mit Leerstandsquoten unter 1%. Das Risiko eines unerwarteten Leerstands ist damit minimal. Zusätzlich sichern dich die steuerlichen Abzüge auch in solchen Ausnahmesituationen ab.",
  },
  {
    question: "Wie viel Zeit muss ich selbst investieren?",
    answer:
      "Sehr wenig. Nach dem Kauf übernimmt eine Hausverwaltung alle operativen Aufgaben – Mietersuche, Kommunikation, Instandhaltung. Dein Aufwand beschränkt sich auf das Einreichen der Steuererklärung und gelegentliche Rückfragen.",
  },
  {
    question: "Welche Renditen kann ich realistisch erwarten?",
    answer:
      "Bruttomietrenditen zwischen 3,5% und 5,5% sind in unseren Zielmärkten realistisch. Durch Steuerersparnisse (AfA, Zinsen) erhöht sich die effektive Rendite auf 5–8%. Hinzu kommen langfristige Wertsteigerungen von historisch 2–4% p.a.",
  },
  {
    question: "Fallen Maklergebühren für mich an?",
    answer:
      "Nein. Unsere Vergütung wird ausschließlich vom Verkäufer getragen. Du zahlst lediglich die üblichen Kaufnebenkosten: Grunderwerbsteuer (je nach Bundesland 3,5–6,5%), Notar- und Grundbuchkosten (ca. 2%).",
  },
  {
    question: "Wie lange dauert der gesamte Prozess?",
    answer:
      "Von deinem ersten Gespräch bis zur Schlüsselübergabe vergehen in der Regel 8–16 Wochen. Die Finanzierungsphase dauert 4–6 Wochen, der Notartermin und die Eintragung ins Grundbuch weitere 4–8 Wochen.",
  },
  {
    question: "Was passiert, wenn mein Einkommen sinkt oder ich arbeitslos werde?",
    answer:
      "In solchen Situationen gibt es flexible Lösungen: Tilgungsaussetzung, Zinsbindungsverlängerung oder eine Umschuldung. Die Mieteinnahmen laufen in der Regel weiter und decken einen Großteil der Rate. Wir beraten dich individuell.",
  },
  {
    question: "Kann ich auch als Berufseinsteiger investieren?",
    answer:
      "Grundsätzlich ja – entscheidend ist ein stabiles, unbefristetes Arbeitsverhältnis. Ein Nettoeinkommen ab ca. 2.500 € monatlich reicht in vielen Fällen für die erste Immobilie. Im kostenlosen Strategiegespräch prüfen wir deine Situation konkret.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-stone-100 dark:border-stone-700 rounded-2xl overflow-hidden bg-white dark:bg-stone-800">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
      >
        <span className="font-semibold text-stone-900 dark:text-white text-sm pr-4">
          {question}
        </span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full border-2 border-[#C9974A] flex items-center justify-center transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg
            className="w-3 h-3 text-[#C9974A]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 border-t border-stone-100 dark:border-stone-700">
              <p className="text-stone-500 text-sm leading-relaxed pt-4">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const CALENDLY_URL =
  "https://calendly.com/ruslan-k-sparkmaklerservice/strategiegesprach-investment-in-vermietete-immo-hp";

export default function FAQ() {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF8F4] dark:bg-stone-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">FAQ</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-stone-500 text-lg">
            Alles, was du vor deiner ersten Immobilie wissen solltest.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-stone-500 text-sm mb-4">
            Noch eine Frage? Wir antworten persönlich.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Kostenloses Strategiegespräch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
