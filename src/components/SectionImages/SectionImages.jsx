import styles from './SectionImages.module.css';

function SectionImages({ gallery = {} }) {
  return (
    <section className={styles.sectionGallery}>
      <picture className={styles.galleryFirst}>
        <source media="(min-width: 1000px)" srcSet={gallery?.first?.desktop} />
        <source media="(min-width: 480px)" srcSet={gallery?.first?.tablet} />
        <img srcSet={gallery?.first?.mobile} alt="Gallery first" loading="lazy" />
      </picture>

      <picture className={styles.gallerySecond}>
        <source media="(min-width: 1000px)" srcSet={gallery?.second?.desktop} />
        <source media="(min-width: 480px)" srcSet={gallery?.second?.tablet} />
        <img srcSet={gallery?.second?.mobile} alt="Gallery second" loading="lazy" />
      </picture>

      <picture className={styles.galleryThird}>
        <source media="(min-width: 1000px)" srcSet={gallery?.third?.desktop} />
        <source media="(min-width: 480px)" srcSet={gallery?.third?.tablet} />
        <img srcSet={gallery?.third?.mobile} alt="Gallery third" loading="lazy" />
      </picture>
    </section>
  );
}

export default SectionImages;
