"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
    <>
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-primary text-3xl font-bold tracking-tight md:text-5xl">
            My Projects 🚀
          </h1>
          <p className="text-secondary max-w-2xl pt-4 text-sm md:text-base">
            A collection of projects I've built throughout my journey as a
            full-stack developer. From enterprise applications to personal
            experiments, each project represents a step forward in my
            development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 py-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-primary scale-105 text-white shadow-lg"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-900"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Status Badge */}
                  <div
                    className={`absolute top-3 right-3 rounded-full px-2 py-1 text-xs font-medium ${statusColors[project.status]}`}
                  >
                    {statusLabels[project.status]}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="group-hover:text-primary text-lg font-bold text-neutral-900 transition-colors dark:text-neutral-100">
                      {project.title}
                    </h3>
                    <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-400">
                      {project.year}
                    </span>
                  </div>

                  <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-300">
                    {project.subtitle}
                  </p>

                  <p className="mb-4 line-clamp-3 text-sm text-neutral-500 dark:text-neutral-400">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4 flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-neutral-500 dark:text-neutral-500">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-2">
                    {project.links.live && (
                      <Link
                        href={project.links.live}
                        target="_blank"
                        className="bg-primary hover:bg-primary/90 flex-1 rounded-md px-3 py-2 text-center text-sm font-medium text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </Link>
                    )}
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        className="flex-1 rounded-md bg-neutral-200 px-3 py-2 text-center text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </Link>
                    )}
                    {!project.links.live && !project.links.github && (
                      <div className="flex-1 cursor-pointer rounded-md bg-neutral-100 px-3 py-2 text-center text-sm font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-500">
                        View Details
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {[
            {
              label: "Projects Completed",
              value: projects.filter((p) => p.status === "completed").length,
            },
            {
              label: "Technologies Used",
              value: [...new Set(projects.flatMap((p) => p.technologies))]
                .length,
            },
            { label: "Years Experience", value: "3+" },
            {
              label: "Active Projects",
              value: projects.filter((p) => p.status === "in-progress").length,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-lg bg-neutral-50 p-4 text-center dark:bg-neutral-900"
            >
              <div className="text-primary text-2xl font-bold">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 dark:bg-neutral-900"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-4 flex items-start justify-between">
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    {selectedProject.title}
                  </h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    ✕
                  </button>
                </div>

                <div className="mb-4">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={600}
                    height={300}
                    className="h-60 w-full rounded-lg object-cover"
                  />
                </div>

                <p className="mb-6 text-neutral-600 dark:text-neutral-400">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-bold">Key Features</h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
}
