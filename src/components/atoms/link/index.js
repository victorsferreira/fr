import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// import StyledLink from './styled';
class Link extends Component {
    render() {
        return (
            <RouterLink {...this.props}>{this.props.children}</RouterLink>
        );
    }
}

export default Link;