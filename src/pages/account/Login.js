import React from 'react';
import { connect } from 'react-redux';

import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';

import Page from '../Page';

import { login } from '../../redux/actions';

class Login extends Page {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  login = () => {
    this.props.dispatch(login(this.state.username, this.state.password))
      .then(() => {
        this.redirect('/home');
      });
  };

  onChange = (id, value) => {
    const { state } = this;
    state[id] = value;

    this.setState(state);
  };

  render() {
    return (
      <div className="Login">
        <h1>Login</h1>

        <Input onChange={this.onChange.bind(this, 'username')} />
        <Input onChange={this.onChange.bind(this, 'password')} type="password" />

        <Button onClick={this.login}>Login</Button>

      </div>
    );
  }
}

export default connect()(Login);