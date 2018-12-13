import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearAuth } from '../actions/auth'


export function Logout(props) {
    props.dispatch(clearAuth())
    return < Redirect to="/home" />;
};

const mapStateToProps = (state) => ({
    loggedIn: state.auth.currentUser !== null


});



export default connect(mapStateToProps)(Logout);

