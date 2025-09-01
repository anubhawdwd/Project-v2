import { Container } from "@/components/container";
import { Landingblogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import { HeroSection } from "@/components/hero-section";
import TechGridLanding from "@/components/tech-grid-landing";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-4 pt-20 md:pt-20 md:pb-10">
        <HeroSection />

        <TechGridLanding />

        <Projects />
        <Landingblogs />
      </Container>
    </div>
  );
}
