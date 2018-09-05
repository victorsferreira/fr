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
        <h1>Criar atividade</h1>
        
        <Link to={'/activity'} />
        <Form save={this.create} />
      </div>
    );
  }
}

export default Create;