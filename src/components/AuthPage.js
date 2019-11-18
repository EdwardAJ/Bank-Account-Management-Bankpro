import React from 'react';
import './AuthPage.css';

import axios from 'axios';
import { LOGIN_URL } from './../utils/endpoints.js';
import { HEADERS } from './../utils/header.js';
import getXMLResponse from './../utils/functions.js';
import { createCookie } from './../utils/cookie.js';

export default class AuthPage extends React.Component {
    constructor (props) {
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
        let requestBody =
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="http://controllers.webservice.com/">' +
            '<soapenv:Header/>' +
            '<soapenv:Body>' +
                '<con:validateAccountNumber>' +
                    '<accountNumber>' +  this.state.value + '</accountNumber>' +
                '</con:validateAccountNumber>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';

        axios.post(LOGIN_URL, requestBody, {
            headers: HEADERS
        }).then((response) => {
            if (response.status === 200) {
                let resultStr = getXMLResponse(response.data)[0].innerHTML;
                if (resultStr === 'true') {
                    createCookie("auth", this.state.value, 1);
                    this.props.handleLogin();
                } else {
                    alert("Silakan masukkan nomor yang valid.");
                }
            }
        }).catch((error) => {
            console.log("Error: ", error);
        })
        event.preventDefault();
    }
    
    render() {
        return (
            <div className="container">
                <div>
                    <p id="login-header"> Masukkan Nomor Rekening </p>
                    <div className="form-area">
                        <form>
                            <input className="form" type="text" value={ this.state.value } onChange={ this.handleChange } placeholder="Example: 13517070" />
                        </form> 
                    </div>
                    <form>
                        <button className="submit" onClick={ this.handleSubmit }>LOGIN</button>
                    </form>
                </div>
            </div>
        );
    }
}

