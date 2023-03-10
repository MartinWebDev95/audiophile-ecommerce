import { useParams } from 'react-router-dom';
import ListCategories from '../../components/ListCategories/ListCategories';
import SectionInfo from '../../components/SectionInfo/SectionInfo';
import data from '../../products.json';
import Product from '../../components/Product/Product';
import styles from './ProductDetailPage.module.css';
import SectionFeatures from '../../components/SectionFeatures/SectionFeatures';
import SectionImages from '../../components/SectionImages/SectionImages';
import ListSuggestedProducts from '../../components/ListSuggestedProducts/ListSuggestedProducts';
import GoBackButton from '../../components/GoBackButton';
import useProduct from '../../hooks/useProduct';

function ProductDetailPage() {
  const { productSlug } = useParams();
  const { productDetail } = useProduct(data, productSlug);

  return (
    <main className={styles.main}>
      <section className={styles.sectionProductDetail}>
        <GoBackButton />

        {productDetail.map((product) => (
          <Product key={product.id} product={product} detail />
        ))}
      </section>

      <SectionFeatures
        key={productDetail[0]?.id}
        features={productDetail[0]?.features}
        includedItems={productDetail[0]?.includedItems}
      />

      <SectionImages gallery={productDetail[0]?.gallery} />

      <ListSuggestedProducts suggestedProducts={productDetail[0]?.others} />

      <section className={styles.sectionCategories}>
        <ListCategories />
      </section>

      <SectionInfo />
    </main>
  );
}

export default ProductDetailPage;
