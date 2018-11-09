import React from 'react';
import { connect } from 'react-redux';
import './EditProperty.css';
import { reduxForm, Field } from 'redux-form';
import Input from './Input';
import { required } from '../validators';
import { addProperty } from '../actions'


export class AddProperty extends React.Component {
    onSubmit(values) {
        window.history.back();
        return this.props.dispatch(this.props.addProperty(values));
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
                    label="Address:"
                    validate={[required]}
                />
                <Field
                    name="city"
                    type="text"
                    component={Input}
                    label="City:"
                    validate={[]}
                />
                <Field
                    name="state"
                    type="text"
                    component={Input}
                    label="State:"
                    validate={[]}
                />
                <Field
                    name="zip"
                    type="text"
                    component={Input}
                    label="Zip Code:"
                    validate={[]}
                />
                <Field
                    name="description"
                    element="textarea"
                    component={Input}
                    label="Description:"
                    validate={[]}
                />
                <Field
                    name="floorSize"
                    type="number"
                    component={Input}
                    label="Floor Size:"
                    validate={[]}
                />
                <Field
                    name="yearBuilt"
                    type="text"
                    component={Input}
                    label="Year Built:"
                    validate={[]}
                />
                <Field
                    name="lotSize"
                    type="number"
                    component={Input}
                    label="Lot Size:"
                    validate={[]}
                />
                <Field
                    name="price"
                    type="number"
                    component={Input}
                    label="Sale Price:"
                    validate={[]}
                />
                <Field
                    name="stories"
                    type="number"
                    component={Input}
                    label="Stories:"
                    validate={[]}
                />
                <Field
                    name="bedrooms"
                    type="number"
                    component={Input}
                    label="Bedrooms:"
                    validate={[]}
                />
                <Field
                    name="bathrooms"
                    type="number"
                    component={Input}
                    label="Bathrooms:"
                    validate={[]}
                />
                <Field
                    name="basement"
                    type="text"
                    component={Input}
                    label="Basement:"
                    validate={[]}
                />
                <Field
                    name="roofType"
                    type="text"
                    component={Input}
                    label="Roof Material:"
                    validate={[]}
                />
                <Field
                    name="foundationType"
                    type="text"
                    component={Input}
                    label="Foundation Type:"
                    validate={[]}
                />
                <Field
                    name="notes"
                    element="textarea"
                    component={Input}
                    label="Additional Notes:"
                    validate={[]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Save
                </button>
                <button
                    type="button"
                    onClick={() => window.history.back()}>
                    Cancel
                </button>
            </form>
        );
    }

};

const mapStateToProps = (state, props) => {
    return {
        addProperty
    };
};

const formLink = reduxForm({
    form: 'addProperty',
    // onSubmitFail: (errors, dispatch) =>
    //     dispatch(focus('addProperty', Object.keys(errors)[0]))
});

AddProperty = formLink(AddProperty)

export default connect(mapStateToProps)(AddProperty);