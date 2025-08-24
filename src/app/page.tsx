// import { Container } from "@/components/container";
// import { Landingblogs } from "@/components/landing-blogs";
// import { Projects } from "@/components/projects";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-start justify-start">
//       <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
//         <h1 className="text-primary text-3xl font-bold tracking-tight md:text-5xl">
//           Hey, I’m Anubhaw 👋
//         </h1>
//         <p className="text-secondary text:sm max-w-lg pt-4 md:text-sm">
//           A full-stack developer crafting scalable apps and beautiful UIs.
//           Currently building things at{" "}
//           <span className="font-semibold text-black dark:text-white">
//             Phibonacci Solutions
//           </span>
//           .
//         </p>
//         <Projects />
//         <Landingblogs />
//       </Container>
//     </div>
//   );
// }

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
