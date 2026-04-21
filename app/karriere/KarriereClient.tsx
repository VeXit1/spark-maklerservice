"use client";

import { motion } from "framer-motion";

const APPLY_EMAIL = "mailto:info@sparkmaklerservice.de?subject=Bewerbung%20als%20Immobilienberater";

const values = [
  {
    icon: "🎯",
    title: "Eigenverantwortung statt Kontrolle",
    text: "Du gestaltest mit – im Alltag, in Prozessen, im Ergebnis.",
  },
  {
    icon: "💡",
    title: "Relevanz und Wirksamkeit",
    text: "Deine Arbeit hat sichtbare Wirkung – für Kund:innen und Kolleg:innen.",
  },
  {
    icon: "🤝",
    title: "Zusammenarbeit auf Augenhöhe",
    text: "Hier zählt, was du beiträgst – nicht, wie lange du schon dabei bist.",
  },
  {
    icon: "💬",
    title: "Ehrlicher Umgang",
    text: "Wir sagen, was ist – fair, direkt und professionell.",
  },
  {
    icon: "📈",
    title: "Entwicklung ohne Stillstand",
    text: "Du entwickelst dich, weil du in echten Projekten wächst – nicht im Schulungskatalog.",
  },
];

const benefits = [
  {
    icon: "🧑‍🤝‍🧑",
    title: "Ein Team, das zusammenhält",
    text: "Bei SPARK arbeiten Menschen, die sich gegenseitig unterstützen, offen kommunizieren und gemeinsam etwas bewegen wollen. Gute Laune ist bei uns keine Floskel – sondern ein wichtiger Teil der Kultur.",
  },
  {
    icon: "🏡",
    title: "Verantwortung & Freiheit",
    text: "Wir setzen auf Eigenverantwortung und Vertrauen. Je nach Aufgabe kannst du flexibel im Büro oder im Homeoffice arbeiten. Wichtig ist nicht, von wo du arbeitest – sondern wie.",
  },
  {
    icon: "⚡",
    title: "Klarer Fokus statt Papierkram",
    text: "Wir arbeiten digital, effizient und mit modernen Tools. Du bekommst, was du brauchst – Smartphone, Laptop und ein Arbeitsumfeld, das dich unterstützt.",
  },
  {
    icon: "🏥",
    title: "Gesund bleiben – einfach & direkt",
    text: "Über unseren Facharzt-Vermittlungsservice bekommst du bei Bedarf zügig medizinische Termine. Und wenn mal etwas ist: Bei uns hört dir immer jemand zu.",
  },
  {
    icon: "🐶",
    title: "Zwei Bürohunde – gute Stimmung inklusive",
    text: "Unsere Hunde gehören zum Team. Sie bringen Bewegung, Abwechslung und manchmal auch neue Perspektiven.",
  },
  {
    icon: "☕",
    title: "Kaffee im Büro & Currywurst um die Ecke",
    text: "Cappuccino gibt's bei uns direkt im Büro. Bei Nino's findest du Lebensmittel und Mittagessen – und bei Hans Wurst in der Wolfhager Straße vermutlich die beste Currywurst Kassels.",
  },
];

const jobs = [
  {
    title: "Immobilienberater / Immobilienvertrieb (m/w/d)",
    subtitle: "Kassel",
    type: "vor Ort",
    location: "Kassel, Hessen, Deutschland",
    employment: "Vollzeit",
    href: "/jobs/immobilienberater-kassel",
  },
  {
    title: "Immobilienberater / Immobilienvertrieb (m/w/d)",
    subtitle: "Remote (deutschlandweit)",
    type: "Remote",
    location: "deutschlandweit",
    employment: "Vollzeit",
    href: "/jobs/immobilienberater-remote",
  },
];

const perks = [
  "Raum für Initiative, Verantwortung und Mitdenken",
  "Offener Austausch im Team – direkt, konstruktiv, professionell",
  "Persönliche Entwicklung durch echtes Tun",
  "Digitale Tools, die deinen Alltag vereinfachen",
  "Kolleg:innen, die sich gegenseitig den Rücken stärken",
  "Qualifizierte Kundenanfragen",
];

