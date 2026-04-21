"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Michael S.",
    role: "Ingenieur, 38 Jahre",
    rating: 5,
    text: "Ich war lange skeptisch, ob Immobilien wirklich für Angestellte wie mich funktionieren. Ruslan und sein Team haben mir nicht nur eine passende Wohnung gefunden, sondern auch erklärt, wie ich über 4.000 € im Jahr an Steuern spare. Heute bereue ich nur, nicht früher angefangen zu haben.",
    location: "Frankfurt",
  },
  {
    name: "Sandra K.",
    role: "Lehrerin, 42 Jahre",
    rating: 5,
    text: "Als Lehrerin hatte ich nie gedacht, dass ich mir eine Eigentumswohnung als Kapitalanlage leisten kann. SPARK hat mir gezeigt, dass es ohne Eigenkapital funktioniert – die Miete meiner Wohnung deckt fast die komplette Rate. Rundum professionell, immer erreichbar.",
    location: "Kassel",
  },
  {
    name: "Thomas B.",
    role: "Softwareentwickler, 34 Jahre",
    rating: 5,
    text: "Der gesamte Prozess war erstaunlich reibungslos. Vom ersten Gespräch bis zur Schlüsselübergabe haben Ruslan und sein Team alles koordiniert. Ich musste mich um nichts kümmern. Die Steuerersparnis ist real – mein Steuerberater war begeistert.",
    location: "Hannover",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#C9974A] fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
            Bewertungen
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Was unsere Kunden sagen
          </h2>
          <div className="flex items-center justify-center gap-3 text-stone-400">
            <Stars count={5} />
            <span className="text-white font-semibold">4,81 / 5</span>
            <span>· 51 Bewertungen auf ProvenExpert</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7 flex flex-col hover:bg-white/8 transition-colors"
            >
              <Stars count={t.rating} />
              <p className="text-stone-300 text-sm leading-relaxed mt-4 mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9974A]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#C9974A] font-bold font-serif">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-stone-400 text-xs">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.provenexpert.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 text-sm hover:text-[#C9974A] transition-colors"
          >
            Alle 51 Bewertungen auf ProvenExpert ansehen →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
