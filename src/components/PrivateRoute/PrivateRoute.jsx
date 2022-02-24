import React from 'react';
import { Route } from 'react-router-dom';
import { useUser } from '../../context/UserProvider';
import { Redirect } from 'react-router-dom';
export default function PrivateRoute({ children, ...routeProps }) {
  const { currentUser } = useUser();

  return (
    <Route
      {...routeProps}
      render={({ location }) =>
        currentUser.email ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}
