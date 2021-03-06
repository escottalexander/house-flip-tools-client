import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Dashboard.css';
import Property from './Property'
import { getUserProperties } from '../actions'

export class Dashboard extends React.Component {
    componentDidMount() {
        if (this.props.user === null) {
            return window.location.replace("/login")
        } else {
            this.props.dispatch(this.props.getUserProperties(this.props.user))
        }
    }
    render() {

        const properties = this.props.properties.map((item, index) => {
            return <Property key={item.slug} data={item} />
        })
        return (
            <main className="Dashboard">

                <h1 className="header">Properties</h1>
                <div className="properties">
                    {properties}
                    {properties.length === 0 ?
                        <h3>It looks like you don't have any properties. Click the buttopn below to add one.</h3>
                        :
                        <h3>Click the button below to add a new property.</h3>
                    }
                    <button><Link to='/dashboard/add'>Add Property</Link></button>
                </div>
            </main>
        );
    }
};

const mapStateToProps = (state, props) => {
    const properties = state.reducer.properties;
    const user = state.auth.currentUser;
    const loading = state.auth.loading;
    return {
        user,
        properties,
        getUserProperties,
        loading
    };
};

export default connect(mapStateToProps)(Dashboard);