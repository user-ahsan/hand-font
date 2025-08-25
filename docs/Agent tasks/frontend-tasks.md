# Frontend Development Tasks - HandFont App

## 📋 **LATEST VERSION INFORMATION (Updated: 2025)**

**Key Technology Updates:**
- **Next.js**: 15.4.0-canary.74 (Latest canary)
- **React**: 19.0.0 (Latest major)
- **TypeScript**: 5.5.0 (Latest stable)
- **Tailwind CSS**: 3.4.0 (Latest stable)
- **Zustand**: 4.5.0 (Latest stable)
- **Framer Motion**: 11.0.0 (Latest major)
- **Node.js**: 22.0.0 (Latest LTS)

## 🎯 **AI AGENT INSTRUCTIONS - READ CAREFULLY**

**CRITICAL RULES TO FOLLOW:**
1. **Complete tasks in EXACT order** - do not skip or reorder tasks
2. **Mark checkboxes as done** after completing each task/subtask
3. **Follow production development workflow** - build components first, then pages, then integration
4. **Use specified UI libraries** - do not create components from scratch unless absolutely necessary
5. **Test each component** before moving to next task
6. **Follow the pangram flow**: "The quick brown fox jumps over the lazy dog" + numbers 1-5 + symbols (+, -, *, /)
7. **Implement mobile-first responsive design**
8. **Use TypeScript strictly** - no `any` types allowed
9. **ALL WORK MUST BE DONE IN THE ROOT DIRECTORY** - this is a monorepo setup

---

## 🏗️ **PROJECT STRUCTURE & SETUP**

### **Root Directory Structure (hand-font/)**
```
hand-font/
├── package.json (root package.json with workspaces)
├── frontend/ (Next.js frontend)
├── backend/ (Node.js backend)
├── docs/ (documentation)
└── README.md
```

### **Root Package.json Setup**
```json
{
  "name": "hand-font",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "frontend",
    "backend"
  ],
  "scripts": {
    "dev": "concurrently \"npm run dev:frontend\" \"npm run dev:backend\"",
    "dev:frontend": "cd frontend && npm run dev",
    "dev:backend": "cd backend && npm run dev",
    "build": "npm run build:frontend && npm run build:backend",
    "build:frontend": "cd frontend && npm run build",
    "build:backend": "cd backend && npm run build",
    "install:all": "npm install && cd frontend && npm install && cd ../backend && npm install"
  },
  "devDependencies": {
    "concurrently": "^8.2.2"
  }
}
```

### **Frontend Directory Structure (frontend/)**
```
frontend/
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── public/
├── src/
│   ├── app/
│   │   ├── (guest)/
│   │   │   ├── page.tsx (Landing)
│   │   │   ├── capture/
│   │   │   │   └── page.tsx (Capture Wizard)
│   │   │   ├── preview/
│   │   │   │   └── page.tsx (Preview)
│   │   │   └── export/
│   │   │       └── page.tsx (Export)
│   │   ├── (pro)/
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx (Dashboard)
│   │   │   └── fonts/
│   │   │       └── [id]/
│   │   │           └── page.tsx (Font Detail)
│   │   ├── layout.tsx (Root Layout)
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/ (shadcn/ui components)
│   │   ├── canvas/ (Drawing components)
│   │   ├── layout/ (Layout components)
│   │   ├── forms/ (Form components)
│   │   └── shared/ (Shared components)
│   ├── hooks/ (Custom hooks)
│   ├── lib/ (Utilities and configs)
│   ├── stores/ (Zustand stores)
│   ├── types/ (TypeScript types)
│   └── utils/ (Helper functions)
```

### **Backend Directory Structure (backend/)**
```
backend/
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts (Server entry)
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── utils/
```

---

## 📚 **RESOURCES & DEPENDENCIES**

### **Root Dependencies (hand-font/package.json)**
```json
{
  "devDependencies": {
    "concurrently": "^8.2.2"
  }
}
```

