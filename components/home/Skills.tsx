"use client";

import { motion } from "framer-motion";
import { HOME_SKILL_GROUPS } from "@/data/home";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col gap-3 mb-16">
          <span className="label">Capabilities</span>
          <h2
            className="font-heading italic text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            What I work with.
          </h2>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {HOME_SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: gi * 0.08, ease: [0.22,1,0.36,1] }}
              className="flex flex-col gap-5"
            >
              {/* Category */}
              <div className="pb-3" style={{ borderBottom: "1px solid var(--border-dim)" }}>
                <h3 className="font-heading italic text-lg" style={{ color: "var(--dim-4)" }}>
                  {group.group}
                </h3>
              </div>

              {/* Skills — opacity + size encode proficiency */}
              <div className="flex flex-col gap-3">
                {group.skills
                  .sort((a, b) => b.pct - a.pct)
                  .map((skill) => {
                    /* Map pct → opacity within our scale */
                    const opacity = skill.pct >= 80 ? 0.74
                                  : skill.pct >= 70 ? 0.52
                                  : skill.pct >= 60 ? 0.35
                                  : 0.22;
                    const size    = skill.pct >= 80 ? "0.94rem"
                                  : skill.pct >= 70 ? "0.88rem"
                                  : "0.82rem";
                    const weight  = skill.pct >= 80 ? "400" : "300";
                    return (
                      <div
                        key={skill.name}
                        className="flex items-baseline justify-between group"
                      >
                        <span
                          className="font-body transition-colors duration-200 group-hover:text-white"
                          style={{ color: `rgba(255,255,255,${opacity})`, fontSize: size, fontWeight: weight }}
                        >
                          {skill.name}
                        </span>
                        <span
                          className="label tabular-nums"
                          style={{ color: `rgba(255,255,255,${opacity * 0.5})` }}
                        >
                          {skill.pct}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
