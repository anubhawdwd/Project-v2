import { useState } from "react";
import { motion } from "framer-motion";

const funFacts = [
  "I sometimes rank higher for 'anubhav' than my real name 😉",
  "I can debug code in my sleep 🛌",
  "I'm undefeated at table tennis 🏓",
  "My first website was about memes!",
];

export default function FunFactCard() {
  const [idx, setIdx] = useState(0);

  return (
    <motion.div
      onClick={() => setIdx((i) => (i + 1) % funFacts.length)}
      whileTap={{ scale: 0.98, rotateY: 10 }}
      className="mt-10 cursor-pointer rounded-lg bg-neutral-200 p-4 shadow dark:bg-neutral-700"
    >
      <span className="font-semibold">Fun Fact:</span>
      <span className="ml-2">{funFacts[idx]}</span>
      <p className="pt-1 text-center text-xs text-neutral-400">
        Click to see more
      </p>
    </motion.div>
  );
}
