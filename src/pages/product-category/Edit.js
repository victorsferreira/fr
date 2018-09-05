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
        <h1>Editar categoria de produto</h1>
        
        <Link to={'/product-category'} />
        <Form save={this.edit} />
      </div>
    );
  }
}

export default Edit;