import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AudiophileEcommerce from './AudiophileEcommerce';
import ScrollToTop from './helpers/ScrollToTop/ScrollToTop';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AudiophileEcommerce />
    </BrowserRouter>
  </React.StrictMode>,
);
