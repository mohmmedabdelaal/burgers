import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Admin from './admin/Admin';
import Products from './products/Products';
import { css } from '@emotion/css';
import Nav from './common/Nav';
import ProductsIndex from './products/productsIndex.js';
import Product from './products/Product';

const styles = css`
  margin: 50px auto;
  width: 24rem;
  .container {
    background: #16213e;
    border: 4px solid #395b64;
    border-radius: 5px;
    padding: 1.8rem;
  }
`;

const App = () => {
  return (
    <div className={styles}>
      <Router>
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={<Products />}>
              <Route path="/" element={<ProductsIndex />} />
              <Route path=":prodId" element={<Product />} />
            </Route>
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
