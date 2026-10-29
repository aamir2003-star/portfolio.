export const personalInfo = {
  name: "Aamir Shaikh",
  role: "MERN Stack Developer & Full-Stack Engineer",
  email: "aamir576shaikh@gmail.com",
  phone: "+91-8801357553",
  location: "Ahmedabad, India",
  github: "https://github.com/aamir2003-star",
  githubUsername: "aamir2003-star",
  linkedin: "https://linkedin.com/in/shaikh-aamir",
  linkedinUsername: "shaikh-aamir",
  status: "Available for Software Engineering & Full-Stack Opportunities",
  tagline: "Engineering resilient, high-concurrency web applications, real-time distributed systems, and intelligent AI workflows.",
  aboutParagraphs: [
    "I am a MERN Stack and Full-Stack Developer with a relentless focus on creating resilient, high-performance web applications. My experience bridges deep backend engineering — from RESTful APIs and Socket.io concurrency controls to MongoDB transaction management — with modern, server-rendered React and Next.js interfaces.",
    "During my tenure as a MERN Stack Developer Intern at Technical Core Engineers, I built end-to-end production features, hardened authentication architectures using JWT and OAuth, and slashed initial page load times by leveraging Next.js Server Components.",
    "Driven by the cutting edge of software development, I actively integrate generative AI tooling (Google Gemini API, Claude, Google Antigravity) into real-world developer tools — building autonomous code reviewers, collaborative intelligence platforms, and high-throughput real-time systems."
  ],
  stats: [
    { label: "Production & Major Projects", value: "5+" },
    { label: "Master of Computer Applications", value: "8.24 CPI" },
    { label: "Core Stack Focus", value: "MERN + Next.js" },
    { label: "Real-time Concurrency", value: "Socket.io" },
  ]
};

export const experiences = [
  {
    company: "Technical Core Engineers",
    role: "MERN Stack Developer – Intern",
    period: "Jan 2026 – Jun 2026",
    location: "Ahmedabad, India",
    type: "Internship",
    description: "Architected and delivered end-to-end full-stack features across enterprise and production web applications.",
    achievements: [
      {
        title: "Full-Stack Feature Development",
        desc: "Built complete features end-to-end using React and Next.js on the frontend with Node.js and Express.js on the backend across production applications."
      },
      {
        title: "API Engineering & Optimization",
        desc: "Engineered robust RESTful APIs with structured error handling and strict input validation; optimized database queries through index profiling for faster response times."
      },
      {
        title: "Authentication & Security Architecture",
        desc: "Implemented secure JWT-based authentication with transparent token refresh mechanisms and OAuth integration (Google, GitHub) across multiple micro-services."
      },
      {
        title: "Real-Time Concurrent Systems",
        desc: "Constructed real-time communication features using Socket.io with reliable connection lifecycle handling, backed by MongoDB schemas with transaction-level concurrency controls."
      },
      {
        title: "Performance & SSR Optimization",
        desc: "Reduced initial page load time significantly by migrating high-traffic views to Next.js Server Components and fine-tuning clientside React rendering cycles."
      },
      {
        title: "UI Systems & Form Resiliency",
        desc: "Built accessible, responsive UI components with comprehensive form validation, defensive error boundary handling, and cross-device consistency."
      }
    ],
    techStack: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "OAuth", "Tailwind CSS"]
  }
];

export const educationList = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Government MCA College, Maninagar",
    location: "Ahmedabad, India",
    period: "2024 – 2026",
    grade: "CPI: 8.24 / 10.0",
    highlights: [
      "Specialization in Advanced Web Architectures, Distributed Systems & Database Optimization",
      "Lead developer on collegiate AI and collaborative project initiatives",
      "Consistently achieved top-tier academic standing (8.24 CPI)"
    ]
  },
  {
    degree: "Bachelor of Commerce (B.Com), Accounting",
    institution: "Gujarat University",
    location: "Ahmedabad, India",
    period: "2020 – 2023",
    grade: "CGPA: 6.89 / 10.0",
    highlights: [
      "Rigorous training in quantitative analysis, financial modeling, and structured problem-solving",
      "Transitioned into software engineering with a disciplined approach to business logic and system economics"
    ]
  }
];

