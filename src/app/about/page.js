"use client";

import React from "react";
import styles from "./about.module.css";

const About = () => {
  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Expert Team Members" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to deliver exceptional results.",
      icon: "💡"
    },
    {
      title: "Quality",
      description: "We maintain the highest standards in every project, ensuring excellence in delivery.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients as partners to achieve their business goals.",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "We believe in transparency, honesty, and ethical business practices.",
      icon: "🔒"
    }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>About Our Company</h1>
          <p>
            We are a team of passionate developers, designers, and innovators
            dedicated to creating digital solutions that transform businesses
            and exceed expectations.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <h2>{stat.number}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyContent}>
          <div className={styles.storyText}>
            <h2>Our Story</h2>
            <p>
              Founded in 2025 , our company started with a simple mission: to help
              businesses leverage technology for growth. What began as a small team
              of three developers has grown into a full-service digital agency
              serving clients across various industries.
            </p>
            <p>
              Over the years, we've evolved our services to meet the changing
              demands of the digital landscape. From simple websites to complex
              AI solutions, we've consistently delivered value to our clients
              through innovation and expertise.
            </p>
          </div>
          <div className={styles.storyImage}>
            <img src="/assets/img/team-placeholder.jpg" alt="Our Team" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <h2>Our Values</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <h2>Leadership Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="/assets/img/team-member1.jpg" alt="Deepak Singh" />
            <h3>Deepak Singh</h3>
            <p>Co-Founder & CTO — Technology & Innovation Lead</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/assets/img/team-member2.jpg" alt="Reetu Singh" />
            <h3>Reetu Singh</h3>
            <p>Co-Founder & CEO — Creative & Finance Director</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
