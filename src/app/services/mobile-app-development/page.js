"use client";

import React from "react";
import styles from "./mobile.module.css";

const MobileAppDevelopment = () => {
  return (
    <div className={styles.pageWrap}>
      <h1 className={styles.heading}>Mobile App Development</h1>
      <p className={styles.description}>
        We craft modern, scalable, and user-friendly mobile applications.
        Whether it's iOS, Android, or cross-platform, our team ensures
        performance, design, and usability.
      </p>

      <img
        src="/assets/img/logo.png" 
        alt="Mobile app development"
        className={styles.image}
      />
    </div>
  );
};

export default MobileAppDevelopment;
