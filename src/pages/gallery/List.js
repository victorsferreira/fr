import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
    this.props.dispatch(getResourceList('gallery', { scope: this }))
  }

  onChange = (id, value) => {
    const { state } = this;
    state[id] = value;

    this.setState(state);
  };

  delete = (id) => {
    this.props.dispatch(deleteResourceItem('gallery', id))
      .then(() => {
        this.reload();
      });
  };

  render() {
    return (
      <div className="List">
        <h1>Categorias de galeria</h1>

        <Link to={'/gallery/create'}>Criar galeria</Link>
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