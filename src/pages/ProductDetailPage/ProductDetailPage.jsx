import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ListCategories from '../../components/ListCategories/ListCategories';
import SectionInfo from '../../components/SectionInfo/SectionInfo';
import Footer from '../../components/Footer/Footer';
import data from '../../products.json';
import Product from '../../components/Product/Product';
import styles from './ProductDetailPage.module.css';
import SectionFeatures from '../../components/SectionFeatures/SectionFeatures';

function ProductDetailPage() {
  const { productSlug } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProductDetail(data.products.filter((item) => item.slug === productSlug));
  }, [productSlug]);

  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles.sectionProductDetail}>
          <button
            type="button"
            className={styles.buttonGoBack}
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>

          {productDetail.map((product) => (
            <Product key={product.id} product={product} detail />
          ))}
        </section>

        <SectionFeatures
          key={productDetail[0]?.id}
          features={productDetail[0]?.features}
          includedItems={productDetail[0]?.includedItems}
        />

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
