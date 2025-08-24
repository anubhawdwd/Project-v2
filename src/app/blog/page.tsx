import { Container } from "@/components/container";
import { getAllBlogs } from "../utils/mdx";
import BlogsPageClient from "./BlogsPageClient";

export const metadata = {
  title: "Blog - Anubhaw Dwivedi | Full Stack Developer",
  description:
    "Read about web development, React.js, Next.js, and modern programming techniques by Anubhaw Dwivedi (aka Anubhav).",
};

export default async function BlogsPage() {
  const allBlogs = await getAllBlogs();

  return <BlogsPageClient allBlogs={allBlogs} />;
}
