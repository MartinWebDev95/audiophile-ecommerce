import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroInfo}>
          <p className={styles.infoSubtitle}>
            New Product
          </p>
          <h1 className={styles.infoTitle}>XX99 Mark II Headphones</h1>
          <p className={styles.infoDescription}>
            Experience natural, lifelike audio and exceptional
            build quality made for the passionate music enthusiast.
          </p>
          <div className={styles.infoLink}>
            <Link to="/">
              See Product
            </Link>
          </div>
        </div>
        <div className={styles.heroImage} />
      </div>
    </section>
  );
}

export default HeroSection;
