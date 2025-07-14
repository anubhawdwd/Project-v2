import { Container } from "@/components/container";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <h1 className="text-primary text-3xl font-bold tracking-tight md:text-5xl">
          Hey, I’m Anubhaw 👋
        </h1>
        <p className="text-secondary text:sm max-w-lg pt-4 md:text-sm">
          A full-stack developer crafting scalable apps and beautiful UIs.
          Currently building things at{" "}
          <span className="font-semibold text-black dark:text-white">
            Phibonacci Solutions
          </span>
          .
        </p>
      </Container>
    </div>
  );
}
