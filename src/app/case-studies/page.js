"use client";

import React from "react";
import styles from "./case.module.css";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform Modernization",
      client: "Fashion Retail Brand",
      challenge: "Legacy system with poor performance and outdated UX",
      solution: "Built a modern React-based platform with headless commerce",
      results: ["+45% conversion rate", "+60% mobile traffic", "-40% load time"],
      image: "/assets/img/case-study1.jpg"
    },
    {
      title: "AI-Powered Healthcare App",
      client: "Healthcare Provider",
      challenge: "Manual patient screening process causing delays",
      solution: "Developed ML model for automated patient triage and recommendations",
      results: ["-70% screening time", "+90% accuracy", "24/7 availability"],
      image: "/assets/img/case-study2.jpg"
    },
    {
      title: "Mobile Banking Application",
      client: "Financial Institution",
      challenge: "Outdated mobile app with poor user experience",
      solution: "Designed and developed a modern React Native application",
      results: ["+50% user engagement", "-35% support tickets", "4.8★ app rating"],
      image: "/assets/img/case-study3.jpg"
    },
    {
      title: "Supply Chain Optimization",
      client: "Logistics Company",
      challenge: "Inefficient routing and inventory management",
      solution: "Custom SaaS platform with real-time tracking and predictive analytics",
      results: ["-25% fuel costs", "+30% delivery efficiency", "Real-time visibility"],
      image: "/assets/img/case-study4.jpg"
    }
  ];

  return (
    <div className={styles.caseStudiesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Our Case Studies</h1>
          <p>
            Discover how we've helped businesses across various industries 
            achieve their goals through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className={styles.caseStudiesSection}>
        <div className={styles.caseStudiesGrid}>
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className={styles.caseStudyCard}>
              <div className={styles.caseStudyImage}>
                <img src={caseStudy.image} alt={caseStudy.title} />
                <div className={styles.overlay}></div>
              </div>
              
              <div className={styles.caseStudyContent}>
                <h2>{caseStudy.title}</h2>
                <p className={styles.client}><strong>Client:</strong> {caseStudy.client}</p>
                
                <div className={styles.challengeSolution}>
                  <h3>Challenge</h3>
                  <p>{caseStudy.challenge}</p>
                  
                  <h3>Solution</h3>
                  <p>{caseStudy.solution}</p>
                </div>
                
                <div className={styles.results}>
                  <h3>Results</h3>
                  <ul>
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can help you achieve similar results</p>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
