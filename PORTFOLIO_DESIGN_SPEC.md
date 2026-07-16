# Full Stack Developer Portfolio - Premium Design Specification

## 1. Project Overview
- **Objective:** Production-ready, premium portfolio for a Full Stack Developer.
- **Target Audience:** Recruiters, Engineering Managers, Freelance Clients.
- **Vibe:** Professional, Trustworthy, Modern, Minimal, Technical, Confident, Elegant.
- **UX Principles:** Jakob's Law (standard navigation), Fitts's Law (large touch targets), Hick's Law (categorized information).

## 2. Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (Utility-first, heavily customized)
- **Animations:** Framer Motion (Hardware accelerated)
- **Icons:** Lucide React (Clean, minimal line icons)
- **Typography:** `next/font` (Geist or Inter)
- **Deployment:** Vercel

## 3. Design System (Tokens)

### 3.1. Color Palette (High-Contrast Dark Theme)
| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Background** | `#09090B` | Main page background (Zinc 950) |
| **Surface** | `#111827` | Secondary background sections (Gray 900) |
| **Card** | `#18181B` | Bento boxes, project cards (Zinc 900) |
| **Primary** | `#3B82F6` | Primary CTAs, active links, accents (Blue 500) |
| **Secondary** | `#FFFFFF` | Main headings, primary text (White) |
| **Muted** | `#9CA3AF` | Body text, captions, inactive icons (Gray 400) |
| **Success** | `#22C55E` | Availability badge, success states |
| **Warning** | `#F59E0B` | Warning alerts |
| **Error** | `#EF4444` | Form validation errors |
| **Border** | `rgba(255,255,255,0.1)` | Subtle dividers and card borders |

### 3.2. Typography
- **Typeface:** Inter (Clean, highly legible for tech UI).
- **Hero:** 72px (Mobile: 48px) - *Tracking tight (-0.02em), Leading 1.1*
- **H1:** 56px (Mobile: 40px) - *Tracking tight (-0.02em), Leading 1.2*
- **H2:** 40px (Mobile: 32px) - *Weight: SemiBold*
- **H3:** 28px (Mobile: 24px) - *Weight: Medium*
- **Body:** 18px (Mobile: 16px) - *Weight: Normal, Leading 1.6 (Relaxed)*
- **Caption:** 14px - *Weight: Normal, Color: Muted*

### 3.3. Spacing System (8pt Base)
- `xs` (8px): Micro-spacing (icon to text)
- `sm` (16px): Internal button padding
- `md` (24px): Standard card padding
- `lg` (32px): Large card padding
- `xl` (40px) / `2xl` (48px): Element gaps within sections
- `3xl` (64px): Standard Section padding (Mobile)
- `4xl` (96px): Large Section padding (Tablet)
- `5xl` (128px): Premium Section padding (Desktop)

## 4. Component Architecture
To ensure a maintainable and scalable codebase, we will separate concerns into Reusable UI and Section Components.

### 4.1. Global Layout
- `Navbar.tsx`: Sticky, backdrop-blur, responsive hamburger menu.
- `Footer.tsx`: Minimalist, copyright, social links.
- `SectionWrapper.tsx`: Handles max-width (`1440px`), semantic `<section>` tags, and Framer Motion viewport reveal logic.

### 4.2. Reusable UI Components
- `Button.tsx`: Variants (Primary, Secondary, Outline, Ghost), handles loading states.
- `Badge.tsx`: Pill-shaped, used for Tech Stack and Availability.
- `Card.tsx`: Base container with hover states and subtle borders.
- `SectionTitle.tsx`: Standardized H2 with an optional sub-heading/label.

### 4.3. Feature Modules (Sections)
1. **`Hero.tsx`**: Large text, portrait placeholder, dual CTAs, availability status.
2. **`About.tsx`**: Story-driven text alongside a compact values grid.
3. **`SkillsBento.tsx`**: Asymmetric grid displaying grouped skills (Frontend, Backend, DevOps).
4. **`ExperienceTimeline.tsx`**: Vertical line connecting roles, focusing on responsibilities & achievements.
5. **`ProjectShowcase.tsx`**: Large alternating layout (Image on left, details on right) with GitHub/Demo links.
6. **`Services.tsx`**: Grid of offerings (Website Dev, Backend, CMS).
7. **`Testimonials.tsx`**: Carousel or masonry layout of quotes.
8. **`Contact.tsx`**: Large CTA heading with a controlled HTML form.

## 5. Animation Strategy
Animations must feel intentional, never distracting.
- **Engine:** Framer Motion.
- **Duration:** 200ms - 300ms.
- **Scroll Reveal:** Elements fade and slide up (`y: 20` to `y: 0`, `opacity: 0` to `opacity: 1`) when intersecting the viewport (`once: true`).
- **Stagger:** Lists (like tech stacks or timelines) reveal sequentially (`staggerChildren: 0.1`).
- **Micro-interactions:**
  - Buttons: `whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}`
  - Cards: `whileHover={{ y: -5 }}` with an increase in border opacity or subtle glow.

## 6. Implementation Plan (Next Steps)
- [ ] **Phase 1:** Init Next.js app, configure Tailwind variables (colors, fonts, spacing).
- [ ] **Phase 2:** Build base UI components (Button, Badge, Card, SectionTitle).
- [ ] **Phase 3:** Develop Global Layout (Navbar, Footer, SectionWrapper).
- [ ] **Phase 4:** Assemble core sections (Hero, About, Skills, Projects, Experience).
- [ ] **Phase 5:** Wire up Framer Motion animations.
- [ ] **Phase 6:** Polish (Mobile responsiveness check, Accessibility audit, Performance check).
