# Portfolio Context for Anubhaw Dwivedi

Use this document as compact context when discussing my portfolio, SEO, personal branding, copywriting, resume positioning, or content strategy.

## Basic Profile

- Name: Anubhaw Dwivedi
- Common name variations: Anubhav Dwivedi, Anubhav Divedi, Anubhawdwivedi
- Website: https://anubhawdwivedi.com
- Location: India
- Email: anubhawdwivedi@gmail.com
- GitHub: https://github.com/anubhawdwd
- LinkedIn: https://www.linkedin.com/in/anubhawdwd/

## Primary Positioning

Main brand position:

```txt
Python Backend & Full Stack Software Engineer
```

Supporting description:

```txt
Software Engineer building backend systems and full stack web applications with Python, FastAPI, Node.js, React, and PostgreSQL.
```

Tone:

- Python-forward
- Backend-focused
- Honest and technically mature
- Still visibly grounded in Node.js and React full stack experience
- No exaggerated "expert", "guru", "architect", or senior-only claims

## Current Site Summary

```txt
Software Engineer building backend systems and full stack web applications with Python, FastAPI, Node.js, React, and PostgreSQL. I focus on secure APIs, scalable backend workflows, clean architecture, and practical production-ready software.
```

## Homepage Hero Direction

Hero title:

```txt
Python Backend & Full Stack Software Engineer
```

Hero description:

```txt
Software Engineer building backend systems and full stack web applications with Python, FastAPI, Node.js, React, and PostgreSQL. I focus on secure APIs, scalable backend workflows, clean architecture, and practical production-ready software. Currently building things at Phibonacci Learnings.
```

## Professional Experience

### Phibonacci Learnings

- Role: Python Backend & Full Stack Software Engineer
- Period: Sep 2024 - Present
- Work:
  - Building and improving LMS platform features across backend APIs and React-based user interfaces.
  - Working with Python/FastAPI, Node.js, React, and database-backed workflows for learning platform features.
  - Developed secure API flows with authentication, access control, and cleaner request handling.
  - Refactored Quiz APIs and backend workflows to improve maintainability and response time.
  - Contributed to frontend responsiveness through reusable React component patterns.

### Freelance Web Developer

- Role: Full Stack Developer
- Period: Jan 2022 - Aug 2024
- Work:
  - Developed SaaS dashboards, business platforms, and admin panels using React, Node.js, Express.js, and PostgreSQL.
  - Built REST APIs, authentication systems, and third-party integrations.
  - Designed maintainable backend structures with reusable service patterns and clean API boundaries.
  - Improved SEO, accessibility, and frontend performance.
  - Delivered full stack applications focused on performance, clean architecture, and user experience.

### NTT DATA Services

- Role: Software Developer
- Period: Aug 2019 - Oct 2021
- Work:
  - Developed enterprise React applications with backend API integrations.
  - Collaborated with backend and design teams.
  - Improved reusable component architecture and reduced UI issues.
  - Optimized frontend performance and usability for enterprise web applications.

## Skills

Frontend:

- React
- Next.js
- JavaScript
- TypeScript

Backend:

- Python
- FastAPI
- Node.js
- Express.js
- REST APIs
- Authentication

Databases:

- PostgreSQL
- MongoDB

Tools & Practices:

- Docker
- Git
- GitHub
- Swagger/OpenAPI
- API Design
- Backend Architecture
- Clean Architecture
- Responsive Design
- SEO

## Featured Technologies

- React
- Next.js
- Python
- FastAPI
- Node.js
- TypeScript
- PostgreSQL
- MongoDB

## Existing Website Pages

The portfolio is built with Next.js 15, React 19, TypeScript, Tailwind CSS, MDX, Framer Motion/Motion, and Vercel Speed Insights.

Main routes:

- `/` homepage
- `/about`
- `/projects`
- `/blog`
- `/contact`

The website includes:

- Floating responsive navbar
- Hero section with signature image
- Resume download button
- Contact CTA
- Tech stack grid
- Featured projects
- MDX-powered blog
- SEO metadata
- Open Graph and Twitter metadata
- Person JSON-LD schema
- Sitemap
- Robots file

## Codebase Structure

The repo is a Next.js App Router portfolio. Do not paste raw `node_modules`, `.next`, lockfiles, or build output when asking ChatGPT for portfolio advice. The high-value files are below.

### App Routes and SEO

- `src/app/layout.tsx`
  - Root layout for the whole site.
  - Controls global metadata defaults, Open Graph metadata, Twitter metadata, canonical base URL, Google verification, navbar rendering, Vercel Speed Insights, and the Person JSON-LD script.
  - Important for site-wide SEO and social previews.

- `src/app/page.tsx`
  - Homepage route.
  - Controls homepage-specific SEO metadata.
  - Renders the hero section, tech grid, featured projects, and landing blog section.

- `src/app/about/page.tsx`
  - About page route.
  - Controls about-page SEO metadata.
  - Renders the about/resume client page.

