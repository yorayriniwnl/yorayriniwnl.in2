"use client";

import { motion } from "framer-motion";
import { HOME_EXPERIENCE_ITEMS } from "@/data/home";

const kindStyle: Record<string, string> = {
  Verified: "text-emerald-400/80 border border-emerald-400/20",
  Education: "text-sky-400/80 border border-sky-400/20",
};

export default function Experience() {
  return (
    <section id="experience" className="bg-black py-32 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-14 text-center">
          <span className="liquid-glass rounded-full px-3 py-1 text-xs font-body text-white/50">
            Background
          </span>
          <h2 className="font-heading italic text-white text-4xl md:text-5xl">
            Where I&apos;ve been.
          </h2>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-4">
          {HOME_EXPERIENCE_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="liquid-glass rounded-2xl p-6"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-heading italic text-white text-xl leading-snug">
                  {item.title}
                </h3>
                <span
                  className={`flex-shrink-0 liquid-glass rounded-full px-2 py-0.5 text-[10px] font-body ${
                    kindStyle[item.kind] ?? "text-white/50"
                  }`}
                >
                  {item.kind}
                </span>
              </div>

              {/* Meta */}
              <p className="font-body text-white/40 text-xs mb-3">
                {item.org} &nbsp;·&nbsp; {item.date}
              </p>

              {/* Summary */}
              <p className="font-body text-white/50 text-sm leading-relaxed mb-3">
                {item.summary}
              </p>

              {/* Bullets */}
              <ul className="flex flex-col gap-1.5">
                {item.bullets.map((b, j) => (
                  <li key={j} className="font-body text-white/40 text-xs flex gap-2">
                    <span className="opacity-50 flex-shrink-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
