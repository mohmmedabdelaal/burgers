import React from 'react';
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/css';

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
      <Outlet />
    </div>
  );
}

export default Products;
