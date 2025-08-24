// // next.config.ts
// import createMDX from "@next/mdx";

// const nextConfig = {
//   transpilePackages: ["@next/mdx", "next-mdx-remote"],
//   images: {
//     domains: ["images.unsplash.com", "plus.unsplash.com"],
//   },
//   // Fixed configuration for Puppeteer
//   serverExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
//   // Remove the experimental section - it's been moved to serverExternalPackages
// };

// export default nextConfig;

// next.config.ts
import createMDX from "@next/mdx";

const nextConfig = {
  transpilePackages: ["@next/mdx", "next-mdx-remote"],
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
  },
  serverExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
  experimental: {
    viewTransition: true, // Add this for built-in view transitions
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
