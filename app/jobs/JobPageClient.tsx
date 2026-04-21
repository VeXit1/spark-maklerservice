"use client";

import { motion } from "framer-motion";
import JobApplicationForm from "@/components/JobApplicationForm";

interface Props {
  title: string;
  subtitle: string;
  type: string;
  location: string;
  employment: string;
  intro: string;
  description: string;
  roleDescription: string;
  tasks: string[];
  offers: string[];
  profile: string[];
  process: string[];
  discretion: string;
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
      <svg className="w-4 h-4 text-[#C9974A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
      {text}
    </li>
  );
}

export default function JobPageClient({
  title, subtitle, type, location, employment,
  intro, description, roleDescription,
  tasks, offers, profile, process, discretion,
}: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-stone-900 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C9974A]/8 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#C9974A 1px, transparent 1px), linear-gradient(to right, #C9974A 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="/karriere"
              className="inline-flex items-center gap-2 text-stone-400 text-sm hover:text-[#C9974A] transition-colors mb-6"
            >
              ← Alle Stellen
            </a>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {title}
              <br />
              <span className="text-[#C9974A]">– {subtitle}</span>
            </h1>
            <div className="flex flex-wrap gap-3 mt-5">
              {[
                { icon: "🏢", label: type },
                { icon: "📍", label: location },
                { icon: "⏱", label: employment },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-stone-300 text-xs font-medium px-4 py-2 rounded-full"
                >
                  <span>{tag.icon}</span> {tag.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content + Form */}
      <div className="bg-[#FBF8F4] dark:bg-stone-950 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-14 items-start">

            {/* Left: Job description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-10"
            >
              {/* Intro */}
              <div>
                <p className="text-lg font-semibold text-stone-800 dark:text-white mb-3">{intro}</p>
                {description.split("\n\n").map((para, i) => (
                  <p key={i} className="text-stone-600 dark:text-stone-300 leading-relaxed mb-3 text-sm">{para}</p>
                ))}
              </div>

              {/* Rolle */}
              <div>
                <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-white mb-3">Deine Rolle bei SPARK</h2>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">{roleDescription}</p>
              </div>

              {/* Aufgaben */}
              <div>
                <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-white mb-4">Was dich erwartet</h2>
                <ul className="space-y-3">
                  {tasks.map((t) => <CheckItem key={t} text={t} />)}
                </ul>
              </div>

              {/* Was wir bieten */}
              <div>
                <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-white mb-4">Was wir dir bieten</h2>
                <ul className="space-y-3">
                  {offers.map((o) => <CheckItem key={o} text={o} />)}
                </ul>
              </div>

              {/* Profil */}
              <div>
                <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-white mb-4">Wen wir suchen</h2>
                <ul className="space-y-3">
                  {profile.map((p) => <CheckItem key={p} text={p} />)}
                </ul>
                <div className="mt-5 bg-[#C9974A]/10 border border-[#C9974A]/20 rounded-2xl p-5 text-sm text-stone-700 dark:text-stone-200">
                  <p className="font-semibold text-stone-800 dark:text-white mb-1">Passt nicht zu 100%?</p>
                  Vielleicht erfüllst du nicht jeden Punkt oder kommst aus einem angrenzenden Bereich.
                  Wenn dich die Aufgabe anspricht, freuen wir uns trotzdem über deine Bewerbung.
                </div>
              </div>

              {/* Diskretion */}
              <div className="bg-stone-100 dark:bg-stone-800 rounded-2xl p-5 text-sm text-stone-600 dark:text-stone-300 flex items-start gap-3">
                <span className="text-lg shrink-0">🔒</span>
                <div>
                  <p className="font-semibold text-stone-800 dark:text-white mb-1">Diskretion ist selbstverständlich</p>
                  {discretion}
                </div>
              </div>

              {/* Bewerbungsprozess */}
              <div>
                <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-white mb-5">So läuft der Bewerbungsprozess ab</h2>
                <ol className="space-y-4">
                  {process.map((step, i) => (
                    <li key={step} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-[#C9974A] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed pt-0.5">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>

            {/* Right: Sticky form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-28"
            >
              <div className="bg-white dark:bg-stone-900 rounded-3xl border border-stone-100 dark:border-stone-700 shadow-md p-7">
                <div className="mb-6">
                  <span className="inline-block text-xs font-semibold tracking-[0.12em] uppercase text-[#C9974A] mb-2">
                    Jetzt bewerben
                  </span>
                  <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-white">
                    {title}
                  </h2>
                  <p className="text-stone-400 dark:text-stone-400 text-sm mt-1">{subtitle} · {employment}</p>
                </div>
                <JobApplicationForm position={title} location={subtitle} />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}
