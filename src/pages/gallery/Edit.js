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
    this.props.dispatch(editResourceItem('gallery', id, data, {formData: true}))
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getResourceItem('gallery', id, { scope: this }));
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <div className="Edit">
        <h1>Editar galeria</h1>
        
        <Link to={'/gallery'}>Lista de galerias</Link>
        <Link to={`/gallery/${id}/photos`}>Fotos da galeria</Link>
        <Form {...this.props} {...this.state.item} save={this.edit} />
      </div>
    );
  }
}

export default connect()(Edit);