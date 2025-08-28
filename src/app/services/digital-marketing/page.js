"use client";

import React from "react";
import Banner from "@/Components/webSite-dev-components/Banner";
import FAQ from "@/Components/webSite-dev-components/FAQ";
import styles from "./marketing.module.css";

const DigitalMarketing = () => {
  const bannerData = {
    title: "Digital Marketing Services",
    description: "Drive growth and maximize your online presence with our comprehensive digital marketing strategies. We help you reach the right audience and convert leads into customers.",
    image1: "/assets/icons/shap.png",
    image2: "/assets/icons/shape2.png",
    buttonText: "Start Marketing Campaign",
    onButtonClick: () => alert("Let's grow your business!"),
  };

  const services = [
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and organic traffic",
      strategies: ["Keyword Research", "On-page SEO", "Technical SEO", "Content Optimization"]
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience and build brand presence",
      strategies: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics & Reporting"]
    },
    {
      title: "Content Marketing",
      description: "Create valuable content that attracts and retains customers",
      strategies: ["Blog Content", "Video Marketing", "Email Newsletters", "Case Studies"]
    }
  ];

  const faqItems = [
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy. Typically, you can see initial results in 3-6 months, with significant improvements occurring after 6-12 months of consistent effort."
    },
    {
      question: "Do you provide analytics and reporting?",
      answer: "Yes, we provide comprehensive monthly reports with key metrics, insights, and recommendations to track campaign performance and ROI."
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
          <h2>Our Marketing Services</h2>
          <p>Data-driven marketing strategies to grow your business and increase conversions</p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.strategiesList}>
                {service.strategies.map((strategy, idx) => (
                  <li key={idx}>{strategy}</li>
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

export default DigitalMarketing;
