"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/about", label: "Über uns" },
  { href: "/karriere", label: "Karriere" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

const CALENDLY_URL =
  "https://calendly.com/ruslan-k-sparkmaklerservice/strategiegesprach-investment-in-vermietete-immo-hp";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Theme wechseln"
      className="w-9 h-9 rounded-full flex items-center justify-center border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:border-[#C9974A] transition-all duration-200 text-stone-600 dark:text-stone-300"
    >
      {isDark ? (
        <svg className="w-4 h-4 text-[#C9974A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 110 10A5 5 0 0112 7z" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-stone-950/95 backdrop-blur-sm shadow-sm border-b border-stone-100 dark:border-stone-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="SPARK Maklerservice"
              width={140}
              height={40}
              className="h-8 w-auto object-contain dark:brightness-0 dark:invert"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-[#C9974A] dark:hover:text-[#C9974A] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop: theme toggle + phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="tel:+4917632883789"
              className="flex items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400 hover:text-[#C9974A] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0176 3288 3789
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Strategiegespräch buchen
            </a>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Menü öffnen"
            >
              <span className={`block w-5 h-0.5 bg-stone-700 dark:bg-stone-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-stone-700 dark:bg-stone-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-stone-700 dark:bg-stone-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-stone-950 border-t border-stone-100 dark:border-stone-800 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-4 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-[#C9974A] hover:bg-stone-50 dark:hover:bg-stone-800 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 pb-1">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Strategiegespräch buchen
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
