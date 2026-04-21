"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  position: string;
  location: string;
}

const TOTAL_STEPS = 4;

function ProgressBar({ step }: { step: number }) {
  const labels = ["Persönliche Daten", "Frühster Beginn", "Vertriebserfahrung", "Lebenslauf"];
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-[#C9974A] uppercase tracking-wider">
          Schritt {step} / {TOTAL_STEPS}
        </span>
        <span className="text-xs text-stone-400">{labels[step - 1]}</span>
      </div>
      <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#C9974A] rounded-full"
          animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

const inputClass =
  "w-full border border-stone-200 dark:border-stone-600 rounded-xl px-4 py-3 text-sm text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#C9974A]/40 focus:border-[#C9974A] transition-all bg-white dark:bg-stone-800";
const textareaClass = inputClass + " resize-none";

export default function JobApplicationForm({ position, location }: Props) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    startDate: "",
    experience: "",
    experienceDetails: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);

  const set = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const canNext = () => {
    if (step === 1) return form.firstName && form.lastName && form.email && form.phone;
    if (step === 2) return !!form.startDate;
    if (step === 3) return !!form.experience;
    return true;
  };

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const submit = async () => {
    setLoading(true);
    setError("");
    try {
      const data = new FormData();
      data.append("position", position);
      data.append("location", location);
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      if (cvFile) data.append("cv", cvFile);

      const res = await fetch("/api/apply", { method: "POST", body: data });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Fehler beim Senden. Schreib uns direkt: info@sparkmaklerservice.de");
      }
    } catch {
      setError("Verbindungsfehler. Bitte erneut versuchen.");
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10"
      >
        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-white mb-2">Bewerbung eingegangen!</h3>
        <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
          Danke, <strong>{form.firstName}</strong>. Wir melden uns in Kürze bei dir.
        </p>
        <p className="text-stone-400 text-xs mt-3">{form.email}</p>
      </motion.div>
    );
  }

  return (
    <div>
      <ProgressBar step={step} />

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.22 }}
          className="space-y-4"
        >
          {/* Step 1 — Persönliche Daten */}
          {step === 1 && (
            <>
              <div className="mb-2">
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-white">Persönliche Daten</h3>
                <p className="text-stone-400 text-xs mt-0.5">Wie können wir dich erreichen?</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1">Vorname *</label>
                  <input type="text" placeholder="Max" value={form.firstName} onChange={set("firstName")} className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1">Nachname *</label>
                  <input type="text" placeholder="Mustermann" value={form.lastName} onChange={set("lastName")} className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1">E-Mail *</label>
                <input type="email" placeholder="max@beispiel.de" value={form.email} onChange={set("email")} className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1">Telefon *</label>
                <input type="tel" placeholder="+49 176 ..." value={form.phone} onChange={set("phone")} className={inputClass} />
              </div>
            </>
          )}

          {/* Step 2 — Frühster Beginn */}
          {step === 2 && (
            <>
              <div className="mb-2">
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-white">Frühster Beginn</h3>
                <p className="text-stone-400 text-xs mt-0.5">Wann könntest du bei uns starten?</p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1">Starttermin *</label>
                <select value={form.startDate} onChange={set("startDate")} className={inputClass}>
                  <option value="">Bitte wählen</option>
                  <option value="Sofort">Sofort</option>
                  <option value="Innerhalb von 1 Monat">Innerhalb von 1 Monat</option>
                  <option value="In 2–3 Monaten">In 2–3 Monaten</option>
                  <option value="In 3–6 Monaten">In 3–6 Monaten</option>
                  <option value="Nach Absprache">Nach Absprache</option>
                </select>
              </div>
              {form.startDate && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#C9974A]/10 border border-[#C9974A]/20 rounded-xl px-4 py-3 text-sm text-stone-700"
                >
                  <span className="font-semibold">Starttermin:</span> {form.startDate}
                </motion.div>
              )}
            </>
          )}

          {/* Step 3 — Vertriebserfahrung */}
          {step === 3 && (
            <>
              <div className="mb-2">
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-white">Vertriebserfahrung</h3>
                <p className="text-stone-400 text-xs mt-0.5">Erzähl uns von deinem Hintergrund.</p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1">Jahre Vertriebserfahrung *</label>
                <select value={form.experience} onChange={set("experience")} className={inputClass}>
                  <option value="">Bitte wählen</option>
                  <option value="Keine / Berufseinsteiger">Keine / Berufseinsteiger</option>
                  <option value="Unter 1 Jahr">Unter 1 Jahr</option>
                  <option value="1–3 Jahre">1–3 Jahre</option>
                  <option value="3–5 Jahre">3–5 Jahre</option>
                  <option value="Über 5 Jahre">Über 5 Jahre</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1">Details (optional)</label>
                <textarea
                  rows={4}
                  placeholder="Welche Branchen, Produkte oder Erfahrungen bringst du mit? ..."
                  value={form.experienceDetails}
                  onChange={set("experienceDetails")}
                  className={textareaClass}
                />
              </div>
            </>
          )}

          {/* Step 4 — Lebenslauf */}
          {step === 4 && (
            <>
              <div className="mb-2">
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-white">Lebenslauf hochladen</h3>
                <p className="text-stone-400 text-xs mt-0.5">PDF oder Word-Datei, max. 5 MB.</p>
              </div>

              <input
                ref={fileRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0] ?? null;
                  setCvFile(f);
                  setFileName(f?.name ?? "");
                }}
              />

              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="w-full border-2 border-dashed border-stone-200 rounded-2xl p-8 text-center hover:border-[#C9974A]/50 hover:bg-[#C9974A]/5 transition-all group"
              >
                {fileName ? (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-stone-800">{fileName}</p>
                    <p className="text-xs text-stone-400">Klicken zum Ändern</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-[#C9974A]/10 transition-colors">
                      <svg className="w-5 h-5 text-stone-400 group-hover:text-[#C9974A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-stone-700 group-hover:text-[#C9974A]">Datei auswählen</p>
                    <p className="text-xs text-stone-400">PDF, DOC, DOCX · max. 5 MB</p>
                  </div>
                )}
              </button>

              {/* Summary */}
              <div className="bg-[#FBF8F4] dark:bg-stone-900 rounded-xl p-4 border border-stone-100 dark:border-stone-700 text-xs space-y-1.5 mt-2">
                <p className="font-semibold text-stone-600 mb-2 text-xs uppercase tracking-wider">Zusammenfassung</p>
                {[
                  ["Name", `${form.firstName} ${form.lastName}`],
                  ["E-Mail", form.email],
                  ["Telefon", form.phone],
                  ["Starttermin", form.startDate],
                  ["Vertriebserfahrung", form.experience],
                ].map(([l, v]) => (
                  <div key={l} className="flex gap-2">
                    <span className="text-stone-400 dark:text-stone-500 w-28 shrink-0">{l}</span>
                    <span className="text-stone-700 dark:text-stone-200 font-medium">{v}</span>
                  </div>
                ))}
              </div>

              {error && (
                <p className="text-red-500 text-xs bg-red-50 rounded-xl px-4 py-3 border border-red-100">{error}</p>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-7 pt-5 border-t border-stone-100">
        <button
          onClick={back}
          disabled={step === 1}
          className="px-5 py-2.5 text-sm font-semibold text-stone-400 hover:text-stone-700 disabled:invisible transition-colors"
        >
          ← Zurück
        </button>
        {step < TOTAL_STEPS ? (
          <button
            onClick={next}
            disabled={!canNext()}
            className="px-7 py-3 bg-[#C9974A] text-white font-semibold rounded-full text-sm hover:bg-[#A97A30] disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:-translate-y-0.5"
          >
            Weiter →
          </button>
        ) : (
          <button
            onClick={submit}
            disabled={loading}
            className="px-7 py-3 bg-[#C9974A] text-white font-semibold rounded-full text-sm hover:bg-[#A97A30] disabled:opacity-60 transition-all hover:-translate-y-0.5 flex items-center gap-2"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Wird gesendet…
              </>
            ) : "Jetzt bewerben ✓"}
          </button>
        )}
      </div>
    </div>
  );
}
