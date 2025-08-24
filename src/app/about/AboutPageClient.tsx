"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AvatarStack from "./AvatarStack";
import Timeline from "./Timeline";
import TechGrid from "./TechGrid";
import FunFactCard from "./FunFactCard";
import MoodOrQuote from "./MoodOrQuote";
// import Confetti from "react-confetti";
import { avatarData } from "@/data/aboutMe/avatars";
// import { generateResumeWithHtml2Canvas } from "@/lib/pdfGenerator";
import {
  FiDownload,
  FiMail,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiCalendar,
  FiCode,
  FiStar,
} from "react-icons/fi";
import { Container } from "@/components/container";

type AboutMeData = {
  content: React.ReactElement;
  frontmatter: {
    title: string;
    description?: string;
    [key: string]: any;
  };
} | null;

export default function AboutPageClient({
  aboutMeData,
  // rawContent,
}: {
  aboutMeData: AboutMeData;
  // rawContent: string | null;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  // const [showConfetti, setShowConfetti] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // useEffect(() => {
  //   const listener = (e: KeyboardEvent) => {
  //     if (e.key === "c") {
  //       setShowConfetti(true);
  //       setTimeout(() => setShowConfetti(false), 2000);
  //     }
  //   };
  //   window.addEventListener("keydown", listener);
  //   return () => window.removeEventListener("keydown", listener);
  // }, []);

  // const handleDownloadResume = async () => {
  //   if ( !aboutMeData) return;

  //   setIsGeneratingPDF(true);
  //   try {
  //     // Create a temporary element with the resume content
  //     const tempDiv = document.createElement("div");
  //     tempDiv.id = "resume-content";
  //     tempDiv.style.position = "fixed";
  //     tempDiv.style.left = "-9999px";
  //     tempDiv.style.width = "800px";
  //     tempDiv.style.padding = "40px";
  //     tempDiv.style.backgroundColor = "#ffffff";
  //     tempDiv.style.color = "#000000";
  //     tempDiv.style.fontFamily = "Arial, sans-serif";
  //     tempDiv.style.lineHeight = "1.6";

  //     // Create formatted resume content
  //     const resumeHTML = `
  //       <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
  //         <header style="text-align: center; border-bottom: 2px solid #3b82f6; padding-bottom: 20px; margin-bottom: 30px;">
  //           <h1 style="color: #3b82f6; margin: 0; font-size: 28px;">ANUBHAW DWIVEDI</h1>
  //           <p style="margin: 5px 0; font-size: 16px; color: #666;">Full Stack Developer</p>
  //           <p style="margin: 5px 0; font-size: 14px;">
  //             📧 anubhawdwivedi@gmail.com | 📱 +91-9456232279 | 📍 India<br>
  //             🌐 <a href="https://anubhawdwivedi.com">PortFolio</a> |
  //             💼 <a href="https://linkedin.com/in/anubhawdwd">LinkedIn</a> |
  //             🔗 <a href="https://github.com/anubhawdwd">GitHub</a>
  //           </p>
  //         </header>

  //         <section style="margin-bottom: 25px;">
  //           <h2 style="color: #3b82f6; border-bottom: 1px solid #ddd; padding-bottom: 5px;">SUMMARY</h2>
  //           <p style="margin: 10px 0; text-align: justify;">
  //             Versatile Full Stack Developer with 3+ years of experience building scalable web applications and delivering seamless user experiences.
  //             Proficient with modern JavaScript frameworks, advanced UI, and backend systems.
  //           </p>
  //         </section>

  //         <section style="margin-bottom: 25px;">
  //           <h2 style="color: #3b82f6; border-bottom: 1px solid #ddd; padding-bottom: 5px;">TECHNICAL SKILLS</h2>
  //           <div style="margin: 10px 0;">
  //             <strong>Frontend:</strong> React.js, Next.js, Angular, Redux, Tailwind CSS, TypeScript<br>
  //             <strong>Backend:</strong> Node.js, Express.js, ASP.NET Core, REST APIs<br>
  //             <strong>Databases:</strong> MongoDB, SQL<br>
  //             <strong>DevOps & Tools:</strong> Git, GitHub, Docker, VS Code
  //           </div>
  //         </section>

  //         <section style="margin-bottom: 25px;">
  //           <h2 style="color: #3b82f6; border-bottom: 1px solid #ddd; padding-bottom: 5px;">PROFESSIONAL EXPERIENCE</h2>

  //           <div style="margin-bottom: 20px;">
  //             <h3 style="margin: 0; color: #333;">Phibonacci Solutions — Full Stack Developer</h3>
  //             <p style="margin: 2px 0; font-style: italic; color: #666;">Sept 2024 – Present</p>
  //             <ul style="margin: 8px 0 0 20px;">
  //               <li>Leading webdev team for modernization of LMS platform</li>
  //               <li>Enhanced content delivery security across backend and cloud layers</li>
  //               <li>Improved Angular app performance by 25%</li>
  //               <li>Rewrote core Quiz API for 10x faster response (2000ms to 210ms)</li>
  //             </ul>
  //           </div>

  //           <div style="margin-bottom: 20px;">
  //             <h3 style="margin: 0; color: #333;">Freelance Web Developer</h3>
  //             <p style="margin: 2px 0; font-style: italic; color: #666;">Dec 2021 – Aug 2024</p>
  //             <ul style="margin: 8px 0 0 20px;">
  //               <li>Developed custom business websites and dashboards</li>
  //               <li>Achieved 200%+ increase in clients' organic traffic via SEO optimization</li>
  //               <li>Integrated APIs and third-party services</li>
  //             </ul>
  //           </div>

  //           <div style="margin-bottom: 20px;">
  //             <h3 style="margin: 0; color: #333;">NTT DATA Services — Software Developer</h3>
  //             <p style="margin: 2px 0; font-style: italic; color: #666;">Aug 2019 – Oct 2021</p>
  //             <ul style="margin: 8px 0 0 20px;">
  //               <li>Built single page apps (SPAs) in React.js for enterprise clients</li>
  //               <li>Reduced UI bugs and bounce rate through responsive design</li>
  //               <li>Reduced production issues by 10%</li>
  //             </ul>
  //           </div>
  //         </section>

  //         <section style="margin-bottom: 25px;">
  //           <h2 style="color: #3b82f6; border-bottom: 1px solid #ddd; padding-bottom: 5px;">EDUCATION</h2>
  //           <div>
  //             <h3 style="margin: 0; color: #333;">Integrated Dual Degree (B.Tech + M.Tech), VLSI Technology</h3>
  //             <p style="margin: 2px 0; color: #666;">Gautam Buddha University, Greater Noida, UP</p>
  //             <p style="margin: 2px 0; font-style: italic; color: #666;">Aug 2014 – Jun 2019</p>
  //           </div>
  //         </section>
  //       </div>
  //     `;

  //     tempDiv.innerHTML = resumeHTML;
  //     document.body.appendChild(tempDiv);

  //     // Wait a bit for the element to render
  //     await new Promise((resolve) => setTimeout(resolve, 100));

  //     // Use html2canvas to capture the element
  //     // await generateResumeWithHtml2Canvas("resume-content");

  //     // Clean up
  //     document.body.removeChild(tempDiv);
  //   } catch (error) {
  //     console.error("Error generating PDF:", error);
  //   } finally {
  //     setIsGeneratingPDF(false);
  //   }
  // };
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
    <Container>
      {/* {showConfetti && <Confetti />} */}

      <section className="mx-auto max-w-4xl py-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <MoodOrQuote />

          <motion.h1
            className="mb-6 flex flex-wrap items-center justify-center text-4xl font-bold md:text-6xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hey, I'm{" "}
            <span className="from-primary mx-3 bg-gradient-to-r to-blue-600 bg-clip-text text-transparent">
              {avatarData[activeIdx].name}
            </span>
            <span className="ml-2 text-3xl md:text-5xl" aria-label="Mood">
              {avatarData[activeIdx].mood === "Fun"
                ? "😊"
                : avatarData[activeIdx].mood === "Traveler"
                  ? "🌏"
                  : "💻"}
            </span>
          </motion.h1>

          <motion.p
            className="text-secondary mx-auto mb-8 max-w-2xl text-lg leading-relaxed md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {avatarData[activeIdx].message}
          </motion.p>

          {/* Download Resume Button */}
          <motion.div
            className="mb-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={handleDownloadResume}
              disabled={isGeneratingPDF}
              className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-lg px-6 py-3 text-white shadow-lg transition-all duration-200 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGeneratingPDF ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <FiDownload size={18} />
                  Download Resume
                </>
              )}
            </button>

            <a
              href="mailto:anubhawdwivedi@gmail.com"
              className="border-primary text-primary hover:bg-primary flex items-center gap-2 rounded-lg border-2 px-6 py-3 transition-all duration-200 hover:text-white"
            >
              <FiMail size={18} />
              Let's Talk
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="mx-auto grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: FiCalendar, label: "Experience", value: "3+ Years" },
              { icon: FiCode, label: "Projects", value: "15+" },
              { icon: FiStar, label: "Tech Stack", value: "10+" },
              { icon: FiMapPin, label: "Location", value: "India" },
            ].map((stat, index) => (
              <div
                key={index}
                className="rounded-lg bg-white/50 p-4 text-center backdrop-blur-sm dark:bg-neutral-800/50"
              >
                <stat.icon className="text-primary mx-auto mb-2" size={24} />
                <div className="text-lg font-bold">{stat.value}</div>
                <div className="text-secondary text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Keep all your existing sections: Avatar, Journey, Tech Stack, etc. */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <AvatarStack onMoodChange={setActiveIdx} />
        </motion.div>

        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <FunFactCard />
        </motion.div>

        <motion.div
          className="mb-12 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-primary mb-8 text-center text-2xl font-bold lg:text-left">
            My Journey
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="hidden space-y-6 lg:block">
              <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-neutral-800">
                <h3 className="text-primary mb-4 text-lg font-bold">
                  Core Skills
                </h3>
                <div className="space-y-2">
                  {[
                    "React.js & Next.js",
                    "Node.js & Express.js",
                    "TypeScript",
                    "MongoDB & SQL",
                    "ASP.NET Core",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-primary h-2 w-2 rounded-full"></div>
                      <span className="text-secondary text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-neutral-800">
                <h3 className="text-primary mb-4 text-lg font-bold">
                  Get In Touch
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:anubhawdwivedi@gmail.com"
                    className="text-secondary hover:text-primary flex items-center gap-3 text-sm transition-colors"
                  >
                    <FiMail size={16} />
                    Email Me
                  </a>
                  <a
                    href="https://linkedin.com/in/anubhawdwd"
                    className="text-secondary hover:text-primary flex items-center gap-3 text-sm transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin size={16} />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/anubhawdwd"
                    className="text-secondary hover:text-primary flex items-center gap-3 text-sm transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="flex justify-center lg:justify-start">
                <Timeline />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <h2 className="text-primary mb-8 text-center text-2xl font-bold">
            Tech Stack & Tools
          </h2>
          <div className="flex justify-center">
            <TechGrid />
          </div>
        </motion.div>

        <motion.div
          className="from-primary/10 rounded-xl bg-gradient-to-r to-blue-600/10 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <h2 className="mb-4 text-2xl font-bold">Ready to Work Together?</h2>
          <p className="text-secondary mx-auto mb-6 max-w-2xl">
            I'm always excited about new opportunities and interesting projects.
            Let's discuss how we can bring your ideas to life!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-primary hover:bg-primary/90 rounded-lg px-6 py-3 text-white shadow-lg transition-colors"
            >
              Start a Project
            </a>
            <a
              href="/projects"
              className="border-primary text-primary hover:bg-primary rounded-lg border px-6 py-3 transition-colors hover:text-white"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </section>
    </Container>
  );
}
