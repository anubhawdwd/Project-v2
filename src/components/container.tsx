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
        "mx-auto w-full max-w-4xl bg-white p-4 md:p-10 dark:bg-black",
        className,
      )}
    >
      {children}
    </div>
  );
};
