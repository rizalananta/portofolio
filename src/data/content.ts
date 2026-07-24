// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// the site - no need to touch any component.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Afrizal Widya Ananta",
  shortName: "Afrizal Ananta",
  initials: "AWA",
  role: "Business Analytics · Product Management · Data Strategy",
  tagline: "I turn raw data into decisions that move a business forward.",
  description:
    "Management undergraduate at Universitas Airlangga focused on business analytics and product management - currently a Data Analyst Intern at FIFGROUP, based between Jakarta and Surabaya, Indonesia.",
  email: "anantafrizal@gmail.com",
  location: "Jakarta, Indonesia",
  linkedin: "https://linkedin.com/in/afrizalananta",
  linkedinLabel: "linkedin.com/in/afrizalananta",
  availability: "Available for opportunities",
  resumeUrl: "#",
};

export const nav = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
];

export const contactLinks = {
  linkedin: site.linkedin,
  resume: site.resumeUrl,
  email: `mailto:${site.email}`,
};

// ── Home / hero ─────────────────────────────────────────────

export const heroMetrics = [
  { label: "Current role", value: "Data Analyst Intern", sub: "FIFGROUP · since May 2026", live: true },
  { label: "Academic GPA", value: "3.56 / 4.00", sub: "Management, Univ. Airlangga" },
  { label: "English proficiency", value: "C2 · 72/100", sub: "EF SET Certificate" },
];

// ── Selected work (home list) + case studies ────────────────

export type ProcessStep = {
  title: string;
  description: string;
};

