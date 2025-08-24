"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiAngular,
  SiDotnet,
} from "react-icons/si";

const stack = [
  {
    Icon: FaReact,
    name: "React.js",
    color: "#61DAFB", // React blue
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    Icon: SiNextdotjs,
    name: "Next.js",
    color: "#000000", // Next.js black
    darkColor: "#FFFFFF", // White for dark mode
    bgColor: "bg-gray-50 dark:bg-gray-900/20",
    borderColor: "border-gray-200 dark:border-gray-700",
  },
  {
    Icon: FaNodeJs,
    name: "Node.js",
    color: "#339933", // Node.js green
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
  },
  {
    Icon: SiTypescript,
    name: "TypeScript",
    color: "#3178C6", // TypeScript blue
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    Icon: SiMongodb,
    name: "MongoDB",
    color: "#47A248", // MongoDB green
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
  },
  {
    Icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#06B6D4", // Tailwind cyan
    bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
    borderColor: "border-cyan-200 dark:border-cyan-800",
  },
  {
    Icon: SiAngular,
    name: "Angular",
    color: "#DD0031", // Angular red
    bgColor: "bg-red-50 dark:bg-red-950/20",
    borderColor: "border-red-200 dark:border-red-800",
  },
  {
    Icon: SiDotnet,
    name: ".NET",
    color: "#512BD4", // .NET purple
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
  },
];

export default function TechGridLanding() {
  return (
    <section className="py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
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
          ⚡ Tech Stack
        </motion.span>

        <h2 className="text-primary mb-4 text-2xl font-bold tracking-tight md:text-3xl">
          Technologies I Work With
        </h2>

        <p className="text-secondary mx-auto max-w-lg text-sm">
          Building modern applications with cutting-edge tools and frameworks
        </p>
      </motion.div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
        {stack.map(
          ({ Icon, name, color, darkColor, bgColor, borderColor }, idx) => (
            <motion.div
              key={name}
              whileHover={{
                scale: 1.05,
                y: -4,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              viewport={{ once: true }}
              className={`group relative flex flex-col items-center justify-center rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg ${bgColor} ${borderColor}`}
            >
              {/* Icon with brand colors */}
              <div className="mb-3 transform transition-transform duration-300 group-hover:scale-110">
                <Icon
                  size={48}
                  style={{
                    color: darkColor ? `var(--tw-colors-gray-900)` : color,
                  }}
                  className={darkColor ? "dark:text-white" : ""}
                />
              </div>

              {/* Name */}
              <span className="text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                {name}
              </span>

              {/* Subtle glow effect on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                style={{
                  background: `radial-gradient(circle at center, ${color}, transparent 70%)`,
                }}
              />
            </motion.div>
          ),
        )}
      </div>
    </section>
  );
}
