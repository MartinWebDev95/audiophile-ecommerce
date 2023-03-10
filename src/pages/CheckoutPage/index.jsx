import { useState } from 'react';
import GoBackButton from '../../components/GoBackButton';
import styles from './CheckoutPage.module.css';
import Summary from '../../components/Summary';
import useForm from '../../hooks/useForm';
import Checkout from '../../components/Checkout';
import ResumeModal from '../../components/ResumeModal';

function CheckoutPage() {
  const [openResume, setOpenResume] = useState(true);

  const {
    formData,
    formErrors,
    inputFocus,
    paymentMethod,
    handleSubmit,
    handleChangeInput,
    handleFocusInput,
    handleBlurInput,
  } = useForm({ setOpenResume });

  return (
    <main className={styles.main}>
      <section className={styles.sectionGoBack}>
        <GoBackButton />
      </section>

      <section className={styles.container}>
        <form action="#" className={styles.form} onSubmit={handleSubmit}>
          <Checkout
            formData={formData}
            formErrors={formErrors}
            inputFocus={inputFocus}
            paymentMethod={paymentMethod}
            handleChangeInput={handleChangeInput}
            handleFocusInput={handleFocusInput}
            handleBlurInput={handleBlurInput}
          />

          <Summary formData={formData} formErrors={formErrors} />
        </form>
      </section>

      <ResumeModal openResume={openResume} setOpenResume={setOpenResume} />
    </main>
  );
}

export default CheckoutPage;
