import { useState } from 'react';

function useQuantityInput(quantityProduct = 1) {
  const [quantity, setQuantity] = useState(quantityProduct);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 1) return;

    setQuantity(quantity - 1);
  };

  return { quantity, handleIncrement, handleDecrement };
}

export default useQuantityInput;
