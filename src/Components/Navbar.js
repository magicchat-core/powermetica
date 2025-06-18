"use client";

import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navRef = useRef(null);

  const navItems = [
    { label: "Home", slug: "" },
    {
      label: "Services",
      subItems: [
        { label: "Mobile App Development", slug: "mobilea-app-development" },
        { label: "Website Development", slug: "website-development" },
        { label: "eCommerce Solutions", slug: "ecommerce-solutions" },
        { label: "Software Development", slug: "software-development" },
        { label: "UI/UX Design", slug: "ui-ux-design" },
        { label: "Digital Marketing", slug: "digital-marketing" },
      ],
    },
    {
      label: "Industries",
      subItems: [
        { label: "Dating App Development", slug: "dating-app-development" },
        {
          label: "E-commerce App Development",
          slug: "ecommerce-app-development",
        },
        {
          label: "Grocery Delivery App Development",
          slug: "grocery-delivery-app-development",
        },
        {
          label: "EducationTech Software Development",
          slug: "educationtech-software-development",
        },
        {
          label: "Financial Services Software Solutions",
          slug: "financial-services-software-solutions",
        },
        { label: "Healthcare", slug: "healthcare" },
      ],
    },
    {
      label: "Technologies",
      subItems: [
        { label: "Technologies", slug: "technology" },
        { label: "Events", slug: "events" },
      ],
    },
  ];

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.logo}>
    <img
      src="/assets/img/logos.png"
      alt="Powermetic Logo"
      className={styles.logoIcon}
    />
    <h2>Powermetic</h2>
  </div>

      <ul
        className={`${styles["nav-items"]} ${
          showMobileMenu ? styles.showMobileMenu : ""
        }`}
      >
        {navItems.map((item) => (
          <li key={item.label} className={styles["nav-item"]}>
            {item.subItems ? (
              <>
                <button
                  className={styles["nav-button"]}
                  onClick={() => toggleDropdown(item.label)}
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <span className={styles.caret}>
                    <FaAngleDown />
                  </span>
                </button>

                {activeDropdown === item.label && (
                  <ul className={styles.dropdown}>
                    {item.subItems.map((sub) => (
                      // <li key={sub.slug} className={styles["dropdown-item"]}>
                      //   <Link href={`/${sub.slug}`}>{sub.label}</Link>
                      // </li>

                      <Link
                        href={`/${sub.slug}`}
                        key={sub.slug}
                        className={styles["dropdown-link-wrapper"]}
                        onClick={() => {
                          setActiveDropdown(null);
                          setShowMobileMenu(false);
                        }}
                      >
                        <li className={styles["dropdown-item"]}>{sub.label}</li>
                      </Link>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link href={`/${item.slug}`} className={styles["nav-button"]}>
                {item.label}
              </Link>
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
            aria-label="Toggle Search"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShowSearch((prev) => !prev);
              }
            }}
          >
            <FiSearch />
          </span>
        </div>

        <div
          className={styles.menuToggle}
          onClick={() => setShowMobileMenu((prev) => !prev)}
        >
          <HiOutlineMenuAlt3
            className={`${styles.icon} ${
              showMobileMenu ? styles.iconHidden : styles.iconVisible
            }`}
          />
          <HiOutlineX
            className={`${styles.icon} ${
              showMobileMenu ? styles.iconVisible : styles.iconHidden
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
