import React from 'react';
import './MainPage.css';
import InfoComponent from './InfoComponent';
import TransferComponent from './TransferComponent';
import HistoryComponent from './HistoryComponent';

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
            component = <InfoComponent />;
        } else if (choiceNum === 2) {
            component = <TransferComponent />;
        } else if (choiceNum === 3) {
            component = <HistoryComponent />;
        }
        return (
            <div className="container">
                <div className="section-top">
                </div>
                <div className="section-bottom">
                    <div className="section-left">
                        <div className="menu">
                            <h2> bankpro </h2> 
                            <p id="id-1" className={ this.state.choice===1 ? 'active': 'default'} onClick={ () => this.handleClick(1) }> Home </p>
                            <p id="id-2" className={ this.state.choice===2 ? 'active': 'default'} onClick={ () => this.handleClick(2) }> Transfer </p>
                            <p id="id-3" className={ this.state.choice===3 ? 'active': 'default'} onClick={ () => this.handleClick(3) }> History </p>
                        </div>
                    </div>
                    <div className="section-right">
                        { component }
                    </div>
                </div>
            </div>
        );
    }
}

