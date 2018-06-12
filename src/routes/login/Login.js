import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import handleLogin from '../../redux/actions/login';

class Login extends Component {
  render() {
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/home" />;
    }

    return (
      <div>
        <button onClick={this.props.onLogin}>Click to log in</button>
      </div>
    );
  }
}

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch(handleLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
