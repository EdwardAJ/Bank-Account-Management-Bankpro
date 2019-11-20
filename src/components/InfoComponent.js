import React from 'react';
import './InfoComponent.css';

import axios from 'axios';
import { INFO_URL } from './../utils/endpoints.js';
import { HEADERS } from './../utils/header.js';
import getXMLResponse from './../utils/functions.js';
import { getCookie } from './../utils/cookie.js';

export default class InfoComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            nama: '',
            noRek: '',
            bank: '',
            saldo: ''
        };
        this.fetchUserInfo();
    }

    fetchUserInfo() {
        let requestBody =
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="http://controllers.webservice.com/">' +
            '<soapenv:Header/>' +
            '<soapenv:Body>' +
                '<con:fetchUserInfo>' +
                    '<accountNumber>' + getCookie("auth") + '</accountNumber>' +
                '</con:fetchUserInfo>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';

        axios.post(INFO_URL, requestBody, {
            headers: HEADERS
        }).then((response) => {
            if (response.status === 200) {
                let nama = getXMLResponse(response.data)[0].innerHTML;
                let noRek = getXMLResponse(response.data)[1].innerHTML;
                let bank = getXMLResponse(response.data)[2].innerHTML;
                let saldo = getXMLResponse(response.data)[3].innerHTML;
                this.setState({ nama: nama, noRek: noRek, bank: bank, saldo: saldo });
            }
        }).catch((error) => {
            alert("Error: ", error);
        });
    }

    render() {
        let nama = this.state.nama;
        let noRek = this.state.noRek;
        let bank = this.state.bank;
        let saldo = this.state.saldo;
        return (
            <div className="info">
                <p> Nasabah </p>
                <h3> { nama } </h3>
                <p> Nomor Rekening </p>
                <h3> { noRek } </h3>
                <p> Bank </p>
                <h3> { bank } </h3>
                <p> Saldo Terakhir </p>
                <h3> { saldo } </h3>  
            </div>
        );
    }
}