import fp from 'lodash/fp';
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import categories from './categories';

const routes = [
  categories,
];

const mapRoutesToRouteComponent = fp.map(route => <Route key={route.path} {...route} />);

const ContentContainer = props => {
  return mapRoutesToRouteComponent(routes);
}

export default ContentContainer;
