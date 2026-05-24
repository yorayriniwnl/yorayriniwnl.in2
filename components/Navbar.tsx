"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Projects",   href: "#projects"  },
  { label: "Skills",     href: "#skills"    },
  { label: "About",      href: "#about"     },
  { label: "Contact",    href: "#contact"   },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href === "/") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Desktop nav ───────────────────────────────────────────────── */}
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          background: scrolled ? "rgba(0,0,0,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">

          {/* Left — wordmark */}
          <button
            onClick={() => scrollTo("/")}
            className="font-heading italic text-white/60 hover:text-white/90 transition-colors duration-200"
            style={{ fontSize: "0.92rem", letterSpacing: "-0.01em" }}
          >
            Ayush Roy.
          </button>

          {/* Center — nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="label hover:text-white/55 transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-5">
            {/* Availability indicator */}
            <div className="hidden md:flex items-center gap-1.5">
              <span
                className="pulse-dot inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"
              />
              <span className="label" style={{ color: "rgba(255,255,255,0.22)" }}>
                Available
              </span>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden label text-white/40 hover:text-white/70 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col"
            style={{ borderRight: "none" }}
          >
            {/* Close */}
            <div className="flex justify-between items-center px-6 h-14">
              <span className="font-heading italic text-white/50" style={{ fontSize: "0.92rem" }}>
                Ayush Roy.
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white/40 hover:text-white/80 transition-colors"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col justify-center flex-1 px-8 gap-6 pb-16">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22,1,0.36,1] }}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                  className="pb-5"
                >
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-heading italic text-white/75 hover:text-white transition-colors"
                    style={{ fontSize: "clamp(2rem, 8vw, 3rem)" }}
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Footer row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.4 }}
              className="px-8 pb-10 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="label" style={{ color: "rgba(255,255,255,0.22)" }}>
                  Available for internships
                </span>
              </div>
              <button
                onClick={() => scrollTo("#contact")}
                className="label flex items-center gap-1 text-white/35 hover:text-white/65 transition-colors"
              >
                Contact <ArrowUpRight size={10} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
