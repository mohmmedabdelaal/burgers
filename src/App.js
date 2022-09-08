import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { css } from '@emotion/css';
import Nav from './common/Nav';
import Products from './products/Products';
import Admin from './admin/Admin';
import ProtectedRoute from './common/ProtectedRoute';

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
  return (
    <div className={styles}>
      <Router>
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/*" element={<Products />} />
            <ProtectedRoute
              path="/admin"
              element={<Admin />}
              redirectTo="/"
              authenticated={isAuthenticated}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
