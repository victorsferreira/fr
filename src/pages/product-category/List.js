import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Item from './Item';
import Page from '../Page';

import { getResourceList, deleteResourceItem } from '../../redux/actions';

class List extends Page {
  constructor() {
    super();

    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.props.dispatch(getResourceList('product-category', { scope: this }))
  }

  onChange = (id, value) => {
    const { state } = this;
    state[id] = value;

    this.setState(state);
  };

  delete = (id) => {
    this.props.dispatch(deleteResourceItem('product-category', id))
      .then(() => {
        this.reload();
      });
  };

  render() {
    const { type } = this.props.match.params;

    return (
      <div className="List">
        <h1>Categorias de produto</h1>

        <Link to={'/product-category/create'}>Criar categoria de produto</Link>
        {this.state.list.map((item, i) => {
          return (
            <Item key={i} {...item} delete={this.delete} />
          )
        })}
      </div>
    );
  }
}

export default connect()(List);