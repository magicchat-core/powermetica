"use client";

import React from "react";
import styles from "../technology.module.css";

const MobileTechnology = () => {
  const technologies = [
    {
      category: "Native iOS Development",
      items: ["Swift", "Objective-C", "SwiftUI", "UIKit", "Xcode", "CocoaPods"]
    },
    {
      category: "Native Android Development",
      items: ["Kotlin", "Java", "Jetpack Compose", "Android Studio", "Gradle"]
    },
    {
      category: "Cross-Platform Frameworks",
      items: ["React Native", "Flutter", "Ionic", "Xamarin", "NativeScript"]
    },
    {
      category: "Mobile Backend Services",
      items: ["Firebase", "AWS Amplify", "AppWrite", "Supabase", "Back4App"]
    },
    {
      category: "Testing & Debugging",
      items: ["Appium", "Detox", "Espresso", "XCUITest", "Sentry"]
    },
    {
      category: "App Store Deployment",
      items: ["Apple App Store", "Google Play Store", "TestFlight", "Play Console"]
    }
  ];

  return (
    <div style={{ backgroundColor: "#121723", padding: "2rem" }}>
      <div className={styles.techPage}>
        <h1>Mobile Technologies</h1>
        <p className={styles.subtitle}>
          We develop high-performance mobile applications for iOS and Android 
          using both native and cross-platform technologies.
        </p>

        <div className={styles.techGrid}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techCategory}>
              <h2>{tech.category}</h2>
              <div className={styles.techItems}>
                {tech.items.map((item, idx) => (
                  <span key={idx} className={styles.techItem}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.expertiseSection}>
          <h2>Our Mobile Expertise</h2>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseItem}>
              <h3>Native App Development</h3>
              <p>Building high-performance applications using platform-specific technologies</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>Cross-Platform Solutions</h3>
              <p>Creating apps that work on both iOS and Android with shared codebase</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>UI/UX for Mobile</h3>
              <p>Designing intuitive mobile interfaces following platform guidelines</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>App Store Optimization</h3>
              <p>Preparing and optimizing apps for successful store deployment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTechnology;
