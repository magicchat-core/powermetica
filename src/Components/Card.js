import styles from "./Card.module.css";
import VectorShape from "../../public/assets/icons/vectorShape.svg";

console.log("VectorShape", VectorShape);

export default function Card({ title, text, svgSrc, rotate = 0, colorFilter }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <div
          className={styles.iconBackground}
          style={{
            transform: `rotate(${rotate}deg)`,
            backgroundImage: `url(${VectorShape.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            filter: colorFilter,
          }}
        />

        <img src={svgSrc} alt={title} className={styles.icon} />
      </div>

      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
