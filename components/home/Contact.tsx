"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import { SITE_PROFILE } from "@/data/personal";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-[500px]">
      {/* Background video */}
      <video
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.4, filter: "saturate(0)" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/60" />
      {/* Top fade */}
      <div
        className="absolute top-0 inset-x-0 z-[2] h-[200px] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #000, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 py-32 px-6">
        <BlurText
          text="Let's build something."
          className="font-heading italic text-white text-center"
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            lineHeight: 0.9,
            letterSpacing: "-2px",
          } as React.CSSProperties}
          delay={100}
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-white/50 text-sm text-center max-w-sm"
        >
          Open to internships, collaborations, and interesting problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-3"
        >
          <Link
            href={`mailto:${SITE_PROFILE.email}`}
            className="liquid-glass-strong rounded-full px-8 py-3 font-body font-medium text-white text-sm flex items-center gap-2 hover:bg-white/5 transition-colors"
          >
            Get in Touch <ArrowUpRight size={14} />
          </Link>
          <Link
            href={SITE_PROFILE.resumeUrl}
            target="_blank"
            className="rounded-full px-8 py-3 bg-white text-black font-body font-medium text-sm flex items-center gap-2 hover:bg-white/90 transition-colors"
          >
            Download Resume <Download size={14} />
          </Link>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="relative z-10 border-t border-white/10 py-6 px-6 flex justify-between items-center max-w-6xl mx-auto">
        <span className="font-body text-white/30 text-xs">
          © 2026 Ayush Roy
        </span>
        <div className="flex items-center gap-4">
          <Link
            href={SITE_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </Link>
          <Link
            href={SITE_PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
