import { Container } from "@/components/container";
import { getAboutMeContent } from "../utils/mdx";
import AboutPageClient from "./AboutPageClient";

export const metadata = {
  title: "About Anubhaw Dwivedi | Full Stack Developer",
  description:
    "Learn about Anubhaw Dwivedi (aka Anubhav), a Full Stack Developer with expertise in React.js, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Anubhaw Dwivedi",
    "Anubhaw",
    "Anubhav",
    "Full Stack Developer",
    "React.js",
    "Next.js",
  ],
};

export default async function AboutPage() {
  const aboutMeData = await getAboutMeContent();

  return <AboutPageClient aboutMeData={aboutMeData} />;
}
