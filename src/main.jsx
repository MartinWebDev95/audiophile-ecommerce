import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AudiophileEcommerce from './AudiophileEcommerce';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './helpers/ScrollToTop/ScrollToTop';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <AudiophileEcommerce />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
