import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './EditProperty.css';
import Improvement from './Improvement';


export class EditProperty extends React.Component {
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
            <main className="EditProperty">
                <h2>Edit Property Details</h2>
                <div className="ind-property">
                    <form className="prop-edit">
                        <label>Address: <input className="address" value={property.address} /></label>
                        <label>Add Images: <input type="file" name="myFile" multiple /></label>
                        <label>Description: <textarea cols="40" rows="10" value={property.description} ></textarea></label>
                        <label>Floor Size: <input className="floor-size" value={property.floorSize} /> ft²</label>
                        <label>Year Built: <input className="year-built" value={property.yearBuilt} /></label>
                        <label>Lot Size: <input className="lot-size" value={property.lotSize} /> acres</label>
                        <label>Sale Price: $<input className="price" value={property.price} /></label>
                        <label>Projected Value: $<input className="projectedValue" value={property.projectedValue} /></label>
                        <label>Stories: <input className="stories" value={property.stories} /></label>
                        <label>Bedrooms: <input className="beds" value={property.bedrooms} /></label>
                        <label>Bathrooms: <input className="baths" value={property.bathrooms} /></label>
                        <label>Basement: <input className="basement" value={property.basement} /></label>
                        <label>Roof Material: <input className="roofType" value={property.roofType} /></label>
                        <label>Foundation Type: <input className="foundationType" value={property.foundationType} /></label>
                        <label>Additional Notes: <textarea cols="40" rows="10" value={property.notes} ></textarea></label>
                        <button className="save-prop">Save Property</button>
                        <h3>Planned Repairs and Improvements</h3>
                        {improvements}
                        <button>Add Repair or Improvement</button>
                        <h3 className="projection">This house flip will cost you ${prettify(totalCost)} total with ${prettify(improvementCosts)} in
                            repairs.</h3>
                        <button className="save-prop">Save Property</button>
                    </form>
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
export default connect(mapStateToProps)(EditProperty);