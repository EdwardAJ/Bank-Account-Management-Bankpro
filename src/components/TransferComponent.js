import React from 'react';
import './TransferComponent.css'

import axios from 'axios';
import { INFO_URL } from './../utils/endpoints.js';
import { HEADERS } from './../utils/header.js';
import getXMLResponse from './../utils/functions.js';
import { getCookie } from './../utils/cookie.js';

export default class TransferComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        this.setState({value: event.target.value});
    }

    handleSubmit (event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="container-margin">
                <p id="login-header"> Nomor Rekening Transfer </p>
                <div className="form-area">
                    <form>
                        <input className="form" type="text" value={ this.state.value } onChange={ this.handleChange } placeholder="Example: 13517070" />
                    </form> 
                </div>
                <form>
                    <button className="submit" onClick={ this.handleSubmit }>LOGIN</button>
                </form>
            </div>
        );
    }
}