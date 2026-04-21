"use client";

import { motion } from "framer-motion";

const CALENDLY_URL =
  "https://calendly.com/ruslan-k-sparkmaklerservice/strategiegesprach-investment-in-vermietete-immo-hp";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF8F4] dark:bg-stone-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-stone-900 rounded-[2rem] p-10 sm:p-14 text-center overflow-hidden"
        >
          {/* Decorative gold orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#C9974A]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#C9974A]/8 blur-2xl pointer-events-none" />

          <div className="relative">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-[#C9974A]/20 border border-[#C9974A]/30 text-[#C9974A] text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 rounded-full mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9974A] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9974A]" />
              </span>
              Kostenlos & unverbindlich
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Bereit für deine erste
              <br />
              <span className="text-[#C9974A]">Kapitalanlage-Immobilie?</span>
            </h2>
            <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">
              In 45 Minuten zeigen wir dir, wie viel Immobilie du dir leisten
              kannst – und wie viel du jährlich an Steuern sparst.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-[#C9974A] text-white font-semibold rounded-full text-base tracking-wide transition-all duration-200 hover:bg-[#A97A30] hover:shadow-xl hover:shadow-[#C9974A]/20 hover:-translate-y-0.5"
              >
                Strategiegespräch buchen →
              </a>
              <a
                href="tel:+4917632883789"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-700 text-stone-300 font-semibold rounded-full text-sm hover:border-[#C9974A]/50 hover:text-[#C9974A] transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0176 3288 3789
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-stone-500">
              {[
                "Keine Maklergebühren",
                "Online oder telefonisch",
                "Kein Verkaufsdruck",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C9974A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
