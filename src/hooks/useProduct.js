import { useEffect, useState } from 'react';

const CATEGORIES = ['headphones', 'speakers', 'earphones'];

function useProduct(data = [], dependence = '') {
  const [productDetail, setProductDetail] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (CATEGORIES.includes(dependence)) {
      const productsFilteredByCategory = data.products.filter(
        (product) => product.category === dependence,
      );

      const productsOrderedByProperty = productsFilteredByCategory.sort((a, b) => b.new - a.new);

      setProducts(productsOrderedByProperty);
    } else {
      setProductDetail(data.products.filter((item) => item.slug === dependence));
    }
  }, [dependence]);

  return { productDetail, products };
}

export default useProduct;
