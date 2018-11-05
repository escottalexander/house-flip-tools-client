import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './EditProperty.css';


export class EditProperty extends React.Component {
    constructor(props) {
        super(props)
        
    }
    
    render() {
        const property = this.props.property;

    return (
        <main className="EditProperty">
            <h2>Edit Property Details</h2>
            <div className="ind-property">
                <div className="prop-edit">
                    <label>Address: <input className="address" value={property.address} /></label>
                    <label>Add Images: <input type="file" name="myFile" multiple /></label>
                    <label>Description: <textarea cols="30" rows="5" value={property.description} ></textarea></label>
                    <label>Floor Size: <input className="floor-size" value={`${property.floorSize.size} ${property.floorSize.unit}`} /></label>
                    <label>Year Built: <input className="year-built" value={property.yearBuilt} /></label>
                    <label>Lot Size: <input className="lot-size" value={`${property.lotSize.size} ${property.lotSize.unit}`} /></label>
                    <label>Price: $<input className="price" /></label>
                    <label>Stories: <input className="stories" /></label>
                    <label>Bedrooms: <input className="beds" /></label>

                    <h3>Planned Repairs and Improvements</h3>
                    <p>New Flooring: <span className="flooring">1680</span> sq/ft X $3.50 sq/ft = <span className="flooring-cost">$5880</span><button>Edit</button></p>
                    <p>New Roof: <span className="roof">840</span> sq/ft(single floor) X 1.0541(roof pitch) X $10 per
                    sq/ft(materials) = <span className="roof-cost">$8854.44</span> <button>Edit</button></p>
                    <p>New Interior Paint: Wall Sq/Ft X Price of paint X coverage(1 gal = 400 sq/ft) = $8000 <button>Edit</button></p>
                    <p>New Exterior Paint or Material: wall sq/ft X material cost per sq/ft = $8000 <button>Edit</button></p>
                    <button>Add Repair or Improvement</button>
                    <h3 className="projection">With these factors, this flip will cost you $189,734.44 total with $30,734.44 in
                        repairs. By our calculations, you need to make $270,000 on this property for it to be worth your
                    while.</h3>
                    <button>Save Property</button>
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
export default connect(mapStateToProps)(EditProperty);