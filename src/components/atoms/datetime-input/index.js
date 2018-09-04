import React, { Component } from 'react';
const Datetime = require('react-datetime');

export default class DatetimeInput extends Component {
    constructor() {
        super();

        this.state = {
            value: new Date()
        };
    }

    onChange = (datetime) => {
        if (this.props.onChange) {
            const value = this.props.format ? datetime.format(this.props.format) : datetime.valueOf();            
            this.props.onChange(value);
        }
    };

    render() {
        return (
            <Datetime {...this.props} onChange={this.onChange} />
        );
    }
}