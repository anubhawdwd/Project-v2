// next.config.ts
import type { NextConfig } from "next";
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';

const nextConfig: NextConfig = {
  transpilePackages: ["@next/mdx", "next-mdx-remote"],
  serverExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
};

 ({
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [
      rehypeSlug,   // auto-generates IDs on every heading
      [rehypeToc, {
        headings: ['h1', 'h2','h3'],
        cssClasses: {
          toc: 'toc',
          list: 'toc-list',
          listItem: 'toc-item',
          link: 'toc-link',
        }
      }]
    ],
  }
});
export default nextConfig;
