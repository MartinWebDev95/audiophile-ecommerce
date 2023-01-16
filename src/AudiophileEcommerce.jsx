import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './AudiophileEcommerce.module.css';
import Home from './pages/Home/Home';
import CategoryPage from './pages/CategoryPage/CategoryPage';

function AudiophileEcommerce() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/headphones" element={<CategoryPage />} />
        <Route path="/speakers" element={<CategoryPage />} />
        <Route path="/earphones" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AudiophileEcommerce;
