"use client";

import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/assets/img/logo.png" alt="Company Logo" height={40} />
      </div>
      
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <button 
            className={styles.navButton}
            onClick={() => toggleDropdown('services')}
          >
            Services <span className={styles.caret}>▼</span>
          </button>
          {activeDropdown === 'services' && (
            <div className={styles.dropdown}>
              {services.map((service, index) => (
                <a key={index} href={service.path} className={styles.dropdownItem}>
                  {service.name}
                </a>
              ))}
            </div>
          )}
        </li>
        
        <li className={styles.navItem}>
          <button 
            className={styles.navButton}
            onClick={() => toggleDropdown('technology')}
          >
            Technology <span className={styles.caret}>▼</span>
          </button>
          {activeDropdown === 'technology' && (
            <div className={styles.dropdown}>
              {technologies.map((tech, index) => (
                <a key={index} href={tech.path} className={styles.dropdownItem}>
                  {tech.name}
                </a>
              ))}
            </div>
          )}
        </li>
        
        <li className={styles.navItem}>
          <a href="/case-studies" className={styles.navButton}>Case Studies</a>
        </li>
        
        <li className={styles.navItem}>
          <a href="/blog" className={styles.navButton}>Blog</a>
        </li>
        
        <li className={styles.navItem}>
          <a href="/about" className={styles.navButton}>About</a>
        </li>
        
        <li className={styles.navItem}>
          <a href="/contact" className={styles.navButton}>Contact</a>
        </li>
      </ul>
      
      <div className={styles.navIcons}>
        <button className={styles.contactButton}>Get Quote</button>
      </div>
    </nav>
  );
};

export default Navbar;
