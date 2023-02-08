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

  const handleRemoveAll = () => {
    setCart({
      products: [],
      totalPriceCart: 0,
    });

    localStorage.setItem('cart', JSON.stringify({
      products: [],
      totalPriceCart: 0,
    }));
  };

  const value = useMemo(() => ({
    cart, setCart, handleRemoveAll,
  }), [cart]);

  return (
    <cartContext.Provider value={value}>
      {children}
    </cartContext.Provider>
  );
}

export { CartProvider, cartContext };
