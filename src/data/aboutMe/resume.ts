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
  role: "Python Full Stack Developer",
  alternateNames: nameVariations,
  summary:
    "Python Full Stack Developer with 3+ years of experience building scalable backend systems and modern web applications. I specialize in Python, FastAPI, React, and Node.js to build secure APIs, responsive user interfaces, and production-ready software systems.",
  heroSummary:
    "A Python full stack developer crafting scalable backend systems and clean modern UIs. Currently building things at Phibonacci Learnings.",
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
      label: "Databases & Tools",
      values: ["PostgreSQL", "MongoDB", "Git", "GitHub", "Postman", "Swagger"],
    },
    {
      label: "Practices",
      values: [
        "API Design",
        "Performance Optimization",
        "Responsive Design",
        "Clean Architecture",
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
      role: "Python Full Stack Developer",
      period: "Sep 2024 - Present",
      points: [
        "Building and scaling LMS platform features using Python/FastAPI, React, and Node.js.",
        "Developed secure backend APIs with authentication, access control, and optimized database queries.",
        "Improved frontend responsiveness and application performance through reusable React component architecture.",
        "Refactored critical Quiz APIs and backend workflows resulting in major response time improvements.",
        "Contributed to scalable backend design and better learning experience for students and instructors.",
      ],
    },
    {
      company: "Freelance Web Developer",
      role: "Python Full Stack Developer",
      period: "Jan 2022 - Aug 2024",
      points: [
        "Developed SaaS dashboards, business platforms, and admin panels using Python, FastAPI, React, and PostgreSQL.",
        "Built RESTful APIs, authentication systems, and third-party integrations for multiple client projects.",
        "Designed scalable backend structures with reusable service architecture and maintainable code patterns.",
        "Improved SEO, accessibility, and frontend performance for production applications.",
        "Delivered scalable full stack applications focused on performance, clean architecture, and user experience.",
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
    "Scalable backend architecture, FastAPI services, clean React applications, secure API development, performance optimization, and maintainable full stack systems built for real-world production environments.",
  languages: ["English", "Hindi"],
  keywords: [
    ...nameVariations,
    "Python Developer",
    "FastAPI Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Fullstack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
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
    resume.role,
    "Software Engineer",
    "Full Stack Developer",
    "Python Developer",
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
