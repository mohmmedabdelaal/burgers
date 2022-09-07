import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './admin/Admin';
import Product from './products/Product';
import { css } from '@emotion/css';

const styles = css`
  margin: 50px auto;
  width: 24rem;
  .container {
    background: #16213e;
    border: 3px solid #395b64;
    border-radius: 4px;
    padding: 2rem;
  }
`;

const App = () => {
  return (
    <div className={styles}>
      <div className="container">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
