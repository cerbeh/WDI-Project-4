import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Auth from '../../lib/Auth';

const ProtectedRoute =({ component: Component, ...props}) => {
  return Auth.isAuthenticated() ? <Route {...props} component={Component} /> : <Redirect to="/login" />;
};

export default ProtectedRoute ;
