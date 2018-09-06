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
        <h1>Editar subcategoria de produto</h1>
        
        <Link to={'/product-subcategory'} />
        <Form {...this.props} save={this.edit} />
      </div>
    );
  }
}

export default Edit;