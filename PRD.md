# PRD — Landing Page Pendidikan Kepelatihan Olahraga FKIP Universitas Tadulako

## 1. Project Overview

Build a modern, premium, responsive landing page for **Program Studi Pendidikan Kepelatihan Olahraga (PKO), FKIP Universitas Tadulako**.

The website is **frontend-only**. Do not implement backend services, APIs, databases, authentication, CMS, admin dashboards, or online registration systems.

The main goal is to create a strong digital identity for the study program and communicate its academic, practical, athletic, research, achievement, and career-oriented value.

### Core Concept

**BELAJAR → BERLATIH → BERPRESTASI → BERKARIER**

The website should combine:

- Sports identity

- Academic credibility

- Modern editorial design

- Strong visual storytelling

- Smooth scroll-driven interactions

- Clear admission call-to-action

The design must feel like a **modern sports education institution**, not a generic university template.

---

## 2. Technology Stack

Use:

- Angular

- TypeScript

- Tailwind CSS

- Semantic HTML5

- Modern CSS

- Native CSS Scroll-Driven Animations where browser support is sufficient

- Minimal JavaScript-based animation only when necessary

Avoid unnecessary third-party dependencies.

Before implementing anything, inspect the existing Angular project and preserve its current project structure, Angular version, build system, and configuration whenever possible.

Do not replace the existing setup unless there is a strong technical reason.

---

## 3. Target Users

The primary audiences are:

1. Prospective students

2. Parents of prospective students

3. Current students

4. Alumni

5. Lecturers and academic visitors

6. Sports organizations and partners

7. General visitors interested in PKO

The design should particularly appeal to prospective students aged approximately 17–25 while maintaining academic credibility.

---

# 4. Website Navigation

Use an Indonesian navigation menu.

### Main Navigation

- Beranda

- Profil

- Akademik

- Dosen

- Prestasi

- Riset

- Galeri

- Penerimaan Mahasiswa

The navbar should be:

- Sticky

- Transparent/overlay on the hero section when appropriate

- Become visually solid after scrolling

- Responsive

- Equipped with a mobile hamburger menu

- Smooth-scroll enabled for homepage sections

### Navigation Behavior

Desktop:

