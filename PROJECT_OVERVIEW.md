# Project context: The Revolution Technologies

Reviewed on 2026-10-08. This file stores the project idea and implementation context for future work. It describes the repository as inspected; company claims in website copy have not been independently verified.

## Core idea

The project is the public company website for **The Revolution Technologies (TRT)**, a software development and digital services company based in Rawalpindi, Pakistan. The website presents the company as delivering digital solutions since 2015 and serving clients internationally.

Its primary goal is to turn visitors into prospective clients: explain the services, demonstrate experience through portfolios and testimonials, build confidence in the team and delivery process, and encourage a consultation or project inquiry. A secondary goal is recruitment through team profiles and career opportunities.

The central message is “Technology that moves your business forward”: one team providing strategy, design, engineering, launch, and ongoing support for business software.

## Audience and offerings

The intended audience includes founders, businesses, product teams, and enterprise decision makers seeking development or modernization support, plus prospective employees.

The six main services are:

- Web development: full-stack applications, e-commerce, APIs, PWAs, performance, and deployment.
- Mobile app development: native iOS/Android, React Native, and Flutter.
- AI development: assistants, machine learning, predictive analytics, computer vision, NLP, and automation.
- UI/UX design: research, prototypes, interfaces, design systems, and usability.
- Social media marketing: content, community management, advertising, and analytics.
- Custom software development: ERP/CRM, business automation, integrations, modernization, and maintenance.

Industry positioning includes e-commerce, logistics and shipping, healthcare, hospitality and travel, fintech, and business automation. Technologies advertised as company capabilities are broader than the stack used to build this website.

## Pages and visitor journeys

| Route | Purpose | Implementation |
| --- | --- | --- |
| `/` | Main sales page: hero, partners, recognition, services, industries, capabilities, case studies, delivery lifecycle, reviews, statistics, FAQs, and contact CTA | `src/app/page.js` |
| `/services` | Six services with anchored sections, delivery process, and FAQs | `src/Components/ServicesOffer.jsx` |
| `/portfolio` | Featured products and project cards with category filtering | `src/Components/PortfolioPage.jsx` |
| `/company` | Company story, mission, values, milestones, and technology partners | `src/Components/CompanyPage.jsx` |
| `/team` | Leadership and engineering profiles | `src/Components/TeamPage.jsx` |
| `/careers` | Benefits and expandable web developer, mobile developer, and UI/UX designer openings | `src/Components/CareersPage.jsx` |
| `/contact` | Contact details, inquiry form, WhatsApp, and embedded location map | `src/Components/ContactPage.jsx` |
| `/faq` | General, engagement, technology, and hiring FAQs | `src/Components/FaqPage.jsx` |

Client journey: home → services/portfolio/company → contact → email, phone, or WhatsApp conversation. Hiring journey: team/careers → role details → contact. Career application buttons lead to the contact page; there is no dedicated applicant portal or resume upload workflow.

Portfolio content includes American Shipping and Towing, Olfat Shipping, ASL Shipping, Galaxy World Wide, Health Care Pronto, a UI/UX design system, and a business automation suite. Featured products include A1 Global Logistics Suite and Envoy Hotel. These are presentation content, not applications implemented inside this repository.

## Architecture and design

