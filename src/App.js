import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="home-page-container">
        <div className="App">
          <p id="login-header"> Masukkan Nomor Rekening </p>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default App;
