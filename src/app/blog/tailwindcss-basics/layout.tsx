import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { Container } from "@/components/container";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Anubhaw's Portfolio",
  description: "Anubhaw Dwivedi aka anubhav is a software developer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="prose min-h-screen px-10 md:pt-20 md:pb-10">
      {children}
    </Container>
  );
}
