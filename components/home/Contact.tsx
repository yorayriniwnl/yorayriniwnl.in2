"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { SITE_PROFILE } from "@/data/personal";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black">
      {/* Video */}
      <video
        src={HERO_VIDEO}
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ opacity: 0.08, filter: "saturate(0.06) contrast(1.3)" }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #000 0%, transparent 22%, transparent 78%, #000 100%)" }}
      />
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, transparent 25%, rgba(0,0,0,0.7) 100%)" }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center py-32 md:py-40 px-6 gap-7">

        <motion.span
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="label"
        >
          Let&apos;s work together
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.95, ease: [0.22,1,0.36,1] }}
          className="font-heading italic text-white max-w-3xl"
          style={{ fontSize: "clamp(3rem, 8.5vw, 6.5rem)", lineHeight: 0.88, letterSpacing: "-0.03em" }}
        >
          Let&apos;s build<br />something.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-sm max-w-xs leading-relaxed"
          style={{ color: "var(--dim-2)" }}
        >
          Open to internships, collaborations, and interesting problems.
        </motion.p>

        {/* Email */}
        <motion.a
          href={`mailto:${SITE_PROFILE.email}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="group flex items-center gap-2 font-body text-sm transition-colors duration-200"
          style={{
            color: "var(--dim-3)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            paddingBottom: 3,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--dim-3)")}
        >
          <Mail size={13} style={{ opacity: 0.6 }} />
          {SITE_PROFILE.email}
        </motion.a>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-3 mt-1"
        >
          <Link
            href={`mailto:${SITE_PROFILE.email}`}
            className="btn-outline rounded-full px-8 py-3 font-body font-medium text-sm flex items-center gap-2"
          >
            Get in Touch <ArrowUpRight size={13} />
          </Link>
          <Link
            href={SITE_PROFILE.resumeUrl}
            target="_blank"
            className="rounded-full px-8 py-3 bg-white text-black font-body font-medium text-sm flex items-center gap-2 hover:bg-white/88 transition-colors"
          >
            Resume <Download size={13} />
          </Link>
        </motion.div>
      </div>

      {/* Footer strip */}
      <div
        className="relative z-10 py-6 px-6 flex justify-between items-center max-w-6xl mx-auto"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="label" style={{ color: "rgba(255,255,255,0.16)" }}>
          © 2026 Ayush Roy
        </span>
        <div className="flex items-center gap-5">
          <Link
            href={SITE_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white/60"
            style={{ color: "rgba(255,255,255,0.18)" }}
            aria-label="GitHub"
          >
            <Github size={15} />
          </Link>
          <Link
            href={SITE_PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white/60"
            style={{ color: "rgba(255,255,255,0.18)" }}
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
