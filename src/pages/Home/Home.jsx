import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import ListCategories from '../../components/ListCategories/ListCategories';
import SectionProducts from '../../components/SectionProducts/SectionProducts';
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
        <SectionProducts />
      </main>
    </>
  );
}

export default Home;
