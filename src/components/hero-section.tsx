"use client";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";

export function HeroSection() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadResume = async () => {
    setIsGeneratingPDF(true);

    try {
      const response = await fetch("/api/download-resume", {
        method: "POST",
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Anubhaw_Dwivedi_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate PDF");
      }
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert("Failed to download resume. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      {/* Avatar and Name - Centered */}
      <div className="mb-6 flex flex-col items-center">
        <div className="relative mb-4">
          <div className="from-primary flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r to-blue-600 text-3xl">
            👋
          </div>
          <div className="absolute -top-1 -right-1 h-5 w-5 animate-pulse rounded-full border-2 border-white bg-green-500"></div>
        </div>

        <div>
          <h1 className="text-primary mb-2 text-3xl font-bold tracking-tight md:text-5xl">
            Hey, I'm Anubhaw
          </h1>
          <div className="text-sm text-neutral-500">🌍 Available for work</div>
        </div>
      </div>

      {/* Description - Centered */}
      <p className="text-secondary mx-auto mb-8 max-w-2xl text-lg leading-relaxed">
        A full-stack developer crafting scalable apps and beautiful UIs.
        Currently building things at{" "}
        <span className="font-semibold text-black dark:text-white">
          Phibonacci Solutions
        </span>
        . I love turning complex problems into simple, elegant solutions.
      </p>

      {/* Action Buttons - Centered */}
      <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
        <button
          onClick={handleDownloadResume}
          disabled={isGeneratingPDF}
          className="bg-primary hover:bg-primary/90 flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isGeneratingPDF ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Generating...
            </>
          ) : (
            <>
              <FiDownload size={18} />
              Download Resume
            </>
          )}
        </button>

        <Link
          href="/contact"
          className="border-primary text-primary hover:bg-primary flex items-center justify-center gap-2 rounded-xl border px-6 py-3 font-medium transition-all duration-200 hover:text-white"
        >
          <FiMail size={18} />
          Get In Touch
        </Link>
      </div>
    </motion.div>
  );
}
