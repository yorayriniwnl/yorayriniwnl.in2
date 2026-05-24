"use client";

import { motion } from "framer-motion";
import { SITE_PROFILE } from "@/data/personal";

const BELIEFS = [
  { n: "01", title: "Build to ship.",      body: "Production-ready from day one. No demos that never deploy." },
  { n: "02", title: "Make it human.",      body: "Interfaces should feel alive — not just functional."       },
  { n: "03", title: "Own the stack.",      body: "Depth over breadth. Understand everything you build."      },
];

const METRICS = [
  { val: "9",    label: "Projects shipped"    },
  { val: "3",    label: "Hackathons competed" },
  { val: "2027", label: "Graduation year"     },
  { val: "9+",   label: "Public repos"        },
];

const FACTS = [
  { tag: "KIIT",  text: "CS & Communication Engineering · class of 2027"      },
  { tag: "HACK",  text: "3 hackathons — competed, shipped, learned"            },
  { tag: "SOLAR", text: "Yor Zenith — full-stack solar planning platform"      },
  { tag: "MUS",   text: "Piano · Guitar · Chess · Rubik's Cube"               },
  { tag: "BSG",   text: "Bharat Scouts & Guides — Pratham through Tritiya Sopan"},
  { tag: "LOC",   text: "Based in India · open to remote collaboration"        },
];

const iFade = {
  hidden: { opacity: 0, y: 24 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.22,1,0.36,1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-28 px-6" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* ── Left ──────────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="flex flex-col gap-10"
        >
          <motion.span custom={0} variants={iFade} className="label">About</motion.span>

          <motion.h2
            custom={0.06}
            variants={iFade}
            className="font-heading italic text-white"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4rem)", lineHeight: 0.92 }}
          >
            Ayush Roy.<br />Developer.<br />Builder.
          </motion.h2>

          <motion.p
            custom={0.14}
            variants={iFade}
            className="font-body font-light leading-[1.88] max-w-md"
            style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)", color: "var(--dim-3)" }}
          >
            {SITE_PROFILE.bio}
          </motion.p>

          {/* Beliefs */}
          <motion.div
            custom={0.22}
            variants={iFade}
            className="flex flex-col gap-6 pt-8"
            style={{ borderTop: "1px solid var(--border-dim)" }}
          >
            {BELIEFS.map((b) => (
              <div key={b.n} className="flex items-start gap-5">
                <span className="label w-6 shrink-0 mt-0.5 tabular-nums">{b.n}</span>
                <div className="flex flex-col gap-0.5">
                  <p className="font-body font-medium text-sm" style={{ color: "var(--dim-4)" }}>
                    {b.title}
                  </p>
                  <p className="font-body text-xs leading-relaxed" style={{ color: "var(--dim-2)" }}>
                    {b.body}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right ─────────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="flex flex-col gap-7"
        >
          {/* Metric table — editorial, not cliché grid */}
          <motion.div
            custom={0.08}
            variants={iFade}
            className="flex flex-col"
            style={{ borderTop: "1px solid var(--border-dim)" }}
          >
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className="flex items-baseline justify-between py-4 group"
                style={{ borderBottom: "1px solid var(--border-dim)" }}
              >
                <span
                  className="font-heading italic leading-none group-hover:text-white transition-colors duration-200"
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                    color: i === 0 ? "var(--fg)" : "var(--dim-4)",
                  }}
                >
                  {m.val}
                </span>
                <span className="label group-hover:text-white/40 transition-colors duration-200">
                  {m.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Facts */}
          <motion.div custom={0.18} variants={iFade} className="flex flex-col gap-1.5">
            {FACTS.map((f) => (
              <div
                key={f.tag}
                className="card rounded-xl px-4 py-3 flex items-start gap-4"
              >
                <span className="label w-9 shrink-0 tabular-nums">{f.tag}</span>
                <span className="font-body text-xs leading-relaxed" style={{ color: "var(--dim-2)" }}>
                  {f.text}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
