import React from "react";
import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto min-h-screen w-full max-w-5xl bg-white p-4 pt-15 md:p-10 md:pt-20 dark:bg-black",
        className,
      )}
    >
      {children}
    </div>
  );
};
