import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ListCategories from '../../components/ListCategories/ListCategories';
import SectionInfo from '../../components/SectionInfo/SectionInfo';
import Footer from '../../components/Footer/Footer';
import data from '../../products.json';
import Product from '../../components/Product/Product';
import styles from './ProductDetailPage.module.css';

function ProductDetailPage() {
  const { productSlug } = useParams();
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    setProductDetail(data.products.filter((item) => item.slug === productSlug));
  }, [productSlug]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.sectionProductDetail}>
          <Link to="/" className={styles.linkGoBack}>
            Go Back
          </Link>
          {productDetail.map((product) => (
            <Product key={product.id} product={product} detail />
          ))}
        </section>
        <section className={styles.sectionCategories}>
          <ListCategories />
        </section>
        <SectionInfo />
      </main>
      <Footer />
    </>
  );
}

export default ProductDetailPage;
