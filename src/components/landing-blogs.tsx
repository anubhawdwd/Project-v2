import React from "react";
import { getAllBlogs } from "@/app/utils/mdx";
// import { div } from "motion/react-client";
import { Link } from "next-view-transitions";
import { div } from "motion/react-client";

export const Landingblogs = async () => {
  const allBlogs = await getAllBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="">
      <p className="text-secondary mb-12 max-w-lg pt-4 text-sm md:text-sm">
        I love writing down
      </p>
      <div className="flex flex-col gap-4">
        {allBlogs.map((blog, index) => (
          <Link href={`/blog/${blog.slug}`} key={index}>
            <div className="flex items-center justify-between">
              <h2 className="text-primary text-base font-bold tracking-tight">
                {blog.title}
              </h2>
              <p className="text-secondary text-sm md:text-sm">
                {new Date(blog.date || "").toLocaleDateString("en-us", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
              {truncate(blog.description ?? "", 100)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
