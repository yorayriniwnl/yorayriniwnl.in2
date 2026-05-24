"use client";

const TECHS = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Three.js",
  "FastAPI",
  "TailwindCSS",
  "OpenCV",
  "Scikit-Learn",
  "Docker",
];

function Row() {
  return (
    <div className="flex items-center gap-8 flex-nowrap whitespace-nowrap">
      {TECHS.map((tech, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className="font-heading italic text-white/70 text-2xl">
            {tech}
          </span>
          <span className="text-white/25 text-sm">·</span>
        </span>
      ))}
    </div>
  );
}

export default function TechStackBar() {
  return (
    <section className="bg-black py-10 overflow-hidden">
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <span className="liquid-glass rounded-full px-4 py-1 text-xs font-body text-white/40">
          Built with
        </span>
      </div>

      {/* Scrolling row */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #000, transparent)" }}
        />
        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #000, transparent)" }}
        />

        <div className="flex animate-scroll-x">
          <div className="flex items-center gap-8 pr-8">
            <Row />
          </div>
          <div className="flex items-center gap-8 pr-8">
            <Row />
          </div>
        </div>
      </div>
    </section>
  );
}
