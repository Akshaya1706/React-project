import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function PrivateRoute({ element, ...rest }) {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      element={auth.user ? element : <Navigate to="/login" />}
    />
  );
}

export default PrivateRoute;
