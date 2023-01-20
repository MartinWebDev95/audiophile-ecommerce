/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import useCart from '../../hooks/useCart';
import useQuantityInput from '../../hooks/useQuantityInput';
import QuantityInput from '../QuantityInput/QuantityInput';
import styles from './Cart.module.css';

function Cart({ openCart, setOpenCart }) {
  const { cart, setCart } = useCart();
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
        {cart.length === 0 ? (
          <div className={styles.cartContainerEmpty}>
            <h2 className={styles.cartTitleEmpty}>Your cart is empty</h2>
            <img className={styles.cartImageEmpty} src="/images/cart/empty-cart.png" alt="Empty Cart" />
          </div>
        ) : (
          <>
            <section className={styles.cartHeader}>
              <p className={styles.quantityCart}>
                Cart (
                {`${cart.length}`}
                )
              </p>

              <button
                type="button"
                className={styles.cartRemoveAll}
                onClick={() => setCart([])}
              >
                Remove all
              </button>
            </section>

            <section className={styles.containerCartList}>
              <ul className={styles.listCartItem}>
                {cart.map((item) => (
                  <li key={item.id} className={styles.cartItem}>
                    <div className={styles.containerCartItem}>
                      <div className={styles.infoCartItem}>
                        <img src={item.cartImage} alt={item.shortName} />

                        <div className={styles.detailCartItem}>
                          <p className={styles.nameCartItem}>{item.shortName}</p>
                          <p className={styles.priceCartItem}>{`$ ${item.price}`}</p>
                        </div>
                      </div>

                      <QuantityInput
                        handleDecrement={handleDecrement}
                        handleIncrement={handleIncrement}
                        quantity={item.quantity}
                      />
                    </div>
                  </li>
                ))}
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
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
