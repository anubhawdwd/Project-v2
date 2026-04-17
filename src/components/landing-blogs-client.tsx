"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowRight, FiBookOpen, FiClock, FiLoader } from "react-icons/fi";

type Blog = {
  slug: string;
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
};

export function LandingBlogsClient({ blogs }: { blogs: Blog[] }) {
  const [openingSlug, setOpeningSlug] = useState<string | null>(null);

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
    <div className="grid gap-6 md:gap-8">
      {blogs.map((blog) => (
        <article key={blog.slug} className="group">
          <Link
            href={`/blog/${blog.slug}`}
            onClick={() => setOpeningSlug(blog.slug)}
          >
            <div className="hover:border-primary/50 rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 group-hover:scale-[1.02] hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                  <div className="flex flex-wrap items-center gap-4">
                    {blog.date && (
                      <div className="flex items-center gap-1">
                        <FiClock size={14} />
                        {formatDate(blog.date)}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <FiBookOpen size={14} />
                      {getReadTime(blog.description || "")} min read
                    </div>
                  </div>

                  {openingSlug === blog.slug ? (
                    <span className="text-primary flex shrink-0 items-center gap-1 text-xs font-medium">
                      <FiLoader className="animate-spin" size={14} />
                      Opening...
                    </span>
                  ) : (
                    <FiArrowRight
                      size={16}
                      className="text-primary shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  )}
                </div>

                <h2 className="group-hover:text-primary text-xl font-bold text-neutral-900 transition-colors md:text-2xl dark:text-neutral-100">
                  {blog.title}
                </h2>

                <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {truncate(blog.description || "", 150)}
                </p>

                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {blog.tags.slice(0, 3).map((tag) => (
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
  );
}
