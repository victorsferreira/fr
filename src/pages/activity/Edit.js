import React, { Component, Fragment } from 'react';
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
    this.props.dispatch(getResourceItem('activity', id, {scope: this}));
  }

  edit = (data) => {
    const { id } = this.props.match.params;
    this.props.dispatch(editResourceItem('activity', id, data))
  };

  render() {
    return (
      <div className="Edit">
        <h1>Editar atividade</h1>
        
        <Link to={'/activity'} />
        <Form {...this.props} {...this.state.item} save={this.edit} />
      </div>
    );
  }
}

export default connect()(Edit);