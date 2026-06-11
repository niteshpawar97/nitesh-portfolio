// Single source of truth for site content. Keeping copy here makes it easy to
// keep the tone consistent and avoids scattering strings across components.

export const profile = {
  name: "Nitesh Kadve",
  // Backend-focused, honest framing. No official company employment — Niket Group
  // is his own independent venture.
  title: "Node.js Backend Developer",
  subtitle: "Backend Systems · REST APIs · IoT & Real-Time",
  tagline:
    "3+ years building server-side applications with Node.js and Express — REST APIs, real-time features, and the IoT backends behind connected devices.",
  techStack: ["Node.js", "Express.js", "MySQL", "MongoDB", "MQTT"],
  location: "Pune, India",
  email: "niteshpawar97@gmail.com",
  // Kept for reference; intentionally not displayed publicly.
  phone: "+91 88218 61409",
  github: "https://github.com/niteshpawar97",
  linkedin: "https://www.linkedin.com/in/niteshkadve",
  website: "https://niketgroup.in",
  resumeUrl: "/Nitesh-Kadve-Resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "3+ yrs", label: "Backend development with Node.js & Express" },
  { value: "IoT", label: "Real-time device backends over MQTT & WebSockets" },
  { value: "AWS", label: "Deployed and run on AWS with Docker & Nginx" },
];

export const about = {
  // Kept tight on purpose — roughly 100 words. Recruiters skim.
  paragraphs: [
    "I'm a backend developer with 3+ years building server-side applications in Node.js and Express — REST APIs, authentication, real-time features, and the MySQL and MongoDB data layers behind them. I work independently under my own Niket Group, taking projects from API design through to deployment on AWS, and I'm comfortable owning a system end to end and debugging it in production.",
    "The work I've learned the most from is connecting hardware to the cloud — an IoT platform handling a fleet of devices over MQTT and WebSockets, where a dropped message or a duplicated command is a real problem. That's where most of my opinions about reliability and designing for the failure case come from.",
  ],
};

