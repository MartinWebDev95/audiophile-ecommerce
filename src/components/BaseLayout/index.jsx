import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function BaseLayout() {
  const [openMenu, setOpenMenu] = useState(true);
  const [openCart, setOpenCart] = useState(true);

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
