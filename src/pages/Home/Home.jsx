import HeroSection from '../../components/HeroSection/HeroSection';
import ListCategories from '../../components/ListCategories/ListCategories';
import SectionProducts from '../../components/SectionProducts/SectionProducts';
import styles from './Home.module.css';
import SectionInfo from '../../components/SectionInfo/SectionInfo';

function Home() {
  return (
    <main>
      <HeroSection />
      <section className={styles.sectionCategories}>
        <ListCategories />
      </section>
      <SectionProducts />
      <SectionInfo />
    </main>
  );
}

export default Home;
