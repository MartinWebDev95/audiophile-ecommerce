import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ListCategories from '../../components/ListCategories/ListCategories';
import ListProducts from '../../components/ListProducts/ListProducts';
import SectionInfo from '../../components/SectionInfo/SectionInfo';
import styles from './CategoryPage.module.css';

function CategoryPage() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>{pathname.substring(1).toUpperCase()}</h1>
        <ListProducts category={pathname.substring(1)} />
        <section className={styles.sectionCategories}>
          <ListCategories />
        </section>
        <SectionInfo />
      </main>
      <Footer />
    </>
  );
}

export default CategoryPage;
