// "use client";
// import { useMemo } from "react";
// const quotes = [
//   "Code is like humor. When you have to explain it, it’s bad.",
//   "Eat, sleep, code, repeat.",
//   "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
// ];

// export default function MoodOrQuote() {
//   // Pick a random quote on each mount
//   const quote = useMemo(
//     () => quotes[Math.floor(Math.random() * quotes.length)],
//     [],
//   );
//   const emojis = ["😎", "👨‍💻", "🚀", "😂"];
//   const emoji = useMemo(
//     () => emojis[Math.floor(Math.random() * emojis.length)],
//     [],
//   );

//   return (
//     <div className="mb-6 flex items-center justify-center">
//       <span className="mr-3 text-2xl">{emoji}</span>
//       <span className="text-primary italic">{quote}</span>
//     </div>
//   );
// }

// src/app/about/MoodOrQuote.tsx
"use client";
import { useMemo, useEffect, useState } from "react";

const quotes = [
  "Code is like humor. When you have to explain it, it's bad.",
  "Eat, sleep, code, repeat.",
  "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
];

const emojis = ["😎", "👨‍💻", "🚀", "😂"];

export default function MoodOrQuote() {
  const [isClient, setIsClient] = useState(false);

  // Only run on client after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { quote, emoji } = useMemo(() => {
    if (!isClient) {
      // Return default values during SSR
      return {
        quote: quotes[0],
        emoji: emojis[0],
      };
    }

    // Generate random values only on client
    return {
      quote: quotes[Math.floor(Math.random() * quotes.length)],
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    };
  }, [isClient]);

  return (
    <div className="mb-6 flex items-center justify-center">
      <span className="mr-3 text-2xl">{emoji}</span>
      <span className="text-primary italic">{quote}</span>
    </div>
  );
}
