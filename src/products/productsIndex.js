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
      margin-right: 20px;
      display: flex;
      align-items: center;
    }
    label {
      display: flex;
      padding-right: 10px;
      cursor: pointer;
      font-weight: 500;
      overflow: hidden;
      margin-bottom: 0.375em;
    }
  }
`;

function productsIndex() {
  const { state } = useLocation();
  const [products, setProducts] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (state) {
      console.warn(`No product with ${state.prodId}`);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const data = await ListProducts();
      const params = Object.fromEntries([...searchParams]);
      sortOrderParams(data, params);
    })();
  }, []);

  const sortOrderParams = (data, params) => {
    if (!Object.keys(params).length) {
      setProducts(data);
    }

    const { sort, order } = params;
    const sorted = [...data].sort((a, b) => {
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

  const updateSort = (e) => {
    const { name, value } = e.target;
    const currentParams = Object.fromEntries([...searchParams]);
    const newParams = { ...currentParams, [name]: value };
    setSearchParams(newParams);
    sortOrderParams(products, newParams);
  };

  if (products === null) {
    return <div>Loading....</div>;
  }

  return (
    <div className={styles}>
      <div className="checkBtn">
        <span>Sort: </span>
        <label htmlFor="name">Name</label>
        <input
          type="radio"
          name="sort"
          id="name"
          value="name"
          onChange={updateSort}
          defaultChecked={searchParams.get('sort') === 'name'}
        />
        <label htmlFor="price">Price</label>
        <input
          type="radio"
          name="sort"
          id="price"
          value="price"
          onChange={updateSort}
          defaultChecked={searchParams.get('sort') === 'price'}
        />
      </div>
      <div className="checkBtn">
        <span>Order: </span>
        <label htmlFor="ascending">ascending</label>
        <input
          type="radio"
          name="order"
          id="ascending"
          value="ascending"
          onChange={updateSort}
          defaultChecked={searchParams.get('order') === 'ascending'}
        />
        <label htmlFor="descending">descending</label>
        <input
          type="radio"
          name="order"
          id="descending"
          value="descending"
          onChange={updateSort}
          defaultChecked={searchParams.get('order') === 'descending'}
        />
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
