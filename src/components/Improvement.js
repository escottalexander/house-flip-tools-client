import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Improvement.css';
import { EditImprovementElement } from './EditImprovement';
import { required, nonEmpty, email } from '../validators';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import { editImprovement, loadData as loadAccount, clearEditData, deleteImprovement } from '../actions'


export class Improvement extends React.Component {
    constructor(props) {
        super(props)
    }
    deleteImprovement() {
        this.props.dispatch(this.props.deleteImprovement(this.props.improvement))
    }

    render() {
        const prettify = this.props.prettify;
        const data = this.props.data;
        //console.log(data)
        return (
            <div className="improvement">
                <p>{data.name} - Cost: ${prettify(data.cost)}
                    <button><Link to={`/dashboard/${this.props.slug}/improvement/${data.id}`}>Edit</Link>
                    </button>
                    <button
                        onClick={() => this.deleteImprovement()}>
                        Delete
                    </button></p>
            </div>
        )
    }

};

const mapStateToProps = (state, props) => {
    const thisImprovement = props.data;
    const prettify = state.reducer.prettify;
    const slug = state.reducer.properties.find(property => property.propertyId === props.data.propertyId).slug;
    const improvement = Object.assign(
        {},
        thisImprovement
    );
    return {
        loadData: loadAccount,
        improvement,
        slug,
        prettify,
        editImprovement,
        deleteImprovement,
        clearEditData,
        initialValues: state.reducer.editPropertyData
    };
};

export default connect(mapStateToProps)(Improvement);