export type GalleryImage = {
  caption: string;
  kind: string; // e.g. "Dashboard screenshot", "SQL query", "Event photo" - placeholder label until real images are added
  gradient: string;
  span?: "full" | "half"; // layout hint
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  company: string;
  year: string;
  timeline: string;
  role: string;
  team: string;
  tools: string[];
  summary: string;
  gradient: string;
  coverImage?: string;
  overview: string[];
  myRole: string[];
  process: ProcessStep[];
  gallery: GalleryImage[];
  results: string[];
  reflection: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "merchant-tier-shift-dashboard",
    coverImage: "/images/merchant-tier-cover.jpg",
    title: "Merchant Tier-Shift Dashboard",
    category: "Data Analytics · Dashboard",
    company: "PT. Bank Rakyat Indonesia (Persero) Tbk",
    year: "2025 – 2026",
    timeline: "Ongoing, Oct 2025 – May 2026",
    role: "Business Development Intern - Retail Transaction",
    team: "Retail Transaction team, BRI Head Office",
    tools: ["Excel", "SQL", "Power BI", "Google Sheets"],
    summary:
      "Nationwide merchant, EDC, and QRIS transaction data across 18 regional offices - built and maintained to support acquisition performance and strategic reporting.",
    gradient: "from-[#0D2B4E] to-[#0E4A8A]",
    overview: [
      "BRI's retail transaction team needed a clear, standing view of how merchants were moving between performance tiers - nationwide, across 18 regional offices - to know where acquisition efforts were working and where coverage gaps remained.",
      "The underlying data (merchant records, EDC device activity, QRIS transactions) existed, but it was scattered and not structured in a way stakeholders could act on quickly.",
    ],
    myRole: [
      "Analyzed nationwide merchant, EDC, and QRIS transaction data spanning all 18 regional offices to evaluate device and merchant productivity.",
      "Built and maintained a merchant tier-shift dashboard covering 300,000+ merchants nationwide to track market coverage and acquisition performance.",
      "Tracked EDC market share across all Indonesian provinces to support expansion planning discussions with stakeholders.",
      "Monitored a specific national pipeline (padel-court merchants) as a case study in BRI's push into emerging customer segments.",
    ],
    process: [
      {
        title: "Understanding the ask",
        description:
          "Started by sitting with the regional performance reports already in use, to see what questions stakeholders were actually asking that raw transaction exports couldn't answer quickly.",
      },
      {
        title: "Structuring the data",
        description:
          "Cleaned and reshaped merchant, EDC, and QRIS datasets so tier movement (upgrades, downgrades, new entries) could be tracked consistently across regional offices with different reporting habits.",
      },
      {
        title: "Building the dashboard",
        description:
          "Modeled tier-shift logic and built the dashboard views in a way regional teams could filter by office, tier, and time period without needing to touch the underlying data.",
      },
      {
        title: "Validating with stakeholders",
        description:
          "Walked the dashboard through with the retail transaction team to confirm the tiering logic matched their existing definitions before it became a standing reference.",
      },
    ],
    gallery: [
      { caption: "Tier-shift dashboard overview", kind: "Power BI dashboard screenshot", gradient: "from-[#0B1E33] to-[#123B63]", span: "full" },
      { caption: "Regional breakdown view", kind: "Dashboard screenshot", gradient: "from-[#0E2A47] to-[#1B4F82]" },
      { caption: "EDC market share by province", kind: "Dashboard screenshot", gradient: "from-[#0D2440] to-[#164675]" },
      { caption: "Underlying SQL extraction logic", kind: "SQL query", gradient: "from-[#0A1B2E] to-[#0F3A5C]" },
      { caption: "Padel-court merchant pipeline tracking", kind: "Working notes", gradient: "from-[#102843] to-[#1A4D7A]" },
    ],
    results: [
      "Gave the retail transaction team a single, standing view of merchant tier movement across all 18 regional offices - replacing ad-hoc, office-by-office reporting.",
      "Supported expansion-planning conversations with province-level EDC market share data that wasn't previously assembled in one place.",
      "Provided visibility into the padel-court merchant pipeline as BRI tested acquisition in an emerging segment.",
    ],
    reflection: [
      "Working across 18 offices meant working across 18 slightly different reporting habits - a lot of the real effort was in reconciling definitions before any dashboard could be trusted.",
      "If I revisited this, I'd push earlier for a shared data-entry standard across regional offices, rather than normalizing inconsistencies downstream every reporting cycle.",
    ],
  },
  {
    slug: "smartfleet-iot-solution",
    coverImage: "/images/smartfleet-cover.jpg",
    title: "SmartFleet IoT Solution",
    category: "Product Management · Case Study",
    company: "Independent product case study",
    year: "2025",
    timeline: "Self-directed, ~3 weeks",
    role: "Product Owner (case study)",
    team: "Solo case study, run using Scrum/Jira practices",
    tools: ["Jira", "Confluence", "Figma"],
    summary:
      "A Scrum-run product case study and requirements document for an IoT fleet-management platform aimed at logistics operators.",
    gradient: "from-[#241636] to-[#4C2A87]",
    overview: [
      "SmartFleet is a self-directed product management case study: an IoT-based fleet management concept for logistics companies that need real-time vehicle tracking, route optimization, and better operational visibility.",
      "The goal wasn't to ship software - it was to practice running a product from problem definition through a structured backlog the way a Scrum team would.",
    ],
    myRole: [
      "Defined the problem statement and target user (logistics fleet operators managing delivery vehicles at scale).",
      "Wrote user stories and acceptance criteria, and organized them into epics inside Jira.",
      "Ran the case study using Scrum ceremonies - sprint planning, backlog grooming - to practice translating ambiguous goals into a structured plan.",
    ],
    process: [
      {
        title: "Problem framing",
        description:
          "Started from a simple observation: logistics companies lose money and time without real-time visibility into where vehicles are and how efficiently routes are being run.",
      },
      {
        title: "Defining the backlog",
        description:
          "Broke the concept into epics - live tracking, route optimization, driver reporting - then wrote user stories under each with clear acceptance criteria.",
      },
      {
        title: "Running it like Scrum",
        description:
          "Organized the backlog into sprints inside Jira, prioritizing by impact and dependency, to practice the discipline of sequencing product work rather than just listing features.",
      },
    ],
    gallery: [
      { caption: "Jira backlog structure", kind: "Jira screenshot", gradient: "from-[#1E1230] to-[#3B2166]", span: "full" },
      { caption: "Epic breakdown", kind: "Jira screenshot", gradient: "from-[#221537] to-[#43257A]" },
      { caption: "Sprint board", kind: "Jira screenshot", gradient: "from-[#1A0F29] to-[#341D5C]" },
    ],
    results: [
      "Produced a structured, sprint-ready backlog for a fleet-management concept, organized into epics with clear acceptance criteria.",
      "Practiced running product discovery and prioritization end-to-end using real Scrum tooling rather than theory alone.",
    ],
    reflection: [
      "The hardest part wasn't writing user stories - it was resisting the urge to jump straight to features before the problem statement was tight enough to prioritize against.",
      "Next time, I'd bring in a rough technical feasibility pass earlier, since a few of the IoT connectivity assumptions would need real hardware input to validate.",
    ],
  },
  {
    slug: "dashboard-prd",
    coverImage: "/images/dashboard-prd-cover.jpg",
    title: "Dashboard PRD",
    category: "Product Management · Documentation",
    company: "Independent product case study",
    year: "2025",
    timeline: "Self-directed",
    role: "Author",
    team: "Solo",
    tools: ["Confluence"],
    summary:
      "A Product Requirements Document for the Merchant Tier-Shift Dashboard, written in Confluence to formalize the tiering logic and requirements.",
    gradient: "from-[#0F1B2E] to-[#173456]",
    overview: [
      "Alongside building the Merchant Tier-Shift Dashboard at BRI, I wrote a formal Product Requirements Document - structuring how large-scale transaction data would be organized, how tiering logic should be defined, and what a technical team would need to build against it.",
    ],
    myRole: [
      "Authored the PRD end-to-end in Confluence: problem statement, requirements, tiering-logic definitions, and success criteria.",
      "Translated business needs from the retail transaction team into requirements specific enough for a technical build.",
    ],
    process: [
      {
        title: "Requirements gathering",
        description:
          "Worked from the same stakeholder conversations behind the dashboard itself, but focused specifically on what needed to be true for a technical team to implement the tiering logic correctly.",
      },
      {
        title: "Structuring the document",
        description:
          "Organized the PRD around problem, scope, functional requirements, and edge cases - keeping it specific enough to prevent ambiguity during implementation.",
      },
    ],
    gallery: [
      { caption: "PRD structure in Confluence", kind: "Confluence screenshot", gradient: "from-[#0C1522] to-[#123048]", span: "full" },
      { caption: "Tiering logic definitions", kind: "Confluence screenshot", gradient: "from-[#0E1A2C] to-[#16375A]" },
    ],
    results: [
      "Gave the dashboard build a single source of truth for tiering logic, reducing back-and-forth about requirements during implementation.",
    ],
    reflection: [
      "Writing the PRD after some of the dashboard work had already started taught me the value of documenting requirements before implementation begins, not alongside it.",
    ],
    href: "https://afrizalananta.atlassian.net/wiki/x/_YAB",
  },
];

