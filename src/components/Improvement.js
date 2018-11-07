import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Improvement.css';
import { editImprovement } from '../actions'

export class Improvement extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const prettify = this.props.prettify;
        const data = this.props.data;
        if (data.edit) {
            return (
                <div className="improvement">
                    <label>Improvement: <input className="improvementName" value={data.name} /></label><label>Cost: $<input className="cost" value={data.cost} /></label><button>Save</button><button>Delete</button>
                </div>
            )
        } else {
            return (
                <div className="improvement">
                    <p>{data.name} - Cost: ${prettify(data.cost)} <button onClick={() => this.props.dispatch(this.props.editImprovement(this.props.data))}>Edit</button><button>Delete</button></p>
                </div>
            )
        }


    }

};

const mapStateToProps = (state, props) => {
    const thisImprovement = props.data;
    const prettify = state.reducer.prettify;
    const improvement = Object.assign(
        {},
        thisImprovement
    );
    return {
        improvement,
        prettify,
        editImprovement
    };
};
export default connect(mapStateToProps)(Improvement);