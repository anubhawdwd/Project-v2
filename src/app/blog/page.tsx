import { Container } from "@/components/container";
import { getAllBlogs } from "../utils/mdx";
import { Link } from "next-view-transitions";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Anubhaw's Blog",
  description:
    "Anubhaw Dwivedi's (aka anubhav) blog on software development and more.",
};

export default async function BlogsPage() {
  const allBlogs = await getAllBlogs();

  function truncate(str: string, maxLength: number) {
    if (!str) return "";
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          All Blogs
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          A full-stack developer crafting scalable apps and beautiful UIs.
          Currently building things at{" "}
          <span className="font-semibold text-black dark:text-white">
            Phibonacci Solutions
          </span>
          .
        </p>
        <div className="flex flex-col gap-4 py-10">
          {allBlogs.map((blog, index) => (
            <Link href={`/blog/${blog.slug}`} key={index}>
              <div className="flex items-center justify-between">
                <h2 className="text-primary text-base font-bold tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-secondary text-sm md:text-sm">
                  {formatDate(blog.date ?? "")}
                </p>
              </div>
              <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                {truncate(blog.description ?? "", 100)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
