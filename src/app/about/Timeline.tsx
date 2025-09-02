"use client";
import { motion } from "framer-motion";

// const journey = [
//   {
//     year: "2024–Now",
//     title: "Phibonacci Solutions",
//     description:
//       "Leading modernization of LMS platforms with Angular & ASP.NET.",
//     icon: "🏢",
//   },
//   {
//     year: "2021–24",
//     title: "Freelance Full-stack Dev",
//     description:
//       "Boosted clients’ SEO and built custom dashboards (Next.js, React, Node).",
//     icon: "🦸‍♂️",
//   },
//   {
//     year: "2019–21",
//     title: "NTT DATA Services",
//     description:
//       "Built SPAs for Insurance/Construction clients, reduced bugs 10%. First Company and collegues unforgetable memories",
//     icon: "🏗️",
//   },
//   {
//     year: "2014–19",
//     title: "B.Tech + M.Tech Dual Degree",
//     description:
//       "Gautam Buddha University – Build, learned, lead, Lived & Got Upgraded",
//     icon: "🎓",
//   },
//   {
//     year: "2011-2013",
//     title: "High School",
//     description:
//       "Studied in Sri Chaitanya Boys Hostel in Visakhapatnam - ~1000kms away from home - gained completely different perspective of living life 😅",
//     icon: "👾",
//   },
// ];

const journey = [
  {
    year: "2024–Present",
    title: "Phibonacci Solutions",
    description: [
      "Leading the modernization of LMS platforms using Angular and NodeJs",
      "Focused on enhancing performance and mobile-first user experience.",
      "Secured content delivery and optimized backend APIs.",
      "Continuously learning and applying DevOps practices.",
    ],
    icon: "🏢",
  },
  {
    year: "2021–2024",
    title: "Freelance Full-stack Developer",
    description: [
      "Built custom dashboards and business websites with React.js, Next.js and Express.js.",
      "Boosted clients’ organic traffic by 200% through SEO and accessibility improvements.",
      "Delivered admin features tailored for non-technical clients.",
      "Gained experience managing full project lifecycles independently.",
    ],
    icon: "🦸‍♂️",
  },
  {
    year: "2019–2021",
    title: "NTT DATA Services",
    description: [
      "Developed SPAs using React.js for large Insurance and Construction clients.",
      "Improved UI quality by reducing bugs and bounce rate by 10%.",
      "Collaborated closely with design and backend teams to enhance user experience.",
      "Built lasting professional relationships and invaluable memories.",
    ],
    icon: "🏗️",
  },
  {
    year: "2014–2019",
    title: "Integrated Dual Degree (B.Tech + M.Tech), Gautam Buddha University",
    description: [
      "Studied VLSI Technology and advanced engineering concepts.",
      "Developed critical thinking, leadership, and project management skills.",
      "Lived a transformative 5-year academic and personal journey.",
      "Graduated equipped to build, learn, lead, and adapt.",
    ],
    icon: "🎓",
  },
  {
    year: "2011–2013",
    title: "High School, Sri Chaitanya, Visakhapatnam",
    description: [
      "Lived away from home (~1000 km) gaining independence and resilience.",
      "Experienced a diverse lifestyle and broadened perspective.",
      "Learned the importance of adaptability and self-discipline.",
      "Gained foundational knowledge and a fresh outlook on life.",
    ],
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
          transition={{
            delay: idx * 0.16,
            type: "spring",
            stiffness: 80, // softer spring
            damping: 18, // more damping for smoothness
            mass: 0.8, // moderate mass to slow down oscillation
          }}
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
