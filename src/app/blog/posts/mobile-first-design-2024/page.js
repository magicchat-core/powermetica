"use client";

import React from "react";
import styles from "../future-ai-web-development/post.module.css";

const MobileFirstDesign2024 = () => {
  return (
    <div className={styles.blogPostPage}>
      <article className={styles.postContainer}>
        <header className={styles.postHeader}>
          <div className={styles.postMeta}>
            <span className={styles.category}>UI/UX Design</span>
            <span className={styles.date}>February 22, 2024</span>
            <span className={styles.readTime}>7 min read</span>
            <span className={styles.author}>By David Brown</span>
          </div>
          <h1 className={styles.postTitle}>Mobile-First Design: Why It Matters in 2024</h1>
          <p className={styles.postExcerpt}>
            Why adopting a mobile-first approach is crucial for modern web design and development.
          </p>
        </header>

        <div className={styles.postContent}>
          <h2>Introduction</h2>
          <p>
            With mobile devices accounting for over 50% of web traffic, mobile-first design 
            has become essential for creating successful digital products.
          </p>
          
          <h2>Progressive Enhancement</h2>
          <p>
            Start with a solid mobile foundation and progressively enhance the experience for 
            larger screens, rather than trying to scale down desktop designs.
          </p>
          
          <h2>Performance Optimization</h2>
          <p>
            Mobile users expect fast loading times. Optimize images, minimize JavaScript, and 
            implement lazy loading for optimal mobile performance.
          </p>

          <div className={styles.postTags}>
            <span>#MobileFirst</span>
            <span>#UIUX</span>
            <span>#ResponsiveDesign</span>
            <span>#WebDesign</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default MobileFirstDesign2024;
