import styles from "./TechnCards.module.css";
import techCardsData from "./techCardsData";

export default function TechnologyCards() {
  return (
    <section className={styles.techSection}>
      <h2 className={styles.heading}>
        Technologies & Frameworks Our Developers Skilled In
      </h2>
      <p className={styles.text}>
        Technologies & Frameworks Our Developers Are Skilled In At Magic Chat,
        our experienced developers are proficient in a wide range of
        technologies and frameworks, including .NET, MSSQL, Node.js, Flutter,
        Swift, and React. We harness the power of these tools to build scalable,
        high-performance applications tailored to your business needs. Trust our
        expertise to deliver innovative solutions that drive success.
      </p>

      <div className={styles.cardGrid}>
      {techCardsData.map((card, index) => (
  <div
    className={`${styles.card} ${
      index % 2 !== 0 ? styles.cardReverse : ""
    }`}
    key={index}
  >
    <div className={styles.contnet}>
      <h3 className={styles.title}>{card.title}</h3>
      <p className={styles.description}>{card.description}</p>
      <div className={styles.techList}>
        {card.technologies.map((tech, idx) => (
          <div key={idx} className={styles.techItem} title={tech.name}>
            <img
              src={tech.icon}
              alt={tech.name}
              className={styles.techIcon}
            />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>

    <div className={styles.image}>
      <img
        src={card.svgSrc}
        alt={`${card.title} illustration`}
        className={styles.cardIcon}
      />
    </div>
  </div>
))}

      </div>
    </section>
  );
}
