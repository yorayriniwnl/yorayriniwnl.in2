"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number; // ms between words
}

export default function BlurText({
  text,
  className,
  delay = 100,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={
              isInView
                ? {
                    opacity: [0, 0.5, 1],
                    filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                    y: [20, -3, 0],
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              delay: i * (delay / 1000),
              ease: "easeOut",
              times: [0, 0.5, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}
