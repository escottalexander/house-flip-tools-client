import React from 'react';
import { connect } from 'react-redux';
import './RegisterPage.css';
import { reduxForm, Field, focus } from 'redux-form';
import Input from './Input';
import { Link, Redirect } from 'react-router-dom';
import { required, nonEmpty, email, matches, length, isTrimmed } from '../validators';
import { registerUser } from '../actions/users'


export function RegisterPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    let successMessage;
    if (props.submitSucceeded) {
        successMessage = (
            <div className="message message-success">
                Message submitted successfully
                </div>
        );
    }

    let errorMessage;
    if (props.error) {
        errorMessage = (
            <div className="message message-error">{props.error}</div>
        );
    }
    return (
        <div>
            <h2>Register</h2>
            <form
                onSubmit={props.handleSubmit(values =>
                    props.dispatch(registerUser(values))
                )}>
                {successMessage}
                {errorMessage}
                <Field
                    name="username"
                    type="text"
                    component={Input}
                    label="Username:"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <Field
                    name="email"
                    type="email"
                    component={Input}
                    label="Email Address:"
                    validate={[required, nonEmpty, email]}
                />
                <Field
                    name="password"
                    type="password"
                    component={Input}
                    label="Password:"
                    validate={[required, nonEmpty, length({ min: 10, max: 72 }), isTrimmed]}
                />
                <Field
                    name="password-again"
                    type="password"
                    component={Input}
                    label="Password Again:"
                    validate={[required, nonEmpty, matches('password')]}
                />
                <button
                    type="submit"
                    disabled={props.pristine || props.submitting}>
                    Register
                </button>
                <h4>Already have an account? <Link to="/login">Login here.</Link></h4>

            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    loggedIn: state.auth.currentUser !== null
});

const formLink = reduxForm({
    form: 'register',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('register', Object.keys(errors)[0]))
});

export default connect(mapStateToProps)(formLink(RegisterPage));

