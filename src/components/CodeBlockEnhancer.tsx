// src/components/CodeBlockEnhancer.tsx
"use client";

import { useEffect } from "react";

export default function CodeBlockEnhancer() {
  useEffect(() => {
    const blocks = document.querySelectorAll("pre");

    blocks.forEach((block) => {
      if (block.querySelector(".copy-btn")) return;

      const button = document.createElement("button");
      button.innerText = "Copy";
      button.className =
        "copy-btn absolute top-2 right-2 text-xs px-2 py-1 rounded bg-neutral-700 text-white hover:bg-neutral-600";

      button.onclick = async () => {
        const code = block.innerText;
        await navigator.clipboard.writeText(code);
        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = "Copy"), 1500);
      };

      block.style.position = "relative";
      block.appendChild(button);
    });
  }, []);

  return null;
}