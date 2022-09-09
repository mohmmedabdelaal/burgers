import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { useNavigate, useParams } from 'react-router-dom';
import { createProduct, retrieveSingleProduct } from './ProductsService';

const stylesEdit = css`
  color: #fff;
  background: #0f3460;
  border-radius: 4px;
  padding: 10px;
  font-size: 1.5rem;
  .edit-form {
    &-input {
      width: 100%;
      color: #fff;
      background: #16213e;
      border: 2px solid transparent;
      border-radius: 3px;
      margin-bottom: 10px;
      padding: 10px 20px;
      outline: 0;
      &:focus {
        border: 2px solid #50fa7b;
      }
    }
    &-textarea {
      width: 100%;
      resize: none;
    }
    &-submit {
      background: transparent;
      color: #50fa7b;
      padding: 10px 40px;
      border: 2px solid #50fa7b;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 4px;
    }
  }
`;

function ProductEdit() {
  const { prodId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  // if (!isEdited) {
  //   setForm({
  //     id: '',
  //     name: '',
  //     price: 0,
  //     description: '',
  //   });
  //   return;
  // }

  useEffect(() => {
    setForm({
      id: '',
      name: '',
      price: 0,
      description: '',
    });
    (async () => {
      try {
        const data = await retrieveSingleProduct(prodId);
        setForm(data);
      } catch (error) {
        console.warn(error);
        navigate(`/admin`, { replace: true });
      }
    })();
  }, [prodId]);

  const updatedForm = ({ name, value }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  if (form === null) {
    return <div>Loading.....</div>;
  }

  const handleCreate = async () => {
    try {
      const { id } = await createProduct(form);
      navigate(`/admin/${id}`);
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <form className={stylesEdit}>
      <input
        type="text"
        placeholder="ID"
        name="id"
        onChange={({ target }) => updatedForm(target)}
        value={form.id}
        className="edit-form-input"
      />{' '}
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={({ target }) => updatedForm(target)}
        value={form.name}
        className="edit-form-input"
      />
      <input
        type="text"
        placeholder="Price"
        name="price"
        onChange={({ target }) =>
          updatedForm({ name: target.name, value: parseInt(target.value, 10) })
        }
        value={form.price}
        className="edit-form-input"
      />
      <textarea
        name="description"
        id="description"
        placeholder="Description"
        value={form.description}
        onChange={({ target }) => updatedForm(target)}
        className="edit-form-input edit-form-textarea"
      />
      <button type="button" className="edit-form-submit" onClick={handleCreate}>
        Submit
      </button>
    </form>
  );
}

export default ProductEdit;
