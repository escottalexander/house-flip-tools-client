import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Dashboard.css';
import Property from './Property'

export class Dashboard extends React.Component {



    render() {
        const properties = this.props.properties.map((item, index) => {
            return <Property key={index} data={item} />
        })
        return (
            <main className="Dashboard">

                <h2>Properties</h2>
                {properties}
                <button>Add Property</button>
            </main>
        );
    }
};

const mapStateToProps = state => ({
    properties: state.reducer.properties
});

export default connect(mapStateToProps)(Dashboard);