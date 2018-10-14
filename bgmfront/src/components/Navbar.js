import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from './auth/AuthService';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  }

  handleLogout = (e) => {
    this.props.logout()
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="navbar">
          <img src={this.state.loggedInUser.avatarPath} alt=""></img>
          <h2>{this.state.loggedInUser.username}</h2>
          <Link to="/"><button onClick={this.handleLogout}>Log out</button></Link>
        </nav>
      )
    } else {
      return (
        <div>
          <nav className="navbar">
          <Link to="/signup"><button>Sign up</button></Link>
          <Link to="/login"><button>Log in</button></Link>
          </nav>
        </div>
      )
    }
  }
}