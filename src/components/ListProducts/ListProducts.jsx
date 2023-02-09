import useProduct from '../../hooks/useProduct';
import data from '../../products.json';
import Product from '../Product/Product';
import styles from './ListProducts.module.css';

function ListProducts({ category = '' }) {
  const { products } = useProduct(data, category);

  return (
    <section className={styles.sectionListProducts}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ListProducts;
