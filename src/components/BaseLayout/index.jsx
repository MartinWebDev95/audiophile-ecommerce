import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function BaseLayout() {
  const [openMenu, setOpenMenu] = useState(true);
  const [openCart, setOpenCart] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/checkout') {
      setOpenCart(true);
    }

    setOpenMenu(true);
    document.body.style.overflow = 'auto';
  }, [pathname]);

  return (
    <>
      <Header
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default BaseLayout;
