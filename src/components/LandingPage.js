import React from 'react';
import './LandingPage.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserProperties, deleteProperty, addProperty, exampleAccountInitialized, exampleAccountUninitialized } from '../actions';
import { login } from '../actions/auth';
import { exampleProperties } from '../exampleAccountState';

export class LandingPage extends React.Component {
    onSubmit() {
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
                <h2 className="header">House Flip Tools</h2>
                <div className="content">
                    <img className="main-img" src="./housefliptools.png" alt="A before and after picture of a house that has been flipped." />
                    <p>House Flip Tools is a useful house flipping cost analyzer that aims to help you discover the financial feasibility of a "flip".</p>

                    <p>Login to view your properties or click the button below to see an example account.</p>
                    <button onClick={() => this.onSubmit()}>Example Account</button>
                </div>
            </main>
        );
    }
};

const mapStateToProps = (state, props) => {
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
        exampleAccountInitialized,
        exampleAccountUninitialized,
        exampleReady
    };
};


export default connect(mapStateToProps)(LandingPage);