import { Link } from 'react-router-dom';
import styles from './SectionProducts.module.css';

function SectionProducts() {
  return (
    <section className={styles.sectionProducts}>
      <div className={styles.containerFirstSpeaker}>
        <div className={styles.speaker}>
          <picture>
            <source media="(min-width: 1000px)" srcSet="/images/home/desktop/image-speaker-zx9.png" />
            <source media="(min-width: 480px)" srcSet="/images/home/tablet/image-speaker-zx9.png" />
            <img src="/images/home/mobile/image-speaker-zx9.png" alt="ZX9 Speaker" loading="lazy" />
          </picture>
          <div className={styles.speakerInfo}>
            <h2>ZX9 Speaker</h2>
            <p>
              Upgrade to premium speakers that are phenomenally
              built to deliver truly remarkable sound.
            </p>
            <div className={styles.speakerLink}>
              <Link to="/speakers/zx9-speaker">
                See Product
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerSecondSpeaker}>
        <div className={styles.secondSpeaker}>
          <picture>
            <source media="(min-width: 1000px)" srcSet="/images/home/desktop/image-speaker-zx7.jpg" />
            <source media="(min-width: 480px)" srcSet="/images/home/tablet/image-speaker-zx7.jpg" />
            <img src="/images/home/mobile/image-speaker-zx7.jpg" alt="ZX7 Speaker" loading="lazy" />
          </picture>
          <div className={styles.secondSpeakerInfo}>
            <h2>ZX7 Speaker</h2>
            <div className={styles.secondSpeakerLink}>
              <Link to="/speakers/zx7-speaker">
                See Product
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerEarphones}>
        <div className={styles.earphonesImage}>
          <picture>
            <source media="(min-width: 1000px)" srcSet="/images/home/desktop/image-earphones-yx1.jpg" />
            <source media="(min-width: 480px)" srcSet="/images/home/tablet/image-earphones-yx1.jpg" />
            <img src="/images/home/mobile/image-earphones-yx1.jpg" alt="YX1 Earphones" loading="lazy" />
          </picture>
        </div>
        <div className={styles.earphonesInfo}>
          <h2>YX1 Earphones</h2>
          <div className={styles.earphonesLink}>
            <Link to="/earphones/yx1-earphones">
              See Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionProducts;
