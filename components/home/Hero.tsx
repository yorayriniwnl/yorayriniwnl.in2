"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

const ALL_CHARS = ["A","y","u","s","h","\u00A0","R","o","y"];

const letterVariants = {
  hidden:  { opacity: 0, y: 60, skewY: 5 },
  visible: (i: number) => ({
    opacity: 1, y: 0, skewY: 0,
    transition: { duration: 0.9, delay: 0.1 + i * 0.06, ease: [0.22,1,0.36,1] },
  }),
};

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  const videoRef   = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const ruleRef    = useRef<HTMLSpanElement>(null);

  /* Subtle mouse parallax on video */
  useEffect(() => {
    const section = sectionRef.current;
    const video   = videoRef.current;
    if (!section || !video) return;

    let ticking = false;
    const onMove = (e: MouseEvent) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const cx = window.innerWidth  / 2;
        const cy = window.innerHeight / 2;
        const dx = ((e.clientX - cx) / cx) * 12;
        const dy = ((e.clientY - cy) / cy) * 8;
        video.style.transform = `translate(${dx}px, ${dy}px) scale(1.05)`;
        ticking = false;
      });
    };
    section.addEventListener("mousemove", onMove, { passive: true });
    return () => section.removeEventListener("mousemove", onMove);
  }, []);

  /* Trigger rule draw after name animation completes */
  useEffect(() => {
    const t = setTimeout(() => {
      ruleRef.current?.classList.add("drawn");
    }, 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black"
      style={{ height: "100vh", minHeight: 680 }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{
          objectFit: "cover",
          opacity: 0.11,
          filter: "saturate(0.08) contrast(1.25)",
          transition: "transform 1.1s cubic-bezier(0.25,0.46,0.45,0.94)",
          willChange: "transform",
        }}
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 30%, transparent 55%, rgba(0,0,0,1) 100%)" }}
      />
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, transparent 28%, transparent 72%, rgba(0,0,0,0.65) 100%)" }}
      />

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-14 lg:px-20"
        style={{ paddingTop: 72 }}>

        {/* Vertical label — right side */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden lg:block"
          style={{ pointerEvents: "none" }}>
          <span
            className="text-vertical label"
            style={{ color: "rgba(255,255,255,0.12)", letterSpacing: "0.28em" }}
          >
            Full-Stack Developer · KIIT 2027
          </span>
        </div>

        {/* Year / role pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mb-8 flex items-center gap-2.5"
        >
          <span className="label" style={{ color: "rgba(255,255,255,0.22)" }}>
            2025 — 2026
          </span>
          <span style={{ width: 24, height: 1, background: "rgba(255,255,255,0.14)", display: "inline-block" }} />
          <span className="label" style={{ color: "rgba(255,255,255,0.22)" }}>
            Open to internships
          </span>
        </motion.div>

        {/* Name */}
        <h1
          aria-label="Ayush Roy."
          className="flex flex-wrap overflow-hidden mb-0"
          style={{
            fontSize: "clamp(4rem, 10.5vw, 9.5rem)",
            lineHeight: 0.87,
            letterSpacing: "-0.04em",
          }}
        >
          {ALL_CHARS.map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="font-heading italic text-white inline-block"
            >
              {char}
            </motion.span>
          ))}
          {/* Accent period */}
          <motion.span
            initial={{ opacity: 0, y: 60, skewY: 5 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ duration: 0.9, delay: 0.1 + ALL_CHARS.length * 0.06, ease: [0.22,1,0.36,1] }}
            className="font-heading italic inline-block"
            style={{ color: "var(--accent)" }}
          >
            .
          </motion.span>
        </h1>

        {/* Drawing rule */}
        <span
          ref={ruleRef}
          className="rule-draw mt-7 mb-7"
          style={{ maxWidth: "min(480px, 55vw)" }}
        />

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="font-body font-light max-w-sm leading-relaxed mb-9"
          style={{ fontSize: "clamp(0.88rem, 1.6vw, 1.05rem)", color: "var(--dim-3)" }}
        >
          Next.js products, Python backends,<br />
          realtime dashboards, computer-vision tools.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.12 }}
          className="flex items-center gap-4"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="btn-outline rounded-full px-6 py-2.5 font-body font-medium text-sm flex items-center gap-2"
          >
            View Work <ArrowDown size={13} />
          </button>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="rounded-full px-6 py-2.5 bg-white text-black font-body font-medium text-sm flex items-center gap-2 hover:bg-white/88 transition-colors"
          >
            Resume <Download size={13} />
          </Link>
        </motion.div>

        {/* Scroll cue — bottom center */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-10 left-6 md:left-14 lg:left-20 animate-bounce-down"
        >
          <ArrowDown size={14} style={{ color: "rgba(255,255,255,0.18)" }} />
        </motion.div>
      </div>
    </section>
  );
}
