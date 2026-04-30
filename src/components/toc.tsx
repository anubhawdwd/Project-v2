"use client";

import { useEffect, useRef, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: "h2" | "h3";
};

export function Toc({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState("");
  const lineRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!headings?.length) return;

    let frameId = 0;

    const updateActiveHeading = () => {
      const headingElements = headings
        .map((heading) => document.getElementById(heading.id))
        .filter((element): element is HTMLElement => Boolean(element));

      if (!headingElements.length) return;

      const activationLine = window.innerHeight * 0.45;
      let currentHeading = headingElements[0];

      for (const element of headingElements) {
        if (element.getBoundingClientRect().top <= activationLine) {
          currentHeading = element;
        } else {
          break;
        }
      }

      setActiveId(currentHeading.id);
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveHeading);
    };

    const timeout = window.setTimeout(updateActiveHeading, 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    updateActiveHeading();

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, [headings]);

  useEffect(() => {
    if (!activeId) return;

    lineRefs.current[activeId]?.scrollIntoView({
      block: "center",
      inline: "nearest",
    });
  }, [activeId]);

  if (!headings?.length) return null;

  return (
    <aside className="fixed right-0 top-1/2 z-50 -translate-y-1/2 lg:right-6">
      <div className="toc-container group">
        {/* Indicator (Notion style lines) */}
        <div className="toc-indicator">
          <div className="flex flex-col gap-2">
            {headings.map((h) => (
              <div
                key={h.id}
                ref={(element) => {
                  lineRefs.current[h.id] = element;
                }}
                className={`toc-line ${
                  h.level === "h2" ? "toc-line-h2" : "toc-line-h3"
                } ${activeId === h.id ? "toc-line-active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Expanded panel */}
        <nav className="toc-content">
          <div className="toc-header">On this page</div>

          <ul className="space-y-2 mt-3">
            {headings.map((h) => (
              <li
                key={h.id}
                className={h.level === "h3" ? "ml-4" : ""}
              >
                <a
                  href={`#${h.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(h.id);
                    if (el) {
                      setActiveId(h.id);
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`toc-link ${
                    activeId === h.id ? "toc-link-active" : ""
                  }`}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
