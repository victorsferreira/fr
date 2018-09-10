import React from 'react';
import { Link } from 'react-router-dom';
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
    this.props.dispatch(getResourceList('activity', { scope: this }))
  }

  onChange = (id, value) => {
    const { state } = this;
    state[id] = value;

    this.setState(state);
  };

  delete = (id) => {
    this.props.dispatch(deleteResourceItem('activity', id))
      .then(() => {
        this.reload();
      });
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

export default connect()(List);