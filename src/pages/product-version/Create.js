import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';

class Create extends Component {
  create = (data) => {
    console.log(data)
  };

  render() {
    return (
      <div className="Create">
        <h1>Criar Versão de produto</h1>
        
        <Link to={'/product-version'}>Lista de Versão de produto</Link>
        <Form {...this.props} save={this.create} />
      </div>
    );
  }
}

export default Create;