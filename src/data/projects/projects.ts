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
    status: "completed",
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
  // { id: "dashboard", label: "Dashboards" },
  // { id: "api", label: "APIs" },
  { id: "other", label: "Other" },
];
