import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ListCategories from '../../components/ListCategories/ListCategories';
import ListProducts from '../../components/ListProducts/ListProducts';
import SectionInfo from '../../components/SectionInfo/SectionInfo';
import styles from './Headphones.module.css';

function Headphones() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Headphones</h1>
        <ListProducts />
        <section className={styles.sectionCategories}>
          <ListCategories />
        </section>
        <SectionInfo />
      </main>
      <Footer />
    </>
  );
}

export default Headphones;
