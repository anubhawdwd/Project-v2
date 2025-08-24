"use client";
import { Container } from "@/components/container";
import { Landingblogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

interface PageClientProps {
  blogsData: any[]; // Pass the blog data from server component
}

export default function PageClient({ blogsData }: PageClientProps) {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        {/* Enhanced Hero Section with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="relative">
              <div className="from-primary flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r to-blue-600 text-2xl">
                👋
              </div>
              <div className="absolute -top-1 -right-1 h-5 w-5 animate-pulse rounded-full border-2 border-white bg-green-500"></div>
            </div>
            <div>
              <h1 className="text-primary text-3xl font-bold tracking-tight md:text-5xl">
                Hey, I'm Anubhaw
              </h1>
              <div className="mt-1 text-sm text-neutral-500">
                🌍 Available for work
              </div>
            </div>
          </div>

          <p className="text-secondary mb-8 max-w-2xl text-lg leading-relaxed">
            A full-stack developer crafting scalable apps and beautiful UIs.
            Currently building things at{" "}
            <span className="font-semibold text-black dark:text-white">
              Phibonacci Solutions
            </span>
            . I love turning complex problems into simple, elegant solutions.
          </p>

          {/* Quick Actions */}
          <div className="mb-8 flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition-all duration-200 hover:shadow-lg">
              <FiDownload size={18} />
              Download Resume
            </button>
            <button className="border-primary text-primary hover:bg-primary flex items-center gap-2 rounded-xl border px-6 py-3 font-medium transition-all duration-200 hover:text-white">
              <FiMail size={18} />
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-500">Find me on:</span>
            <div className="flex gap-3">
              <a
                href="#"
                className="hover:text-primary text-neutral-600 transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="#"
                className="hover:text-primary text-neutral-600 transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            { label: "Years Experience", value: "3+" },
            { label: "Projects Completed", value: "15+" },
            { label: "Technologies", value: "10+" },
            { label: "Happy Clients", value: "20+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-center dark:border-neutral-700 dark:bg-neutral-900"
            >
              <div className="text-primary text-2xl font-bold">
                {stat.value}
              </div>
              <div className="text-secondary text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <Projects />

        {/* Pass the blogs data to Landingblogs if it needs to be client-side, 
            or keep Landingblogs as server component */}
        <Landingblogs />
      </Container>
    </div>
  );
}
