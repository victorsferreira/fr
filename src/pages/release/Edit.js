import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/atoms/button';

import Form from './Form';

class Edit extends Component {
  edit = (data) => {
    console.log(data)
  };

  render() {
    const { id } = this.props.match.params;
    return (
      <div className="Edit">
        <h1>Editar lançamento</h1>
        
        <Link to={'/release'}>Lista de lançamentos</Link>
        <Form {...this.props} save={this.edit} />
      </div>
    );
  }
}

export default Edit;