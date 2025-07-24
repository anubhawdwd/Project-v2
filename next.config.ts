// next.config.ts
import createMDX from "@next/mdx";
const nextConfig = {
  transpilePackages: ["@next/mdx", "next-mdx-remote"],
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
  },
};

// const withMDX = createMDX({
//   extension: /\.(md|mdx)$/,
// });

// export default withMDX(nextConfig);
export default nextConfig;
