import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/organisms/navbar';

class Master extends Component {
  isLoggedIn = () => {
    return !!this.props.session.token;
  };

  logout = () => {
    this.props.dispatch(logout());
  };

  render() {
    return (
      <div className="Master">
        <Navbar logout={this.logout} loggedIn={this.isLoggedIn()} />

        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = ({ session }) => {
  return { session };
};

export default connect(mapStateToProps)(Master);