# 🚀 Machine Task – Frontend Submission

## 🔗 Links

- **GitHub Repository:** [https://github.com/HensalDeon/bubblecare](#)
- **Live Deployed Link (Optional):** [https://bubblecare.netlify.app](#)

---

## 📌 Overview

This project is a frontend application developed as part of the interview process. The solution focuses on **performance**, **scalability**, and **developer experience** while maintaining a clean and responsive UI/UX.

---

## 🛠️ Tech Stack

- ⚡ **React** (with Vite) – for lightning-fast development and build times.
- 🎨 **Tailwind CSS** – for utility-first, responsive, and scalable styling.
- 🎞️ **Framer Motion** – for smooth and intuitive animations.
- 🧩 **React Lazy & Suspense** – for better load performance via code splitting.
- 📦 **viteCompression Plugin** – for asset compression and optimized delivery.

---

## 🧱 Development Approach

- **Vite as a Build Tool:** Chosen for its fast Hot Module Replacement (HMR), optimized production build, and support for modern tooling.
- **Reusable Components:** All major sections were broken into modular and reusable components to maintain scalability and separation of concerns.
- **Tailwind CSS:** Enabled rapid UI development with a consistent design system while keeping the codebase minimal.
- **Animations & Enhancements:** Subtle transitions and animations are powered by Framer Motion to improve user experience.
- **Optimized Assets:** All media and SVGs are optimized for minimal load time.
- **Code Splitting:** Implemented lazy loading for non-critical components using `React.lazy` and `Suspense`.

---

## 📦 Optimization Techniques

- `viteCompression()` used in the Vite config to gzip/brotli compress assets and reduce payload size.
- Lazy loading implemented on routes/components that aren’t immediately needed.
- SVG and image assets were optimized to reduce file size without quality loss.
- Component code was structured to minimize re-renders and unnecessary nesting.

---

## 🤔 Assumptions Made

- The app is intended for modern browsers that support ES6+ features.
- No backend/API was provided; hence, data is either mocked or assumed to be fetched locally.
- The primary focus is design accuracy, usability, and structure, rather than exhaustive functionality.

---

## 🔧 Possible Improvements (Given More Time)

- 📁 **Project Structure:** Could refactor and modularize the folder structure further for feature-based organization.
- 🎨 **CSS Optimization:** Reduce redundant utility classes and extract common styles using Tailwind's `@apply`.
- 🌿 **Branch Strategy:** Each feature could be developed in its own Git branch following Git Flow practices.
- 📉 **Asset Optimization:** Compress SVGs further and utilize modern formats like WebP/AVIF for images.

---

## 🙌 Final Note

Thank you for reviewing this submission! I’ve aimed to showcase clean code, performance-aware development, and reusable design patterns in this task. Feedback is welcome!