- Next.js 14 App Router and React 18, predominantly JavaScript/JSX.
- Tailwind CSS 3, PostCSS, and Autoprefixer; older standalone CSS and CSS modules remain.
- Framer Motion for reveals, transitions, carousels, and other motion; React Icons for iconography.
- Lottie React and six service animation JSON assets are available in the project.
- `src/app/layout.js` supplies the shared navbar, footer, scroll-to-top button, global CSS, and site metadata.
- Most interactive UI lives in client components. Secondary route files supply metadata and render their page component; the homepage contains its own large set of sections directly.
- `src/Components/ui/` contains reusable `Button`, `Section`, `PageHeader`, `Reveal`, and `CtaBand` components.
- `CtaBand.jsx`, the currently referenced IDE file, is a shared closing gradient card. Its default actions are “Book a call” → `/contact` and “View our work” → `/portfolio`; props customize the text and destinations.
- Shared FAQ content lives in `src/Components/faqData.js`.
- The actual component directory is capitalized: `src/Components`. The lowercase `@/components/*` alias resolves there through project configuration.
- The visual identity uses navy/indigo (`#1a237e`), yellow (`#ffd700`), white and gray surfaces, rounded cards, gradients, generous spacing, and responsive layouts. Typography is configured for Inter with system fallbacks.
- Images, logos, portraits, and project screenshots primarily live in `public/images/`; older image assets also remain in `src/image/` and other folders.

## Data and integrations

Content is primarily hardcoded in component arrays. No application database, authentication, CMS, or server API route is present in the inspected source.

The active contact form validates email and opens a `mailto:` draft addressed to the company and an additional recipient. Its timed “Message sent” UI does not confirm actual delivery. The separate `ContactForm.jsx` component contains placeholder submission logic with a timeout and alert. `emailjs-com` is declared as a dependency, but the active contact page does not use it.

External integrations consist mainly of a Google Maps iframe, WhatsApp links, social links, telephone/email links, and an external Envoy Hotel demo link. The configured public domain in metadata is `https://therevolutiontechnologies.io`.

Business contact copy lists `info@therevolutiontechnologies.io`, phone numbers `051-611-2452` and `0349-076-4229`, and an office in Shamsabad, Rawalpindi. The map embed references an older National Business Center address while the contact page lists Aries Tower/Maryam Business Center; verify before changing location content.

## Build and deployment

InterServer preparation: `npm run build:interserver` produces a static build for `http://162.35.161.125/trt/`. Optional build-time `NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_SITE_URL` preserve normal root deployment when unset. Shared `SiteImage` applies the prefix to public images. See `INTERSERVER_DEPLOYMENT.md` for coexistence with the auction application and pending server access requirements. This preparation does not mean the server has been deployed.

- `npm run dev`: Next.js development server.
- `npm run build`: production build with static export to `out/`.
- `npm run start`: configured as `next start`; the actual deployment workflow serves exported static files.
- `npm run lint`: configured as `next lint`.
- `next.config.js` enables `output: 'export'`, trailing slashes, and unoptimized images. It also ignores ESLint and TypeScript errors during builds, so a successful build alone does not establish lint/type correctness.
- `.github/workflows/deploy.yml` builds on pushes to `main` using Node 18 and deploys `out/` to Hostinger through FTPS with repository secrets.
- Page titles, descriptions, Open Graph, Twitter metadata, icons, a manifest, and permissive robots configuration are present.

## Existing code to recognize during future work

Older React-era components and styles remain, including `Introduce.jsx`, `Leads.jsx`, `whyUs.jsx`, `Solution.jsx`, `aboutUs/About.jsx`, `Item.js`, `src/index.css`, and legacy browser/test helpers. Some refer to dependencies such as React Router, styled-components, or testing-library packages absent from the current package manifest. They should not be assumed to drive the active Next.js routes.

Similarly, standalone homepage components such as `Hero.jsx`, `Services.jsx`, `Projects.jsx`, `Process.jsx`, and `Testimonials.jsx` coexist with homepage sections defined directly inside `src/app/page.js`. Trace imports from the route before editing a section.

Project totals, team counts, years of experience, review counts, awards, certifications, and case-study results are static marketing copy and sometimes vary between components. Preserve their status as claims rather than treating them as verified live data. Some portfolio filter categories have no matching entries.

## Review scope

This overview was derived from the route structure, source components and helpers, styles, package and build configuration, README, deployment workflow, public metadata files, and asset inventory/Lottie structure. It is a source review, not runtime or deployment validation; binary images and video were inventoried rather than individually visually audited. No application behavior was changed as part of saving this context.
