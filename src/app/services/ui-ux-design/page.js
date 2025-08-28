"use client";

import React from "react";
import Banner from "@/Components/webSite-dev-components/Banner";
import FAQ from "@/Components/webSite-dev-components/FAQ";
import styles from "./uiux.module.css";

const UIUXDesign = () => {
  const bannerData = {
    title: "UI/UX Design Services",
    description: "Create exceptional digital experiences that delight users and drive business results. Our design process focuses on usability, aesthetics, and conversion optimization.",
    image1: "/assets/icons/shap.png",
    image2: "/assets/icons/shape2.png",
    buttonText: "Start Design Project",
    onButtonClick: () => alert("Let's design something amazing!"),
  };

  const services = [
    {
      title: "User Research",
      description: "Understand your users through comprehensive research and analysis",
      steps: ["User Interviews", "Surveys & Questionnaires", "Competitive Analysis", "User Personas"]
    },
    {
      title: "UX Design",
      description: "Create intuitive user flows and information architecture",
      steps: ["User Journey Mapping", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      title: "UI Design",
      description: "Design visually stunning interfaces that reflect your brand",
      steps: ["Visual Design", "Design Systems", "Interactive Prototypes", "Design Handoff"]
    },
    {
      title: "Interaction Design",
      description: "Craft engaging micro-interactions and animations",
      steps: ["Motion Design", "Micro-interactions", "Animation Guidelines", "Performance Optimization"]
    },
    {
      title: "Design Systems",
      description: "Build scalable design systems for consistency and efficiency",
      steps: ["Component Libraries", "Style Guides", "Design Tokens", "Documentation"]
    },
    {
      title: "Usability Testing",
      description: "Validate designs with real users to ensure optimal experience",
      steps: ["Test Planning", "User Recruitment", "Moderation", "Results Analysis"]
    }
  ];

  const faqItems = [
    {
      question: "What's the difference between UI and UX design?",
      answer: "UI (User Interface) design focuses on the visual aspects and aesthetics of a product, while UX (User Experience) design focuses on the overall feel, usability, and functionality of the product."
    },
    {
      question: "How long does a typical design project take?",
      answer: "The timeline varies based on project complexity. A simple website design might take 2-4 weeks, while a comprehensive app design with research could take 6-12 weeks."
    },
    {
      question: "Do you provide design assets for development?",
      answer: "Yes, we provide comprehensive design handoff packages including Figma files, design systems, assets, and detailed specifications for developers."
    },
    {
      question: "Can you work with our existing design system?",
      answer: "Absolutely! We can extend, improve, or work within your existing design system to maintain consistency across your products."
    }
  ];

  return (
    <div style={{ backgroundColor: "#121723" }}>
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        image1={bannerData.image1}
        image2={bannerData.image2}
        buttonText={bannerData.buttonText}
        onButtonClick={bannerData.onButtonClick}
      />

      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2>Our UI/UX Design Services</h2>
          <p>End-to-end design solutions that combine creativity with user-centered methodology</p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.stepsList}>
                {service.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <h2>Our Design Process</h2>
          <p>A structured approach to creating exceptional user experiences</p>
        </div>
        
        <div className={styles.processTimeline}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Discover</h3>
              <p>Research and understand user needs, business goals, and market landscape</p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Define</h3>
              <p>Synthesize research findings and define user personas and journey maps</p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Design</h3>
              <p>Create wireframes, prototypes, and visual designs based on insights</p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3>Test</h3>
              <p>Validate designs through usability testing and iterate based on feedback</p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h3>Deliver</h3>
              <p>Hand off final designs with comprehensive documentation and assets</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.sectionHeader}>
          <h2>Benefits of Good UI/UX Design</h2>
        </div>
        
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>📈</div>
            <h3>Increased Conversion</h3>
            <p>Well-designed interfaces can improve conversion rates by up to 200%</p>
          </div>
          
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>💰</div>
            <h3>Reduced Costs</h3>
            <p>Early usability testing can reduce development costs by fixing issues before implementation</p>
          </div>
          
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>⭐</div>
            <h3>Better User Satisfaction</h3>
            <p>Intuitive designs lead to happier users and better retention rates</p>
          </div>
          
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>🚀</div>
            <h3>Faster Development</h3>
            <p>Clear design specifications accelerate development and reduce rework</p>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  );
};

export default UIUXDesign;
