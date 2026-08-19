# PlacementOS

PlacementOS is a focused placement-preparation product experience that helps students move from a target job role to skill gaps, preparation priorities, and placement readiness.

## The Problem

Placement preparation is often scattered across:
- DSA platforms
- SQL/DBMS resources
- CS fundamentals
- interview preparation
- project preparation

PlacementOS presents these pieces through one focused preparation flow. It eliminates the chaos by telling you exactly what matters next.

## Product Flow

Target Role
↓
Job Description
↓
Skill Gap
↓
Preparation Priority
↓
Readiness
↓
Next Action

## Core Experience

### 1. Placement Command Center
A dashboard-style product preview that demonstrates the candidate's current readiness score, skill breakdown across core CS subjects, today's immediate focus tasks, and upcoming topics. It provides an immediate sense of control and clarity.

### 2. Placement Problem
Highlights the fragmented preparation problem, visualizing the transition from a messy, scattered approach ("Which one should I do next?") to a focused, streamlined preparation plan.

### 3. Product Showcase
An interactive workspace preview showing exactly how the software organizes information. Includes functioning tabs for Overview, Preparation, Skill Gap, Practice, and Interviews, displaying detailed (but mock) progress bars, strengths, weaknesses, and practice queues.

### 4. Job Description → Skill Gap Analyzer
An interactive tool that parses a job description and compares it against a sample candidate profile. 
- Features a "Try sample role" button for instant demonstration.
- Uses a deterministic local dictionary to extract known skills (e.g. Java, Docker, REST APIs).
- Outputs a realistic readiness percentage.
- Lists strong skills, skills needing attention, and recommended next steps based on the identified gaps.

### 5. Preparation System
A four-step framework (Learn, Practice, Track, Improve) paired with interactive preparation area cards. Expanding a card reveals the candidate's current readiness in that subject, priority level, specific focus topics, and a recommended action.

### 6. Placement Readiness
A bold visualization of the candidate's overall readiness using a circular progress indicator. Accompanied by a clear visual hierarchy of skill breakdowns and a "Focus Next" panel that prioritizes the top three weakest areas.

### 7. Final CTA
The concluding conversion section, guiding the user to either "Build My Placement Plan" or "Analyze a Role" (both anchoring back to the Role Analyzer experience).

## Key Features

- Interactive job-description analysis
- Deterministic skill-gap analysis
- Preparation-area interaction (accordions)
- Readiness visualization
- Focus-next recommendations
- Responsive landing-page experience
- Smooth UI interactions using Framer Motion
- Anchor-based navigation

## Tech Stack

- **Next.js (App Router)** - React framework
- **TypeScript** - Static typing
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - UI animations
- **Lucide React** - Iconography

## Architecture

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── command-center/
│   │   └── PlacementCommandCenter.tsx
│   ├── cta/
│   │   └── FinalCTA.tsx
│   ├── hero/
│   │   └── Hero.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── preparation/
│   │   └── PreparationSystem.tsx
│   ├── problem/
│   │   └── PlacementProblem.tsx
│   ├── product-showcase/
│   │   └── ProductShowcase.tsx
│   ├── readiness/
│   │   └── PlacementReadiness.tsx
│   ├── role-analyzer/
│   │   └── RoleAnalyzer.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Container.tsx
│       └── Surface.tsx
├── data/
│   └── demo.ts
└── lib/
    ├── skillAnalyzer.ts
    └── utils.ts
```

- **app/**: Next.js routing and global styles.
- **components/**: Modular UI sections, split logically by feature.
- **components/ui/**: Low-level, reusable design primitives.
- **data/**: Centralized mock data to keep JSX clean.
- **lib/**: Utility functions and the core deterministic skill analyzer logic.

## Interaction Design

- **Hero CTA navigation**: Smooth scrolling to the analyzer and command center.
- **Navbar anchor navigation**: Mobile and desktop links that scroll to sections.
- **Product showcase interaction**: Local state tab switching without page reloads.
- **Sample role interaction**: One-click population of a mock JD.
- **Analyze Role**: Controlled delay to simulate processing, transitioning to a results view.
- **Preparation accordion**: Only one card expands at a time, displaying detailed action plans.
- **Readiness visualization**: SVG circle progress animation on scroll into view.

## Responsive Design

The interface was built and verified for:
- 390px (Mobile)
- 768px (Tablet)
- 1024px (Small Desktop)
- 1440px (Desktop)

## Accessibility

- Semantic HTML structure.
- Accessible buttons and interactive tabs.
- Keyboard navigation supported across major interactive elements.
- Focus-visible states configured for interactive elements.
- High contrast and labels for status indicators (no color-only status).

## Getting Started

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Verification

This project passes strict linting and type-checking requirements:
```bash
pnpm run lint
pnpm run build
```

## Design Philosophy

- **Dark Interface**: A sophisticated, dark-first UI to convey a "command center" feel.
- **Restrained Blue Accent**: Used intentionally for interactive elements and highlights.
- **Strong Typography**: Clean, readable fonts with clear hierarchical weights.
- **Information Density**: Compact but readable data presentation, mimicking real software.
- **Subtle Motion**: Framer Motion is used for state transitions and entrance reveals, never for endless decorative noise.

## Demo Data

All candidate statistics, readiness values, and skill breakdowns shown in the interface are purely sample/demo data designed to communicate the product experience. They do not represent real user data.

## Future Scope

The following features are conceptually part of the product vision but are intentionally NOT implemented in this frontend assignment:
- Authentication & persistent user profiles
- Backend persistence / Database
- Real job ingestion APIs
- AI-assisted skill extraction (NLP)
- Personalized, dynamic preparation plans
- Company-specific preparation
- Real interview practice engine

## License

No explicit license provided.
