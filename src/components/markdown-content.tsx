"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx-components";

const markdownComponents = {
  ...mdxComponents,
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      {...props}
      className="overflow-x-auto rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100"
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      {...props}
      className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800"
    />
  ),
};

export function MarkdownContent({ source }: { source: string }) {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    setCanRender(true);
  }, []);

  if (!canRender) {
    return (
      <div className="my-8 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
        Rendering the handbook locally...
      </div>
    );
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={markdownComponents}
    >
      {source}
    </ReactMarkdown>
  );
}
