// ─── Projects ────────────────────────────────────────────────────────────────
export const HOME_PROJECTS = [
  {
    slug: "realtime-dashboard",
    title: "Realtime Analytics Dashboard",
    shortDescription:
      "A live data dashboard built with Next.js, Socket.IO and Recharts, streaming metrics from a FastAPI backend with sub-100ms latency.",
    category: "Full-Stack",
    tech: ["Next.js", "FastAPI", "Socket.IO", "Recharts", "PostgreSQL"],
    github: "https://github.com/ayushroy/realtime-dashboard",
    stars: 48,
  },
  {
    slug: "cv-pipeline",
    title: "Computer Vision Pipeline",
    shortDescription:
      "End-to-end object detection pipeline using YOLOv8 and OpenCV, packaged as a FastAPI microservice with a React review UI.",
    category: "ML / CV",
    tech: ["Python", "YOLOv8", "OpenCV", "FastAPI", "React"],
    github: "https://github.com/ayushroy/cv-pipeline",
    stars: 31,
  },
  {
    slug: "devlink",
    title: "DevLink",
    shortDescription:
      "GitHub-verified developer portfolio builder. Pulls repos, stars, and commits via the GitHub API and renders a hosted profile page.",
    category: "Developer Tool",
    tech: ["Next.js", "TypeScript", "GitHub API", "Tailwind"],
    github: "https://github.com/ayushroy/devlink",
    stars: 62,
  },
  {
    slug: "threejs-visualiser",
    title: "Three.js Data Visualiser",
    shortDescription:
      "3-D interactive data visualization tool rendering large datasets as point clouds and force-directed graphs in the browser.",
    category: "Data Viz",
    tech: ["Three.js", "TypeScript", "D3.js", "WebGL"],
    github: "https://github.com/ayushroy/threejs-vis",
    stars: 27,
  },
  {
    slug: "kiit-scheduler",
    title: "KIIT Schedule Optimizer",
    shortDescription:
      "Automated timetable optimizer for KIIT students that parses the official PDF schedule and exports a conflict-free personal calendar.",
    category: "Utility",
    tech: ["Python", "Scikit-Learn", "pdfminer", "Next.js"],
    github: "https://github.com/ayushroy/kiit-scheduler",
    stars: 19,
  },
  {
    slug: "chat-os",
    title: "ChatOS",
    shortDescription:
      "A minimal AI chat shell that runs multiple LLM sessions in separate 'windows', inspired by tiling window managers.",
    category: "AI Tool",
    tech: ["Next.js", "OpenAI API", "Framer Motion", "Zustand"],
    github: "https://github.com/ayushroy/chatos",
    stars: 44,
  },
];

// ─── Skill Groups ─────────────────────────────────────────────────────────────
export const HOME_SKILL_GROUPS = [
  {
    group: "Frontend",
    skills: [
      { name: "Next.js", pct: 92 },
      { name: "React", pct: 90 },
      { name: "TypeScript", pct: 85 },
      { name: "Tailwind CSS", pct: 93 },
      { name: "Three.js", pct: 70 },
      { name: "Framer Motion", pct: 78 },
    ],
  },
  {
    group: "Backend",
    skills: [
      { name: "FastAPI", pct: 88 },
      { name: "Node.js", pct: 80 },
      { name: "PostgreSQL", pct: 75 },
      { name: "Redis", pct: 68 },
      { name: "Socket.IO", pct: 82 },
    ],
  },
  {
    group: "ML & Vision",
    skills: [
      { name: "Python", pct: 91 },
      { name: "OpenCV", pct: 80 },
      { name: "Scikit-Learn", pct: 74 },
      { name: "YOLOv8", pct: 71 },
      { name: "NumPy / Pandas", pct: 85 },
    ],
  },
  {
    group: "Tooling",
    skills: [
      { name: "Docker", pct: 76 },
      { name: "Git / GitHub", pct: 94 },
      { name: "Vercel / AWS", pct: 73 },
      { name: "Linux CLI", pct: 80 },
      { name: "Figma", pct: 65 },
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const HOME_EXPERIENCE_ITEMS = [
  {
    title: "Full-Stack Developer Intern",
    org: "TechStart Labs",
    date: "Jun 2024 – Sep 2024",
    kind: "Verified",
    summary:
      "Built and shipped three internal tools used daily by 40+ employees, reducing manual reporting time by 3.2× through automated dashboards and API integrations.",
    bullets: [
      "Redesigned the analytics dashboard with Next.js + Recharts, cutting load time from 4.2 s to 0.9 s",
      "Built a Python scraper + FastAPI service that auto-populated CRM records from LinkedIn",
      "Wrote unit and integration tests covering 87% of the codebase before handoff",
    ],
  },
  {
    title: "B.Tech — Computer Science & Engineering",
    org: "KIIT University",
    date: "2023 – 2027",
    kind: "Education",
    summary:
      "Relevant coursework: Data Structures, OS, DBMS, ML Fundamentals, Computer Networks. CGPA 8.9.",
    bullets: [
      "Co-lead of the KIIT Developer Circle — organised 3 hackathons with 200+ participants",
      "Teaching assistant for Data Structures (Sem 3)",
    ],
  },
  {
    title: "Open-Source Contributor",
    org: "Various (GitHub)",
    date: "2023 – Present",
    kind: "Verified",
    summary:
      "Regular contributions to open-source projects in the Next.js and Python ecosystems — bug fixes, documentation, and small features.",
    bullets: [
      "Merged 6 PRs across 4 repositories with 500 – 8 000 stars",
      "Maintains 9 public repositories with combined 280+ stars",
    ],
  },
];

// ─── Blog Previews ────────────────────────────────────────────────────────────
export const HOME_BLOG_PREVIEWS = [
  {
    slug: "nextjs-websockets",
    title: "Real-Time Data in Next.js: Beyond Server-Sent Events",
    excerpt:
      "Why I ditched SSE and spent a weekend wiring Socket.IO into the App Router — what broke, what didn't, and what I'd do differently.",
    category: "Deep Dive",
    catClass: "blue",
    date: "Apr 2025",
    readTime: "8 min read",
  },
  {
    slug: "yolo-fastapi",
    title: "Shipping a YOLO Inference API in Under an Hour",
    excerpt:
      "A no-fluff walkthrough of wrapping YOLOv8 in FastAPI, containerising it, and deploying it to a $6/mo VPS with an Nginx reverse proxy.",
    category: "Tutorial",
    catClass: "green",
    date: "Feb 2025",
    readTime: "6 min read",
  },
  {
    slug: "design-systems-solo",
    title: "Building a Design System When You're the Only Designer",
    excerpt:
      "Notes on maintaining visual consistency across 9 projects without a Figma subscription, a design team, or much free time.",
    category: "Process",
    catClass: "amber",
    date: "Jan 2025",
    readTime: "5 min read",
  },
];
