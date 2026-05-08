"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Container } from "@/components/container";
import { resume } from "@/data/aboutMe/resume";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

const contactMethods = [
  {
    icon: SiGmail,
    label: "Email",
    iconColor: "text-[#EA4335]",
    iconBg: "bg-[#EA4335]/10",
    iconHoverBg: "group-hover:bg-[#EA4335]/15",
    value: resume.contact.email,
    href: `mailto:${resume.contact.email}`,
    description: "Drop me a mail anytime",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    iconColor: "text-[#25D366]",
    iconBg: "bg-[#25D366]/10",
    iconHoverBg: "group-hover:bg-[#25D366]/15",
    value: resume.contact.phone,
    href: "https://wa.me/919456232279?text=Hi%20Anubhaw,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!",
    description: "Let's chat on WhatsApp",
  },
  {
    icon: FiPhone,
    label: "Phone",
    iconColor: "text-[#0EA5E9]",
    iconBg: "bg-[#0EA5E9]/10",
    iconHoverBg: "group-hover:bg-[#0EA5E9]/15",
    value: resume.contact.phone,
    href: resume.contact.phoneHref,
    description: "Let's have a conversation",
  },
  {
    icon: FiMapPin,
    label: "Location",
    iconColor: "text-[#F97316]",
    iconBg: "bg-[#F97316]/10",
    iconHoverBg: "group-hover:bg-[#F97316]/15",
    value: resume.contact.location,
    href: "#",
    description: "Available for remote work globally",
  },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: resume.contact.linkedin,
    color: "text-[#0A66C2]",
    bgColor: "bg-[#0A66C2]/10",
    hoverBgColor: "hover:bg-[#0A66C2]/15",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: resume.contact.github,
    color: "text-[#181717] dark:text-white",
    bgColor: "bg-neutral-100 dark:bg-white/10",
    hoverBgColor: "hover:bg-neutral-200 dark:hover:bg-white/15",
  },
  {
    icon: FaXTwitter,
    label: "X",
    href: "https://x.com/anubhawdwd",
    color: "text-[#000000] dark:text-white",
    bgColor: "bg-neutral-100 dark:bg-white/10",
    hoverBgColor: "hover:bg-neutral-200 dark:hover:bg-white/15",
  },
];

export default function ContactClient() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const response = await fetch("https://formspree.io/f/xyzpdngo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        });

        // Reset form
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Oops! Something went wrong. Please try again or contact me directly via email.",
      });
    }

    // Clear success message after 5 seconds
    setTimeout(() => {
      setStatus({ type: "idle", message: "" });
    }, 5000);
  };

  const isFormValid = form.name && form.email && form.subject && form.message;

  return (
    <>
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-primary mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            Let's Work Together 🤝
          </h1>
          <p className="text-secondary mx-auto max-w-2xl text-sm md:text-base">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question, want to collaborate, or just want to
            say hello, I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Get in Touch
            </h2>

            {/* Contact Methods */}
            <div className="mb-8 space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  className="group flex items-start space-x-4 rounded-lg p-4 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >
                  <div
                    className={`${method.iconBg} ${method.iconHoverBg} rounded-lg p-3 transition-colors`}
                  >
                    <method.icon className={method.iconColor} size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {method.label}
                    </h3>
                    <p className="text-primary font-medium">{method.value}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {method.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Send Me a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="focus:ring-primary w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-colors focus:border-transparent focus:ring-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
                    placeholder="Anubhaw Dwivedi"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="focus:ring-primary w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-colors focus:border-transparent focus:ring-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
                    placeholder="email-id@domain.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="focus:ring-primary w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-colors focus:border-transparent focus:ring-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
                  placeholder="Project Collaboration"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="focus:ring-primary w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-colors focus:border-transparent focus:ring-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={!isFormValid || status.type === "loading"}
                className={`flex w-full items-center justify-center space-x-2 rounded-lg px-6 py-3 font-semibold transition-all duration-200 ${
                  isFormValid && status.type !== "loading"
                    ? "bg-primary hover:bg-primary/90 text-white shadow-lg hover:scale-[1.02]"
                    : "cursor-not-allowed bg-neutral-300 text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {status.type === "loading" ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Status Messages */}
            <AnimatePresence>
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mt-4 flex items-start space-x-3 rounded-lg p-4 ${
                    status.type === "success"
                      ? "border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                      : "border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
                  }`}
                >
                  {status.type === "success" ? (
                    <FiCheck
                      className="mt-0.5 text-green-600 dark:text-green-400"
                      size={18}
                    />
                  ) : (
                    <FiAlertCircle
                      className="mt-0.5 text-red-600 dark:text-red-400"
                      size={18}
                    />
                  )}
                  <p
                    className={`text-sm ${
                      status.type === "success"
                        ? "text-green-800 dark:text-green-300"
                        : "text-red-800 dark:text-red-300"
                    }`}
                  >
                    {status.message}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <h4 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Follow Me
            </h4>

            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className={`rounded-lg p-3 transition-colors hover:scale-105 ${social.bgColor} ${social.hoverBgColor} ${social.color}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
