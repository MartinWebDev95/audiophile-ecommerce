import { createContext, useMemo, useState } from 'react';

const cartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

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
