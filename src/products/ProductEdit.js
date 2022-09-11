import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { css } from '@emotion/css';
import {
  createProduct,
  editProduct,
  retrieveSingleProduct,
  deleteProduct,
} from './ProductsService';

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
    &-delete {
      background: transparent;
      color: #e80f88;
      padding: 10px 40px;
      border: 2px solid #e80f88;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 4px;
    }
  }
  .edit-btns {
    display: flex;
    align-items: center;
    .edit-form-delete {
      margin-left: auto;
    }
  }
`;

// {
//   "id": "spice-dog",
//   "name": "Spice Dog",
//   "price": 777,
//   "description": "Prepare the spice, it's very nice."
// }

function ProductEdit({ isEdited }) {
  const { prodId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (!isEdited) {
      setForm({
        id: '',
        name: '',
        price: 0,
        description: '',
      });
      return;
    }
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

  const updateValues = ({ name, value }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCreate = async () => {
    try {
      const { id } = await createProduct(form);
      navigate(`/admin/${id}`);
    } catch (error) {
      console.warn(error);
    }
  };
  const handleUpdate = async () => {
    try {
      await editProduct(form);
      navigate(`/admin`);
    } catch (error) {
      console.warn(error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm(`Are you sure you want to delete ${form.name}?`)) {
      return;
    }
    try {
      await deleteProduct(form.id);
      navigate(`/admin`);
    } catch (error) {
      console.warn(error);
    }
  };

  if (form === null) {
    return <div>Loading...</div>;
  }

  return (
    <form className={stylesEdit}>
      <input
        type="text"
        name="id"
        className="edit-form-input"
        placeholder="ID"
        value={form.id}
        onChange={({ target }) => updateValues(target)}
      />
      <input
        type="text"
        name="name"
        className="edit-form-input"
        placeholder="Name"
        value={form.name}
        onChange={({ target }) => updateValues(target)}
      />
      <input
        type="text"
        name="price"
        className="edit-form-input"
        placeholder="price"
        value={form.price}
        onChange={({ target }) =>
          updateValues({ name: target.name, value: parseInt(target.value, 10) })
        }
      />
      <textarea
        name="description"
        placeholder="description"
        className="edit-form-input edit-form-textarea"
        value={form.description}
        onChange={({ target }) => updateValues(target)}
      />
      {!isEdited && (
        <button className="edit-form-submit" onClick={handleCreate}>
          Create
        </button>
      )}
      <div className="edit-btns">
        {isEdited && (
          <button className="edit-form-submit" onClick={handleUpdate}>
            Update
          </button>
        )}
        {isEdited && (
          <button className="edit-form-delete" onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
    </form>
  );
}

export default ProductEdit;
