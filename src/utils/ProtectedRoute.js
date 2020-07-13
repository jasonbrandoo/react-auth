/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useToken from './useToken';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = useToken('status');
  return (
    <Route
      {...rest}
      render={props =>
        token.status === 'logged-in' ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default ProtectedRoute;
