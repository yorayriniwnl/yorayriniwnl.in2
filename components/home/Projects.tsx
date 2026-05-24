"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";
import { HOME_PROJECTS } from "@/data/home";
import { useRef } from "react";

function CardMouseGlow({ children, className, style }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--cx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--cy", `${((e.clientY - rect.top)  / rect.height) * 100}%`);
  };
  return (
    <div ref={ref} onMouseMove={onMove} className={className} style={style}>
      {children}
    </div>
  );
}

export default function Projects() {
  const featured = HOME_PROJECTS[0];
  const rest      = HOME_PROJECTS.slice(1, 6);

  return (
    <section id="projects" className="bg-black py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div className="flex flex-col gap-3">
            <span className="label">Selected Work</span>
            <h2
              className="font-heading italic text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Things I&apos;ve built.
            </h2>
          </div>
          <div className="flex items-center gap-3 hidden md:flex">
            <span className="label" style={{ color: "rgba(255,255,255,0.18)" }}>
              {HOME_PROJECTS.length} projects
            </span>
            <Link
              href="/projects"
              className="btn-outline rounded-full px-5 py-2 font-body text-xs flex items-center gap-1.5"
            >
              View all <ArrowUpRight size={11} />
            </Link>
          </div>
        </div>

        {/* ── Featured ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.85, ease: [0.22,1,0.36,1] }}
          className="mb-5"
        >
          <CardMouseGlow className="card rounded-2xl group overflow-hidden" style={{ position: "relative" }}>
            {/* Ghost number — decorative, editorial */}
            <div
              className="ghost-number absolute top-4 right-6 select-none pointer-events-none"
              aria-hidden="true"
            >
              01
            </div>

            <div className="p-8 md:p-10">
              <div className="flex flex-col gap-5 max-w-xl">
                {/* Top meta */}
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-[10px] px-2 py-0.5 rounded-full label-accent"
                    style={{ border: "1px solid rgba(201,96,122,0.3)" }}
                  >
                    Featured
                  </span>
                  <span className="label">{featured.category}</span>
                </div>

                {/* Title */}
                <h3
                  className="font-heading italic text-white leading-tight"
                  style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)" }}
                >
                  {featured.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--dim-3)" }}>
                  {featured.shortDescription}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5">
                  {featured.tech.map((t) => (
                    <span
                      key={t}
                      className="card rounded-full px-2.5 py-0.5 label"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  className="flex items-center gap-5 pt-3 mt-1"
                  style={{ borderTop: "1px solid var(--border-dim)" }}
                >
                  <Link
                    href={`/projects/${featured.slug}`}
                    className="font-body text-xs flex items-center gap-1.5 transition-colors duration-200 group-hover:text-white/75"
                    style={{ color: "var(--dim-2)" }}
                  >
                    Case Study <ArrowUpRight size={11} />
                  </Link>
                  <Link
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-white/65"
                    style={{ color: "var(--dim-1)" }}
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Open ${featured.title} on GitHub`}
                  >
                    <Github size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </CardMouseGlow>
        </motion.div>

        {/* ── Grid ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, delay: i * 0.07, ease: [0.22,1,0.36,1] }}
            >
              <CardMouseGlow className="card rounded-2xl p-6 flex flex-col gap-3.5 group h-full">
                {/* Number + category */}
                <div className="flex items-center justify-between">
                  <span className="label tabular-nums">0{i + 2}</span>
                  <span
                    className="label transition-colors duration-200 group-hover:text-accent"
                    style={{ "--text-accent": "var(--accent)" } as React.CSSProperties}
                  >
                    {project.category}
                  </span>
                </div>

                <h3
                  className="font-heading italic text-white text-xl leading-snug"
                >
                  {project.title}
                </h3>

                <p className="font-body text-sm leading-relaxed flex-1" style={{ color: "var(--dim-2)" }}>
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="card rounded-full px-2 py-0.5 text-[10px] font-body"
                      style={{ color: "var(--dim-2)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center justify-between mt-0.5 pt-3"
                  style={{ borderTop: "1px solid var(--border-dim)" }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-body text-xs flex items-center gap-1 transition-colors duration-200 group-hover:text-white/72"
                    style={{ color: "var(--dim-2)" }}
                  >
                    Case Study <ArrowUpRight size={10} />
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-white/65"
                    style={{ color: "var(--dim-1)" }}
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Open ${project.title} on GitHub`}
                  >
                    <Github size={13} />
                  </Link>
                </div>
              </CardMouseGlow>
            </motion.div>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="flex justify-center mt-10 md:hidden">
          <Link
            href="/projects"
            className="btn-outline rounded-full px-6 py-2.5 font-body text-sm"
          >
            View All Projects →
          </Link>
        </div>

      </div>
    </section>
  );
}
