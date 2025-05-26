'use client';

import styles from './Banner.module.css';
import Image from 'next/image';



export default function Banner({
  title,
  description,
  image1,
  image2,
  buttonText
}) {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
  <div>
      <section className={styles.banner}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <button className={styles.button} onClick={handleClick}>
          {buttonText}
        </button>
      </div>

      <div className={styles.imageSection}>
        {image1 && (
          <div className={styles.imageWrapper}>
            <Image src={image1} alt="First image" width={400} height={300} className={styles.image} />
          </div>
        )}
        {image2 && (
          <div className={styles.imageWrapper}>
            <Image src={image2} alt="Second image" width={400} height={300} className={styles.image} />
          </div>
        )}
      </div>
    </section>

    
  </div>
  );
}
