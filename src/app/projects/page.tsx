import type { Metadata } from "next";
import ProjectsClient from "./ProjectClient";
import { resume, siteUrl } from "@/data/aboutMe/resume";

export const metadata: Metadata = {
  title: "Projects - Anubhaw Dwivedi | Python Backend & Full Stack Software Engineer",
  description:
    "Explore projects by Anubhaw Dwivedi, including Python, FastAPI, Node.js, React, Next.js, PostgreSQL, APIs, and full stack software engineering work.",
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
