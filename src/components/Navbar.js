import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css';

export function Navbar(props) {
    const links = props.loggedIn ? ["Home", "Logout", "Dashboard"] : ["Home", "Login", "Register"];
    const navButtons = links.map((item, index) => {
        return <li key={index} className={item}><NavLink to={`/${props.slugify(item)}`} activeClassName="selected">{item}</NavLink></li>
    });
    return (
        <nav className="Navbar">
            <input type="checkbox" id="menu"></input>
            <label htmlFor="menu">
                Menu
            </label>
            <ul>
                {navButtons}
            </ul>
        </nav>
    );
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    slugify: state.reducer.slugify
});

export default connect(mapStateToProps, null, null, {
    pure: false
})(Navbar);
