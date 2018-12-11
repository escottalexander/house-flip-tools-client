import React from 'react';
import { connect } from 'react-redux';
import './AnalysisModal.css';
import { hideAnalysis, changeMargin } from '../actions'


export class AnalysisModal extends React.Component {
    onChange(value) {
        this.props.dispatch(this.props.changeMargin(value))
    }
    render() {
        const prettify = this.props.prettify;
        const property = this.props.property;
        const marginValue = this.props.marginValue;
        let improvementCosts = 0;
        const improvements = property.improvements.map((item, index) => {
            improvementCosts += parseInt(item.cost);
            return (
                <div key={`${index}-${item.name}`}>
                    <div className="left">
                        <p>{item.name}: </p>
                    </div>
                    <div className="right">
                        <p>${prettify(item.cost)}
                        </p>
                    </div>
                </div>
            )
        }
        );
        const totalCost = property.price + improvementCosts;
        const finalSale = prettify(Math.floor(totalCost * ((100 + parseInt(marginValue)) / 100)))
        return (

            <div className="overlay">
                <div className="analysis-modal">
                    <button
                        className="close-x"
                        onClick={() => this.props.dispatch(this.props.hideAnalysis())}>
                        X
                    </button>
                    <h3 className="header">{property.address}</h3>
                    <div className="analysis-content">
                        <div className="left">
                            <p>Cost of property: </p>
                        </div>
                        <div className="right">
                            <p>${prettify(property.price)}</p>
                        </div>
                        <h4>Improvements</h4>
                        {improvements}

                        <h4>That works out to be ${prettify(totalCost)} in total.</h4>
                        <label htmlFor="margin">What is your desired profit margin? <input type="number" id="margin" step="5" min="0" max="100" onChange={event => this.onChange(event.target.value)}>
                        </input>%</label>
                        <p>In order to have a {marginValue}% profit margin on this
                         property, the local house market will need to support a sale
                         price of <b>${finalSale}</b>.</p>
                    </div>
                    <button
                        className="close-large"
                        onClick={() => this.props.dispatch(this.props.hideAnalysis())}>
                        Close
                    </button>
                </div>
            </div>
        )
    }

};

const mapStateToProps = (state, props) => {
    const prettify = state.reducer.prettify;
    const marginValue = state.reducer.profitMargin;
    const propertyData = props.data;
    const property = Object.assign(
        {},
        propertyData
    );
    return {
        marginValue,
        changeMargin,
        property,
        hideAnalysis,
        prettify,
    };
};

export default connect(mapStateToProps)(AnalysisModal);