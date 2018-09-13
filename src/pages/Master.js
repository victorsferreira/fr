import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Page from './Page';
import Navbar from '../components/organisms/navbar';
import Sidebar from '../components/organisms/sidebar';

import { logout, loadSession } from '../redux/actions'

class Master extends Page {
  componentDidMount() {
    this.props.dispatch(loadSession());
  }

  componentDidUpdate() {
    if (this.props.session.loaded) {
      if (this.props.protected) {
        this.protect(this.props.protected);
      }
    }
  }

  isLoggedIn = () => {
    return !!this.props.session.token;
  };

  logout = () => {
    this.props.dispatch(logout())
      .then(() => {
        this.redirect('/login');
      });
  };

  redirect(location) {
    this.props.history.push(location);
  };

  protect(types) {
    const isAllowedType = types === 'any' ? true : types.includes(this.props.session.account.type);
    if (!this.isLoggedIn() || !isAllowedType) {
      this.redirect('/login');
    }
  }


  render() {
    const loggedIn = this.isLoggedIn();
    const { account, loaded } = this.props.session;
    const { type } = account;

    return (
      <div className="Master">
        {
          loaded ? (
            <Fragment>
              <Navbar logout={this.logout} loggedIn={loggedIn} />
              {loggedIn && <Sidebar type={type} />}
              {this.props.children}
            </Fragment>
          ) : 'Loading...'
        }
      </div>
    );
  }
}

const mapStateToProps = ({ session }) => {
  return { session };
};

export default connect(mapStateToProps)(Master);