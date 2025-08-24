import fs from "fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";

type FrontMatter = {
  title: string;
  description: string;
  image?: string;
  date?: string;
  tags?: string[];
  author?: string[];
};

// Enhanced getSingleBlog with rehype-pretty-code
export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "src/data/blog", `${slug}.mdx`),
      "utf-8",
    );

    const { content, frontmatter } = await compileMDX<FrontMatter>({
      source: singleBlog,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
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
          ],
        },
      },
    });
    return { content, frontmatter };
  } catch (error) {
    console.error("Error reading blog:", error);
    return null;
  }
};

// Keep your other functions as they are
export const getAllBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "src/data/blog"));

  const allBlogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const frontmatter = await getBlogFrontMatterBySlug(slug);
      return { slug, ...frontmatter };
    }),
  );
  // console.log(allBlogs);
  return allBlogs;
};

export const getBlogFrontMatterBySlug = async (slug: string) => {
  try {
    const filePath = path.join(process.cwd(), "src/data/blog", `${slug}.mdx`);
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
      },
    });
    return { content, frontmatter };
  } catch (error) {
    console.error("Error reading aboutMe.mdx:", error);
    return null;
  }
};
