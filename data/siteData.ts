export interface Project {
  id: string;
  title: string;
  category: "Web Application" | "Website" | "Mobile Application";
  client: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  image: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Engineering" | "Architecture" | "Performance" | "Product";
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
  category: "Web App" | "Website" | "Mobile App";
}

export const PROJECTS: Project[] = [
  {
    id: "kite-health",
    title: "Kite Health",
    category: "Mobile Application",
    client: "Kite Health Inc.",
    tagline: "Telehealth clinical platform & mobile patient app",
    overview: "A comprehensive cross-platform healthcare ecosystem connecting patients with verified clinical specialists through real-time video, end-to-end encrypted messaging, and instant EHR synchronization.",
    challenge: "The client needed to launch a HIPAA-compliant mobile app and web portal simultaneously within 10 weeks to secure their Series A round, while handling volatile video bandwidth and sensitive medical records.",
    solution: "We engineered a unified TypeScript monorepo with React Native for iOS/Android and Next.js for the clinical web dashboard. Leveraged WebRTC with adaptive bitrate streaming, PostgreSQL with row-level encryption, and automated CI/CD releases.",
    metrics: [
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "API Latency", value: "68ms" },
      { label: "Crash-Free Rate", value: "99.8%" },
      { label: "Time to Market", value: "9 weeks" },
    ],
    stack: ["React Native", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "WebRTC"],
    image: "assets/img/project-kite-health.jpg",
    testimonial: {
      quote: "Sevens delivered our web portal and mobile apps in 9 weeks flat. We went from Figma designs to 14,000 active patients without a single architectural hitch.",
      author: "Dr. Aris Thorne",
      role: "Co-Founder & CEO, Kite Health",
    },
  },
  {
    id: "vesper-architecture",
    title: "Vesper Architecture",
    category: "Website",
    client: "Vesper Design Studio",
    tagline: "Monolithic architectural index & headless CMS",
    overview: "An ultra-minimal, high-aesthetic digital archive showcasing global architectural projects through fluid full-screen media layouts, sub-second page transitions, and structured editorial storytelling.",
    challenge: "The studio's legacy WordPress site was sluggish (PageSpeed score 42), with 4+ second load times on high-resolution image galleries, resulting in lost client commission inquiries.",
    solution: "We restructured their entire digital presence using Next.js with static site generation, Sanity headless CMS for granular layout control, and automated AVIF/WebP image pipeline optimization.",
    metrics: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Lead Inquiries", value: "+140%" },
      { label: "First Contentful Paint", value: "0.4s" },
      { label: "Bounce Rate", value: "-38%" },
    ],
    stack: ["Next.js", "Sanity CMS", "Tailwind CSS", "TypeScript", "Vercel"],
    image: "assets/img/project-vesper.jpg",
    testimonial: {
      quote: "Our new website functions like an architectural gallery in itself. Inbound commission inquiries jumped 140% within 30 days of going live.",
      author: "Elena Rostova",
      role: "Principal Architect, Vesper Studio",
    },
  },
  {
    id: "cobalt-pay",
    title: "Cobalt Pay",
    category: "Web Application",
    client: "Cobalt Financial",
    tagline: "Enterprise billing automation & merchant portal",
    overview: "A mission-critical financial dashboard empowering B2B SaaS companies to manage complex recurring billing schedules, custom usage metering, and multi-currency payouts.",
    challenge: "Handling complex invoice state transitions across 24 global currencies with zero tolerance for calculation discrepancies or race conditions during peak billing cycles.",
    solution: "Designed an event-driven Node.js & TypeScript microservice architecture with immutable ledger tables, real-time WebSocket reconciliation, and deep Stripe Billing webhooks.",
    metrics: [
      { label: "Volume Processed", value: "$45M+" },
      { label: "Type Safety", value: "100%" },
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Reconciliation", value: "Real-time" },
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Docker"],
    image: "assets/img/project-cobalt-pay.jpg",
    testimonial: {
      quote: "Working with Sevens felt like having senior principal engineers on staff. They designed our billing core with zero technical debt and rock-solid reliability.",
      author: "David Sterling",
      role: "VP of Engineering, Cobalt Financial",
    },
  },
  {
    id: "strata-mobile",
    title: "Strata Field Ops",
    category: "Mobile Application",
    client: "Strata Logistics",
    tagline: "Offline-first mobile dispatch & telemetry app",
    overview: "An enterprise tablet and mobile application built for industrial field technicians operating in remote regions with intermittent or zero cellular connectivity.",
    challenge: "Technicians needed to log sensor diagnostic readings, capture high-res inspection photos, and synchronize complex database conflicts seamlessly when returning to coverage.",
    solution: "Engineered an offline-first SQLite database layer using WatermelonDB and React Native, with conflict-free replicated data types (CRDTs) and background sync workers.",
    metrics: [
      { label: "Offline Sync Time", value: "<1.2s" },
      { label: "Battery Efficiency", value: "+35%" },
      { label: "Daily Active Users", value: "8,500+" },
      { label: "Sync Error Rate", value: "0.01%" },
    ],
    stack: ["React Native", "TypeScript", "WatermelonDB", "GraphQL", "Node.js"],
    image: "assets/img/project-strata-mobile.jpg",
    testimonial: {
      quote: "The offline synchronization engine Sevens built never drops a single diagnostic packet. It transformed our field technicians' daily productivity.",
      author: "Sarah Lindqvist",
      role: "Operations Director, Strata Logistics",
    },
  },
  {
    id: "nordic-craft",
    title: "Nordic Goods",
    category: "Website",
    client: "Nordic Atelier",
    tagline: "Headless e-commerce & bespoke design system",
    overview: "A bespoke e-commerce flagship for a Scandinavian furniture manufacturer, featuring dynamic 3D configuration previews, fluid cart interactions, and instant global checkout.",
    challenge: "Integrating custom product dimension configurators without bloating page payload or slowing down checkout funnel conversion.",
    solution: "Built a headless Shopify storefront on Next.js 16 with micro-cached product endpoints, lightweight interactive canvas viewers, and seamless Stripe payment integration.",
    metrics: [
      { label: "Conversion Rate", value: "4.8%" },
      { label: "Cart Abandonment", value: "-22%" },
      { label: "Page Load Time", value: "0.6s" },
      { label: "Revenue Growth", value: "+84%" },
    ],
    stack: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "TypeScript", "Stripe"],
    image: "assets/img/project-nordic-goods.jpg",
    testimonial: {
      quote: "The speed and fluidity of our new store directly doubled our online revenue. Every interaction feels intentional and luxurious.",
      author: "Henrik Møller",
      role: "Managing Director, Nordic Goods",
    },
  },
  {
    id: "pulse-analytics",
    title: "Pulse Cloud",
    category: "Web Application",
    client: "Pulse Metrics Inc.",
    tagline: "Real-time infrastructure telemetry & alerting console",
    overview: "A high-throughput monitoring dashboard that ingests, aggregates, and visualizes millions of server time-series telemetry events per second for devops teams.",
    challenge: "Rendering high-frequency live updating line graphs with 10,000+ data points without blocking the main browser thread or causing interface stutter.",
    solution: "Implemented WebGL-accelerated canvas rendering layers combined with Web Workers for background data processing and Next.js server components for metadata routing.",
    metrics: [
      { label: "Events Ingested", value: "10M+/sec" },
      { label: "UI Frame Rate", value: "60 FPS" },
      { label: "Query Execution", value: "<15ms" },
      { label: "Enterprise Churn", value: "0%" },
    ],
    stack: ["Next.js", "React", "TypeScript", "ClickHouse", "Go", "Docker"],
    image: "assets/img/project-pulse-cloud.jpg",
    testimonial: {
      quote: "Sevens solved a rendering bottleneck our team struggled with for six months. The console is buttery smooth even under peak telemetry load.",
      author: "Kareem Al-Sayed",
      role: "Head of Infrastructure, Pulse Cloud",
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Working with Sevens felt like having a tier-one engineering team plugged directly into our company. They delivered our clinical web portal and iOS app in 9 weeks with zero technical compromise.",
    author: "Dr. Marcus Vance",
    role: "CEO & Co-Founder",
    company: "Kite Health",
    metric: "9 Weeks",
    metricLabel: "From brief to App Store release",
    category: "Mobile App",
  },
  {
    quote: "Zero account manager fluff. You talk directly with the senior engineers writing your code. Their sprint cadence saved us over $120k compared to hiring an in-house team.",
    author: "David Sterling",
    role: "VP of Engineering",
    company: "Cobalt Financial",
    metric: "$45M+",
    metricLabel: "Processed through platform",
    category: "Web App",
  },
  {
    quote: "Our previous website was slow and clunky. Sevens rebuilt it from scratch on Next.js and Sanity. Page speed hit 99/100, and inbound high-ticket project inquiries rose by 140% in month one.",
    author: "Elena Rostova",
    role: "Principal Architect",
    company: "Vesper Design Studio",
    metric: "+140%",
    metricLabel: "Increase in qualified inquiries",
    category: "Website",
  },
  {
    quote: "The offline-first sync engine they built for our field logistics tablets has operated flawlessly for 8,500 daily active technicians with a 0.01% error rate.",
    author: "Sarah Lindqvist",
    role: "Operations Director",
    company: "Strata Logistics",
    metric: "99.99%",
    metricLabel: "Data sync integrity",
    category: "Mobile App",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "architecting-react-native-for-60fps",
    title: "Architecting React Native Apps for 60fps Performance & Offline Sync",
    excerpt: "How to eliminate JavaScript thread bridge bottlenecks, leverage Nitro Modules, and structure WatermelonDB for flawless offline-first mobile applications.",
    category: "Engineering",
    date: "November 4, 2026",
    readTime: "7 min read",
    author: {
      name: "Jack Thornton",
      role: "Lead Mobile Architect",
    },
    content: [
      "Building mobile applications with React Native often gets a bad reputation when teams treat it like writing a web application in a native wrapper. But when architected with proper native thread boundaries, modern React Native yields benchmarks indistinguishable from Swift or Kotlin.",
      "The critical mistake most teams make is overloading the JavaScript bridge. Every touch event, animation frame, and database query serialization across the bridge introduces frame drops. By moving animations to the UI thread via Reanimated 3 and executing database operations through native C++ bindings, we maintain a rock-solid 60 FPS across low-end Android hardware and flagship iPhones alike.",
      "For offline-first synchronization, we avoid naive timestamp comparisons. Instead, we implement vector clocks and conflict-free replicated data types (CRDTs) through local SQLite storage. This ensures field technicians can operate completely disconnected for days without risk of data clobbering upon reconnecting.",
    ],
  },
  {
    slug: "nextjs-16-server-actions-zero-api-pattern",
    title: "Next.js 16 Server Actions: The Zero-API Backend Pattern",
    excerpt: "Why eliminating traditional REST/GraphQL boilerplate in favor of type-safe Server Actions accelerates production web application development by 40%.",
    category: "Architecture",
    date: "October 28, 2026",
    readTime: "6 min read",
    author: {
      name: "Aidan Croft",
      role: "Principal Web Engineer",
    },
    content: [
      "In traditional web development, adding a simple user form requires defining a database schema, creating an API route, generating TypeScript types, writing client fetch handlers, and maintaining state synchronization. It is a maintenance burden that compounds with every release.",
      "Next.js 16 Server Actions change this equation entirely. By allowing server-side mutations to be called directly from client components with automated closure serialization and end-to-end type inference, we eliminate hundreds of lines of brittle API glue code per feature.",
      "In our production benchmarks across 50,000 requests, Server Actions reduced average request overhead by 28ms compared to traditional REST routing while providing compile-time type guarantees directly from database models to UI components.",
    ],
  },
  {
    slug: "two-week-sprint-framework-that-saved-180k",
    title: "The Two-Week Sprint Framework That Saved $180k in Development Waste",
    excerpt: "The fixed-scope production methodology we use to ship enterprise-grade digital products without bloated retainers, endless backlogs, or scope creep.",
    category: "Product",
    date: "October 15, 2026",
    readTime: "5 min read",
    author: {
      name: "Marcus Vance",
      role: "Managing Partner",
    },
    content: [
      "Most agency engagements fail not because of bad engineers, but because of poor incentive structures. Time-and-materials contracts incentivize agencies to work slowly and drag out timelines, while traditional fixed-bid models breed adversarial change-order negotiations.",
      "We replace both models with time-boxed, fixed-deliverable two-week sprints. Every sprint begins with a precise, signed technical specification and ends with a deployed, tested release to the client's staging environment.",
      "By eliminating account managers and having clients interact directly with senior engineering leads in Slack, we remove communication friction and ship production code up to 3x faster than traditional development agencies.",
    ],
  },
  {
    slug: "headless-cms-benchmark-2026",
    title: "Headless CMS in 2026: Benchmarking Sanity, Payload, and Contentful",
    excerpt: "A deep dive into real-world editorial workflow latency, API throughput, and developer experience across modern content management systems.",
    category: "Performance",
    date: "September 30, 2026",
    readTime: "8 min read",
    author: {
      name: "Elena Rostova",
      role: "Design Systems Engineer",
    },
    content: [
      "Selecting the right CMS backend can make or break a company's marketing velocity. We tested Sanity, Payload 3.0, and Contentful across real-world workloads consisting of 5,000 multi-locale articles and complex nested component schemas.",
      "Payload 3.0 stood out for teams deeply invested in the Next.js ecosystem, executing within the same process boundary and achieving zero-network overhead queries. Sanity remained our top choice for editorial teams requiring real-time visual collaboration and granular asset workflows.",
      "Contentful continues to deliver predictable enterprise SLAs, but carries higher API licensing costs for growing startups. We break down the exact performance profiles and total cost of ownership across all three platforms.",
    ],
  },
];

