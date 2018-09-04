import React, { Component } from 'react';
// import { StyledDatetimeInput } from './styled';
import { isNumeric } from '../../../libs/helpers';

const Datetime = require('react-datetime');

export default class DatetimeInput extends Component {
    constructor() {
        super();

        this.state = {
            value: new Date()
        };
    }

    setValue(value) {
        if (isNumeric(value)) {
            value = parseInt(value);
        }

        value = moment(value);
        this.setState({ value });
    }

    componentDidMount() {
        this.setValue(this.props.input);
    }

    componentDidUpdate(props) {
        if (this.props.input !== props.input) {
            this.setValue(this.props.input);
        }
    }

    onChange = (momentObject) => {
        // let changedValue; let value; 
        // changedValue = value = momentObject.valueOf();
        // if (this.props.format) changedValue = momentObject.format(this.props.format);

        // 
        this.setValue({ value: momentObject });
        let value = null;
        if (this.props.onChange) {
            if (this.props.format) value = momentObject.format(this.props.format);
            else value = momentObject.valueOf();

            this.props.onChange(value);
        }
    };

    render() {
        return (
            <Datetime defaultValue={this.state.value} onChange={this.onChange} />
        );
    }
}