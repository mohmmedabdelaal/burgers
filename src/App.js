import React, { useState } from 'react';
import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom';
import { css } from '@emotion/css';
import Admin from './admin/Admin';
import Nav from './common/Nav';
import ScrollToTop from './common/ScrollToTop';
import Products from './products/Products';
// import ProtectedRoute from './common/ProtectedRoute';
import Footer from './common/Footer';

const styles = css`
  margin: 50px auto;
  width: 24rem;
  .container {
    background: #16213e;
    border: 4px solid #395b64;
    border-radius: 5px;
    padding: 1.8rem;
  }
`;

const App = () => {
  const [isAuthenticated] = useState(true);
  console.log(isAuthenticated);
  const routes = useRoutes([
    {
      path: '/*',
      element: <Products />,
    },
    {
      path: '/admin*',
      element: isAuthenticated ? <Admin /> : <Navigate to="/" />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]);
  return routes;
};

const AppWrapper = () => (
  <div className={styles}>
    <Router>
      <div className="container">
        <ScrollToTop />
        <Nav />
        <App />
        <Footer />
      </div>
    </Router>
  </div>
);

export default AppWrapper;
