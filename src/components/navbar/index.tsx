// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useTransform,
//   useMotionValueEvent,
// } from "motion/react";

// type NavItem = { name: string; href: string };

// const NAV_ITEMS: NavItem[] = [
//   { name: "About", href: "/about" },
//   { name: "Projects", href: "/projects" },
//   { name: "Contact", href: "/contact" },
//   { name: "Blog", href: "/blog" },
// ];

// export function Navbar() {
//   const [hovered, setHovered] = React.useState<number | null>(null);
//   const [scrolled, setScrolled] = React.useState(false);
//   const [open, setOpen] = React.useState(false);

//   const pathname = usePathname();
//   const { scrollY } = useScroll();

//   // Preserve your desktop behavior
//   const y = useTransform(scrollY, [0, 80], [0, 10]);
//   const width = useTransform(scrollY, [0, 80], ["60%", "45%"]);

//   useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20));

//   // Close mobile sheet on route change
//   React.useEffect(() => {
//     if (open) setOpen(false);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   return (
//     <>
//       {/* Desktop nav (>= md): centered, motion width+y, subtle shadow when scrolled */}
//       <div className="pointer-events-none fixed inset-x-0 top-3 z-50 hidden md:block">
//         <motion.nav
//           style={{ y, width }}
//           transition={{ duration: 0.28, ease: "easeOut" }}
//           className={[
//             "pointer-events-auto mx-auto max-w-5xl",
//             "rounded-[28px] bg-white/85 px-3 py-2 shadow-none backdrop-blur-md",
//             "dark:bg-neutral-900/85",
//             scrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.08)]" : "shadow-none",
//           ].join(" ")}
//           role="navigation"
//           aria-label="Primary"
//         >
//           <div className="flex items-center justify-between gap-2">
//             <Link href="/" className="flex items-center gap-3 pl-1">
//               <Image
//                 src="/avatar.jpg"
//                 alt="Anubhaw's Avatar"
//                 width={40}
//                 height={40}
//                 className="h-10 w-10 rounded-full ring-1 ring-neutral-200 transition-transform hover:scale-105 dark:ring-neutral-700"
//                 priority
//               />
//             </Link>

//             <div className="flex items-center gap-1">
//               {NAV_ITEMS.map((item, idx) => {
//                 const active = pathname === item.href;
//                 return (
//                   <Link
//                     href={item.href}
//                     key={item.href}
//                     onMouseEnter={() => setHovered(idx)}
//                     onMouseLeave={() => setHovered(null)}
//                     className={[
//                       "relative rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
//                       active
//                         ? "text-neutral-900 dark:text-neutral-100"
//                         : "text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100",
//                     ].join(" ")}
//                   >
//                     {hovered === idx && (
//                       <motion.span
//                         layoutId="nav-hover-pill"
//                         className="absolute inset-0 -z-10 rounded-xl bg-neutral-100 dark:bg-neutral-800"
//                         transition={{
//                           type: "spring",
//                           stiffness: 450,
//                           damping: 35,
//                         }}
//                       />
//                     )}
//                     {active && (
//                       <span className="absolute -bottom-1 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-neutral-400 dark:bg-neutral-500" />
//                     )}
//                     {item.name}
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         </motion.nav>
//       </div>

//       {/* Mobile bar (< md): compact, sticky, with burger */}
//       <div className="fixed inset-x-0 top-2 z-50 mx-3 md:hidden">
//         <div
//           className={[
//             "flex items-center justify-between rounded-2xl px-3 py-2",
//             "bg-white/90 backdrop-blur dark:bg-neutral-900/90",
//             scrolled ? "shadow-[0_8px_26px_rgba(0,0,0,0.08)]" : "shadow-none",
//           ].join(" ")}
//         >
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src="/avatar.jpg"
//               alt="Anubhaw's Avatar"
//               width={34}
//               height={34}
//               className="h-[34px] w-[34px] rounded-full ring-1 ring-neutral-200 dark:ring-neutral-700"
//               priority
//             />
//             <span className="text-[15px] font-semibold text-neutral-800 dark:text-neutral-100">
//               Anubhaw
//             </span>
//           </Link>