- `src/app/projects/page.tsx`
  - Projects page route.
  - Controls projects-page SEO metadata.
  - Renders project listing UI from project data.

- `src/app/blog/page.tsx`
  - Blog listing route.
  - Controls blog index SEO metadata.
  - Loads all MDX blog posts.

- `src/app/blog/[slug]/page.tsx`
  - Individual blog post route.
  - Uses MDX frontmatter for each post's title and description.
  - Generates blog detail pages from files in `src/data/blog`.

- `src/app/contact/page.tsx`
  - Contact page route.
  - Controls contact-page SEO metadata.

- `src/app/sitemap.ts`
  - Generates the sitemap, including static pages and indexable blog slugs.

- `src/app/robots.ts`
  - Generates robots.txt and points crawlers to the sitemap.

### Content Source of Truth

- `src/data/aboutMe/resume.ts`
  - Most important portfolio content file.
  - Stores name, display name, role, summary, hero summary, contact links, skills, featured technologies, experience, education, focus statement, languages, SEO keywords, and Person JSON-LD data.
  - Most copy/SEO positioning updates should start here.

- `src/data/aboutMe/aboutMe.mdx`
  - Resume-style Markdown/MDX version of the about content.
  - Useful for long-form profile text, resume content, or copy refinement.

- `src/data/projects/projects.ts`
  - Source of truth for projects.
  - Stores project title, subtitle, description, long description, technologies, status, category, links, features, and year.
  - Project credibility and keyword alignment should be improved here.

- `src/data/blog/*.mdx`
  - Blog articles.
  - Supports long-tail SEO around Python, backend engineering, FastAPI, PostgreSQL, Node.js, and interview preparation.
  - Each MDX file has frontmatter used for metadata.

### Main UI Components

- `src/components/navbar/index.tsx`
  - Responsive floating navbar.
  - Controls navigation links for About, Projects, Contact, and Blog.

- `src/components/hero-section.tsx`
  - Homepage hero component.
  - Uses `resume.role` and `resume.heroSummary`.
  - Contains resume download and contact CTAs.

- `src/components/tech-grid-landing.tsx`
  - Homepage technology grid.
  - Uses `resume.featuredTechnologies` and maps technologies to icons/colors.

- `src/components/projects.tsx`
  - Homepage featured projects section.
  - Uses the first projects from `src/data/projects/projects.ts`.

- `src/components/landing-blogs.tsx` and `src/components/landing-blogs-client.tsx`
  - Homepage blog preview/listing components.

- `src/app/about/AboutPageClient.tsx`
  - About page UI.
  - Renders resume summary, contact details, skills, experience, education, and focus from `resume.ts`.

- `src/app/projects/ProjectClient.tsx`
  - Projects page UI.
  - Renders project cards, categories, project metadata, links, and features.

- `src/app/contact/ContactClient.tsx`
  - Contact page UI.
  - Handles the visible contact form/details experience.

### Blog and MDX Utilities

- `src/app/utils/mdx.ts`
  - Reads and processes MDX blog files.
  - Provides blog metadata and indexable blog slugs.

- `src/components/mdx-components.tsx`
  - Custom MDX rendering components.

- `src/components/CodeBlockEnhancer.tsx`
  - Enhances code blocks in blog content.

- `src/components/toc.tsx`
  - Table of contents component for blog/article pages.

### Resume Download

- `src/app/api/download-resume/route.ts`
  - API route that generates/downloads the resume PDF.
  - Uses data from `resume.ts`, so resume text changes affect generated PDF output too.

### Public Assets

- `public/avatar.jpg`
  - Main profile/Open Graph image.

- `public/logo.png`
  - Navbar/home logo image.

- `public/Signature.png`
  - Signature image used in the hero section.

- `public/images/*` and `public/avatar/*`
  - Additional visual assets.

### Styling and Configuration

- `src/app/globals.css`
  - Global styles and theme variables.

- `package.json`
  - Scripts and dependencies.
  - Build command is `npm.cmd run build` on Windows if `npm run build` is blocked by PowerShell script policy.

- `next.config.ts`
  - Next.js configuration.

- `tsconfig.json`
  - TypeScript configuration.

## Files Usually Edited for Portfolio Positioning

For most branding, SEO, and portfolio-copy changes, update these files first:

