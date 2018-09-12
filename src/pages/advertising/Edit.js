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
    this.props.dispatch(editResourceItem('advertising', id, data, {formData: true}))
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getResourceItem('advertising', id, { scope: this }));
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <div className="Edit">
        <h1>Editar anúncio</h1>
        
        <Link to={'/advertising'}>Lista de anúncios</Link>
        <Form {...this.props} {...this.state.item} save={this.edit} />
      </div>
    );
  }
}

export default connect()(Edit);