// ── About / info page ────────────────────────────────────────

export const about = {
  eyebrow: "About me",
  intro: "I'm passionate about turning messy data into decisions people can actually act on.",
  storyBlocks: [
    {
      heading: "Studying management, drawn to data.",
      paragraphs: [
        "I'm a management undergraduate at Universitas Airlangga. Somewhere in my second year, coursework in financial and management accounting turned into a genuine interest in how businesses actually use numbers to make decisions - not just report them.",
        "That pulled me toward analytics: SQL, Excel, Power BI - tools that let me turn a spreadsheet of transactions into something a stakeholder could read in thirty seconds and act on.",
      ],
    },
    {
      heading: "Learning by doing, across three very different rooms.",
      paragraphs: [
        "Over the last two years I've worked inside FIFGROUP, Bank Rakyat Indonesia, and PLN - a finance company, a state bank, and a state utility. Three very different organizations, but the same underlying skill each time: understand the business problem first, then prove the answer with data.",
        "In between, running operations at a local F&B business taught me the other half - that a dashboard is only useful if the operational reality behind it is solid.",
      ],
    },
    {
      heading: "What I'm doing now.",
      paragraphs: [
        "Currently a Data Analyst Intern at FIFGROUP, working with SQL and Power BI on surveillance and compliance reporting. In parallel, wrapping up a Business Development internship at BRI focused on nationwide merchant and transaction analytics.",
        "Outside of work, I volunteer with the SDGs Center at Universitas Airlangga and help run HR programs for my faculty's student radio station.",
      ],
    },
  ],
  info: [
    { label: "Based in", value: "Jakarta, Indonesia" },
    { label: "Studying", value: "Management, Univ. Airlangga" },
    { label: "Focus", value: "Analytics & Product" },
    { label: "Status", value: "Open to internships" },
  ],
};

