"use client";

import { motion } from "framer-motion";

const cities = [
  {
    name: "München",
    emoji: "🏙️",
    residents: "1.578.000",
    growth: "+14,1%",
    vacancy: "0,2%",
    highlight: "Stärkstes Mietpreiswachstum",
  },
  {
    name: "Hamburg",
    emoji: "🌊",
    residents: "1.852.000",
    growth: "+7,0%",
    vacancy: "0,5%",
    highlight: "Hafenmetropole mit stabilem Markt",
  },
  {
    name: "Frankfurt",
    emoji: "🏦",
    residents: "770.000",
    growth: "+5,2%",
    vacancy: "0,2%",
    highlight: "Europas Finanzmetropole",
  },
  {
    name: "Berlin",
    emoji: "🎯",
    residents: "3.870.000",
    growth: "+10,3%",
    vacancy: "0,8%",
    highlight: "Größter Wohnungsmarkt Deutschlands",
  },
];

export default function Staedte() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-stone-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Unsere Standorte</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white mb-4">
            Investieren, wo Nachfrage{" "}
            <span className="text-[#C9974A]">garantiert</span> ist
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-lg">
            Wir konzentrieren uns auf Metropolen mit niedrigem Leerstand und
            starkem Bevölkerungswachstum – dort, wo deine Wohnung immer vermietet ist.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-[#FBF8F4] dark:bg-stone-800 rounded-3xl p-7 border border-stone-100 dark:border-stone-700 hover:border-[#C9974A]/30 hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Gold accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9974A] to-[#DDB570] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-3xl mb-4">{city.emoji}</div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white mb-1">
                {city.name}
              </h3>
              <p className="text-xs text-[#C9974A] font-semibold mb-5">
                {city.highlight}
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-stone-400 font-medium">Einwohner</span>
                  <span className="text-sm font-bold text-stone-800">
                    {city.residents}
                  </span>
                </div>
                <div className="w-full h-px bg-stone-200" />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-stone-400 font-medium">
                    Bevölkerungswachstum
                  </span>
                  <span className="text-sm font-bold text-emerald-600">
                    {city.growth}
                  </span>
                </div>
                <div className="w-full h-px bg-stone-200" />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-stone-400 font-medium">Leerstandsquote</span>
                  <span className="text-sm font-bold text-[#C9974A]">
                    {city.vacancy}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-xs text-stone-400 mt-6"
        >
          Bevölkerungsprognose bis 2030 · Leerstandsquoten Wohnimmobilien 2024
        </motion.p>
      </div>
    </section>
  );
}
