function useOpenMenu(openMenu, setOpenMenu) {
  const handleOpenMenu = () => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    setOpenMenu(!openMenu);
  };

  return {
    openMenu, setOpenMenu, handleOpenMenu,
  };
}

export default useOpenMenu;
