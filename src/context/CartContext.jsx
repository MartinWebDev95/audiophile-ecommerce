import {
  createContext, useEffect, useMemo, useState,
} from 'react';

const cartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState({ products: [], totalPriceCart: 0 });

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);

  const value = useMemo(() => ({
    cart, setCart,
  }), [cart]);

  return (
    <cartContext.Provider value={value}>
      {children}
    </cartContext.Provider>
  );
}

export { CartProvider, cartContext };
