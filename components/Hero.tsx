"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CALENDLY_URL =
  "https://calendly.com/ruslan-k-sparkmaklerservice/strategiegesprach-investment-in-vermietete-immo-hp";

const words = ["Investiere", "in", "vermietete", "Wohnungen"];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 40, rotateX: -20 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero() {

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#FBF8F4] dark:bg-stone-950 overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gold orb top-right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#C9974A]/10 blur-[120px]"
        />
        {/* Gold orb bottom-left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#C9974A]/8 blur-[100px]"
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#92714A 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-0 lg:pt-32 w-full">
        {/* ── Top: text left + image right ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pb-16 lg:pb-20">
          {/* Left column */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 border border-[#C9974A]/40 bg-[#C9974A]/10 text-[#C9974A] text-xs font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9974A] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9974A]" />
              </span>
              IHK-zertifiziert · §34f GewO · §34d GewO
            </motion.div>

            {/* Animated headline */}
            <motion.h1
              variants={container}
              initial="hidden"
              animate="show"
              className="font-serif font-bold leading-[1.05] mb-6 text-stone-900 dark:text-white"
              style={{ perspective: "1000px" }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={word + i}
                  variants={wordVariant}
                  className={`inline-block mr-3 sm:mr-4 ${
                    word === "vermietete"
                      ? "text-[#C9974A]"
                      : "text-stone-900 dark:text-white"
                  } text-5xl sm:text-6xl lg:text-7xl`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Sub-line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="text-lg sm:text-xl text-stone-500 dark:text-stone-400 leading-relaxed mb-8 max-w-lg"
            >
              Ohne Eigenkapital. Mit Mietern und dem Finanzamt auf deiner Seite.
              Wir begleiten dich Schritt für Schritt zum eigenen
              Immobilienportfolio.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#C9974A] text-white font-semibold rounded-full text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,151,74,0.35)] hover:-translate-y-0.5"
              >
                <span className="relative z-10">
                  Kostenloses Strategiegespräch →
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#C9974A] via-[#DDB570] to-[#C9974A] bg-[length:200%] transition-all duration-500 group-hover:bg-right-center" />
              </a>
              <a
                href="#prozess"
                className="inline-flex items-center justify-center px-8 py-4 border border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-300 font-semibold text-sm rounded-full hover:border-[#C9974A] hover:text-[#C9974A] transition-all duration-200"
              >
                So funktioniert es
              </a>
            </motion.div>

            {/* Stars + rating */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex items-center gap-3"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[#C9974A] fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-stone-800 dark:text-stone-200 font-semibold text-sm">4,81 / 5</span>
              <span className="text-stone-400 text-sm">· 51 Bewertungen</span>
            </motion.div>
          </div>

          {/* Right column: full team image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Floating card — Rendite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute -bottom-5 -left-4 z-10 bg-white dark:bg-stone-800 rounded-2xl shadow-xl border border-stone-100 dark:border-stone-700 p-4 min-w-[148px]"
            >
              <p className="text-xs text-stone-400 mb-1">Ø Rendite p.a.</p>
              <p className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
                4–6%
                <span className="text-[#C9974A] text-sm ml-1">netto</span>
              </p>
              <div className="flex items-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs text-emerald-600 font-medium">
                  Inflationsgeschützt
                </span>
              </div>
            </motion.div>

            {/* Floating card — Steuer */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-5 -right-4 z-10 bg-[#C9974A] rounded-2xl shadow-xl p-4 text-white min-w-[130px]"
            >
              <p className="text-xs font-medium text-white/70 mb-1">
                Steuerersparnis
              </p>
              <p className="font-serif text-2xl font-bold">bis 50%</p>
              <p className="text-xs text-white/60 mt-1">AfA + Zinsen</p>
            </motion.div>

            {/* Main image — wider aspect ratio so full team fits */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-300/60 aspect-[16/10] border border-stone-200">
              <Image
                src="/team-group.png"
                alt="Das Team von SPARK Maklerservice"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 95vw, 600px"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/70 text-xs uppercase tracking-widest mb-0.5">
                  Das Team
                </p>
                <p className="text-white font-semibold text-sm">
                  SPARK Maklerservice · Kassel
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pb-16 lg:pb-20" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-stone-300 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#C9974A]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
