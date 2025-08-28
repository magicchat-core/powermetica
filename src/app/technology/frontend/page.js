"use client";

import React from "react";
import styles from "../technology.module.css";

const FrontendTechnology = () => {
  const technologies = [
    {
      category: "JavaScript Frameworks",
      items: ["React", "Vue.js", "Angular", "Svelte", "Next.js", "Nuxt.js"]
    },
    {
      category: "CSS Frameworks",
      items: ["Tailwind CSS", "Bootstrap", "Material-UI", "Chakra UI", "Styled Components"]
    },
    {
      category: "State Management",
      items: ["Redux", "Zustand", "MobX", "Recoil", "Context API"]
    },
    {
      category: "Build Tools",
      items: ["Webpack", "Vite", "Parcel", "Rollup", "ESBuild"]
    },
    {
      category: "Testing Frameworks",
      items: ["Jest", "Testing Library", "Cypress", "Playwright", "Vitest"]
    },
    {
      category: "Progressive Web Apps",
      items: ["Workbox", "PWA Builder", "Lighthouse", "Web App Manifest"]
    }
  ];

  return (
    <div style={{ backgroundColor: "#121723", padding: "2rem" }}>
      <div className={styles.techPage}>
        <h1>Frontend Technologies</h1>
        <p className={styles.subtitle}>
          We create responsive, performant, and accessible web applications using 
          the latest frontend technologies and best practices.
        </p>

        <div className={styles.techGrid}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techCategory}>
              <h2>{tech.category}</h2>
              <div className={styles.techItems}>
                {tech.items.map((item, idx) => (
                  <span key={idx} className={styles.techItem}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.expertiseSection}>
          <h2>Our Frontend Expertise</h2>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseItem}>
              <h3>Responsive Design</h3>
              <p>Creating websites that work flawlessly across all devices and screen sizes</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>Performance Optimization</h3>
              <p>Building fast-loading applications with optimal bundle sizes and efficient rendering</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>Accessibility</h3>
              <p>Ensuring web applications are usable by people with disabilities (WCAG compliance)</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>Cross-Browser Compatibility</h3>
              <p>Delivering consistent experiences across all modern browsers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendTechnology;
