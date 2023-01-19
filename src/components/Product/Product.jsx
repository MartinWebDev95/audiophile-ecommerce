import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';

function Product({ product = {}, detail = false }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 1) return;

    setQuantity(quantity - 1);
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
              <div className={styles.containerQuantityInput}>
                <button type="button" onClick={handleIncrement}>
                  +
                </button>

                <input type="number" id="quantity" name="quantity" value={quantity} />

                <button type="button" onClick={handleDecrement}>
                  -
                </button>
              </div>

              <button type="button" className={styles.buttonAddToCart}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )
  );
}

export default Product;
