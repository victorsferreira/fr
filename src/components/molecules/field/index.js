import React, { Component } from 'react';
import Input from '../../atoms/input';
import StyledField from './styled';

class Field extends Component {
  render() {
    return (
      <StyledField className="field">
        {this.props.label && <label>{this.props.label}</label>}
        <Input {...this.props} />
      </StyledField>
    );
  }
}

export default Field;