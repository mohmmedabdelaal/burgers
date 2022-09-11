import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

const footerStyles = css`
  transition: ease 0.5s;
  text-decoration: none;
  color: white;
  background: #1e3161;
  width: 100%;
  max-width: 24rem;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 5px;
  padding: 20px;
  box-shadow: #2f4374 0 2px 5px 2px;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  .main {
    flex: 1;
    min-width: 200px;
  }
  .heading {
    margin-bottom: 1rem;
    font-weight: 600;
  }
  .col1 {
    flex: 1;
    min-width: 200px;
    a {
      display: inline-block;
      padding: 7px 0;
      color: #ffff;
      padding: 10px;
      font-size: 1rem;
      font-weight: 600;
      &:hover {
        color: #50fa7b;
        border: 2px solid #50fa7b;
        border-radius: 4px;
      }
    }
    &-list {
      display: flex;
      justify-content: space-around;
    }
  }
`;

function Footer() {
  return (
    <footer className={footerStyles}>
      <div className="main">
        <div className="col1">
          <h3 className="heading">About the store</h3>
          <ul className="col1-list">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/admin">About us</Link>
            </li>

            <li>
              <Link to="/">Return policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
