"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavItem = { name: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [hovered, setHovered] = React.useState<string | null>(null);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 20);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-3 z-50 hidden md:block">
        <nav
          className={[
            "pointer-events-auto mx-auto h-14 rounded-[28px] bg-gray-200/85 px-3 backdrop-blur-md transition-[width,box-shadow,transform] duration-300 ease-out dark:bg-neutral-900/85",
            scrolled
              ? "w-[min(92vw,560px)] translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              : "w-[min(92vw,760px)] translate-y-0 shadow-none",
          ].join(" ")}
          role="navigation"
          aria-label="Primary"
        >
          <div className="flex h-full min-w-0 items-center justify-between gap-3">
            <Link
              href="/"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              aria-label="Go home"
            >
              <Image
                src="/avatar.jpg"
                alt="Anubhaw's Avatar"
                width={40}
                height={40}
                className="h-10 w-10 max-w-none shrink-0 rounded-full object-cover ring-1 ring-neutral-200 transition-transform hover:scale-105 dark:ring-neutral-700"
                priority
              />
            </Link>

            <div className="flex min-w-0 shrink items-center justify-end gap-1 overflow-hidden">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                const highlighted = active || hovered === item.href;

                return (
                  <Link
                    href={item.href}
                    key={item.href}
                    onMouseEnter={() => setHovered(item.href)}
                    onMouseLeave={() => setHovered(null)}
                    className={[
                      "relative shrink-0 rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
                      highlighted
                        ? "text-neutral-950 dark:text-neutral-50"
                        : "text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100",
                    ].join(" ")}
                  >
                    {hovered === item.href && (
                      <span className="absolute inset-0 -z-10 rounded-xl bg-neutral-100 dark:bg-neutral-800" />
                    )}
                    {item.name}
                    {active && (
                      <span className="absolute -bottom-1 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>

      <div className="fixed inset-x-0 top-2 z-50 mx-2 md:hidden">
        <nav
          className={[
            "mx-auto h-12 rounded-[20px] bg-white/90 px-2 backdrop-blur-md transition-[width,box-shadow,transform] duration-300 ease-out dark:bg-neutral-900/90",
            scrolled
              ? "w-[min(94vw,420px)] translate-y-1 shadow-[0_8px_26px_rgba(0,0,0,0.5)]"
              : "w-[min(96vw,460px)] translate-y-0 shadow-none",
          ].join(" ")}
          role="navigation"
          aria-label="Primary"
        >
          <div className="flex h-full min-w-0 items-center justify-between gap-2">
            <Link
              href="/"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
              aria-label="Go home"
            >
              <Image
                src="/avatar.jpg"
                alt="Anubhaw's Avatar"
                width={32}
                height={32}
                className="h-8 w-8 max-w-none shrink-0 rounded-full object-cover ring-1 ring-neutral-200 transition-transform hover:scale-105 dark:ring-neutral-700"
                priority
              />
            </Link>

            <div className="flex min-w-0 items-center justify-end gap-0.5 ">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    href={item.href}
                    key={item.href}
                    className={[
                      "relative shrink-0 rounded-lg px-2.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors",
                      active
                        ? "text-neutral-950 dark:text-neutral-50"
                        : "text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100",
                    ].join(" ")}
                  >
                    {item.name}
                    {active && (
                      <span className="absolute -bottom-0.5 left-1/2 h-[1.5px] w-3 -translate-x-1/2 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
