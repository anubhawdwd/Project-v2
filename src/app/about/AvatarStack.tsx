"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { avatarData } from "@/data/aboutMe/avatars";

export default function AvatarStack({
  onMoodChange,
}: {
  onMoodChange?: (idx: number) => void;
}) {
  const [cardOrder, setCardOrder] = useState<number[]>([0, 1, 2, 3]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [movingCard, setMovingCard] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setCardOrder([0, 1, 2, 3]);
        setMovingCard(null);
        onMoodChange?.(0);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onMoodChange]);

  const handleCardClick = () => {
    if (isShuffling) return;

    setIsShuffling(true);
    const topCardIdx = cardOrder[0];
    setMovingCard(topCardIdx);

    setTimeout(() => {
      const newOrder = [...cardOrder];
      const topCard = newOrder.shift()!;
      newOrder.push(topCard);

      setCardOrder(newOrder);
      onMoodChange?.(newOrder[0]);

      setTimeout(() => {
        setMovingCard(null);
        setIsShuffling(false);
      }, 400);
    }, 1000);
  };

  return (
    <div
      ref={wrapperRef}
      className="flex items-center justify-center py-8"
      style={{ height: 350, minWidth: 400 }}
    >
      <div
        className="relative cursor-pointer"
        onClick={handleCardClick}
        style={{ width: 200, height: 240 }}
      >
        <AnimatePresence>
          {/* AMAZING Curved Path Animation */}
          {movingCard !== null && (
            <motion.div
              key={`moving-${movingCard}`}
              initial={{
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                zIndex: 10,
              }}
              animate={{
                x: [0, 200, 280, -20],
                y: [0, -8, 5, 10],
                rotate: [0, 270, 380, 360],
                opacity: [1, 1, 0.7, 0],
                scale: [1, 1.03, 0.96, 0.95],
              }}
              transition={{
                duration: 1.2,
                times: [0, 0.5, 0.8, 1],
                ease: [0.45, 0, 0.55, 1],
              }}
              className="border-primary absolute top-0 left-0 rounded-xl border-2 bg-gradient-to-br from-white to-neutral-50 shadow-2xl dark:from-neutral-800 dark:to-neutral-900"
              style={{
                width: 200,
                height: 240,
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* Card content with glow effect */}
              <div className="relative flex h-full flex-col items-center justify-between p-4">
                {/* Glowing background */}
                <div className="from-primary/10 absolute inset-0 rounded-xl bg-gradient-to-r to-purple-500/10 blur-sm"></div>

                <div className="ring-primary/50 relative z-10 h-24 w-24 overflow-hidden rounded-full ring-4">
                  <Image
                    src={avatarData[movingCard].src}
                    alt={avatarData[movingCard].mood}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>

                <div className="relative z-10 text-center">
                  <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                    {avatarData[movingCard].name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {avatarData[movingCard].mood}
                  </p>

                  <motion.div
                    className="mt-2 text-3xl"
                    animate={{ rotate: [360, 0], scale: 2 }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    🌟
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Enhanced Deck Cards with Stagger Effect */}
          {cardOrder.map((avatarIdx, stackIdx) => {
            if (movingCard === avatarIdx && stackIdx === 0) return null;

            return (
              <motion.div
                key={`${avatarIdx}-${stackIdx}`}
                initial={false}
                animate={{
                  x: stackIdx * 6,
                  y: stackIdx * 6,
                  rotate: stackIdx * 3 - 4,
                  scale: 1 - stackIdx * 0.03,
                  zIndex: cardOrder.length - stackIdx,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  delay: movingCard !== null ? stackIdx * 0.1 : 0,
                }}
                className={`absolute top-0 left-0 rounded-xl border-2 bg-gradient-to-br from-white to-neutral-50 shadow-xl dark:from-neutral-800 dark:to-neutral-900 ${
                  stackIdx === 0
                    ? "border-primary shadow-2xl"
                    : "border-neutral-200 dark:border-neutral-700"
                }`}
                style={{ width: 200, height: 240 }}
                whileHover={
                  stackIdx === 0 && !isShuffling
                    ? {
                        scale: 1.08,
                        rotate: -2,
                        y: -12,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        transition: { duration: 0.3, ease: "easeOut" },
                      }
                    : {}
                }
                whileTap={
                  stackIdx === 0 && !isShuffling
                    ? {
                        scale: 0.95,
                        rotate: 2,
                        transition: { duration: 0.1 },
                      }
                    : {}
                }
              >
                {/* Rest of card content remains the same */}
                <div className="flex h-full flex-col items-center justify-between p-4">
                  <div className="h-24 w-24 overflow-hidden rounded-full ring-2 ring-neutral-200 dark:ring-neutral-600">
                    <Image
                      src={avatarData[avatarIdx].src}
                      alt={avatarData[avatarIdx].mood}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                      draggable={false}
                      priority={avatarIdx === 0}
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                      {avatarData[avatarIdx].name}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      {avatarData[avatarIdx].mood}
                    </p>

                    <div className="mt-2 text-2xl">
                      {avatarData[avatarIdx].mood === "Fun"
                        ? "😊"
                        : avatarData[avatarIdx].mood === "Traveler"
                          ? "🌏"
                          : avatarData[avatarIdx].mood === "Professional"
                            ? "💼"
                            : "💻"}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-neutral-400">
                    <span>Card {stackIdx + 1}</span>
                    {stackIdx === 0 && (
                      <motion.span
                        className="text-primary"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ●
                      </motion.span>
                    )}
                  </div>
                </div>

                <div className="absolute top-2 left-2 text-xs font-bold text-neutral-600 dark:text-neutral-400">
                  {avatarIdx + 1}
                </div>
                <div className="absolute right-2 bottom-2 rotate-180 text-xs font-bold text-neutral-600 dark:text-neutral-400">
                  {avatarIdx + 1}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Enhanced instruction with animation */}
        <motion.div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 transform text-center text-sm text-neutral-500 dark:text-neutral-400"
          animate={{ opacity: isShuffling ? 0.5 : 1 }}
        >
          {isShuffling ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              🎴
            </motion.div>
          ) : (
            "Click to shuffle cards"
          )}
        </motion.div>
      </div>
    </div>
  );
}
