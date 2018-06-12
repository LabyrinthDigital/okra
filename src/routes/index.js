import fp from 'lodash/fp';
import React, { Fragment } from 'react';
import { Route, Redirect } from "react-router-dom";
import Login from './login';
import Dashboard from './dashboard';
import Auth from '../components/HOC/Auth';

const routes = [
  Login,
  Dashboard,
];

const mapRoutes = fp.map(route => <Route
  {...route}
  key={route.path}
  render={route.isAuthenticated
    ? () => {
      const Authenticated = Auth(route.Component);

      return <Authenticated />
    } 
    : () => <route.Component />}
/>);

const RouterComponent = (props) => {
  return (
    <Fragment>
      {mapRoutes(routes)}    
    </Fragment>
  );
}

export default RouterComponent;
