import styles from "./Card.module.css";
import { RiSparkling2Fill } from "react-icons/ri";


export default function Card({ title, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <RiSparkling2Fill className={styles.icon}/>
      </div>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
