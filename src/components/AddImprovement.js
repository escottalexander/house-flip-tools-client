import React from 'react';
import { connect } from 'react-redux';
import './AddImprovement.css';
import Input from './Input';
import { required } from '../validators';
import { reduxForm, Field } from 'redux-form';
import { addImprovement } from '../actions'


export class AddImprovement extends React.Component {
    onSubmit(values) {
        values.propertyId = this.props.property.propertyId;
        values.slug = this.props.property.slug;
        return this.props.dispatch(this.props.addImprovement(values))
            .then(() => window.history.back());
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
                className="AddImprovement"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h2 className="header">Add Improvement</h2>
                {successMessage}
                {errorMessage}
                <Field
                    name="name"
                    type="text"
                    component={Input}
                    label="Improvement:"
                    validate={[required]}
                />
                <Field
                    name="cost"
                    type="number"
                    component={Input}
                    label="Cost: $"
                    validate={[required]}
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
            </form>)
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
        addImprovement
    };
};
const formLink = reduxForm({
    form: 'addImprovement',
    // onSubmitFail: (errors, dispatch) =>
    //     dispatch(focus('addImprovement', Object.keys(errors)[0]))
});
AddImprovement = formLink(AddImprovement);

export default connect(mapStateToProps)(AddImprovement);