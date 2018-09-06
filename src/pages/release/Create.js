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
        <h1>Criar lançamento</h1>
        
        <Link to={'/release'}>Lista de lançamentos</Link>
        <Form {...this.props} save={this.create} />
      </div>
    );
  }
}

export default Create;