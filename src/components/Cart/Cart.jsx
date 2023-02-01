/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import ProductCart from '../ProductCart/ProductCart';
import styles from './Cart.module.css';

function Cart({ openCart, setOpenCart }) {
  const {
    cart, setCart, totalCart, setTotalCart,
  } = useCart();

  const handleClick = (e) => {
    if (!e.target.getAttribute('aria-hidden')) return;

    document.body.style.overflow = 'auto';
    setOpenCart(true);
  };

  const handleRemoveAll = () => {
    setCart([]);
    setTotalCart(0);
    localStorage.setItem('cart', JSON.stringify([]));
    localStorage.setItem('totalCart', JSON.stringify(0));
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
                onClick={handleRemoveAll}
              >
                Remove all
              </button>
            </section>

            <section className={styles.containerCartList}>
              <ul className={styles.listCartItem}>
                {cart.map((item) => (
                  <ProductCart
                    key={item.id}
                    item={item}
                  />
                ))}
              </ul>
            </section>

            <section className={styles.containerCheckout}>
              <div className={styles.cartTotalPrice}>
                <p>Total:</p>
                <p>
                  {`$ ${totalCart}`}
                </p>
              </div>

              <Link
                to="/checkout"
                className={styles.linkCheckout}
              >
                Checkout
              </Link>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
