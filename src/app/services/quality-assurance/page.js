"use client";

import React from "react";
import Banner from "@/Components/webSite-dev-components/Banner";
import FAQ from "@/Components/webSite-dev-components/FAQ";
import styles from "./qa.module.css";

const QualityAssurance = () => {
  const bannerData = {
    title: "Quality Assurance Services",
    description: "Ensure your software meets the highest standards of quality, reliability, and performance. Our comprehensive testing services help you deliver bug-free applications.",
    image1: "/assets/icons/shap.png",
    image2: "/assets/icons/shape2.png",
    buttonText: "Start QA Project",
    onButtonClick: () => alert("Let's ensure your quality!"),
  };

  const services = [
    {
      title: "Functional Testing",
      description: "Verify that all features work as intended",
      tests: ["Unit Testing", "Integration Testing", "System Testing", "Regression Testing"]
    },
    {
      title: "Performance Testing",
      description: "Ensure your application performs under load",
      tests: ["Load Testing", "Stress Testing", "Scalability Testing", "Endurance Testing"]
    },
    {
      title: "Security Testing",
      description: "Identify vulnerabilities and protect your data",
      tests: ["Penetration Testing", "Vulnerability Assessment", "Security Scanning", "Risk Assessment"]
    },
    {
      title: "Compatibility Testing",
      description: "Ensure consistent experience across environments",
      tests: ["Cross-browser Testing", "Cross-device Testing", "OS Compatibility", "Network Testing"]
    }
  ];

  const faqItems = [
    {
      question: "What types of applications do you test?",
      answer: "We test web applications, mobile apps (iOS & Android), desktop software, APIs, and embedded systems across various industries."
    },
    {
      question: "Do you provide automated testing services?",
      answer: "Yes, we develop comprehensive automated testing frameworks using tools like Selenium, Cypress, Appium, and Jest to ensure continuous quality."
    },
    {
      question: "How do you handle test documentation?",
      answer: "We provide detailed test plans, test cases, bug reports, and summary reports to give you complete visibility into the testing process."
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
          <h2>Our QA Services</h2>
          <p>Comprehensive testing solutions to ensure your software meets the highest quality standards</p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.testsList}>
                {service.tests.map((test, idx) => (
                  <li key={idx}>{test}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  );
};

export default QualityAssurance;
