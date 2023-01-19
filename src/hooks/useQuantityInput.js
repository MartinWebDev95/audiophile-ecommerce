import { useState } from 'react';

function useQuantityInput() {
  const [quantity, setQuantity] = useState(1);

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
