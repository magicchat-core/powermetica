"use client";

import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Mobile App Development', path: '/services/mobile-app-development' },
    { name: 'AI/ML Development', path: '/services/ai-ml-development' },
    { name: 'Cloud & DevOps', path: '/services/cloud-devops' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'Quality Assurance', path: '/services/quality-assurance' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
  ];

  const technologies = [
    { name: 'AI/ML Technologies', path: '/technology/ai-ml' },
    { name: 'Frontend Technologies', path: '/technology/frontend' },
    { name: 'Backend Technologies', path: '/technology/backend' },
    { name: 'Mobile Technologies', path: '/technology/mobile' },
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Company Info */}
        <div>
          <div className={styles.companyInfo}>
            <img
              src="/assets/img/logo.png"
              alt="Company Logo"
              className={styles.logo}
            />
            <p className={styles.description}>
              Transforming ideas into innovative digital solutions. We specialize in
              full-stack development, AI/ML, and cutting-edge technology services.
            </p>
          </div>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>📘</a>
            <a href="#" className={styles.socialLink}>📱</a>
            <a href="#" className={styles.socialLink}>💼</a>
            <a href="#" className={styles.socialLink}>🎥</a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className={styles.sectionTitle}>Services</h3>
          <ul className={styles.linkList}>
            {services.map((service, index) => (
              <li key={index} className={styles.linkItem}>
                <a href={service.path} className={styles.link}>
                  → {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className={styles.sectionTitle}>Technologies</h3>
          <ul className={styles.linkList}>
            {technologies.map((tech, index) => (
              <li key={index} className={styles.linkItem}>
                <a href={tech.path} className={styles.link}>
                  → {tech.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className={styles.sectionTitle}>Company</h3>
          <ul className={styles.linkList}>
            {company.map((item, index) => (
              <li key={index} className={styles.linkItem}>
                <a href={item.path} className={styles.link}>
                  → {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className={styles.sectionTitle}>Get In Touch</h3>
          <div className={styles.contactInfo}>
            <p className={styles.contactItem}>📧 powermetica@gmail.com</p>
            <p className={styles.contactItem}>📞 +91 (798) 231-1249</p>
            <p className={styles.contactItem}>📍 98, Sarvodaya Colony, Vijay Nagar, Ghaziabad - 201009, Uttar Pradesh, India</p>
          </div>
          <button className={styles.quoteButton}>
            Get Free Quote
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {currentYear} Your Company Name. All rights reserved.
        </p>
        <div className={styles.legalLinks}>
          <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
          <a href="/terms" className={styles.legalLink}>Terms of Service</a>
          <a href="/cookies" className={styles.legalLink}>Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}