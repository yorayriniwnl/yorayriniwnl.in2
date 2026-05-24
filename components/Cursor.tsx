"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef  = useRef<number>(0);
  const posRef  = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      posRef.current.mx = e.clientX;
      posRef.current.my = e.clientY;
      dot.style.left = e.clientX + "px";
      dot.style.top  = e.clientY + "px";
    };
    document.addEventListener("mousemove", onMove);

    const loop = () => {
      const p = posRef.current;
      p.rx += (p.mx - p.rx) * 0.095;
      p.ry += (p.my - p.ry) * 0.095;
      ring.style.left = p.rx + "px";
      ring.style.top  = p.ry + "px";
      rafRef.current  = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    const onEnter = () => {
      dot.style.transform  = "translate(-50%,-50%) scale(2.4)";
      dot.style.opacity    = "0.7";
      ring.style.width     = "52px";
      ring.style.height    = "52px";
      ring.style.opacity   = "0.45";
      ring.style.borderColor = "rgba(255,255,255,0.45)";
    };
    const onLeave = () => {
      dot.style.transform  = "translate(-50%,-50%) scale(1)";
      dot.style.opacity    = "1";
      ring.style.width     = "36px";
      ring.style.height    = "36px";
      ring.style.opacity   = "0.22";
      ring.style.borderColor = "rgba(255,255,255,0.28)";
    };

    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed", width: 8, height: 8, borderRadius: "50%",
          background: "#fff", pointerEvents: "none", zIndex: 99999,
          transform: "translate(-50%,-50%)",
          transition: "transform 0.15s ease, opacity 0.15s ease",
          mixBlendMode: "difference", willChange: "left, top",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed", width: 36, height: 36, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.28)", pointerEvents: "none",
          zIndex: 99999, transform: "translate(-50%,-50%)", opacity: 0.22,
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease, border-color 0.3s ease",
          mixBlendMode: "difference", willChange: "left, top",
        }}
      />
    </>
  );
}
