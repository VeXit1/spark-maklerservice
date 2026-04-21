"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "4,81/5", label: "ProvenExpert Bewertung" },
  { value: "51", label: "verifizierte Bewertungen" },
  { value: "500+", label: "betreute Investoren" },
  { value: "100%", label: "Empfehlungsquote" },
];

const trustBadges = [
  { label: "IHK-zertifiziert" },
  { label: "§34f GewO" },
  { label: "§34d GewO" },
  { label: "Keine Maklergebühren" },
];

export default function SocialProof() {
  return (
    <section className="bg-white dark:bg-stone-900 border-y border-stone-100 dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-serif text-3xl lg:text-4xl font-bold text-[#C9974A] mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-stone-500 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-3 pt-6 border-t border-stone-100 dark:border-stone-800"
        >
          {trustBadges.map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-1.5 bg-[#FBF8F4] dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              <svg className="w-3 h-3 text-[#C9974A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {badge.label}
            </span>
          ))}
          <a
            href="https://www.provenexpert.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#FBF8F4] border border-stone-200 text-stone-600 text-xs font-semibold px-3 py-1.5 rounded-full hover:border-[#C9974A]/40 hover:text-[#C9974A] transition-colors"
          >
            <svg className="w-3 h-3 text-[#C9974A]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4,81 auf ProvenExpert
          </a>
        </motion.div>
      </div>
    </section>
  );
}
