/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import useQuantityInput from '../../hooks/useQuantityInput';
import QuantityInput from '../QuantityInput/QuantityInput';
import styles from './Cart.module.css';

function Cart({ openCart, setOpenCart }) {
  const { quantity, handleIncrement, handleDecrement } = useQuantityInput();

  const handleClick = (e) => {
    if (!e.target.getAttribute('aria-hidden')) return;

    setOpenCart(true);
  };

  return (
    <div
      className={styles.cartBackground}
      aria-hidden={openCart}
      onClick={handleClick}
    >
      <div className={styles.cartContainer}>
        {/* <h2 className={styles.cartTitleEmpty}>Your cart is empty</h2>
        <img className={styles.cartImageEmpty} src="/images/cart/empty-cart.png" alt="Cart" /> */}
        <section className={styles.cartHeader}>
          <p className={styles.quantityCart}>Cart (1)</p>
          <button type="button" className={styles.cartRemoveAll}>Remove all</button>
        </section>
        <section className={styles.containerCartList}>
          <ul className={styles.listCartItem}>
            <li className={styles.cartItem}>
              <div className={styles.containerCartItem}>
                <div className={styles.infoCartItem}>
                  <img src="/images/cart/image-yx1-earphones.jpg" alt="Cosa" />
                  <div className={styles.detailCartItem}>
                    <p className={styles.nameCartItem}>Nombre producto</p>
                    <p className={styles.priceCartItem}>$ 2,999</p>
                  </div>
                </div>
                <QuantityInput
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                  quantity={quantity}
                />
              </div>
            </li>
          </ul>
        </section>
        <section className={styles.containerCheckout}>
          <div className={styles.cartTotalPrice}>
            <p>Total:</p>
            <p>$ 5,320</p>
          </div>
          <button
            type="button"
            className={styles.buttonCheckout}
          >
            Checkout
          </button>
        </section>
      </div>
    </div>
  );
}

export default Cart;
