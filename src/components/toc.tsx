// "use client";

// import { useEffect, useState } from "react";

// export function Toc({ headings }: any) {
//   const [activeId, setActiveId] = useState("");

//   // Scroll spy
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveId(entry.target.id);
//           }
//         });
//       },
//       {
//         rootMargin: "-40% 0px -55% 0px",
//       }
//     );

//     headings.forEach((h: any) => {
//       const el = document.getElementById(h.id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, [headings]);

//   if (!headings || headings.length === 0) return null;

//   return (
//     // <aside className="toc-wrapper">
//     <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
//       <div className="toc-container group">
//         {/* Collapsed indicator - shows lines representing headings */}
//         <div className="toc-indicator">
//           <div className="flex flex-col gap-1.5">
//             {headings.map((h: any, idx: number) => (
//               <div
//                 key={idx}
//                 className={`toc-line ${
//                   h.level === "h2" ? "toc-line-h2" : "toc-line-h3"
//                 } ${activeId === h.id ? "toc-line-active" : ""}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Expanded TOC */}
//         <nav className="toc-content">
//           <div className="toc-header">On this page</div>
//           <ul className="space-y-1.5">
//             { headings.map((h: any) => (
//               <li key={h.id} className={h.level === "h3" ? "ml-4" : ""}>    
//               <a            
//                   href={`#${h.id}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     const element = document.getElementById(h.id);
//                     if (element) {
//                       element.scrollIntoView({ behavior: "smooth" });
//                     }
//                   }}
//                   className={`toc-link ${
//                     activeId === h.id ? "toc-link-active" : ""
//                   }`}
//                 >
//                   {h.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </aside>
//   );
// }


"use client";

import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: "h2" | "h3";
};

export function Toc({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!headings?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    const timeout = setTimeout(() => {
      headings.forEach((h) => {
        const el = document.getElementById(h.id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [headings]);

  if (!headings?.length) return null;

  return (
    // <aside className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-50">
    <aside
  className="
    fixed z-50

    /* mobile */
    right-0 top-24

    /* desktop */
    lg:right-6 lg:top-1/2 lg:-translate-y-1/2
  "
>
      <div className="toc-container group">
        {/* Indicator (Notion style lines) */}
        <div className="toc-indicator">
          <div className="flex flex-col gap-2">
            {headings.map((h, idx) => (
              <div
                key={idx}
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

// "use client";

// import { useEffect, useState } from "react";

// type Heading = {
//   id: string;
//   text: string;
//   level: "h2" | "h3";
// };

// export function Toc({ headings }: { headings: Heading[] }) {
//   const [activeId, setActiveId] = useState("");
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     if (!headings?.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveId(entry.target.id);
//           }
//         });
//       },
//       { rootMargin: "-40% 0px -55% 0px" }
//     );

//     const timeout = setTimeout(() => {
//       headings.forEach((h) => {
//         const el = document.getElementById(h.id);
//         if (el) observer.observe(el);
//       });
//     }, 100);

//     return () => {
//       clearTimeout(timeout);
//       observer.disconnect();
//     };
//   }, [headings]);

//   if (!headings?.length) return null;

//   return (
//     <aside
//       className="hidden sm:block fixed right-0 top-24 lg:right-6 lg:top-1/2 lg:-translate-y-1/2 z-50"
//     >
//       {/* IMPORTANT: give container width */}
//       <div
//         className="relative flex items-center w-[260px]"
//         onMouseEnter={() => setOpen(true)}
//         onMouseLeave={() => setOpen(false)}
//       >
//         {/* INDICATOR */}
//         <div className="toc-indicator absolute right-0">
//           <div className="flex flex-col gap-2">
//             {headings.map((h, idx) => (
//               <div
//                 key={idx}
//                 className={`toc-line ${
//                   h.level === "h2" ? "toc-line-h2" : "toc-line-h3"
//                 } ${activeId === h.id ? "toc-line-active" : ""}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* PANEL */}
//         <div
//           className={`absolute right-6 top-1/2 -translate-y-1/2 w-64 transition-all duration-200 ${
//             open
//               ? "opacity-100 translate-x-0"
//               : "opacity-0 translate-x-4 pointer-events-none"
//           }`}
//         >
//           <div className="toc-content-inner">
//             <div className="toc-header">On this page</div>

//             <ul className="space-y-2 mt-3">
//               {headings.map((h) => (
//                 <li key={h.id} className={h.level === "h3" ? "ml-4" : ""}>
//                   <a
//                     href={`#${h.id}`}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       const el = document.getElementById(h.id);
//                       if (el) {
//                         el.scrollIntoView({ behavior: "smooth" });
//                       }
//                     }}
//                     className={`toc-link ${
//                       activeId === h.id ? "toc-link-active" : ""
//                     }`}
//                   >
//                     {h.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// }