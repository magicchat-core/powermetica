"use client";

import React from "react";
import styles from "../technology.module.css";

const BackendTechnology = () => {
  const technologies = [
    {
      category: "Programming Languages",
      items: ["Node.js", "Python", "Java", "Go", "Ruby", "PHP"]
    },
    {
      category: "Web Frameworks",
      items: ["Express.js", "Django", "Spring Boot", "Laravel", "Ruby on Rails", "NestJS"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra"]
    },
    {
      category: "API Technologies",
      items: ["REST APIs", "GraphQL", "gRPC", "WebSocket", "Apache Kafka", "RabbitMQ"]
    },
    {
      category: "DevOps & Deployment",
      items: ["Docker", "Kubernetes", "AWS", "Google Cloud", "Azure", "Terraform"]
    },
    {
      category: "Security",
      items: ["JWT", "OAuth 2.0", "SSL/TLS", "Helmet.js", "CORS", "Rate Limiting"]
    }
  ];

  return (
    <div style={{ backgroundColor: "#121723", padding: "2rem" }}>
      <div className={styles.techPage}>
        <h1>Backend Technologies</h1>
        <p className={styles.subtitle}>
          We build robust, scalable, and secure backend systems that power 
          modern web and mobile applications.
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
          <h2>Our Backend Expertise</h2>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseItem}>
              <h3>Microservices Architecture</h3>
              <p>Designing scalable systems composed of small, independent services</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>Database Design & Optimization</h3>
              <p>Creating efficient database schemas and optimizing query performance</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>API Development</h3>
              <p>Building RESTful and GraphQL APIs with comprehensive documentation</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>Cloud Infrastructure</h3>
              <p>Deploying and managing applications on cloud platforms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendTechnology;
