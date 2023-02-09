import { useEffect, useState } from 'react';

const CATEGORIES = ['headphones', 'speakers', 'earphones'];

function useProduct(data = [], dependence = '') {
  const [productDetail, setProductDetail] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (CATEGORIES.includes(dependence)) {
      setProducts(data.products.filter((product) => product.category === dependence));
    } else {
      setProductDetail(data.products.filter((item) => item.slug === dependence));
    }
  }, [dependence]);

  return { productDetail, products };
}

export default useProduct;
