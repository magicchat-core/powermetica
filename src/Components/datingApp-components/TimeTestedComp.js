import styles from "./TimeTested.module.css";


const cardsData = [
  {
    number: "01",
    heading: "Requirement Gathering",
    description:
      "Understanding your vision, business goals, and target audience to create a tailored development roadmap.",
  },
  {
    number: "02",
    heading: "Strategy Planning",
    description:
      "Defining the app’s features, technology stack, and monetization strategies to align with business objectives.",
  },
  {
    number: "03",
    heading: "Building Prototypes & Wireframes",
    description:
      "Creating an intuitive UI/UX design with interactive prototypes to visualize the app’s functionality before development.",
  },
  {
    number: "04",
    heading: "Launch & Post-Launch Support",
    description:
      "Deploying the app on app stores, followed by ongoing maintenance and updates to keep your app competitive.",
  },
  {
    number: "05",
    heading: "Testing & Quality Assurance",
    description:
      "Conducting rigorous testing to eliminate bugs, enhance security, and ensure a flawless user experience across devices.",
  },
  {
    number: "06",
    heading: "Development Process",
    description:
      "Our expert developers build the app using the latest technologies while ensuring scalability and performance optimization.",
  },

];

export default function TimeTestedComp() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>Time-Tested Dating App Development Process We Follow </h2>
        <p className={styles.description}>
          We create highly scalable and innovative dating app development
          solutions designed to deliver a user-friendly and engaging experience.
          Our structured approach ensures a seamless and efficient development
          process.
        </p>
      </div>

      <div className={styles.cardWrap}>
        <div className={styles.verticalDivider1}></div>
        <div className={styles.verticalDivider2}></div>

        <div className={styles.row}>
          {cardsData.slice(0, 3).map(({ number, heading, description }) => (
            <div key={number} className={styles.box}>
              <div className={styles["card-number"]}>
                <span>{number[0]}</span>
                <span>{number[1]}</span>
              </div>
              <h3 className={styles.cardheading}>{heading}</h3>
              <div className={styles.cardDesc}>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.horizontaldivider}></div>

        <div className={styles.secondRow}>
          {cardsData.slice(3, 6).map(({ number, heading, description }) => (
            <div key={number} className={styles.box}>
              <div className={styles["card-number"]}>
                <span>{number[0]}</span>
                <span>{number[1]}</span>
              </div>
              <h3 className={styles.cardheading}>{heading}</h3>
              <div className={styles.cardDesc}>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
