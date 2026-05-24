"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HOME_SKILL_GROUPS } from "@/data/home";

function SkillBar({ pct, inView }: { pct: number; inView: boolean }) {
  return (
    <div className="w-full bg-white/5 rounded-full h-px mt-1.5">
      <motion.div
        className="bg-white/40 rounded-full h-px"
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : { width: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}

function GroupCard({ group }: { group: (typeof HOME_SKILL_GROUPS)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="liquid-glass rounded-2xl p-6"
    >
      <h3 className="font-heading italic text-white text-lg mb-5">
        {group.group}
      </h3>
      <div className="flex flex-col gap-4">
        {group.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between">
              <span className="font-body text-white/60 text-sm">
                {skill.name}
              </span>
              <span className="font-body text-white/30 text-xs">
                {skill.pct}
              </span>
            </div>
            <SkillBar pct={skill.pct} inView={inView} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-14 text-center">
          <span className="liquid-glass rounded-full px-3 py-1 text-xs font-body text-white/50">
            Capabilities
          </span>
          <h2 className="font-heading italic text-white text-4xl md:text-5xl">
            What I work with.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOME_SKILL_GROUPS.map((group) => (
            <GroupCard key={group.group} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
