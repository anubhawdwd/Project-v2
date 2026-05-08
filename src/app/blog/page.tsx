import type { Metadata } from "next";
import { getAllBlogs } from "../utils/mdx";
import BlogsPageClient from "./BlogsPageClient";
import { resume, siteUrl } from "@/data/aboutMe/resume";

export const metadata: Metadata = {
  title: "Blog - Anubhaw Dwivedi | Full Stack Developer",
  description:
    "Read programming notes and web development guides by Anubhaw Dwivedi, also searched as Anubhav Dwivedi, covering Python, backend, React, Next.js, and software engineering.",
  keywords: [...resume.keywords, "Programming blog", "Web development blog"],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default async function BlogsPage() {
  const allBlogs = await getAllBlogs();

  return <BlogsPageClient allBlogs={allBlogs} />;
}
