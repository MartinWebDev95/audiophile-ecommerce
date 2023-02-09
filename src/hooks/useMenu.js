import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useMenu(openMenu, setOpenMenu, setOpenCart) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/checkout') {
      setOpenCart(true);
    }

    setOpenMenu(true);
    document.body.style.overflow = 'auto';
  }, [pathname]);

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

export default useMenu;
