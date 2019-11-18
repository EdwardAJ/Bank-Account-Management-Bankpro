import React from 'react';
import './LoginForm.css';

export default class LoginForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  handleSubmit (event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div class="form-area">
        <form>
          <input class="form" type="text" value={ this.state.value } onChange={ this.handleChange } placeholder="Example: 13517070" />
        </form>
        <form>
          <button class="submit" onclick={ this.handleSubmit }>LOGIN</button>
        </form>
      </div>
    );
  }
}
