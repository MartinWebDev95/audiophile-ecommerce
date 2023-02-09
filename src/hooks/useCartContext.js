import { useContext } from 'react';
import { cartContext } from '../context/CartContext';

const useCartContext = () => {
  const context = useContext(cartContext);
  return context;
};

export default useCartContext;
