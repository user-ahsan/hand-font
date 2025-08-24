# Product Requirement Document (PRD) – v1.2

## Project Name
**HandFont – AI-Powered Handwritten Font Generator**

**Owner:** Ahsan Ali  
**Version:** 1.0
**Date:** August 2025

---

## 1. Goal

Allow users to generate custom handwritten fonts using AI, with a guided sentence-based handwriting capture system instead of photo uploads.

---

## 2. Core Value Proposition

- Anyone can create a personalized digital font in minutes.
- No scanner required — handwriting captured directly in the app.
- AI automates vectorization and font generation.
- Preview before export ensures quality.

---

## 3. Target Users

- Designers needing unique fonts
- Students and hobbyists digitizing handwriting
- Content creators for personal branding
- Businesses wanting corporate identity fonts

---

## 4. User Flow

```mermaid
flowchart TD
    A[User Enters App] --> B[System Introduces Process]
    B --> C[Show Pangram: 'The quick brown fox jumps over the lazy dog']
    C --> D[Display First Letter 'a']
    D --> E[Canvas Box for Drawing 'a']
    E --> F[User Draws Letter]
    F --> G[Click Next]
    G --> H[Display Next Element 'fox']
    H --> I[Separate Canvas Boxes for 'f', 'o', 'x']
    I --> J[User Draws Each Letter]
    J --> K{All Letters Covered?}
    K -->|No| L[Continue to Next Element]
    L --> I
    K -->|Yes| M[AI Maps Drawn Glyphs to Characters]
    M --> N[AI Vectorizes & Smooths Strokes]
    N --> O[Generate Preview in User's Handwriting]
    O --> P[User Reviews Preview]
    P --> Q{Approve Font?}
    Q -->|No| R[Redraw Specific Letters]
    R --> I
    Q -->|Yes| S[AI Generates Font Files: TTF, OTF, WOFF]
    S --> T[User Downloads/Exports Font]
    T --> U[Save Font to Account]
    
    style A fill:#e1f5fe
    style U fill:#c8e6c9
    style S fill:#fff3e0
    style O fill:#f3e5f5
```

**Detailed Steps:**
1. System introduces process (guided handwriting capture).
2. User is shown a pangram sentence: "The quick brown fox jumps over the lazy dog".
3. First element appears (e.g., letter 'a'). A canvas box below prompts the user to hand-draw 'a'.
4. User clicks 'Next'. Next element (e.g., word 'fox') appears. Beneath it, separate boxes for 'f', 'o', and 'x'. User draws each letter individually.
5. This continues until the whole sentence is covered, ensuring all letters are collected.
6. AI maps each drawn glyph to its typed reference (from pangram).
7. AI processes drawings: vectorizes strokes, aligns glyphs, and smooths curves.
8. Preview: system renders sample sentences in user's handwriting.
9. User either approves or redraws specific letters.
10. If approved, AI generates font files (TTF, OTF, WOFF).
11. User downloads/exports font or saves in account.

---

## 4.1. Paid User Flow

```mermaid
flowchart TD
    A[Paid User Logs In] --> B[Access Dashboard]
    B --> C[View Font Library]
    C --> D[Previously Created Fonts]
    D --> E[Font Management Options]
    E --> F{Action Choice}
    
    F -->|Create New Font| G[Start New Font Creation]
    F -->|Edit Existing Font| H[Select Font to Edit]
    F -->|Download Font| I[Choose Format & Download]
    F -->|Share Font| J[Generate Share Link]
    F -->|Delete Font| K[Confirm Deletion]
    
    G --> L[Follow Standard User Flow]
    H --> M[Load Font Data]
    M --> N[Edit Specific Letters]
    N --> O[Regenerate Font]
    O --> P[Update in Library]
    
    I --> Q[Select Export Format]
    Q --> R[Download Font Files]
    
    J --> S[Create Shareable Link]
    S --> T[Copy Link to Clipboard]
    
    K --> U[Remove from Library]
    U --> V[Update Dashboard]
    
    L --> W[Save to Font Library]
    P --> W
    R --> X[Track Download History]
    T --> Y[Track Share Analytics]
    V --> Z[Update Storage Quota]
    
    style A fill:#4caf50
    style B fill:#2196f3
    style C fill:#ff9800
    style D fill:#9c27b0
    style W fill:#4caf50
    style X fill:#ff9800
    style Y fill:#2196f3
    style Z fill:#f44336
```

**Paid User Features:**
- **Dashboard Access:** Centralized management interface
- **Font Library:** Store unlimited previously created fonts
- **Font Management:** Edit, delete, organize, and categorize fonts
- **Multiple Export Formats:** TTF, OTF, WOFF, SVG, and more
- **Download History:** Track all font downloads and usage
- **Share & Collaboration:** Generate shareable links for fonts
- **Storage Quota:** Manage font storage and organization
- **Bulk Operations:** Export multiple fonts simultaneously
- **Font Analytics:** View usage statistics and performance metrics

---

## 5. MVP Features

- Guided handwriting capture via pangram
- Canvas drawing for each letter
- AI mapping drawn glyphs → characters
- Vectorization and smoothing
- Preview renderer
- Font file export

---

## 6. Advanced Features (Future Phases)

- Custom capture sentences instead of fixed pangram
- Support for ligatures, numerals, symbols
- Handwriting style filters (calligraphy, brush, marker)
- Collaborative font creation with friends/teams
- Marketplace to sell/share fonts
- Plugins for Canva, Figma, Google Docs
- API for developers

---

## 7. Non-Goals

- OCR for handwriting recognition in full documents
- Multi-language handwriting training in MVP
- 3D pen/brush stroke simulation in MVP

---

## 8. Tech Stack

- **Frontend:** Next.js + Tailwind CSS (UI, canvas drawing, previews)
- **Backend:** Node.js + Express (APIs, font export requests)
- **Database:** PostgreSQL or MongoDB (user + font metadata)
- **AI Layer:** Python service (glyph vectorization + font creation)
- **Storage:** AWS S3 or Firebase (generated fonts)
- **Auth:** JWT / Firebase Auth
- **Payments:** Stripe, JazzCash, Easypaisa

---

## 9. Monetization

- **Freemium:** Free plan allows one font export
- **Subscription:** Pro plans for unlimited font exports
- **Marketplace:** Commission on font sales
- **API Licensing:** 3rd-party apps can generate fonts via API

---

## 10. Success Metrics

- Number of fonts generated per month
- Average approval rate after preview
- Conversion rate free → paid users
- Marketplace activity (sales, shares)

---

## 11. Roadmap

- **Phase 1:** MVP: guided pangram flow, font generation, single export
- **Phase 2:** Add ligatures, numerals, marketplace

---
