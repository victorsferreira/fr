import React, { Component } from 'react';
import ComboInput from '../combo-input';
import TextInput from '../text-input';
import DatetimeInput from '../datetime-input';
import MultilineInput from '../multiline-input';
import FileInput from '../../molecules/file-input';
import MapInput from '../../molecules/map-input';

export default class Input extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  onChange = (value) => {
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(value);
  }

  setValue(value = '') {
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(value);
  }

  componentDidUpdate(props) {
    if (this.props.value !== props.value) {
      this.setValue(this.props.value);
    }
  }

  componentDidMount() {
    if (this.props.value) {
      this.setValue(this.props.value);
    }
  }

  render() {
    const props = {
      ...this.props,
      onChange: this.onChange,
      removeField: this.removeField
    }

    if (this.props.type === 'combo') {
      return (
        <ComboInput {...props} options={this.props.options} value={this.state.value} />
      );
    }

    if (this.props.type === 'multiline') {
      return (
        <MultilineInput {...props} value={this.state.value} />
      );
    }

    if (this.props.type === 'file') {
      return (
        <FileInput {...props} value={this.state.value} />
      );
    }

    if (this.props.type === 'map') {
      return (
        <MapInput {...props} value={this.state.value} />
      );
    }

    if (this.props.type === 'datetime') {
      return (
        <DatetimeInput {...props} />
      );
    }

    return (
      <TextInput {...props}  value={this.state.value} type={this.props.type} />
    );
  }
}