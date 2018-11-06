import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Improvement from './Improvement';
import './PropertyView.css';

export class PropertyView extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const prettify = this.props.prettify;
        const property = this.props.property;
        let improvementCosts = 0;
        const improvements = property.improvements.map((item, index) => {
            improvementCosts += item.cost;
            return <Improvement key={index} data={item} />
        }
        );
        const totalCost = property.price + improvementCosts;
        return (
            <main className="PropertyView">
                <h2>{property.address}</h2>
                <p className="address2">{property.city}, {property.state} {property.zip}</p>
                <div className="ind-property">
                    <img className="fake-ind-prop" />
                    <div className="prop-info">
                        <p className="short-desc">{property.description}</p>
                        <p>Floor Size: {prettify(property.floorSize)} ft²</p>
                        <p>Year Built: {property.yearBuilt}</p>
                        <p>Lot Size: {property.lotSize} acres</p>
                        <p>Price: ${prettify(property.price)}</p>
                        <p>Stories: {property.stories}</p>
                        <p>Bedrooms: {property.bedrooms}</p>
                        <p>Baths: {property.bathrooms}</p>
                        <p>Basement: {property.basement}</p>
                        <p>Foundation: {property.foundationType}</p>
                        <p>Exterior: {property.exteriorMaterial}</p>
                        <p>Roof Material: {property.roofType}</p>
                        <p>Additional Notes: {property.notes}</p>
                        <h3>Planned Repairs and Improvements</h3>
                        {improvements}
                        <h3 className="projection">This house flip will cost you ${prettify(totalCost)} total with ${prettify(improvementCosts)} in
                            repairs.</h3>
                        <button><Link to={`/dashboard/${property.slug}/edit`}>Edit Property</Link></button>
                    </div>
                </div>
            </main>
        );
    }

};


const mapStateToProps = (state, props) => {
    const thisProperty = state.properties.find(property => property.slug === props.match.params.slug)
    const prettify = state.prettify;
    const property = Object.assign(
        {},
        thisProperty
    );
    return {
        property,
        prettify
    };
};
export default connect(mapStateToProps)(PropertyView);

