import type { Metadata } from "next";
import ProjectsClient from "./ProjectClient";
import { resume, siteUrl } from "@/data/aboutMe/resume";

export const metadata: Metadata = {
  title: "Projects - Anubhaw Dwivedi | Full Stack Developer",
  description:
    "Explore projects by Anubhaw Dwivedi, also searched as Anubhav Dwivedi, including Python, FastAPI, React, Next.js, Node.js, and full stack software engineering work.",
  keywords: [
    ...resume.keywords,
    "Projects",
    "Portfolio",
    "Python projects",
    "Full stack projects",
  ],
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
