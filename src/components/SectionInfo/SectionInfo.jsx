import styles from './SectionInfo.module.css';

function SectionInfo() {
  return (
    <section className={styles.sectionInfo}>
      <div className={styles.containerSectionInfo}>
        <picture>
          <source media="(min-width: 1000px)" srcSet="./images/shared/desktop/image-best-gear.jpg" />
          <source media="(min-width: 480px)" srcSet="./images/shared/tablet/image-best-gear.jpg" />
          <img src="./images/shared/mobile/image-best-gear.jpg" alt="Best Gear" />
        </picture>
        <div>
          <h3>
            Bringing you the
            {' '}
            <span>best</span>
            {' '}
            audio gear
          </h3>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio accessories.
            We have a large showroom and luxury demonstration rooms available for
            you to browse and experience a wide range of our products. Stop by our
            store to meet some of the fantastic people who make Audiophile the best
            place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionInfo;
