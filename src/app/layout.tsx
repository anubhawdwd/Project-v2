import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

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
    <html lang="en" className="scroll-smooth">
      <body className="bg-neutral-100 font-sans antialiased dark:bg-neutral-700">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
