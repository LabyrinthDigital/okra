import React from 'react';
import './styles/index.css';
import { BrowserRouter, Switch } from "react-router-dom";
import Router from './routes';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Router />
    </Switch>
  </BrowserRouter>
);

export default App;
