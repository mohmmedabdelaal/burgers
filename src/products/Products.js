import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { css } from '@emotion/css';

// import ProductsIndex from './ProductsIndex.js';
// import Product from './Product';

const Product = lazy(() => import('./product'));
const ProductsIndex = lazy(() => import('./ProductsIndex'));

const styles = css`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .Logo {
    margin: 0 auto 25px;
    width: 17rem;
  }
`;

function Products() {
  return (
    <div className={styles}>
      <img src="/assets/img/logo.svg" alt="burgers" className="Logo" />
      <Routes>
        <Route path="/" element={<ProductsIndex />} />
        <Route path=":prodId" element={<Product />} />
      </Routes>
    </div>
  );
}

export default Products;
