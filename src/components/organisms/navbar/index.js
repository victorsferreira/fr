import React, { Component } from 'react';
import StyledNavbar from './styled';
import { Link } from 'react-router-dom';
import Button from '../../atoms/button';

class Navbar extends Component {
    render() {
        let buttons = null;

        if (this.props.loggedIn) {
            buttons = (
                <div>
                    <Button onClick={this.props.logout}>Logout</Button>
                </div>
            );
        } else {
            buttons = (
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/forgot-password">Forgot Password</Link>
                </div>
            );
        }

        return (
            <StyledNavbar>
                {buttons}
            </StyledNavbar>
        );
    }
}

export default Navbar;