export type SkillGroup = {
  category: string;
  note: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    note: "Where I spend most of my time.",
    skills: ["Node.js", "Express.js", "JavaScript (ES6+)", "TypeScript", "REST APIs", "WebSockets", "MQTT", "JWT", "OAuth"],
  },
  {
    category: "Databases",
    note: "Relational by default; document stores where they fit.",
    skills: ["MySQL", "MongoDB", "Redis", "Sequelize", "Prisma", "Mongoose", "Schema design"],
  },
  {
    category: "Libraries & Tools",
    note: "The backend toolkit I reach for.",
    skills: ["bcrypt", "Joi", "Multer", "Nodemailer", "Node-cron", "Axios", "Jest", "Swagger / OpenAPI", "Postman"],
  },
  {
    category: "DevOps & Cloud",
    note: "I deploy and run what I build.",
    skills: ["Docker", "AWS (EC2, S3)", "Nginx", "PM2", "Linux", "Git"],
  },
  {
    category: "IoT & Real-Time",
    note: "Connecting devices to the cloud.",
    skills: ["ESP32", "ESP8266", "MQTT", "WebSocket streaming", "OTA firmware updates"],
  },
  {
    category: "Frontend",
    note: "Enough to ship the UI a backend needs end to end.",
    skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  context: string;
  problem: string;
  architecture: string;
  challenges: { title: string; body: string }[];
  achievements: string[];
  stack: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "erp-billing",
    name: "ERP Billing System",
    tagline: "Invoicing, GST, and role-based access for a small-business ERP — built on a Node.js API.",
    context: "Business application · backend + web",
    problem:
      "A business was running invoicing and stock on paper and spreadsheets — slow billing, GST worked out by hand, and no control over who could see or change what. They needed a proper billing system: correct GST, printable invoices, and access limited by role, without the weight of enterprise accounting software.",
    architecture:
      "A Node.js and Express API over MySQL, with role-based access control enforced through JWT. Invoice totals and GST are computed server-side inside transactions so the books never drift, PDF invoices are generated on the server, and Redis caches the hot, repeatedly-read endpoints to keep the API fast under load.",
    challenges: [
      {
        title: "GST and money that must be exact",
        body: "Tax and rounding bugs erode trust fast. GST and line-item totals are computed once on the server with consistent rounding, and the generated PDF invoice reads from that single source of truth — never recalculated on the client.",
      },
      {
        title: "Access control done properly",
        body: "Different roles see and do different things. I enforced role-based access at the API with JWT so permissions are checked on every request, not hidden behind a UI that can be bypassed.",
      },
      {
        title: "Keeping the API fast",
        body: "Some lookups were read constantly and rarely changed. I put Redis in front of those, which cut repeated database hits and kept response times low without complicating the write path.",
      },
    ],
    achievements: [
      "Role-based access control enforced with JWT",
      "Server-side GST calculation and PDF invoice generation",
      "Redis caching for optimized API performance",
      "Transactional billing so stock and invoices never drift",
    ],
    stack: ["Node.js", "Express.js", "MySQL", "Redis", "JWT", "REST APIs"],
    featured: true,
  },
  {
    slug: "pumpsathi",
    name: "PumpSathi — Smart GSM Motor Controller",
    tagline: "Remote control and monitoring for agricultural water pumps over GSM and MQTT.",
    context: "IoT product · firmware + backend + dashboard",
    problem:
      "Farmers often have to physically travel to a pump house to switch a motor on or off, and have no way to know if the motor tripped, ran dry, or drew dangerous current while they were away. The goal was a controller that works over a normal cellular connection — no Wi-Fi, no local network — and that's safe enough to trust with a three-phase motor.",
    architecture:
      "An ESP8266 paired with a SIM800L GSM module runs the device firmware and publishes telemetry and subscribes to commands over MQTT. A Node.js backend brokers messages, persists device state and energy readings, and pushes live updates to the dashboard over WebSocket. Commands are acknowledged end to end so the UI reflects what the device actually did, not just what was requested.",
    challenges: [
      {
        title: "Unreliable cellular links",
        body: "GSM connections drop constantly. I made every command idempotent and acknowledged, so a retried 'start' never double-switches the motor, and the device reconciles its real state on reconnect instead of trusting stale instructions.",
      },
      {
        title: "Protecting the motor",
        body: "Dry-run and over-current conditions can destroy a pump. The firmware reads current and runtime signals locally and cuts the motor itself, without waiting on the server — the cloud is for visibility and control, never the last line of safety.",
      },
      {
        title: "Updating devices in the field",
        body: "Once a controller is installed in a remote pump house, you can't go back to reflash it. I built OTA updates so firmware can be pushed over the air, with checks to avoid bricking a device on a flaky connection.",
      },
    ],
    achievements: [
      "Backend sustaining live connections from a fleet of devices over MQTT and WebSockets",
      "End-to-end remote start/stop with acknowledged commands over GSM",
      "On-device dry-run and over-current protection independent of the network",
      "Over-the-air firmware updates for deployed devices",
    ],
    stack: ["ESP8266", "SIM800L", "MQTT", "Node.js", "WebSocket", "MySQL", "Embedded C"],
    featured: true,
  },
  {
    slug: "water-delivery",
    name: "Water Delivery Management",
    tagline: "Routes, deliveries, customers, and payments for a water supply business.",
    context: "Business application · web",
    problem:
      "A water delivery business was tracking routes, daily deliveries, and customer dues by hand. It was easy to miss a delivery, lose track of who had paid, and hard to plan a delivery person's route. They needed the whole cycle — from route to delivery to payment — in one place.",
    architecture:
      "A Node.js backend models customers, routes, scheduled deliveries, and payments, with a React interface for staff. Deliveries are recorded against routes so a day's work is a clear, ordered list, and each delivery rolls into the customer's running balance and payment history.",
    challenges: [
      {
        title: "Routes that change daily",
        body: "Delivery lists aren't static — customers get added, skipped, or moved. I modelled deliveries as records against a route and date rather than a fixed schedule, so the day's plan stays accurate without rebuilding it each time.",
      },
      {
        title: "Tracking dues correctly",
        body: "Customers pay partially, in advance, or on credit. Payments and deliveries both post to a running balance so the amount owed is always derived from the ledger, never typed in by hand.",
      },
    ],
    achievements: [
      "Route-based delivery planning and tracking",
      "Per-customer balances derived from deliveries and payments",
      "Delivery history and outstanding dues at a glance",
      "Billing and payment recording in one workflow",
    ],
    stack: ["Node.js", "Express.js", "MySQL", "React.js"],
    featured: true,
  },
  {
    slug: "sahubandhan",
    name: "SahuBandhan — Community Platform",
    tagline: "Backend for a community and matrimonial platform — verified profiles, search, matchmaking, and notifications.",
    context: "Community platform · Node.js backend + app",
    problem:
      "Community matchmaking and member directories still run on paper registers, WhatsApp groups, and word of mouth. SahuBandhan brings the community onto one platform — verified member profiles, preference-based search, and matchmaking — with the backend doing the real work of modelling members and matching them.",
    architecture:
      "A Node.js and Express API over MySQL serves a member-facing app. Profiles, preferences, and connection requests are modelled server-side, search runs as composable filters against the member directory, and Firebase Cloud Messaging delivers push notifications for new matches and requests.",
    challenges: [
      {
        title: "Matchmaking on real preferences",
        body: "A match isn't a single 'like' — members filter on community sub-group, location, profession, and family details. I modelled those as structured fields and built search as composable filters over the directory, not free-text guessing.",
      },
      {
        title: "Trust at community scale",
        body: "A community platform lives or dies on whether profiles are real. Profiles go through a verification step and basic moderation so the directory stays trustworthy as the member base grows.",
      },
      {
        title: "Keeping members in the loop",
        body: "People won't keep reopening an app to check for matches. I pushed updates through Firebase notifications on the events that matter — a new match or a connection request — so the platform reaches out instead of waiting to be checked.",
      },
    ],
    achievements: [
      "Member directory with structured, verified profiles",
      "Preference-based search and matchmaking across the member base",
      "Push notifications for matches and requests via Firebase",
      "Member-to-member connection requests and matching",
    ],
    stack: ["Node.js", "Express.js", "MySQL", "REST APIs", "Firebase FCM"],
    featured: true,
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  body: string;
};

