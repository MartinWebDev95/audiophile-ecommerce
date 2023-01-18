import { Link } from 'react-router-dom';
import styles from './ListSuggestedProducts.module.css';

function ListSuggestedProducts({ suggestedProducts = [] }) {
  return (
    <section className={styles.sectionSuggestedProducts}>
      <h3 className={styles.sectionTitle}>You may also like</h3>
      <div className={styles.containerProducts}>
        {suggestedProducts.map((suggestedProduct) => (
          <div key={suggestedProduct.name} className={styles.product}>
            <picture>
              <source media="(min-width: 1000px)" srcSet={suggestedProduct.image.desktop} />
              <source media="(min-width: 760px)" srcSet={suggestedProduct.image.tablet} />
              <img src={suggestedProduct.image.mobile} alt={suggestedProduct.name} />
            </picture>

            <div className={styles.productInfo}>
              <h4>{suggestedProduct.name}</h4>

              <div className={styles.containerProductLink}>
                <Link to={`/${suggestedProduct.slug}`}>
                  See Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ListSuggestedProducts;
