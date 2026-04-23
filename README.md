# Risewave Communications

Next-generation security and smart connectivity systems — production-grade web application.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx + tailwind-merge

## Project Structure

```
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Home page
│   ├── loading.tsx       # Loading skeletons
│   ├── error.tsx         # Error boundary
│   └── globals.css       # Global styles & Tailwind
├── components/
│   ├── ui/               # Reusable primitives (Button, Card, Input, Badge)
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, Services, About, Contact
│   └── motion/           # Animation wrappers (Reveal, StaggerChildren)
├── lib/                  # Constants, fonts, metadata
├── hooks/                # Custom React hooks
└── utils/                # Utility functions (cn)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Address

51 Sutter Avenue, Brampton, ON, Canada

## License

Copyright © 2026 Risewave Communications. All rights reserved.