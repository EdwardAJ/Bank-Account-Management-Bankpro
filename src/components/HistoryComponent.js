import React from 'react';
import SingleHistoryComponent from './SingleHistoryComponent';
import './HistoryComponent.css';

import axios from 'axios';
import { HISTORY_URL } from './../utils/endpoints.js';
import { HEADERS } from './../utils/header.js';
import getXMLResponse from './../utils/functions.js';
import { getCookie } from './../utils/cookie.js';

export default class HistoryComponent extends React.Component {
    constructor(props) {
        super(props);
        // State of child components:
        this.state = {
            childComponents: []
        };
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
                let childComponentsList = [];
                let keyIdx = 0;

                let amount = "";
                let type = "";
                let accountNumber = "";
                let timeDate = "";

                for (let i = 0; i < getXMLResponse(response.data).length; i++) {
                    if ((i + 1) % 4 === 1) {
                        accountNumber = getXMLResponse(response.data)[i].innerHTML;
                    } else if ((i + 1) % 4 === 2) {
                        amount = getXMLResponse(response.data)[i].innerHTML;
                    } else if (( i + 1) % 4 === 3) {
                        type = getXMLResponse(response.data)[i].innerHTML;
                    } else if ( (i + 1) % 4 === 0) {
                        let timeDateTemp = new Date(getXMLResponse(response.data)[i].innerHTML);
                        let hour = (timeDateTemp.getHours() + 7) % 24;
                        let minute = timeDateTemp.getMinutes();
                        let second = timeDateTemp.getSeconds();
                        let date = timeDateTemp.getDate();
                        let month = timeDateTemp.getMonth() + 1;
                        let year = timeDateTemp.getFullYear();
                        let finalDate = date + "-" + month + "-" + year + " " + hour + ":" + minute + ":" + second;
                        childComponentsList.push( <SingleHistoryComponent key={keyIdx} accountNumber={accountNumber} type={type} amount={amount} timeDate={finalDate}  />);
                        keyIdx++;
                    }
                }
                this.setState({childComponents: childComponentsList});
            }
        }).catch((error) => {
            console.log("Error: ", error);
        });
    }

    render() {
        return (
            <div className="wrapper">
                { [ this.state.childComponents ]}
            </div>
        );
    }
}
