import styles from "styles/hero.module.css";
import Image from "next/image";
import hitto from "images/hitto.png";

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={hitto}
            alt="hitto"
            layout="responsive"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  );
}
