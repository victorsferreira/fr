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
        <h1>Atividade</h1>
        
        <Link to={'/activity/create'}>Criar categoria de atividade</Link>
        {this.state.list.map((item) => {
          return (
            <Item {...item} delete={this.delete} />
          )
        })}
      </div>
    );
  }
}

export default List;