import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';

class Edit extends Component {
  edit = (data) => {
    console.log(data)
  };

  render() {
    return (
      <div className="Edit">
        <h1>Editar subcategoria de serviço</h1>
        
        <Link to={'/service-subcategory'} />
        <Form {...this.props} save={this.edit} />
      </div>
    );
  }
}

export default Edit;