import useQuantityInput from '../../hooks/useQuantityInput';
import QuantityInput from '../QuantityInput/QuantityInput';
import styles from './ProductCart.module.css';

function ProductCart({ item }) {
  const { quantity, handleDecrement, handleIncrement } = useQuantityInput(item.quantity);

  return (
    <li className={styles.cartItem}>
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
          quantity={quantity}
        />
      </div>
    </li>
  );
}

export default ProductCart;
