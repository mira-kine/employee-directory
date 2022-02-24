import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useUser } from '../../context/UserProvider';

export default function PrivateRoute({ children, ...routeProps }) {
  const {
    currentUser: { email },
  } = useUser();

  console.log('currentUser', currentUser);
  return (
    <Route
      {...routeProps}
      render={({ location }) =>
        email ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}
