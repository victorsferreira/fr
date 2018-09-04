import React, { Component } from 'react';
import StyledButton from './styled';

class Button extends Component {
  render() {
    return (
      <StyledButton {...this.props} type={this.props.onClick ? 'button' : null}>{this.props.children}</StyledButton>
    );
  }
}

export default Button;