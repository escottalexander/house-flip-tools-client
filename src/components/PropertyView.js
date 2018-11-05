import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './PropertyView.css';

export class PropertyView extends React.Component {
    render() {
        const property = this.props.property;
        return (
            <main className="PropertyView">
                <h2>{property.address}</h2>
                <p className="address2">{property.city}, {property.state} {property.zip}</p>
                <div className="ind-property">
                    <img className="fake-ind-prop" />
                    <div className="prop-info">
                        <p className="short-desc">{property.description}</p>

                        <p>Floor Size: <span className="floor-size">{property.floorSize.size}</span> {property.floorSize.unit}</p>
                        <p>Year Built: <span className="year-built">{property.yearBuilt}</span></p>
                        <p>Lot Size: <span className="lot-size">{property.lotSize.size}</span> {property.lotSize.unit}</p>
                        <p>Price: $<span className="price">{property.price}</span></p>
                        <p>Stories: <span className="stories">{property.stories}</span></p>
                        <p>Bedrooms: <span className="beds">{property.bedrooms}</span></p>
                        <p>Baths: <span className="baths">{property.bathrooms}</span></p>
                        <p>Basement: <span className="basement">{property.basement}</span></p>
                        <p>Foundation: <span className="foundation">{property.foundationType}</span></p>
                        <p>Exterior: <span className="exterior">{property.exteriorMaterial}</span></p>
                        <p>Roof Material: <span className="roof">{property.roofType}</span></p>
                        <p>Roof Size: <span className="roof-size">{property.roofSize.size}</span> {property.roofSize.unit}</p>

                        <h3>Planned Repairs and Improvements</h3>
                        <p>New Flooring: <span className="flooring">1680</span> sq/ft X $3.50 sq/ft = <span className="flooring-cost">$5880</span></p>
                        <p>New Roof: <span className="roof">840</span> sq/ft(single floor) X 1.0541(roof pitch) X $10 per
                    sq/ft(materials) = <span className="roof-cost">$8854.44</span></p>
                        <p>New Interior Paint: Wall Sq/Ft X Price of paint X coverage(1 gal = 400 sq/ft) = $8000</p>
                        <p>New Exterior Paint or Material: wall sq/ft X material cost per sq/ft = $8000</p>

                        <h3 className="projection">With these factors, this flip will cost you $189,734.44 total with $30,734.44 in
                            repairs. By our calculations, you need to make $270,000 on this property for it to be worth your
                    while.</h3>
                        <button>Edit Property</button>
                    </div>
                </div>
            </main>
        );
    }

};


const mapStateToProps = (state, props) => {
    const thisProperty = state.properties.find(property => property.slug === props.match.params.slug)
    const property = Object.assign(
        {},
        thisProperty
    );
    return {
        property
    };
};
export default connect(mapStateToProps)(PropertyView);

