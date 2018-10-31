import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './EditProperty.css';

export function EditProperty(props) {
    return (
        <main className="EditProperty">
            <h2>Edit Property Details</h2>
            <div class="ind-property">
                <div class="prop-edit">
                    <label>Address: <input class="address" /></label>
                    <label>Add Images: <input type="file" name="myFile" multiple /></label>
                    <label>Description: <textarea cols="30" rows="5" ></textarea></label>
                    <label>Floor Size: <input class="floor-size" /></label>
                    <label>Year Built: <input class="year-built" /></label>
                    <label>Lot Size: <input class="lot-size" /></label>
                    <label>Price: $<input class="price" /></label>
                    <label>Stories: <input class="stories" /></label>
                    <label>Bedrooms: <input class="beds" /></label>

                    <h3>Planned Repairs and Improvements</h3>
                    <p>New Flooring: <span class="flooring">1680</span> sq/ft X $3.50 sq/ft = <span class="flooring-cost">$5880</span><button>Edit</button></p>
                    <p>New Roof: <span class="roof">840</span> sq/ft(single floor) X 1.0541(roof pitch) X $10 per
                    sq/ft(materials) = <span class="roof-cost">$8854.44</span> <button>Edit</button></p>
                    <p>New Interior Paint: Wall Sq/Ft X Price of paint X coverage(1 gal = 400 sq/ft) = $8000 <button>Edit</button></p>
                    <p>New Exterior Paint or Material: wall sq/ft X material cost per sq/ft = $8000 <button>Edit</button></p>
                    <button>Add Repair or Improvement</button>
                    <h3 class="projection">With these factors, this flip will cost you $189,734.44 total with $30,734.44 in
                        repairs. By our calculations, you need to make $270,000 on this property for it to be worth your
                    while.</h3>
                    <button>Save Property</button>
                </div>
            </div>
        </main>
    );

};

const mapStateToProps = state => ({
    properties: state.properties
});

export default connect(mapStateToProps)(Dashboard);