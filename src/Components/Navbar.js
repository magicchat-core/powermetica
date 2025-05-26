'use client';

import { useState } from 'react';

export default function Navbar() {
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
  );
}
