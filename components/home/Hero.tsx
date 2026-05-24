"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import Link from "next/link";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-black"
      style={{ height: "100vh", minHeight: 700 }}
    >
      {/* Background video */}
      <video
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-auto object-contain z-0"
        style={{ top: "15%", opacity: 0.7 }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-black/20" />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to top, #000 0%, transparent 40%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center gap-6 px-6"
        style={{ paddingTop: 140 }}
      >
        {/* Badge */}
        <div className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
          <span className="font-body text-xs text-white/70">
            Full-Stack Developer · Open to Internships
          </span>
        </div>

        {/* Heading */}
        <BlurText
          text="Building Things That Work."
          className="font-heading italic text-white text-center max-w-4xl"
          style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            lineHeight: 0.85,
            letterSpacing: "-3px",
          } as React.CSSProperties}
          delay={90}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-body font-light text-white/50 text-base md:text-lg text-center max-w-xl leading-relaxed"
        >
          Full-stack developer at KIIT. I build Next.js products, Python
          backends, realtime dashboards, and computer-vision tools.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-3"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="liquid-glass-strong rounded-full px-6 py-2.5 font-body font-medium text-white text-sm flex items-center gap-2 hover:bg-white/5 transition-colors"
          >
            View My Work
            <ArrowDown size={14} />
          </button>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="rounded-full px-6 py-2.5 bg-white text-black font-body font-medium text-sm flex items-center gap-2 hover:bg-white/90 transition-colors"
          >
            Download Resume
            <Download size={14} />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center z-10 opacity-40">
        <div className="animate-bounce-down">
          <ArrowDown size={18} className="text-white" />
        </div>
      </div>
    </section>
  );
}
