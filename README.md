# TaskFlow - SaaS Landing Page

A modern, responsive landing page for a Task Management Software built with Next.js and Tailwind CSS.

## Technologies Used

- **Next.js 15** (App Router) - React framework with built-in routing, server components, and optimized performance
- **Tailwind CSS v4** - Utility-first CSS framework for rapid, responsive styling
- **Lucide React** - Beautiful, consistent icon library
- **TypeScript** - Type-safe development

## Why Next.js + Tailwind?

- **Next.js**: Provides excellent SEO through server-side rendering, automatic code splitting, and optimized image handling
- **Tailwind CSS**: Enables rapid prototyping with utility classes, built-in responsive design, and consistent spacing/typography

## Folder Structure

```
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles and Tailwind config
├── components/
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Hero section with CTA
│   ├── features.tsx      # Features grid section
│   ├── how-it-works.tsx  # 3-step process section
│   ├── testimonial.tsx   # Customer testimonial card
│   └── footer.tsx        # Site footer
└── public/               # Static assets
```

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Deployment

This project is ready for deployment on Vercel with zero configuration.
