import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import ListCategories from '../../components/ListCategories/ListCategories';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <section className={styles.sectionCategories}>
          <ListCategories />
        </section>
      </main>
    </>
  );
}

export default Home;
