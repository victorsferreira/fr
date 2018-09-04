import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';

import { forgotPassword } from '../../redux/actions';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
      email: ''
    };
  }

  onChange = (id, value) => {
    const { state } = this;
    state[id] = value;
    
    this.setState(state);
  };

  forgotPassword = () => {
    // const { email } = this.props.account.fields;
    // this.props.dispatch(forgotPassword(email))
    //   .then(() => {
    //     this.setState({ success: true })
    //   });
    console.log(this.state)
  }

  render() {
    return (
      <div className="ForgotPassword">
        {
          this.state.success ? (
            <strong>
              Verifique o seu inbox e siga as instruções para criar uma nova senha.
            </strong>
          ) : (
              <div>
                <Input type="email" onChange={this.onChange.bind(this, 'email')} />
                <Button onClick={this.forgotPassword}>Enviar</Button>
              </div>
            )
        }
      </div>
    );
  }
}

const mapStateToProps = ({ account, session }) => {
  return { account, session };
};

export default connect(
  mapStateToProps
)(ForgotPassword);