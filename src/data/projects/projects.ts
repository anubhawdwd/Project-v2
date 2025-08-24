export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  status: "completed" | "in-progress" | "planned";
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
    id: "lms-modernization",
    title: "LMS Platform Modernization",
    subtitle: "Enterprise Learning Management System",
    description:
      "Leading modernization of LMS platform with Angular & ASP.NET for enhanced mobile performance.",
    longDescription:
      "Spearheaded the complete modernization of a legacy Learning Management System, implementing mobile-first design principles and high-performance architecture. Led a development team to deliver a 25% performance improvement on mobile/tablet devices while enhancing content delivery security across backend and cloud layers.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop&q=60",
    technologies: [
      "Angular",
      "ASP.NET Core",
      "TypeScript",
      "SQL",
      "Azure",
      "Docker",
    ],
    status: "completed",
    category: "web-app",
    links: {
      // Add your actual links here
      demo: "#",
    },
    features: [
      "25% performance improvement on mobile/tablet",
      "10x faster Quiz API (2000ms → 210ms)",
      "Enhanced security across backend and cloud layers",
      "Mobile-first responsive design",
      "Real-time collaboration features",
    ],
    year: "2024",
  },
  {
    id: "excalidraw-clone",
    title: "Excalidraw Clone",
    subtitle: "Collaborative Online Whiteboard",
    description:
      "Building a collaborative online whiteboard with React.js, focusing on drawing tools and real-time collaboration.",
    longDescription:
      "Currently developing a comprehensive whiteboard application inspired by Excalidraw, featuring advanced drawing tools, real-time collaboration capabilities, and a modern, intuitive user interface. The project emphasizes performance optimization and seamless user experience across devices.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1600&auto=format&fit=crop&q=60",
    technologies: [
      "React.js",
      "TypeScript",
      "Socket.io",
      "Canvas API",
      "Node.js",
      "WebRTC",
    ],
    status: "in-progress",
    category: "web-app",
    links: {
      github: "https://github.com/anubhawdwd", // Add your actual GitHub link
      demo: "#",
    },
    features: [
      "Real-time collaborative drawing",
      "Advanced drawing tools and shapes",
      "Export to multiple formats",
      "Responsive design for all devices",
      "Undo/Redo functionality",
      "Layer management system",
    ],
    year: "2024",
  },
  {
    id: "client-dashboard-suite",
    title: "Client Dashboard Suite",
    subtitle: "Custom Business Dashboards",
    description:
      "Developed custom business websites and dashboards using React.js, Next.js, Node.js, and MongoDB.",
    longDescription:
      "Created a comprehensive suite of custom dashboards and business websites for various clients during freelance period. Delivered tailored admin functionality and content management systems designed specifically for non-technical clients, resulting in significant organic traffic growth.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=60",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    status: "completed",
    category: "dashboard",
    links: {
      // Add portfolio or case study link
      demo: "#",
    },
    features: [
      "200%+ increase in clients' organic traffic",
      "Custom admin functionality",
      "Content management tailored for non-technical users",
      "API integrations with third-party services",
      "Responsive design across all devices",
      "SEO optimization and accessibility",
    ],
    year: "2021-2024",
  },
  {
    id: "enterprise-spa-suite",
    title: "Enterprise SPA Suite",
    subtitle: "Insurance & Construction Sector Apps",
    description:
      "Built single page applications in React.js for enterprise Insurance and Construction sector clients.",
    longDescription:
      "Developed multiple single-page applications for enterprise clients in the Insurance and Construction sectors at NTT DATA. Focused on creating responsive, user-friendly interfaces that reduced UI bugs and improved user experience through streamlined frontend logic and design collaboration.",
    image:
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1600&auto=format&fit=crop&q=60",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Git",
    ],
    status: "completed",
    category: "web-app",
    links: {
      // These might be confidential, so keep as demo
      demo: "#",
    },
    features: [
      "Reduced UI bugs and bounce rate significantly",
      "Streamlined frontend logic for better UX",
      "Responsive design implementation",
      "Cross-browser compatibility",
      "Performance optimization",
      "Reduced production issues by 10%",
    ],
    year: "2019-2021",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website v2",
    subtitle: "Personal Portfolio & Blog",
    description:
      "Modern portfolio website built with Next.js, featuring interactive animations and optimized for SEO.",
    longDescription:
      "Developed a comprehensive personal portfolio website using Next.js 15 with App Router, featuring advanced animations with Framer Motion, interactive components, and a complete blog system. The site is optimized for SEO to rank for multiple name variations and showcases professional work through engaging UI elements.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&auto=format&fit=crop&q=60",
    technologies: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "MDX",
      "Vercel",
    ],
    status: "in-progress",
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
    year: "2024",
  },
  {
    id: "upcoming-project",
    title: "AI-Powered Code Assistant",
    subtitle: "Next-Generation Developer Tool",
    description:
      "Planning to build an AI-powered code assistant tool to help developers with code generation and optimization.",
    longDescription:
      "An ambitious upcoming project to create an intelligent code assistant that leverages AI to help developers write better code, suggest optimizations, and automate repetitive tasks. The tool will focus on modern JavaScript frameworks and will include features like code review assistance and automated testing suggestions.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop&q=60",
    technologies: [
      "Next.js",
      "AI/ML",
      "TypeScript",
      "Python",
      "OpenAI API",
      "Electron",
    ],
    status: "planned",
    category: "other",
    links: {},
    features: [
      "AI-powered code generation",
      "Intelligent code optimization suggestions",
      "Automated testing assistance",
      "Multi-language support",
      "IDE integration",
      "Real-time collaboration features",
    ],
    year: "2025",
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "web-app", label: "Web Applications" },
  { id: "dashboard", label: "Dashboards" },
  { id: "api", label: "APIs" },
  { id: "other", label: "Other" },
];
