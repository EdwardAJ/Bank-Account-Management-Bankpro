import React from 'react';
import './TransferComponent.css';

import axios from 'axios';
import { TRANSFER_URL } from './../utils/endpoints.js';
import { HEADERS } from './../utils/header.js';
import getXMLResponse from './../utils/functions.js';
import { getCookie } from './../utils/cookie.js';

export default class TransferComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            destAccount: '',
            amount: ''
        };
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleDestAccountChange = this.handleDestAccountChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAmountChange (event) {
        this.setState({amount: event.target.value});
    }

    handleDestAccountChange (event) {
        this.setState({destAccount: event.target.value});
    }

    handleSubmit (event) {
        var isVirtualAccount = false;
        if (this.state.destAccount.length > 8) {
            isVirtualAccount = true;
        }
        let requestBody =
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="http://controllers.webservice.com/">' +
            '<soapenv:Header/>' +
            '<soapenv:Body>' +
                '<con:transferFund>' +
                    '<srcAccountNumber>' + getCookie('auth') + '</srcAccountNumber>' +
                    '<destAccountNumber>' + this.state.destAccount + '</destAccountNumber>' +
                    '<amount>' + this.state.amount + '</amount>' +
                    '<isVirtualAccount>' + isVirtualAccount + '</isVirtualAccount>' +
                '</con:transferFund>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';

        axios.post(TRANSFER_URL, requestBody, {
            headers: HEADERS
        }).then((response) => {
            if (response.status === 200) {
                let resultStr = getXMLResponse(response.data)[0].innerHTML;
                alert(resultStr);
            }
        }).catch((error) => {
            alert("Error: ", error);
        });

        event.preventDefault();
    }

    render() {
        return (
            <div className="container-margin">
                <p className="login-header"> Nomor Rekening Transfer </p>
                <div className="form-area">
                    <form>
                        <input className="form" type="text" value={ this.state.destAccount } onChange={ this.handleDestAccountChange } placeholder="Example: 13517070" />
                    </form> 
                </div>
                <p className="login-header"> Jumlah Transfer </p>
                <div className="form-area">
                    <form>
                        <input className="form" type="text" value={ this.state.amount } onChange={ this.handleAmountChange } placeholder="Example: 40000" />
                    </form> 
                </div>
                <form>
                    <button className="submit" onClick={ this.handleSubmit }> TRANSFER </button>
                </form>
            </div>
        );
    }
}