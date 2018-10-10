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
        <nav className="nav-style">
          <Link to="/">
            <button onClick={() => this.handleLogout}>Logout</button>
          </Link>

          <h2>Welcome, {this.state.loggedInUser.username}</h2>
        </nav>
      )
    } else {
      return (
        <div>
          <p>Para NavBar no estoy logado</p>
          <nav className="nav-style">
            <ul>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
            </ul>
          </nav>
        </div>
      )
    }
  }
}