import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import ListCategories from '../../components/ListCategories/ListCategories';
import SectionProducts from '../../components/SectionProducts/SectionProducts';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';
import SectionInfo from '../../components/SectionInfo/SectionInfo';

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
        <SectionInfo />
      </main>
      <Footer />
    </>
  );
}

export default Home;
