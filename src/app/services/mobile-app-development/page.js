"use client";

import React from "react";
import Banner from "@/Components/webSite-dev-components/Banner";
import FAQ from "@/Components/webSite-dev-components/FAQ";
import styles from "./mobile.module.css";

const MobileAppDevelopment = () => {
  const bannerData = {
    title: "Mobile App Development",
    description:
      "We craft modern, scalable, and user-friendly mobile applications. Whether it's iOS, Android, or cross-platform, our team ensures performance, design, and usability.",
    image1: "/assets/icons/shap.png",
    image2: "/assets/icons/shape2.png",
    buttonText: "Start Mobile Project",
    onButtonClick: () => alert("Let's build your mobile app!"),
  };

  const mobileServices = [
    {
      icon: "📱",
      title: "iOS App Development",
      description:
        "Build high-quality, performance-driven applications for Apple devices with Swift and SwiftUI.",
    },
    {
      icon: "🤖",
      title: "Android App Development",
      description:
        "Develop scalable, secure, and feature-rich apps for Android devices using Kotlin and Java.",
    },
    {
      icon: "⚡",
      title: "Cross-Platform Apps",
      description:
        "Leverage frameworks like React Native and Flutter to create apps that run seamlessly on multiple platforms.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Deliver intuitive, user-friendly, and visually appealing app experiences.",
    },
    {
      icon: "☁️",
      title: "Cloud Integration",
      description:
        "Enable real-time data sync, cloud storage, and APIs to power connected applications.",
    },
    {
      icon: "🔒",
      title: "App Security",
      description:
        "Implement best-in-class security practices to protect your app and user data.",
    },
  ];

  const mobileFaqs = [
    {
      question: "Do you build both iOS and Android apps?",
      answer:
        "Yes, we specialize in building apps for iOS, Android, and also cross-platform solutions using React Native or Flutter.",
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "It depends on the complexity. A simple app may take 6–8 weeks, while a feature-rich app can take 3–6 months.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we provide maintenance, updates, and optimization services after deployment.",
    },
    {
      question: "Can you integrate third-party APIs?",
      answer:
        "Absolutely! We integrate payment gateways, maps, analytics, and any third-party services your app requires.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#121723" }}>
      {/* Banner */}
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        image1={bannerData.image1}
        image2={bannerData.image2}
        buttonText={bannerData.buttonText}
        onButtonClick={bannerData.onButtonClick}
      />

      {/* Services */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2>Our Mobile App Services</h2>
          <p>
            We provide end-to-end mobile app development services tailored to
            your business needs.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {mobileServices.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <h2>Our Mobile App Development Process</h2>
          <p>A proven methodology to ensure successful app delivery.</p>
        </div>

        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Requirement Analysis</h3>
            <p>We understand your goals, features, and target audience.</p>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>UI/UX Design</h3>
            <p>Create engaging and user-friendly designs tailored for mobile.</p>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Development</h3>
            <p>Build scalable, secure, and high-performance mobile apps.</p>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3>Testing</h3>
            <p>Ensure flawless performance across devices and platforms.</p>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3>Deployment & Support</h3>
            <p>Launch your app and provide ongoing updates and maintenance.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={mobileFaqs} />
    </div>
  );
};

export default MobileAppDevelopment;
