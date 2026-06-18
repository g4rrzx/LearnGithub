# 📘 Product Requirements Document (PRD)
# LearnGithub — Belajar GitHub dari Nol Sampai Mahir

---

| Field | Detail |
|---|---|
| **Project Name** | LearnGithub |
| **Version** | 1.0.0 |
| **Author** | — |
| **Status** | Ready for Development |
| **Last Updated** | 2026-06-18 |
| **Platform** | Web (responsive, all devices) |
| **Language** | Bahasa Indonesia |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Goals & Objectives](#3-goals--objectives)
4. [Target Users](#4-target-users)
5. [Product Scope](#5-product-scope)
6. [Functional Requirements](#6-functional-requirements)
7. [Non-Functional Requirements](#7-non-functional-requirements)
8. [Content Architecture](#8-content-architecture)
9. [Module Breakdown](#9-module-breakdown)
10. [UI/UX Specifications](#10-uiux-specifications)
11. [Technical Architecture](#11-technical-architecture)
12. [Data Model](#12-data-model)
13. [Component Specifications](#13-component-specifications)
14. [Accessibility](#14-accessibility)
15. [Deployment Strategy](#15-deployment-strategy)
16. [Success Metrics](#16-success-metrics)
17. [Future Roadmap](#17-future-roadmap)
18. [Appendix](#18-appendix)

---

## 1. Executive Summary

**LearnGithub** is a responsive single-page web application designed to teach GitHub from end-to-end using simple analogies, contextual examples, and Bahasa Indonesia as the primary language. The app targets Indonesian-speaking learners — from students to early-career developers — who want to understand Git and GitHub without the barrier of English-heavy documentation.

The application delivers 12 structured learning modules covering foundational concepts (what is Git, installation, repositories) through intermediate topics (branching, pull requests, merge conflicts) to advanced workflows (CI/CD, Git Flow, open source contribution). Each module uses everyday analogies, interactive terminal simulations, visual diagrams, code examples, and knowledge-check quizzes to ensure comprehension.

**Key differentiators:**
- 🇮🇩 Fully in Bahasa Indonesia with locally relatable analogies
- 🎓 Zero-prerequisite learning path (true beginner to advanced)
- 📱 Fully responsive — works on phone, tablet, and desktop
- 🌙 Dark/Light mode with GitHub-inspired theming
- 📊 Local progress tracking via `localStorage`
- ⚡ Zero dependencies — vanilla HTML/CSS/JS, instant load

---

## 2. Problem Statement

### The Problem
Indonesian-speaking beginners face significant barriers when learning Git and GitHub:

1. **Language barrier** — Most Git/GitHub tutorials are in English, making comprehension harder for non-English speakers
2. **Abstract concepts** — Version control concepts (commits, branches, merges) are inherently abstract and hard to visualize without proper analogies
3. **Overwhelming documentation** — Official docs assume prior knowledge; beginners get lost in technical jargon
4. **No structured path** — Learners jump between scattered blog posts, YouTube videos, and Stack Overflow without a coherent learning journey
5. **Fear of mistakes** — Beginners are afraid of `git push --force`, merge conflicts, and "breaking things" because they don't understand undo mechanisms

### The Opportunity
A single, well-structured, Bahasa Indonesia resource that uses familiar analogies (diary, camera, packages, restaurant kitchen) to make Git/GitHub approachable — accessible from any device, with no installation required.

---

## 3. Goals & Objectives

### Primary Goal
Enable an Indonesian-speaking beginner to go from "never used Git" to "confidently collaborating on GitHub" through a self-paced, analogy-driven web application.

### Objectives

| # | Objective | Measurable Outcome |
|---|---|---|
| O1 | Teach Git/GitHub end-to-end | 12 modules covering basics → advanced |
| O2 | Ensure comprehension via analogies | Every concept has ≥1 real-world analogy |
| O3 | Validate learning retention | Each module ends with an interactive quiz |
| O4 | Support all device form factors | Responsive layout: mobile (≥320px) to desktop (≥1440px) |
| O5 | Provide distraction-free UX | Dark/light mode, clean typography, focused content |
| O6 | Track learning progress | Local progress persistence via `localStorage` |
| O7 | Zero barrier to entry | No login, no install, no framework — just open the URL |

---

## 4. Target Users

### Primary Persona: "Budi — Mahasiswa IT"
- **Age:** 19–25
- **Background:** University student, basic programming knowledge
- **Pain point:** Lectures mention Git but don't teach it; English docs are intimidating
- **Device:** Primarily laptop, sometimes phone
- **Goal:** Understand Git well enough for internship applications and team projects

### Secondary Persona: "Sari — Career Switcher"
- **Age:** 25–35
- **Background:** Non-CS background, self-learning web development
- **Pain point:** Tutorial hell — watches videos but can't retain Git concepts
- **Device:** Phone during commute, laptop at home
- **Goal:** Build a GitHub portfolio to showcase to employers

### Tertiary Persona: "Andi — Junior Developer"
- **Age:** 22–28
- **Background:** Already codes but uses Git "by copying commands from Stack Overflow"
- **Pain point:** Doesn't understand *why* commands work; panics during merge conflicts
- **Device:** Desktop
- **Goal:** Fill knowledge gaps and become confident with branching/workflows

---

## 5. Product Scope

### In Scope (v1.0)

| Area | Scope |
|---|---|
| **Content** | 12 learning modules (1 welcome + 11 educational) |
| **Navigation** | Sidebar with sectioned nav, previous/next buttons |
| **Theming** | Dark mode (default) + Light mode, persisted in `localStorage` |
| **Progress** | Per-module completion tracking, progress bar, persisted in `localStorage` |
| **Interactivity** | Copy-to-clipboard code blocks, interactive quizzes with explanations |
| **Responsiveness** | Mobile-first responsive design (320px–1440px+) |
| **Accessibility** | Semantic HTML, keyboard navigable, sufficient contrast |

### Out of Scope (v1.0)

- User authentication / accounts
- Backend / database
- Live terminal execution
- Video content
- Multi-language support (beyond Bahasa Indonesia)
- Community features (comments, forums)
- Certificate generation

---

## 6. Functional Requirements

### FR-1: Navigation System
| ID | Requirement | Priority |
|---|---|---|
| FR-1.1 | Sidebar navigation listing all 12 modules grouped by section (Dasar, Menengah, Lanjutan) | **Must** |
| FR-1.2 | Active module highlighted in sidebar | **Must** |
| FR-1.3 | Completed modules show a green checkmark icon | **Must** |
| FR-1.4 | Sidebar collapsible on mobile with overlay | **Must** |
| FR-1.5 | Previous/Next buttons at bottom of content | **Must** |
| FR-1.6 | Previous button disabled on first module, Next disabled on last | **Must** |

### FR-2: Content Rendering
| ID | Requirement | Priority |
|---|---|---|
| FR-2.1 | Welcome screen with hero section and feature cards | **Must** |
| FR-2.2 | Article view with structured content (headings, paragraphs, lists, tables) | **Must** |
| FR-2.3 | Analogy boxes (💡) with distinct styling | **Must** |
| FR-2.4 | Warning boxes (⚠️) for cautions | **Must** |
| FR-2.5 | Tip boxes (✅) for best practices | **Must** |
| FR-2.6 | Code blocks with syntax highlighting and copy button | **Must** |
| FR-2.7 | Terminal simulator with macOS-style window chrome | **Must** |
| FR-2.8 | Flow diagrams using CSS flexbox nodes and arrows | **Must** |
| FR-2.9 | Fade-in animation on module transition | **Should** |

### FR-3: Interactive Quizzes
| ID | Requirement | Priority |
|---|---|---|
| FR-3.1 | Each module (except welcome) ends with a multiple-choice quiz | **Must** |
| FR-3.2 | Quiz has 4 options with letter indicators (A/B/C/D) | **Must** |
| FR-3.3 | Clicking an option selects it (visual highlight) | **Must** |
| FR-3.4 | "Check Answer" button validates selection | **Must** |
| FR-3.5 | Correct answer highlighted green, wrong answer highlighted red | **Must** |
| FR-3.6 | Explanation shown after answering | **Must** |
| FR-3.7 | Quiz state reset on module revisit | **Should** |

### FR-4: Progress Tracking
| ID | Requirement | Priority |
|---|---|---|
| FR-4.1 | "Mark as Complete" button at end of each module | **Must** |
| FR-4.2 | Completion status saved to `localStorage` | **Must** |
| FR-4.3 | Progress bar in sidebar footer showing percentage | **Must** |
| FR-4.4 | Completed modules show checkmark in sidebar | **Must** |
| FR-4.5 | Button toggles between "Mark Complete" and "Completed ✓" | **Must** |
| FR-4.6 | Progress persists across browser sessions | **Must** |

### FR-5: Theme Toggle
| ID | Requirement | Priority |
|---|---|---|
| FR-5.1 | Dark mode as default theme | **Must** |
| FR-5.2 | Toggle button in top bar switches between dark/light | **Must** |
| FR-5.3 | Theme preference saved to `localStorage` | **Must** |
| FR-5.4 | Sun/Moon icons indicate current theme | **Must** |
| FR-5.5 | Smooth CSS transition on theme change | **Should** |

### FR-6: Copy Code
| ID | Requirement | Priority |
|---|---|---|
| FR-6.1 | Every code block has a "Copy" button | **Must** |
| FR-6.2 | Clicking copies code content to clipboard | **Must** |
| FR-6.3 | Button text changes to "Copied!" temporarily (2s) | **Should** |

---

## 7. Non-Functional Requirements

### NFR-1: Performance
| ID | Requirement | Target |
|---|---|---|
| NFR-1.1 | First Contentful Paint (FCP) | < 1.5s on 3G |
| NFR-1.2 | Time to Interactive (TTI) | < 3s on 3G |
| NFR-1.3 | Total page weight | < 200KB (excluding fonts) |
| NFR-1.4 | Lighthouse Performance score | ≥ 95 |
| NFR-1.5 | No layout shift (CLS) | < 0.1 |

### NFR-2: Compatibility
| ID | Requirement | Target |
|---|---|---|
| NFR-2.1 | Chrome/Edge | Last 2 major versions |
| NFR-2.2 | Firefox | Last 2 major versions |
| NFR-2.3 | Safari | Last 2 major versions |
| NFR-2.4 | Mobile browsers | iOS Safari, Chrome Android |
| NFR-2.5 | Minimum viewport | 320px × 568px |

### NFR-3: Maintainability
| ID | Requirement | Target |
|---|---|---|
| NFR-3.1 | Zero build step | No bundler/compiler required |
| NFR-3.2 | Zero runtime dependencies | No npm/frameworks |
| NFR-3.3 | Content separated from logic | All module content in `data.js` |
| NFR-3.4 | CSS custom properties for theming | All colors as variables |

---

## 8. Content Architecture

### Section Structure

```
LearnGithub Content
├── Mulai (Start)
│   └── Welcome Screen (hero + feature cards)
│
├── Dasar (Basics) — Modules 1-4
│   ├── Apa itu Git & GitHub?
│   ├── Instalasi & Setup
│   ├── Repository (Repo)
│   └── Add, Commit & Push
│
├── Menengah (Intermediate) — Modules 5-8
│   ├── Branching (Percabangan)
│   ├── Pull Request (PR)
│   ├── Fork & Kontribusi
│   └── Merge Conflict
│
└── Lanjutan (Advanced) — Modules 9-12
    ├── Fitur GitHub (Actions, Pages, Issues)
    ├── Git Advanced Commands
    ├── Git Workflow (Git Flow, GitHub Flow)
    └── Penutup & Next Steps
```

### Content Components per Module

Each educational module (modules 1–12) contains:

| Component | Required | Description |
|---|---|---|
| Badge + Title | ✅ | Level indicator (🟢 Pemula / 🟡 Menengah / 🟣 Lanjutan) |
| Subtitle | ✅ | One-line description |
| Analogy Box | ✅ (≥1) | Real-world analogy to anchor the concept |
| Main Content | ✅ | Structured explanation with headings |
| Code Block / Terminal | ✅ (≥1) | Practical command examples |
| Diagram | ✅ (≥1) | Visual flow/structure diagram |
| Warning/Tip Box | Optional | Cautions or best practices |
| Table | Optional | Comparisons or reference data |
| Quiz | ✅ | 4-option multiple choice with explanation |
| Complete Button | ✅ | Mark module as done |

---

## 9. Module Breakdown

### Module 0: Welcome Screen
- **Type:** Landing / Hero page
- **Content:** Animated hero with gradient title, description paragraph, 3 feature cards (Basics, Intermediate, Advanced)
- **Interaction:** Cards clickable to jump to first module of each section

### Module 1: Apa itu Git & GitHub?
- **Level:** 🟢 Pemula
- **Analogy:** "Buku Diary dengan Mesin Waktu" — Git takes snapshots of your diary, GitHub is the cloud where snapshots are stored
- **Key Concepts:** Git vs GitHub comparison table, why learn Git, basic workflow diagram (File → Stage → Commit → Push)
- **Quiz:** Difference between Git and GitHub

### Module 2: Instalasi & Setup
- **Level:** 🟢 Pemula
- **Analogy:** Installing Git = installing a camera app; SSH Key = building access card
- **Key Concepts:** Git install (Windows), identity config, GitHub account creation, SSH key generation, VS Code setup
- **Quiz:** `git config --global user.name` command

### Module 3: Repository (Repo)
- **Level:** 🟢 Pemula
- **Analogy:** Repo = "magic folder" that remembers every change; Clone = downloading a Google Drive folder with full history; .gitignore = "list of things to hide before taking a photo"
- **Key Concepts:** `git init`, `git clone`, repo structure, .gitignore file
- **Quiz:** Purpose of .gitignore

### Module 4: Add, Commit & Push
- **Level:** 🟢 Pemula
- **Analogy:** Sending a package — `git add` = put items in box, `git commit` = seal and label, `git push` = ship to destination
- **Key Concepts:** Working directory → Staging → Repository → Remote flow, `git status`, commit message best practices, `git push`
- **Quiz:** What `git add .` does

### Module 5: Branching (Percabangan)
- **Level:** 🟡 Menengah
- **Analogy:** "Avengers Endgame timeline" — branches are alternate timelines where you can experiment safely
- **Key Concepts:** `git branch`, `git checkout`, `git checkout -b`, `git merge`, branch naming conventions
- **Quiz:** Most efficient command to create + switch branch

### Module 6: Pull Request (PR)
- **Level:** 🟡 Menengah
- **Analogy:** "Submitting a proposal to your boss" — you can't just change the office layout; you need approval
- **Key Concepts:** PR workflow diagram, creating PR on GitHub, PR description template, code review process
- **Quiz:** Purpose of Pull Request

### Module 7: Fork & Kontribusi
- **Level:** 🟡 Menengah
- **Analogy:** "Photocopying a recipe book" — fork a cookbook, add your rendang recipe, submit to publisher
- **Key Concepts:** Fork button, clone fork, add upstream remote, push + create PR, sync fork
- **Quiz:** What "upstream" means in fork context

### Module 8: Merge Conflict
- **Level:** 🟡 Menengah
- **Analogy:** "Two people editing the same PowerPoint slide" — Git doesn't know which version to keep
- **Key Concepts:** When conflicts occur, conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), resolving conflicts manually, `git merge --abort`
- **Quiz:** Steps to resolve a merge conflict

### Module 9: Fitur GitHub
- **Level:** 🟣 Lanjutan
- **Analogy:** GitHub Actions = "robot assistant" that runs tests automatically; Issues = "sticky notes on office board"
- **Key Concepts:** Issues & labels, GitHub Actions YAML example, GitHub Pages, Projects, Wiki, Profile README
- **Quiz:** Function of GitHub Actions

### Module 10: Git Advanced Commands
- **Level:** 🟣 Lanjutan
- **Analogy:** `git stash` = "putting dirty dishes in the sink temporarily"; `git rebase` = "editing diary pages to be tidier"
- **Key Concepts:** `git log`, `git stash` (push/pop/list), `git reset` (soft/mixed/hard), `git diff`, `git rebase`, `git tag`
- **Quiz:** When to use `git stash`

### Module 11: Git Workflow
- **Level:** 🟣 Lanjutan
- **Analogy:** Git Flow = "restaurant kitchen" — main is the final menu, develop is the main kitchen, feature branches are prep stations
- **Key Concepts:** Git Flow (main/develop/feature/release/hotfix), GitHub Flow, daily workflow cheat sheet, team best practices
- **Quiz:** Difference between Git Flow and GitHub Flow

### Module 12: Penutup & Next Steps
- **Level:** 🟣 Lanjutan
- **Content:** Summary of all modules, challenge levels (beginner/intermediate/advanced), learning resources, motivational closing message
- **Analogy:** "Learning Git is like learning to ride a bicycle — you'll fall (merge conflicts), but the more you practice, the smoother it gets"
- **Quiz:** Best way to practice Git skills

---

## 10. UI/UX Specifications

### 10.1 Layout Architecture

```
┌──────────────────────────────────────────────────────┐
│ ┌──────────┐ ┌────────────────────────────────────┐  │
│ │          │ │ ┌──────────────────────────────┐   │  │
│ │ SIDEBAR  │ │ │        TOPBAR                │   │  │
│ │          │ │ │  ☰  Title          🌙/☀️     │   │  │
│ │  Logo    │ │ └──────────────────────────────┘   │  │
│ │  Nav     │ │                                    │  │
│ │  Items   │ │ ┌──────────────────────────────┐   │  │
│ │          │ │ │                              │   │  │
│ │          │ │ │     CONTENT AREA             │   │  │
│ │          │ │ │     (max-width: 860px)       │   │  │
│ │          │ │ │                              │   │  │
│ │          │ │ │                              │   │  │
│ │  Progress│ │ └──────────────────────────────┘   │  │
│ │  Bar     │ │ ┌──────────────────────────────┐   │  │
│ └──────────┘ │ │  ← Previous    Next →        │   │  │
│              │ └──────────────────────────────┘   │  │
│              └────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

### 10.2 Responsive Breakpoints

| Breakpoint | Sidebar | Content Padding | Behavior |
|---|---|---|---|
| **≤ 768px** (Mobile) | Hidden, slide-in overlay | 24px / 16px | Hamburger menu, stacked layout |
| **769px–1024px** (Tablet) | 260px fixed | 32px / 24px | Narrower sidebar |
| **≥ 1025px** (Desktop) | 300px fixed | 40px / 32px | Full sidebar always visible |

### 10.3 Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| Body text | Inter | 400 | 0.95rem |
| H1 (article) | Inter | 800 | 2rem |
| H2 | Inter | 700 | 1.4rem |
| H3 | Inter | 600 | 1.15rem |
| Code | JetBrains Mono | 400 | 0.85rem |
| Nav items | Inter | 450 | 0.88rem |

### 10.4 Color System

#### Dark Theme (Default)
| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0d1117` | Page background |
| `--bg-secondary` | `#161b22` | Sidebar, secondary surfaces |
| `--bg-tertiary` | `#1c2333` | Cards, code headers |
| `--text-primary` | `#e6edf3` | Main text |
| `--text-secondary` | `#8b949e` | Body text, descriptions |
| `--accent` | `#58a6ff` | Links, active states, accents |
| `--green` | `#3fb950` | Success, completion |
| `--orange` | `#d29922` | Warnings |
| `--red` | `#f85149` | Errors, wrong answers |
| `--purple` | `#bc8cff` | Advanced level |
| `--border` | `#30363d` | Borders, dividers |

#### Light Theme
| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#ffffff` | Page background |
| `--bg-secondary` | `#f6f8fa` | Sidebar, secondary surfaces |
| `--text-primary` | `#1f2328` | Main text |
| `--text-secondary` | `#656d76` | Body text |
| `--accent` | `#0969da` | Links, active states |

### 10.5 Component Specifications

#### Analogy Box
- Background: `accent-bg` (semi-transparent accent)
- Border: 1px solid accent at 20% opacity
- Corner radius: 12px
- Emoji icon (💡) floating above top-left edge
- Title in accent color, body in secondary text

#### Terminal Simulator
- Background: `#0d1117` (always dark)
- Header: 3 colored dots (red/yellow/green) + title
- Body: JetBrains Mono, color-coded lines:
  - Prompt (`$`): green
  - Commands: white
  - Output: gray
  - Success: green
  - Errors: red
  - Highlights: orange

#### Code Block
- Background: `bg-code`
- Border: 1px solid `border`
- Header: language label (left) + Copy button (right)
- Body: JetBrains Mono, 0.85rem, line-height 1.7
- Horizontal scroll on overflow

#### Quiz Container
- Card with border + background
- Header: 🧠 icon + "Quiz" title
- Question in bold
- 4 option cards (selectable, hover effect)
- Submit button (accent color)
- Explanation box (appears after submit, color-coded)

#### Complete Button
- Full-width, green-themed
- States: "Tandai Selesai ✓" (default) → "Selesai! ✓" (completed, solid green)
- Hover: lift effect with green shadow

---

## 11. Technical Architecture

### 11.1 Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Structure** | HTML5 | Semantic markup, no templating |
| **Styling** | CSS3 (Custom Properties) | Theme switching, responsive, no preprocessor |
| **Logic** | Vanilla JavaScript (ES6+) | Zero dependencies, instant load |
| **Fonts** | Google Fonts (Inter + JetBrains Mono) | Clean UI + readable code |
| **Persistence** | `localStorage` | Progress + theme preference |
| **Deployment** | GitHub Pages | Free, zero-config, fitting for a Git tutorial |

### 11.2 File Structure

```
LearnGithub/
├── index.html              # Single HTML page (shell)
├── css/
│   └── style.css           # All styles (~800 lines)
├── js/
│   ├── data.js             # Module content & quiz data (~1500 lines)
│   └── app.js              # App logic: routing, rendering, state (~400 lines)
├── PRD.md                  # This document
└── README.md               # Project overview + setup instructions
```

### 11.3 Architecture Pattern

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   data.js   │────▶│   app.js    │────▶│  index.html │
│  (Content)  │     │  (Logic)    │     │   (Shell)   │
└─────────────┘     └──────┬──────┘     └─────────────┘
                           │
                    ┌──────▼──────┐
                    │ localStorage│
                    │  (State)    │
                    └─────────────┘
```

**Data flow:**
1. `data.js` exports `MODULES` array — the single source of truth for content
2. `app.js` reads `MODULES`, manages state, renders content into `#contentArea`
3. `localStorage` stores `{ completedModules: [...], theme: 'dark'|'light', currentModule: 'id' }`
4. `index.html` provides the shell (sidebar, topbar, content area, nav footer)

### 11.4 JavaScript Module Responsibilities (`app.js`)

| Function | Responsibility |
|---|---|
| `init()` | Bootstrap app: load state, bind events, render initial view |
| `renderSidebar()` | Build nav items from `MODULES`, group by section |
| `renderContent(moduleId)` | Render article or welcome screen into `#contentArea` |
| `renderWelcome()` | Render hero section with feature cards |
| `renderQuiz(quizData)` | Render quiz component with interactivity |
| `navigateTo(moduleId)` | Update state, render content, scroll to top, update nav |
| `toggleComplete(moduleId)` | Toggle module completion in state + localStorage |
| `updateProgress()` | Calculate and render progress bar + percentage |
| `toggleTheme()` | Switch dark/light, save to localStorage |
| `toggleSidebar()` | Open/close sidebar (mobile) |
| `copyCode(button)` | Copy code block content to clipboard |

---

## 12. Data Model

### 12.1 Module Object (`data.js`)

```javascript
{
    id: string,           // Unique identifier (e.g., 'apa-itu-git')
    icon: string,         // Emoji icon (e.g., '📦')
    title: string,        // Display title (e.g., 'Apa itu Git & GitHub?')
    section: string,      // Section grouping ('Dasar' | 'Menengah' | 'Lanjutan')
    level: string|null,   // Difficulty ('pemula' | 'menengah' | 'lanjutan' | null)
    isWelcome: boolean,   // True for welcome screen only
    content: string,      // HTML string for article body
    quiz: {               // Optional quiz object
        question: string,
        options: string[],   // Array of 4 options
        correct: number,     // Index of correct answer (0-3)
        explanation: string  // Shown after answering
    }
}
```

### 12.2 Application State (`localStorage`)

```javascript
// Key: 'learnGithub'
{
    currentModule: string,        // Active module ID
    theme: 'dark' | 'light',     // Current theme
    completedModules: string[]    // Array of completed module IDs
}
```

---

## 13. Component Specifications

### 13.1 Welcome Screen (Hero)

```
┌─────────────────────────────────────────┐
│                                         │
│              🚀 (animated)              │
│                                         │
│     Belajar GitHub dari Nol             │
│     Sampai Mahir                        │  ← Gradient text
│                                         │
│     Panduan lengkap berbahasa           │
│     Indonesia dengan analogi            │  ← Subtitle
│     sederhana...                        │
│                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐│
│  │ 📦 Dasar │ │ 🔀 Menengah│ │ 🚀 Advance││  ← Cards
│  │ ...      │ │ ...      │ │ ...      ││
│  └──────────┘ └──────────┘ └──────────┘│
│                                         │
└─────────────────────────────────────────┘
```

### 13.2 Article View

```
┌─────────────────────────────────────────┐
│  🟢 Pemula • Modul 1                    │  ← Badge
│                                         │
│  Apa itu Git & GitHub?                  │  ← H1
│  Memahami konsep dasar dengan analogi   │  ← Subtitle
│  sehari-hari                            │
│  ─────────────────────────              │  ← Divider
│                                         │
│  ┌─ 💡 ──────────────────────────────┐  │
│  │ Analogi: Buku Diary...            │  │  ← Analogy box
│  │ Bayangkan kamu menulis...         │  │
│  └───────────────────────────────────┘  │
│                                         │
│  🔍 Git vs GitHub — Apa Bedanya?        │  ← H2
│  Banyak pemula yang bingung...          │  ← Paragraph
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ Git          │ GitHub            │    │  ← Table
│  │ Software...  │ Website...        │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─ 🖥️ Terminal ─────────────────────┐  │
│  │ ● ● ●  Terminal                   │  │  ← Terminal sim
│  │ $ git --version                   │  │
│  │ git version 2.43.0               │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌─ 🧠 Quiz ─────────────────────────┐  │
│  │ Apa perbedaan utama...            │  │  ← Quiz
│  │ ○ A. Git dan GitHub sama          │  │
│  │ ○ B. Git adalah software...       │  │
│  │ ○ C. GitHub lebih dulu...         │  │
│  │ ○ D. Git hanya untuk...           │  │
│  │ [Check Answer]                    │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │    ✓ Tandai Selesai               │  │  ← Complete btn
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### 13.3 Mobile Sidebar (Overlay)

```
┌─────────────────────────────────────────┐
│ ┌──────────────┐ ┌─────────────────────┐│
│ │ LearnGithub ✕│ │                     ││
│ │              │ │                     ││
│ │ DASAR        │ │    (dimmed overlay) ││
│ │ 📦 Apa itu.. │ │                     ││
│ │ ⚙️ Instalasi │ │                     ││
│ │ 📁 Repo      │ │                     ││
│ │              │ │                     ││
│ │ MENENGAH     │ │                     ││
│ │ 🌿 Branch    │ │                     ││
│ │ ...          │ │                     ││
│ │              │ │                     ││
│ │ ▓▓▓▓▓░░ 45% │ │                     ││
│ └──────────────┘ └─────────────────────┘│
└─────────────────────────────────────────┘
```

---

## 14. Accessibility

| Requirement | Implementation |
|---|---|
| Semantic HTML | `<main>`, `<aside>`, `<nav>`, `<header>`, `<article>` elements |
| ARIA labels | `aria-label` on icon-only buttons (menu, close, theme toggle) |
| Keyboard navigation | All interactive elements focusable via Tab |
| Focus indicators | Visible outline on `:focus-visible` |
| Color contrast | Minimum 4.5:1 for text (WCAG AA) in both themes |
| Reduced motion | Respect `prefers-reduced-motion` media query |
| Alt text | Emojis used decoratively, no critical info lost |
| Touch targets | Minimum 44×44px on mobile for all interactive elements |

---

## 15. Deployment Strategy

### Primary: GitHub Pages
1. Push code to a GitHub repository
2. Enable GitHub Pages in Settings → Pages → Source: `main` branch → `/ (root)`
3. Site live at: `https://<username>.github.io/LearnGithub/`

### Alternative: Any Static Host
- **Netlify:** Drag and drop the folder
- **Vercel:** Import repo, zero config
- **Cloudflare Pages:** Connect repo, deploy

### Local Development
```bash
# Option 1: VS Code Live Server extension
# Option 2: Python built-in server
python -m http.server 8000
# Option 3: Node.js
npx serve .
```

---

## 16. Success Metrics

| Metric | Target | Measurement |
|---|---|---|
| **Content completeness** | 12/12 modules with quizzes | Manual audit |
| **Analogy coverage** | ≥1 analogy per module | Content review |
| **Mobile usability** | No horizontal scroll, readable text | Device testing (320px+) |
| **Lighthouse scores** | Performance ≥95, Accessibility ≥95, Best Practices ≥95 | Lighthouse audit |
| **Progress persistence** | State survives page reload | Manual test |
| **Theme persistence** | Preference survives page reload | Manual test |
| **Page weight** | < 200KB total (excluding fonts) | DevTools network tab |
| **Quiz accuracy** | All quizzes have correct answer + explanation | Content review |

---

## 17. Future Roadmap

### v1.1 — Enhanced Interactivity
- [ ] Interactive terminal simulator (type commands, see simulated output)
- [ ] Drag-and-drop exercises (e.g., "arrange the Git workflow steps in order")
- [ ] Code challenges with auto-validation

### v1.2 — Personalization
- [ ] User accounts with cloud progress sync
- [ ] Personalized learning path based on skill assessment
- [ ] Bookmarking / notes per module

### v1.3 — Community
- [ ] Comment section per module (Disqus or GitHub Discussions)
- [ ] Share progress on social media
- [ ] Leaderboard / streak tracking

### v1.4 — Content Expansion
- [ ] Git cheat sheet (printable PDF)
- [ ] Video walkthroughs for complex topics
- [ ] English language toggle
- [ ] Additional modules: Git hooks, submodules, GitHub API, monorepos

### v2.0 — Platform Evolution
- [ ] PWA (Progressive Web App) with offline support
- [ ] Interactive sandbox (embedded VS Code / CodeSandbox)
- [ ] Certificate of completion (PDF generation)
- [ ] Instructor dashboard with analytics

---

## 18. Appendix

### A. Analogy Reference Table

| Module | Concept | Analogy |
|---|---|---|
| 1 | Git | Camera on your phone that snapshots every change |
| 1 | GitHub | Google Photos / iCloud where snapshots are stored |
| 1 | Git overall | Diary with a time machine |
| 2 | Installing Git | Installing a camera app on your phone |
| 2 | SSH Key | Building access card — tap once, door opens |
| 3 | Repository | Magic folder that remembers every change |
| 3 | Clone | Downloading a Google Drive folder with full history |
| 3 | .gitignore | List of things to hide before taking a photo |
| 4 | git add | Putting items into a shipping box |
| 4 | git commit | Sealing and labeling the box |
| 4 | git push | Shipping the package to its destination |
| 5 | Branch | Alternate timeline (Avengers: Endgame) |
| 6 | Pull Request | Submitting a proposal to your boss for approval |
| 7 | Fork | Photocopying a recipe book to add your own recipe |
| 8 | Merge Conflict | Two people editing the same PowerPoint slide |
| 9 | GitHub Actions | Robot assistant that runs tests automatically |
| 9 | Issues | Sticky notes on an office board |
| 10 | git stash | Putting dirty dishes in the sink temporarily |
| 10 | git rebase | Editing diary pages to make them tidier |
| 11 | Git Flow | Restaurant kitchen — main menu, kitchen, prep stations |

### B. Keyboard Shortcuts

| Key | Action |
|---|---|
| `←` (Arrow Left) | Navigate to previous module |
| `→` (Arrow Right) | Navigate to next module |
| `T` | Toggle theme |
| `M` | Toggle sidebar (mobile) |
| `Escape` | Close sidebar |

### C. Browser localStorage Keys

| Key | Type | Description |
|---|---|---|
| `learnGithub` | JSON string | Contains `currentModule`, `theme`, `completedModules` |

### D. Content Checklist per Module

- [ ] Has level badge with correct color
- [ ] Has at least 1 analogy box
- [ ] Has at least 1 code block or terminal simulation
- [ ] Has at least 1 diagram (for visual concepts)
- [ ] Has a quiz with 4 options, correct answer, and explanation
- [ ] Has a "Mark Complete" button
- [ ] Content reviewed for accuracy
- [ ] Bahasa Indonesia is natural and conversational

---

*End of PRD — LearnGithub v1.0*
