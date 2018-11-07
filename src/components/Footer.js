import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Footer.css';

export class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const links = ["About This Site", "View The Source Code", "Privacy Policy"];
        const footerButtons = links.map((item, index) => {
            return <li key={index} className={item}><Link to={this.props.slugify(item)}>{item}</Link></li>
        })
        return (
            <footer className="Footer">
                <ul>
                    {footerButtons}
                </ul>
            </footer>
        );
    }
};

const mapStateToProps = state => ({
    slugify: state.reducer.slugify
});

export default connect(mapStateToProps)(Footer);