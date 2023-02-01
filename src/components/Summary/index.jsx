import useCart from '../../hooks/useCart';
import ProductCart from '../ProductCart/ProductCart';
import styles from './Summary.module.css';

function Summary() {
  const { cart, totalCart } = useCart();

  return (
    <aside className={styles.containerSummary}>
      <h2 className={styles.title}>Summary</h2>

      {cart.length > 0
        ? (
          <ul className={styles.listSummary}>
            {cart.map((item) => (
              <ProductCart key={item.id} item={item} summary />
            ))}
          </ul>
        ) : (
          <p className={styles.notCartItems}>No items in cart</p>
        )}

      <p className={styles.summaryTotal}>
        Total
        {' '}
        <span>{`$ ${totalCart}`}</span>
      </p>

      <p className={styles.summaryShipping}>
        Shipping
        {' '}
        <span>$ 50</span>
      </p>

      <p className={styles.summaryVat}>
        Vat (included)
        {' '}
        <span>{`$ ${((totalCart * 20) / 100).toFixed(0)}`}</span>
      </p>

      <p className={styles.summaryGrandTotal}>
        Grand total
        {' '}
        <span>{`$ ${(((totalCart * 20) / 100) + totalCart).toFixed(0)}`}</span>
      </p>

      <button
        type="submit"
        className={styles.buttonPay}
      >
        Continue & pay
      </button>
    </aside>
  );
}

export default Summary;
