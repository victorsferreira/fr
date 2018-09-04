import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        Home
        <Link to={'/login'}>To login</Link>
      </div>
    );
  }
}

export default Home