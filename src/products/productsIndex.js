import React, { useState, useEffect } from 'react';
import { ListProducts } from './ProductsService';

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
      {products.map((item) => {
        const { id, description, name, price } = item;
        return (
          <div key={id}>
            {name}| {description} | {price}
          </div>
        );
      })}
    </div>
  );
}

export default productsIndex;
