import styles from './Checkout.module.css';

function Checkout({
  formData,
  formErrors,
  inputFocus,
  paymentMethod,
  handleChangeInput,
  handleFocusInput,
  handleBlurInput,
}) {
  return (
    <div className={styles.containerCheckout}>
      <h1 className={styles.title}>Checkout</h1>

      <fieldset className={styles.fieldsetBilling}>
        <legend className={styles.legend}>Billing details</legend>

        <div className={styles.containerInput}>
          <label htmlFor="name">
            Name

            {(inputFocus.name && formErrors.name !== '')
              && (
              <span>{formErrors.name}</span>
              )}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Alexei Ward"
            value={formData.name}
            onChange={handleChangeInput}
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
          />
        </div>

        <div className={styles.containerInput}>
          <label htmlFor="email">
            Email Address

            {(inputFocus.email && formErrors.email !== '')
              && (
              <span>{formErrors.email}</span>
              )}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="alexei@mail.com"
            value={formData.email}
            onChange={handleChangeInput}
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
          />
        </div>

        <div className={styles.containerInput}>
          <label htmlFor="phone">
            Phone Number

            {(inputFocus.phone && formErrors.phone !== '')
              && (
              <span>{formErrors.phone}</span>
              )}
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="+1 202-555-0136"
            value={formData.phone}
            onChange={handleChangeInput}
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
          />
        </div>
      </fieldset>

      <fieldset className={styles.fieldsetShipping}>
        <legend className={styles.legend}>Shipping info</legend>

        <div className={`${styles.containerInput} ${styles.address}`}>
          <label htmlFor="address">
            Address

            {(inputFocus.address && formErrors.address !== '')
              && (
              <span>{formErrors.address}</span>
              )}
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="1137 Williams Avenue"
            value={formData.address}
            onChange={handleChangeInput}
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
          />
        </div>

        <div className={styles.containerInput}>
          <label htmlFor="zipCode">
            ZIP Code

            {(inputFocus.zipCode && formErrors.zipCode !== '')
              && (
                <span>{formErrors.zipCode}</span>
              )}
          </label>
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            placeholder="10001"
            value={formData.zipCode}
            onChange={handleChangeInput}
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
          />
        </div>

        <div className={styles.containerInput}>
          <label htmlFor="city">
            City

            {(inputFocus.city && formErrors.city !== '')
              && (
                <span>{formErrors.city}</span>
              )}
          </label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="New York"
            value={formData.city}
            onChange={handleChangeInput}
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
          />
        </div>

        <div className={styles.containerInput}>
          <label htmlFor="country">
            Country

            {(inputFocus.country && formErrors.country !== '')
              && (
              <span>{formErrors.country}</span>
              )}
          </label>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="United States"
            value={formData.country}
            onChange={handleChangeInput}
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
          />
        </div>
      </fieldset>

      <fieldset className={styles.fieldsetPayment}>
        <legend className={styles.legend}>Payment details</legend>

        <p>Payment Method</p>

        <div className={styles.containerInputsRadio}>
          <div className={styles.inputRadio}>
            <label htmlFor="e-money">
              <input
                type="radio"
                id="e-money"
                name="paymentMethod"
                value="e-money"
                onChange={handleChangeInput}
                checked={paymentMethod === 'e-money'}
              />
              <span>
                e-Money
              </span>
            </label>
          </div>

          <div className={styles.inputRadio}>
            <label htmlFor="cash">
              <input
                type="radio"
                id="cash"
                name="paymentMethod"
                value="cash"
                onChange={handleChangeInput}
                checked={paymentMethod === 'cash'}
              />
              <span>
                Cash on Delivery
              </span>
            </label>
          </div>
        </div>

        {paymentMethod === 'e-money' ? (
          <>
            <div className={styles.containerInput}>
              <label htmlFor="e-moneyNumber">
                e-Money Number

                {(inputFocus.eMoneyNumber && formErrors.eMoneyNumber !== '')
                 && (
                 <span>{formErrors.eMoneyNumber}</span>
                 )}
              </label>
              <input
                type="text"
                name="eMoneyNumber"
                id="e-moneyNumber"
                placeholder="238521993"
                value={formData.eMoneyNumber}
                onChange={handleChangeInput}
                onFocus={handleFocusInput}
                onBlur={handleBlurInput}
              />
            </div>

            <div className={styles.containerInput}>
              <label htmlFor="e-moneyPin">
                e-Money PIN

                {(inputFocus.eMoneyPin && formErrors.eMoneyPin !== '')
                  && (
                  <span>{formErrors.eMoneyPin}</span>
                  )}
              </label>
              <input
                type="text"
                name="eMoneyPin"
                id="e-moneyPin"
                placeholder="6891"
                value={formData.eMoneyPin}
                onChange={handleChangeInput}
                onFocus={handleFocusInput}
                onBlur={handleBlurInput}
              />
            </div>
          </>
        ) : (
          <div className={styles.containerCashOnDelivery}>
            <img src="/images/checkout/icon-cash-on-delivery.svg" alt="Cash On Delivery" />
            <p>
              The ‘Cash on Delivery’ option enables you to pay in
              cash when our delivery courier arrives at your residence.
              Just make sure your address is correct so that your order will
              not be cancelled.
            </p>
          </div>
        )}

      </fieldset>
    </div>
  );
}

export default Checkout;