//           <button
//             aria-label="Open menu"
//             onClick={() => setOpen(true)}
//             className="rounded-xl bg-neutral-100 p-2.5 active:scale-[0.98] dark:bg-neutral-800"
//           >
//             <div className="flex h-4 w-5 flex-col justify-between">
//               <span className="h-[2px] w-full rounded bg-neutral-700 dark:bg-neutral-300" />
//               <span className="h-[2px] w-full rounded bg-neutral-700 dark:bg-neutral-300" />
//               <span className="h-[2px] w-full rounded bg-neutral-700 dark:bg-neutral-300" />
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Mobile bottom sheet menu */}
//       <AnimatePresence>
//         {open && (
//           <>
//             {/* Dimmer */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.28 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-40 bg-black md:hidden"
//               onClick={() => setOpen(false)}
//             />
//             {/* Sheet */}
//             <motion.div
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "100%" }}
//               transition={{ type: "spring", stiffness: 300, damping: 32 }}
//               className="fixed inset-x-0 bottom-0 z-50 rounded-t-3xl bg-white p-4 pb-6 shadow-2xl md:hidden dark:bg-neutral-900"
//               role="dialog"
//               aria-modal="true"
//             >
//               <div className="mx-auto h-1.5 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
//               <div className="mt-3 flex flex-col">
//                 {NAV_ITEMS.map((item, idx) => {
//                   const active = pathname === item.href;
//                   return (
//                     <Link
//                       key={item.href}
//                       href={item.href}
//                       onClick={() => setOpen(false)}
//                       onMouseEnter={() => setHovered(idx)}
//                       onMouseLeave={() => setHovered(null)}
//                       className={[
//                         "relative mx-1 my-1 rounded-2xl px-4 py-3 text-base font-semibold",
//                         active
//                           ? "text-neutral-900 dark:text-neutral-100"
//                           : "text-neutral-700 dark:text-neutral-300",
//                       ].join(" ")}
//                     >
//                       {hovered === idx && (
//                         <motion.span
//                           layoutId="nav-hover-pill"
//                           className="absolute inset-0 -z-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800"
//                           transition={{
//                             type: "spring",
//                             stiffness: 420,
//                             damping: 30,
//                           }}
//                         />
//                       )}
//                       {item.name}
//                       {active && (
//                         <span className="bg-primary/10 text-primary ml-2 rounded-full px-2 py-0.5 text-xs">
//                           current
//                         </span>
//                       )}
//                     </Link>
//                   );
//                 })}
//               </div>
//               <div className="mt-4 flex justify-end">
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="rounded-xl bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-800 active:scale-[0.99] dark:bg-neutral-800 dark:text-neutral-100"
//                   aria-label="Close menu"
//                 >
//                   Close
//                 </button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";

type NavItem = { name: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const [scrolled, setScrolled] = React.useState(false);

  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Responsive width and y transforms
  const y = useTransform(scrollY, [0, 80], [0, 8]);
  const desktopWidth = useTransform(scrollY, [0, 80], ["60%", "45%"]);
  const mobileWidth = useTransform(scrollY, [0, 80], ["95%", "90%"]);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20));

  return (
    <>
      {/* Desktop nav (>= md) */}
      <div className="pointer-events-none fixed inset-x-0 top-3 z-50 hidden md:block">
        <motion.nav
          style={{ y, width: desktopWidth }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className={[
            "pointer-events-auto mx-auto max-w-5xl",
            "rounded-[28px] bg-white/85 px-3 py-2 backdrop-blur-md",
            "dark:bg-neutral-900/85",
            scrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.08)]" : "shadow-none",
          ].join(" ")}
          role="navigation"
          aria-label="Primary"
        >
          <div className="flex items-center justify-between gap-2">
            <Link href="/" className="flex items-center gap-3 pl-1">
              <Image
                src="/avatar.jpg"
                alt="Anubhaw's Avatar"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full ring-1 ring-neutral-200 transition-transform hover:scale-105 dark:ring-neutral-700"
                priority
              />
            </Link>

            <div className="flex items-center gap-1">
              {NAV_ITEMS.map((item, idx) => {
                const active = pathname === item.href;
                return (
                  <Link
                    href={item.href}
                    key={item.href}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    className={[
                      "relative rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
                      active
                        ? "text-neutral-900 dark:text-neutral-100"
                        : "text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100",
                    ].join(" ")}
                  >
                    {hovered === idx && (
                      <motion.span
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 -z-10 rounded-xl bg-neutral-100 dark:bg-neutral-800"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                      />
                    )}
                    {active && (
                      <span className="absolute -bottom-1 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                    )}
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile nav (< md): Same layout, mobile-optimized */}
      <div className="fixed inset-x-0 top-2 z-50 mx-2 md:hidden">
        <motion.nav
          style={{ y, width: mobileWidth }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className={[
            "mx-auto",
            "rounded-[20px] bg-white/90 px-2 py-2 backdrop-blur-md",
            "dark:bg-neutral-900/90",
            scrolled ? "shadow-[0_8px_26px_rgba(0,0,0,0.08)]" : "shadow-none",
          ].join(" ")}
          role="navigation"
          aria-label="Primary"
        >
          <div className="flex items-center justify-between gap-1">
            {/* Mobile avatar - smaller */}
            <Link href="/" className="flex items-center gap-2 pl-1">
              <Image
                src="/avatar.jpg"
                alt="Anubhaw's Avatar"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full ring-1 ring-neutral-200 transition-transform hover:scale-105 dark:ring-neutral-700"
                priority
              />
              <span className="xs:block hidden text-xs font-semibold text-neutral-800 dark:text-neutral-100">
                Anubhaw
              </span>
            </Link>

            {/* Mobile nav links - horizontally scrollable if needed */}
            <div className="scrollbar-hide flex items-center gap-0.5">
              {NAV_ITEMS.map((item, idx) => {
                const active = pathname === item.href;
                return (
                  <Link
                    href={item.href}
                    key={item.href}
                    onTouchStart={() => setHovered(idx)}
                    onTouchEnd={() => setHovered(null)}
                    className={[
                      "relative flex-shrink-0 rounded-lg px-2.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors",
                      active
                        ? "text-neutral-900 dark:text-neutral-100"
                        : "text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100",
                    ].join(" ")}
                  >
                    {hovered === idx && (
                      <motion.span
                        layoutId="nav-hover-pill-mobile"
                        className="absolute inset-0 -z-10 rounded-lg bg-neutral-100 dark:bg-neutral-800"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                      />
                    )}
                    {active && (
                      <span className="absolute -bottom-0.5 left-1/2 h-[1.5px] w-3 -translate-x-1/2 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                    )}
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.nav>
      </div>
    </>
  );
}
