import React from 'react';
import './MainPage.css';
import InfoComponent from './InfoComponent'

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

        } else if (choiceNum === 3) {

        }
        return (
            <div className="container">
                <div className="section-left">
                    <div className="menu">
                        <h2> bankpro </h2> 
                        <p className={ this.state.choice===1 ? 'active': 'default'} onClick={ () => this.handleClick(1) }> Home </p>
                        <p className={ this.state.choice===2 ? 'active': 'default'} onClick={ () => this.handleClick(2) }> Transfer </p>
                        <p className={ this.state.choice===3 ? 'active': 'default'} onClick={ () => this.handleClick(3) }> History </p>
                    </div>
                </div>
                <div className="section-right">
                    { component }
                </div>
            </div>
        );
    }
}

