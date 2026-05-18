export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: "completed" | "in-progress" | "planned";
  isLive?: boolean;
  category: "web-app" | "dashboard" | "api" | "mobile" | "other";
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  features: string[];
  year: string;
}

export const projects: Project[] = [
  {
    id: "HRMS-Platform",
    title: "HRMS Platform",
    subtitle: "Onboarding, Attendance & Leaves",
    description:
      "A full stack HRMS platform for employee onboarding, location-based attendance, leave workflows, and company hierarchy management.",
    longDescription:
      "Built an employee management platform that helps HR teams onboard employees, track location-based attendance within a defined radius, manage leave applications and approvals, and view company hierarchy. The frontend was built with React and TypeScript, while the backend used Node.js, Express, Prisma, and PostgreSQL.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "Postgresql",
      "Docker-Container",
    ],
    status: "completed",
    isLive: false,
    category: "dashboard",
    links: {
      github: "https://github.com/anubhawdwd/hrms-be",
      // live: "#",
    },
    features: [
      "Employee onboarding and profile management",
      "Location-based attendance within a defined radius",
      "Leave application and approval workflow",
      "Company hierarchy and reporting structure",
      "PostgreSQL data modeling with Prisma ORM",
      "REST API backend built with Node.js and Express",
    ],
    year: "2026",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website ",
    subtitle: "Portfolio & Blog",
    description:
      "Modern portfolio website built with Next.js, featuring interactive animations and optimized for SEO.",
    longDescription:
      "Developed a personal portfolio using Next.js 15 with App Router, TypeScript, Tailwind CSS, MDX, and motion-based interactions. The site includes a blog system, SEO metadata, JSON-LD structured data, sitemap generation, responsive UI, and portfolio content focused on Python backend, Node.js, React, and full stack software engineering.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "MDX",
      "Vercel",
    ],
    status: "completed",
    isLive: true,
    category: "web-app",
    links: {
      live: "https://anubhawdwivedi.com",
      github: "https://github.com/anubhawdwd/Project-v2",
    },
    features: [
      "Interactive card-shuffle avatar selection",
      "Animated timeline and tech stack",
      "MDX-powered blog system",
      "SEO optimized for multiple name variations",
      "Dark/light mode support",
      "Responsive animations and micro-interactions",
    ],
    year: "2026",
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "web-app", label: "Web Applications" },
  { id: "dashboard", label: "Dashboards" },
  // { id: "api", label: "APIs" },
  // { id: "other", label: "Other" },
];
