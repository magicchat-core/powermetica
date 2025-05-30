"use client";

import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import styles from "./Navbar.module.css";
import { FaAngleDown } from "react-icons/fa6";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const navRef = useRef(null);

  const navItems = [
    { label: "Home" },
    {
      label: "Services",
      subItems: [
        "Mobile App Development",
        "Website Development",
        "eCommerce Solutions",
        "Software Development",
        "UI/UX Design",
        "Digital Marketing",
      ],
    },
    {
      label: "Industries",
      subItems: [
        "Dating App Development Services",
        "E-commerce App Development",
        "Grocery Delivery App Development",
        "EducationTech Software Development",
        "Financial Services Software Solutions",
        "Healthcare",
      ],
    },
    {
      label: "Technologies",
      subItems: ["Technologies", "Events"],
    },
  ];

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles["nav-items"]}>
        {navItems.map((item) => (
          <li key={item.label} className={styles["nav-item"]}>
            <button
              className={styles["nav-button"]}
              onClick={() => toggleDropdown(item.label)}
            >
              {item.label}{" "}
              {item.subItems && (
                <span className={styles.caret}>
                  <FaAngleDown />
                </span>
              )}
            </button>
            {activeDropdown === item.label && item.subItems && (
              <ul className={styles.dropdown}>
                {item.subItems.map((sub) => (
                  <li key={sub} className={styles["dropdown-item"]}>
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className={styles["nav-icons"]}>
        <div className={styles.searchWrapper}>
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
              autoFocus
            />
          )}
          <span
            className={`${styles.searchIcon} ${
              showSearch ? styles.insideInput : ""
            }`}
            onClick={() => setShowSearch((prev) => !prev)}
          >
            <FiSearch />
          </span>
        </div>

        <span>
          <HiOutlineMenuAlt3 style={{fontSize:"28px"}}/>
        </span>
      </div>
    </nav>
  );
}
