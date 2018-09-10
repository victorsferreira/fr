import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createResourceItem } from '../../redux/actions';

import Form from './Form';

class Create extends Component {
  create = (data) => {
    this.props.dispatch(createResourceItem('service-category', data))
  };

  render() {
    return (
      <div className="Create">
        <h1>Criar categoria de serviço</h1>
        
        <Link to={'/service-category'} />
        <Form {...this.props} save={this.create} />
      </div>
    );
  }
}

export default connect()(Create);