import React from 'react';
import AuthPage from './components/AuthPage';
import { getCookie } from './utils/cookie.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLogin() {
    this.setState({ isLoggedIn: true });
    console.log("LoggedIn: ", this.state.isLoggedIn);
  }

  render() {
    if (getCookie("auth")) {
      console.log("AUTH: ", getCookie("auth"));
      this.state.isLoggedIn = true;
    }
    const isLoggedIn = this.state.isLoggedIn;
    let pages;
    if (isLoggedIn) {
      pages = "LOGGED IN."
    } else {
      pages = <AuthPage handleLogin={ this.handleLogin } />
    }
    return (
      <div>
        { pages }
      </div>
    );
  }
}