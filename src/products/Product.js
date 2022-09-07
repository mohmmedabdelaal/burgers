import React from 'react';
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

function Product() {
  return (
    <div className={styles}>
      <img src="/assets/img/logo.svg" alt="burgers" className="Logo" />
      <h4>products</h4>
    </div>
  );
}

export default Product;
