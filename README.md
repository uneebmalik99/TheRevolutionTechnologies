# The Revolution Technologies - Next.js Website

A modern, responsive company website built with Next.js 14, React, and Tailwind CSS.

## Features

- ✨ Modern, responsive design
- 🚀 Built with Next.js 14 App Router
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive across all devices
- ⚡ Optimized performance
- 🎭 Smooth animations with Framer Motion
- 🎬 Lottie animations for interactive elements

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lottie React** - Animation library for JSON animations
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.js      # Home page
│   │   ├── services/    # Services page
│   │   ├── portfolio/   # Portfolio page
│   │   ├── team/        # Team page
│   │   ├── company/     # Company page
│   │   ├── careers/     # Careers page
│   │   ├── contact/     # Contact page
│   │   ├── layout.js    # Root layout
│   │   └── globals.css  # Global styles
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   └── ...
│   └── Animations/      # Lottie animation JSON files
└── public/              # Static assets
    └── images/          # Image files
```

## Pages

- **Home** (`/`) - Hero section, services overview, projects, testimonials
- **Services** (`/services`) - Detailed service offerings
- **Portfolio** (`/portfolio`) - Project showcase with filtering
- **Team** (`/team`) - Team members
- **Company** (`/company`) - About us, values, and testimonials
- **Careers** (`/careers`) - Job openings and company benefits
- **Contact** (`/contact`) - Contact form and location map

## Building for Production

```bash
npm run build
npm start
```

## Deployment

The site can be deployed on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform that supports Node.js

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { ... },
  accent: { ... },
}
```

### Content

Update component files in `src/components/` to modify content and styling.

## License

© 2024 The Revolution Technologies. All Rights Reserved.
