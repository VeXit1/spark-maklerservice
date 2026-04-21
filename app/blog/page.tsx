import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog – Immobilien Kapitalanlage für Angestellte",
  description:
    "Ratgeber, Tipps und Strategien rund um Immobilien als Kapitalanlage für Angestellte. Steuern sparen, Rendite berechnen, richtig finanzieren.",
};

const fallbackArticles = [
  {
    slug: "erste-immobilie-als-angestellter",
    category: "Einsteiger",
    title: "Erste Immobilie als Angestellter: Der komplette Leitfaden für 2025",
    excerpt:
      "Wie kaufe ich meine erste Kapitalanlage-Immobilie ohne viel Eigenkapital? Dieser Leitfaden erklärt alle Schritte – von der Finanzierung bis zum Mieter.",
    date: "15. März 2025",
    coverImage:
      "https://ruslan-korzhuk.de/wp-content/uploads/2025/12/architecture-4357632_1920.jpg",
  },
  {
    slug: "steuervorteile-kapitalanlage-immobilien",
    category: "Steuern",
    title:
      "So sparst du bis zu 50% Steuern mit vermieteten Immobilien (AfA-Erklärung)",
    excerpt:
      "AfA, Zinsen, Renovierungskosten – das Finanzamt beteiligt sich an deiner Investition. Wir erklären, welche Posten du absetzen kannst.",
    date: "28. Februar 2025",
    coverImage:
      "https://ruslan-korzhuk.de/wp-content/uploads/2025/12/Unbenannt-1.png",
  },
  {
    slug: "immobilien-ohne-eigenkapital-kaufen",
    category: "Finanzierung",
    title:
      "Immobilien kaufen ohne Eigenkapital – wie das wirklich funktioniert",
    excerpt:
      "Vollfinanzierung ist möglich – aber nur unter bestimmten Voraussetzungen. Wir zeigen, wann die Bank mitmacht.",
    date: "10. Februar 2025",
    coverImage:
      "https://ruslan-korzhuk.de/wp-content/uploads/2025/12/Unbenannt-122.png",
  },
  {
    slug: "rendite-immobilien-berechnen",
    category: "Rendite",
    title: "Rendite bei Immobilien berechnen: Brutto, Netto & Eigenkapitalrendite einfach erklärt",
    excerpt: "Bruttomietrendite, Nettomietrendite, Eigenkapitalrendite – wir erklären alle drei Kennzahlen mit Rechenbeispielen und zeigen, welche wirklich zählt.",
    date: "10. April 2025",
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "immobilien-als-altersvorsorge",
    category: "Altersvorsorge",
    title: "Immobilien als Altersvorsorge: Warum vermietete Wohnungen die gesetzliche Rente ersetzen können",
    excerpt: "Die gesetzliche Rente reicht nicht. Wer heute als Angestellter investiert, kann sich mit einer oder zwei Immobilien eine sichere Zusatzrente aufbauen.",
    date: "25. März 2025",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "afa-absetzung-fuer-abnutzung",
    category: "Steuern",
    title: "AfA Immobilien einfach erklärt: So setzt du deine Wohnung von der Steuer ab",
    excerpt: "Die Absetzung für Abnutzung ist der mächtigste Steuervorteil für Immobilien-Investoren. Wir erklären, wie sie funktioniert und wie viel du sparst.",
    date: "18. März 2025",
    coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "beste-staedte-kapitalanlage-deutschland",
    category: "Standort",
    title: "Die besten Städte für Kapitalanlage-Immobilien in Deutschland 2025",
    excerpt: "Nicht jede Stadt eignet sich gleich gut für Immobilien-Investment. Wir zeigen, welche deutschen Städte 2025 die beste Kombination aus Rendite und Stabilität bieten.",
    date: "5. April 2025",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "immobilien-vs-aktien-vergleich",
    category: "Strategie",
    title: "Immobilien vs. Aktien: Was ist die bessere Kapitalanlage für Angestellte?",
    excerpt: "ETF oder Immobilie? Wir vergleichen ehrlich – Rendite, Risiko, Steuern, Aufwand – und zeigen, warum viele Angestellte beides kombinieren sollten.",
    date: "1. April 2025",
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
  },
];

export default async function BlogPage() {
  const posts = await getAllPosts();
  const articles = posts.length > 0 ? posts : fallbackArticles;

  return (
    <section className="pt-28 pb-20 bg-[#FBF8F4] dark:bg-stone-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">Blog</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-4">
            Wissen für Immobilien-Investoren
          </h1>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Praktische Ratgeber und Strategien für Angestellte, die in
            Immobilien investieren wollen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-stone-200">
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold bg-white/90 backdrop-blur-sm text-[#C9974A] px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-stone-400 mb-2">{post.date}</p>
                <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white mb-2 group-hover:text-[#C9974A] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
