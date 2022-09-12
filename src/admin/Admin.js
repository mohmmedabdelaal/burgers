import React, { lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import ProductsIndex from '../products/ProductsIndex';
// import ProductEdit from '../products/ProductEdit';
import { css } from '@emotion/css';

const ProductEdit = lazy(() => import('../products/ProductEdit'));
const ProductsIndex = lazy(() => import('../products/ProductsIndex'));

const styles = css`
  .admin {
    &-header {
      display: flex;
      align-items: center;
    }
    &-link {
      color: #fff;
      text-decoration: none;
      padding: 5px 15px;
      border: 2px solid #fff;
      border-radius: 4px;
      font-weight: 600;
      text-transform: uppercase;
      margin-left: auto;
    }
  }
`;

function Admin() {
  return (
    <div className={styles}>
      <div className="admin-header">
        <h1>Admin</h1>
        <Link to="new" className="admin-link">
          New
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<ProductsIndex />} />
        <Route path="/new" element={<ProductEdit isEdited={false} />} />
        <Route path="/:prodId" element={<ProductEdit isEdited={true} />} />
      </Routes>
    </div>
  );
}

export default Admin;
