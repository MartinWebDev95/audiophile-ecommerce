import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './AudiophileEcommerce.module.css';
import Home from './pages/Home/Home';
import Headphones from './pages/Headphones/Headphones';
import Earphones from './pages/Earphones/Earphones';
import Speakers from './pages/Speakers/Speakers';

function AudiophileEcommerce() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AudiophileEcommerce;
