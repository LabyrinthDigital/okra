import React, { createContext, Component } from 'react';

const user = {
  isLoggedIn: false,
  actions: {
    handleUserLogin: f => f,
  },
};

export const UserContext = createContext(user);

class UserProvider extends Component {
  state = {
    isLoggedIn: false,
  };

  actions = {
    handleUserLogin: () => this.setState({ isLoggedIn: !this.state.isLoggedIn }),
  }

  render() {
    const value = { ...this.state, ...this.actions };

    return (
      <div>
        <UserContext.Provider value={value}>
          {this.props.children}
        </UserContext.Provider>
      </div>
    );
  }
}

export default UserProvider;