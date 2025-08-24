# 🚀 Ultimate Guide to Building a Developer Blog in Next.js with MDX, Tailwind CSS, and Code Highlighting

Creating your own developer blog with **Next.js**, **MDX**, and **Tailwind CSS** is one of the best ways to improve your skills, build personal branding, and showcase your projects.

In this guide, you’ll learn step-by-step how to:

- Set up a blog in **Next.js (App Router)**
- Use **MDX** to write content
- Style beautifully with **Tailwind CSS** and `@tailwindcss/typography`
- Add **code highlighting** using `rehype-pretty-code`

Let’s dive in. 🛠️

---

## ✅ Why Create a Dev Blog?

- 📢 Boost personal SEO (e.g., rank for your name like _Anubhaw Dwivedi_)
- 💼 Attract job/internship opportunities
- 📚 Document your learning
- 🤝 Connect with other devs

---

## 1️⃣ Initialize Your Next.js Project

```bash
npx create-next-app@latest my-dev-blog
# ✔ Use TypeScript: Yes
# ✔ Tailwind CSS: Yes
# ✔ App Router: Yes
# ✔ Import Alias: @/*
```

This gives you a clean base.

---

## 2️⃣ Install MDX Support

MDX lets you write blog posts in Markdown with React components.

```bash
npm install @next/mdx
```

Update `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
});
```

Create a `blog` folder inside `src/app` and drop your MDX files there.

---

## 3️⃣ Style with Tailwind CSS & Typography Plugin

Install Tailwind Typography:

```bash
npm install @tailwindcss/typography
```

Update `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
export default config;
```

Apply styles in your blog layout:

```tsx
<div className="prose dark:prose-invert max-w-none">{children}</div>
```

---

## 4️⃣ Highlight Code Blocks with `rehype-pretty-code`

### Install the plugin:

```bash
npm install rehype-pretty-code
```

### Update MDX config (if using Contentlayer or custom loader):

```ts
import rehypePrettyCode from "rehype-pretty-code";

export const mdxOptions = {
  rehypePlugins: [
    [
      rehypePrettyCode,
      {
        theme: "github-dark",
        onVisitLine(node) {
          if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }];
          }
        },
      },
    ],
  ],
};
```

> ✅ This gives your code blocks syntax colors, line highlighting, and even inline highlights!

---

## 5️⃣ Create a Blog Layout Page

Example: `src/app/blog/[slug]/page.tsx`

Use dynamic route + MDX + `fs` or Contentlayer to load posts. Wrap MDX content in:

```tsx
<article className="prose dark:prose-invert">
  <YourMDXContent />
</article>
```

---

## 6️⃣ Bonus: Add Metadata for SEO

Update `metadata` in layout/page files:

```ts
export const metadata = {
  title: "Blog | Anubhaw Dwivedi",
  description: "Dev blog by Anubhaw Dwivedi on Next.js, Tailwind, and Web Dev",
};
```

---

## 📌 Conclusion

That’s it! You now have a:

- Fully styled, dark-mode ready, code-highlighted blog
- Powered by MDX and Next.js App Router
- Perfect base to build your content empire 💥

> 🔗 Live Example: [anubhawdwivedi.com/blog](https://anubhawdwivedi.com/blog)

---

## 🔖 Keywords for SEO

```
how to build a blog with next.js
nextjs blog mdx
tailwind typography plugin
rehype pretty code example
nextjs code highlighting blog
```
