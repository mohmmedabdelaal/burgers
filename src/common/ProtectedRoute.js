import React from 'react';
import { Navigate, Route } from 'react-router-dom';

function ProtectedRoute({ element, authenticated, redirectTo, ...rest }) {
  if (!authenticated) {
    return <Navigate to={redirectTo} />;
  }
  return <Route {...rest} element={element} />;
}

export default ProtectedRoute;
