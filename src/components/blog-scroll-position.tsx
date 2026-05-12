"use client";

import { useEffect } from "react";

const STORAGE_PREFIX = "blog-scroll-position";
const SAVE_INTERVAL_MS = 250;

type BlogScrollPositionProps = {
  slug: string;
};

export function BlogScrollPosition({ slug }: BlogScrollPositionProps) {
  useEffect(() => {
    if (!slug || typeof window === "undefined") return;

    const storageKey = `${STORAGE_PREFIX}:${slug}`;
    const previousScrollRestoration = window.history.scrollRestoration;
    let saveTimeout: number | null = null;
    let latestScrollY = window.scrollY;

    const readSavedPosition = () => {
      try {
        const savedPosition = window.localStorage.getItem(storageKey);
        return savedPosition ? Number(savedPosition) : 0;
      } catch {
        return 0;
      }
    };

    const savePosition = () => {
      if (saveTimeout) {
        window.clearTimeout(saveTimeout);
        saveTimeout = null;
      }

      try {
        window.localStorage.setItem(storageKey, String(latestScrollY));
      } catch {
        // localStorage can be unavailable in private browsing or restricted contexts.
      }
    };

    const scheduleSave = () => {
      latestScrollY = window.scrollY;
      if (saveTimeout) return;
      saveTimeout = window.setTimeout(savePosition, SAVE_INTERVAL_MS);
    };

    const saveBeforeNavigation = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      if (!link || link.target || link.hasAttribute("download")) return;

      latestScrollY = window.scrollY;
      savePosition();
    };

    window.history.scrollRestoration = "manual";

    if (!window.location.hash) {
      const savedPosition = readSavedPosition();

      if (Number.isFinite(savedPosition) && savedPosition > 0) {
        window.requestAnimationFrame(() => {
          window.scrollTo({ top: savedPosition, behavior: "auto" });
        });
      }
    }

    window.addEventListener("scroll", scheduleSave, { passive: true });
    window.addEventListener("click", saveBeforeNavigation, { capture: true });
    window.addEventListener("pagehide", savePosition);
    window.addEventListener("popstate", savePosition);

    return () => {
      window.removeEventListener("scroll", scheduleSave);
      window.removeEventListener("click", saveBeforeNavigation, {
        capture: true,
      });
      window.removeEventListener("pagehide", savePosition);
      window.removeEventListener("popstate", savePosition);

      if (saveTimeout) {
        window.clearTimeout(saveTimeout);
      }

      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, [slug]);

  return null;
}
