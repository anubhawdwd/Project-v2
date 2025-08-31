"use client";
import { Container } from "@/components/container";
// import { Link } from "next-view-transitions";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiClock,
  FiBookOpen,
  FiArrowRight,
  FiSearch,
  FiTag,
} from "react-icons/fi";
import Image from "next/image";

interface BlogPageProps {
  allBlogs: any[]; // You can create a proper Blog type later
}

export default function BlogsPageClient({ allBlogs }: BlogPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get unique tags from all blogs
  const allTags = Array.from(
    new Set(allBlogs.flatMap((blog) => blog.tags || [])),
  ).filter(Boolean);

  // Filter blogs based on search and tags
  const filteredBlogs = allBlogs.filter((blog) => {
    const matchesSearch =
      !searchTerm ||
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = !selectedTag || blog.tags?.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  function truncate(str: string, maxLength: number) {
    if (!str) return "";
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content?.split(" ").length || 0;
    return Math.ceil(words / wordsPerMinute);
  };

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-primary mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            My Blog 📝
          </h1>
          <p className="text-secondary mx-auto mb-8 max-w-2xl text-sm md:text-base">
            Sharing insights about full-stack development, modern web
            technologies, and lessons learned while building scalable
            applications. From React.js deep-dives to DevOps adventures.
          </p>

          {/* Blog Stats */}
          <div className="mb-8 flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-primary text-2xl font-bold">
                {allBlogs.length}
              </div>
              <div className="text-secondary text-sm">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-primary text-2xl font-bold">
                {allTags.length}
              </div>
              <div className="text-secondary text-sm">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-primary text-2xl font-bold">3+</div>
              <div className="text-secondary text-sm">Years Experience</div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative mx-auto max-w-md">
            <FiSearch
              className="absolute top-1/2 left-3 -translate-y-1/2 transform text-neutral-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="focus:ring-primary w-full rounded-lg border border-neutral-300 bg-white py-3 pr-4 pl-10 text-neutral-900 transition-colors focus:border-transparent focus:ring-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
            />
          </div>

          {/* Tags Filter */}
          {allTags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  !selectedTag
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
                }`}
              >
                All Topics
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
                  }`}
                >
                  <FiTag size={12} />
                  {tag}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-6 md:gap-8"
        >
          {filteredBlogs.length === 0 ? (
            <div className="py-16 text-center">
              <div className="mb-4 text-6xl">📝</div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                No articles found
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${blog.slug}`}>
                  <div className="hover:border-primary/50 rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 group-hover:scale-[1.02] hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
                    {/* Blog Content */}
                    <div className="space-y-3">
                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
                        <div className="flex items-center gap-4">
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
                        <FiArrowRight
                          size={16}
                          className="text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                      </div>

                      {/* Title */}
                      <h2 className="group-hover:text-primary text-xl font-bold text-neutral-900 transition-colors md:text-2xl dark:text-neutral-100">
                        {blog.title}
                      </h2>

                      {/* Description */}
                      <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {truncate(blog.description || "", 150)}
                      </p>

                      {/* Tags */}
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
              </motion.article>
            ))
          )}
        </motion.div>

        {/* Call to Action */}
        {filteredBlogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 rounded-xl bg-neutral-50 p-8 text-center dark:bg-neutral-800"
          >
            <h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Enjoying the content?
            </h3>
            <p className="mb-4 text-neutral-600 dark:text-neutral-400">
              Connect with me for more insights on web development and tech!
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 rounded-lg px-6 py-2 text-white transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/about"
                className="rounded-lg border border-neutral-300 px-6 py-2 text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-700"
              >
                About Me
              </Link>
            </div>
          </motion.div>
        )}
      </Container>
    </div>
  );
}
