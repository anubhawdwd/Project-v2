"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { Container } from "@/components/container";

type AboutMeData = {
  frontmatter: {
    title: string;
    description?: string;
  };
} | null;

const skills = [
  {
    label: "Frontend",
    values: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    label: "Backend",
    values: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    label: "Data & Tools",
    values: ["MongoDB", "SQL", "Git", "GitHub", "Postman", "Chrome DevTools"],
  },
  {
    label: "Practices",
    values: [
      "Performance Optimization",
      "Responsive Design",
      "SEO",
      "Accessibility",
      "Code Review",
    ],
  },
];

const experience = [
  {
    company: "Phibonacci Solutions",
    role: "Full Stack Developer",
    period: "Sep 2024 - Present",
    points: [
      "Building and modernizing LMS features with React.js and Node.js/Express.js.",
      "Implemented secure content delivery flows with authentication and access checks.",
      "Improved frontend performance with component-level optimizations.",
      "Refactored a core Quiz API from roughly 2000ms to 210ms response time.",
    ],
  },
  {
    company: "Freelance Web Developer",
    role: "Full Stack Developer",
    period: "Dec 2021 - Aug 2024",
    points: [
      "Delivered business websites, dashboards, admin panels, and API integrations.",
      "Built reusable React/Next.js components and maintainable backend services.",
      "Improved client organic traffic through SEO, accessibility, and performance work.",
    ],
  },
  {
    company: "NTT DATA Services",
    role: "Software Developer",
    period: "Aug 2019 - Oct 2021",
    points: [
      "Built React.js single-page applications for enterprise clients.",
      "Worked with design and backend teams to deliver responsive, production-ready UI.",
      "Reduced UI-related production issues through better component logic and reuse.",
    ],
  },
];

export default function AboutPageClient({
  aboutMeData,
}: {
  aboutMeData: AboutMeData;
}) {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadResume = async () => {
    setIsGeneratingPDF(true);

    try {
      const response = await fetch("/api/download-resume", {
        method: "POST",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Anubhaw_Dwivedi_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert("Failed to download resume. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <Container>
      <main className="mx-auto max-w-4xl py-10">
        <section className="border-b border-neutral-200 pb-10 dark:border-neutral-800">
          {/* <p className="mb-4 text-sm font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
            About
          </p> */}
          <h1 className="text-primary text-4xl font-bold tracking-tight md:text-5xl">
            {aboutMeData?.frontmatter.title || "Anubhaw Dwivedi"}
          </h1>
          <p className="text-secondary mt-5 max-w-3xl text-base leading-7 md:text-lg">
            Full Stack Developer with 3+ years of experience building modern,
            responsive, and scalable web applications. I work across React.js,
            Next.js, Node.js, Express.js, databases, and production workflows to
            turn product ideas into reliable software.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={handleDownloadResume}
              disabled={isGeneratingPDF}
              className="bg-primary hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isGeneratingPDF ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <FiDownload size={16} />
                  Download Resume
                </>
              )}
            </button>
            <Link
              href="/contact"
              className="border-primary text-primary hover:bg-primary inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-medium transition-colors hover:text-white"
            >
              <FiMail size={16} />
              Contact Me
            </Link>
          </div>
        </section>

        <section className="grid gap-4 border-b border-neutral-200 py-8 text-sm text-neutral-600 md:grid-cols-2 dark:border-neutral-800 dark:text-neutral-300">
          <a
            href="mailto:anubhawdwivedi@gmail.com"
            className="flex items-center gap-3 transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            <FiMail size={18} />
            anubhawdwivedi@gmail.com
          </a>
          <a
            href="tel:+919456232279"
            className="flex items-center gap-3 transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            <FiPhone size={18} />
            +91 94562 32279
          </a>
          <a
            href="https://github.com/anubhawdwd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            <FiGithub size={18} />
            github.com/anubhawdwd
          </a>
          <a
            href="https://www.linkedin.com/in/anubhawdwd/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            <FiLinkedin size={18} />
            linkedin.com/in/anubhawdwd
          </a>
          <div className="flex items-center gap-3">
            <FiMapPin size={18} />
            India
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-primary mb-6 text-2xl font-bold">
            Technical Skills
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.label}
                className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <h3 className="text-primary mb-3 font-semibold">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.values.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-primary mb-6 text-2xl font-bold">
            Professional Experience
          </h2>
          <div className="space-y-5">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-primary text-lg font-bold">
                      {item.role}
                    </h3>
                    <p className="text-secondary text-sm">{item.company}</p>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {item.period}
                  </p>
                </div>
                <ul className="space-y-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 py-10 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="text-primary mb-3 text-xl font-bold">Education</h2>
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              Integrated Dual Degree, VLSI Technology
            </p>
            <p className="text-secondary mt-1 text-sm">
              Gautam Buddha University, Greater Noida
            </p>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              2014 - 2019
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="text-primary mb-3 text-xl font-bold">
              What I Focus On
            </h2>
            <p className="text-secondary text-sm leading-6">
              Clean component architecture, practical performance improvements,
              secure API flows, maintainable code, and user interfaces that stay
              clear and responsive under real product constraints.
            </p>
          </div>
        </section>
      </main>
    </Container>
  );
}
