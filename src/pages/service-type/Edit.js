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
    this.props.dispatch(editResourceItem('service-type', id, data, { formData: true }))
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getResourceItem('service-type', id, { scope: this }));
  }

  render() {
    return (
      <div className="Edit">
        <h1>Editar Tipo de serviço</h1>

        <Link to={'/service-type'}>Lista de tipos de serviço</Link>
        <Form {...this.props} {...this.state.item} save={this.edit} />
      </div>
    );
  }
}

export default connect()(Edit);