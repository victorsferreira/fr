import React, { Component } from 'react';
import { StyledSelect } from './styled';

export default class ComboInput extends Component {
    constructor() {
        super();

        this.state = {
            value: ''
        };
    }

    onChange = (e) => {
        const { value } = e.target;
        this.setValue(value);
    };

    setValue(value = '') {
        this.setState({ value });
        this.props.onChange(value);
    }

    componentDidUpdate(props) {
        if (this.props.input !== props.input) {
            this.setValue(this.props.input);
        }
    }

    componentDidMount() {
        if (this.props.input) {
            this.setValue(this.props.input);
        } else {
            // Set the first value is the default value if none was defined
            const firstValue = this.props.options[0] ? (this.props.options[0].value || this.props.options[0].id) : null;
            if (firstValue) this.setValue(firstValue);
        }
    }

    render() {
        const options = this.props.options.map((option, i) => {
            const value = option.id || option.value;
            const text = option.name || option.text;

            return <option key={i} value={value}>{text}</option>
        });
        
        return (
            <StyledSelect onChange={this.onChange} value={this.state.value || ''}>
                {options}
            </StyledSelect>
        );
    }
}