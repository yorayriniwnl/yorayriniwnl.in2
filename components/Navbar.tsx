"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Fixed outer wrapper */}
      <div
        className={`fixed top-4 inset-x-0 z-50 px-4 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left — profile avatar */}
          <Link href="/" className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden liquid-glass flex items-center justify-center">
              <span className="font-heading italic text-white text-lg select-none">
                A
              </span>
            </div>
          </Link>

          {/* Center — pill nav */}
          <nav className="hidden md:block liquid-glass rounded-full px-2 py-1.5">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      setActive(link.label);
                      scrollTo(link.href);
                    }}
                    className={`px-4 py-1.5 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                      active === link.label
                        ? "text-white bg-white/10"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — CTA buttons */}
          <div className="flex items-center gap-2">
            <Link
              href="/resume"
              className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full text-sm font-body font-medium text-white/70 hover:text-white liquid-glass transition-colors duration-200"
            >
              Resume
            </Link>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-body font-medium bg-white text-black hover:bg-white/90 transition-colors duration-200"
            >
              Contact
              <ArrowUpRight size={13} />
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden ml-1 p-2 rounded-full liquid-glass text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 liquid-glass-strong flex flex-col items-center justify-center gap-6"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => {
                  setActive(link.label);
                  scrollTo(link.href);
                }}
                className="font-heading italic text-white text-4xl hover:opacity-60 transition-opacity"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mt-4"
            >
              <Link
                href="/resume"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-2 rounded-full liquid-glass text-sm font-body text-white/70"
              >
                Resume
              </Link>
              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-1 px-5 py-2 rounded-full bg-white text-black text-sm font-body font-medium"
              >
                Contact <ArrowUpRight size={13} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
