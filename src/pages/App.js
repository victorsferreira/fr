import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, login, pingOpen, pingProtected, logout } from '../redux/actions/yousages';
import "../style.scss";

class App extends Component {
  login() {
    this.props.dispatch(login());
  }
  
  logout() {
    this.props.dispatch(logout());
  }

  pingProtected() {
    this.props.dispatch(pingProtected(this.props.yousages.token));
  }

  pingOpen() {
    this.props.dispatch(pingOpen(-1));
  }

  increase(){
    this.props.dispatch(addItem(1));
  }

  decrease(){
    this.props.dispatch(addItem(+-1));
  }

  render() {
    return (
      <div className="App">
        total: {this.props.yousages.total}
        now: {this.props.yousages.now}
        <button onClick={() => { this.login() }}>Login</button>
        <button onClick={() => { this.logout() }}>Logout</button>
        <button onClick={() => { this.pingProtected() }}>Ping Protected</button>
        <button onClick={() => { this.pingOpen() }}>Ping Open</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(
  mapStateToProps
)(App);