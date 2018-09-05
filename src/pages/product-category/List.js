import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
 
import Item from './Item';

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
    const { type } = this.props.match.params;
    
    return (
      <div className="List">
        <h1>Categorias de produto</h1>
        
        <Link to={'/product-category/create'}>Criar categoria de produto</Link>
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