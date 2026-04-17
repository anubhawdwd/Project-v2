"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function SocialFollow() {
  return (
    <div className="mt-16 border-t pt-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
          Follow me
        </h3>

        <div className="flex items-center gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/anubhawdwd"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3 py-2 rounded-md transition-all
              bg-neutral-100 hover:bg-neutral-200
              dark:bg-neutral-800 dark:hover:bg-neutral-700"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm opacity-80 group-hover:opacity-100">
              GitHub
            </span>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/anubhawdwd"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3 py-2 rounded-md transition-all
              bg-neutral-100 hover:bg-neutral-200
              dark:bg-neutral-800 dark:hover:bg-neutral-700"
          >
            <Twitter className="w-4 h-4" />
            <span className="text-sm opacity-80 group-hover:opacity-100">
              Twitter
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/anubhawdwd"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3 py-2 rounded-md transition-all
              bg-neutral-100 hover:bg-neutral-200
              dark:bg-neutral-800 dark:hover:bg-neutral-700"
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-sm opacity-80 group-hover:opacity-100">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}