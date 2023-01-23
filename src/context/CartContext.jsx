import { createContext, useMemo, useState } from 'react';

const cartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  const value = useMemo(() => ({
    cart, setCart, totalCart, setTotalCart,
  }), [cart, totalCart]);

  return (
    <cartContext.Provider value={value}>
      {children}
    </cartContext.Provider>
  );
}

export { CartProvider, cartContext };
