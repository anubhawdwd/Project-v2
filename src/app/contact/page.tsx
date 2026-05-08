import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { resume, siteUrl } from "@/data/aboutMe/resume";

export const metadata: Metadata = {
  title: "Contact - Anubhaw Dwivedi | Full Stack Developer",
  description:
    "Contact Anubhaw Dwivedi, also searched as Anubhav Dwivedi, for Python, FastAPI, React, Next.js, full stack development, and software engineering opportunities.",
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
