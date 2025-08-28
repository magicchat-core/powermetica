"use client";

import React from "react";
import Banner from "@/Components/webSite-dev-components/Banner";
import FAQ from "@/Components/webSite-dev-components/FAQ";
import styles from "./cloud.module.css";

const CloudDevOps = () => {
  const bannerData = {
    title: "Cloud & DevOps Services",
    description: "Accelerate your digital transformation with our comprehensive cloud and DevOps solutions. We build scalable, secure, and efficient infrastructure that powers your business growth.",
    image1: "/assets/icons/shap.png",
    image2: "/assets/icons/shape2.png",
    buttonText: "Migrate to Cloud",
    onButtonClick: () => alert("Let's plan your cloud migration!"),
  };

  const services = [
    {
      title: "Cloud Migration",
      description: "Seamless transition to cloud platforms with minimal downtime",
      features: ["Assessment & Planning", "Data Migration", "Application Refactoring", "Post-migration Optimization"]
    },
    {
      title: "DevOps Implementation",
      description: "Streamline your development and operations workflow",
      features: ["CI/CD Pipeline", "Infrastructure as Code", "Automated Testing", "Monitoring & Logging"]
    },
    {
      title: "Cloud Architecture",
      description: "Design scalable and cost-effective cloud solutions",
      features: ["Microservices Architecture", "Serverless Solutions", "Containerization", "Load Balancing"]
    },
    {
      title: "Security & Compliance",
      description: "Ensure your cloud infrastructure meets security standards",
      features: ["Security Assessment", "Compliance Framework", "Identity Management", "Data Encryption"]
    },
    {
      title: "Managed Services",
      description: "24/7 monitoring and management of your cloud environment",
      features: ["Performance Monitoring", "Cost Optimization", "Backup & Recovery", "Technical Support"]
    },
    {
      title: "Multi-Cloud Strategy",
      description: "Leverage multiple cloud providers for optimal performance",
      features: ["Multi-cloud Architecture", "Vendor Management", "Cost Allocation", "Disaster Recovery"]
    }
  ];

  const faqItems = [
    {
      question: "Which cloud platforms do you work with?",
      answer: "We're certified experts in AWS, Azure, Google Cloud Platform, and also work with hybrid and private cloud solutions."
    },
    {
      question: "How long does a typical cloud migration take?",
      answer: "Migration timelines vary based on complexity. Simple migrations can take 2-4 weeks, while enterprise-level transitions may require 3-6 months."
    },
    {
      question: "Do you provide ongoing cloud management?",
      answer: "Yes, we offer comprehensive managed services including monitoring, optimization, security, and 24/7 support."
    },
    {
      question: "What are the cost benefits of cloud migration?",
      answer: "Cloud migration typically reduces infrastructure costs by 30-50% while improving scalability, reliability, and performance."
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
          <h2>Our Cloud & DevOps Expertise</h2>
          <p>Comprehensive solutions to optimize your infrastructure and accelerate delivery</p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.featuresList}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.sectionHeader}>
          <h2>Benefits of Our Cloud & DevOps Services</h2>
        </div>
        
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>⚡</div>
            <h3>Faster Deployment</h3>
            <p>Reduce time-to-market with automated CI/CD pipelines</p>
          </div>
          
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>💰</div>
            <h3>Cost Efficiency</h3>
            <p>Optimize resource usage and reduce infrastructure costs</p>
          </div>
          
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>🛡️</div>
            <h3>Enhanced Security</h3>
            <p>Implement robust security measures and compliance standards</p>
          </div>
          
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>📈</div>
            <h3>Scalability</h3>
            <p>Easily scale your infrastructure to meet growing demands</p>
          </div>
          
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>🔍</div>
            <h3>Better Monitoring</h3>
            <p>Gain insights into performance and user experience</p>
          </div>
          
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>🔄</div>
            <h3>Continuous Improvement</h3>
            <p>Iterate and improve your applications continuously</p>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  );
};

export default CloudDevOps;
