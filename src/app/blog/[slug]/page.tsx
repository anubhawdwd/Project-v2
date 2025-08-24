// import { getBlogFrontMatterBySlug, getSingleBlog } from "@/app/utils/mdx";
// import { Container } from "@/components/container";
// import { redirect } from "next/navigation";
// import CodeBlockEnhancer from "@/components/CodeBlockEnhancer";

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const frontmatter = await getBlogFrontMatterBySlug(params.slug);

//   if (!frontmatter) {
//     return {
//       title: "Blog not Found",
//     };
//   }

//   return {
//     title: frontmatter.title + " - Anubhaw Dwivedi",
//     description: frontmatter.description,
//   };
// }

// // export default async function SingleBlogPage({
// //   params,
// // }: {
// //   params: { slug: string };
// // }) {
// //   const { slug } = params;
// //   const blog = await getSingleBlog(slug);

// //   if (!blog) {
// //     redirect("/blog");
// //   }

// //   const { content, frontmatter } = blog;

// //   return (
// //     <div className="flex min-h-screen items-start justify-start">
// //       <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
// //         {/* Blog Header */}
// //         <header className="mb-8">
// //           <h1 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
// //             {frontmatter.title}
// //           </h1>
// //           {frontmatter.description && (
// //             <p className="text-secondary mb-4 text-lg">
// //               {frontmatter.description}
// //             </p>
// //           )}
// //           {frontmatter.date && (
// //             <time className="text-sm text-neutral-500 dark:text-neutral-400">
// //               {new Date(frontmatter.date).toLocaleDateString("en-US", {
// //                 year: "numeric",
// //                 month: "long",
// //                 day: "numeric",
// //               })}
// //             </time>
// //           )}
// //         </header>

// //         {/* Blog Content with Enhanced Styling */}
// //         <article className="prose prose-lg dark:prose-invert max-w-none">
// //           {content}
// //         </article>

// //         {/* Add this line */}
// //         <CodeBlockEnhancer />
// //       </Container>
// //     </div>
// //   );
// // }

// export default async function SingleBlogPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params; // 👈 await here
//   const blog = await getSingleBlog(slug);

//   if (!blog) {
//     redirect("/blog");
//   }

//   const { content, frontmatter } = blog;

//   return (
//     <div className="flex min-h-screen items-start justify-start">
//       <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
//         <header className="mb-8">
//           <h1 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
//             {frontmatter.title}
//           </h1>
//           {frontmatter.description && (
//             <p className="text-secondary mb-4 text-lg">
//               {frontmatter.description}
//             </p>
//           )}
//           {frontmatter.date && (
//             <time className="text-sm text-neutral-500 dark:text-neutral-400">
//               {new Date(frontmatter.date).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </time>
//           )}
//         </header>

//         <article className="prose prose-lg dark:prose-invert max-w-none">
//           {content}
//         </article>

//         <CodeBlockEnhancer />
//       </Container>
//     </div>
//   );
// }
import { Container } from "@/components/container";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/app/utils/mdx";
import { redirect } from "next/navigation";
import CodeBlockEnhancer from "@/components/CodeBlockEnhancer";

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

  const { content, frontmatter } = blog;

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <header className="mb-8">
          <h1 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
            {frontmatter.title}
          </h1>
          {frontmatter.description && (
            <p className="text-secondary mb-4 text-lg">
              {frontmatter.description}
            </p>
          )}
          {frontmatter.date && (
            <time className="text-sm text-neutral-500 dark:text-neutral-400">
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          {content}
        </article>

        <CodeBlockEnhancer />
      </Container>
    </div>
  );
}
