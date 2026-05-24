"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HOME_BLOG_PREVIEWS } from "@/data/home";

const catColors: Record<string, string> = {
  blue: "text-sky-400/80",
  green: "text-emerald-400/80",
  amber: "text-amber-400/80",
};

export default function BlogPreviews() {
  const posts = HOME_BLOG_PREVIEWS.slice(0, 3);

  return (
    <section id="blog" className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-14 text-center">
          <span className="liquid-glass rounded-full px-3 py-1 text-xs font-body text-white/50">
            Writing
          </span>
          <h2 className="font-heading italic text-white text-4xl md:text-5xl">
            Notes from the build.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="liquid-glass rounded-2xl p-6 flex flex-col gap-3"
            >
              {/* Category */}
              <span
                className={`liquid-glass self-start rounded-full px-2 py-0.5 text-[10px] font-body ${
                  catColors[post.catClass] ?? "text-white/50"
                }`}
              >
                {post.category}
              </span>

              {/* Title */}
              <h3 className="font-heading italic text-white text-lg leading-snug">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="font-body text-white/40 text-xs leading-relaxed flex-1">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-1">
                <span className="font-body text-white/30 text-[10px]">
                  {post.date} · {post.readTime}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-body text-white/50 text-[10px] hover:text-white transition-colors"
                >
                  Read →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center mt-12">
          <Link
            href="/blog"
            className="liquid-glass-strong rounded-full px-6 py-2.5 font-body text-sm text-white hover:bg-white/5 transition-colors"
          >
            Read All Posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
