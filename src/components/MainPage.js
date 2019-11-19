import React from 'react';
import './MainPage.css';
import InfoComponent from './InfoComponent';
import TransferComponent from './TransferComponent';

export default class MainPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            choice: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (choiceNum) {
        this.setState({choice: choiceNum});
    }

    render() {
        let choiceNum = this.state.choice;
        let component;
        if (choiceNum === 1) {
            component = <InfoComponent />
        } else if (choiceNum === 2) {
            component = <TransferComponent />
        } else if (choiceNum === 3) {
        }
        return (
            <div className="container">
                <div className="section-top">
                </div>
                <div className="section-bottom">
                    <div className="section-left">
                        <div className="menu">
                            <h2> bankpro </h2> 
                            <p className={ this.state.choice===1 ? 'active': 'default'} onClick={ () => this.handleClick(1) }> Home </p>
                            <p className={ this.state.choice===2 ? 'active': 'default'} onClick={ () => this.handleClick(2) }> Transfer </p>
                            <p className={ this.state.choice===3 ? 'active': 'default'} onClick={ () => this.handleClick(3) }> History </p>
                        </div>
                    </div>
                    <div className="section-right">
                        <div class="wrapper">
                            <div className="card">
                                <div className="card-content">
                                    <p className="type"> Debit </p>
                                    <p className="amount"> 20000 </p>
                                    <p className="account-number"> 13517115 </p>
                                    <p className="time-date"> 2019-11-18 17:15:05 </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-content">
                                    <p className="type"> Debit </p>
                                    <p className="amount"> 20000 </p>
                                    <p className="account-number"> 13517115 </p>
                                    <p className="time-date"> 2019-11-18 17:15:05 </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-content">
                                    <p className="type"> Debit </p>
                                    <p className="amount"> 20000 </p>
                                    <p className="account-number"> 13517115 </p>
                                    <p className="time-date"> 2019-11-18 17:15:05 </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-content">
                                    <p className="type"> Debit </p>
                                    <p className="amount"> 20000 </p>
                                    <p className="account-number"> 13517115 </p>
                                    <p className="time-date"> 2019-11-18 17:15:05 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