export const education = {
  eyebrow: "Education",
  university: "Universitas Airlangga",
  degree: "Bachelor's Degree - Management",
  period: "2022 – Present",
  location: "Surabaya, East Java",
  gpa: "3.56",
  gpaLabel: "GPA / 4.00",
  courses: [
    "Financial Management I & II",
    "Human Resources Management",
    "Compensation Management",
    "Performance Management",
    "Introduction to Economic Theory",
    "Management Accounting",
  ],
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
};

export const experience: { eyebrow: string; tabs: { key: string; label: string; items: ExperienceItem[] }[] } = {
  eyebrow: "Experience",
  tabs: [
    {
      key: "professional",
      label: "Professional",
      items: [
        {
          company: "FIFGROUP",
          role: "Data Analyst Intern",
          period: "May 2026 – Present",
          location: "Jakarta Selatan, DKI Jakarta",
          current: true,
          bullets: [
            "Extracted and processed 400,000+ surveillance records using SQL (Toad for Oracle) to support risk monitoring, compliance analysis, and operational reporting.",
            "Refined data models and visualizations in Power BI surveillance dashboards, improving accessibility and decision-making speed for stakeholders.",
            "Managed the end-to-end Warung Kejujuran program - inventory, stock reconciliation, and data documentation - to assess employee compliance and purchasing behavior.",
          ],
        },
        {
          company: "PT. Bank Rakyat Indonesia (Persero) Tbk",
          role: "Business Development Intern - Retail Transaction",
          period: "Oct 2025 – May 2026",
          location: "Jakarta Pusat, DKI Jakarta",
          current: true,
          bullets: [
            "Analyzed nationwide merchant, EDC, and QRIS transaction data across 18 regional offices to evaluate device and merchant productivity.",
            "Managed a merchant tier-shift dashboard covering 300,000+ merchants nationwide to track market coverage and acquisition performance.",
            "Monitored the national pipeline for padel-court merchants as part of BRI's expansion into emerging customer segments.",
            "Verified EDC readiness and configured promotions for major events, including USS 2025, the Bryan Adams concert, and GESREK Festival.",
          ],
        },
        {
          company: "PT. PLN (Persero) UP3 Yogyakarta",
          role: "Customer Relations Intern",
          period: "Jul 2025",
          location: "Bantul, D.I. Yogyakarta",
          bullets: [
            "Drove acquisition of 300+ new users for the PLN Mobile app through targeted outreach and communication.",
            "Cleaned and filtered 600+ customer records in Excel to ensure accurate reporting.",
            "Made 200+ daily outbound calls for a prepaid-to-postpaid conversion campaign, lifting awareness and conversions.",
            "Built self-assessment presentations for ULP Wates, supporting internal evaluation and rollout.",
          ],
        },
        {
          company: "Golden Brown Surabaya",
          role: "Head of Operations",
          period: "Aug – Oct 2023",
          location: "Surabaya, East Java",
          bullets: [
            "Ran daily front- and back-of-house operations - service, cash handling, and inventory - for consistency at scale.",
            "Led a 9-person team, writing SOPs and job descriptions that raised productivity and role clarity.",
            "Maintained relationships with 7 key suppliers, securing better terms and lifting on-time delivery by ~20%.",
            "Contributed to workflow changes that helped drive 106% month-over-month revenue growth.",
          ],
        },
      ],
    },
    {
      key: "organizational",
      label: "Organizational",
      items: [
        {
          company: "E-Radio FEB UNAIR",
          role: "Human Resources Staff",
          period: "Feb – Dec 2024",
          location: "Surabaya, East Java",
          bullets: [
            "Planned and ran 3 HR engagement events (Upgrading, Recharging I, Farewell E-Radio 2024), each drawing 75%+ attendance.",
          ],
        },
        {
          company: "House Ilmu Indonesia",
          role: "Human Capital Staff",
          period: "Oct 2022 – Feb 2023",
          location: "Surabaya, East Java",
          bullets: [
            "Led the 'KPI System' development initiative as project lead.",
            "Named 'Staff Terdisiplin' (Most Disciplined Staff) for December and January.",
            "Closed the term with a 3.30/4.00 ('Good') performance appraisal score.",
          ],
        },
      ],
    },
    {
      key: "volunteer",
      label: "Volunteer",
      items: [
        {
          company: "Efestaphoria",
          role: "Operational Committee",
          period: "Nov 2023",
          location: "Surabaya, East Java",
          bullets: [
            "Coordinated logistics - accommodation, transport, permits, supplies - for 4,000+ participants.",
            "Designed health and security protocols to safeguard all event stakeholders.",
            "Liaised with vendors, local authorities, and internal teams to keep execution compliant and seamless.",
          ],
        },
        {
          company: "SDGs Center Universitas Airlangga",
          role: "Volunteer",
          period: "Apr – Dec 2024",
          location: "Surabaya, East Java",
          bullets: [
            "Helped organize events, seminars, and workshops promoting the Sustainable Development Goals.",
            "Supported registration, participant guidance, and on-the-day coordination.",
            "Provided administrative and logistical support behind the program's outreach.",
          ],
        },
      ],
    },
  ],
};

