import React from 'react';
import { connect } from 'react-redux';

import Page from '../Page';
import Form from './Form';

import { editAccount, getResourceItem } from '../../redux/actions';

class Edit extends Page {
  constructor() {
    super();

    this.state = {
      item: null
    };
  }

  componentDidMount() {
    this.props.dispatch(getResourceItem('account', 'myself', { scope: this }));
  }

  edit = (data) => {
    this.props.dispatch(editAccount(data))
      .then(() => {
        this.redirect('/home');
      });
  };

  render() {
    const { type } = this.props.session.account;
    
    return (
      <div className="Edit">
        <h1>Editar conta</h1>

        <Form
          save={this.edit}
          fields={this.state.item}
          type={type}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ activity, session }) => {
  return { activity, session };
}

export default connect(mapStateToProps)(Edit);