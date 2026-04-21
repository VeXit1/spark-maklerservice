"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CALENDLY_URL =
  "https://calendly.com/ruslan-k-sparkmaklerservice/strategiegesprach-investment-in-vermietete-immo-hp";

const WHATSAPP_URL = "https://wa.me/4917632883789?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Strategiegespr%C3%A4ch.";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp floating button — desktop + mobile */}
      <AnimatePresence>
        {visible && (
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Kontakt"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-50 w-13 h-13 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform md:bottom-8 md:right-6"
            style={{ width: 52, height: 52 }}
          >
            <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white">
              <path d="M16.002 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.35.634 4.553 1.74 6.452L2.667 29.333l7.1-1.712A13.28 13.28 0 0016.002 29.333C23.365 29.333 29.333 23.362 29.333 16S23.365 2.667 16.002 2.667zm0 24.267a10.933 10.933 0 01-5.573-1.527l-.4-.237-4.214 1.016.985-4.112-.26-.42A10.934 10.934 0 015.067 16c0-6.04 4.895-10.933 10.935-10.933S26.935 9.96 26.935 16 22.04 26.934 16.002 26.934zm6.003-8.196c-.33-.165-1.95-.962-2.252-1.073-.303-.11-.523-.165-.743.165-.22.33-.852 1.073-1.044 1.294-.193.22-.385.247-.715.082-.33-.165-1.394-.514-2.656-1.638-.982-.875-1.645-1.955-1.838-2.285-.193-.33-.021-.508.145-.672.15-.148.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.743-1.788-1.018-2.45-.268-.643-.54-.555-.743-.565l-.633-.011c-.22 0-.578.082-.88.413-.302.33-1.155 1.128-1.155 2.751s1.183 3.19 1.348 3.41c.165.22 2.327 3.554 5.64 4.986.788.34 1.403.543 1.882.695.79.25 1.51.215 2.079.13.634-.094 1.95-.798 2.225-1.568.275-.77.275-1.43.193-1.567-.082-.137-.302-.22-.633-.385z" />
            </svg>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Sticky bottom bar — mobile only */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3.5 bg-[#C9974A] text-white font-semibold rounded-full text-sm tracking-wide hover:bg-[#A97A30] transition-colors"
            >
              Kostenloses Gespräch buchen →
            </a>
            <p className="text-center text-xs text-stone-400 mt-1.5">
              Kostenlos & unverbindlich · Online oder telefonisch
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
