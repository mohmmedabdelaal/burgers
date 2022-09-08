import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ListProducts } from './ProductsService';
import ProductCard from './ProductCard';

function productsIndex() {
  const { state } = useLocation();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (state) {
      console.warn(`No product with ${state.prodId}`);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const data = await ListProducts();

      setProducts(data);
    })();
  }, []);

  if (products === null) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      {products.map((item) => (
        <ProductCard product={item} key={item.id} />
      ))}
    </div>
  );
}

export default productsIndex;
