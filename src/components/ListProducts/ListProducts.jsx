import { useState, useEffect } from 'react';
import data from '../../products.json';
import Product from '../Product/Product';
import styles from './ListProducts.module.css';

function ListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.products.filter((product) => product.category === 'headphones'));
  }, []);

  return (
    <section className={styles.sectionListProducts}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ListProducts;
