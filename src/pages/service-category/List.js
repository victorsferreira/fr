import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import Item from './Item';

import { getResource } from '../../redux/actions'

class List extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };
  }

  onChange = (id, value) => {
    const { state } = this;
    state[id] = value;

    this.setState(state);
  };

  delete = (id) => {
    console.log(id);
  };

  render() {
    return (
      <div className="List">
        <h1>Categorias de serviço</h1>
        
        <Link to={'/service-category/create'}>Criar categoria de serviço</Link>
        {this.state.list.map((item, i) => {
          return (
            <Item key={i} {...item} delete={this.delete} />
          )
        })}
      </div>
    );
  }
}

export default List;