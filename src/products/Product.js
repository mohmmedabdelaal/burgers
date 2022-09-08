import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import { useParams, useNavigate } from 'react-router-dom';
import { retrieveSingleProduct } from './ProductsService';

const styles = css`
  @mixin bottom {
    position: absolute;
    right: 0;
    left: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  line-height: 1.4;
  .container {
    background: #81cacf;
    width: 350px;
    height: 500px;
    position: relative;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.315);
    .container__info {
      @include bottom;
      bottom: 20%;
      display: flex;
      align-items: flex-end;
      padding: 15px 30px;
      color: $bright-color;
      span {
        margin-right: 20px;
      }
      i {
        margin-right: 10px;
      }
    }
    .container__profile {
      background-color: #355764;
      display: flex;
      align-items: center;
      padding: 20px;
      @include bottom();
      bottom: 0;

      h2 {
        color: #ffff;
        font-size: 1.3rem;
        font-weight: 600;
      }
      p {
        color: #999;
        font-size: 1rem;
      }
      p b {
        font-style: italic;
      }
    }
  }
`;

function Product() {
  const [product, setProduct] = useState(null);
  const { prodId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const data = await retrieveSingleProduct(prodId);

        setProduct(data);
      } catch (e) {
        console.warn(e.message);
        navigate('/', { replace: true });
      }
    })();
  }, [prodId]);

  if (product === null) {
    return <div>Loading......</div>;
  }

  return (
    <div className={styles}>
      <div className="container">
        <img
          src={`/assets/img/products/${prodId}.svg`}
          alt={product.name}
          className="product-icon"
        />
        <div className="container__info">
          <span>
            <p className="product-price">{`$${product.price / 100}`}</p>
          </span>
        </div>
        <div className="container__profile">
          <div className="container__profile__text">
            <h2>{product.name}</h2>
            <p>
              <b>{product.description}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className={styles}>
//   {/* <Link to="/">Back to home</Link> */}
//   <div className="product-title">
//     <img
//       src={`/assets/img/products/${prodId}.svg`}
//       alt={product.name}
//       className="product-icon"
//     />
//     <div>
//       <h2 className="product-name">{product.name}</h2>
//       <p className="product-price">{`$${product.price / 100}`}</p>
//     </div>
//   </div>
//   <div>
//     <h4>{product.description}</h4>
//   </div>
// </div>
export default Product;
