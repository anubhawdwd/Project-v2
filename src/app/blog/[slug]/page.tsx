import { Container } from "@/components/container";
import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs/promises";
import path from "path";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/app/utils/mdx";
import { redirect } from "next/navigation";
import { param } from "motion/react-client";

// export const metadata = {
//   title: "Anubhaw's Blog",
//   description:
//     "Anubhaw Dwivedi's (aka anubhav) blog on software development and more.",
// };

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const frontmatter = await getBlogFrontMatterBySlug(params.slug);
  // const {frontmatter} = blog;

  if (!frontmatter) {
    return {
      title: "Blog not Found",
    };
  }

  return {
    title: frontmatter.title + "Anubhaw Dwivedi",
    description: frontmatter.description,
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }
  const { content, frontmatter } = blog;
  console.log("frontmatter", frontmatter);
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <div className="prose">{content}</div>
      </Container>
    </div>
  );
}