// ATS-friendly role header — clear title, org, and dates. Niket Group is his
// own independent venture (not an employer), so the summary makes that explicit.
export const experienceRole = {
  title: "Backend Developer · Niket Group",
  period: "2022 – Present",
  summary:
    "Independent / self-employed under my own Niket Group — building and maintaining Node.js REST APIs and IoT backends for SaaS and business applications, owning each project from architecture through deployment and production support.",
};

export const timeline: TimelineItem[] = [
  {
    period: "2022",
    title: "Started independent work",
    body: "Began taking on projects under my own Niket Group — REST APIs and small custom tools for businesses. Learned to scope a problem, work with clients, and ship software that keeps running after handover.",
  },
  {
    period: "2023",
    title: "Business applications & APIs",
    body: "Billing, inventory, and internal business tools on Node.js and MySQL. Working with money and GST taught me to care about transactions and getting the numbers exactly right.",
  },
  {
    period: "2024",
    title: "IoT & connected devices",
    body: "Built PumpSathi — embedded hardware talking to a backend over GSM and MQTT. Pushed me into firmware, message reliability, and designing for failure.",
  },
  {
    period: "Now",
    title: "Backend & real-time systems",
    body: "Focused on Node.js backends and real-time IoT — REST APIs with JWT auth, MQTT and WebSocket device communication, and deployment on AWS with Docker and Nginx. Studying for a BCA alongside the work.",
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Makhanlal Chaturvedi University, Bhopal",
  year: "Expected May 2026",
  // CGPA fluctuates semester to semester and the degree is ongoing, so it's not
  // shown. Set a value here (e.g. "7.8 / 10") if you want it displayed.
  cgpa: "",
  note: "Studying alongside independent development work.",
};

export const certifications = [
  "Node.js, Express, MongoDB & More: The Complete Bootcamp — Udemy (2022)",
  "Backend Development with Node.js & RESTful APIs — Udemy (2023)",
];
