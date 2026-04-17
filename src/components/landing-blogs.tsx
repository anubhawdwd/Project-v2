import Link from "next/link";
import { getAllBlogs } from "@/app/utils/mdx";
import { LandingBlogsClient } from "@/components/landing-blogs-client";

export const Landingblogs = async () => {
  const allBlogs = await getAllBlogs();
  const featuredBlogs = allBlogs.slice(0, 3);

  return (
    <div className="py-10">
      <p className="text-secondary mb-8 max-w-lg text-sm md:text-sm">
        I am maintaining these blogs for my own interest
      </p>

      <LandingBlogsClient blogs={featuredBlogs} />
      
      <div className="mt-4 text-center">
        <div className="border-primary/20 rounded bg-neutral-50 p-4 dark:bg-neutral-900">
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
             <Link
          href="/blog"
          className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-xl px-8 py-3 font-medium text-white transition-all duration-200 hover:shadow-lg"
        >
          View All Articles
        </Link>
            <Link
              href="/contact"
              className="border-primary text-primary hover:bg-primary inline-flex items-center justify-center rounded-lg border px-8 py-3 font-medium transition-colors hover:text-white"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
