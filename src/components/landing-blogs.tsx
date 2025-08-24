import React from "react";
import { Link } from "next-view-transitions";
import { getAllBlogs } from "@/app/utils/mdx";

export const Landingblogs = async () => {
  const allBlogs = await getAllBlogs();
  const featuredBlogs = allBlogs.slice(0, 3);

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content?.split(" ").length || 0;
    return Math.ceil(words / wordsPerMinute) || 2;
  };

  return (
    <div className="py-10">
      <p className="text-secondary mb-8 max-w-lg text-sm md:text-sm">
        I love writing down my thoughts and sharing knowledge
      </p>

      <div className="grid gap-6 md:gap-8">
        {featuredBlogs.map((blog, index) => (
          <article key={blog.slug} className="group">
            <Link href={`/blog/${blog.slug}`}>
              <div className="hover:border-primary/50 rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 group-hover:scale-[1.02] hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center gap-4">
                      {blog.date && (
                        <div className="flex items-center gap-1">
                          🕒 {formatDate(blog.date)}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        📖 {getReadTime(blog.description || "")} min read
                      </div>
                    </div>
                    <span className="text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      →
                    </span>
                  </div>

                  <h2 className="group-hover:text-primary text-xl font-bold text-neutral-900 transition-colors md:text-2xl dark:text-neutral-100">
                    {blog.title}
                  </h2>

                  <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {truncate(blog.description || "", 150)}
                  </p>

                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {blog.tags.slice(0, 3).map((tag: string) => (
                        <span
                          key={tag}
                          className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                      {blog.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs text-neutral-500 dark:text-neutral-500">
                          +{blog.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Blog CTA Section - Similar to Projects */}
      <div className="mt-16 text-center">
        <div className="from-primary/10 to-primary/10 border-primary/20 rounded-2xl border bg-gradient-to-r via-blue-500/10 p-8">
          <h3 className="text-primary mb-4 text-2xl font-bold">
            Want to read more insights?
          </h3>
          <p className="text-secondary mb-6 text-sm">
            Explore my complete blog with in-depth articles on web development,
            modern technologies, and coding best practices
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/blog"
              className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-xl px-8 py-3 font-medium text-white transition-all duration-200 hover:shadow-lg"
            >
              View All Articles
            </Link>
            <Link
              href="/contact"
              className="border-primary text-primary hover:bg-primary inline-flex items-center justify-center rounded-xl border px-8 py-3 font-medium transition-all duration-200 hover:text-white"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
