# PlacementOS — Engineering Decisions

## 1. Product Direction

The experience is centered around the flow of **Job → Skill Gap → Preparation → Readiness**. This flow solves the core problem of software engineering placement preparation: students often have access to countless resources but lack a cohesive strategy. By explicitly defining the target role first, the preparation becomes directed and measurable, rather than random.

## 2. Why a Landing-Page Product Experience?

This assignment focuses on demonstrating frontend product thinking, UI craft, responsive design, and meaningful user interactions. Building a full production SaaS backend (database, auth, API layers) would distract from the core requirement of delivering an exceptional, polished, immediately understandable frontend prototype.

## 3. Framework Choice

**Next.js (App Router)** was chosen as the framework. 
- It provides an excellent out-of-the-box developer experience.
- It seamlessly supports modern CSS approaches (like Tailwind 4.x).
- The App Router structure provides clear separation for global layouts, styles, and page content.

## 4. TypeScript

TypeScript provides massive benefits for a complex UI:
- **Component Contracts:** Interfaces for props ensure that components like `Button`, `Surface`, and `Badge` are used correctly across the application.
- **Safer Data Structures:** Strongly typing the `demoData` guarantees that the UI will not crash due to missing properties when rendering lists of skills or tasks.
- **Maintainability:** Refactoring components is significantly safer and faster.

## 5. Component Architecture

The UI is heavily componentized to ensure visual consistency and code reusability:
- `src/components/ui/`: Contains low-level, reusable design primitives (Buttons, Containers, Surfaces) that enforce the design system.
- `src/components/{feature}/`: Contains high-level feature sections (e.g., `hero`, `preparation`, `role-analyzer`). This keeps `page.tsx` clean and readable, delegating logic to the appropriate section.

## 6. Deterministic Skill Analysis

The Role Analyzer (`src/lib/skillAnalyzer.ts`) is a completely local, deterministic implementation.
- **Input:** It receives a raw text string (the Job Description).
- **Detection:** It uses a predefined dictionary of common software engineering skills (e.g., React, Java, SQL, System Design) and uses regular expressions to find case-insensitive keyword matches within the text.
- **Strengths & Gaps:** It compares the detected skills against the hardcoded mock user profile. If the user's score for a required skill is > 70%, it is a strength; otherwise, it is a gap.
- **Readiness:** The readiness score is a weighted calculation. Missing critical skills heavily penalize the score, while strengths increase it.
- **Why Deterministic?** An external AI API introduces latency, costs, and unpredictability, which are undesirable for a frontend UI/UX assignment. A local, deterministic function allows instant, reliable demonstration of the product's value proposition.

## 7. Readiness Visualization

The UI communicates readiness clearly:
- **Overall Readiness:** A large, central circular progress SVG animation provides an immediate, visceral understanding of the candidate's standing.
- **Skill Breakdown:** A clear, hierarchical list of core subjects with color-coded progress bars (Success/Warning/Accent) to quickly identify specific weak points.
- **Focus Next:** A prioritized panel that extracts the top three weakest or highest-priority items, answering the user's immediate question: "What should I do right now?"

## 8. Responsive Strategy

The layout relies on standard Tailwind CSS breakpoints (`sm:`, `md:`, `lg:`) to adapt fluidly:
- **Mobile (390px):** Single-column layouts, hidden complex interactions (e.g., mobile hamburger menu replaces desktop nav).
- **Tablet (768px):** Introduction of 2-column grids for denser information display.
- **Desktop (1024px - 1440px):** Full utilization of horizontal space, maintaining a consistent `max-w-7xl` container to prevent the UI from stretching uncomfortably on ultra-wide screens.

## 9. Motion Strategy

Motion (via Framer Motion) is used strictly to support comprehension:
- **State Changes:** Tab switching in the Product Showcase utilizes `AnimatePresence` to make content replacement feel intentional rather than jarring.
- **Interaction Feedback:** Buttons and interactive cards have subtle scale or border transitions.
- **Visual Hierarchy:** Scroll-triggered entrance animations (fade-in, slide-up) guide the user's eye down the page naturally. There are no infinite, decorative animations.

## 10. Demo Data Strategy

All candidate data (`src/data/demo.ts`) is hardcoded sample data. This is necessary to demonstrate the complex UI components (like dashboards and readiness charts) without requiring a backend. The UI explicitly labels this as a "Sample candidate profile" to maintain honesty and clarity.

## 11. No Backend Decision

Backend infrastructure was intentionally kept out of scope. The core evaluation criteria for this assignment relate to frontend product experience, visual polish, and interaction design. Building auth/DB layers would not improve the demonstration of these specific frontend skills.

## 12. Honest Product Claims

The interface strictly avoids "vaporware" tactics:
- No fake user counts ("Trusted by 10,000+ students").
- No fabricated testimonials or company logos.
- No claims of "Powered by AI" where deterministic logic is used.
The product stands on the strength of its UI and defined workflow, not on fabricated social proof.
