import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Excalidraw Clone",
    description:
      "Building a collaborative online whiteboard with React.js, focusing on drawing tools and real-time collaboration.",
    href: "#",
    status: "in-progress" as const,
    technologies: ["React", "Next.js", "Tailwind", "Node.js"],
  },
  {
    id: 2,
    title: "Portfolio Website v2",
    description:
      "Modern portfolio website built with Next.js, featuring interactive animations and optimized for SEO.",
    href: "https://anubhawdwivedi.com",
    status: "completed" as const,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MDX",
      "Vercel",
    ],
  },
];

export const Projects = () => {
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
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
                  {project.status === "completed" ? "Live" : "In Progress"}
                </p>
                <h3 className="group-hover:text-primary text-xl font-bold text-neutral-900 transition-colors dark:text-neutral-100">
                  {project.title}
                </h3>
              </div>
              <span
                className={[
                  "shrink-0 rounded-full px-3 py-1 text-xs font-medium",
                  project.status === "completed"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
                ].join(" ")}
              >
                {project.status === "completed" ? "Ready" : "Building"}
              </span>
            </div>

            <p className="text-secondary mb-5 text-sm leading-relaxed">
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

            <Link
              href={project.href}
              className="bg-primary hover:bg-primary/90 inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors"
            >
              <span>View Project</span>
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </Link>
          </article>
        ))}
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
