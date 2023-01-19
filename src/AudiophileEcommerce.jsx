import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

function AudiophileEcommerce() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/headphones" element={<CategoryPage />} />
      <Route path="/headphones/:productSlug" element={<ProductDetailPage />} />
      <Route path="/speakers" element={<CategoryPage />} />
      <Route path="/speakers/:productSlug" element={<ProductDetailPage />} />
      <Route path="/earphones" element={<CategoryPage />} />
      <Route path="/earphones/:productSlug" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default AudiophileEcommerce;
