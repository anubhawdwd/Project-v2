import { Container } from "@/components/container";
import ContactClient from "./ContactClient";

// SEO Metadata
export const metadata = {
  title: "Contact - Anubhaw Dwivedi | Full Stack Developer",
  description:
    "Get in touch with Anubhaw Dwivedi (aka Anubhav) for collaboration opportunities, freelance projects, or just to say hello. Let's build something amazing together!",
  keywords: [
    "Contact Anubhaw Dwivedi",
    "Anubhaw",
    "Anubhav",
    "Hire Full Stack Developer",
    "React Developer",
    "Next.js Developer",
  ],
};

export default function ContactPage() {
  return <ContactClient />;
}
