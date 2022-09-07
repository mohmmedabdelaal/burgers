import React from 'react';
import { useParams } from 'react-router-dom';

function Products() {
  const { prodId } = useParams();
  return <div>{prodId}</div>;
}

export default Products;
