import React, { Component } from 'react';
import { StyledSelect } from './styled';

export default class ComboInput extends Component {
    constructor() {
        super();
    }

    onChange = (e) => {
        const { value } = e.target;
        if (this.props.onChange) this.props.onChange(value);
    };

    render() {
        const options = this.props.options.map((option, i) => {
            return <option key={i} value={option.id}>{option.name}</option>
        });

        return (
            <StyledSelect {...this.props} onChange={this.onChange}>
                {options}
            </StyledSelect>
        );
    }
}