import React, { Fragment } from 'react';
import fp from 'lodash/fp';
import { Route, Redirect } from "react-router-dom";
import Login from './login';
import Dashboard from './dashboard';

const routes = [
  Login,
  Dashboard,
];

const mapRoutes = fp.map(route => <Route key={route.path} {...route} />)

const RouterComponent = (props) => {
  return (
    <Fragment>
      {
        !props.isLoggedIn && <Redirect to="/login" />
      }
      {mapRoutes(routes)}
    </Fragment>
  );
}

export default RouterComponent;
