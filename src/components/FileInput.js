import React from 'react'

export default class FileInput extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        //console.log(e.target.files[0])
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        const { input: { onChange } } = this.props;
        const fileReader = new FileReader();
        fileReader.addEventListener('load', () => {
            this.props.input.value = fileReader.result
            onChange(this.props.input.value)
        })
        fileReader.readAsDataURL(file)
    }

    render() {
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">{this.props.meta.warning}</div>
            );
        }

        return (
            <div className="form-input">
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                    {error}
                    {warning}
                </label>
                <input
                    type='file'
                    onChange={this.onChange}
                    accept=".jpeg, .png , .jpg"
                />
            </div>

        )
    }
}
