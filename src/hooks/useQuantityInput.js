import { useState } from 'react';
import useCartContext from './useCartContext';

function useQuantityInput(quantityProduct = 1, product = {}) {
  const { cart, setCart } = useCartContext();
  const [quantity, setQuantity] = useState(quantityProduct);

  const handleIncrement = () => {
    setQuantity(quantity + 1);

    if (Object.keys(product).length > 0) {
      const newState = cart.products?.map((item) => (item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item));

      setCart({
        products: newState,
        totalPriceCart: cart.totalPriceCart + product.price,
      });

      localStorage.setItem('cart', JSON.stringify({
        products: newState,
        totalPriceCart: cart.totalPriceCart + product.price,
      }));
    }
  };

  const handleDecrement = () => {
    if (quantity === 1) return;

    setQuantity(quantity - 1);

    if (Object.keys(product).length > 0) {
      const newState = cart.products?.map((item) => (item.id === product.id
        ? { ...item, quantity: item.quantity - 1 }
        : item));

      setCart({
        products: newState,
        totalPriceCart: cart.totalPriceCart - product.price,
      });

      localStorage.setItem('cart', JSON.stringify({
        products: newState,
        totalPriceCart: cart.totalPriceCart - product.price,
      }));
    }
  };

  return {
    quantity, handleIncrement, handleDecrement,
  };
}

export default useQuantityInput;
