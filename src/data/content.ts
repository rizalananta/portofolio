// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// the site — no need to touch any component.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Afrizal Widya Ananta",
  shortName: "Afrizal Ananta",
  initials: "AWA",
  role: "Business Analytics · Product Management · Data Strategy",
  description:
    "Management undergraduate at Universitas Airlangga focused on business analytics and product management — currently a Data Analyst Intern at FIFGROUP, building dashboards and data-driven decisions.",
  email: "anantafrizal@gmail.com",
  location: "DKI Jakarta, Indonesia",
  linkedin: "https://linkedin.com/in/afrizalananta",
  linkedinLabel: "linkedin.com/in/afrizalananta",
  availability: "Available for opportunities",
  resumeUrl: "#",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { label: "GPA / 4.00", value: "3.56", sub: "Universitas Airlangga" },
  { label: "Records processed", value: "400K+", sub: "SQL surveillance data" },
  { label: "Merchants tracked", value: "300K+", sub: "Nationwide dashboard" },
];

export const heroMetrics = [
  { label: "Current role", value: "Data Analyst Intern", sub: "FIFGROUP · since May 2026", live: true },
  { label: "Academic GPA", value: "3.56 / 4.00", sub: "Management, Univ. Airlangga" },
  { label: "English proficiency", value: "C2 · 72/100", sub: "EF SET Certificate" },
];

export const marqueeItems = [
  "Business Analytics",
  "Product Management",
  "Data Processing",
  "SQL",
  "Power BI",
  "Dashboard Reporting",
  "Agile & Scrum",
  "Merchant Analytics",
  "Customer Relations",
  "Microsoft Excel",
];

export const about = {
  eyebrow: "About",
  title: "Turning raw data into decisions that move a business forward.",
  paragraphs: [
    "I'm a management undergraduate at Universitas Airlangga with a focus on business analytics and product strategy. My work sits at the intersection of numbers and decisions — pulling structure out of messy data and translating it into something a stakeholder can act on.",
    "Over the last two years I've moved through data analytics, business development, and customer-facing roles at FIFGROUP, Bank Rakyat Indonesia, and PLN — each one sharpening a different half of the same skill: understanding a business problem, then proving the answer with data.",
  ],
  highlights: [
    {
      title: "Data-first thinking",
      desc: "Comfortable moving between SQL, Excel, and Power BI to turn raw records into dashboards people actually use.",
    },
    {
      title: "Cross-functional delivery",
      desc: "Worked inside Agile/Scrum teams, writing PRDs and coordinating with stakeholders across regional offices.",
    },
    {
      title: "Operational ownership",
      desc: "Led teams and vendor relationships end-to-end, from SOPs to supplier terms to revenue outcomes.",
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
  title: "Academic background",
  university: "Universitas Airlangga",
  degree: "Bachelor's Degree — Management",
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

export const experience: { eyebrow: string; title: string; tabs: { key: string; label: string; items: ExperienceItem[] }[] } = {
  eyebrow: "Experience",
  title: "Professional & organizational journey",
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
            "Managed the end-to-end Warung Kejujuran program — inventory, stock reconciliation, and data documentation — to assess employee compliance and purchasing behavior.",
          ],
        },
        {
          company: "PT. Bank Rakyat Indonesia (Persero) Tbk",
          role: "Business Development Intern — Retail Transaction",
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
            "Ran daily front- and back-of-house operations — service, cash handling, and inventory — for consistency at scale.",
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
            "Coordinated logistics — accommodation, transport, permits, supplies — for 4,000+ participants.",
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
    skills: ["Bahasa Indonesia — Native", "English — C2 Proficient", "Presentation & Reporting"],
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

export type Project = {
  title: string;
  label: string;
  description: string;
  shortDescription: string;
  tags: string[];
  href?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "Merchant Tier-Shift Dashboard",
    label: "BRI Analytics",
    shortDescription:
      "Nationwide merchant data analysis across 18 BRI regional offices — supporting acquisition performance and strategic reporting.",
    description:
      "Analyzed nationwide merchant, EDC, and QRIS transaction data spanning 18 BRI regional offices. Built and maintained a tier-shift dashboard to monitor market coverage and merchant acquisition performance, plus EDC market share across all Indonesian provinces to support expansion planning.",
    tags: ["Data Analytics", "Dashboard", "Excel"],
    gradient: "from-[#0D2B4E] to-[#0E4A8A]",
  },
  {
    title: "SmartFleet IoT Solution",
    label: "Product Case Study",
    shortDescription: "Scrum project and product requirements document for an IoT fleet-management platform.",
    description:
      "SmartFleet is an IoT-based fleet management concept that helps logistics companies track vehicles in real time, optimize delivery routes, and improve operational efficiency using data and machine learning.",
    tags: ["Jira", "Product Management", "Scrum"],
    gradient: "from-[#241636] to-[#4C2A87]",
  },
  {
    title: "Dashboard PRD",
    label: "Confluence Documentation",
    shortDescription: "Product requirements document for a merchant tier-shift dashboard, written in Confluence.",
    description:
      "Built a Product Requirements Document in Confluence for the Merchant Tier-Shift Dashboard — structuring large-scale transaction data, defining tiering logic, and translating business needs into clear technical requirements.",
    tags: ["Confluence", "Product Management", "PRD"],
    href: "https://afrizalananta.atlassian.net/wiki/x/_YAB",
    gradient: "from-[#0F1B2E] to-[#173456]",
  },
];

export const cta = {
  eyebrow: "Let's connect",
  title: "Open to internships, collaborations & opportunities.",
  subtitle:
    "Actively looking for roles in business analytics, product management, and data-driven strategy. Let's talk about how I can contribute to your team.",
};

export const footer = {
  description:
    "Management undergraduate focused on data analytics, product management, and driving business growth through insight-driven strategy.",
  copyright: `© ${new Date().getFullYear()} ${site.name}. All rights reserved.`,
};
