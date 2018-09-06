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
        <h1>Editar atividade</h1>
        
        <Link to={'/activity'} />
        <Form {...this.props} save={this.edit} />
      </div>
    );
  }
}

export default Edit;