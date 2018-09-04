import React, { Component } from 'react';
import StyledTextArea from './styled';

export default class MultilineInput extends Component {
    constructor() {
        super();
    }    

    onChange = (e) => {
        const { value } = e.target;
        if (this.props.onChange) this.props.onChange(value);
    };

    render() {
        return (
            <StyledTextArea onChange={this.onChange} value={this.props.value} />
        );
    }
}