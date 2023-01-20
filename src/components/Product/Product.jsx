import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useQuantityInput from '../../hooks/useQuantityInput';
import QuantityInput from '../QuantityInput/QuantityInput';
import styles from './Product.module.css';

function Product({ product = {}, detail = false }) {
  const { cart, setCart } = useCart();
  const { quantity, handleIncrement, handleDecrement } = useQuantityInput();

  const handleAddProductToCart = () => {
    const {
      id, cartImage, shortName, price,
    } = product;

    const productCart = {
      id,
      cartImage,
      shortName,
      quantity,
      price,
    };

    setCart([...cart, productCart]);
  };

  return (
    !detail
      ? (
        <div className={styles.containerProduct}>
          <picture>
            <source media="(min-width: 1000px)" srcSet={product.categoryImage.desktop} />
            <source media="(min-width: 480px)" srcSet={product.categoryImage.tablet} />
            <img srcSet={product.categoryImage.mobile} alt={product.shortName} />
          </picture>

          <div>
            {product.new && (<p className={styles.newProduct}>New Product</p>)}

            <h2>
              {product.name}
            </h2>

            <p className={styles.productDescription}>
              {product.description}
            </p>

            <div className={styles.productLink}>
              <Link to={product.slug}>
                See Product
              </Link>
            </div>
          </div>

        </div>
      ) : (
        <div className={styles.containerProductDetail}>
          <picture>
            <source media="(min-width: 1000px)" srcSet={product.image.desktop} />
            <source media="(min-width: 480px)" srcSet={product.image.tablet} />
            <img srcSet={product.image.mobile} alt={product.shortName} />
          </picture>

          <div>
            {product.new && (<p className={styles.newProductDetail}>New Product</p>)}

            <h2>
              {product.name}
            </h2>

            <p className={styles.productDetailDescription}>
              {product.description}
            </p>

            <p className={styles.productDetailPrice}>
              {`$ ${product.price.toLocaleString('en-US')}`}
            </p>

            <div className={styles.productDetailCart}>
              <QuantityInput
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                quantity={quantity}
              />

              <button
                type="button"
                className={styles.buttonAddToCart}
                onClick={handleAddProductToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )
  );
}

export default Product;
