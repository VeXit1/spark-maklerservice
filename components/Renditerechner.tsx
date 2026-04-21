"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";

const CALENDLY_URL =
  "https://calendly.com/ruslan-k-sparkmaklerservice/strategiegesprach-investment-in-vermietete-immo-hp";

function formatEur(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPct(value: number) {
  return value.toFixed(2).replace(".", ",") + " %";
}

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}

function Slider({ label, value, min, max, step, onChange, format }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-stone-700 dark:text-stone-200">{label}</label>
        <span className="text-sm font-bold text-[#C9974A]">{format(value)}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #C9974A ${pct}%, #E8DDD0 ${pct}%)`,
          }}
        />
      </div>
      <div className="flex justify-between text-xs text-stone-400 mt-1">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

export default function Renditerechner() {
  const [kaufpreis, setKaufpreis] = useState(200000);
  const [miete, setMiete] = useState(800);
  const [zinssatz, setZinssatz] = useState(3.5);
  const [steuersatz, setSteuersatz] = useState(35);

  const results = useMemo(() => {
    const jahresmieteinnahmen = miete * 12;
    const bruttorendite = (jahresmieteinnahmen / kaufpreis) * 100;

    // AfA: 2% of building value (80% of purchase price)
    const gebaeudeanteil = kaufpreis * 0.8;
    const afa = gebaeudeanteil * 0.02;

    // Annual interest (1% repayment assumed)
    const jahreszinsen = kaufpreis * (zinssatz / 100);

    // Tax savings = (AfA + Zinsen) * Steuersatz
    const steuerersparnis = (afa + jahreszinsen) * (steuersatz / 100);

    // Effective return including tax savings
    const effektivrendite =
      ((jahresmieteinnahmen + steuerersparnis) / kaufpreis) * 100;

    // Wealth growth over 10 years (appreciation 2% p.a. + equity buildup)
    const appreciation = kaufpreis * (Math.pow(1.02, 10) - 1);
    const eigenkapitalaufbau = kaufpreis * 0.01 * 10; // 1% Tilgung p.a.
    const vermoegen10Jahre = appreciation + eigenkapitalaufbau;

    return {
      bruttorendite,
      steuerersparnis,
      effektivrendite,
      vermoegen10Jahre,
    };
  }, [kaufpreis, miete, zinssatz, steuersatz]);

  return (
    <section className="py-20 lg:py-28 bg-[#FBF8F4] dark:bg-stone-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">Renditerechner</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white mb-4">
            Was bringt mir das konkret?
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-lg">
            Berechne deine persönliche Rendite und Steuerersparnis – live und
            interaktiv.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-stone-800 rounded-3xl p-8 shadow-sm border border-stone-100 dark:border-stone-700"
          >
            <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-white mb-6">
              Deine Eckdaten
            </h3>
            <Slider
              label="Kaufpreis"
              value={kaufpreis}
              min={100000}
              max={600000}
              step={5000}
              onChange={setKaufpreis}
              format={formatEur}
            />
            <Slider
              label="Monatliche Kaltmiete"
              value={miete}
              min={300}
              max={3000}
              step={50}
              onChange={setMiete}
              format={(v) => formatEur(v) + "/Mo."}
            />
            <Slider
              label="Zinssatz p.a."
              value={zinssatz}
              min={1}
              max={6}
              step={0.1}
              onChange={setZinssatz}
              format={(v) => v.toFixed(1).replace(".", ",") + " %"}
            />
            <Slider
              label="Persönlicher Grenzsteuersatz"
              value={steuersatz}
              min={20}
              max={45}
              step={1}
              onChange={setSteuersatz}
              format={(v) => v + " %"}
            />
            <p className="text-xs text-stone-400 mt-2">
              * Vereinfachte Beispielrechnung. Keine Steuer- oder
              Anlageberatung.
            </p>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {[
              {
                label: "Bruttorendite",
                value: formatPct(results.bruttorendite),
                desc: "Mieteinnahmen / Kaufpreis",
                highlight: false,
              },
              {
                label: "Steuerersparnis / Jahr",
                value: formatEur(results.steuerersparnis),
                desc: "AfA + Zinsen × Steuersatz",
                highlight: false,
              },
              {
                label: "Effektivrendite (mit Steuer)",
                value: formatPct(results.effektivrendite),
                desc: "(Miete + Steuerersparnis) / Kaufpreis",
                highlight: true,
              },
              {
                label: "Vermögenszuwachs nach 10 Jahren",
                value: formatEur(results.vermoegen10Jahre),
                desc: "Wertsteigerung (2% p.a.) + Tilgung",
                highlight: false,
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`rounded-2xl p-6 flex items-center justify-between ${
                  item.highlight
                    ? "bg-[#C9974A] text-white"
                    : "bg-white dark:bg-stone-800 border border-stone-100 dark:border-stone-700 shadow-sm"
                }`}
              >
                <div>
                  <p
                    className={`text-sm font-semibold mb-0.5 ${
                      item.highlight ? "text-white/90" : "text-stone-700 dark:text-stone-200"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p
                    className={`text-xs ${
                      item.highlight ? "text-white/70" : "text-stone-400"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
                <p
                  className={`font-serif text-2xl font-bold ml-4 shrink-0 ${
                    item.highlight ? "text-white" : "text-[#C9974A]"
                  }`}
                >
                  {item.value}
                </p>
              </motion.div>
            ))}

            <div className="pt-2">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center justify-center"
              >
                Meine persönliche Berechnung besprechen →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
