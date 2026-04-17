import { Container } from "@/components/container";

export default function BlogPostLoading() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <div className="animate-pulse" aria-label="Loading blog post">
          <div className="mb-8 space-y-4">
            <div className="h-10 w-4/5 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-5 w-3/5 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-32 rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>

          <div className="space-y-4">
            <div className="h-5 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-5 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-5 w-11/12 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="my-8 h-48 rounded-lg bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-5 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-5 w-10/12 rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </div>
      </Container>
    </div>
  );
}
