import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Landingblogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import { HeroSection } from "@/components/hero-section";
import TechGridLanding from "@/components/tech-grid-landing";
import { resume, siteUrl } from "@/data/aboutMe/resume";

export const metadata: Metadata = {
  title: "Anubhaw Dwivedi | Python Backend & Full Stack Software Engineer",
  description:
    "Portfolio of Anubhaw Dwivedi, a Software Engineer building backend systems and full stack applications with Python, FastAPI, Node.js, React, and PostgreSQL.",
  keywords: [...resume.keywords],
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start bg-amber-50">
      <Container className="min-h-screen p-4 pt-20 md:pt-20 md:pb-10">
        <HeroSection />

        <TechGridLanding />

        <Projects />
        <Landingblogs />
      </Container>
    </div>
  );
}
