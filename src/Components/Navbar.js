"use client";

import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Mobile App Development', path: '/services/mobile-app-development' },
    { name: 'AI/ML Development', path: '/services/ai-ml-development' },
    { name: 'Cloud & DevOps', path: '/services/cloud-devops' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'Quality Assurance', path: '/services/quality-assurance' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
  ];

    const products = [
    { name: 'Magicchat', path: 'https://magicchat.io' },
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/assets/img/logo.png" alt="Company Logo" height={40} />
      </div>
      
      {/* Hamburger Menu Button */}
      <button 
        className={styles.menuToggle}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className={mobileMenuOpen ? styles.open : ''}></span>
        <span className={mobileMenuOpen ? styles.open : ''}></span>
        <span className={mobileMenuOpen ? styles.open : ''}></span>
      </button>

      {/* Navigation Items */}
      <ul className={`${styles.navItems} ${mobileMenuOpen ? styles.active : ''}`}>
        <li className={styles.navItem}>
          <button 
            className={styles.navButton}
            onClick={() => toggleDropdown('services')}
          >
            Services <span className={styles.caret}>▼</span>
          </button>
          <div className={`${styles.dropdown} ${activeDropdown === 'services' ? styles.active : ''}`}>
            {services.map((service, index) => (
              <a 
                key={index} 
                href={service.path} 
                className={styles.dropdownItem}
                onClick={closeMobileMenu}
              >
                {service.name}
              </a>
            ))}
          </div>
        </li>
        
         <li className={styles.navItem}>
          <button 
            className={styles.navButton}
            onClick={() => toggleDropdown('product')}
          >
            Products <span className={styles.caret}>▼</span>
          </button>
          <div className={`${styles.dropdown} ${activeDropdown === 'products' ? styles.active : ''}`}>
            {products.map((product, index) => (
              <a 
                key={index} 
                href={product.path} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.dropdownItem}
                onClick={closeMobileMenu}
              >
                {product.name}
              </a>
            ))}
          </div>
        </li>

        <li className={styles.navItem}>
          <button 
            className={styles.navButton}
            onClick={() => toggleDropdown('technology')}
          >
            Technology <span className={styles.caret}>▼</span>
          </button>
          <div className={`${styles.dropdown} ${activeDropdown === 'technology' ? styles.active : ''}`}>
            {technologies.map((tech, index) => (
              <a 
                key={index} 
                href={tech.path} 
                className={styles.dropdownItem}
                onClick={closeMobileMenu}
              >
                {tech.name}
              </a>
            ))}
          </div>
        </li>
        
        <li className={styles.navItem}>
          <a href="/case-studies" className={styles.navButton} onClick={closeMobileMenu}>Case Studies</a>
        </li>
        
        <li className={styles.navItem}>
          <a href="/blog" className={styles.navButton} onClick={closeMobileMenu}>Blog</a>
        </li>
        
        <li className={styles.navItem}>
          <a href="/about" className={styles.navButton} onClick={closeMobileMenu}>About</a>
        </li>
        
        <li className={styles.navItem}>
          <a href="/contact" className={styles.navButton} onClick={closeMobileMenu}>Contact</a>
        </li>
      </ul>
      
      <div className={styles.navIcons}>
        <button className={styles.contactButton}>Get Quote</button>
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div className={styles.overlay} onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;