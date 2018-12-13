import React from 'react';
import { connect } from 'react-redux';
import './EditProperty.css';
import { reduxForm, Field, focus } from 'redux-form';
import FileInput from './FileInput'
import Input from './Input';
import { required, nonEmpty } from '../validators';
import { loadData as loadAccount, saveProperty, clearEditData } from '../actions'


export class EditProperty extends React.Component {
    componentDidMount() {
        this.props.dispatch(this.props.loadData(this.props.property))
    }
    componentWillUnmount() {
        this.props.dispatch(this.props.clearEditData())
    }

    onSubmit(values) {
        return this.props.dispatch(this.props.saveProperty(values))
            .then(() => window.history.back())
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
            <main>
                <form
                    className="EditProperty"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <h1 className="header">Edit Property Details</h1>
                    {successMessage}
                    {errorMessage}
                    <div className="flex-container">
                        <div className="half">
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
                                name="imgSrc"
                                type="file"
                                component={FileInput}
                                label="Upload Image:"
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
                                name="description"
                                element="textarea"
                                component={Input}
                                label="Description:"
                                validate={[]}
                            />
                        </div>
                        <div className="half">
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
                        </div>
                    </div>
                    <div className="buttons">
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
                    </div>
                </form>
            </main>
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

export default connect(mapStateToProps)(formLink(EditProperty));