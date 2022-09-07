import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Admin from './admin/Admin';
import Product from './products/Product';
import { css } from '@emotion/css';
import Nav from './common/Nav';
import ProductsIndex from './products/productsIndex.js';

const styles = css`
  margin: 50px auto;
  width: 24rem;
  .container {
    background: #16213e;
    border: 4px solid #395b64;
    border-radius: 5px;
    padding: 2rem;
  }
`;

const App = () => {
  return (
    <div className={styles}>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Product />}>
            <Route path="/" element={<ProductsIndex />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
