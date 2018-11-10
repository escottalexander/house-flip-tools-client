import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css';

export function Navbar(props) {
    const links = ["Home", "Login", "Register"];
    const navButtons = links.map((item, index) => {
        return <li key={index} className={item}><NavLink to={`/${props.slugify(item)}`} activeClassName="selected">{item}</NavLink></li>
    });
    return (
        <nav className="Navbar">
            <ul>
                {navButtons}
            </ul>
        </nav>
    );
};

const mapStateToProps = state => ({
    slugify: state.reducer.slugify
});

export default connect(mapStateToProps, null, null, {
    pure: false
})(Navbar);
