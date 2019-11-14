import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p id="login-header"> Masukkan nomor rekening </p>
        <LoginForm />
      </div>
    );
  }
}

export default App;
