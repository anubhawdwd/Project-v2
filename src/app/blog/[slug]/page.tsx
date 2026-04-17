// src/app/blog/[slug]/page.tsx
import { Container } from "@/components/container";
import {
  getBlogFrontMatterBySlug,
  getBlogSlugs,
  getSingleBlog,
} from "@/app/utils/mdx";
import { redirect } from "next/navigation";
import CodeBlockEnhancer from "@/components/CodeBlockEnhancer";
import { Toc } from "@/components/toc";
import SocialFollow from "@/components/SocialFollow";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Fix generateMetadata function - params is Promise here too
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>; // Changed: params is Promise
}) {
  const resolvedParams = await params; // Added: await params
  const frontmatter = await getBlogFrontMatterBySlug(resolvedParams.slug);

  if (!frontmatter) {
    return {
      title: "Blog not Found",
    };
  }

  return {
    title: frontmatter.title + " - Anubhaw Dwivedi",
    description: frontmatter.description,
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>; // Already correct
}) {
  const { slug } = await params; // Already correct
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter, headings } = blog;

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="flex gap-10">
        {/* MAIN CONTENT */}
        <div className="flex-1 min-w-0">
          {/* <header className="mb-8">
            <h1 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
              {frontmatter.title}
            </h1>
            {frontmatter.description && (
              <p className="text-secondary mb-4 text-lg">
                {frontmatter.description}
              </p>
            )}
          </header> */}

          {/* <article className="prose prose-neutral dark:prose-invert max-w-none
              prose-h1:text-3xl prose-h1:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2
              prose-code:before:content-none prose-code:after:content-none
            "> */}
          <article
            className="
              prose-p:text-base sm:prose-p:text-lg
              prose prose-neutral dark:prose-invert max-w-none

              /* H1 */
              prose-h1:text-2xl sm:prose-h1:text-3xl md:prose-h1:text-4xl
              prose-h1:font-bold

              /* H2 */
              prose-h2:text-xl sm:prose-h2:text-2xl md:prose-h2:text-3xl
              prose-h2:mt-8 sm:prose-h2:mt-10
              prose-h2:mb-3 sm:prose-h2:mb-4

              /* H3 */
              prose-h3:text-lg sm:prose-h3:text-xl md:prose-h3:text-2xl
              prose-h3:mt-5 sm:prose-h3:mt-6
              prose-h3:mb-2

              /* code */
              prose-code:before:content-none
              prose-code:after:content-none
            "
          >
            {content}
          </article>

          <CodeBlockEnhancer />
          <SocialFollow />
        </div>

        {/* TOC SIDEBAR */}
        {/* <div className="hidden lg:block"> */}
        <Toc headings={headings} />
        {/* </div> */}
      </Container>

    </div>
  );
}
