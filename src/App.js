import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { UserContext } from './components/UserProvider/UserProvider';
import Router from './routes';

const App = () => (
  <div>
    <UserContext.Consumer>
      {value => (
        <BrowserRouter>
          <Router {...value} />
        </BrowserRouter>
      )}
    </UserContext.Consumer>
  </div>
);

export default App;
