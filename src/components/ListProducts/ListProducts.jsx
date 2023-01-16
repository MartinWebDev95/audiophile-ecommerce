import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../products.json';
import styles from './ListProducts.module.css';

function ListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.products.filter((product) => product.category === 'headphones'));
  }, []);

  return (
    <section className={styles.sectionListProducts}>
      {products.map((product) => (
        <div className={styles.containerProduct} key={product.id}>
          <picture>
            <source media="(min-width: 1000px)" srcSet={product.categoryImage.desktop} />
            <source media="(min-width: 480px)" srcSet={product.categoryImage.tablet} />
            <img srcSet={product.categoryImage.mobile} alt={product.shortName} />
          </picture>
          <div>
            {product.new && (<p className={styles.newProduct}>New Product</p>)}
            <h2>
              {product.name}
            </h2>
            <p className={styles.productDescription}>
              {product.description}
            </p>
            <div className={styles.productLink}>
              <Link to="/">
                See Product
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ListProducts;
