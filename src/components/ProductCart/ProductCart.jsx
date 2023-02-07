import useCart from '../../hooks/useCart';
import useQuantityInput from '../../hooks/useQuantityInput';
import QuantityInput from '../QuantityInput/QuantityInput';
import styles from './ProductCart.module.css';

function ProductCart({ item, summary = false }) {
  const { cart, setCart } = useCart();

  const {
    quantity,
    handleDecrement,
    handleIncrement,
  } = useQuantityInput(item?.quantity, item);

  const handleDeleteItemFromCart = () => {
    setCart({
      products: cart.products?.filter((product) => product.id !== item.id),
      totalPriceCart: cart.totalPriceCart - (item.price * quantity),
    });

    localStorage.setItem('cart', JSON.stringify({
      products: cart.products?.filter((product) => product.id !== item.id),
      totalPriceCart: cart.totalPriceCart - (item.price * quantity),
    }));
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
            <img src={item?.cartImage} alt={item?.shortName} />
            <div className={styles.deleteCartImage}>
              <span />
              <span />
            </div>
          </button>

          <div className={styles.detailCartItem}>
            <p className={styles.nameCartItem}>{item?.shortName}</p>
            <p className={styles.priceCartItem}>{`$ ${item?.price}`}</p>
          </div>
        </div>

        {summary ? (
          <p className={styles.summaryQuantity}>{`x${item?.quantity}`}</p>
        ) : (
          <QuantityInput
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            quantity={quantity}
          />
        )}
      </div>
    </li>
  );
}

export default ProductCart;
