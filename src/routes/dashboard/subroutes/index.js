import fp from 'lodash/fp';
import React from 'react';
import { Route } from 'react-router-dom';
import classes from './classes';

const routes = [
  classes,
];

const mapRoutesToRouteComponent = fp.map(route => <Route key={route.path} {...route} />);

const ContentContainer = props => {
  return mapRoutesToRouteComponent(routes);
}

export default ContentContainer;
