import { useContext } from 'react';
import { cartContext } from '../context/CartContext';

const useCart = () => {
  const context = useContext(cartContext);
  return context;
};

export default useCart;
