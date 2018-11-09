import React from 'react';
import { connect } from 'react-redux';
import './EditImprovement.css';
import Input from './Input';
import { required } from '../validators';
import { reduxForm, Field, focus } from 'redux-form';
import { editImprovement, loadData as loadAccount, clearEditData, saveImprovement } from '../actions'


export class EditImprovement extends React.Component {
    componentDidMount() {
        this.props.dispatch(this.props.loadData(this.props.improvement))
    }
    componentWillUnmount() {
        this.props.dispatch(this.props.clearEditData())
    }
    onSubmit(values) {
        window.history.back();
        return this.props.dispatch(this.props.saveImprovement(values))
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
    const thisProperty = state.reducer.properties.find(property => property.slug === props.match.params.slug);
    const thisImprovement = thisProperty.improvements.find(improvement => improvement.id === parseInt(props.match.params.id));
    const improvement = Object.assign(
        {},
        thisImprovement
    );
    return {
        loadData: loadAccount,
        improvement,
        editImprovement,
        saveImprovement,
        clearEditData,
        initialValues: state.reducer.editPropertyData
    };
};
const formLink = reduxForm({
    form: 'editImprovement',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editImprovement', Object.keys(errors)[0]))
});
EditImprovement = formLink(EditImprovement);

export default connect(mapStateToProps)(EditImprovement);