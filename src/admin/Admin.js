import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductsIndex from '../products/ProductsIndex';

function Admin() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Routes>
        <Route path="/" element={<ProductsIndex />} />
      </Routes>
    </div>
  );
}

export default Admin;
