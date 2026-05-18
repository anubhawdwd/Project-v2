export const siteUrl = "https://anubhawdwivedi.com";

export const nameVariations = [
  "Anubhaw Dwivedi",
  "Anubhaw",
  "Anubhawdwivedi",
  "Anubhaw Dwivedi Software Engineer",
  "Anubhav",
  "Anubhav Dwivedi",
  "Anubhav Divedi",
  "Anubhav Software Engineer",
];

export const resume = {
  name: "Anubhaw Dwivedi",
  displayName: "Anubhaw",
  role: "Python Backend & Full Stack Software Engineer",
  alternateNames: nameVariations,
  summary:
    "Software Engineer building backend systems and full stack web applications with Python, FastAPI, Node.js, React, and PostgreSQL. I focus on secure APIs, scalable backend workflows, clean architecture, and practical production-ready software.",
  heroSummary:
    "Software Engineer building backend systems and full stack web applications with Python, FastAPI, Node.js, React, and PostgreSQL.",
  contact: {
    email: "anubhawdwivedi@gmail.com",
    phone: "+91 94562 32279",
    phoneHref: "tel:+919456232279",
    github: "https://github.com/anubhawdwd",
    githubLabel: "github.com/anubhawdwd",
    linkedin: "https://www.linkedin.com/in/anubhawdwd/",
    linkedinLabel: "linkedin.com/in/anubhawdwd",
    portfolio: siteUrl,
    location: "India",
  },
  skills: [
    {
      label: "Frontend",
      values: ["React", "Next.js", "JavaScript", "TypeScript"],
    },
    {
      label: "Backend",
      values: [
        "Python",
        "FastAPI",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
      ],
    },
    {
      label: "Databases",
      values: ["PostgreSQL", "MongoDB"],
    },
    {
      label: "Tools & Practices",
      values: [
        "Docker",
        "Git",
        "GitHub",
        "Swagger/OpenAPI",
        "API Design",
        "Backend Architecture",
        "Clean Architecture",
        "Responsive Design",
        "SEO",
      ],
    },
  ],
  featuredTechnologies: [
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
  ],
  experience: [
    {
      company: "Phibonacci Learnings",
      role: "Python Backend & Full Stack Software Engineer",
      period: "Sep 2024 - Present",
      points: [
        "Building and improving LMS platform features across backend APIs and React-based user interfaces.",
        "Working with Python/FastAPI, Node.js, React, and database-backed workflows for learning platform features.",
        "Developed secure API flows with authentication, access control, and cleaner request handling.",
        "Refactored Quiz APIs and backend workflows to improve maintainability and response time.",
        "Contributed to better frontend responsiveness through reusable React component patterns.",
      ],
    },
    {
      company: "Freelance Web Developer",
      role: "Full Stack Developer",
      period: "Jan 2022 - Aug 2024",
      points: [
        "Developed SaaS dashboards, business platforms, and admin panels using React, Node.js, Express.js, and PostgreSQL.",
        "Built REST APIs, authentication systems, and third-party integrations for multiple client projects.",
        "Designed maintainable backend structures with reusable service patterns and clean API boundaries.",
        "Improved SEO, accessibility, and frontend performance for production applications.",
        "Delivered full stack applications focused on performance, clean architecture, and user experience.",
      ],
    },
    {
      company: "NTT DATA Services",
      role: "Software Developer",
      period: "Aug 2019 - Oct 2021",
      points: [
        "Developed enterprise React applications with backend API integrations for large-scale client systems.",
        "Collaborated with backend and design teams to deliver responsive, production-ready user interfaces.",
        "Improved reusable component architecture and reduced UI-related production issues.",
        "Optimized frontend performance and enhanced usability across enterprise web applications.",
      ],
    },
  ],
  education: {
    degree: "Integrated Dual Degree - B.Tech + M.Tech in VLSI Technology",
    school: "Gautam Buddha University, Greater Noida, U.P.",
    period: "2014 - 2019",
  },
  focus:
    "Python backend development, FastAPI services, Node.js APIs, clean React applications, secure API design, PostgreSQL-backed systems, performance optimization, and maintainable full stack software.",
  languages: ["English", "Hindi"],
  keywords: [
    ...nameVariations,
    "Python Developer",
    "Python Backend Developer",
    "FastAPI Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Fullstack Developer",
    "Software Engineer",
    "Node.js Developer",
    "React Developer",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "API Design",
    "Web Developer",
    "SaaS Developer",
  ],
} as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: resume.name,
  alternateName: resume.alternateNames,
  url: siteUrl,
  image: `${siteUrl}/avatar.jpg`,
  jobTitle: [
    "Software Engineer",
    "Full Stack Developer",
    "Python Backend Developer",
    "FastAPI Developer",
  ],
  description: resume.summary,
  email: resume.contact.email,
  telephone: resume.contact.phone,
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Gautam Buddha University",
  },
  knowsAbout: resume.keywords,
  sameAs: [
    resume.contact.github,
    resume.contact.linkedin,
    "https://x.com/anubhawdwd",
  ],
};

export type Resume = typeof resume;
