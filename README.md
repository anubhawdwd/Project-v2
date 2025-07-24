# Motion Portfolio

A sleek, animated developer portfolio built using Next.js, Tailwind CSS, and Motion One. This project focuses on clean UI, responsive layout, and developer-focused design.

Inspired by Manu Arora. His Motion One + Next.js tutorial laid the foundation.

## Tech Stack

- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS with custom theme variables
- **Animations**: Motion One
- **UI Utility**: shadcn/ui (cn() utility used)
- **Fonts**: Inter via next/font
- **Deployment**: Vercel (planned)
- **Image Handling**: Next.js `<Image />` optimized for external domains (Unsplash)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx  # Root layout (includes Inter font + theme classes)
│   ├── page.tsx    # Homepage layout
│   └── globals.css  # Tailwind directives + light/dark CSS variables
│
├── components/
│   ├── navbar/      # Navbar component
│   │   └── index.tsx
│   ├── container.tsx # Reusable responsive container
│   └── projects.tsx  # Project section with image cards
│
├── lib/
│   └── utils.ts
```

## Setup Instructions

1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:3000` in your browser

## Work Completed So Far

- Project initialized using create-next-app with TypeScript, Tailwind CSS, App Router
- Inter font configured via next/font/google
- Theme support using CSS variables for light and dark mode
- shadcn/ui initialized for utility functions
- Navbar section completed
- Projects section implemented with image cards
- next.config.js updated to allow Unsplash image domains

## Credits

- **Manu Arora** – for design and animation inspiration
- **shadcn/ui** – for utility functions
- **Unsplash** – for project images
