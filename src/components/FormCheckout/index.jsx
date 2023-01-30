import styles from './FormCheckout.module.css';

function FormCheckout() {
  return (
    <div className={styles.containerForm}>
      <h1 className={styles.title}>Checkout</h1>

      <form action="#" className={styles.form}>
        <fieldset className={styles.fieldsetBilling}>
          <legend className={styles.legend}>Billing details</legend>

          <div className={styles.containerInput}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Alexei Ward" />
          </div>

          <div className={styles.containerInput}>
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" id="email" placeholder="alexei@mail.com" />
          </div>

          <div className={styles.containerInput}>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="phone" id="phone" placeholder="+1 202-555-0136" />
          </div>
        </fieldset>

        <fieldset className={styles.fieldsetShipping}>
          <legend className={styles.legend}>Shipping info</legend>

          <div className={`${styles.containerInput} ${styles.address}`}>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" placeholder="1137 Williams Avenue" />
          </div>

          <div className={styles.containerInput}>
            <label htmlFor="zipCode">ZIP Code</label>
            <input type="text" name="zipCode" id="zipCode" placeholder="10001" />
          </div>

          <div className={styles.containerInput}>
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" placeholder="New York" />
          </div>

          <div className={styles.containerInput}>
            <label htmlFor="country">Country</label>
            <input type="text" name="country" id="country" placeholder="United States" />
          </div>
        </fieldset>

        <fieldset className={styles.fieldsetPayment}>
          <legend className={styles.legend}>Payment details</legend>

          <p>Payment Method</p>

          <div className={styles.containerInputsRadio}>
            <div className={styles.inputRadio}>
              <label htmlFor="e-money">
                <input type="radio" id="e-money" name="payment" value="e-money" checked readOnly />
                <span>
                  e-Money
                </span>
              </label>
            </div>

            <div className={styles.inputRadio}>
              <label htmlFor="cash">
                <input type="radio" id="cash" name="payment" value="cash" />
                <span>
                  Cash on Delivery
                </span>
              </label>
            </div>
          </div>

          <div className={styles.containerInput}>
            <label htmlFor="e-moneyNumber">e-Money Number</label>
            <input type="text" name="e-moneyNumber" id="e-moneyNumber" placeholder="238521993" />
          </div>

          <div className={styles.containerInput}>
            <label htmlFor="e-moneyPin">e-Money PIN</label>
            <input type="text" name="e-moneyPin" id="e-moneyPin" placeholder="6891" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default FormCheckout;
