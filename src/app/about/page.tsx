import AboutPageClient from "./AboutPageClient";
import { resume, siteUrl } from "@/data/aboutMe/resume";

export const metadata = {
  title: `About ${resume.name} | ${resume.role}`,
  description: resume.summary,
  keywords: [resume.name, resume.displayName, resume.role, ...resume.keywords],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
