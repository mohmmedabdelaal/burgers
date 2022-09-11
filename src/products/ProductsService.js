export const ListProducts = async () => {
  const response = await fetch(`/api/products`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed To Get Products');
};

export const createProduct = async (payload) => {
  const response = await fetch(`/api/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Could not create the product');
};

export const retrieveSingleProduct = async (id) => {
  const response = await fetch(`/api/products/${id}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to Get The product');
};

export const editProduct = async (payload) => {
  const response = await fetch(`/api/products/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Could not find the product');
};

export const deleteProduct = async (id) => {
  const response = await fetch(`/api/products/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Could not delete the product');
};
