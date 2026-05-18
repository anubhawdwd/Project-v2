import type { Metadata } from "next";
import { getAllBlogs } from "../utils/mdx";
import BlogsPageClient from "./BlogsPageClient";
import { resume, siteUrl } from "@/data/aboutMe/resume";

export const metadata: Metadata = {
  title: "Blog - Anubhaw Dwivedi | Python Backend & Full Stack Software Engineer",
  description:
    "Read programming notes and backend engineering guides by Anubhaw Dwivedi, covering Python, FastAPI, PostgreSQL, Node.js, React, and software engineering.",
  keywords: [...resume.keywords, "Programming blog", "Web development blog"],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default async function BlogsPage() {
  const allBlogs = await getAllBlogs();

  return <BlogsPageClient allBlogs={allBlogs} />;
}
