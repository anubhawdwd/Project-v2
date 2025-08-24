"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "@/components/container";

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
    icon: FiMail,
    label: "Email",
    value: "anubhawdwivedi@gmail.com",
    href: "mailto:anubhawdwivedi@gmail.com",
    description: "Drop me a line anytime",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+91-9456232279",
    href: "https://wa.me/919456232279?text=Hi%20Anubhaw,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!",
    description: "Let's chat on WhatsApp",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91-9456232279",
    href: "tel:+919456232279",
    description: "Let's have a conversation",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "India",
    href: "#",
    description: "Available for remote work globally",
  },
];

const socialLinks = [
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anubhawdwd/",
    color: "hover:text-blue-600",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    href: "https://github.com/anubhawdwd",
    color: "hover:text-gray-600",
  },
  {
    icon: FiTwitter,
    label: "Twitter",
    href: "#", // Add your Twitter if you have one
    color: "hover:text-blue-400",
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
            <h2 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
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
                  <div className="bg-primary/10 group-hover:bg-primary rounded-lg p-3 transition-colors group-hover:text-white">
                    <method.icon size={20} />
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

            {/* Social Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className={`rounded-lg bg-neutral-100 p-3 transition-colors dark:bg-neutral-800 ${social.color} hover:scale-105`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20"
            >
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
                <span className="font-semibold text-green-800 dark:text-green-300">
                  Available for Work
                </span>
              </div>
              <p className="mt-1 text-sm text-green-700 dark:text-green-400">
                Currently accepting new projects and collaboration
                opportunities.
              </p>
            </motion.div>
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
                    placeholder="John Doe"
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
                    placeholder="john@example.com"
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

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="mb-8 text-center text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Frequently Asked Questions
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                question: "What's your typical response time?",
                answer:
                  "I usually respond to emails and messages within 24 hours, often much sooner during business hours.",
              },
              {
                question: "Do you work with international clients?",
                answer:
                  "Absolutely! I work with clients globally and am comfortable with remote collaboration across different time zones.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "I specialize in React.js, Next.js, Node.js, TypeScript, and modern web technologies. Check out my projects page for more details.",
              },
              {
                question: "Are you available for full-time opportunities?",
                answer:
                  "Yes, I'm open to discussing both full-time positions and freelance projects. Let's chat about what works best for your needs.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="rounded-lg bg-neutral-50 p-6 dark:bg-neutral-800"
              >
                <h3 className="mb-2 font-semibold text-neutral-900 dark:text-neutral-100">
                  {faq.question}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </>
  );
}
