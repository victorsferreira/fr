import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createResourceItem } from '../../redux/actions';

import Form from './Form';

class Create extends Component {
  create = (data) => {
    this.props.dispatch(createResourceItem('service', data, {formData: true}));
  };

  render() {
    return (
      <div className="Create">
        <h1>Criar serviço</h1>
        
        <Link to={'/service'}>Lista de serviços</Link>
        <Form {...this.props} save={this.create} />
      </div>
    );
  }
}

export default connect()(Create);