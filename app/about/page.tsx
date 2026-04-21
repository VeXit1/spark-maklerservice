import type { Metadata } from "next";
import Team from "@/components/Team";
import CTASection from "@/components/CTASection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lerne das Team hinter SPARK Maklerservice kennen. IHK-zertifizierte Berater für Kapitalanlage-Immobilien in Deutschland.",
};

const values = [
  {
    title: "Transparenz",
    description:
      "Wir erklären alles – Kosten, Risiken, Renditen – bevor du eine Entscheidung triffst. Kein Kleingedrucktes.",
  },
  {
    title: "Kompetenz",
    description:
      "IHK-zertifiziert, §34f & §34d GewO zugelassen. Wir wissen, worüber wir sprechen – und haben selbst Immobilien.",
  },
  {
    title: "Partnerschaft",
    description:
      "Du bist kein einmaliger Kunde. Wir begleiten dich langfristig – beim ersten, zweiten und dritten Objekt.",
  },
  {
    title: "Ergebnisorientierung",
    description:
      "Wir werden nur empfohlen, wenn du zufrieden bist. 100% Empfehlungsquote ist unser Anspruch – und unser Ergebnis.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-[#FBF8F4] dark:bg-stone-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag">Über SPARK</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-6 leading-tight">
                Wir helfen Angestellten,{" "}
                <span className="text-[#C9974A]">
                  finanziell unabhängig
                </span>{" "}
                zu werden
              </h1>
              <p className="text-stone-600 dark:text-stone-300 text-lg leading-relaxed mb-6">
                SPARK Maklerservice wurde gegründet mit einer klaren Mission:
                Angestellte mit gutem Einkommen dabei zu unterstützen,
                systematisch ein Immobilienportfolio aufzubauen – ohne
                Eigenkapital, mit maximaler Steueroptimierung und
                null Stress.
              </p>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-8">
                Unser Gründer Ruslan Korzhuk hat selbst diesen Weg gegangen und
                kennt jede Hürde aus eigener Erfahrung. Heute begleitet sein
                Team über 500 Investoren – vom Lehrer bis zum Ingenieur.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "500+", label: "Investoren" },
                  { value: "8 Jahre", label: "Erfahrung" },
                  { value: "4,81/5", label: "Bewertung" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-serif text-2xl font-bold text-[#C9974A]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-stone-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/team-group.png"
                  alt="Das Team von SPARK Maklerservice"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-stone-800 rounded-2xl shadow-lg p-4 border border-stone-100 dark:border-stone-700">
                <p className="text-xs text-stone-500 mb-1">Gegründet</p>
                <p className="font-serif text-xl font-bold text-stone-900 dark:text-white">
                  Kassel, 2017
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-stone-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Unsere Werte</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
              Was uns antreibt
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="bg-[#FBF8F4] dark:bg-stone-800 rounded-2xl p-6 border border-stone-100 dark:border-stone-700"
              >
                <div className="w-8 h-8 rounded-full bg-[#C9974A] flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

<Team />
      <CTASection />
    </>
  );
}