export default function KarriereClient() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center bg-[#FBF8F4] dark:bg-stone-950 overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#C9974A]/10 blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full bg-[#C9974A]/8 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#92714A 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-[#C9974A]/40 bg-[#C9974A]/10 text-[#C9974A] text-xs font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9974A] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9974A]" />
            </span>
            Offene Stellen verfügbar
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-white leading-tight mb-5"
          >
            Deine Karriere bei der{" "}
            <span className="text-[#C9974A]">SPARK Maklerservice GmbH</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-stone-500 dark:text-stone-400 text-xl max-w-2xl mx-auto mb-10"
          >
            Verantwortung übernehmen. Wirkung erzielen. Gemeinsam wachsen.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="#positionen"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#C9974A] text-white font-semibold rounded-full text-sm hover:bg-[#A97A30] hover:shadow-xl hover:shadow-[#C9974A]/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            Offene Stellen ansehen ↓
          </motion.a>
        </div>
      </section>

      {/* ── Über SPARK ── */}
      <section className="py-20 lg:py-28 bg-[#FBF8F4] dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag">Über SPARK Maklerservice</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-6 leading-tight">
                Kein Ort für{" "}
                <span className="text-[#C9974A]">passive Routinen</span>
              </h2>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                SPARK ist kein Ort für Hierarchien, in denen man sich verstecken
                kann – und auch kein Platz für passive Routinen. Wir suchen
                Menschen, die Lust auf echte Aufgaben haben, klar
                kommunizieren, sich selbst organisieren können – und Freude
                daran haben, mitzugestalten.
              </p>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                Bei uns findest du ein Umfeld, in dem du Verantwortung
                übernimmst und Entscheidungen mitträgst. Ein Team, das nicht
                perfekt ist – aber wirksam. Weil wir offen miteinander
                umgehen, voneinander lernen und besser werden wollen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-stone-900 rounded-3xl p-8 text-white"
            >
              <p className="text-[#C9974A] text-xs font-semibold tracking-[0.12em] uppercase mb-4">
                SPARK – deine Chance
              </p>
              <p className="text-stone-300 leading-relaxed mb-6">
                Hier gestaltest du mit, denkst mit, bewegst mit. Du arbeitest
                in einem Umfeld, das auf Eigenverantwortung setzt, auf klare
                Kommunikation und auf die Bereitschaft, sich
                weiterzuentwickeln.
              </p>
              <p className="text-white font-semibold mb-4">
                Das erwartet dich bei uns:
              </p>
              <ul className="space-y-2.5">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm text-stone-300">
                    <svg className="w-4 h-4 text-[#C9974A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {perk}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Was Bewerber suchen ── */}
      <section className="py-20 lg:py-28 bg-white dark:bg-stone-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="section-tag">Warum SPARK</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white mb-4">
              Was Bewerber:innen heute suchen –{" "}
              <br className="hidden sm:block" />
              <span className="text-[#C9974A]">und bei uns finden</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#FBF8F4] dark:bg-stone-800 rounded-2xl p-6 border border-stone-100 dark:border-stone-700 hover:border-[#C9974A]/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-serif font-bold text-stone-900 dark:text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">{v.text}</p>
              </motion.div>
            ))}

            {/* Makler CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#C9974A] rounded-2xl p-6 text-white md:col-span-2 lg:col-span-1 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-4">🏠</div>
                <h3 className="font-serif font-bold text-xl mb-2">
                  Als Makler:in durchstarten?
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Begleite Menschen unabhängig und eigenverantwortlich – mit
                  echten Leads und echtem Potenzial.
                </p>
              </div>
              <a
                href={APPLY_EMAIL}
                className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-white text-[#C9974A] font-semibold rounded-full text-sm hover:bg-stone-100 transition-colors"
              >
                Jetzt bewerben →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-20 lg:py-28 bg-[#FBF8F4] dark:bg-stone-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="section-tag">Benefits</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white mb-4">
              Was du bei SPARK erwarten kannst
            </h2>
            <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto text-lg">
              Wer gerne zur Arbeit kommt, arbeitet besser – und bleibt länger.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white dark:bg-stone-800 rounded-3xl p-7 border border-stone-100 dark:border-stone-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-serif font-bold text-stone-900 dark:text-white mb-2">
                  {b.title}
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offene Positionen ── */}
      <section id="positionen" className="py-20 lg:py-28 bg-white dark:bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-tag">Jetzt bewerben</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white mb-3">
              Aktuell offene Positionen
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-lg">
              Bewirb dich jetzt für eine der offenen Stellen
            </p>
          </motion.div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.subtitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#FBF8F4] dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 hover:border-[#C9974A]/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-stone-900 dark:text-white text-lg mb-3">
                      {job.title}{" "}
                      <span className="text-[#C9974A]">– {job.subtitle}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 dark:text-stone-400">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.employment}
                      </span>
                    </div>
                  </div>
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center px-6 py-3 bg-[#C9974A] text-white font-semibold rounded-full text-sm hover:bg-[#A97A30] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 whitespace-nowrap"
                  >
                    Job ansehen →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standort ── */}
      <section className="py-20 lg:py-28 bg-stone-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[#C9974A] mb-3">
                Unser Standort
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                Kassel – mitten in Deutschland
              </h2>
              <p className="text-stone-400 leading-relaxed mb-8">
                Unser Büro liegt zentral in Kassel, gut erreichbar mit ÖPNV
                und Auto. Remote-Arbeit ist für viele Positionen möglich – wir
                sind offen für beides.
              </p>
              <address className="not-italic space-y-3 text-stone-300 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#C9974A] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>SPARK Maklerservice GmbH · Brandaustraße 10 · 34127 Kassel</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#C9974A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+4917632883789" className="hover:text-[#C9974A] transition-colors">
                    0176 3288 3789
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#C9974A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@sparkmaklerservice.de" className="hover:text-[#C9974A] transition-colors">
                    info@sparkmaklerservice.de
                  </a>
                </div>
              </address>
            </motion.div>

            {/* Map embed */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden border border-white/10 h-72 lg:h-80"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.8!2d9.4797!3d51.3127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBrandaustra%C3%9Fe+10%2C+34127+Kassel!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SPARK Maklerservice Standort"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-[#FBF8F4] dark:bg-stone-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4">
              Bereit, etwas zu bewegen?
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-lg mb-8">
              Schick uns deine Bewerbung – formlos per E-Mail reicht.
              Wir melden uns schnell zurück.
            </p>
            <a
              href={APPLY_EMAIL}
              className="inline-flex items-center justify-center px-10 py-4 bg-[#C9974A] text-white font-semibold rounded-full text-base hover:bg-[#A97A30] hover:shadow-xl hover:shadow-[#C9974A]/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              Jetzt bewerben →
            </a>
            <p className="text-stone-400 dark:text-stone-500 text-sm mt-4">
              info@sparkmaklerservice.de · 0176 3288 3789
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
