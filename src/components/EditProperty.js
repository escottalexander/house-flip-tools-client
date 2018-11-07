import React from 'react';
//import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './EditProperty.css';
import Improvement from './Improvement';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import Input from './Input';
import { required, nonEmpty, email } from '../validators';
import { load as loadAccount } from '../actions'


export class EditProperty extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    componentDidMount() {
        this.props.dispatch(this.props.load(this.props.property))
    }
    onSubmit(values) {
        return fetch('/api/messages', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    if (
                        res.headers.has('content-type') &&
                        res.headers
                            .get('content-type')
                            .startsWith('application/json')
                    ) {
                        // It's a nice JSON error returned by us, so decode it
                        return res.json().then(err => Promise.reject(err));
                    }
                    // It's a less informative error returned by express
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    });
                }
                return;
            })
            .then(() => console.log('Submitted with values', values))
            .catch(err => {
                const { reason, message, location } = err;
                if (reason === 'ValidationError') {
                    // Convert ValidationErrors into SubmissionErrors for Redux Form
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                return Promise.reject(
                    new SubmissionError({
                        _error: 'Error submitting message'
                    })
                );
            });
    }


    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Message submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }
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
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {successMessage}
                {errorMessage}
                <Field
                    name="address"
                    type="text"
                    component={Input}
                    label="Address"
                    validate={[required]}
                />
                <Field
                    name="city"
                    type="text"
                    component={Input}
                    label="City"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="state"
                    type="text"
                    component={Input}
                    label="State"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="zip"
                    type="text"
                    component={Input}
                    label="Zip Code"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="description"
                    element="textarea"
                    component={Input}
                    label="Description"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="floorSize"
                    type="number"
                    component={Input}
                    label="Floor Size"
                    validate={[]}
                />
                <Field
                    name="yearBuilt"
                    type="text"
                    component={Input}
                    label="Year Built"
                    validate={[]}
                />
                <Field
                    name="lotSize"
                    type="number"
                    component={Input}
                    label="Lot Size"
                    validate={[]}
                />
                <Field
                    name="price"
                    type="number"
                    component={Input}
                    label="Sale Price"
                    validate={[]}
                />
                <Field
                    name="stories"
                    type="number"
                    component={Input}
                    label="Stories"
                    validate={[]}
                />
                <Field
                    name="bedrooms"
                    type="number"
                    component={Input}
                    label="Bedrooms"
                    validate={[]}
                />
                <Field
                    name="bathrooms"
                    type="number"
                    component={Input}
                    label="Bathrooms"
                    validate={[]}
                />
                <Field
                    name="basement"
                    type="text"
                    component={Input}
                    label="Basement"
                    validate={[]}
                />
                <Field
                    name="roofType"
                    type="text"
                    component={Input}
                    label="Roof Material"
                    validate={[]}
                />
                <Field
                    name="foundationType"
                    type="text"
                    component={Input}
                    label="Foundation Type"
                    validate={[]}
                />
                <Field
                    name="notes"
                    element="textarea"
                    component={Input}
                    label="Additional Notes"
                    validate={[]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Send message
                </button>
            </form>
            // <main className="EditProperty">
            //     <h2>Edit Property Details</h2>
            //     <div className="ind-property">
            //         <form className="prop-edit">
            //             <label>Address: <input className="address" value={property.address} /></label>
            //             <h1>{property.city} {property.state} {property.zip}</h1>
            //             <label>Add Images: <input type="file" name="myFile" multiple /></label>
            //             <label>Description: <textarea cols="40" rows="10" value={property.description} ></textarea></label>
            //             <label>Floor Size: <input className="floor-size" value={property.floorSize} /> ft²</label>
            //             <label>Year Built: <input className="year-built" value={property.yearBuilt} /></label>
            //             <label>Lot Size: <input className="lot-size" value={property.lotSize} /> acres</label>
            //             <label>Sale Price: $<input className="price" value={property.price} /></label>
            //             <label>Stories: <input className="stories" value={property.stories} /></label>
            //             <label>Bedrooms: <input className="beds" value={property.bedrooms} /></label>
            //             <label>Bathrooms: <input className="baths" value={property.bathrooms} /></label>
            //             <label>Basement: <input className="basement" value={property.basement} /></label>
            //             <label>Roof Material: <input className="roofType" value={property.roofType} /></label>
            //             <label>Foundation Type: <input className="foundationType" value={property.foundationType} /></label>
            //             <label>Additional Notes: <textarea cols="40" rows="10" value={property.notes} ></textarea></label>
            //             <button className="save-prop">Save Property</button>
            //             <h3>Planned Repairs and Improvements</h3>
            //             {improvements}
            //             <button>Add Repair or Improvement</button>
            //             <h3 className="projection">This house flip will cost you ${prettify(totalCost)} total with ${prettify(improvementCosts)} in
            //                 repairs.</h3>
            //             <button className="save-prop">Save Property</button>
            //         </form>
            //     </div>
            // </main>
        );
    }

};

const mapStateToProps = (state, props) => {
    const thisProperty = state.reducer.properties.find(property => property.slug === props.match.params.slug)
    const prettify = state.reducer.prettify;
    const property = Object.assign(
        {},
        thisProperty
    );
    return {
        property,
        prettify,
        load: loadAccount,
        initialValues: state.reducer.editPropertyData
    };
};

const formLink = reduxForm({
    form: 'editProperty',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editProperty', Object.keys(errors)[0]))
});

EditProperty = formLink(EditProperty)

export default connect(mapStateToProps)(EditProperty);