### **Frontend Dependencies (frontend/package.json)**
```json
{
  "dependencies": {
    "next": "15.4.0-canary.74",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.5.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "@radix-ui/react-slot": "^1.0.0",
    "@radix-ui/react-toast": "^1.1.0",
    "@radix-ui/react-slider": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "zustand": "^4.5.0",
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.51.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "15.4.0-canary.74",
    "prettier": "^3.3.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

### **Backend Dependencies (backend/package.json)**
```json
{
  "dependencies": {
    "express": "^5.0.0",
    "cors": "^2.8.5",
    "helmet": "^8.0.0",
    "morgan": "^1.10.0",
    "dotenv": "^16.3.0",
    "prisma": "^5.10.0",
    "@prisma/client": "^5.10.0",
    "clerk": "^0.0.0"
  },
  "devDependencies": {
    "@types/express": "^5.0.0",
    "@types/cors": "^2.8.0",
    "@types/morgan": "^1.9.0",
    "@types/node": "^22.0.0",
    "typescript": "^5.5.0",
    "ts-node": "^10.9.0",
    "nodemon": "^3.1.0"
  }
}
```

---

## 🚀 **PHASE 1: PROJECT SETUP & FOUNDATION**

### **Task 1: Root Project Setup**
- [ ] 1.1 Navigate to root directory: `cd hand-font/`
- [ ] 1.2 Create root package.json with workspaces and scripts
- [ ] 1.3 Install concurrently: `npm install concurrently --save-dev`
- [ ] 1.4 Test root scripts work: `npm run install:all`

### **Task 2: Frontend Project Setup**
- [ ] 2.1 Navigate to frontend directory: `cd frontend/`
- [ ] 2.2 Initialize Next.js 15: `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes`
- [ ] 2.3 Install additional dependencies: `npm install @radix-ui/react-slot@^1.0.0 @radix-ui/react-toast@^1.1.0 @radix-ui/react-slider@^1.1.0 @radix-ui/react-tabs@^1.1.0 class-variance-authority@^0.7.0 clsx@^2.1.0 tailwind-merge@^2.2.0 zustand@^4.5.0 framer-motion@^11.0.0 react-hook-form@^7.51.0 lucide-react@^0.400.0`
- [ ] 2.4 Install dev dependencies: `npm install -D prettier@^3.3.0 prettier-plugin-tailwindcss@^0.5.0`
- [ ] 2.5 Create frontend directory structure as specified above
- [ ] 2.6 Configure TypeScript (strict mode)
- [ ] 2.7 Configure Tailwind CSS with custom theme
- [ ] 2.8 Set up ESLint and Prettier configs

### **Task 3: Backend Project Setup**
- [ ] 3.1 Navigate to backend directory: `cd backend/`
- [ ] 3.2 Initialize package.json: `npm init -y`
- [ ] 3.3 Install dependencies: `npm install express@^5.0.0 cors@^2.8.5 helmet@^8.0.0 morgan@^1.10.0 dotenv@^16.3.0 prisma@^5.10.0 @prisma/client@^5.10.0 clerk`
- [ ] 3.4 Install dev dependencies: `npm install -D @types/express@^5.0.0 @types/cors@^2.8.0 @types/morgan@^1.9.0 @types/node@^22.0.0 typescript@^5.5.0 ts-node@^10.9.0 nodemon@^3.1.0`
- [ ] 3.5 Create backend directory structure as specified above
- [ ] 3.6 Configure TypeScript
- [ ] 3.7 Set up nodemon for development

### **Task 4: shadcn/ui Setup**
- [ ] 4.1 Navigate to frontend directory: `cd frontend/`
- [ ] 4.2 Initialize shadcn/ui: `npx shadcn@latest init`
- [ ] 4.3 Configure shadcn/ui with your preferences
- [ ] 4.4 Install required components: `npx shadcn@latest add button toast slider tabs`

---

## 🎨 **PHASE 2: CORE COMPONENTS DEVELOPMENT**

### **Task 5: Basic UI Components (frontend/src/components/ui/)**
- [ ] 5.1 Create PrimaryButton component using shadcn/ui Button
- [ ] 5.2 Create SecondaryButton component variant
- [ ] 5.3 Create Toast component using shadcn/ui Toast
- [ ] 5.4 Create StepNav component with progress indicators (●○○ style)
- [ ] 5.5 Create GlyphPrompt component for letter display
- [ ] 5.6 Create basic layout components (Container, Grid)

### **Task 6: Canvas Drawing Components (frontend/src/components/canvas/)**
- [ ] 6.1 Create DrawBox component with HTML5 Canvas
- [ ] 6.2 Implement pen/eraser toggle functionality
- [ ] 6.3 Add undo/redo functionality with keyboard shortcuts
- [ ] 6.4 Implement clear canvas functionality
- [ ] 6.5 Add basic smoothing algorithm (Ramer-Douglas-Peucker)
- [ ] 6.6 Create light guides (baseline and x-height) with toggle
- [ ] 6.7 Implement point recording with timestamps
- [ ] 6.8 Add pen width selection (small/medium/large)

---

## 🎯 **PHASE 3: SPECIALIZED DRAWING COMPONENTS**

### **Dynamic Drawing System Overview**
**CRITICAL REQUIREMENT:** All drawing components must be **dynamically resizable and dynamically allocated** based on content, NOT fixed to specific numbers.

**Examples:**
- **FOX step**: 3 letters = 3 dynamically sized boxes
- **JUMP step**: 4 letters = 4 dynamically sized boxes  
- **Pangram**: Variable sentence length = adaptive canvas layout
- **Numbers**: 1-5 = 5 dynamic boxes, 1-10 = 10 dynamic boxes
- **Symbols**: Variable symbol set = adaptive layout

**Key Features:**
- Boxes automatically resize based on letter complexity
- Layout adapts to any number of input characters
- Responsive design that works on all screen sizes
- Auto-sizing algorithms for optimal user experience

### **Task 7: Dynamic Drawing Component (frontend/src/components/canvas/)**
- [ ] 7.1 Create DynamicDrawRow component for variable letter counts
- [ ] 7.2 Implement dynamically allocated DrawBox components based on letter count
- [ ] 7.3 Add individual save/clear for each letter dynamically
- [ ] 7.4 Implement responsive layout that adapts to any number of letters
- [ ] 7.5 Add validation for dynamic step completion
- [ ] 7.6 Make boxes resizable and responsive to content
- [ ] 7.7 Implement auto-sizing based on letter complexity

### **Task 8: Dynamic Pangram Drawing Component (frontend/src/components/canvas/)**
- [ ] 8.1 Create DynamicSentenceDraw component for variable sentence lengths
- [ ] 8.2 Implement dynamically allocated canvas areas based on sentence structure
- [ ] 8.3 Add flexible sentence display that adapts to any text input
- [ ] 8.4 Implement dynamic character-by-character capture system
- [ ] 8.5 Add progress tracking for dynamic sentence completion
- [ ] 8.6 Create adaptive character mapping system
- [ ] 8.7 Implement auto-layout for different sentence lengths
- [ ] 8.8 Make canvas areas resizable based on character complexity

### **Task 9: Dynamic Numerals & Symbols Components (frontend/src/components/canvas/)**
- [ ] 9.1 Create DynamicNumberCapture component for variable number ranges
- [ ] 9.2 Create DynamicSymbolCapture component for variable symbol sets
- [ ] 9.3 Implement guided capture for any number/symbol dynamically
- [ ] 9.4 Add validation and progress tracking for dynamic sets
- [ ] 9.5 Create AI pattern generation placeholder
- [ ] 9.6 Implement auto-sizing based on number/symbol complexity
- [ ] 9.7 Make capture areas resizable and responsive
- [ ] 9.8 Add dynamic layout adaptation for different input sets

---

## 📱 **PHASE 4: PAGE COMPONENTS & LAYOUT**

### **Task 10: App Shell & Navigation (frontend/src/components/layout/)**
- [ ] 10.1 Create AppShell component with header/footer
- [ ] 10.2 Implement responsive navigation
- [ ] 10.3 Add logo and branding elements
- [ ] 10.4 Create mobile menu functionality
- [ ] 10.5 Implement breadcrumb navigation

### **Task 11: Landing Page (frontend/src/app/(guest)/page.tsx)**
- [ ] 11.1 Create landing page component
- [ ] 11.2 Add concise introduction text
- [ ] 11.3 Implement Start button with proper routing
- [ ] 11.4 Add responsive design for mobile/desktop
- [ ] 11.5 Implement smooth transitions and animations

### **Task 12: Capture Wizard Page (frontend/src/app/(guest)/capture/page.tsx)**
- [ ] 12.1 Create capture wizard page structure
- [ ] 12.2 Implement tab-based navigation (Letters → FOX → Pangram)
- [ ] 12.3 Add step validation and progression
- [ ] 12.4 Implement responsive layout (mobile: stack, desktop: 2-column)
- [ ] 12.5 Add progress indicators and step navigation

---

## 🔧 **PHASE 5: PREVIEW & EXPORT FUNCTIONALITY**

### **Task 13: Preview Panel Component (frontend/src/components/canvas/)**
- [ ] 13.1 Create PreviewPanel component
- [ ] 13.2 Implement textarea for custom text input
- [ ] 13.3 Add live preview rendering with captured letters
- [ ] 13.4 Create spacing controls (font size, letter spacing, line height)
- [ ] 13.5 Implement slider components for controls
- [ ] 13.6 Add real-time preview updates

### **Task 14: Preview Page (frontend/src/app/(guest)/preview/page.tsx)**
- [ ] 14.1 Create preview page component
- [ ] 14.2 Integrate PreviewPanel component
- [ ] 14.3 Add Generate button functionality
- [ ] 14.4 Implement API call to backend
- [ ] 14.5 Add loading states and error handling
- [ ] 14.6 Implement success/failure routing

### **Task 15: Export Page (frontend/src/app/(guest)/export/page.tsx)**
- [ ] 15.1 Create export page component
- [ ] 15.2 Add Download TTF button
- [ ] 15.3 Implement file download functionality
- [ ] 15.4 Add Retry button with routing back to capture
- [ ] 15.5 Implement success states and feedback

---

## 🎯 **PHASE 6: STATE MANAGEMENT & INTEGRATION**

### **Task 16: Zustand Store Implementation (frontend/src/stores/)**
- [ ] 16.1 Create font capture store
- [ ] 16.2 Implement letter storage and management
- [ ] 16.3 Add FOX step state management
- [ ] 16.4 Implement pangram progress tracking
- [ ] 16.5 Add numerals and symbols state
- [ ] 16.6 Implement localStorage persistence
- [ ] 16.7 Add session management and reset functionality

### **Task 17: API Integration (frontend/src/lib/api/)**
- [ ] 17.1 Create API service functions
- [ ] 17.2 Implement font generation API calls
- [ ] 17.3 Add error handling and retry logic
- [ ] 17.4 Implement loading states
- [ ] 17.5 Add success/failure notifications

### **Task 18: Data Persistence (frontend/src/lib/storage/)**
- [ ] 18.1 Implement localStorage persistence
- [ ] 18.2 Add autosave functionality
- [ ] 18.3 Create session management
- [ ] 18.4 Implement reset session functionality
- [ ] 18.5 Add storage validation and error handling

---

## 📱 **PHASE 7: RESPONSIVE DESIGN & MOBILE OPTIMIZATION**

### **Task 19: Mobile-First Responsiveness (frontend/src/app/globals.css)**
- [ ] 19.1 Implement mobile-first grid system
- [ ] 19.2 Add responsive breakpoints (mobile, tablet, desktop)
- [ ] 19.3 Optimize touch interactions for mobile
- [ ] 19.4 Implement mobile-specific navigation
- [ ] 19.5 Add mobile gesture support

### **Task 20: Touch & Pointer Optimization (frontend/src/components/canvas/)**
- [ ] 20.1 Optimize canvas for touch devices
- [ ] 20.2 Implement touch-friendly controls
- [ ] 20.3 Add touch gesture support
- [ ] 20.4 Optimize button sizes for mobile
- [ ] 20.5 Implement touch feedback

---

## ♿ **PHASE 8: ACCESSIBILITY & TESTING**

### **Task 21: Accessibility Implementation**
- [ ] 21.1 Add ARIA labels to all interactive elements
- [ ] 21.2 Implement keyboard navigation
- [ ] 21.3 Add focus management and visible focus rings
- [ ] 21.4 Implement screen reader support
- [ ] 21.5 Add color contrast validation
- [ ] 21.6 Implement reduced motion support

### **Task 22: Error Handling & Validation**
- [ ] 22.1 Add empty canvas validation
- [ ] 22.2 Implement error states for failed operations
- [ ] 22.3 Add localStorage full error handling
- [ ] 22.4 Create user-friendly error messages
- [ ] 22.5 Implement retry mechanisms

### **Task 23: Testing & Quality Assurance**
- [ ] 23.1 Write unit tests for core components
- [ ] 23.2 Test drawing functionality on desktop and mobile
- [ ] 23.3 Test state persistence and session management
- [ ] 23.4 Test responsive design across devices
- [ ] 23.5 Test accessibility features
- [ ] 23.6 Perform cross-browser testing

---

## 🚀 **PHASE 9: FINAL INTEGRATION & POLISH**

### **Task 24: Performance Optimization**
- [ ] 24.1 Optimize canvas rendering performance
- [ ] 24.2 Implement lazy loading for components
- [ ] 24.3 Add loading states and skeleton screens
- [ ] 24.4 Optimize bundle size
- [ ] 24.5 Implement code splitting

### **Task 25: Final Testing & Bug Fixes**
- [ ] 25.1 End-to-end testing of complete user flow
- [ ] 25.2 Test all user scenarios and edge cases
- [ ] 25.3 Fix any identified bugs
- [ ] 25.4 Performance testing on various devices
- [ ] 25.5 Accessibility audit and fixes

### **Task 26: Documentation & Deployment Prep**
- [ ] 26.1 Create component documentation
- [ ] 26.2 Document API integration points
- [ ] 26.3 Create deployment checklist
- [ ] 26.4 Prepare production build
- [ ] 26.5 Final code review and cleanup

---

## ✅ **COMPLETION CHECKLIST**

**Frontend Development Status:**
- [ ] **PHASE 1: Project Setup** - COMPLETED
- [ ] **PHASE 2: Core Components** - COMPLETED  
- [ ] **PHASE 3: Specialized Drawing** - COMPLETED
- [ ] **PHASE 4: Page Components** - COMPLETED
- [ ] **PHASE 5: Preview & Export** - COMPLETED
- [ ] **PHASE 6: State Management** - COMPLETED
- [ ] **PHASE 7: Responsive Design** - COMPLETED
- [ ] **PHASE 8: Accessibility** - COMPLETED
- [ ] **PHASE 9: Final Integration** - COMPLETED

**Overall Frontend Status:**
- [ ] **FRONTEND DEVELOPMENT COMPLETE**

---

## 🚀 **STARTING THE DEVELOPMENT SERVER**

### **From Root Directory (hand-font/)**
```bash
# Install all dependencies first
npm run install:all

