import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getResourceItem, editResourceItem } from '../../redux/actions';

import Form from './Form';

class Edit extends Component {
  constructor() {
    super();

    this.state = {
      item: null
    };
  }

  edit = (data) => {
    const { id } = this.props.match.params;
    this.props.dispatch(editResourceItem('product-version', id, data, { formData: true }))
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getResourceItem('product-version', id, { scope: this }));
  }

  render() {
    return (
      <div className="Edit">
        <h1>Editar Versão de produto</h1>
        
        <Link to={'/product-version'}>Lista de Versão de produto</Link>
        <Form {...this.props} {...this.state.item} save={this.edit} />
      </div>
    );
  }
}

export default connect()(Edit);