- `src/data/aboutMe/resume.ts`
- `src/components/hero-section.tsx`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/contact/page.tsx`
- `src/data/aboutMe/aboutMe.mdx`
- `src/data/projects/projects.ts`
- `PORTFOLIO_CONTEXT.md`

## Current Metadata Signals

Default site title:

```txt
Anubhaw Dwivedi | Python Backend & Full Stack Software Engineer
```

Homepage title:

```txt
Anubhaw Dwivedi | Python Backend & Full Stack Software Engineer
```

Homepage description:

```txt
Portfolio of Anubhaw Dwivedi, a Software Engineer building backend systems and full stack applications with Python, FastAPI, Node.js, React, and PostgreSQL.
```

Open Graph title:

```txt
Anubhaw Dwivedi | Software Engineer
```

Open Graph description:

```txt
Software Engineer building backend systems and full stack applications with Python, FastAPI, Node.js, React, and PostgreSQL.
```

Twitter title:

```txt
Anubhaw Dwivedi | Software Engineer
```

Twitter description:

```txt
Building backend systems and full stack applications with Python, FastAPI, Node.js, React, and PostgreSQL.
```

## Current SEO Keywords

- Anubhaw Dwivedi
- Anubhaw
- Anubhawdwivedi
- Anubhaw Dwivedi Software Engineer
- Anubhav
- Anubhav Dwivedi
- Anubhav Divedi
- Anubhav Software Engineer
- Python Developer
- Python Backend Developer
- FastAPI Developer
- Backend Developer
- Full Stack Developer
- Fullstack Developer
- Software Engineer
- Node.js Developer
- React Developer
- React
- Next.js
- Node.js
- Express.js
- PostgreSQL
- MongoDB
- REST APIs
- API Design
- Web Developer
- SaaS Developer

## Structured Data

The website uses Person JSON-LD with these job titles:

- Software Engineer
- Full Stack Developer
- Python Backend Developer
- FastAPI Developer

## Projects

### HRMS Platform

- Type: Dashboard/business platform
- Status: Completed, not hosted
- Year: 2026
- Tech: React, TypeScript, Node.js, Express, Prisma, PostgreSQL, Docker
- GitHub: https://github.com/anubhawdwd/hrms-be
- Summary:
  - Employee onboarding and profile management
  - Location-based attendance within a defined radius
  - Leave application and approval workflow
  - Company hierarchy and reporting structure
  - PostgreSQL data modeling with Prisma ORM
  - REST API backend built with Node.js and Express

### Portfolio Website

- Type: Portfolio and blog
- Status: Live
- Year: 2026
- Tech: Next.js, TypeScript, Framer Motion, Tailwind CSS, MDX, Vercel
- Live: https://anubhawdwivedi.com
- GitHub: https://github.com/anubhawdwd/Project-v2
- Summary:
  - Personal portfolio using Next.js 15 App Router
  - MDX blog system
  - SEO metadata and JSON-LD structured data
  - Responsive UI and motion interactions
  - Content focused on Python backend, Node.js, React, and full stack software engineering

## Blog Content

The blog supports Python/backend positioning.

Current blog topics include:

- In-depth Python Handbook for Backend Engineers
- Backend Python Interview by Claude-4.5
- Backend Python Interview by Gemini 3 Pro
- Node Express Prisma PostgreSQL Docker boilerplate
- Shodashopachar / Guru Pooja article

The Python backend articles cover:

- Python internals
- CPython memory model
- GIL
- Async Python
- FastAPI
- Backend DSA
- PostgreSQL
- System design
- Backend interview preparation
- Production backend patterns

## Current Strengths

- Strong Python/backend theme in blog content.
- Real full stack experience with React, Node.js, Express, and PostgreSQL.
- Good backend direction with Python, FastAPI, APIs, auth, databases, and system design.
- SEO setup already exists: metadata, sitemap, robots, JSON-LD, keywords, and canonical URLs.
- Clear personal domain and social links.

## Current Gaps

- Add at least one serious FastAPI/PostgreSQL project to make the Python backend signal stronger.
- Avoid claiming long-term senior Python production depth unless backed by projects/work.
- Keep Node.js and React visible because they support the real full stack story.
- Keep improving project descriptions with architecture, API, database, auth, and deployment details.

## Recommended Next Project Ideas

- FastAPI Auth Service
- LMS Backend API
- Quiz Engine API
- SaaS Dashboard Backend
- FastAPI PostgreSQL Starter

Each project should include:

- Problem solved
- Backend architecture
- Database design
- Auth/security
- API structure
- Deployment
- Docker usage
- Performance considerations

## Good Prompt to Use with ChatGPT

```txt
I am Anubhaw Dwivedi. Read this portfolio context and help me improve my personal portfolio positioning, SEO titles, meta descriptions, hero copy, about page copy, project descriptions, and keyword strategy.

My goal is to present myself as a Python Backend & Full Stack Software Engineer, with strong signals for Python, FastAPI, backend APIs, Node.js, React, PostgreSQL, SaaS dashboards, LMS platforms, and production-ready web applications.

Keep the tone technically strong, honest, modern, backend-focused, and not exaggerated. Do not use words like expert, guru, senior backend engineer, or architect unless clearly justified.

Please suggest:
1. Best homepage title and hero copy
2. Best SEO title and meta description
3. Best about page summary
4. Best project descriptions
5. Best JSON-LD job titles
6. What content or projects I should add next
7. Any wording I should avoid
```
