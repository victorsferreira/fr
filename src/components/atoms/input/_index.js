import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextInput from './textInput';
import ComboInput from './comboInput';
import MultilineInput from './multilineInput';
import MapInput from './mapInput';
import FileInput from './fileInput';
import ReferenceInput from './referenceInput';
import DatetimeInput from './datetimeInput';

import { removeCrudField, setCrudField } from '../../redux/actions';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  removeField = () => {
    if(this.props.id) this.props.dispatch(removeCrudField(this.props.resource, this.props.id));
  }

  // setValue = (value) => {
  //   if(this.props.id) this.props.dispatch(setCrudField(this.props.resource, this.props.id, value));
  // }

  onChange = (value) => {
    if(this.props.onChange) this.props.onChange(value);
  };

  render() {
    const props = {
      id: this.props.id,
      input: this.props.defaultValue,
      onChange: this.onChange,
      removeField: this.removeField,
      disabled: this.props.disabled
    }

    if (this.props.type === 'combo') {
      return (
        <ComboInput {...props} options={this.props.options} />
      );
    } else if (this.props.type === 'multiline') {
      return (
        <MultilineInput {...props} />
      );
    } else if (this.props.type === 'map') {
      return (
        <MapInput {...props} />
      );
    } else if (this.props.type === 'file') {
      return (
        <FileInput {...props} multiple={this.props.multiple} />
      );
    } else if (this.props.type === 'reference') {
      return (
        <ReferenceInput {...props} reference={this.props.reference} />
      );
    }else if (this.props.type === 'datetime') {
      return (
        <DatetimeInput {...props} />
      );
    } 

    return (
      <TextInput {...props} type={this.props.type} />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  defaultValue: PropTypes.any,
  resource: PropTypes.string,
  options: PropTypes.array
};

export default connect(null)(Input);