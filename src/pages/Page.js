import React, { Component } from 'react';
import { logout } from '../redux/actions';

class Page extends Component {
  isLoggedIn = () => {
    return !!this.props.session.token;
  };

  logout = () => {
    this.props.dispatch(logout());
  };

  redirect(location) {
    this.props.history.push(location);
  };

  reload() {
      window.location.reload();
  }

  render() {
    return (
      <div className="Page">
        {this.props.children}
      </div>
    );
  }
}
export default Page;