export type SkillCategory = {
  icon: string;
  title: string;
  skills: string[];
  tools: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    icon: "ChartBar",
    title: "Data & Analytics",
    skills: [
      "Data Cleaning & Filtering",
      "Dashboard Maintenance",
      "Business Insight Reporting",
      "Market Share Analysis",
      "Performance Monitoring",
    ],
    tools: ["Excel", "SQL", "Google Sheets", "Whimsical", "Power BI"],
  },
  {
    icon: "Workflow",
    title: "Project & Business Management",
    skills: ["Agile Project Management", "Scrum Framework", "Team Leadership"],
    tools: ["Jira", "Confluence", "Figma", "MS Word", "PowerPoint", "Google Docs", "Google Slides"],
  },
  {
    icon: "Globe",
    title: "Language & Communication",
    skills: ["Bahasa Indonesia - Native", "English - C2 Proficient", "Presentation & Reporting"],
    tools: ["Canva", "Photoshop", "Illustrator"],
  },
];

export const certifications = [
  { name: "SQL Basic", meta: "HackerRank · Verified", url: "https://www.hackerrank.com/certificates/9605c2dabf17" },
  { name: "SQL Intermediate", meta: "HackerRank · Verified", url: "https://www.hackerrank.com/certificates/3812907bd1f8" },
  { name: "Excel: Beginner to Advanced", meta: "Udemy", url: "https://www.udemy.com/certificate/UC-8cc1e5d2-baf9-4086-a578-59a8a81f20a0/" },
  { name: "Agile PM + Scrum + Jira", meta: "Udemy", url: "https://www.udemy.com/certificate/UC-d7c88ad3-1817-4a66-b5cb-5d655ca53374/" },
  { name: "How to Create a Jira SCRUM Project", meta: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/WKT60F28UH0Z" },
  { name: "EF SET English Certificate", meta: "72/100 · C2 Proficient", url: "https://cert.efset.org/en/Q3jijb" },
];

export const interests = [
  "Reading business & product case studies",
  "Basketball",
  "Exploring new dashboards & data tools",
  "Traveling around Java",
];

export const currentlyDoing = [
  "Interning as a Data Analyst at FIFGROUP",
  "Wrapping up a Business Development internship at BRI",
  "Finishing my management degree at Universitas Airlangga",
];

export const footer = {
  description:
    "Management undergraduate focused on data analytics, product management, and driving business growth through insight-driven strategy.",
  copyright: `© ${new Date().getFullYear()} ${site.name}. All rights reserved.`,
};
