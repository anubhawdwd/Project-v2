"use client";
import React from "react";
import { Container } from "../container";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

export const Navbar = () => {
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const [hovered, setHovered] = React.useState<number | null>(null);

  const [scrolled, setScrolled] = React.useState<boolean>(false);

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["60%", "40%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <Container>
      <motion.nav
        style={{
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
          width: width,
          y,
        }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="fixed inset-x-0 top-0 z-1 mx-auto flex max-w-4xl items-center justify-between rounded-4xl bg-white px-3 py-2 dark:bg-neutral-900"
      >
        <Link href="/">
          <Image
            src="/avatar.jpg"
            alt="Anubhaw's Avatar"
            width="100"
            height="100"
            className="h-10 w-10 rounded-full"
          />
        </Link>
        <div className="flex items-center">
          {navItems.map((item, id) => (
            <Link
              href={item.href}
              key={id}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              className="text-primary hover:text-secondary relative px-2 py-1 text-lg font-semibold"
            >
              {hovered === id && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                ></motion.span>
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};
