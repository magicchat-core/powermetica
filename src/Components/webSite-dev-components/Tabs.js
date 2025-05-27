import { useState } from "react";
import styles from "./Tabs.module.css";
import { MdNavigateNext } from "react-icons/md";



export default function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={styles.tabsContainer}>
        <h2>Our Web Development Technology Stack</h2>
        <div className={styles.tabList}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`${styles.tabButton} ${
                index === activeIndex ? styles.active : ""
              }`}
              onClick={() => setActiveIndex(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls={`tabpanel-${index}`}
              id={`tab-${index}`}
            >
              <span>{tab.label}</span>
              <MdNavigateNext style={{ marginLeft: "8px", fontSize: "26px" }} />
            </button>
          ))}
        </div>

        <div
          className={styles.tabPanel}
          role="tabpanel"
          id={`tabpanel-${activeIndex}`}
          aria-labelledby={`tab-${activeIndex}`}
        >
          {tabs[activeIndex]?.content}
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img src="/assets/icons/shap.png"/>
      </div>
    </>
  );
}
