import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { retrieveSingleProduct } from './ProductsService';
import { css } from '@emotion/css';

const styles = css`
  display: flex;
  flex-direction: column;
`;

function Product() {
  const [product, setProduct] = useState(null);
  const { prodId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await retrieveSingleProduct(prodId);
      console.log(data);
      setProduct(data);
    })();
  }, []);

  if (product === null) {
    return <div>Loading......</div>;
  }

  return (
    <div className={styles}>
      <Link to="/">Back to home</Link>
      <img src={`/assets/img/products/${prodId}.svg`} alt="" />
      <div>
        <h1>{product.name}</h1>
        <h2>{`$${product.price / 100}`}</h2>
        <h4>{product.description}</h4>
      </div>
    </div>
  );
}

export default Product;
