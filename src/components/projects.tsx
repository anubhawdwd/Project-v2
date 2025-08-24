// "use client";
// import { motion } from "motion/react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const projects = [
//   {
//     title: "Project-1",
//     src: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2JTIwcHJvamVjdHN8ZW58MHx8MHx8fDA%3D",
//     description: "This is a sample project description for Project-1.",
//     href: "#",
//   },
//   {
//     title: "Project-2",
//     src: "https://plus.unsplash.com/premium_photo-1685086785423-435c02d5c321?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2JTIwcHJvamVjdHN8ZW58MHx8MHx8fDA%3D",
//     description: "This is a sample project description for Project-2.",
//     href: "#",
//   },
//   {
//     title: "Project-3",
//     src: "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldiUyMHByb2plY3RzfGVufDB8fDB8fHww",
//     description: "This is a sample project description for Project-3.",
//     href: "#",
//   },
//   {
//     title: "Project-4",
//     src: "https://plus.unsplash.com/premium_photo-1668902223841-8c7b6552dbdc?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldiUyMHByb2plY3RzfGVufDB8fDB8fHww",
//     description: "This is a sample project description for Project-4.",
//     href: "#",
//   },
//   {
//     title: "Project-4",
//     src: "https://plus.unsplash.com/premium_photo-1668902223841-8c7b6552dbdc?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldiUyMHByb2plY3RzfGVufDB8fDB8fHww",
//     description: "This is a sample project description for Project-4.",
//     href: "#",
//   },
//   {
//     title: "Project-4",
//     src: "https://plus.unsplash.com/premium_photo-1668902223841-8c7b6552dbdc?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldiUyMHByb2plY3RzfGVufDB8fDB8fHww",
//     description: "This is a sample project description for Project-4.",
//     href: "#",
//   },
// ];

// export const Projects = () => {
//   return (
//     <div className="py-10">
//       <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
//         I love building porjects webApps SPA's
//       </p>
//       <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
//             whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{
//               duration: 0.25,
//               delay: index * 0.1,
//               ease: "easeInOut",
//             }}
//             className="group relative mb-4"
//           >
//             <Link href={project.href}>
//               <Image
//                 src={project.src}
//                 alt={project.title}
//                 width={500}
//                 height={300}
//                 className="h-72 w-full rounded-xl object-cover transition duration-100 group-hover:scale-[1.02]"
//               />

//               <h2 className="mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-200">
//                 {project.title}
//               </h2>
//               <p className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-200">
//                 {project.description}
//               </p>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    src: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?w=1600&auto=format&fit=crop&q=60",
    description:
      "Full-stack e-commerce solution with modern UI and seamless checkout experience.",
    href: "#",
    status: "completed" as const,
    technologies: ["React", "Next.js", "Tailwind", "Node.js"],
  },
  {
    id: 2,
    title: "Task Management App",
    src: "https://plus.unsplash.com/premium_photo-1685086785423-435c02d5c321?w=1600&auto=format&fit=crop&q=60",
    description:
      "Collaborative project management tool with real-time updates and team features.",
    href: "#",
    status: "completed" as const,
    technologies: ["Angular", "ASP.NET", "SQL Server", "SignalR"],
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    src: "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?w=1600&auto=format&fit=crop&q=60",
    description:
      "Business intelligence dashboard with interactive charts and data visualization.",
    href: "#",
    status: "completed" as const,
    technologies: ["Vue.js", "D3.js", "MongoDB", "Express"],
  },
  {
    id: 4,
    title: "Social Media Platform",
    src: "https://plus.unsplash.com/premium_photo-1668902223841-8c7b6552dbdc?w=1600&auto=format&fit=crop&q=60",
    description:
      "Modern social networking platform with real-time messaging and content sharing.",
    href: "#",
    status: "in-progress" as const,
    technologies: ["React Native", "Firebase", "Node.js", "Socket.io"],
  },
];

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-16">
      {/* Header Section - Landing Page Style */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <motion.span
          className="text-primary bg-primary/10 mb-4 inline-block rounded-full px-4 py-2 text-sm font-medium"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          🚀 My Work
        </motion.span>

        <h2 className="text-primary mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Featured Projects
        </h2>

        <p className="text-secondary mx-auto max-w-2xl text-lg leading-relaxed">
          Showcasing my passion for building innovative web applications that
          solve real-world problems
        </p>
      </motion.div>

      {/* Projects Grid - Optimized for Landing Page */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
            className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-neutral-700 dark:bg-neutral-900"
          >
            {/* Project Image with Overlay */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

              {/* Status Indicator */}
              <div className="absolute top-4 right-4">
                <div
                  className={`rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md ${
                    project.status === "completed"
                      ? "border border-green-500/30 bg-green-500/20 text-green-300"
                      : "border border-blue-500/30 bg-blue-500/20 text-blue-300"
                  }`}
                >
                  {project.status === "completed" ? "✓ Live" : "🚧 In Progress"}
                </div>
              </div>

              {/* Project Title Overlay */}
              <div className="absolute right-4 bottom-4 left-4">
                <h3 className="mb-2 translate-y-2 transform text-xl font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <p className="text-secondary mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + techIndex * 0.05 }}
                    className="bg-primary/10 text-primary border-primary/20 rounded-full border px-3 py-1 text-xs font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={project.href}
                className="group/btn bg-primary hover:bg-primary/90 hover:shadow-primary/25 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg"
              >
                <span>View Project</span>
                <motion.span
                  className="ml-2"
                  animate={{ x: hoveredProject === project.id ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </Link>
            </div>

            {/* Hover Effect Border */}
            <div className="border-primary/0 group-hover:border-primary/20 pointer-events-none absolute inset-0 rounded-2xl border-2 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      {/* CTA Section - Perfect for Landing Page */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <div className="from-primary/10 to-primary/10 border-primary/20 rounded-2xl border bg-gradient-to-r via-blue-500/10 p-8">
          <h3 className="text-primary mb-4 text-2xl font-bold">
            Want to see more of my work?
          </h3>
          <p className="text-secondary mb-6 text-sm">
            Explore my complete portfolio with detailed case studies and live
            demos
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-xl px-8 py-3 font-medium text-white transition-all duration-200 hover:shadow-lg"
            >
              View All Projects
            </Link>
            <Link
              href="/contact"
              className="border-primary text-primary hover:bg-primary inline-flex items-center justify-center rounded-xl border px-8 py-3 font-medium transition-all duration-200 hover:text-white"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
