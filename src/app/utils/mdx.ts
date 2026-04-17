// src/app/utils/mdx.ts
import fs from "fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import { mdxComponents } from "@/components/mdx-components";
import rehypeSlug from "rehype-slug";
import { visit } from "unist-util-visit";
import GithubSlugger from "github-slugger";

type FrontMatter = {
  title: string;
  description: string;
  image?: string;
  date?: string;
  tags?: string[];
  author?: string[];
};
function getText(node: any): string {
  if (node.type === "text") return node.value;
  if (!node.children) return "";
  return node.children.map(getText).join("");
}

const remarkExtractHeadings = () => (tree: any, file: any) => {
  const headings: any[] = [];
  const slugger = new GithubSlugger();

  visit(tree, "heading", (node: any) => {
    if ([2, 3].includes(node.depth)) {
      const text = getText(node);
      if (!text) return;

      const id = slugger.slug(text);

      headings.push({
        id,
        text,
        level: node.depth === 2 ? "h2" : "h3",
      });
    }
  });

  file.data.headings = headings;
};
const blogDirectory = path.join(process.cwd(), "src/data/blog");
const getBlogPath = (slug: string) => path.join(blogDirectory, `${slug}.mdx`);
const shouldHighlightCode = process.env.NODE_ENV === "production";

const rehypePlugins: any[] = [
  rehypeSlug,
  ...(shouldHighlightCode
    ? [
      [
        rehypePrettyCode,
        {
          theme: "github-dark-dimmed",
          keepBackground: false,
          transformers: [
            {
              name: "copy-button",
              code(node: any) {
                node.properties["data-copy-button"] = true;
              },
            },
          ],
        },
      ],
    ]
    : []),
];

const compileBlog = async (slug: string) => {
  const singleBlog = await fs.readFile(getBlogPath(slug), "utf-8");

  let extractedHeadings: any[] = [];

  const result = await compileMDX<FrontMatter>({
    source: singleBlog,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [
          remarkGfm, 
          () => (tree: any, file: any) => {
            const headings: any[] = [];
            const slugger = new GithubSlugger();

            visit(tree, "heading", (node: any) => {
              if ([2, 3].includes(node.depth)) {
                const text = getText(node);
                if (!text) return;

                const id = slugger.slug(text);

                headings.push({
                  id,
                  text,
                  level: node.depth === 2 ? "h2" : "h3",
                });
              }
            });

            extractedHeadings = headings;  // Store in closure
          }
        ],
        rehypePlugins: [
          rehypeSlug,
          ...(shouldHighlightCode
            ? [[rehypePrettyCode, {
              theme: "github-dark-dimmed",
              keepBackground: false,
              transformers: [
                {
                  name: "copy-button",
                  code(node: any) {
                    node.properties["data-copy-button"] = true;
                  },
                },
              ],
            }]] as any
            : []),
        ],
      },
    },
    components: mdxComponents,
  });

  return {
    ...result,
    headings: extractedHeadings,  // Use the captured headings
  };
};

const compiledBlogCache = new Map<string, ReturnType<typeof compileBlog>>();

// Enhanced getSingleBlog with rehype-pretty-code
export const getSingleBlog = async (slug: string) => {
  try {
    if (!compiledBlogCache.has(slug)) {
      compiledBlogCache.set(slug, compileBlog(slug));
    }
    const { content, frontmatter, headings } = await compiledBlogCache.get(slug)!;
    console.log('******', headings);
    return { content, frontmatter, headings };
  } catch (error) {
    console.error("Error reading blog:", error);
    compiledBlogCache.delete(slug);
    return null;
  }
};

export const getBlogSlugs = async () => {
  const files = await fs.readdir(blogDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
};

// Keep your other functions as they are
export const getAllBlogs = async () => {
  const slugs = await getBlogSlugs();

  const allBlogs = await Promise.all(
    slugs.map(async (slug) => {
      const frontmatter = await getBlogFrontMatterBySlug(slug);
      return { slug, ...frontmatter };
    }),
  );
  // console.log(allBlogs);
  return allBlogs;
};

export const getBlogFrontMatterBySlug = async (slug: string) => {
  try {
    const content = await fs.readFile(getBlogPath(slug), "utf-8");
    return matter(content).data as FrontMatter;
  } catch (error) {
    return null;
  }
};

export const getAboutMeContent = async () => {
  try {
    const aboutMeFile = await fs.readFile(
      path.join(process.cwd(), "src/data/aboutMe", "aboutMe.mdx"),
      "utf-8",
    );
    const { content, frontmatter } = await compileMDX<FrontMatter>({
      source: aboutMeFile,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
      components: mdxComponents,
    });
    return { content, frontmatter };
  } catch (error) {
    console.error("Error reading aboutMe.mdx:", error);
    return null;
  }
};
