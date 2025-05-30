import styles from "./ChooesTech.module.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const benefitsList = [
  {
    title: "Full-Stack Web Development",
    text: "(React, Node.js, Django, Laravel)",
  },
  {
    title: "Cross-Platform Mobile Apps",
    text: "(Flutter, React Native, Swift, Kotlin)",
  },
  {
    title: "Cloud & DevOps",
    text: "(AWS, Azure, Docker, Kubernetes)",
  },
  {
    title: "AI & Machine Learning",
    text: "(Python, TensorFlow, OpenAI)",
  },
  {
    title: "Security",
    text: "Cybersecurity & Scalable Architecture",
  },
];

export default function ChooesTechnology() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles["custom-dating-list"]}>
          <div>
            <img src="/assets/icons/helpIc.svg" />
          </div>
          <div className={styles.customList}>
            <h2>Technology That Powers Innovation</h2>
            <p>
              At <strong>Magic Chat</strong>, we leverage the latest
              technologies to craft intelligent, scalable, and high-performance
              solutions. From robust web platforms to AI-powered mobile
              applications, our tech stack is built to deliver excellence and
              future-ready digital experiences.
            </p>

            <ul className={styles.benefitsList}>
              {benefitsList.map((item, index) => (
                <li key={index}>
                  <IoMdCheckmarkCircleOutline />
                  <span>
                    <strong>{item.title}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