export const projects = [
  {
    id: "ai-code-review-copilot",
    title: "AI Code Review Copilot",
    subtitle: "Automated Real-Time GitHub Pull Request Review Tool",
    category: "AI & Tools",
    featured: true,
    resumeProject: true,
    techStack: ["Next.js", "React", "Express", "MongoDB", "Socket.io", "Google Gemini API", "GitHub API"],
    description: "An automated pull request review system that analyzes GitHub diffs and streams granular code reviews directly to developers in real time.",
    detailedOverview: "Built to eliminate review bottlenecks in modern CI/CD pipelines. The system intercepts GitHub webhook events, decomposes multi-file diffs, and orchestrates a multi-model fallback chain powered by the Google Gemini API. It leverages a concurrency-controlled worker pool to flag latent bugs, security vulnerabilities, and antipatterns with runnable patch proposals.",
    highlights: [
      "Streams review insights token-by-token via Socket.io with under 300ms latency",
      "Integrated Gemini API with an automated multi-model fallback chain to ensure zero dropped reviews",
      "Concurrency-controlled worker pool prevents queue starvation during peak pull request volume",
      "Supports background execution, live user cancellation, and direct comment publishing back to GitHub threads"
    ],
    architecture: "GitHub Webhook → Express Worker Pool → Gemini Multi-Model Chain → Socket.io Real-Time Dispatcher → MongoDB Review Ledger",
    githubUrl: "https://github.com/aamir2003-star"
  },
  {
    id: "spectra-ai",
    title: "SpectraAI – Requirement Conflict Analyzer",
    subtitle: "Automated Software Specification Verification Platform",
    category: "AI & Tools",
    featured: true,
    resumeProject: true,
    techStack: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Gemini API", "Socket.io", "PDFKit"],
    description: "Full-stack application architected to detect semantic contradictions and ambiguities in software requirement specifications.",
    detailedOverview: "College engineering initiative designed to prevent costly upstream software defects. Stakeholders submit requirement documents which are parsed and analyzed using prompt-engineered Gemini API pipelines. The platform features real-time collaborative voting for stakeholder dispute resolution and automated export of conflict resolution reports.",
    highlights: [
      "Detects semantic contradictions, scope overlaps, and ambiguous specifications with high accuracy",
      "Real-time team voting system powered by Socket.io enabling simultaneous stakeholder consensus",
      "Automated server-side PDF report generator for formal sign-off audits and governance meetings",
      "Intuitive conflict matrix highlighting requirement cross-references with visual confidence scores"
    ],
    architecture: "React Client → Node.js/Express Engine → Gemini Semantic Analyzer → Socket.io Consensus Hub → PDF Exporter",
    githubUrl: "https://github.com/aamir2003-star"
  },
  {
    id: "writen",
    title: "Writen – Collaborative Blogging Platform",
    subtitle: "High-Performance Editorial Platform with SSR & Analytics",
    category: "Full-Stack",
    featured: true,
    resumeProject: true,
    techStack: ["Next.js 16", "React 19", "TypeScript", "Node.js", "MongoDB", "OAuth", "Tailwind CSS"],
    description: "Next-generation publishing platform engineered with Next.js Server Components, transparent session refresh, and engagement telemetry.",
    detailedOverview: "Engineered from the ground up to explore Next.js 16 and React 19 capabilities. Writen delivers ultra-fast initial page loads through hybrid streaming and server components. It incorporates an enterprise-grade security layer including multi-provider OAuth, time-based one-time password MFA, and an in-house analytics engine tracking reader scroll depth and reading speed.",
    highlights: [
      "Sub-second First Contentful Paint using Next.js 16 Server Components and edge caching",
      "Transparent JWT session rotation with zero user interruption and secure HttpOnly cookie handling",
      "Lightweight telemetry engine monitoring active read duration, scroll velocity, and interaction rates",
      "Full Markdown and Rich Text editor with live preview, syntax highlighting, and media uploads"
    ],
    architecture: "Next.js 16 App Router → React 19 Server Components → MongoDB Database with Sharded Indexing → Custom Analytics Telemetry",
    githubUrl: "https://github.com/aamir2003-star"
  },
  {
    id: "pulsesync",
    title: "PulseSync – Real-Time Collaborative Workspace",
    subtitle: "High-Concurrency Team Kanban with Distributed Locks",
    category: "Real-Time",
    featured: false,
    resumeProject: false,
    techStack: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Redis", "Tailwind CSS"],
    description: "A collaborative Kanban workspace featuring live peer cursors, optimistic UI updates, and transaction-level document concurrency controls.",
    detailedOverview: "Built to push the boundaries of real-time state synchronization. PulseSync allows multiple distributed team members to simultaneously edit cards, rearrange sprint boards, and broadcast presence without race conditions. Under the hood, atomic MongoDB transactions and distributed Redis locks resolve simultaneous conflicting mutations with automatic graceful rollbacks.",
    highlights: [
      "Sub-50ms peer cursor interpolation and live presence indicators via Socket.io channels",
      "Optimistic UI updates paired with defensive server-side transaction validation",
      "Automated conflict rollback and notification toast whenever two clients edit identical fields",
      "Custom drag-and-drop board with column sorting, label management, and activity audit trails"
    ],
    architecture: "React + HTML5 Drag & Drop → Socket.io Event Bus → Node.js Cluster with Redis Pub/Sub → MongoDB Replica Set",
    githubUrl: "https://github.com/aamir2003-star"
  },
  {
    id: "querysense",
    title: "QuerySense – SQL Performance & Schema Auditor",
    subtitle: "Automated Query Optimization & Execution Plan Visualizer",
    category: "Tools & DevOps",
    featured: false,
    resumeProject: false,
    techStack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS"],
    description: "Developer tooling application that audits raw SQL queries and EXPLAIN ANALYZE trees to automatically detect N+1 antipatterns and missing indexes.",
    detailedOverview: "Developed to assist full-stack engineers in diagnosing backend bottlenecks before deploying to production. QuerySense inspects query syntax, parses PostgreSQL query execution nodes, and produces an interactive visual tree diagram pinpointing sequential scans, memory spills, and heavy sort operations alongside tailored CREATE INDEX recommendations.",
    highlights: [
      "Parses complex PostgreSQL EXPLAIN (ANALYZE, BUFFERS) JSON outputs into intuitive flamegraph views",
      "Automated heuristic analyzer detecting missing foreign key indexes and unindexed filter predicates",
      "Simulates estimated performance improvements with pre-and-post indexing benchmarks",
      "Packaged with Docker for one-command local execution against development databases"
    ],
    architecture: "React Visualizer → TypeScript Query Parser → PostgreSQL AST Engine → Optimization Advice Generator",
    githubUrl: "https://github.com/aamir2003-star"
  }
];

