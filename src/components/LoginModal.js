import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './Input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import './LoginModal.css';

export function LoginModal(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    let error;
    if (props.error) {
        error = (
            <div className="form-error" aria-live="polite">
                {props.error}
            </div>
        );
    }
    return (
        <div className="overlay">
            <div className="LoginModal">
                <button
                    className="close-x"
                    onClick={() => window.history.back()}>
                    X
                    </button>
                <h2 className="header">Log In</h2>
                <form
                    className="login-form"
                    onSubmit={props.handleSubmit(values =>
                        props.dispatch(login(values.username, values.password)
                        ))}>

                    {error}
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        label="Username"
                        id="username"
                        validate={[required, nonEmpty]}
                    />
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        label="Password"
                        id="password"
                        validate={[required, nonEmpty]}
                    />
                    <button disabled={props.pristine || props.submitting}>
                        Log in
                </button>
                    <h4>Don't have an account? <Link to="/register">Register here.</Link></h4>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

const formLink = reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
});

export default connect(mapStateToProps)(formLink(LoginModal));