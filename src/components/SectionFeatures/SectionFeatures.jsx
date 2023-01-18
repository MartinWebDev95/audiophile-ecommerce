import styles from './SectionFeatures.module.css';

function SectionFeatures({ features = '', includedItems = [] }) {
  return (
    <section className={styles.sectionFeatures}>
      <div>
        <h3>
          Features
        </h3>
        <p className={styles.features}>
          {features}
        </p>
      </div>
      <div>
        <h3>
          In the box
        </h3>
        <ul className={styles.listItems}>
          {includedItems.map(({ quantity, item }) => (
            <li key={item}>
              <span className={styles.itemNumber}>{`${quantity}x`}</span>
              <span className={styles.itemName}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SectionFeatures;
