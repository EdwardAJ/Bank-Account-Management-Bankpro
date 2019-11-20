import React from 'react';
import AuthPage from './components/AuthPage';
import MainPage from './components/MainPage';
import { getCookie } from './utils/cookie.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    if (getCookie("auth")) {
      this.state.isLoggedIn = true;
    }
    const isLoggedIn = this.state.isLoggedIn;
    let page;
    if (isLoggedIn) {
      page = <MainPage />;
    } else {
      page = <AuthPage handleLogin={ this.handleLogin } />;
    }
    return (
      <div>
        { page }
      </div>
    );
  }
}