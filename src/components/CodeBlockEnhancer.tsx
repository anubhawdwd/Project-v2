"use client";
import { useEffect } from "react";

export default function CodeBlockEnhancer() {
  useEffect(() => {
    const addCopyButtons = () => {
      const codeBlocks = document.querySelectorAll(
        "figure[data-rehype-pretty-code-figure] pre",
      );

      codeBlocks.forEach((pre) => {
        const figure = pre.parentElement;
        if (figure && !figure.querySelector(".copy-button")) {
          const button = document.createElement("button");

          button.className =
            "copy-button absolute top-3 right-3 p-2 bg-neutral-700/80 hover:bg-neutral-600 text-neutral-300 hover:text-white rounded-md opacity-0 transition-all duration-200 text-xs flex items-center gap-1 backdrop-blur-sm cursor-pointer hover:cursor-pointer";
          button.innerHTML = "📋 Copy";

          button.addEventListener("click", async () => {
            const code = pre.querySelector("code");
            if (code) {
              try {
                await navigator.clipboard.writeText(code.textContent || "");
                button.innerHTML = "✓ Copied!";
                button.classList.add("text-green-400");
                setTimeout(() => {
                  button.innerHTML = "📋 Copy";
                  button.classList.remove("text-green-400");
                }, 2000);
              } catch (err) {
                console.error("Failed to copy:", err);
              }
            }
          });

          // Ensure figure positioning for absolute button
          figure.style.position = "relative";
          figure.appendChild(button);

          // Add hover visibility with Tailwind classes
          figure.addEventListener("mouseenter", () => {
            button.classList.remove("opacity-0");
            button.classList.add("opacity-100");
          });

          figure.addEventListener("mouseleave", () => {
            button.classList.remove("opacity-100");
            button.classList.add("opacity-0");
          });
        }
      });
    };

    addCopyButtons();

    const observer = new MutationObserver(addCopyButtons);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
