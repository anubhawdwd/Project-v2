"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, categories, type Project } from "@/data/projects/projects";
import { Container } from "@/components/container";

const statusColors = {
  completed:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  "in-progress":
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  planned:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
};

const statusLabels = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Planned",
};

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Container>
      <header>
        <h1 className="text-primary text-3xl font-bold tracking-tight md:text-5xl">
          My Projects
        </h1>
        <p className="text-secondary max-w-2xl pt-4 text-sm md:text-base">
          A collection of projects I've built throughout my journey as a
          full-stack developer. From enterprise applications to personal
          experiments, each project represents a step forward in my development.
        </p>
      </header>

      <div className="flex flex-wrap gap-2 py-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              activeCategory === category.id
                ? "bg-primary text-white shadow-lg"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => {
          const isCompleted = project.status === "completed";
          const isInProgress = project.status === "in-progress";
          const isPlanned = project.status === "planned";
          const isLive = project.isLive;
          return (
            <article
              key={project.id}
              className="group flex cursor-pointer flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
              onClick={() => setSelectedProject(project)}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="group-hover:text-primary text-lg font-bold text-neutral-900 transition-colors dark:text-neutral-100">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
                    <span className="bg-amber-50">{project.subtitle}</span>
                  </p>
                </div>
                <span
                  className={[
                    "shrink-0 rounded-full px-3 py-1 text-xs font-semibold",
                    isLive
                      ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                      : isCompleted
                        ? "bg-green-100 text-orange-800 dark:bg-yellow-900/40 dark:text-yellow-300"
                        : isInProgress
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                          : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
                  ].join(" ")}
                >
                  {isLive
                    ? "Live"
                    : isCompleted
                      ? "Completed"
                      : isInProgress
                        ? "Building"
                        : "Planned"}
                </span>
              </div>

              <p className="mb-4 line-clamp-4 text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-2">
                {project.links.live ? (
                  <Link
                    href={project.links.live}
                    target="_blank"
                    className="bg-primary flex-1 rounded-md px-3 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-green-800"
                  >
                    Live
                  </Link>
                ) : (
                  <button
                    disabled
                    className="flex-1 cursor-not-allowed rounded-md bg-neutral-200 px-3 py-2 text-center text-sm font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-500"
                  >
                    Not Hosted
                  </button>
                )}

                {project.links.github ? (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    className="flex-1 rounded-md bg-neutral-200 px-3 py-2 text-center text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600"
                  >
                    GitHub
                  </Link>
                ) : (
                  <button
                    disabled
                    className="flex-1 cursor-not-allowed rounded-md bg-neutral-200 px-3 py-2 text-center text-sm font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-500"
                  >
                    GitHub Unavailable
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        {[
          {
            label: "Projects Completed",
            value: projects.filter((p) => p.status === "completed").length,
          },
          {
            label: "Technologies Used",
            value: [...new Set(projects.flatMap((p) => p.technologies))].length,
          },
          { label: "Years Experience", value: "3+" },
          {
            label: "Active Projects",
            value: projects.filter((p) => p.status === "in-progress").length,
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg bg-neutral-50 p-4 text-center dark:bg-neutral-900"
          >
            <div className="text-primary text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl dark:bg-neutral-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                aria-label="Close project details"
              >
                x
              </button>
            </div>

            <p className="mb-6 text-neutral-600 dark:text-neutral-400">
              {selectedProject.longDescription}
            </p>

            <div className="mb-6">
              <h3 className="mb-2 text-lg font-bold">Key Features</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                {selectedProject.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-lg font-bold">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
