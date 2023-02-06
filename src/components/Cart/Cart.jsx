/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import ProductCart from '../ProductCart/ProductCart';
import styles from './Cart.module.css';

function Cart({ openCart, setOpenCart }) {
  const { cart, setCart } = useCart();

  const handleClick = (e) => {
    if (!e.target.getAttribute('aria-hidden')) return;

    document.body.style.overflow = 'auto';
    setOpenCart(true);
  };

  const handleRemoveAll = () => {
    setCart({
      products: [],
      totalPriceCart: 0,
    });

    localStorage.setItem('cart', JSON.stringify({
      products: [],
      totalPriceCart: 0,
    }));
  };

  return (
    <div
      className={styles.cartBackground}
      aria-hidden={openCart}
      onClick={handleClick}
    >
      <div className={styles.cartContainer}>
        {cart.products?.length === 0 ? (
          <div className={styles.cartContainerEmpty}>
            <h2 className={styles.cartTitleEmpty}>Your cart is empty</h2>
            <img className={styles.cartImageEmpty} src="/images/cart/empty-cart.png" alt="Empty Cart" loading="lazy" />
          </div>
        ) : (
          <>
            <section className={styles.cartHeader}>
              <p className={styles.quantityCart}>
                Cart (
                {`${cart.products?.length}`}
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
                {cart.products?.map((item) => (
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
                  {`$ ${cart?.totalPriceCart.toLocaleString('en-US')}`}
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
