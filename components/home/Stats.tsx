"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

const STATS = [
  { value: 9,    suffix: "+", label: "Projects Built" },
  { value: 3,    suffix: "",  label: "Hackathons Shipped" },
  { value: 2027, suffix: "",  label: "Graduating" },
  { value: 9,    suffix: "",  label: "Public Repos" },
]

function CountingNumber({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const val = useMotionValue(0);
  const rounded = useTransform(val, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(val, target, {
      duration: 1.4,
      ease: "easeOut",
    });
    return ctrl.stop;
  }, [inView, target, val]);

  return (
    <span>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative overflow-hidden">
      {/* Background video */}
      <video
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "saturate(0) brightness(0.3)" }}
      />

      {/* Top fade */}
      <div
        className="absolute top-0 inset-x-0 z-[1] h-[150px] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #000, transparent)" }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 z-[1] h-[150px] pointer-events-none"
        style={{ background: "linear-gradient(to top, #000, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 py-24 px-6 flex justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="liquid-glass-strong rounded-3xl max-w-4xl w-full p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading italic text-white text-6xl md:text-7xl leading-none">
                  <CountingNumber
                    target={s.value}
                    suffix={s.suffix}
                    inView={inView}
                  />
                </p>
                <p className="font-body text-white/40 text-xs mt-3 uppercase tracking-widest">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
