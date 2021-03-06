/* eslint react/prop-types: 0 */
import React from 'react';
import './SingleHistoryComponent.css';

export default class SingleHistoryComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <p className="type"> { this.props.type } </p>
                    <p className="amount"> Rp{ this.props.amount } </p>
                    <p className="account-number"> No Rek: { this.props.accountNumber } </p>
                    <p className="time-date"> { this.props.timeDate }  </p>
                </div>
            </div>
        );
    }
}