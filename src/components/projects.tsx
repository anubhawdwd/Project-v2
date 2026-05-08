import Link from "next/link";
import { projects } from "@/data/projects/projects";

export const Projects = () => {
  const featuredProjects = projects.slice(0, 2);

  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <span className="text-primary bg-primary/10 mb-4 inline-block rounded-full px-4 py-2 text-sm font-medium">
          My Work
        </span>

        <h2 className="text-primary mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Featured Projects
        </h2>

        <p className="text-secondary mx-auto max-w-2xl text-lg leading-relaxed">
          Showcasing my passion for building web applications that solve
          real-world problems
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {featuredProjects.map((project) => {
          const isCompleted = project.status === "completed";
          const isInProgress = project.status === "in-progress";
          const isPlanned = project.status === "planned";
          const isLive = project.isLive;
          return (
            <article
              key={project.id}
              className="group relative flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600">

              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="group-hover:text-primary text-xl font-bold text-neutral-900 transition-colors dark:text-neutral-100">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
                    <span className="bg-amber-50">
                    {project.subtitle}
                    </span>
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

              <p className="text-secondary mb-5 min-h-[96px] text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary border-primary/20 rounded-full border px-3 py-1 text-xs font-medium"
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
                    className="bg-primary hover:bg-green-800 flex-1 rounded-md px-3 py-2 text-center text-sm font-medium text-white transition-colors"
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
          )
        }
        )}
      </div>

      <div className="mt-4 text-center">
        <div className="border-primary/20 rounded bg-neutral-50 p-4 dark:bg-neutral-900">
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-8 py-3 font-medium text-white transition-colors"
            >
              View All Projects
            </Link>
            <Link
              href="/contact"
              className="border-primary text-primary hover:bg-primary inline-flex items-center justify-center rounded-lg border px-8 py-3 font-medium transition-colors hover:text-white"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
