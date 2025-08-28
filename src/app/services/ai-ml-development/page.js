"use client";

import React from "react";
import Banner from "@/Components/webSite-dev-components/Banner";
import FAQ from "@/Components/webSite-dev-components/FAQ";
import Tabs from "@/Components/webSite-dev-components/Tabs";
import Card from "@/Components/webSite-dev-components/Card";
import styles from "./aiml.module.css";

const AIMLDevelopment = () => {
  const bannerData = {
    title: "AI/ML Development Services",
    description: "Leverage the power of artificial intelligence and machine learning to transform your business. We build intelligent solutions that learn, adapt, and deliver exceptional results.",
    image1: "/assets/icons/shap.png",
    image2: "/assets/icons/shape2.png",
    buttonText: "Start AI Project",
    onButtonClick: () => alert("Let's discuss your AI project!"),
  };

  const aimlServices = [
    {
      icon: "🤖",
      title: "Predictive Analytics",
      description: "Build models that forecast trends, customer behavior, and business outcomes with remarkable accuracy."
    },
    {
      icon: "💬",
      title: "Natural Language Processing",
      description: "Create chatbots, sentiment analysis systems, and text processing solutions that understand human language."
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      description: "Develop image and video recognition systems for various applications from security to medical imaging."
    },
    {
      icon: "📊",
      title: "Recommendation Systems",
      description: "Build personalized recommendation engines that enhance user experience and drive engagement."
    },
    {
      icon: "⚙️",
      title: "Process Automation",
      description: "Implement AI-powered automation to streamline operations and reduce manual workloads."
    },
    {
      icon: "🔍",
      title: "Anomaly Detection",
      description: "Identify unusual patterns and potential issues in real-time data streams."
    }
  ];

  const aimlFaqs = [
    {
      question: "What industries benefit from AI/ML solutions?",
      answer: "Virtually all industries can benefit from AI/ML. We've worked with healthcare, finance, retail, manufacturing, and logistics companies to implement tailored AI solutions."
    },
    {
      question: "How long does it take to develop an AI model?",
      answer: "The timeline varies based on complexity. Simple models can take 2-4 weeks, while complex systems may require 3-6 months of development and training."
    },
    {
      question: "Do you provide ongoing model maintenance?",
      answer: "Yes, we offer comprehensive maintenance packages to ensure your AI models continue to perform optimally as data patterns evolve."
    },
    {
      question: "What data do I need to provide for AI development?",
      answer: "The amount and type of data depend on your project. We'll guide you through data collection and preparation requirements during the discovery phase."
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
          <h2>Our AI/ML Services</h2>
          <p>We deliver cutting-edge artificial intelligence and machine learning solutions tailored to your specific business needs</p>
        </div>
        
        <div className={styles.servicesGrid}>
          {aimlServices.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <h2>Our AI Development Process</h2>
          <p>A structured approach to delivering successful AI solutions</p>
        </div>
        
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Discovery & Planning</h3>
            <p>Understand your business objectives and define AI solution requirements</p>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>Data Preparation</h3>
            <p>Collect, clean, and preprocess data for model training</p>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Model Development</h3>
            <p>Design, train, and validate machine learning models</p>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3>Integration & Deployment</h3>
            <p>Implement the solution into your existing systems</p>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3>Monitoring & Optimization</h3>
            <p>Continuously improve model performance and accuracy</p>
          </div>
        </div>
      </section>

      <FAQ items={aimlFaqs} />
    </div>
  );
};

export default AIMLDevelopment;
