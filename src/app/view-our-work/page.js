"use client";

import React from "react";
import styles from "./ViewOurWork.module.css";

const caseStudies = [
  {
    title: "E-commerce Platform",
    description:
      "A scalable e-commerce solution with AI-driven recommendations.",
    image: "/assets/img/e-commerce.png",
    link: "/case-studies/ecommerce",
  },
  {
    title: "Dating App",
    description:
      "A modern dating app built with real-time chat and smart matching.",
    image: "/assets/img/datingApp.png",
    link: "/case-studies/dating-app",
  },
  {
    title: "SaaS Dashboard",
    description:
      "An analytics dashboard with interactive charts and cloud integration.",
    image: "/assets/img/saasImg.png",
    link: "/case-studies/dashboard",
  },
];

const ViewOurWorkPage = () => {
  return (
    <div className={styles.getQuotePage}>
      <section className={styles.container}>
        <h2 className={styles.title}>Our Work</h2>
        <p className={styles.subtitle}>
          Explore some of the projects we’ve delivered for our amazing clients.
        </p>
      </section>

      <div className={styles.grid}>
        {caseStudies.map((work, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.caseStudyImage}>
              <img src={work.image} alt={work.title} className={styles.image} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{work.title}</h3>
              <p className={styles.cardDesc}>{work.description}</p>
              <a href="/case-studies" className={styles.link}>
                View Case Study →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewOurWorkPage;
