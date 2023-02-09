function useCart(
  setCart = () => {},
  setOpenCart = () => {},
  cart = [],
  product = {},
  quantity = 1,
) {
  const handleOpenCart = () => {
    document.body.style.overflow = 'hidden';
    setOpenCart(false);
  };

  const handleCloseCart = (e) => {
    if (!e.target.getAttribute('aria-hidden')) return;

    document.body.style.overflow = 'auto';
    setOpenCart(true);
  };

  const handleAddProductToCart = () => {
    const {
      id, cartImage, shortName, price,
    } = product;

    const productCart = {
      id,
      cartImage,
      shortName,
      quantity,
      price,
    };

    setCart({
      products: [...cart.products, productCart],
      totalPriceCart: cart.totalPriceCart + (productCart.quantity * productCart.price),
    });

    localStorage.setItem('cart', JSON.stringify({
      products: [...cart.products, productCart],
      totalPriceCart: cart.totalPriceCart + (productCart.quantity * productCart.price),
    }));
  };

  const handleDeleteItemFromCart = () => {
    setCart({
      products: cart.products?.filter((prod) => prod.id !== product.id),
      totalPriceCart: cart.totalPriceCart - (product.price * quantity),
    });

    localStorage.setItem('cart', JSON.stringify({
      products: cart.products?.filter((prod) => prod.id !== product.id),
      totalPriceCart: cart.totalPriceCart - (product.price * quantity),
    }));
  };

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

  return {
    handleOpenCart,
    handleCloseCart,
    handleAddProductToCart,
    handleDeleteItemFromCart,
    handleRemoveAll,
  };
}

export default useCart;
