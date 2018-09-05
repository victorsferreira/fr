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
                    <Link to="/account/create/user">Criar usuário</Link>
                    <Link to="/account/create/partner">Criar marca</Link>
                    <Link to="/account/create/seller">Criar vendedor</Link>
                    <Link to="/forgot-password">Esqueci a Senha</Link>
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