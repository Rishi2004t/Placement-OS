# PlacementOS

[Live Demo](https://placement-os-eight-cyan.vercel.app/)

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
Preparation Plan
↓
Practice
↓
Readiness Update
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
A framework paired with interactive preparation area cards. The Preparation System can now receive a preparation plan generated from the detected skill gaps. The plan provides:
- Priority
- Focus topics
- Recommended action
- Practice Now action

### 6. Practice Simulator
A deterministic local practice simulator with:
- DSA
- SQL
- DBMS
- Computer Networks
- Operating Systems

Each topic features local practice questions, answer validation, detailed explanations, score calculation, completion state, and practice-again/reset behavior. 

### 7. Placement Readiness
A bold visualization of the candidate's overall readiness using a circular progress indicator. Practice results update the local readiness state deterministically in real-time. Accompanied by a clear visual hierarchy of skill breakdowns and a "Focus Next" panel.

### 8. Final CTA
The concluding conversion section, guiding the user to either "Build My Placement Plan" or "Analyze a Role" (both anchoring back to the Role Analyzer experience).

## Key Features

- Interactive job-description analysis
- Deterministic skill-gap analysis
- Dynamic preparation-plan generation
- Practice Simulator
- Topic-based practice questions
- Practice score calculation
- Practice-to-readiness integration
- Shared frontend application state
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
├── components/
│   ├── command-center/
│   ├── cta/
│   ├── hero/
│   ├── layout/
│   ├── preparation/
│   ├── problem/
│   ├── product-showcase/
│   ├── readiness/
│   ├── role-analyzer/
│   ├── simulator/
│   ├── ui/
│   └── workflow/
├── data/
│   ├── demo.ts
│   └── questions.ts
└── lib/
    ├── skillAnalyzer.ts
    ├── store.tsx
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
- **Build Preparation Plan**: Dynamically generates targeted actions based on analyzed skill gaps.
- **Practice Now topic selection**: Auto-scrolls and pre-selects the corresponding topic in the simulator.
- **Practice question flow**: Interactive quiz with answer validation, score calculation, and explanations.
- **Practice Again**: Resets practice state for continuous learning.
- **Practice → readiness update**: Completing a quiz deterministically updates the global readiness score and progress bars.
- **New-role replacement**: Analyzing a new role gracefully replaces the previous preparation plan.
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

This project passes strict linting and type-checking requirements locally:
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
- Backend persistence / database
- Real job ingestion APIs
- AI-assisted skill extraction
- Company-specific preparation
- Persistent practice history
- Real interview simulation with company-specific questions

## License

No explicit license provided.
