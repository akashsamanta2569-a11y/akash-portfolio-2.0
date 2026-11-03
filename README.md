# Akash Samanta — 3D Personal Developer Portfolio (2026 Edition)

An elegant, light-themed 3D personal developer portfolio engineered for **Akash Samanta** — B.Tech CSE (AI & ML) Student at Brainware University, Backend Developer, and Creative Problem Solver.

Designed with an editorial creative-studio aesthetic: warm off-white tones, soft lavender and muted violet accents, real interactive WebGL 3D sculptures, responsive typography, and verifiable leadership timelines.

---

## 🌟 Key Highlights & Design Vision

- **Palette**: Warm off-white (`#FAFAF8`), soft lavender (`#7C6EE6`, `#8F82EC`), pale violet tints, and deep charcoal typography for maximum contrast and legibility.
- **Interactive 3D Core**: Real WebGL 3D geometric sculptures rendered via **React Three Fiber** and **Three.js**. Features 3 interactive modes (*Orbital Gyroscope*, *Prismatic Crystal*, *Harmonic Rings*), mouse parallax tracking, wireframe toggles, and pause/play controls.
- **Zero Remote Dependencies**: Self-contained studio lighting eliminates remote HDR map download latencies and ensures 100% offline and online reliability.
- **Editorial Experience Timeline**: Verifiable milestones and student leadership records, including Google Student Ambassador (2026), GeeksforGeeks Campus Mantri (Rank #217 / 1,600+), and Kshitij 2027 Campus Ambassador.
- **Selected Project Gallery**: Interactive showcase featuring *MemoryVault AI*, *LandGuard AI* (SIH 2026 internal selection top recognition), *AadhaarGati* (UIDAI Data Hackathon 2026), and *TrustChain*. Includes an in-depth system architecture modal.
- **Cross-Campus Community Initiative**: Dedicated section detailing the volunteer-led initiative to connect students across West Bengal and India.
- **Accessibility & Motion**: Fully respects `prefers-reduced-motion`, includes mobile-optimized responsive drawers, semantic HTML5, and rich OpenGraph/Twitter card metadata.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI & Components**: [React 19](https://react.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Modern CSS Design System with CSS Custom Properties, Editorial Typography (`DM Sans`, `Manrope`, `Playfair Display`, `JetBrains Mono`), and Responsive Grid Layouts
- **Deployment**: Optimized for [Vercel](https://vercel.com/) with static page generation and dynamic client-side 3D loading (`ssr: false`)

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js `20.9.0` or higher
- npm `10.0.0` or higher

### Installation & Run

1. Open your terminal in this directory:
   ```bash
   cd akash-3d-portfolio
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📦 Building for Production

To test the production build locally:

```bash
npm run build
npm run start
```

Static pages and asset traces will be generated cleanly in the `.next` directory.

---

## ☁️ Vercel Deployment Guide

This project is configured out-of-the-box for seamless zero-configuration deployment to Vercel:

1. **Push to GitHub**:
   Commit and push your project to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete 2026 3D personal developer portfolio"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
   - Select and import your GitHub repository (`akash-3d-portfolio`).
   - If the Next.js project is located in a subfolder, set the **Root Directory** to `akash-3d-portfolio` (or the folder containing `package.json`).
   - Framework Preset: **Next.js** (automatically detected).
   - Build Command: `npm run build` (default).
   - Output Directory: `.next` (default).
   - No environment variables are required.

3. **Deploy**:
   - Click **Deploy**. Vercel will build the project and assign a live production URL (e.g. `https://akash-3d-portfolio.vercel.app`).

---

## 📁 Project Architecture

```
akash-3d-portfolio/
├── app/
│   ├── globals.css         # Complete light-theme design system & responsive layout rules
│   ├── layout.tsx          # Root layout with SEO metadata, OpenGraph tags, and Viewport
│   ├── page.tsx            # Main page assembling all modular portfolio sections
│   ├── robots.ts           # Native Next.js robots.txt handler
│   └── sitemap.ts          # Native Next.js sitemap generator
├── components/
│   ├── Navbar.tsx          # Floating header with live status pill and mobile drawer
│   ├── Hero.tsx            # Hero with editorial headline, dual CTAs, and 3D sculpture
│   ├── ThreeHero.tsx       # Dynamic client wrapper for 3D canvas with interactive controls
│   ├── Scene.tsx           # React Three Fiber 3D scene (3 geometry modes, studio lights)
│   ├── Philosophy.tsx      # Editorial engineering philosophy & core tenets
│   ├── About.tsx           # Academic background, core values, and verified highlights
│   ├── Experience.tsx      # Interactive vertical timeline (Google GSA, GfG Campus Mantri)
│   ├── Projects.tsx        # Project gallery (MemoryVault, LandGuard, AadhaarGati, TrustChain)
│   ├── Skills.tsx          # Categorized skills matrix (Languages, Backend, Frontend, AI/ML)
│   ├── Achievements.tsx    # Verifiable honors and hackathon recognition cards
│   ├── Community.tsx       # "Growing Together, Beyond Campus Boundaries" initiative
│   ├── Contact.tsx         # Minimalist contact with copyable email and quick message box
│   └── Footer.tsx          # Editorial footer with dynamic IST time and back-to-top
├── public/
│   └── favicon.svg         # SVG monogram favicon
├── next.config.ts          # Next.js 15 production configuration
├── package.json            # Dependencies & scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 🔒 Accuracy & Verification Notice

- **Ambassadorships**: Google Student Ambassador and GeeksforGeeks Campus Mantri roles are designated community and ambassador programs and do not claim direct corporate employment.
- **Hackathon Records**: Smart India Hackathon 2026 reflects university internal selection top recognition.
- **Community Initiative**: A genuine, free, volunteer-led cross-campus network connecting students across West Bengal and India without exaggerated membership claims.
- **Repository URLs**: All included GitHub links correspond directly to verified public repositories under `https://github.com/akashsamanta2569-a11y`.
