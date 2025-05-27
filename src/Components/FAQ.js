import { useState } from "react";
import styles from "./FAQ.module.css";

const PlusIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line x1="10" y1="4" x2="10" y2="16" stroke="#9AF50A" strokeWidth="2" />
    <line x1="4" y1="10" x2="16" y2="10" stroke="#9AF50A" strokeWidth="2" />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line x1="4" y1="10" x2="16" y2="10" stroke="#9AF50A" strokeWidth="2" />
  </svg>
);

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faq_wrap}>
     <div className={styles.imageWrapper}>
        <img src="/assets/icons/helpIc.svg"/>
      </div>
      <div className={styles.faqContainer}>
        <p>FAQs Based on Web Development Services</p>
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
            >
              <button
                className={styles.question}
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                {item.question}
                <span className={styles.icon}>
                  {isOpen ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={styles.answer}
                style={{
                  maxHeight: isOpen ? "500px" : "0",
                  padding: isOpen ? "10px 15px" : "0 15px",
                  marginTop: isOpen ? "12px" : "0",
                }}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