\`Logo | Beranda | Profil | Akademik | Dosen | Prestasi | Riset | Galeri | [Penerimaan Mahasiswa]\`

Mobile:

\`Logo | Hamburger\`

The **Penerimaan Mahasiswa** item should be visually emphasized as the primary CTA.

---

# 5. Homepage Structure

Build the homepage in this order:

1. Navbar

2. Hero

3. Program Statistics

4. About PKO

5. Why Choose PKO

6. Academic Experience

7. Lecturers

8. Student Achievements

9. Facilities

10. Research & Community Service

11. Career Opportunities

13. Gallery

14. Admission CTA

15. Footer

Every section should have a clear visual hierarchy and should not look like a collection of unrelated cards.

---

# 6. Hero Section

## Purpose

Immediately communicate what PKO is and create a strong emotional connection with prospective students.

### Visible Content

Eyebrow:

**PENDIDIKAN KEPELATIHAN OLAHRAGA**

Main headline:

**BELAJAR. BERLATIH. BERPRESTASI.**

Supporting text:

**Mempersiapkan generasi profesional yang memiliki kompetensi dalam kepelatihan, ilmu keolahragaan, pengembangan atlet, dan dunia olahraga.**

Primary CTA:

**Jelajahi Program Studi**

Secondary CTA:

**Informasi Penerimaan**

Optional small supporting text:

**FKIP Universitas Tadulako**

### Visual Direction

Use high-quality sports imagery such as:

- Athletes training

- Students practicing

- Coaches giving instructions

- Sports field

- Athletic movement

- Team training

- Competition environment

Prefer large editorial imagery rather than small card-based images.

### Hero Animation

Implement scroll-driven animation:

- Hero image parallax

- Image scale on scroll

- Headline movement/reveal

- Supporting text reveal

- CTA fade/slide

- Background movement

The animation should feel smooth and premium, not distracting.

---

# 7. Program Statistics

Create a visually strong statistics section.

Possible statistics:

- Akreditasi

- Dosen

- Mahasiswa

- Prestasi

- Tahun Berdiri

- Kegiatan Akademik

Use placeholder values where official data is not available.

**Do not fabricate official statistics.**

Example presentation:

**01**

Dosen

**02**

Laboratorium/Fasilitas

**XX**

Prestasi

**20XX**

Tahun Berdiri

The implementation should make the data easy to replace later using TypeScript data files.

---

# 8. About PKO

## Section Heading

**Membentuk Generasi Profesional di Bidang Olahraga**

Content should explain:

- What Pendidikan Kepelatihan Olahraga is

- The role of the study program

- The academic and practical learning approach

- The importance of sports science

- Athlete development

- Coaching competencies

- Professional opportunities

Use a combination of:

- Large typography

- Editorial image

- Short paragraphs

- Highlighted statements

- Supporting statistics

Avoid creating a large wall of text.

### Suggested Supporting Statement

**Dari teori ke lapangan, dari latihan menuju prestasi.**

---

# 9. Why Choose PKO

## Section Heading

**Mengapa Memilih PKO?**

Create visually distinctive feature blocks.

### Feature 01

**Pembelajaran Berbasis Praktik**

Belajar melalui kombinasi teori, praktik lapangan, latihan, dan pengalaman langsung dalam dunia olahraga.

### Feature 02

**Ilmu Keolahragaan**

Memahami prinsip latihan, kondisi fisik, biomekanika, psikologi olahraga, dan aspek pendukung performa atlet.

### Feature 03

**Berorientasi Prestasi**

Mendorong mahasiswa untuk mengembangkan kompetensi dan pengalaman melalui kegiatan serta kompetisi olahraga.

### Feature 04

**Dosen Kompeten**

Belajar bersama tenaga pendidik yang memiliki kompetensi dan pengalaman dalam bidang olahraga.

### Feature 05

**Fasilitas Olahraga**

Mendukung proses pembelajaran dengan fasilitas dan sarana olahraga yang relevan.

### Feature 06

**Prospek Karier**

Mempersiapkan lulusan untuk berkarier di bidang kepelatihan, pendidikan, pengembangan olahraga, manajemen olahraga, dan bidang terkait.

---

# 10. Academic Experience

## Section Heading

**Perjalanan Akademik Mahasiswa PKO**

Present the academic journey as a visual timeline or horizontal scroll section.

Core journey:

**BELAJAR → PRAKTIK → MELATIH → MENGEVALUASI → MENINGKATKAN → BERPRESTASI**

Potential academic areas:

- Kepelatihan Olahraga

- Metodologi Latihan

- Ilmu Keolahragaan

- Pengembangan Atlet

- Kondisi Fisik

- Psikologi Olahraga

- Manajemen Olahraga

- Pendidikan Olahraga

Each item can include:

- Number

- Title

- Short description

- Supporting image/icon

On mobile, transform the horizontal timeline into a vertical timeline.

---

# 11. Lecturer Section

## Section Heading

**Belajar Bersama Para Pengajar dan Praktisi Olahraga**

Create lecturer profile cards.

Each lecturer object should support:

- Photo

- Name

- Academic degree

- Academic position

- Area of expertise

- Google Scholar URL

- ORCID URL

- SINTA URL

Example placeholder:

**Dr. Nama Dosen, M.Kes.**

**Bidang Keahlian:**

Kepelatihan Olahraga

Do not invent real lecturer names, academic positions, or research profiles.

Use placeholder data until official information is available.

---

# 12. Student Achievements

## Section Heading

**Dilatih untuk Bertanding. Dibentuk untuk Berprestasi.**

This should be one of the strongest visual sections.

Show achievement items using:

- Large images

- Competition labels

- Achievement title

- Athlete/student name

- Year

- Competition level

Filters:

- Semua

- Regional

- Nasional

- Internasional

Use static TypeScript data for the initial implementation.

### Example

**Nasional**

**Juara 1 Kejuaraan Nasional**

Nama Mahasiswa

2026

Do not fabricate real achievements. Use placeholder content where official information is unavailable.

---

# 13. Facilities

## Section Heading

**Ruang untuk Belajar. Lapangan untuk Berkembang.**

Show facilities through an editorial image grid rather than repetitive cards.

Potential categories:

- Lapangan olahraga

- Fasilitas latihan

- Ruang kelas

- Laboratorium

- Fitness center

- Peralatan olahraga

Each facility can contain:

- Image

- Name

- Short description

Use large and varied image sizes to create an editorial layout.

---

# 14. Research & Community Service

## Section Heading

**Riset untuk Performa. Pengabdian untuk Masyarakat.**

Create three major areas:

### Penelitian

Highlight research activities related to:

- Kepelatihan

- Performa atlet

- Ilmu olahraga

- Teknologi olahraga

- Pendidikan olahraga

### Publikasi

Show examples of:

- Journal publications

- Conference publications

- Research outputs

### Pengabdian kepada Masyarakat

Show activities involving:

- Community sports development

- Athlete development

- Coaching education

- Sports education

- Public health and physical activity programs

Use placeholder content if official research data is unavailable.

---

# 15. Career Opportunities

## Section Heading

**Lulusan PKO, Siap Berkontribusi di Dunia Olahraga**

Use a visual career pathway.

Potential career paths:

- Pelatih Olahraga

- Instruktur Olahraga

- Pendidik Olahraga

- Profesional Pengembangan Olahraga

- Manajer Olahraga

- Peneliti

- Wirausaha Bidang Olahraga

Use an interactive or scroll-driven visual pathway.

Suggested structure:

**LULUSAN PKO**

↓

**KOMPETENSI**

↓

**PENGALAMAN**

↓

**PROFESI**

Avoid making unsupported claims about employment rates or graduate outcomes.

---

# 16. Gallery

## Section Heading

**Momen di Balik Perjalanan PKO**

Gallery categories:

- Akademik

- Latihan

- Pertandingan

- Kegiatan Mahasiswa

- Event

- Pengabdian Masyarakat

Use an asymmetric editorial gallery.

Optional interaction:

- Image hover

- Lightbox

- Category filtering

- Smooth image reveal

Images should load lazily.

---

# 17. Admission CTA

## Section Heading

**Siap Memulai Perjalanan di Dunia Kepelatihan Olahraga?**

Supporting text:

**Temukan pengalaman belajar, berlatih, dan berkembang bersama Program Studi Pendidikan Kepelatihan Olahraga FKIP Universitas Tadulako.**

Primary CTA:

**Informasi Penerimaan**

Secondary CTA:

**Hubungi Program Studi**

This should be one of the strongest conversion sections on the page.

---

# 18. Footer

Footer should contain:

### Identity

**Pendidikan Kepelatihan Olahraga**

**FKIP Universitas Tadulako**

### Navigation

- Beranda

- Profil

- Akademik

- Dosen

- Prestasi

- Riset

- Galeri

### Contact

Use placeholder data if official information is not available:

- Alamat

- Email

- Telepon

- Website

### Social Media

Support:

- Instagram

- Facebook

- YouTube

- TikTok

Do not invent social media URLs.

### Copyright

**© 2026 Pendidikan Kepelatihan Olahraga FKIP Universitas Tadulako.**

---

# 19. Visual Design Direction

The overall visual identity should combine:

**SPORTS + ACADEMIC + MODERN**

The website should feel:

- Energetic

- Professional

- Confident

- Contemporary

- Editorial

- Athletic

- Academic

- Premium

Avoid:

- Generic university templates

- Excessive gradients

- Excessive glassmorphism

- Excessive rounded cards

- Excessive shadows

- Excessive decorative animations

- Template-like layouts

- Too many small cards

Prefer:

- Large typography

- Strong visual hierarchy

- Large sports imagery

- Editorial layouts

- Asymmetric grids

- Generous whitespace

- Bold section transitions

- Strong CTA placement

- Clear content hierarchy

---

# 20. Color System

Use the official Universitas Tadulako visual identity as the primary reference.

Do not invent institutional colors if official brand guidelines or existing project styles are available.

Create reusable Tailwind design tokens for:

- Primary

- Secondary

- Accent

- Background

- Surface

- Text

- Muted text

- Border

The color system must maintain strong accessibility contrast.

---

# 21. Typography

Recommended typography:

### Headings

- Plus Jakarta Sans

- Poppins

### Body

- Inter

Use large display typography for hero and major section headings.

Typography should create a strong editorial feeling.

---

# 22. Scroll-Driven Animation

Use scroll-driven animation as a core design feature.

Prioritize native CSS scroll-driven animations where practical.

Implement:

### Hero

- Parallax image

- Image scaling

- Headline movement

- Text reveal

### Section Headers

- Fade

- Translate

- Clip/reveal effect

### Statistics

- Scroll reveal

- Number emphasis

### Academic Journey

- Timeline progression

- Step reveal

### Achievements

- Image reveal

- Content transition

### Career

- Pathway progression

### Gallery

- Image reveal

- Scale effect

Animations should remain subtle and professional.

Do not animate every element.

---

# 23. Accessibility and Reduced Motion

Support:

\`prefers-reduced-motion: reduce\`

When reduced motion is enabled:

- Disable parallax

- Disable large transforms

- Reduce transition duration

- Keep content immediately readable

Also implement:

- Semantic HTML

- Correct heading hierarchy

- Keyboard navigation

- Visible focus states

- Accessible buttons

- Accessible mobile navigation

- Meaningful alt text

- Sufficient color contrast

---

# 24. Responsive Design

The website must work properly on:

- Large desktop

- Desktop

- Tablet

- Mobile

### Desktop

Use:

- Large hero

- Multi-column layouts

- Editorial grids

- Horizontal academic journey

- Large imagery

### Tablet

Adjust:

- Grid columns

- Typography

- Spacing

- Image sizes

### Mobile

Use:

- Hamburger navigation

- Single-column layouts

- Vertical academic timeline

- Responsive statistics

- Stacked CTAs

- Optimized image sizes

- Touch-friendly controls

Do not simply shrink the desktop layout.

Design mobile layouts intentionally.

---

# 25. Angular Component Architecture

Use reusable Angular components.

Suggested structure:

\`app/components/navbar\`

\`app/components/hero\`

\`app/components/section-header\`

\`app/components/statistics\`

\`app/components/about\`

\`app/components/features\`

\`app/components/academic-journey\`

\`app/components/lecturers\`

\`app/components/achievements\`

\`app/components/facilities\`

\`app/components/research\`

\`app/components/careers\`

\`app/components/gallery\`

\`app/components/admission\`

\`app/components/footer\`

Use standalone Angular components if supported by the existing project configuration.

Avoid creating unnecessarily complex component hierarchies.

---

# 26. Static Data Architecture

Separate content data from UI components.

Suggested data files:

\`app/data/statistics.ts\`

\`app/data/lecturers.ts\`

\`app/data/achievements.ts\`

\`app/data/facilities.ts\`

\`app/data/research.ts\`

\`app/data/gallery.ts\`

Use TypeScript interfaces/models such as:

- Statistic

- Lecturer

- Achievement

- Facility

- ResearchItem

- GalleryItem

This will make it easy to replace placeholder data with official content later.

---

# 27. Image Strategy

Use optimized image assets.

Requirements:

- Lazy loading for below-the-fold images

- Appropriate image dimensions

- Responsive image handling where practical

- Meaningful alt text

- Avoid unnecessarily large files

- Use modern formats such as WebP/AVIF when appropriate

The hero image should be optimized carefully because it is the most visually important asset.

Do not use copyrighted images without appropriate rights.

Use placeholder images during development if official images are not yet available.

---

# 28. SEO

Implement basic frontend SEO.

### Page Title

**Pendidikan Kepelatihan Olahraga | FKIP Universitas Tadulako**

### Meta Description

**Program Studi Pendidikan Kepelatihan Olahraga FKIP Universitas Tadulako mempersiapkan mahasiswa untuk berkembang dalam bidang kepelatihan, ilmu keolahragaan, pengembangan atlet, dan dunia olahraga.**

Also implement:

- Semantic HTML

- One primary H1

- Proper H2/H3 hierarchy

- Descriptive image alt text

- Open Graph metadata where appropriate

---

# 29. Performance

Prioritize:

- Fast initial load

- Optimized images

- Lazy loading

- Minimal dependencies

- CSS-first animation

- Efficient DOM structure

- Reusable Angular components

- Avoid unnecessary JavaScript

- Avoid excessive animation listeners

Do not introduce heavy animation libraries unless absolutely necessary.

---

# 30. Out of Scope

Do NOT implement:

- Backend

- REST API

- GraphQL

- Database

- Authentication

- CMS

- Admin dashboard

- Online registration system

- Payment system

- Student portal

- Lecturer management system

- Dynamic content management

- Backend search

- Backend filtering

All content should initially use static TypeScript data.

---

# 31. Implementation Instructions for Claude Code

Before coding:

1. Inspect the existing Angular project.

2. Check Angular and Node versions.

3. Inspect Tailwind configuration.

4. Inspect existing global styles.

5. Reuse the existing setup whenever possible.

6. Do not unnecessarily replace the build system.

7. Identify existing reusable components.

8. Keep the architecture simple.

Then implement from top to bottom:

1. Global design system

2. Navbar

3. Hero

4. Statistics

5. About

6. Features

7. Academic Journey

8. Lecturers

9. Achievements

10. Facilities

11. Research

12. Careers

13. Gallery

14. Admission CTA

15. Footer

After implementation:

- Test desktop layout

- Test tablet layout

- Test mobile layout

- Test navbar behavior

- Test smooth scrolling

- Test scroll-driven animations

- Test reduced-motion mode

- Test achievement filtering

- Test gallery interaction

- Test keyboard navigation

- Check console errors

- Remove unused code

- Optimize images

- Check accessibility basics

Do not over-engineer the application.

---

# 32. Content Rules

The **PRD instructions are written in English**, but all user-facing website content must be written in **Bahasa Indonesia**.

This includes:

- Navigation

- Headings

- Subheadings

- Paragraphs

- Buttons

- CTA

- Labels

- Categories

- Filters

- Form labels if any

- Empty states

- Tooltips

- Footer content

- Accessibility labels where appropriate

Do not generate English placeholder copy for visible website content.

Technical code identifiers may remain in English.

Examples:

Correct:

\`Penerimaan Mahasiswa\`

\`Mengapa Memilih PKO?\`

\`Dilatih untuk Bertanding. Dibentuk untuk Berprestasi.\`

Incorrect:

\`Admissions\`

\`Why Choose Us?\`

\`Train to Compete. Built to Achieve.\`

---

# 33. Data Integrity Rules

Do not fabricate official institutional information.

When official information is unavailable, use clearly identifiable placeholder data.

Examples:

\`Nama Dosen\`

\`XX Prestasi\`

\`Alamat Program Studi\`

\`email@example.com\`

Do not invent:

- Lecturer identities

- Accreditation status

- Official statistics

- Achievement records

- Contact information

- Social media accounts

- Research publications

- Facilities that may not exist

The architecture must make replacing placeholder data easy.

---

# 34. Definition of Done

The project is complete when:

- Angular application runs successfully

- Tailwind CSS is properly integrated

- Homepage contains all required sections

- Navigation uses Indonesian labels

- All visible website copy is in Bahasa Indonesia

- Hero section is visually strong

- Responsive layouts work on desktop, tablet, and mobile

- Navbar is sticky

- Mobile navigation works

- Smooth scrolling works

- Scroll-driven animations work

- Reduced-motion support works

- Static content is separated into TypeScript data files

- Achievement filtering works

- Gallery interaction works if implemented

- Images use lazy loading where appropriate

- Accessibility basics are implemented

- SEO metadata is implemented

- No backend/API/database is introduced

- No fabricated official information is presented as fact

- No unnecessary dependencies are added

- No console errors remain

- The final UI feels like a modern sports education website rather than a generic university template

---

# 35. Final Design Principle

The final website should communicate one clear idea:

**PKO is a place where students learn the science of sport, practice their skills, develop athletes, pursue achievement, and prepare for careers in the sports industry.**

The experience should visually guide users through:

**BELAJAR → BERLATIH → BERPRESTASI → BERKARIER**

Build the interface with strong visual storytelling, confident typography, high-quality sports imagery, meaningful motion, and clear calls to action.
