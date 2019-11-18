import React from 'react';
import AuthPage from './components/AuthPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLogin() {
    // Send to backend
    this.setState({ isLoggedIn: true });
    console.log("LoggedIn: ", this.state.isLoggedIn)
  }

  render() {
    // const isLoggedIn = this.state.isLoggedIn;
    let pages = <AuthPage handleLogin={ this.handleLogin } />
    console.log(pages)
    return (
      <div>
        { pages }
      </div>
    );
  }
}