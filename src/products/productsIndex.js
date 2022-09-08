import React, { useState, useEffect } from 'react';
import { ListProducts } from './ProductsService';
import ProductCard from './ProductCard';

function productsIndex() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await ListProducts();
      console.log(data);
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
