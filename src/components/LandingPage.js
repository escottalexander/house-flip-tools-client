import React from 'react';
import './LandingPage.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserProperties, deleteProperty, addImprovement, addProperty, exampleAccountInitialized, exampleAccountUninitialized } from '../actions';
import { login } from '../actions/auth';
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import { exampleProperties } from '../exampleAccountState';

export class LandingPage extends React.Component {
    exampleAccountSetup() {
        this.props.dispatch(this.props.login("ExampleAccount", "password10"))
            .then(() => this.props.dispatch(this.props.getUserProperties(this.props.user)))
            .then(() => {
                for (let index in this.props.properties) {
                    this.props.dispatch(this.props.deleteProperty(this.props.properties[index]));
                }
            })
            .then(() => {
                for (let item in exampleProperties) {
                    this.props.dispatch(this.props.addProperty(exampleProperties[item]));
                }
            })
            .then(() => this.props.dispatch(this.props.exampleAccountInitialized()))
            .then(() => this.props.dispatch(this.props.exampleAccountUninitialized()))
    }
    render() {
        if (this.props.exampleReady) {
            return <Redirect to='/dashboard' />
        }
        return (
            <main className="LandingPage">
                <h1 className="header">House Flip Tools</h1>
                <div className="content">
                    <img className="main-img" src="./housefliptools.png" alt="A before and after of a house that has been flipped." />
                    <p>House Flip Tools is a useful house flipping cost analyzer that aims to help you discover the financial feasibility of a "flip".</p>

                    <p>Login to view your properties or click the button below to see an example account.</p>
                    <button className="example-account-button" onClick={() => this.exampleAccountSetup()}>Example Account</button>
                </div>
                {this.props.loginVisible ? <LoginModal /> : ""}
                {this.props.registerVisible ? <RegisterModal /> : ""}
            </main>
        );
    }
};

const mapStateToProps = (state, props) => {
    const loginVisible = props.match.path === "/login";
    const registerVisible = props.match.path === "/register";
    const user = state.auth.currentUser;
    const properties = state.reducer.properties;
    const exampleReady = state.reducer.exampleReady;
    return {
        user,
        properties,
        login,
        getUserProperties,
        deleteProperty,
        addProperty,
        addImprovement,
        loginVisible,
        registerVisible,
        exampleAccountInitialized,
        exampleAccountUninitialized,
        exampleReady
    };
};


export default connect(mapStateToProps)(LandingPage);