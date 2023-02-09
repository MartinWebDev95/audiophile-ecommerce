import { useLocation } from 'react-router-dom';
import ListCategories from '../../components/ListCategories/ListCategories';
import ListProducts from '../../components/ListProducts/ListProducts';
import SectionInfo from '../../components/SectionInfo/SectionInfo';
import styles from './CategoryPage.module.css';

function CategoryPage() {
  const { pathname } = useLocation();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{pathname.substring(1).toUpperCase()}</h1>
      <ListProducts category={pathname.substring(1)} />
      <section className={styles.sectionCategories}>
        <ListCategories />
      </section>
      <SectionInfo />
    </main>
  );
}

export default CategoryPage;
