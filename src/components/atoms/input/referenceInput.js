import React, { Component } from 'react';
import ComboInput from './comboInput';
import { connect } from 'react-redux';
import { getValueByFieldName } from '../../libs/helpers';

class ReferenceInput extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ComboInput {...this.props} options={this.props.options} />
        );
    }
}

export default connect((state, props) => {
    const options = getValueByFieldName(state, props.reference);
    return { options };
})(ReferenceInput);