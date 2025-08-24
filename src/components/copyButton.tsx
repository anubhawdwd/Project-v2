"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CopyButton() {
  const [copied, setCopied] = useState(false);

  const copyCode = async (button: HTMLButtonElement) => {
    const codeElement = button.parentElement?.querySelector("pre code");
    if (codeElement) {
      try {
        await navigator.clipboard.writeText(codeElement.textContent || "");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy code:", err);
      }
    }
  };

  return (
    <button
      onClick={(e) => copyCode(e.currentTarget)}
      className="absolute top-3 right-3 flex items-center gap-1 rounded-md bg-neutral-700/80 p-2 text-xs text-neutral-300 opacity-0 backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 hover:bg-neutral-600 hover:text-white"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="copied"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="text-green-400"
          >
            ✓ Copied!
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            📋 Copy
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
