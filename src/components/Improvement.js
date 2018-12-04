import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Improvement.css';
import { deleteImprovement } from '../actions'


export class Improvement extends React.Component {
    deleteImprovement() {
        const data = this.props.improvement;
        data.slug = this.props.slug;
        this.props.dispatch(this.props.deleteImprovement(data))
    }

    render() {
        const prettify = this.props.prettify;
        const data = this.props.data;
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
    const slug = state.reducer.properties.find(property => property.propertyId === props.data.property_id).slug;
    const improvement = Object.assign(
        {},
        thisImprovement
    );
    return {
        improvement,
        slug,
        prettify,
        deleteImprovement,
        initialValues: state.reducer.editPropertyData
    };
};

export default connect(mapStateToProps)(Improvement);