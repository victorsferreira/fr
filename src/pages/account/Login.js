import React, { Component } from 'react';

import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  login = () => {
    console.log(this.state)
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

export default Login;