'use client'
import { useState } from 'react';

export default function Home() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { label: 'Home' },
    {
      label: 'Services',
      subItems: [
        'Mobile App Development',
        'Website Development',
        'eCommerce Solutions',
        'Software Development',
        'UI/UX Design',
        'Digital Marketing',
      ],
    },
    {
      label: 'Industries',
      subItems: ['Technologies', 'Events'],
    },
    {
      label: 'Careers',
      subItems: ['Technologies', 'Events'],
    },
  ];

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Logo</div>
        <ul className="nav-items">
          {navItems.map((item) => (
            <li key={item.label} className="nav-item">
              <button className="nav-button" onClick={() => toggleDropdown(item.label)}>
                {item.label} {item.subItems && <span className="caret">▾</span>}
              </button>
              {activeDropdown === item.label && item.subItems && (
                <ul className="dropdown">
                  {item.subItems.map((sub) => (
                    <li key={sub} className="dropdown-item">{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="nav-icons">
          <span>🔍</span>
          <span>☰</span>
        </div>
      </nav>

      {/* Banner */}
      <section className="banner">
        <div className="banner-text">
          <h1>Revolutionizing digital experiences through innovative web and mobile app solutions</h1>
          <p>
            HHP Software builds inspirational designs and powerful software solutions for web and mobile apps.
            We blend cutting-edge tech & design to develop innovative digital products and bring ideas and changes to life.
          </p>
          <div className="banner-buttons">
            <button className="btn-orange">Talk to us</button>
            <button className="btn-dark">About us</button>
          </div>
        </div>
        <div className="banner-image">
          {/* Replace with actual <img src="..." /> as needed */}
          <div className="image-placeholder">[ Image Here ]</div>
        </div>
      </section>
    </div>
  );
}
