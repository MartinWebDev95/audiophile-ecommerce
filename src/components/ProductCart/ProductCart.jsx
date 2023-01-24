import { useEffect, useRef } from 'react';
import useCart from '../../hooks/useCart';
import useQuantityInput from '../../hooks/useQuantityInput';
import QuantityInput from '../QuantityInput/QuantityInput';
import styles from './ProductCart.module.css';

function ProductCart({
  item, idProduct, totalCart, setTotalCart,
}) {
  const { cart, setCart } = useCart();

  const {
    quantity,
    handleDecrement,
    handleIncrement,
  } = useQuantityInput(item.quantity);

  const ref = useRef(quantity);

  useEffect(() => {
    if (ref.current < quantity) {
      setTotalCart(totalCart + item.price);
    } else if (ref.current > quantity) {
      setTotalCart(totalCart - item.price);
    } else {
      setTotalCart(totalCart + (item.price * quantity));
    }

    ref.current = quantity;
  }, [quantity]);

  const handleDeleteItemFromCart = () => {
    setCart(cart.filter((product) => product.id !== idProduct));
    setTotalCart(totalCart - (item.price * quantity));
  };

  return (
    <li className={styles.cartItem}>
      <div className={styles.containerCartItem}>
        <div className={styles.infoCartItem}>
          <button
            type="button"
            className={styles.containerCartImage}
            onClick={handleDeleteItemFromCart}
          >
            <img src={item.cartImage} alt={item.shortName} />
            <div className={styles.deleteCartImage}>
              <span />
              <span />
            </div>
          </button>

          <div className={styles.detailCartItem}>
            <p className={styles.nameCartItem}>{item.shortName}</p>
            <p className={styles.priceCartItem}>{`$ ${item.price}`}</p>
          </div>
        </div>

        <QuantityInput
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          quantity={quantity}
        />
      </div>
    </li>
  );
}

export default ProductCart;
