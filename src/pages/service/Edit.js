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
    this.props.dispatch(editResourceItem('service', id, data, {formData: true}))
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getResourceItem('service', id, { scope: this }));
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <div className="Edit">
        <h1>Editar serviço</h1>
        
        <Link to={'/service'}>Lista de serviços</Link>
        <Link to={`/service-version/${id}/create`}>Criar tipo de serviço</Link>
        <Form {...this.props} {...this.state.item} save={this.edit} />
      </div>
    );
  }
}

export default connect()(Edit);