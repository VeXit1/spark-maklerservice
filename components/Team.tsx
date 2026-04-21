"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const teamMembers = [
  {
    name: "Ruslan Korzhuk",
    role: "Geschäftsführer",
    description:
      "Ruslan ist Immobilienexperte mit über 8 Jahren Erfahrung im Bereich Kapitalanlageimmobilien. Er hat selbst ein Portfolio aufgebaut und teilt sein Wissen mit Angestellten, die denselben Weg gehen möchten.",
    image:
      "https://ruslan-korzhuk.de/wp-content/uploads/2025/10/DSC04212-scaled.jpg",
    licenses: ["IHK", "§34f GewO", "§34d GewO"],
    phone: "+49 176 32883789",
    email: "ruslan.k@sparkmaklerservice.de",
  },
  {
    name: "Erika Thereschenko",
    role: "Social Media Managerin",
    description:
      "Erika sorgt für die gesamte Social-Media-Präsenz von SPARK – von Content-Strategie bis zur Community-Betreuung. Sie macht Immobilienthemen auf Instagram & Co. greifbar und sichtbar.",
    image:
      "https://ruslan-korzhuk.de/wp-content/uploads/2025/10/DSC03966-scaled.jpg",
    licenses: [],
    phone: null,
    email: "e.tereschenko@sparkmaklerservice.de",
  },
  {
    name: "Maksim Suras",
    role: "IT-Manager",
    description:
      "Maksim verantwortet die gesamte IT-Infrastruktur bei SPARK. Von der Website bis zu internen Prozessen – er sorgt dafür, dass alles technisch reibungslos läuft.",
    image:
      "https://ruslan-korzhuk.de/wp-content/uploads/2025/10/DSC04447-scaled.png",
    licenses: [],
    phone: "+49 176 47065212",
    email: "m.suras@sparkmaklerservice.de",
  },
  {
    name: "Nico Böhmelt",
    role: "Assistenz der Geschäftsleitung",
    description:
      "Nico unterstützt die Geschäftsleitung in allen operativen Bereichen – von der Kundenbetreuung bis zur Koordination interner Abläufe. Er ist oft der erste Ansprechpartner für neue Interessenten.",
    image:
      "https://ruslan-korzhuk.de/wp-content/uploads/2025/10/DSC04242-scaled.jpg",
    licenses: [],
    phone: "+49 1512 6877365",
    email: "n.boehmelt@sparkmaklerservice.de",
  },
  {
    name: "Lena Höltje",
    role: "Backoffice Managerin",
    description:
      "Lena hält im Hintergrund alles zusammen: Buchhaltung, Dokumentenmanagement und administrative Prozesse. Ohne sie läuft bei SPARK nichts.",
    image:
      "https://ruslan-korzhuk.de/wp-content/uploads/2025/10/DSC04300-scaled.jpg",
    licenses: [],
    phone: null,
    email: "buchhaltung@sparkmaklerservice.de",
  },
];

export default function Team() {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF8F4] dark:bg-stone-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Das Team</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white mb-4">
            Menschen, die du kennst,{" "}
            <br className="hidden sm:block" />
            bevor du investierst
          </h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto text-lg">
            Kein anonymes Unternehmen. Echte Menschen mit Gesicht, Namen und
            persönlicher Erreichbarkeit.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`group bg-white dark:bg-stone-800 rounded-3xl overflow-hidden shadow-sm border border-stone-100 dark:border-stone-700 hover:shadow-md transition-all duration-300 ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent" />
                {member.licenses.length > 0 && (
                  <div className="absolute bottom-3 left-3 flex gap-1 flex-wrap">
                    {member.licenses.map((lic) => (
                      <span
                        key={lic}
                        className="text-[10px] font-semibold bg-[#C9974A] text-white px-2 py-0.5 rounded-full"
                      >
                        {lic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-0.5">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#C9974A] uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                <div className="space-y-1.5 border-t border-stone-100 dark:border-stone-700 pt-4">
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-xs text-stone-500 hover:text-[#C9974A] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {member.phone}
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-xs text-stone-500 hover:text-[#C9974A] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {member.email}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
