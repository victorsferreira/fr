import React, { Component } from 'react';
import { StyledInput } from './styled';

export default class TextInput extends Component {
    constructor() {
        super();
    }

    onChange = (e) => {
        const { value } = e.target;
        if (this.props.onChange) this.props.onChange(value);
    };

    render() {
        return (
            <StyledInput {...this.props} onChange={this.onChange} />
        );
    }
}