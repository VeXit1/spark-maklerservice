"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const articles = [
  {
    slug: "erste-immobilie-als-angestellter",
    category: "Einsteiger",
    title: "Erste Immobilie als Angestellter: Der komplette Leitfaden für 2025",
    excerpt:
      "Wie kaufe ich meine erste Kapitalanlage-Immobilie ohne viel Eigenkapital? Dieser Leitfaden erklärt alle Schritte – von der Finanzierung bis zum Mieter.",
    date: "15. März 2025",
    readTime: "8 Min.",
    image:
      "https://ruslan-korzhuk.de/wp-content/uploads/2025/12/architecture-4357632_1920.jpg",
  },
  {
    slug: "steuervorteile-kapitalanlage-immobilien",
    category: "Steuern",
    title:
      "So sparst du bis zu 50% Steuern mit vermieteten Immobilien (AfA-Erklärung)",
    excerpt:
      "AfA, Zinsen, Renovierungskosten – das Finanzamt beteiligt sich an deiner Investition. Wir erklären, welche Posten du absetzen kannst und wie viel du sparst.",
    date: "28. Februar 2025",
    readTime: "6 Min.",
    image:
      "https://ruslan-korzhuk.de/wp-content/uploads/2025/12/Unbenannt-1.png",
  },
  {
    slug: "immobilien-ohne-eigenkapital-kaufen",
    category: "Finanzierung",
    title: "Immobilien kaufen ohne Eigenkapital – wie das wirklich funktioniert",
    excerpt:
      "Vollfinanzierung ist möglich – aber nur unter bestimmten Voraussetzungen. Wir zeigen, wann die Bank mitmacht und wie du dich optimal vorbereitest.",
    date: "10. Februar 2025",
    readTime: "7 Min.",
    image:
      "https://ruslan-korzhuk.de/wp-content/uploads/2025/12/Unbenannt-122.png",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="section-tag">Wissen</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
              Lerne, bevor du kaufst
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#C9974A] hover:underline shrink-0"
          >
            Alle Artikel ansehen →
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <Link href={`/blog/${article.slug}`} className="group block">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-stone-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold bg-white/90 backdrop-blur-sm text-[#C9974A] px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-stone-400 dark:text-stone-500 mb-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime} Lesezeit</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-2 group-hover:text-[#C9974A] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
