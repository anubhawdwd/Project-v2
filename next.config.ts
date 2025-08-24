// next.config.ts
import createMDX from "@next/mdx";

const nextConfig = {
  transpilePackages: ["@next/mdx", "next-mdx-remote"],
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
  },
  // Fixed configuration for Puppeteer
  serverExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
  // Remove the experimental section - it's been moved to serverExternalPackages
};

export default nextConfig;
