import React, { Component } from 'react';
import { StyledTextArea } from './styled';

export default class MultilineInput extends Component {
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
            <StyledTextArea onChange={this.onChange} value={this.state.value} />
        );
    }
}