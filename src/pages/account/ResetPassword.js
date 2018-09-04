import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';

import { resetPassword } from '../../redux/actions';

class ResetPassword extends Component {
  constructor() {
    super();

    this.state = {
      password: ''
    };
  }
  
  resetPassword = () => {
    const { token } = this.props.match.params;
    const { password } = this.state;

    // this.props.dispatch(resetPassword(password, token))
    //   .then(() => {
    //     this.redirect('/login');
    //   });
  }

  onChange = (id, value) => {
    const { state } = this;
    state[id] = value;
    
    this.setState(state);
  };

  render() {
    return (
      <div>
        <div>
          <Input placeholder="password" onChange={this.onChange.bind(this, 'password')} type="password" />
          <Button onClick={this.resetPassword}>Enviar</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(
  mapStateToProps
)(ResetPassword);