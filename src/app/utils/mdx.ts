import fs from "fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

type FrontMatter = {
  title: string;
  description: string;
  image?: string;
  date?: string;
  tags?: string[];
  author?: string[];
};

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "src/data", `${slug}.mdx`),
      "utf-8",
    );
    const { content, frontmatter } = await compileMDX<FrontMatter>({
      source: singleBlog,
      options: {
        parseFrontmatter: true,
      },
    });
    return { content, frontmatter };
  } catch (error) {
    return null;
  }
};

export const getAllBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "src/data"));

  const allBlogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const frontmatter = await getBlogFrontMatterBySlug(slug);
      return { slug, ...frontmatter };
    }),
  );
  console.log(allBlogs);
  return allBlogs;
};

export const getBlogFrontMatterBySlug = async (slug: string) => {
  try {
    const filePath = path.join(process.cwd(), "src/data", `${slug}.mdx`);
    const content = await fs.readFile(filePath, "utf-8");

    const { frontmatter } = await compileMDX<FrontMatter>({
      source: content,
      options: {
        parseFrontmatter: true,
      },
    });

    return frontmatter;
  } catch (error) {
    return null;
  }
};