# Start both frontend and backend simultaneously
npm run dev

# This will start:
# - Frontend: http://localhost:3000
# - Backend: http://localhost:5000
```

### **Individual Server Start**
```bash
# Frontend only
npm run dev:frontend

# Backend only  
npm run dev:backend
```

---

## 📝 **CRITICAL NOTES FOR AI AGENTS**

1. **ALWAYS work from the root directory** - this is a monorepo setup
2. **Follow the exact order** - each phase builds upon the previous one
3. **Test thoroughly** before marking tasks complete
4. **Use shadcn/ui components** whenever possible - don't reinvent the wheel
5. **Implement the complete pangram flow** including numbers 1-5 and symbols
6. **Focus on mobile-first design** - test on mobile devices
7. **Maintain TypeScript strict mode** - no `any` types
8. **Update checkboxes** after completing each task
9. **Document any deviations** from the original plan
10. **Ensure npm run dev starts both servers** from root directory

### **🚨 CRITICAL DYNAMIC REQUIREMENTS**
11. **ALL drawing components MUST be dynamically resizable** - NOT fixed sizes
12. **Box allocation MUST be dynamic** - adapt to any number of letters/characters
13. **Layout MUST be responsive** - work with 3 letters (FOX) or 4 letters (JUMP) or any count
14. **Auto-sizing algorithms** - boxes should resize based on content complexity
15. **NO hardcoded box counts** - everything must be flexible and adaptive

**Remember:** This is a production application - quality and testing are paramount!

**File Structure Must Be Exact:** Follow the directory structure precisely as specified above. All components, pages, and utilities must be placed in their designated folders.

---

## 🛠️ **COMPLETE TECHNOLOGY STACK SUMMARY**

### **Frontend Technologies (Latest Versions)**
- **Framework**: Next.js 15.4.0-canary.74 + React 19.0.0
- **Styling**: Tailwind CSS 3.4.0 + PostCSS 8.4.0
- **State Management**: Zustand 4.5.0 + React Hook Form 7.51.0
- **UI Components**: shadcn/ui + Radix UI (Latest)
- **Animation**: Framer Motion 11.0.0
- **Icons**: Lucide React 0.400.0
- **Utilities**: clsx 2.1.0, tailwind-merge 2.2.0, class-variance-authority 0.7.0

### **Development Tools**
- **Language**: TypeScript 5.5.0 (Strict mode)
- **Linting**: ESLint 9.0.0 + Prettier 3.3.0
- **Package Manager**: npm 10.8.0 (Workspaces)
- **Build Tool**: Next.js built-in (Turbopack ready)

### **Key Features**
- **Mobile-first responsive design**
- **Dynamic drawing components**
- **Canvas-based font capture**
- **Real-time preview system**
- **Accessibility compliant**
- **PWA ready**
