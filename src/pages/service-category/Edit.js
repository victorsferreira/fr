import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getResourceItem, editResourceItem } from '../../redux/actions';

import Form from './Form';

class Edit extends Component {
  constructor(){
    super();

    this.state = {
      item: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getResourceItem('service-category', id, {scope: this}));
  }

  edit = (data) => {
    const { id } = this.props.match.params;
    this.props.dispatch(editResourceItem('service-category', id, data))
  };

  render() {
    return (
      <div className="Edit">
        <h1>Editar categoria de serviço</h1>
        
        <Link to={'/service-category'} />
        <Form {...this.props} {...this.state.item} save={this.edit} />
      </div>
    );
  }
}

export default connect()(Edit);