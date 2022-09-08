export const ListProducts = async () => {
  const response = await fetch(`/api/products`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed To Get Products');
};

export const retrieveSingleProduct = async (id) => {
  const response = await fetch(`/api/products/${id}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to Get The product');
};
