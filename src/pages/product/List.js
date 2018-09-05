import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Item from './Item';

class List extends Component {
  constructor() {
    super();

    this.state = {
      list: [
        {
          id: 'product-1',
          name: 'Product 1'
        }
      ]
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
    const { type } = this.props.match.params;

    return (
      <div className="List">
        <h1>Categorias de produto</h1>

        <Link to={'/product/create'}>Criar produto</Link>
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