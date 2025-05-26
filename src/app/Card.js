import styles from "./Card.module.css";

export default function Card({ title, text, Icon }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <div className={styles.iconWrapper}>
        <div className={styles.iconBackground}></div>
        <div className={styles.icon}>
          <Icon />
        </div>
      </div>
    </div>
  );
}
