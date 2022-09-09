import React, { useState } from 'react';
import { css } from '@emotion/css';

const stylesEdit = css`
  color: #fff;
  background: #0f3460;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  .edit-form-input {
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px 20px;
  }
`;

function ProductEdit({ isEdited }) {
  const [form, setForm] = useState(null);
  if (!isEdited) {
    setForm({
      id: '',
      name: '',
      price: 0,
      description: '',
    });
    return;
  }
  const onChangeValues = ({ value, name }) => {
    console.log(value, name);
  };
  return (
    <form className={stylesEdit}>
      <input
        type="text"
        placeholder="ID"
        name="id"
        onChange={({ target }) => onChangeValues(target)}
        className="edit-form-input"
      />
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={({ target }) => onChangeValues(target)}
        className="edit-form-input"
      />
      <input
        type="text"
        placeholder="price"
        name="price"
        onChange={({ target }) => onChangeValues(target)}
        className="edit-form-input"
      />
      <textarea name="description" placeholder="description" id="description" />
      <button type="button">Create</button>
    </form>
  );
}

export default ProductEdit;
