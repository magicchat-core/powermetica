import styles from "./CustDatingApp.module.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const benefitsList = [
  {
    title: "Rapid Market Growth:",
    text: "Global online dating market projected to hit $12.25 billion by 2030.",
  },
  {
    title: "High User Demand:",
    text: "Growing need for better, personalized matchmaking experiences.",
  },
  {
    title: "Opportunities for Innovation:",
    text: "AI, video profiles, and niche platforms are transforming dating.",
  },
  {
    title: "Scalability:",
    text: "Start small and expand as your user base grows.",
  },
  {
    title: "User Data Insights:",
    text: "Gain valuable analytics to boost engagement and retention.",
  },
];

export default function CustomDatingApp() {
  return (
    <div className={styles.wrapper}>
      <div className={styles["custom-dating-list"]}>
        <div>
          <img src="/assets/icons/helpIc.svg" />
        </div>
        <div className={styles.customList}>
          <h2>Why Invest in a Custom Dating App?</h2>
          <p>
            The online dating industry is booming, with the global market
            expected to reach $12.25 billion by 2030. Apps like Tinder, Bumble,
            and Hinge have revolutionized matchmaking, but there is still high
            demand for innovative solutions that enhance user experiences.
            Whether you're launching a niche dating app, casual dating platform,
            or AI-powered matchmaking service, we help you stand out in this
            competitive space.
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
      <div className={styles["custom-dating-banner"]}>
        <img
          src="/assets/img/customDatingbannerImg.png"
          alt="custom-dating-banner"
        />
        <div className={styles.bannerCondtent}>
          <h2>Build Your Custom Dating App with Powermetica Software</h2>
          <p>
            Let’s build the next big dating app together! Contact us today for a
            free consultation.
          </p>
          <button className={styles.talkBtn}>Talk to our Experts</button>
        </div>
      </div>
    </div>
  );
}
