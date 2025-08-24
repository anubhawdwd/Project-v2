import { Container } from "@/components/container";
import ProjectsClient from "./ProjectClient";

// SEO Metadata (works in Server Components)
export const metadata = {
  title: "Projects - Anubhaw Dwivedi | Full Stack Developer",
  description:
    "Explore projects by Anubhaw Dwivedi (aka Anubhav) - from LMS modernization to collaborative whiteboards. React.js, Next.js, Angular, and more.",
  keywords: [
    "Anubhaw Dwivedi",
    "Anubhaw",
    "Anubhav",
    "Projects",
    "Portfolio",
    "React.js",
    "Next.js",
    "Full Stack Developer",
  ],
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
