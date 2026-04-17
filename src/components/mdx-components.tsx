import type { ComponentPropsWithoutRef } from "react";

export const mdxComponents = {
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="not-prose my-6 overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
      <table
        {...props}
        className="min-w-full border-collapse text-left text-sm text-neutral-700 dark:text-neutral-200"
      />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<"thead">) => (
    <thead {...props} className="bg-neutral-100 dark:bg-neutral-800" />
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      {...props}
      className="border-b border-neutral-200 px-4 py-3 font-semibold whitespace-nowrap text-neutral-900 dark:border-neutral-700 dark:text-neutral-100"
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td
      {...props}
      className="border-t border-neutral-200 px-4 py-3 align-top dark:border-neutral-700"
    />
  ),
};
