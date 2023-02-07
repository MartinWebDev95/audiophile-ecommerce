import useCart from '../../hooks/useCart';
import ProductCart from '../ProductCart/ProductCart';
import styles from './Summary.module.css';

function Summary({ formData, formErrors }) {
  const { cart } = useCart();

  return (
    <aside className={styles.containerSummary}>
      <h2 className={styles.title}>Summary</h2>

      {cart.products?.length > 0
        ? (
          <ul className={styles.listSummary}>
            {cart.products?.map((item) => (
              <ProductCart key={item.id} item={item} summary />
            ))}
          </ul>
        ) : (
          <p className={styles.notCartItems}>No items in cart</p>
        )}

      <p className={styles.summaryTotal}>
        Total
        {' '}
        <span>{`$ ${cart?.totalPriceCart.toLocaleString('en-US')}`}</span>
      </p>

      <p className={styles.summaryShipping}>
        Shipping
        {' '}
        <span>$ 50</span>
      </p>

      <p className={styles.summaryVat}>
        Vat (included)
        {' '}
        <span>
          {`$ ${((cart.totalPriceCart * 20) / 100).toLocaleString('en-US')}`}
        </span>
      </p>

      <p className={styles.summaryGrandTotal}>
        Grand total
        {' '}
        <span>
          {`$ ${(((cart.totalPriceCart * 20) / 100) + cart.totalPriceCart).toLocaleString('en-US')}`}
        </span>
      </p>

      <button
        type="submit"
        className={styles.buttonPay}
        disabled={Object.values(formData).includes('') || Object.values(formErrors).some((item) => item !== '')}
      >
        Continue & pay
      </button>
    </aside>
  );
}

export default Summary;
