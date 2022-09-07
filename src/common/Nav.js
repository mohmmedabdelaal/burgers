import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from '@emotion/css';

const styles = css`
  margin-bottom: 1rem;
  a {
    color: #fff;
    text-decoration: none;
    padding: 0.8rem;
    &.active {
      color: #65c18c;
      border: 1px solid #65c18c;
      border-radius: 2px;
    }
  }
`;

function Nav() {
  return (
    <nav className={styles}>
      <NavLink to="/" end activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/admin" activeClassName="active">
        Admin
      </NavLink>
    </nav>
  );
}

export default Nav;
