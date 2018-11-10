import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Footer.css';

export function Footer(props) {
    const links = ["About This Site", "View The Source Code", "Privacy Policy"];
    const footerButtons = links.map((item, index) => {
        return <li key={index} className={item}><Link to={props.slugify(item)}>{item}</Link></li>
    })
    return (
        <footer className="Footer">
            <ul>
                {footerButtons}
            </ul>
        </footer>
    );

};

const mapStateToProps = state => ({
    slugify: state.reducer.slugify
});

export default connect(mapStateToProps)(Footer);