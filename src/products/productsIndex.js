import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { css } from '@emotion/css';
import { ListProducts } from './ProductsService';
import ProductCard from './ProductCard';

const styles = css`
  .product {
    &-list {
      margin-top: 20px;
    }
  }
  .checkBtn {
    display: flex;
    align-items: center;
    span {
      color: #fff;
      margin-right: 10px;
      display: flex;
      align-items: center;
      padding: 0.375em 0.75em 0.375em 0.375em;
    }
    label {
      display: flex;
      width: 8rem;
      cursor: pointer;
      font-weight: 500;
      overflow: hidden;
      margin-bottom: 0.375em;
    }
  }
`;

function productsIndex() {
  const { state } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (state) {
      console.warn(`No product with ${state.prodId}`);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const data = await ListProducts();
      const params = Object.fromEntries([...searchParams]);
      sortSearchParams(data, params);
    })();
  }, []);

  const sortSearchParams = (data, params) => {
    if (!Object.keys(params).length) {
      setProducts(data);
    }

    const sorted = [...data].sort((a, b) => {
      const { sort, order } = params;

      switch (order) {
        case 'ascending': {
          return a[sort] > b[sort] ? 1 : -1;
        }
        case 'descending': {
          return a[sort] < b[sort] ? 1 : -1;
        }
        default: {
          return 0;
        }
      }
    });
    setProducts(sorted);
  };

  const updatePrams = (e) => {
    const { name, value } = e.target;
    const paramsSearch = Object.fromEntries([...searchParams]);
    const newParams = { ...paramsSearch, [name]: value };
    setSearchParams(newParams);
    sortSearchParams(products, newParams);
  };

  if (products === null) {
    return <div>Loading....</div>;
  }

  return (
    <div className={styles}>
      <div className="checkBtn">
        <span>sort:</span>
        <label htmlFor="name">
          <input
            type="radio"
            id="name"
            name="sort"
            value="name"
            onChange={updatePrams}
            defaultChecked={searchParams.get('sort') === 'name'}
          />
          <span>Name</span>
        </label>
        <label htmlFor="price">
          <input
            type="radio"
            name="sort"
            value="price"
            id="price"
            onChange={updatePrams}
            defaultChecked={searchParams.get('sort') === 'price'}
          />
          <span>Price</span>
        </label>
      </div>
      <div className="checkBtn">
        <span>Order:</span>
        <label htmlFor="ascending">
          <input
            type="radio"
            id="ascending"
            name="order"
            value="ascending"
            onChange={updatePrams}
            defaultChecked={searchParams.get('order') === 'ascending'}
          />
          <span>ascending</span>
        </label>
        <label htmlFor="descending">
          <input
            type="radio"
            name="order"
            value="descending"
            id="descending"
            onChange={updatePrams}
            defaultChecked={searchParams.get('order') === 'descending'}
          />
          <span>descending</span>
        </label>
      </div>

      <div className="product-list">
        {products.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default productsIndex;
