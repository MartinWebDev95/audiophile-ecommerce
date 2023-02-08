function useOpenCart(setOpenCart) {
  const handleOpenCart = () => {
    document.body.style.overflow = 'hidden';
    setOpenCart(false);
  };

  const handleClick = (e) => {
    if (!e.target.getAttribute('aria-hidden')) return;

    document.body.style.overflow = 'auto';
    setOpenCart(true);
  };

  return { handleOpenCart, handleClick };
}

export default useOpenCart;
