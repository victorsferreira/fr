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
    this.props.dispatch(getResourceList('service-subcategory', { scope: this }))
  }

  onChange = (id, value) => {
    const { state } = this;
    state[id] = value;

    this.setState(state);
  };

  delete = (id) => {
    this.props.dispatch(deleteResourceItem('service-subcategory', id))
      .then(() => {
        this.reload();
      });
  };

  render() {
    return (
      <div className="List">
        <h1>Subcategorias de serviço</h1>
        
        <Link to={'/service-subcategory/create'}>Criar subcategoria de serviço</Link>
        {this.state.list.map((item) => {
          return (
            <Item {...item} delete={this.delete} />
          )
        })}
      </div>
    );
  }
}

export default connect()(List);