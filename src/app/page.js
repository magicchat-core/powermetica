'use client'

import React from 'react';
import styles from './home.module.css';

export default function Home() {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Responsive, SEO-optimized websites that convert visitors into customers',
      link: '/services/website-development'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      link: '/services/mobile-app-development'
    },
    {
      icon: '🤖',
      title: 'AI/ML Solutions',
      description: 'Intelligent systems that learn, adapt, and automate your business processes',
      link: '/services/ai-ml-development'
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment pipelines',
      link: '/services/cloud-devops'
    }
  ];

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '15+', label: 'Expert Team Members' }
  ];

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Transform Your Vision Into <span className={styles.gradientText}>Digital Reality</span></h1>
            <p>
              We craft exceptional digital experiences that drive growth and innovation. 
              From concept to deployment, we're your partners in digital transformation.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>Start Your Project</button>
              <button className={styles.secondaryButton}>View Our Work</button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img 
              src="/assets/img/man_with_laptop.png" 
              alt="Digital transformation" 
              className={styles.mainImage}
            />
            <div className={styles.floatingElement1}></div>
            <div className={styles.floatingElement2}></div>
            <div className={styles.floatingElement3}></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <h2>{stat.number}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2>Our Services</h2>
          <p>Comprehensive digital solutions tailored to your business needs</p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className={styles.serviceLink}>
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.whyChooseContent}>
          <div className={styles.whyChooseText}>
            <h2>Why Choose Us?</h2>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>⭐</div>
                <div>
                  <h4>Expert Team</h4>
                  <p>Seasoned professionals with years of industry experience</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>⚡</div>
                <div>
                  <h4>Fast Delivery</h4>
                  <p>Agile development process ensuring timely delivery</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🔒</div>
                <div>
                  <h4>Quality Assurance</h4>
                  <p>Rigorous testing to ensure bug-free applications</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🔄</div>
                <div>
                  <h4>Ongoing Support</h4>
                  <p>Continuous maintenance and support services</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.whyChooseImage}>
            <img 
              src="/assets/img/customDatingbannerImg.png" 
              alt="Why choose us" 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss your ideas and turn them into reality</p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>Get Free Consultation</button>
            <button className={styles.ctaSecondary}>View Case Studies</button>
          </div>
        </div>
      </section>
    </div>
  );
}