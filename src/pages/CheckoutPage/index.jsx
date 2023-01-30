import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GoBackButton from '../../components/GoBackButton';
import styles from './CheckoutPage.module.css';
import FormCheckout from '../../components/FormCheckout';
import Summary from '../../components/Summary';

function CheckoutPage() {
  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles.sectionGoBack}>
          <GoBackButton />
        </section>

        <section className={styles.container}>
          <FormCheckout />

          <Summary />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CheckoutPage;
