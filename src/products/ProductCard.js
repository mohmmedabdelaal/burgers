import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

const styles = css`
  display: flex;
  color: #fff;
  background: #0f3460;
  text-decoration: none;
  border-radius: 4px;
  transition: transform 0.1s, background 0.1s, box-shadow 1;
  padding: 15px;
  margin-bottom: 15px;
  &:hover {
    transform: translate(0, -4px);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
  .product-card {
    &-icon {
      width: 4rem;
      margin-right: 1rem;
    }
    &-name {
      font-size: 1.3rem;
      margin: 0;
    }
    &-price {
      font-size: 1rem;
      margin: 0;
      color: #47b5ff;
    }
  }
`;

function ProductCard({ product }) {
  return (
    <Link to={product.id} className={styles}>
      <img
        src={`/assets/img/products/${product.id}.svg`}
        alt={product.name}
        className="product-card-icon"
      />
      <div>
        <h2 className="product-card-name">{product.name}</h2>
        <p className="product-card-price">{`$${product.price / 100}`}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
