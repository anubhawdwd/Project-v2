"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Project-1",
    src: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2JTIwcHJvamVjdHN8ZW58MHx8MHx8fDA%3D",
    description: "This is a sample project description for Project-1.",
    href: "#",
  },
  {
    title: "Project-2",
    src: "https://plus.unsplash.com/premium_photo-1685086785423-435c02d5c321?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2JTIwcHJvamVjdHN8ZW58MHx8MHx8fDA%3D",
    description: "This is a sample project description for Project-2.",
    href: "#",
  },
  {
    title: "Project-3",
    src: "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldiUyMHByb2plY3RzfGVufDB8fDB8fHww",
    description: "This is a sample project description for Project-3.",
    href: "#",
  },
  {
    title: "Project-4",
    src: "https://plus.unsplash.com/premium_photo-1668902223841-8c7b6552dbdc?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldiUyMHByb2plY3RzfGVufDB8fDB8fHww",
    description: "This is a sample project description for Project-4.",
    href: "#",
  },
  {
    title: "Project-4",
    src: "https://plus.unsplash.com/premium_photo-1668902223841-8c7b6552dbdc?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldiUyMHByb2plY3RzfGVufDB8fDB8fHww",
    description: "This is a sample project description for Project-4.",
    href: "#",
  },
  {
    title: "Project-4",
    src: "https://plus.unsplash.com/premium_photo-1668902223841-8c7b6552dbdc?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldiUyMHByb2plY3RzfGVufDB8fDB8fHww",
    description: "This is a sample project description for Project-4.",
    href: "#",
  },
];

export const Projects = () => {
  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I love building porjects webApps SPA's
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.25,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="group relative mb-4"
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                alt={project.title}
                width={500}
                height={300}
                className="h-72 w-full rounded-xl object-cover transition duration-100 group-hover:scale-[1.02]"
              />

              <h2 className="mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-200">
                {project.title}
              </h2>
              <p className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-200">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
