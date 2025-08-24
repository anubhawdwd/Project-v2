"use client";
import { motion } from "framer-motion";

const journey = [
  {
    year: "2024–Now",
    title: "Phibonacci Solutions",
    description:
      "Leading modernization of LMS platforms with Angular & ASP.NET.",
    icon: "🏢",
  },
  {
    year: "2021–24",
    title: "Freelance Full-stack Dev",
    description:
      "Boosted clients’ SEO and built custom dashboards (Next.js, React, Node).",
    icon: "🦸‍♂️",
  },
  {
    year: "2019–21",
    title: "NTT DATA Services",
    description:
      "Built SPAs for Insurance/Construction clients, reduced bugs 10%.",
    icon: "🏗️",
  },
  {
    year: "2014–19",
    title: "VLSI Dual Degree",
    description: "Gautam Buddha University – Coded, learned, led, hacked.",
    icon: "🎓",
  },
  {
    year: "2018",
    title: "First Hackathon!",
    description: "Stayed up two days. Came 2nd. Slept for a week 😅",
    icon: "👾",
  },
];

export default function Timeline() {
  return (
    <ol className="relative border-l border-neutral-300 py-8 dark:border-neutral-700">
      {journey.map((entry, idx) => (
        <motion.li
          key={entry.year}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.16, type: "spring" }}
          viewport={{ once: true, amount: 0.7 }}
          className="mb-10 ml-8"
        >
          <span className="bg-primary absolute -left-6 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white">
            {entry.icon}
          </span>
          <h3 className="text-xl font-bold">{entry.title}</h3>
          <span className="block text-sm font-medium text-neutral-500">
            {entry.year}
          </span>
          <p className="mt-2 max-w-lg">{entry.description}</p>
        </motion.li>
      ))}
    </ol>
  );
}
