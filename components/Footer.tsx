import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4 inline-block bg-white rounded-lg px-3 py-2">
              <Image
                src="/logo.png"
                alt="SPARK Maklerservice"
                width={120}
                height={34}
                className="h-7 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-stone-400 mb-4">
              Immobilien-Investment-Beratung für Angestellte. IHK-zertifiziert,
              §34f GewO, §34d GewO.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9974A] inline-block" />
                IHK-zertifiziert
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9974A] inline-block" />
                §34f GewO
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9974A] inline-block" />
                §34d GewO
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Startseite" },
                { href: "/about", label: "Über uns" },
                { href: "/karriere", label: "Karriere" },
                { href: "/blog", label: "Blog" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-[#C9974A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Kontakt
            </h3>
            <address className="not-italic space-y-2 text-sm text-stone-400">
              <p>SPARK Maklerservice GmbH</p>
              <p>Brandaustraße 10</p>
              <p>34127 Kassel</p>
              <p className="pt-2">
                <a
                  href="tel:+4917632883789"
                  className="hover:text-[#C9974A] transition-colors flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0176 3288 3789
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@sparkmaklerservice.de"
                  className="hover:text-[#C9974A] transition-colors flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@sparkmaklerservice.de
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} SPARK Maklerservice GmbH. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="hover:text-[#C9974A] transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-[#C9974A] transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
