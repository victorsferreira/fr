import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createResourceItem } from '../../redux/actions';

import Form from './Form';

class Create extends Component {
  create = (data) => {
    this.props.dispatch(createResourceItem('gallery', data, {formData: true}));
  };

  render() {
    return (
      <div className="Create">
        <h1>Criar galeria</h1>
        
        <Link to={'/gallery'}>Lista de galerias</Link>
        <Form {...this.props} save={this.create} />
      </div>
    );
  }
}

export default connect()(Create);