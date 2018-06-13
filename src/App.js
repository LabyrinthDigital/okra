import React from 'react';
import './styles/index.css';
import { BrowserRouter } from "react-router-dom";
import Router from './routes';

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;
