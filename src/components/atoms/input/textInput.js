import React, { Component } from 'react';
import { StyledInput } from './styled';

export default class TextInput extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    setValue(value = '') {
        this.setState({ value });
    }

    componentDidMount() {
        this.setValue(this.props.input);
    }

    componentDidUpdate(props) {
        if(props.input !== this.props.input) this.setValue(this.props.input);
    }

    onChange = (e) => {
        const { value } = e.target;
        this.props.onChange(value);
        this.setValue(value);
    };

    render() {
        return (
            <StyledInput onChange={this.onChange} type={this.props.type} value={this.state.value} />
        );
    }
}