export const skillCategories = [
  {
    title: "Languages",
    category: "languages",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", primary: true },
      { name: "TypeScript", level: "Advanced", primary: true },
      { name: "Python", level: "Proficient", primary: false },
      { name: "SQL", level: "Proficient", primary: false },
      { name: "HTML5 & CSS3", level: "Advanced", primary: true }
    ]
  },
  {
    title: "Frontend Engineering",
    category: "frontend",
    skills: [
      { name: "ReactJS", level: "Advanced", primary: true },
      { name: "Next.js 16", level: "Advanced", primary: true },
      { name: "React 19", level: "Proficient", primary: true },
      { name: "Tailwind CSS", level: "Advanced", primary: true },
      { name: "State Management", level: "Advanced", primary: false },
      { name: "Responsive UI/UX", level: "Advanced", primary: false }
    ]
  },
  {
    title: "Backend & Systems",
    category: "backend",
    skills: [
      { name: "Node.js", level: "Advanced", primary: true },
      { name: "Express.js", level: "Advanced", primary: true },
      { name: "RESTful API Design", level: "Advanced", primary: true },
      { name: "Socket.io (Real-time)", level: "Advanced", primary: true },
      { name: "JWT Authentication", level: "Advanced", primary: false },
      { name: "OAuth (Google, GitHub)", level: "Proficient", primary: false }
    ]
  },
  {
    title: "Databases & Storage",
    category: "database",
    skills: [
      { name: "MongoDB", level: "Advanced", primary: true },
      { name: "PostgreSQL", level: "Proficient", primary: true },
      { name: "Aggregation Pipelines", level: "Advanced", primary: false },
      { name: "Query Indexing & Tuning", level: "Proficient", primary: false },
      { name: "Concurrency Controls", level: "Proficient", primary: false }
    ]
  },
  {
    title: "DevOps & Tooling",
    category: "tools",
    skills: [
      { name: "Docker", level: "Proficient", primary: false },
      { name: "Git & GitHub", level: "Advanced", primary: true },
      { name: "Axios", level: "Advanced", primary: false },
      { name: "Postman", level: "Advanced", primary: false },
      { name: "Vite", level: "Advanced", primary: false }
    ]
  },
  {
    title: "AI & Modern Workflows",
    category: "ai",
    skills: [
      { name: "Google Gemini API", level: "Advanced", primary: true },
      { name: "Claude API", level: "Proficient", primary: false },
      { name: "Google Antigravity", level: "Advanced", primary: true },
      { name: "Cursor AI", level: "Advanced", primary: false },
      { name: "OpenAI Codex", level: "Proficient", primary: false }
    ]
  }
];

export const brandTokens = {
  primary: "#B3261E",
  secondary: "#E6E1D2",
  background: "#F9F7F1",
  textDark: "#1B1A17",
  textMuted: "#6F6B5F",
  border: "#C9C4B3",
  archetype: "Caregiver (Warm, Composed, Bold, Timeless, Nurturing)"
};
