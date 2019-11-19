import React from 'react';
import './HistoryComponent.css';

import axios from 'axios';
import { HISTORY_URL } from './../utils/endpoints.js';
import { HEADERS } from './../utils/header.js';
import getXMLResponse from './../utils/functions.js';
import { getCookie } from './../utils/cookie.js';

export default class HistoryComponent extends React.Component {
    constructor(props) {
        super(props);
        // Request and get response from backend.
        this.fetchHistory();
    }

    fetchHistory() {
        let requestBody =
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="http://controllers.webservice.com/">' +
            '<soapenv:Header/>' +
            '<soapenv:Body>' +
                '<con:getHistory>' +
                    '<accountNumber>' + getCookie("auth") + '</accountNumber>' +
                '</con:getHistory>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';

        axios.post(HISTORY_URL, requestBody, {
            headers: HEADERS
        }).then((response) => {
            if (response.status === 200) {
                let key = 0;
                for (let i = 0; i < getXMLResponse(response.data).length; i++) {
                    if (i % 4 === 0) {
                        key++
                    }
                    getXMLResponse(response.data)[i].innerHTML
                }
            }
        }).catch((error) => {
            console.log("Error: ", error);
        })

    }
}
