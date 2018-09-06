import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/atoms/button';

import Form from './Form';

class Edit extends Component {
  edit = (data) => {
    console.log(data)
  };

  render() {
    return (
      <div className="Edit">
        <h1>Editar Tipo de serviço</h1>
        
        <Link to={'/service-type'}>Lista de tipos de serviço</Link>
        <Form {...this.props} save={this.edit} />
      </div>
    );
  }
}

export default Edit;