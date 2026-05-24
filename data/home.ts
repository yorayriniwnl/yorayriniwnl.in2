// ─── Projects ────────────────────────────────────────────────────────────────
export const HOME_PROJECTS = [
  {
    slug: "zenith",
    title: "Yor Zenith — Solar Energy Planning Platform",
    shortDescription:
      "Full-stack solar decision platform combining rooftop feasibility, subsidy intelligence, long-term return analysis, and 3D visualization dashboards.",
    category: "Full-Stack",
    tech: ["Next.js", "React", "TypeScript", "Three.js", "Python"],
    github: "https://github.com/yorayriniwnl/yor-zenith",
    stars: null,
  },
  {
    slug: "helios",
    title: "Yor Helios — Realtime Monitoring System",
    shortDescription:
      "Realtime monitoring platform built with FastAPI, WebSocket alerts, and dashboard workflows for live data tracking and threshold-based notifications.",
    category: "Backend / Realtime",
    tech: ["FastAPI", "WebSocket", "Python", "React", "PostgreSQL"],
    github: "https://github.com/yorayriniwnl/yor-helios",
    stars: null,
  },
  {
    slug: "ai-detector",
    title: "AI vs Real Image Classifier",
    shortDescription:
      "Image authenticity classifier using OpenCV, LBP/GLCM texture features, Scikit-Learn SVM, and a Streamlit interface for real-time inference.",
    category: "ML / CV",
    tech: ["Python", "OpenCV", "Scikit-Learn", "Streamlit", "SVM"],
    github: "https://github.com/yorayriniwnl/ai-detector",
    stars: null,
  },
  {
    slug: "mentor-mentee",
    title: "Mentor–Mentee Platform",
    shortDescription:
      "A structured mentorship platform connecting students with mentors, featuring session scheduling, progress tracking, and goal-setting workflows.",
    category: "Web",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "FastAPI"],
    github: "https://github.com/yorayriniwnl/mentor-mentee",
    stars: null,
  },
  {
    slug: "yor-smriti",
    title: "Yor Smriti",
    shortDescription:
      "Personal knowledge and memory management tool. Captures, organizes, and surfaces notes and resources with a clean structured interface.",
    category: "Productivity",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/yorayriniwnl/yor-smriti",
    stars: null,
  },
  {
    slug: "portfolio",
    title: "This Portfolio — Yor Ayrin iwnl",
    shortDescription:
      "This site itself. Built as a full product surface with resume pages, project case studies, GitHub-backed data, and a custom editorial design system.",
    category: "Frontend",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/yorayriniwnl/yor-ayrin-iwnl",
    stars: null,
  },
]

// ─── Skill Groups ─────────────────────────────────────────────────────────────
export const HOME_SKILL_GROUPS = [
  {
    group: "Frontend",
    skills: [
      { name: "React",       pct: 82 },
      { name: "Next.js",     pct: 84 },
      { name: "HTML / CSS",  pct: 82 },
      { name: "TailwindCSS", pct: 80 },
      { name: "TypeScript",  pct: 65 },
      { name: "Three.js",    pct: 72 },
    ],
  },
  {
    group: "Backend",
    skills: [
      { name: "FastAPI",   pct: 76 },
      { name: "Flask",     pct: 74 },
      { name: "Node.js",   pct: 68 },
      { name: "WebSocket", pct: 72 },
    ],
  },
  {
    group: "ML & Vision",
    skills: [
      { name: "Python",       pct: 84 },
      { name: "OpenCV",       pct: 76 },
      { name: "Scikit-Learn", pct: 74 },
      { name: "Streamlit",    pct: 70 },
    ],
  },
  {
    group: "Tooling",
    skills: [
      { name: "Git / GitHub",    pct: 90 },
      { name: "VS Code",         pct: 88 },
      { name: "Docker",          pct: 64 },
      { name: "SQL",             pct: 58 },
      { name: "Java / C basics", pct: 52 },
    ],
  },
]

// ─── Experience ───────────────────────────────────────────────────────────────
export const HOME_EXPERIENCE_ITEMS = [
  {
    title: "Independent Project Work",
    org: "Self-directed",
    date: "Resume verified",
    kind: "Verified",
    summary:
      "The strongest internship-ready signal comes from shipped full-stack projects and current public repositories.",
    bullets: [
      "Built Yor Helios with FastAPI, WebSocket alerts, and dashboard workflows for realtime monitoring.",
      "Built Yor Zenith with React and Three.js dashboards for rooftop feasibility and solar generation planning.",
      "Built an AI-vs-real image classifier using OpenCV, LBP/GLCM features, Scikit-Learn SVM, and Streamlit.",
    ],
  },
  {
    title: "Portfolio Platform",
    org: "This website",
    date: "Jan 2026 – Present",
    kind: "Verified",
    summary:
      "Maintained as a product surface with resume pages, project case studies, GitHub imports, and an editorial design system.",
    bullets: [
      "Centralized profile, project, skill, education, and achievement data around resume and GitHub evidence.",
      "Built custom design system with liquid glass morphism, Instrument Serif typography, and Framer Motion animations.",
      "Replaced stale claims and old repo links with current GitHub-backed project information.",
    ],
  },
  {
    title: "B.Tech — Computer Science & Communication Engineering",
    org: "KIIT Deemed to be University",
    date: "2023 – 2027",
    kind: "Education",
    summary:
      "Pursuing B.Tech with self-directed project work alongside university coursework. Technical focus: web development, machine learning, computer vision, and SQL fundamentals.",
    bullets: [
      "Expected graduation: 2027.",
      "Relevant areas: Data Structures, OS, DBMS, ML fundamentals, Computer Networks.",
    ],
  },
  {
    title: "CBSE Secondary Education",
    org: "Kendriya Vidyalaya, Burdwan",
    date: "Completed",
    kind: "Education",
    summary: "Completed senior secondary and secondary education under CBSE.",
    bullets: [
      "Completed Pratham, Dwitiya, and Tritiya Sopan in Bharat Scouts & Guides.",
    ],
  },
]

// ─── Blog Previews ────────────────────────────────────────────────────────────
export const HOME_BLOG_PREVIEWS = [
  {
    slug: "turning-portfolio-claims-into-verified-signals",
    title: "Turning Portfolio Claims into Verified Signals",
    excerpt:
      "Most portfolio sites say things. This one tries to prove them. How GitHub-backed data, real project links, and honest copy changed the way the site reads.",
    category: "Case Study",
    catClass: "blue",
    date: "Apr 2026",
    readTime: "7 min read",
  },
  {
    slug: "what-yor-zenith-proves-about-decision-support-interfaces",
    title: "What Yor Zenith Taught Me About Decision-Support Interfaces",
    excerpt:
      "Domain-heavy tools only feel premium when the interface explains complexity instead of hiding it.",
    category: "Project Notes",
    catClass: "amber",
    date: "Apr 2026",
    readTime: "5 min read",
  },
  {
    slug: "accuracy-is-part-of-the-interface",
    title: "Accuracy Is Part of the Interface",
    excerpt:
      "When you build a classifier, the model accuracy number is not just a metric — it is a design decision that shapes how much a user trusts the output.",
    category: "Build Log",
    catClass: "green",
    date: "Apr 2026",
    readTime: "4 min read",
  },
]
