import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { resume, siteUrl } from "@/data/aboutMe/resume";

export const metadata: Metadata = {
  title: "Contact - Anubhaw Dwivedi | Python Backend & Full Stack Software Engineer",
  description:
    "Contact Anubhaw Dwivedi for Python, FastAPI, Node.js, React, Next.js, backend API, full stack development, and software engineering opportunities.",
  keywords: [
    ...resume.keywords,
    "Contact Anubhaw Dwivedi",
    "Hire Full Stack Developer",
    "Hire Python Developer",
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
