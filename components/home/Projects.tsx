"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";
import { HOME_PROJECTS } from "@/data/home";

export default function Projects() {
  const projects = HOME_PROJECTS.slice(0, 6);

  return (
    <section id="projects" className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-14 text-center">
          <span className="liquid-glass rounded-full px-3 py-1 text-xs font-body text-white/50">
            Selected Work
          </span>
          <h2 className="font-heading italic text-white text-4xl md:text-5xl">
            Things I&apos;ve built.
          </h2>
          <p className="font-body text-white/40 text-sm mt-1">
            Real projects. Real code. All GitHub-verified.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="liquid-glass hover:liquid-glass-strong rounded-2xl p-6 flex flex-col gap-3 group cursor-pointer transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <span className="liquid-glass rounded-full px-2 py-0.5 text-xs font-body text-white/50">
                  {project.category}
                </span>
                {project.stars && (
                  <span className="font-body text-white/30 text-[10px] flex items-center gap-1">
                    ★ {project.stars}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-heading italic text-white text-xl leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-body text-white/40 text-sm leading-relaxed flex-1">
                {project.shortDescription}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="liquid-glass rounded-full px-2 py-0.5 text-[10px] font-body text-white/40"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bottom row */}
              <div className="flex items-center justify-between mt-1">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xs font-body text-white/60 group-hover:text-white transition-colors flex items-center gap-1"
                >
                  View Case Study <ArrowUpRight size={11} />
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center mt-12">
          <Link
            href="/projects"
            className="liquid-glass-strong rounded-full px-6 py-2.5 font-body text-sm text-white hover:bg-white/5 transition-colors"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
