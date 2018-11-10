import React from 'react'

export default class FileInput extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        console.log(e.target.files[0])
        const file = e.target.files[0];
        if (!file) {
            console.log("!file")
            return
        }
        const { input: { onChange } } = this.props;
        const fileReader = new FileReader();
        fileReader.addEventListener('load', () => {
            console.log(fileReader.result)
            this.props.input.value = fileReader.result
            console.log(this.props.input.value)
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
        const { input: { value } } = this.props
        const { input, label, required, meta, } = this.props
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
