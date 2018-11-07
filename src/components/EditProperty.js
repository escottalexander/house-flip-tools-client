import React from 'react';
import { connect } from 'react-redux';
import './EditProperty.css';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import Input from './Input';
import { required, nonEmpty, email } from '../validators';
import { loadData as loadAccount, saveProperty, clearEditData } from '../actions'


export class EditProperty extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.dispatch(this.props.loadData(this.props.property))
    }
    componentWillUnmount() {
        this.props.dispatch(this.props.clearEditData())
    }

    onSubmit(values) {
        window.history.back();
        return this.props.dispatch(this.props.saveProperty(values));

        // return fetch('/api/messages', {
        //     method: 'POST',
        //     body: JSON.stringify(values),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(res => {
        //     if (!res.ok) {
        //         if (
        //             res.headers.has('content-type') &&
        //             res.headers
        //                 .get('content-type')
        //                 .startsWith('application/json')
        //         ) {
        //             // It's a nice JSON error returned by us, so decode it
        //             return res.json().then(err => Promise.reject(err));
        //         }
        //         // It's a less informative error returned by express
        //         return Promise.reject({
        //             code: res.status,
        //             message: res.statusText
        //         });
        //     }
        //     return;
        // })
        // .then(() => console.log('Submitted with values', values))
        // .catch(err => {
        //     const { reason, message, location } = err;
        //     if (reason === 'ValidationError') {
        //         // Convert ValidationErrors into SubmissionErrors for Redux Form
        //         return Promise.reject(
        //             new SubmissionError({
        //                 [location]: message
        //             })
        //         );
        //     }
        //     return Promise.reject(
        //         new SubmissionError({
        //             _error: 'Error submitting message'
        //         })
        //     );
        // });
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
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="state"
                    type="text"
                    component={Input}
                    label="State:"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="zip"
                    type="text"
                    component={Input}
                    label="Zip Code:"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="description"
                    element="textarea"
                    component={Input}
                    label="Description:"
                    validate={[required, nonEmpty]}
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
    const thisProperty = state.reducer.properties.find(property => property.slug === props.match.params.slug)
    const property = Object.assign(
        {},
        thisProperty
    );
    return {
        property,
        loadData: loadAccount,
        saveProperty,
        clearEditData,
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