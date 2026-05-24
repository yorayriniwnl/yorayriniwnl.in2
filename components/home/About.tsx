"use client";

import { motion } from "framer-motion";
import { SITE_PROFILE } from "@/data/personal";

const PHILOSOPHY = [
  {
    icon: "⚙️",
    title: "Build to Ship",
    desc: "Production-ready from day one.",
  },
  {
    icon: "🫀",
    title: "Make it Human",
    desc: "Interfaces should feel alive.",
  },
  {
    icon: "🗂️",
    title: "Own the Stack",
    desc: "Depth over breadth, always.",
  },
];

const STATS = [
  { value: "9", label: "Projects built" },
  { value: "3", label: "Hackathons" },
  { value: "2027", label: "Graduation" },
  { value: "9", label: "Public repos" },
];

const FUN_FACTS = [
  {
    dot: "bg-indigo-400",
    tag: "KIIT",
    text: "CS & Communication Engineering student at KIIT University, class of 2027",
  },
  {
    dot: "bg-pink-400",
    tag: "HACK",
    text: "Participated in 3 hackathons",
  },
  {
    dot: "bg-amber-400",
    tag: "SUN",
    text: "Built Yor Zenith as a full-stack solar planning startup project",
  },
  {
    dot: "bg-green-400",
    tag: "MUS",
    text: "Plays piano and guitar. Chess player and Rubik's Cube solver",
  },
  {
    dot: "bg-sky-400",
    tag: "BSG",
    text: "Completed Pratham, Dwitiya, and Tritiya Sopan in Bharat Scouts & Guides",
  },
  {
    dot: "bg-orange-400",
    tag: "IN",
    text: "Based in India — open to remote internships and collaboration",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="liquid-glass self-start rounded-full px-3 py-1 text-xs font-body text-white/50">
            About Me
          </span>

          <h2 className="font-heading italic text-white text-4xl md:text-5xl">
            Ayush Roy.<br />Developer. Builder.
          </h2>

          <p className="font-body font-light text-white/50 text-sm leading-relaxed max-w-md">
            {SITE_PROFILE.bio}
          </p>

          {/* Philosophy cards */}
          <div className="flex flex-col gap-3">
            {PHILOSOPHY.map((item) => (
              <div
                key={item.title}
                className="liquid-glass rounded-2xl p-4 flex items-start gap-3"
              >
                <span className="text-xl mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-body font-medium text-white/80 text-sm">
                    {item.title}
                  </p>
                  <p className="font-body text-white/40 text-xs mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          {/* Stats 2×2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="liquid-glass rounded-2xl p-6 text-center"
              >
                <p className="font-heading italic text-white text-5xl leading-none">
                  {s.value}
                </p>
                <p className="font-body text-white/40 text-xs mt-2 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Fun facts */}
          <div className="flex flex-col gap-2">
            {FUN_FACTS.map((f) => (
              <span
                key={f.tag}
                className="liquid-glass rounded-xl px-3 py-2 text-xs font-body text-white/50 flex items-start gap-2"
              >
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1 ${f.dot}`} />
                <span>
                  <span className="text-white/30 font-medium mr-1.5">{f.tag}</span>
                  {f.text}
                </span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
