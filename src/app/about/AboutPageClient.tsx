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
import { resume } from "@/data/aboutMe/resume";

export default function AboutPageClient() {
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
            {resume.name}
          </h1>
          <p className="text-secondary mt-5 max-w-3xl text-base leading-7 md:text-lg">
            {resume.summary}
          </p>
          <p className="mt-3 max-w-3xl text-sm text-neutral-500 dark:text-neutral-400">
            This is my official portfolio; people sometimes search for my work
            as Anubhav Dwivedi, Anubhav Divedi, or anubhawdwivedi.
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
            href={`mailto:${resume.contact.email}`}
            className="flex items-center gap-3 transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            <FiMail size={18} />
            {resume.contact.email}
          </a>
          <a
            href={resume.contact.phoneHref}
            className="flex items-center gap-3 transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            <FiPhone size={18} />
            {resume.contact.phone}
          </a>
          <a
            href={resume.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            <FiGithub size={18} />
            {resume.contact.githubLabel}
          </a>
          <a
            href={resume.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            <FiLinkedin size={18} />
            {resume.contact.linkedinLabel}
          </a>
          <div className="flex items-center gap-3">
            <FiMapPin size={18} />
            {resume.contact.location}
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-primary mb-6 text-2xl font-bold">
            Technical Skills
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {resume.skills.map((group) => (
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
            {resume.experience.map((item) => (
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
              {resume.education.degree}
            </p>
            <p className="text-secondary mt-1 text-sm">
              {resume.education.school}
            </p>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              {resume.education.period}
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="text-primary mb-3 text-xl font-bold">
              What I Focus On
            </h2>
            <p className="text-secondary text-sm leading-6">{resume.focus}</p>
          </div>
        </section>
      </main>
    </Container>
  );
}
